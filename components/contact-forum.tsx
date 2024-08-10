"use client";

import React, { useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import SubmitBtn from "./submit-btn";
import { toast } from "@pheralb/toast";

function ContactForm() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = {
      email: event.target.senderEmail.value,
      message: event.target.message.value,
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = "api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    const result = await response.json();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10">
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
