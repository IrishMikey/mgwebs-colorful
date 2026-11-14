import ButtonLink from "./button";
import Glow from "./glow";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <Glow className="-top-40 -left-48 size-[420px] bg-coral/15" />
      <Glow className="-right-48 -bottom-40 size-[420px] bg-accent/15" />

      <div className="relative mx-auto max-w-[1040px] px-5 pt-16 pb-20 text-center md:px-8 md:pt-24 md:pb-30">
        <p className="text-[15px] text-muted">
          Mikey · Web developer in Dublin, building with AI
        </p>

        <h1 className="mt-5 font-display text-[clamp(44px,6vw,76px)] leading-[1.12] tracking-[-0.02em] text-ink">
          Good websites built fast with AI, finished by hand.
        </h1>

        <p className="mx-auto mt-7 max-w-[640px] text-lg leading-relaxed text-muted md:text-xl">
          I use AI to build faster, then check every detail myself so your
          site doesn’t look or act AI-made. Start with a free review,
          explained in plain English.
        </p>

        <div className="mt-10 flex flex-col-reverse items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="#builds" variant="secondary" className="w-full sm:w-auto">
            See my builds
          </ButtonLink>
          <ButtonLink href="#review" className="w-full sm:w-auto">
            Get a free review
          </ButtonLink>
        </div>

        <p className="mt-6 text-sm text-muted">
          Fixed prices · Everything in your name · Reply within 24 hours
        </p>
      </div>
    </section>
  );
}
