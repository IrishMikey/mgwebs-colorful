"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button, Card, Chip, Tooltip } from "@nextui-org/react";

type WorkProps = (typeof projectsData)[number] & { sponsored?: string };
import { projectsData } from "@/lib/data";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function WorkCard({ title, card, desc, sponsored }: WorkProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  //figure out how to remove animation after current val of scroll is 1
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group"
    >
      <Card className=" relative max-h-[20.5rem] max-w-[42rem] overflow-hidden last:mb-0 sm:mb-2 sm:h-[18rem]">
        <div className="flex h-full flex-col px-6 py-4 sm:max-w-[50%] sm:px-6 sm:pb-8 sm:pl-8 sm:pr-2 sm:pt-8 sm:group-even:ml-[20rem]">
          <div className="flex justify-between">
            <h4 className="text-2xl font-semibold">{title}</h4>
            <Link href={card.link} className="text-lg font-medium">
              <Tooltip color="default" content="Check it out!">
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  className="p-2 transition-all hover:rounded-full hover:text-[#006FEE] active:scale-95"
                />
              </Tooltip>
            </Link>
          </div>
          <div className="flex flex-col gap-2 sm:flex-grow sm:flex-col-reverse sm:justify-between">
            <ul className="flex flex-wrap gap-2 ">
              <li>
                <Chip
                  color={card.built_with.colour}
                  radius="sm"
                  className="text-xs"
                >
                  {card.built_with.tech}
                </Chip>
              </li>
              {sponsored && (
                <Tooltip
                  color="default"
                  content="This webpage was a no-profit job "
                >
                  <Chip
                    color="warning"
                    variant="dot"
                    radius="sm"
                    className="p-0 text-xs"
                  >
                    {sponsored}
                  </Chip>
                </Tooltip>
              )}
            </ul>
            <p className="my-2 text-zinc-200">{desc}</p>
          </div>
        </div>
        <Image
          src={card.imageUrl}
          alt={card.alt}
          quality={95}
          className="group-even:sm:-right-inital shadow-black-800 top-10  rounded-lg rounded-t-lg shadow-md  transition sm:absolute sm:-right-40 sm:w-[28.25rem] group-even:sm:-left-40 group-hover:sm:-translate-x-3 group-hover:sm:translate-y-3 group-hover:sm:-rotate-2 group-even:group-hover:sm:translate-x-3 group-even:group-hover:sm:translate-y-3 group-even:group-hover:sm:rotate-2"
        ></Image>
      </Card>
    </motion.div>
  );
}
