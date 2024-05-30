import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="mb-28 mt-[7.5rem] flex min-h-[45svh] w-full max-w-[50rem] flex-grow scroll-mt-[100rem] flex-col justify-around gap-5"
    >
      <h4 className="w-full rounded-lg px-4 py-1 text-center text-[1.25rem] text-[#c6c8c9]">
        Hey, I&apos;m Michael 👋
      </h4>
      <div className="flex flex-col gap-8">
        <h1 className="mb-3 max-w-[13ch] text-6xl font-bold">
          Web Developer <span className="texStroke">& Designer</span>
        </h1>
        <span className="text-neutral-200 max-w-[40ch] text-3xl ">
          I&apos;m on a mission to create captivating, enjoyable, and
          user-oriented digital experiences
        </span>
        <div className="flex">
          <Button color="primary" size="lg" radius="md">
            <Link href="#contact" className="text-[1.428rem] text-medium">
              Contact me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
