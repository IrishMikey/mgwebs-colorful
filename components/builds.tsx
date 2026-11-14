import { builds, type BuildItem } from "@/lib/content";
import HeartTile from "./heart-tile";
import Placeholder from "./placeholder";

function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-tint px-3 py-1.5 text-[13px] leading-none font-medium text-ink">
      {children}
    </span>
  );
}

function BuildCard({ item, offset }: { item: BuildItem; offset: boolean }) {
  const media = (
    <div className="relative h-60 overflow-hidden rounded-media border border-line">
      <Placeholder label={`[${item.label.replace(/[[\]]/g, "")} screenshot]`} className="size-full" />
      <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-[13px] leading-none font-medium text-ink shadow-chip">
        {item.label}
      </span>
    </div>
  );

  const body = (
    <>
      {media}
      <div className="mt-4 flex flex-wrap gap-2">
        <Pill>{item.tools}</Pill>
        <Pill>{item.time}</Pill>
        <Pill>{item.result}</Pill>
      </div>
    </>
  );

  return (
    <li className={offset ? "lg:mt-10" : undefined}>
      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-media"
        >
          {body}
          <span className="sr-only"> (opens {item.label} in a new tab)</span>
        </a>
      ) : (
        body
      )}
    </li>
  );
}

export default function Builds() {
  return (
    <section
      id="builds"
      className="section-y scroll-mt-4 rounded-t-[40px] bg-subtle"
    >
      <div className="page-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[640px] font-display text-[clamp(36px,4.2vw,52px)] leading-[1.1] tracking-[-0.02em]">
            Things I’ve built <HeartTile />
          </h2>
          <p className="max-w-[380px] text-[17px] text-body">
            Every build shows the tools, the time and the result, the same
            way I post them on Instagram.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {builds.map((item, i) => (
            <BuildCard key={item.label} item={item} offset={i === 1} />
          ))}
        </ul>
      </div>
    </section>
  );
}
