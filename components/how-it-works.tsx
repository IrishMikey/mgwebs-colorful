import { steps } from "@/lib/content";

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-heading" className="pb-[72px] md:pb-[112px]">
      <div className="page-x">
        <h2
          id="how-heading"
          className="text-center font-display text-[clamp(36px,4.2vw,52px)] leading-[1.1] tracking-[-0.02em]"
        >
          Simple from start to finish
        </h2>
        <ol className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <li key={step.label} className="border-t border-line-strong pt-6">
              <p className="text-sm font-semibold text-accent">{step.label}</p>
              <h3 className="mt-3 font-display text-[22px] leading-[1.3] md:text-[26px]">
                {step.title}
              </h3>
              <p className="mt-3 text-[17px] text-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
