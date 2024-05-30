"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { Card, Chip, useDisclosure, Link, Button } from "@nextui-org/react";

type WorkProps = (typeof projectsData)[number];
import { projectsData } from "@/lib/data";

export default function WorkCard({ title, card, desc, modal }: WorkProps) {
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
        <div className="flex h-full flex-col px-6 pb-8 pt-4 sm:max-w-[50%] sm:pl-8 sm:pr-2 sm:pt-8 sm:group-even:ml-[20rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-gray-700 mt-2 leading-relaxed">{desc}</p>
          <ul className="flex flex-wrap gap-2 sm:mt-auto">
            {card.built_with.map((tag, i) => (
              <li key={i}>
                <Chip color="default" radius="md">
                  {tag}
                </Chip>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={card.imageUrl}
          alt={card.alt}
          quality={95}
          className="group-even:-right-inital shadow-black-800 group-hover:scale-[1.04 absolute -right-40 top-10 hidden w-[28.25rem] rounded-t-lg shadow-md transition group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
        ></Image>
      </Card>
    </motion.div>
  );
}
