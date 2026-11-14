import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Glow from "@/components/glow";
import InfoForm from "@/components/InfoForm";

export const metadata: Metadata = {
  title: "Work with me",
  description:
    "Tell me what you need help with, a rough budget and timeline. I'll reply within 24 hours with honest next steps.",
  alternates: {
    canonical: "/info",
  },
};

const steps = [
  {
    label: "Step 1",
    body: "You fill this in. Takes a minute.",
  },
  {
    label: "Step 2",
    body: "You get an email from me straight away with a link to book a free 20 minute call.",
  },
  {
    label: "Step 3",
    body: "I reply personally within 24 hours with a fixed price or the next step.",
  },
];

export default function InfoPage() {
  return (
    <>
      <Nav />
      <main id="main" className="relative overflow-hidden">
        <Glow className="-top-40 -left-48 size-[420px] bg-coral/15" />
        <Glow className="-right-48 -bottom-40 size-[420px] bg-accent/15" />

        <div className="relative mx-auto max-w-narrow px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div>
              <p className="text-[15px] text-muted">Work with me</p>
              <h1 className="mt-4 font-display text-[clamp(40px,5.2vw,60px)] leading-[1.12] tracking-[-0.02em] text-ink">
                Tell me what you need help with.
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-muted">
                Pick what fits, give me a rough budget and timeline, and I’ll
                reply within 24 hours with honest next steps. No hard sell.
              </p>
              <p className="mt-5 text-sm text-muted">
                Fixed prices · Everything in your name · Reply within 24
                hours
              </p>
            </div>

            <div className="rounded-[28px] border border-line bg-white p-9 shadow-form">
              <InfoForm />
            </div>

            <div>
              <h2 className="font-display text-[26px] leading-[1.3]">
                What happens next
              </h2>
              <ol className="mt-6 flex flex-col gap-6">
                {steps.map((step) => (
                  <li key={step.label} className="border-t border-line-strong pt-5">
                    <p className="text-sm font-semibold text-accent">
                      {step.label}
                    </p>
                    <p className="mt-2 text-[17px] text-body">{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
