"use server";

import nodemailer from "nodemailer";
import { render } from "react-email";
import AuditRequestEmail from "@/components/email-template";

const FROM_EMAIL = "MGWebs Speed Check <info@mgwebs.com>";
const TO_EMAIL = "mikeygeraghty@gmail.com";

type Field = "name" | "website" | "contact";

export type AuditState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<Field, string>>;
  values?: Partial<Record<Field, string>>;
};

const getTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;

  if (!host || !user || !password) {
    throw new Error("Missing SMTP configuration");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: password },
  });
};

const text = (formData: FormData, key: string) => {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
};

/** Accepts "example.ie", "www.example.ie" or a full URL; returns a full https URL or null. */
const normaliseWebsite = (input: string) => {
  if (!input || input.length > 500) return null;
  const withProtocol = /^https?:\/\//i.test(input) ? input : `https://${input}`;
  try {
    const url = new URL(withProtocol);
    return url.hostname.includes(".") ? url.toString() : null;
  } catch {
    return null;
  }
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isPhone = (value: string) =>
  /^[+()\d\s-]+$/.test(value) && value.replace(/\D/g, "").length >= 7;

export async function requestAudit(
  _prev: AuditState,
  formData: FormData,
): Promise<AuditState> {
  // Honeypot: real visitors never see or fill this field. Pretend it worked.
  if (text(formData, "company")) {
    return { status: "success" };
  }

  const name = text(formData, "name");
  const websiteInput = text(formData, "website");
  const contact = text(formData, "contact");
  const values = { name, website: websiteInput, contact };

  const website = normaliseWebsite(websiteInput);
  const errors: AuditState["errors"] = {};
  if (!name || name.length > 200) errors.name = "Please enter your name.";
  if (!website)
    errors.website = "Please enter your web address, for example mybusiness.ie";
  if (!contact || contact.length > 200 || !(isEmail(contact) || isPhone(contact)))
    errors.contact = "Please enter an email address or phone number.";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please check the highlighted fields.",
      errors,
      values,
    };
  }

  try {
    const email = AuditRequestEmail({ name, website: website!, contact });
    const [html, plainText] = await Promise.all([
      render(email),
      render(email, { plainText: true }),
    ]);

    await getTransporter().sendMail({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: isEmail(contact) ? contact : undefined,
      subject: `Speed check request: ${website}`,
      html,
      text: plainText,
    });
  } catch (error) {
    console.error("Failed to send speed check request", error);
    return {
      status: "error",
      message:
        "Sorry, something went wrong sending your request. Please try again, or ring me instead.",
      values,
    };
  }

  return { status: "success" };
}
