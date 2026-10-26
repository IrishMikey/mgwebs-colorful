import Image from "next/image";
import portrait from "@/public/me_headshot.webp";

export default function About() {
  return (
    <section aria-labelledby="about-heading" className="section-y">
      <div className="page-x grid items-center gap-10 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16 lg:gap-24">
        <div className="relative mx-auto h-[380px] w-full max-w-[340px] overflow-hidden rounded-[30px] motion-safe:md:-rotate-2">
          <Image
            src={portrait}
            alt="Mikey, smiling, standing at a mountain viewpoint"
            fill
            sizes="(min-width: 768px) 340px, calc(100vw - 40px)"
            placeholder="blur"
            className="object-cover object-[50%_30%]"
          />
        </div>
        <div className="max-w-[560px]">
          <h2
            id="about-heading"
            className="font-display text-[clamp(36px,4.2vw,52px)] leading-[1.1] tracking-[-0.02em]"
          >
            Hi, I’m Mikey.
          </h2>
          <p className="mt-6 text-lg text-body">
            I’m a professional web developer based in Dublin. By day I build
            websites in financial services. MGWebs is how I bring that same
            standard to small businesses, at a fair, fixed price.
          </p>
          <p className="mt-4 text-lg text-body">
            You deal with me directly, in plain English. If you’d rather talk
            than email, just ring.
          </p>
        </div>
      </div>
    </section>
  );
}
