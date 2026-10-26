/** Coral tile with a stroked heart, used inline in the Work heading. */
export default function HeartTile() {
  return (
    <span
      aria-hidden="true"
      className="mx-2 inline-flex size-11 shrink-0 items-center justify-center rounded-input bg-coral align-middle md:size-[54px]"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-6 md:size-7"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 10c0 5.65-7 10-7 10Z" />
      </svg>
    </span>
  );
}
