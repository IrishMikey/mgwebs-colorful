"use client";

import { Avatar } from "@nextui-org/react";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import avatarImg from "@/public/headshot.jpg";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 min-h-[45vh] scroll-mt-[10rem] leading-6 sm:mb-40 "
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.175 }}
    >
      <div className="flex w-full items-baseline justify-between">
        <h3 className="mb-[1.25rem] text-3xl font-medium">About Me</h3>
        <Avatar src={avatarImg.src} className="h-16 w-16 text-large" />
      </div>
      <div className="flex flex-col justify-center ">
        <p className="mb-3 leading-6 text-zinc-400 sm:w-[33rem] sm:text-xl">
          Hello! I&apos;m Michael Geraghty, a dedicated{" "}
          <span className="font-medium text-zinc-100">Web Developer</span> based
          in the Canary Islands. I have completed vocational courses in
          <span className="font-medium text-zinc-100">
            {" "}
            Microcomputer Systems and Networks
          </span>
          , and{" "}
          <span className="font-medium text-zinc-100">
            Web Application Development
          </span>
          , providing me with a solid foundation in both hardware and software.
        </p>
        <p className="mb-3 text-zinc-400 sm:w-[33rem] sm:text-xl">
          Skilled in UI design and Next.Js, I focus on building intuitive,
          user-driven websites. I thrive on feedback and detail, ensuring every
          project is a step towards digital excellence.
        </p>
      </div>
    </motion.section>
  );
}
