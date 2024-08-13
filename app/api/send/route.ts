"use server";

import { Resend } from "resend";
// import { validateString, getErrorMessage } from "@/lib/utils";
import ContactTemplate from "@/components/email-template";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const senderEmail = formData.get("email");
    const message = formData.get("messsage");

    if (!senderEmail || !message) {
      return NextResponse.json(
        { error: "Email and message fields are required." },
        { status: 200 },
      );
    }

    const senderEmailStr = senderEmail.toString();
    const messageStr = message.toString();

    const { data, error } = await resend.emails.send({
      from: "MGWebs Contact <noreply@mgwebs.com>",
      to: ["mikeygeraghty@gmail.com"],
      subject: "Contact Form",
      react: ContactTemplate({
        message: messageStr,
        senderEmail: senderEmailStr,
      }),
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
