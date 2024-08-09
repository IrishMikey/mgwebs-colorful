"use client";

import React, { useState } from 'react';
import { FormEvent } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { sendEmail } from "@/app/api/send/route";
import SubmitBtn from "./submit-btn";
import { toast } from "@pheralb/toast";

const ContactForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsSubmitting(true);
  
      const formData = new FormData(event.currentTarget);
  
      try {
        const response = await fetch('/api/send', {
          method: 'POST',
          body: formData,
        });
  
        const result = await response.json();
  
        if (!response.ok) {
          throw new Error(result.error || 'Something went wrong');
        }
  
        toast.success("Message sent!🫡");
      } catch (error) {
        toast.error(error.message || 'An error occurred');
      } finally {
        setIsSubmitting(false);
      }
    };
  
    return (
      <form className="mt-10" onSubmit={handleSubmit}>
        <Input type="email" label="Email" className="h-14" name="senderEmail" required />
        <Textarea label="Leave a message" name="message" className="h-50 mb-5 mt-3" required />
        <SubmitBtn />
      </form>
    );
  };
  
  export default ContactForm;
