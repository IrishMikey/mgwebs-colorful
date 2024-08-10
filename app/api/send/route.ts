"use server";

import { Resend } from "resend";
// import { validateString, getErrorMessage } from "@/lib/utils";
import ContactTemplateProps from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "MGWebs Contact <noreply@mgwebs.com>",
      to: ["mikeygeraghty@gmail.com"],
      subject: "Hello world",
      react: ContactTemplateProps({
        message: "Hi",
        senderEmail: "test@gmail.com",
      }),
    });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
