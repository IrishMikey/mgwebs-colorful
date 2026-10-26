import { work, type WorkItem } from "@/lib/content";
import HeartTile from "./heart-tile";
import Placeholder from "./placeholder";

function WorkCard({ item, offset }: { item: WorkItem; offset: boolean }) {
  const media = (
    <div className="relative h-60 overflow-hidden rounded-media border border-line">
      <Placeholder label={`[${item.label.replace(/[[\]]/g, "")} screenshot]`} className="size-full" />
      <span className="absolute bottom-4 left-4 rounded-full bg-white px-3 py-1.5 text-[13px] leading-none font-medium text-ink shadow-chip">
        {item.label}
      </span>
    </div>
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
          {media}
          <p className="mt-4 text-[15px] text-muted group-hover:text-ink">
            {item.caption}
            <span className="sr-only"> (opens {item.label} in a new tab)</span>
          </p>
        </a>
      ) : (
        <>
          {media}
          <p className="mt-4 text-[15px] text-muted">{item.caption}</p>
        </>
      )}
    </li>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="section-y scroll-mt-4 rounded-t-[40px] bg-subtle"
    >
      <div className="page-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[640px] font-display text-[clamp(36px,4.2vw,52px)] leading-[1.1] tracking-[-0.02em]">
            Websites <HeartTile /> I’ve built and fixed
          </h2>
          <p className="max-w-[380px] text-[17px] text-body">
            Every project comes with before and after numbers, so you can see
            exactly what changed.
          </p>
        </div>

        <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {work.map((item, i) => (
            <WorkCard key={item.label} item={item} offset={i === 1} />
          ))}
        </ul>
      </div>
    </section>
  );
}
