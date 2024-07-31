"use client";
import { Input, Textarea, Button, Link } from "@nextui-org/react";
import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-28 flex w-full scroll-mt-[7rem] flex-col leading-8 sm:mb-40 relative"
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
          className="text-md rounded-xl bg-zinc-800 text-zinc-300"
          isBlock
          href="mailto:mikeygeraghty@gmail.com"
        >
          Email
        </Link>
        <Link
          className="text-md rounded-xl bg-zinc-800 text-zinc-300"
          isBlock
          href="https://www.linkedin.com/in/michaeldanielgeraghty/"
        >
          LinkedIn
        </Link>
        <Link
          className="text-md rounded-xl  bg-zinc-800 text-zinc-300"
          isBlock
          href="https://twitter.com/MGWebss"
        >
          X
        </Link>
      </span>
      <div className="bg-[#222222] flex justify-center items-center z-10  bg-opacity-75 shadow-lg w-full shadow-black/[0.03] backdrop-blur-[0.05rem] h-[276px] absolute bottom-[-20px] rounded-lg">
      <span className="">Coming soon</span></div>
        <form className="mt-10 mx-4">
          <Input
            type="email"
            label="Email"
            isDisabled
            className="h-14"
          />
          <Textarea
            label="Message"
            placeholder=""
            isDisabled
            className="h-50 my-3 mt-5"
          ></Textarea>
          <Button
            color="default"
            isDisabled
            className=" text-lg font-bold"
            size="lg"
          >
            Send
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </form>
      
    </motion.section>
  );
}
