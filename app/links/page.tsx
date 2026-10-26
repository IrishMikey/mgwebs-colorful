import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faTiktok,
  faInstagram,
  faYoutube,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Glow from "@/components/glow";
import avatarImg from "@/public/headshot.jpg";

type SocialLink = { name: string; url: string; icon: IconDefinition };

const socialLinks: SocialLink[] = [
  { name: "MGWebs — websites", url: "/", icon: faCode },
  { name: "TikTok", url: "https://tiktok.com/@mikxyg", icon: faTiktok },
  { name: "Instagram", url: "https://instagram.com/mikxyg", icon: faInstagram },
  { name: "YouTube", url: "https://youtube.com/@mikxyg", icon: faYoutube },
  { name: "GitHub", url: "https://github.com/IrishMikey", icon: faGithub },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/michaeldanielgeraghty/",
    icon: faLinkedin,
  },
  { name: "X (Twitter)", url: "https://twitter.com/mgwebss", icon: faXTwitter },
];

export default function LinksPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden px-5 py-16">
      <Glow className="-top-40 -left-40 size-[420px] bg-coral/15" />
      <Glow className="-right-40 -bottom-40 size-[420px] bg-accent/15" />

      <div className="relative w-full max-w-md">
        <div className="text-center">
          <Image
            src={avatarImg}
            alt="Michael Geraghty"
            width={96}
            height={96}
            priority
            className="mx-auto size-24 rounded-full object-cover"
          />
          <h1 className="mt-5 font-display text-[36px] leading-[1.1] tracking-[-0.02em]">
            Michael Geraghty
          </h1>
          <p className="mt-2 text-muted">Web developer & content creator</p>
        </div>

        <ul className="mt-10 flex flex-col gap-3">
          {socialLinks.map((link) => {
            const external = link.url.startsWith("http");
            return (
              <li key={link.name}>
                <a
                  href={link.url}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex min-h-14 items-center gap-4 rounded-full border border-line bg-white px-5 font-medium text-ink shadow-chip transition-colors hover:border-line-strong hover:bg-muted-bg"
                >
                  <FontAwesomeIcon
                    icon={link.icon}
                    aria-hidden="true"
                    className="size-5 text-accent"
                  />
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
