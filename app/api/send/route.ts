"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/components/email-template";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: Request) {
  // Extract form data from the request
  const formData = await request.formData();

  // You can now access the form fields using formData.get("fieldName")
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Pass the formData object to your sendEmail function
  const result = await sendEmail(formData);

  if (result.error) {
    return Response.json({ error: result.error }, { status: 400 });
  }

  return NextResponse.json({ success: true, data: result.data });
}


export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

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
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
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