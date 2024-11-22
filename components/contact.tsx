"use client";
import { Input, Textarea, Link } from "@nextui-org/react";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import { toast, Toaster } from "@pheralb/toast";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

      <div className="mt-10 flex w-full flex-col items-center ">
        <div className="mb-4 flex w-full gap-3 sm:w-[43rem] sm:text-xl">
          <Link
            className=" text-gray-500 hover:text-gray-300 flex items-center justify-center  rounded-lg bg-zinc-900 px-3 py-3 text-[20px] transition"
            isBlock
            href="mailto:mikeygeraghty@gmail.com"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              title="Link to send an email"
            />
          </Link>
          <Link
            className=" text-gray-500 hover:text-gray-300 flex items-center justify-center  rounded-lg bg-zinc-900 px-3 py-3 text-[20px] transition"
            isBlock
            href="https://www.linkedin.com/in/michaeldanielgeraghty/"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              title="Link to LinkedIn"
            />
          </Link>
          <Link
            className=" text-gray-500 hover:text-gray-300 flex items-center justify-center  rounded-lg bg-zinc-900 px-3 py-3 text-[20px] transition"
            isBlock
            href="https://twitter.com/MGWebss"
          >
            <FontAwesomeIcon
              icon={faXTwitter}
              size="2x"
              title="Link to X (Twitter)"
            />
          </Link>
        </div>
        <form
          className="w-full rounded-xl bg-zinc-900 px-6 py-4 sm:w-[43rem] sm:px-6 sm:pb-8 sm:pt-8 "
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error({ text: "error" });
              return;
            }

            toast.success({ text: "message sent" });
          }}
        >
          <Input
            type="email"
            label="Email"
            className="h-14"
            name="senderEmail"
          />
          <Textarea
            label="Leave a messsage"
            name="message"
            className="h-50 mb-5 mt-3"
          ></Textarea>
          <SubmitBtn />
        </form>
      </div>
    </motion.section>
  );
}
