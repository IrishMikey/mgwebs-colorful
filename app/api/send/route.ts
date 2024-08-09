"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'MGWebs <noreply@mgwebs.com>',
      to: ['mikeygeraghty@gmail.com'],
      subject: 'Hello world',
      react: ContactFormEmail({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
