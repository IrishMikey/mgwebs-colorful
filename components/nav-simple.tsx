import Link from "next/link";

/** Minimal nav for standalone pages with no in-page sections to link to. */
export default function NavSimple() {
  return (
    <header className="page-x">
      <nav aria-label="Main" className="flex h-18 items-center justify-center">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center font-display text-[22px] text-ink"
        >
          MGWebs<span className="text-coral">.</span>
        </Link>
      </nav>
    </header>
  );
}
