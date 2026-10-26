import ButtonLink from "./button";
import Glow from "./glow";
import HeadlineChip from "./headline-chip";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Glow className="-top-40 -left-48 size-[420px] bg-coral/15" />
      <Glow className="-right-48 -bottom-40 size-[420px] bg-accent/15" />

      <div className="relative mx-auto max-w-[1040px] px-5 pt-16 pb-20 text-center md:px-8 md:pt-24 md:pb-30">
        <p className="text-[15px] text-muted">Mikey · Web designer in Dublin</p>

        <h1 className="mt-5 font-display text-[clamp(44px,6vw,76px)] leading-[1.12] tracking-[-0.02em] text-ink">
          Faster websites{" "}
          <HeadlineChip label="Score 34 → 96" rotate="left" priority />{" "}
          that win you <HeadlineChip label="Site on a phone" rotate="right" />{" "}
          more customers.
        </h1>

        <p className="mx-auto mt-7 max-w-[640px] text-lg leading-relaxed text-muted md:text-xl">
          I build and fix websites for Irish small businesses. Start with a
          free speed check, explained in plain English.
        </p>

        <div className="mt-10 flex flex-col-reverse items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="#work" variant="secondary" className="w-full sm:w-auto">
            See my work
          </ButtonLink>
          <ButtonLink href="#audit" className="w-full sm:w-auto">
            Get a free speed check
          </ButtonLink>
        </div>

        <p className="mt-6 text-sm text-muted">
          Fixed prices · Everything in your name · Reply within 24 hours
        </p>
      </div>
    </section>
  );
}
