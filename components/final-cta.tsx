import { contact } from "@/lib/site";
import AuditForm from "./audit-form";

export default function FinalCta() {
  return (
    <section id="audit" className="scroll-mt-4 pb-[72px] md:pb-[112px]">
      <div className="page-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="font-display text-[clamp(38px,4.6vw,56px)] leading-[1.08] tracking-[-0.02em]">
            Is your website slowing you down?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
            Send me your web address and find out for free. You’ll hear back
            within 48 hours.
          </p>
          <p className="mt-6 text-[17px] text-body">
            Prefer to talk?{" "}
            {contact.phoneE164 ? (
              <a
                href={`tel:${contact.phoneE164}`}
                className="inline-flex min-h-12 items-center font-medium text-accent hover:text-accent-hover"
              >
                {contact.phoneDisplay}
              </a>
            ) : (
              <span className="font-medium text-accent">
                {contact.phoneDisplay}
              </span>
            )}
          </p>
        </div>
        <div className="rounded-[28px] border border-line bg-white p-6 shadow-form md:p-9">
          <AuditForm />
        </div>
      </div>
    </section>
  );
}
