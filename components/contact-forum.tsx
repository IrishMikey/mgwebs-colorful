"use client";

import React from "react";
import { Input, Textarea } from "@nextui-org/react";
import SubmitBtn from "./submit-btn";
import { toast } from "@pheralb/toast";
import { useFormStatus } from "react-dom";
import { sendContact } from "@/lib/actions";

function ContactForm() {
  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);

  //   console.log(formData);

  //   const response = await fetch("/api/send", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const result = await response.json();

  //   if (response.ok) {
  //     console.log("Email sent succesfully!: ", result);
  //     toast.success({ text: "Email sent succesfully!" });
  //   }
  //   console.log("Email not sent: ", result.error);
  //   toast.warning({ text: "Email not sent!" });
  // };

  // async function sendContact(formData: FormData) {

  //   fetch("/api/send", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   console.log(formData);

  //   const response = await fetch("/api/send", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   const result = await response.json();

  //   if (response.ok) {
  //     console.log("Email sent succesfully!: ", result);
  //     toast.success({ text: "Email sent succesfully!" });
  //   }
  //   console.log("Email not sent: ", result.error);
  //   toast.warning({ text: "Email not sent!" });
  // }

  return (
    <form action={sendContact} className="sm:w-[31rem]">
      <Input
        type="email"
        label="Email"
        className="h-14"
        name="senderEmail"
        required
      />
      <Textarea
        label="Leave a message"
        name="message"
        className="h-50 mb-5 mt-3"
        required
      />
      <SubmitBtn />
    </form>
  );
}

export default ContactForm;
