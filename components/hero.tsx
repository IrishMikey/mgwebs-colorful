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
      className="hero-spacing flex min-h-[40svh] w-full flex-grow scroll-mt-[100rem] flex-col justify-around sm:min-h-[60svh]"
    >
      <motion.h4
        className="text-responsive-lg text-accent-light w-full rounded-lg px-4 py-1 text-center tracking-wide"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        Hey, I&apos;m Michael 👋
      </motion.h4>
      <div className="element-gap flex flex-col">
        <motion.h1
          className="text-responsive-xl mb-3 max-w-[10ch] font-bold tracking-tight sm:max-w-[13ch]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="gradient-text">Web Developer</span>{" "}
          <span className="texStroke">& Designer</span>
        </motion.h1>
        <motion.p
          className="text-responsive-base max-w-[40ch] font-normal leading-relaxed text-secondary"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          I&apos;m on a mission to create captivating, enjoyable, and
          user-oriented digital experiences
        </motion.p>
        <motion.div
          className="small-gap flex flex-wrap sm:flex-nowrap"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Button
            className="from-accent bg-gradient-to-r to-pink-500 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
            size="lg"
            radius="md"
          >
            <Link href="#contact" className="text-responsive-sm font-medium">
              Contact me <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </Button>
          <Button
            radius="md"
            isIconOnly
            className="glass h-[48px] w-[48px] transition-transform hover:scale-105"
          >
            <Link
              href="https://twitter.com/MGWebss"
              className="hover:text-accent-light text-lg text-primary transition-colors"
            >
              <FontAwesomeIcon icon={faXTwitter} size="1x" />
            </Link>
          </Button>
          <Button
            radius="md"
            isIconOnly
            className="glass h-[48px] w-[48px] transition-transform hover:scale-105"
          >
            <Link
              href="https://www.linkedin.com/in/michaeldanielgeraghty/"
              className="hover:text-accent-light text-lg text-primary transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
