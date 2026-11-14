import { social } from "@/lib/site";

export default function About() {
  return (
    <section aria-labelledby="about-heading" className="section-y">
      <div className="page-x">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <h2
            id="about-heading"
            className="font-display text-[clamp(36px,4.2vw,52px)] leading-[1.1] tracking-[-0.02em]"
          >
            Hi, I’m Mikey.
          </h2>
          <div className="max-w-prose">
            <p className="text-lg text-body">
              I’m a professional web developer based in Dublin. By day I
              build websites in financial services. MGWebs is how I bring
              that standard to small businesses, at a fair, fixed price.
            </p>
            <p className="mt-4 text-lg text-body">
              I use AI every day to build faster, and I share what works
              (and what doesn’t) on Instagram and TikTok:{" "}
              <a href={social.instagram} className="text-ink underline hover:text-accent">
                Instagram
              </a>{" "}
              ·{" "}
              <a href={social.tiktok} className="text-ink underline hover:text-accent">
                TikTok
              </a>
            </p>
            <p className="mt-4 text-lg text-body">
              You deal with me directly, in plain English.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
