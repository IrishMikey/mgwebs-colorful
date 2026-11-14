import { aiTells, type AiTellItem } from "@/lib/content";
import Placeholder from "./placeholder";

function AiTell({ item }: { item: AiTellItem }) {
  return (
    <li className="flex gap-5">
      <span
        aria-hidden="true"
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-coral font-display text-[18px] text-white"
      >
        {item.number}
      </span>
      <div>
        <h3 className="font-display text-[22px] leading-[1.3] text-white md:text-[26px]">
          {item.tell}
        </h3>
        <p className="mt-2 text-[17px] text-ink-muted">{item.problem}</p>
        <p className="mt-2 text-[17px] text-white">{item.fix}</p>
      </div>
    </li>
  );
}

export default function AiSection() {
  return (
    <section id="ai" className="page-x">
      <div className="relative overflow-hidden rounded-panel bg-ink px-6 py-11 text-white md:p-[88px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:items-start lg:gap-16">
          <div>
            <span className="inline-flex rounded-full border border-coral px-4 py-1.5 text-[13px] font-medium text-white">
              Spot the AI site
            </span>
            <h2 className="mt-5 font-display text-[clamp(36px,4.2vw,52px)] leading-[1.1] tracking-[-0.02em] text-white">
              What AI websites get wrong
            </h2>
            <p className="mt-4 max-w-[560px] text-lg text-ink-muted md:text-xl">
              AI is great at a first draft. These are the three things I fix
              on almost every AI-built site.
            </p>

            <ul className="mt-10 flex flex-col gap-8">
              {aiTells.map((item) => (
                <AiTell key={item.number} item={item} />
              ))}
            </ul>

            <a
              href="#review"
              className="mt-10 inline-block text-[17px] text-white underline hover:text-ink-muted"
            >
              Built yours with Lovable, Bolt or ChatGPT? I can finish it.
            </a>
          </div>

          <div className="relative size-full overflow-hidden rounded-media bg-ink-2">
            <Placeholder
              label="[AI site screenshot, markers 1 to 3]"
              className="aspect-square size-full text-ink-muted"
            />
            <span
              aria-hidden="true"
              className="absolute top-6 left-6 flex size-8 items-center justify-center rounded-full bg-coral font-display text-[15px] text-white"
            >
              1
            </span>
            <span
              aria-hidden="true"
              className="absolute top-1/2 right-6 flex size-8 items-center justify-center rounded-full bg-coral font-display text-[15px] text-white"
            >
              2
            </span>
            <span
              aria-hidden="true"
              className="absolute bottom-6 left-6 flex size-8 items-center justify-center rounded-full bg-coral font-display text-[15px] text-white"
            >
              3
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
