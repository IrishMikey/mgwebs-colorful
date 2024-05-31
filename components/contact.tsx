import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="mb-28 scroll-mt-[7rem] leading-8 sm:mb-40">
      <h3 className="text-2xl font-semibold lg:text-3xl xl:text-4xl">
        Contact
      </h3>
      <span className="mb-3 text-zinc-300 sm:max-w-[75ch] sm:text-xl">
        Connect with me for collaborations, questions, or just to say hello!
      </span>
      <span className="mb-3 text-zinc-300 sm:max-w-[75ch] sm:text-xl">
        <Link className="underline" href="mailto:mikeygeraghty@gmail.com">
          Email
        </Link>
        ,{" "}
        <Link
          className="underline"
          href="https://www.linkedin.com/in/michaeldanielgeraghty/"
        >
          LinkedIn
        </Link>
        ,{" "}
        <Link className="underline" href="https://twitter.com/MGWebss">
          X
        </Link>
      </span>
    </section>
  );
}
