import { carePlans, services, vatNote, type Service } from "@/lib/content";

const variantClasses: Record<Service["variant"], string> = {
  tint: "bg-tint text-ink",
  white: "border border-line bg-white text-ink shadow-card",
  coral: "bg-coral text-white",
};

// Desktop stagger: start / centre / end, each slightly rotated and overlapping.
const positionClasses = [
  "lg:self-start motion-safe:lg:-rotate-[0.6deg]",
  "mt-3 md:-mt-[18px] lg:self-center motion-safe:lg:rotate-[0.5deg]",
  "mt-3 md:-mt-[18px] lg:self-end motion-safe:lg:-rotate-[0.4deg]",
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const onCoral = service.variant === "coral";
  const secondaryText = onCoral ? "text-white" : "text-body";

  return (
    <article
      className={`relative flex w-full flex-wrap justify-between gap-x-10 gap-y-6 rounded-card p-7 md:p-9 lg:max-w-[680px] ${variantClasses[service.variant]} ${positionClasses[index]}`}
    >
      <div className="min-w-0 flex-[1_1_280px]">
        <h3 className="font-display text-[28px] leading-[1.2] tracking-[-0.01em] md:text-[34px]">
          <span
            className={`mr-3 font-sans text-sm font-semibold tracking-normal ${onCoral ? "text-white" : "text-accent"}`}
          >
            {service.number}
          </span>
          {service.title}
        </h3>
        <p className={`mt-3 text-[17px] ${secondaryText}`}>
          {service.description}
        </p>
        <p className="mt-5 font-display text-[28px] leading-[1.2] md:text-[30px]">
          <span className={`font-sans text-base ${secondaryText}`}>from </span>
          {service.price}
        </p>
      </div>
      <ul
        className={`flex flex-[0_1_220px] flex-col gap-2 self-end text-[15px] ${secondaryText}`}
      >
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2.5">
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className={`mt-1 size-4 shrink-0 ${onCoral ? "text-white" : "text-accent"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m3.5 8.5 3 3 6-7" />
            </svg>
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-y scroll-mt-4">
      <div className="page-x">
        <div className="text-center">
          <h2 className="font-display text-[clamp(36px,4.2vw,52px)] leading-[1.1] tracking-[-0.02em]">
            What I do
          </h2>
          <p className="mt-4 text-lg text-muted md:text-xl">
            Fixed, written prices before any work starts. {vatNote}
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-narrow flex-col md:mt-16">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 text-center text-[15px] text-muted">
          <span>Care plans to keep it fast and safe:</span>
          {carePlans.map((plan) => (
            <span
              key={plan}
              className="rounded-full bg-muted-bg px-4 py-2 font-medium text-ink"
            >
              {plan}
            </span>
          ))}
          <span>Cancel any time.</span>
        </div>
      </div>
    </section>
  );
}
