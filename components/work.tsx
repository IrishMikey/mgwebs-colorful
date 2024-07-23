"use client";

import React, { useRef } from "react";
import Card from "./card";
import { projectsData } from "@/lib/data";
import { galleryImgs } from "@/lib/data";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Photo from "./photo";

export default function WorksCards() {
  const { ref } = useSectionInView("Work", 0.5);

  return (
    <section id="work" ref={ref} className="m-4 mb-20 w-full scroll-mt-[7rem]">
      <motion.div
        className="mb-10 flex flex-col gap-5"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className=" text-3xl font-medium ">
          Recent Work <span>🔨</span>
        </h2>
        <span className="text-lg text-zinc-300">
          Discover my portfolio of diverse projects, <br /> highlighting my
          knowledge in web development and design.
        </span>
      </motion.div>
      <h3 className=" text-xl font-medium ">
        Webpages <span>🌐</span>
      </h3>
      <div className="mt-5 flex w-full flex-1 flex-col items-center gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Card {...project} />
          </React.Fragment>
        ))}
      </div>

      <div id="Graphics" className="mt-10 w-full">
        <h3 className=" text-xl font-medium ">
          Graphics <span>🎨</span>
        </h3>
        <div className="flex overflow-x-scroll pr-2 pb-3 sm:overflow-x-none sm:flex-wrap gap-8 mt-5">
          {galleryImgs.map((photo, index) => (
            <React.Fragment key={index}>
              <Photo {...photo} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
