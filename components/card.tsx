"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, Chip, Tooltip } from "@nextui-org/react";

type WorkProps = (typeof projectsData)[number] & { sponsored?: string };
import { projectsData } from "@/lib/data";

export default function WorkCard({ title, card, desc, sponsored }: WorkProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group"
    >
      <Card className=" relative max-w-[42rem] overflow-hidden last:mb-0 sm:mb-2 sm:h-[18rem]">
        <div className="flex h-full flex-col px-6 py-4 sm:max-w-[50%] sm:px-6 sm:pb-8 sm:pl-8 sm:pr-2 sm:pt-8 sm:group-even:ml-[20rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="my-2 leading-relaxed text-zinc-200">{desc}</p>
          <ul className="mt-2 flex flex-wrap gap-2 sm:mt-auto">
            {card.built_with.map((tag, i) => (
              <li key={i}>
                <Chip color="default" radius="md">
                  {tag}
                </Chip>
              </li>
            ))}
            {sponsored && (
              <Tooltip
                color="default"
                content="This webpage was made with no profit"
              >
                <Chip color="warning" variant="dot" radius="md">
                  {sponsored}
                </Chip>
              </Tooltip>
            )}
          </ul>
        </div>
        <Image
          src={card.imageUrl}
          alt={card.alt}
          quality={95}
          className="group-even:-right-inital shadow-black-800 group-hover:scale-[1.04 absolute -right-40 top-10  hidden w-[28.25rem] rounded-t-lg shadow-md transition group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
        ></Image>
      </Card>
    </motion.div>
  );
}
