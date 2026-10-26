import { faqs } from "@/lib/content";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-4 pb-[72px] md:pb-[112px]">
      <div className="page-x">
        <h2 className="text-center font-display text-[clamp(36px,4.2vw,52px)] leading-[1.1] tracking-[-0.02em]">
          Questions
        </h2>
        <div className="mx-auto mt-12 max-w-prose">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-t border-line-strong last:border-b"
            >
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-display text-[20px] leading-[1.3] md:text-[22px]">
                  {faq.question}
                </h3>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  className="size-5 shrink-0 text-ink transition-transform group-open:rotate-45 motion-reduce:transition-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                >
                  <path d="M10 4v12M4 10h12" />
                </svg>
              </summary>
              <p className="-mt-2 pb-6 text-[17px] text-body">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
