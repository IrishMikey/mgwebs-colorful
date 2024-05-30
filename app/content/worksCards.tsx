import React, { useRef } from "react";
import Card from "./card";
import { projectsData } from "@/lib/data";

export default function WorksCards() {
  return (
    <section id="work" className="m-4 w-full scroll-mt-[8rem] ">
      <div className="flex flex-col gap-5">
        <h3 className="flex justify-between text-2xl font-semibold lg:text-4xl">
          Recent Work <span>🔨</span>
        </h3>
        <span className="max-w-[40ch] text-zinc-400">
          Discover my portfolio of diverse projects, highlighting my knowledge
          in web development and design.
        </span>
      </div>
      <div className="mt-5 flex w-full flex-1 flex-col justify-center gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Card {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
