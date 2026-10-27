import { contact } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="page-x flex flex-col gap-4 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-display text-lg text-ink">MGWebs</span> ·
          Dublin, Ireland
        </p>
        <a href={`mailto:${contact.email}`} className="hover:text-ink">
          {contact.email}
        </a>
        <p>© {new Date().getFullYear()} MGWebs</p>
      </div>
    </footer>
  );
}
