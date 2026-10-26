const linkClasses =
  "inline-flex min-h-12 items-center text-[15px] text-ink transition-colors hover:text-accent";

export default function Nav() {
  return (
    <header className="page-x">
      <nav
        aria-label="Main"
        className="flex h-18 items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]"
      >
        <ul className="hidden gap-8 md:flex">
          <li>
            <a href="#work" className={linkClasses}>
              Work
            </a>
          </li>
          <li>
            <a href="#services" className={linkClasses}>
              Prices
            </a>
          </li>
        </ul>
        <a
          href="#top"
          className="inline-flex min-h-12 items-center font-display text-[22px] text-ink"
        >
          MGWebs
        </a>
        <ul className="flex justify-end gap-8">
          <li className="hidden md:block">
            <a href="#faq" className={linkClasses}>
              Questions
            </a>
          </li>
          <li>
            <a
              href="#audit"
              className="inline-flex min-h-12 items-center text-base font-medium text-accent hover:text-accent-hover md:text-[15px]"
            >
              Free speed check
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
