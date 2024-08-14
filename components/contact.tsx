"use client";
import { Input, Textarea, Link } from "@nextui-org/react";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import { toast, Toaster } from "@pheralb/toast";
import { text } from "stream/consumers";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="relative mb-28 flex min-h-[35rem] w-full scroll-mt-[7rem] flex-col leading-8 sm:mb-40"
      viewport={{ once: true }}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <h3 className="mb-[1.25rem] text-3xl font-medium">Contact</h3>
      <span className="mb-3 text-zinc-300 sm:max-w-[75ch] sm:text-xl">
        Connect with me for collaborations, questions, or just to say hello!
      </span>
      <span className=" mb-3 flex gap-2 sm:text-xl">
        <Link
          className="text-md min-w-[4.812rem] justify-center rounded-xl  bg-zinc-800 text-zinc-300"
          isBlock
          href="mailto:mikeygeraghty@gmail.com"
        >
          Email
        </Link>
        <Link
          className="text-md min-w-[4.812rem] justify-center rounded-xl  bg-zinc-800 text-zinc-300"
          isBlock
          href="https://www.linkedin.com/in/michaeldanielgeraghty/"
        >
          LinkedIn
        </Link>
        <Link
          className="text-md min-w-[4.812rem] justify-center rounded-xl bg-zinc-800 text-zinc-300"
          isBlock
          href="https://twitter.com/MGWebss"
        >
          X
        </Link>
      </span>

      <form
        className="mt-10"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error({ text: "error" });
            return;
          }

          toast.success({ text: "message sent" });
        }}
      >
        <Input type="email" label="Email" className="h-14" name="senderEmail" />
        <Textarea
          label="Leave a messsage"
          name="message"
          className="h-50 mb-5 mt-3"
        ></Textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
