"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 mt-[7.5rem] flex min-h-[40svh] w-full flex-grow scroll-mt-[100rem] flex-col justify-around gap-5 sm:mb-[11rem] sm:min-h-[60svh]"
    >
      <motion.h4
        className="w-full rounded-lg px-4 py-1 text-center text-[1.5rem] text-purple-300"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        Hey, I&apos;m Michael 👋
      </motion.h4>
      <div className="flex flex-col gap-10">
        <motion.h1
          className="mb-3 max-w-[10ch] text-6xl font-bold sm:max-w-[13ch] sm:text-7xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="gradient-text">Web Developer</span>{" "}
          <span className="texStroke">& Designer</span>
        </motion.h1>
        <motion.p
          className="text-gray-300 max-w-[40ch] text-xl sm:text-3xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          I&apos;m on a mission to create captivating, enjoyable, and
          user-oriented digital experiences
        </motion.p>
        <motion.div
          className="flex gap-2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Button
            className="bg-gradient-to-r from-purple-500 to-pink-500 font-medium text-white"
            size="lg"
            radius="md"
          >
            <Link href="#contact" className="text-lg font-medium">
              Contact me <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </Button>
          <Button radius="md" isIconOnly className="glass h-[48px] w-[48px]">
            <Link href="https://twitter.com/MGWebss" className="text-lg ">
              <FontAwesomeIcon icon={faXTwitter} size="1x" />
            </Link>
          </Button>
          <Button radius="md" isIconOnly className="glass h-[48px] w-[48px]">
            <Link
              href="https://www.linkedin.com/in/michaeldanielgeraghty/"
              className="text-lg "
            >
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
