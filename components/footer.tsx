import { contact } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="page-x flex flex-col gap-4 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-display text-lg text-ink">MGWebs</span> ·
          Dublin, Ireland
        </p>
        <p className="flex flex-wrap gap-x-2">
          <a href={`mailto:${contact.email}`} className="hover:text-ink">
            {contact.email}
          </a>
          <span aria-hidden="true">·</span>
          {contact.phoneE164 ? (
            <a href={`tel:${contact.phoneE164}`} className="hover:text-ink">
              {contact.phoneDisplay}
            </a>
          ) : (
            <span>{contact.phoneDisplay}</span>
          )}
        </p>
        <p>© {new Date().getFullYear()} MGWebs</p>
      </div>
    </footer>
  );
}
