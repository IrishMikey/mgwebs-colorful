import Image, { type StaticImageData } from "next/image";

type HeadlineChipProps = {
  /** Placeholder label shown until a real screenshot is supplied. */
  label: string;
  src?: StaticImageData;
  rotate: "left" | "right";
  priority?: boolean;
};

/** Decorative image inside the H1. The heading must read correctly without it. */
export default function HeadlineChip({
  label,
  src,
  rotate,
  priority = false,
}: HeadlineChipProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative mx-1.5 inline-flex h-12 w-22 shrink-0 overflow-hidden rounded-2xl border border-line bg-placeholder align-middle shadow-chip md:mx-2.5 md:h-18 md:w-33 ${
        rotate === "left" ? "motion-safe:-rotate-4" : "motion-safe:rotate-3"
      }`}
    >
      {src ? (
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 768px) 132px, 88px"
          priority={priority}
          className="object-cover"
        />
      ) : (
        <span className="m-auto px-1 text-center font-sans text-[11px] leading-tight tracking-normal text-muted md:text-[13px]">
          {label}
        </span>
      )}
    </span>
  );
}
