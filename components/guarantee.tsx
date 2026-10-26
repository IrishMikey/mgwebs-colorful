import { guaranteeTerms } from "@/lib/content";
import ButtonLink from "./button";
import Glow from "./glow";

export default function Guarantee() {
  return (
    <section aria-labelledby="promise-heading" className="page-x">
      <div className="relative overflow-hidden rounded-panel bg-muted-bg px-6 py-14 text-center md:p-[88px]">
        <Glow className="-top-24 -right-24 size-[260px] bg-coral/15" />
        <div className="relative mx-auto max-w-[820px]">
          <p className="text-[15px] text-muted">My promise</p>
          <h2
            id="promise-heading"
            className="mt-4 font-display text-[clamp(32px,4vw,48px)] leading-[1.12] tracking-[-0.02em]"
          >
            If your phone score isn’t 90+ after my speed fix, you don’t pay for
            it.
          </h2>
          <p className="mx-auto mt-5 max-w-[560px] text-sm text-muted">
            {guaranteeTerms}
          </p>
          <ButtonLink href="#audit" className="mt-8">
            Check my site for free
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
