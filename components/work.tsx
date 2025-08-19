"use client";

import React, { useRef } from "react";
import Card from "./card";
import { projectsData } from "@/lib/data";
import { galleryImgs } from "@/lib/data";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import Photo from "./photo";

export default function WorksCards() {
  const { ref } = useSectionInView("Work", 0.2);

  return (
    <section
      id="work"
      ref={ref}
      className="section-margin w-full scroll-mt-[7rem]"
    >
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 100, y: 0 }}
        className="section-header"
      >
        <h2 className="text-responsive-xl font-medium">
          Recent Work <span>🔨</span>
        </h2>
      </motion.div>

      <motion.div
        className="section-header flex flex-col"
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <span className="text-responsive-base text-zinc-300">
          Discover my portfolio of diverse projects,{" "}
          <br className="hidden sm:block" /> highlighting my knowledge in web
          development and design.
        </span>
        <h3 className="text-responsive-lg font-medium">
          Webpages <span>🌐</span>
        </h3>
      </motion.div>
      <div className="card-gap mt-8 flex w-full flex-1 flex-col">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Card {...project} />
          </React.Fragment>
        ))}
      </div>
      <motion.div
        className="section-header flex flex-col"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div id="Graphics" className="mt-12 w-full sm:mt-[3rem]">
          <motion.h3
            className="text-responsive-lg font-medium"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            Graphics <span>🎨</span>
          </motion.h3>
          <div className="element-gap mt-8 flex flex-wrap justify-center">
            {galleryImgs.map((photo, index) => (
              <React.Fragment key={index}>
                <Photo {...photo} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
