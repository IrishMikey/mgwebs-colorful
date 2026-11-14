type GlowProps = {
  /** Position, size and colour utilities, e.g. "-top-40 -left-40 size-[420px] bg-coral/15". */
  className: string;
};

/** Soft blurred circle. The parent must be `relative overflow-hidden`. */
export default function Glow({ className }: GlowProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[80px] reduce-transparency:hidden ${className}`}
    />
  );
}
