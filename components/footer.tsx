import { contact, social } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="page-x flex flex-col gap-4 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-display text-lg text-ink">
            MGWebs<span className="text-coral">.</span>
          </span>{" "}
          · Dublin, Ireland
        </p>
        <a href={`mailto:${contact.email}`} className="hover:text-ink">
          {contact.email}
        </a>
        <p className="flex gap-3">
          <a href={social.instagram} className="hover:text-ink">
            Instagram
          </a>
          ·
          <a href={social.tiktok} className="hover:text-ink">
            TikTok
          </a>
          {social.youtube ? (
            <>
              ·
              <a href={social.youtube} className="hover:text-ink">
                YouTube
              </a>
            </>
          ) : null}
        </p>
        <p>© {new Date().getFullYear()} MGWebs</p>
      </div>
    </footer>
  );
}
