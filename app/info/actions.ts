"use server";

import { Resend } from "resend";
import {
  SERVICES,
  BUDGETS,
  TIMELINES,
  type Enquiry,
} from "@/lib/enquiry-options";
import { autoReply, notification } from "@/lib/email/enquiry";

// Lazy: `new Resend()` throws synchronously if the key is missing, so
// constructing it at module scope would crash the whole route on import.
const getResend = () => new Resend(process.env.RESEND_API_KEY);

type Field = "name" | "email" | "services" | "budget" | "timeline";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  message?: string;
  bookingUrl?: string;
  errors?: Partial<Record<Field, string>>;
  values?: {
    name?: string;
    email?: string;
    services?: string[];
    budget?: string;
    timeline?: string;
  };
};

const text = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

async function trySend(
  resend: Resend,
  payload: Parameters<Resend["emails"]["send"]>[0],
) {
  try {
    const { error } = await resend.emails.send(payload);
    return { ok: !error, error };
  } catch (error) {
    return { ok: false, error };
  }
}

export async function submitEnquiry(
  _prev: EnquiryState,
  formData: FormData,
): Promise<EnquiryState> {
  const renderedAt = Number(text(formData, "rendered_at"));
  const tooFast =
    Number.isFinite(renderedAt) && Date.now() - renderedAt < 2000;

  // Honeypot, or submitted suspiciously fast: pretend it worked, do nothing.
  if (text(formData, "company_website") || tooFast) {
    return { status: "success" };
  }

  const name = text(formData, "name");
  const email = text(formData, "email");
  const services = formData
    .getAll("services")
    .filter((value): value is string => typeof value === "string");
  const budget = text(formData, "budget");
  const timeline = text(formData, "timeline");
  const source = text(formData, "source") || "direct";

  const values = { name, email, services, budget, timeline };

  const errors: EnquiryState["errors"] = {};
  if (!name || name.length < 1 || name.length > 80)
    errors.name = "Please enter your name.";
  if (!email || !isEmail(email))
    errors.email = "Please enter a valid email address.";
  if (
    services.length === 0 ||
    !services.every((service) => (SERVICES as readonly string[]).includes(service))
  )
    errors.services = "Please choose at least one.";
  if (!budget || !(BUDGETS as readonly string[]).includes(budget))
    errors.budget = "Please choose a budget.";
  if (!timeline || !(TIMELINES as readonly string[]).includes(timeline))
    errors.timeline = "Please choose a timeline.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
      values,
    };
  }

  const enquiry: Enquiry = {
    name,
    email,
    services: services as Enquiry["services"],
    budget: budget as Enquiry["budget"],
    timeline: timeline as Enquiry["timeline"],
    source,
  };

  let resend: Resend;
  try {
    resend = getResend();
  } catch (error) {
    console.error("Resend is not configured", error);
    return {
      status: "error",
      message: "Something went wrong. Email me at info@mgwebs.com instead.",
      values,
    };
  }

  const [firstName, ...rest] = name.split(/\s+/);
  const lastName = rest.join(" ") || undefined;
  const segmentId = process.env.RESEND_SEGMENT_ID;
  const properties = {
    services: enquiry.services.join(", "),
    budget: enquiry.budget,
    timeline: enquiry.timeline,
    source: enquiry.source,
  };

  try {
    const created = await resend.contacts.create({
      email,
      firstName,
      lastName,
      unsubscribed: false,
      properties,
      segments: segmentId ? [{ id: segmentId }] : undefined,
    });

    if (created.error) {
      const updated = await resend.contacts.update({
        email,
        firstName,
        lastName,
        properties,
      });
      if (updated.error) {
        console.error("Failed to save enquiry contact", updated.error);
      } else if (segmentId) {
        const added = await resend.contacts.segments.add({
          email,
          segmentId,
        });
        if (added.error) {
          console.error(
            "Failed to add enquiry contact to segment",
            added.error,
          );
        }
      }
    }
  } catch (error) {
    console.error("Failed to save enquiry contact", error);
  }

  const bookingUrl = process.env.BOOKING_URL ?? "https://mgwebs.com";
  const mailFrom = process.env.MAIL_FROM ?? "MGWebs <info@mgwebs.com>";
  const contactTo = process.env.CONTACT_TO ?? "info@mgwebs.com";

  const notify = notification(enquiry);
  const reply = autoReply(enquiry, bookingUrl);

  const [notificationResult, autoReplyResult] = await Promise.allSettled([
    trySend(resend, {
      from: mailFrom,
      to: contactTo,
      replyTo: email,
      subject: notify.subject,
      text: notify.text,
      html: notify.html,
    }),
    trySend(resend, {
      from: mailFrom,
      to: email,
      replyTo: contactTo,
      subject: reply.subject,
      text: reply.text,
      html: reply.html,
    }),
  ]);

  const notificationOk =
    notificationResult.status === "fulfilled" && notificationResult.value.ok;

  if (!notificationOk) {
    const reason =
      notificationResult.status === "fulfilled"
        ? notificationResult.value.error
        : notificationResult.reason;
    console.error("Failed to send enquiry notification", reason);
    return {
      status: "error",
      message: "Something went wrong. Email me at info@mgwebs.com instead.",
      values,
    };
  }

  const autoReplyOk =
    autoReplyResult.status === "fulfilled" && autoReplyResult.value.ok;
  if (!autoReplyOk) {
    const reason =
      autoReplyResult.status === "fulfilled"
        ? autoReplyResult.value.error
        : autoReplyResult.reason;
    console.error("Failed to send enquiry auto reply", reason);
  }

  return { status: "success", bookingUrl };
}
