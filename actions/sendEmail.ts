"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/components/email-template";
// import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

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
    data = await resend.emails.send({
      from: "Contact Form <noreply@mgwebs.com>",
      to: "mikeygeraghty@gmail.com",
      subject: "Message from contact form",
      replyTo: senderEmail,
      react: ContactFormEmail({ message: message, senderEmail: senderEmail }),
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
