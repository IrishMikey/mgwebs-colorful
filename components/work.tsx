"use client";
import React, { useRef } from "react";
import Card from "./card";
import { projectsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function WorksCards() {
  const { ref } = useSectionInView("Work", 0.5);

  return (
    <section id="work" ref={ref} className="m-4 mb-28 w-full scroll-mt-[7rem]">
      <motion.div
        className="mb-10 flex flex-col gap-5"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className=" text-3xl font-medium ">
          Recent Work <span>🔨</span>
        </h2>
        <span className="text-lg text-zinc-300">
          Discover my portfolio of diverse projects, <br/> highlighting my knowledge
          in web development and design.
        </span>
      </motion.div>
      <div className="mt-5 flex w-full flex-1 flex-col items-center gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Card {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
