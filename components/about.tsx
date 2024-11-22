"use client";

import { Avatar, Card } from "@nextui-org/react";
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
      className="mb-28 flex min-h-[45vh] w-full scroll-mt-[10rem] flex-col items-center leading-6 sm:mb-40 "
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.175 }}
    >
      <div className="flex w-full items-baseline justify-between">
        <h3 className="mb-[1.25rem] text-3xl font-medium">About Me</h3>
        <Avatar src={avatarImg.src} className="h-16 w-16 text-large" />
      </div>
      <Card className="relative mt-8 flex max-h-[20.5rem] w-[42rem] flex-1 overflow-hidden last:mb-0 sm:mb-2 sm:h-[18rem]">
        <div className="flex h-full flex-col items-center px-6 py-4 sm:px-6 sm:pb-8 sm:pt-8 ">
          <p className="mb-3 leading-6 text-zinc-300 sm:w-[33rem] sm:text-xl">
            Hello! I&apos;m Michael Geraghty, a dedicated{" "}
            <span className="font-medium text-zinc-100">Web Developer</span>{" "}
            based in the Canary Islands. I have completed vocational courses in
            <span className="font-medium text-zinc-100">
              {" "}
              Microcomputer Systems and Networks
            </span>
            , and{" "}
            <span className="font-medium text-zinc-100">
              Web Application Development
            </span>
            , providing me with a solid foundation in both hardware and
            software.
          </p>
          <p className="mb-3 text-zinc-300 sm:w-[33rem] sm:text-xl">
            Skilled in UI design and Next.Js, I focus on building intuitive,
            user-driven websites. I thrive on feedback and detail, ensuring
            every project is a step towards digital excellence.
          </p>
        </div>
      </Card>
    </motion.section>
  );
}
