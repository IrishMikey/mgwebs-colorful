"use server";

import nodemailer from "nodemailer";
import { render } from "react-email";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/components/email-template";

const CONTACT_FROM_EMAIL = "MGWebs Contact Form <info@mgwebs.com>";
const CONTACT_TO_EMAIL = "mikeygeraghty@gmail.com";

type RecaptchaResponse = {
  success: boolean;
  score?: number;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

const verifyRecaptcha = async (token: string) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    throw new Error("Missing reCAPTCHA secret key");
  }

  const params = new URLSearchParams();
  params.append("secret", secret);
  params.append("response", token);

  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to reach reCAPTCHA verify endpoint");
  }

  const result = (await response.json()) as RecaptchaResponse;
  return result;
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

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");
  const recaptchaToken = formData.get("recaptchaToken");

  if (!validateString(recaptchaToken, 2000)) {
    return {
      error: "Missing reCAPTCHA token",
    };
  }

  try {
    const verification = await verifyRecaptcha(recaptchaToken as string);

    if (
      !verification.success ||
      (typeof verification.score === "number" && verification.score < 0.5)
    ) {
      return {
        error: "Failed spam protection.",
      };
    }
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    const transporter = getTransporter();
    const emailElement = ContactFormEmail({ message, senderEmail });
    const [html, text] = await Promise.all([
      render(emailElement),
      render(emailElement, { plainText: true }),
    ]);

    data = await transporter.sendMail({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: senderEmail,
      subject: "Message from contact form",
      html,
      text,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
