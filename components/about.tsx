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
      className="section-margin flex min-h-[45vh] w-full scroll-mt-[10rem] flex-col items-center leading-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.175 }}
    >
      <div className="section-header flex w-full items-baseline justify-between">
        <h3 className="text-responsive-xl font-bold tracking-tight text-primary">
          About Me
        </h3>
        <Avatar
          src={avatarImg.src}
          className="h-12 w-12 text-large sm:h-16 sm:w-16"
        />
      </div>
      <Card className="relative flex flex-1 overflow-hidden last:mb-0 sm:mb-2 sm:h-[18rem] sm:w-[42rem]">
        <div className="flex h-full flex-col items-center px-4 py-6 sm:px-6 sm:pb-8 sm:pt-8">
          <p className="text-muted mb-4 text-sm font-normal leading-relaxed sm:w-[33rem] sm:text-base">
            Hello! I&apos;m Michael Geraghty, a dedicated{" "}
            <span className="font-semibold text-primary">Web Developer</span>{" "}
            based in the Canary Islands. I have completed vocational courses in
            <span className="font-semibold text-primary">
              {" "}
              Microcomputer Systems and Networks
            </span>
            , and{" "}
            <span className="font-semibold text-primary">
              Web Application Development
            </span>
            , providing me with a solid foundation in both hardware and
            software.
          </p>
          <p className="text-muted text-sm font-normal leading-relaxed sm:w-[33rem] sm:text-base">
            Skilled in UI design and Next.Js, I focus on building intuitive,
            user-driven websites. I thrive on feedback and detail, ensuring
            every project is a step towards digital excellence.
          </p>
        </div>
      </Card>
    </motion.section>
  );
}
