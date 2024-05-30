import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Image } from "@nextui-org/react";
import WorksCards from "./content/worksCards";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center px-4">
        <Hero />
        <WorksCards />
        <section
          id="about"
          className="mx-4 my-4 flex scroll-mt-[5rem] flex-col gap-5"
        >
          <h3 className="text-3xl font-bold dark:text-white lg:text-4xl">
            About me
          </h3>
          <div className="flex flex-col gap-5 xl:flex-1 xl:flex-row xl:items-center xl:gap-12">
            <div className="flex w-full flex-col gap-4 text-lg xl:text-xl">
              <span className="sm:text-center md:text-start xl:max-w-[580px]">
                Hello! I&apos;m Michael Geraghty, a dedicated Web Developer
                based in the Canary Islands.
              </span>
              <span className="sm:text-center md:text-start xl:max-w-[580px]">
                With a passion for web development, I specialize in creating
                dynamic web pages and applications. Skilled in UI design and
                Next.Js, I focus on building intuitive, user-driven websites.
              </span>
              <span className="sm:text-center md:text-start xl:max-w-[580px]">
                I thrive on feedback and detail, ensuring every project is a
                step towards digital excellence.
              </span>
            </div>
            <div className="flex justify-center">
              <Image
                src="/me_headshot.webp"
                height={230}
                width={358}
                alt="A picture of me, Michael Geraghty"
                className="rounded-[1rem] xl:w-[700px]"
              />
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="mx-4 flex min-h-[90vh] scroll-mt-[5rem] flex-col gap-3"
        >
          <h3 className="text-2xl font-semibold lg:text-3xl xl:text-4xl">
            Contact
          </h3>
          <span className="max-w-[388px] text-lg sm:text-center md:max-w-fit md:text-start xl:max-w-[60%] xl:text-xl">
            Connect with me for collaborations, questions, or just to say hello!
          </span>
          <div className="flex flex-1 flex-col gap-8 xl:mt-[12rem]">
            <div className="flex flex-col gap-5 p-8 text-center lg:flex-row xl:justify-evenly">
              <ContactCard
                href="mailto:mikeygeraghty@gmail.com"
                icon={faEnvelope}
                label="Email"
              />
              <ContactCard
                href="https://www.linkedin.com/in/michaeldanielgeraghty/"
                icon={faLinkedin}
                label="LinkedIn"
              />
              <ContactCard
                href="https://twitter.com/MGWebss"
                icon={faXTwitter}
                label="X"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

interface ContactCardProps {
  href: string;
  icon: typeof faEnvelope;
  label: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ href, icon, label }) => (
  <div className="flex justify-center">
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="shadow-neutral-500/20 mb-2 flex min-h-[120px] w-[170px] items-center justify-center rounded-[1rem] bg-royal-blue-100 text-royal-blue-400 shadow-lg backdrop-blur-lg backdrop-filter transition hover:scale-105 hover:border hover:border-royal-blue-500 hover:text-royal-blue-600 active:scale-95 active:text-royal-blue-500 xl:h-[200px] xl:w-[200px] xl:text-2xl">
        <FontAwesomeIcon icon={icon} size="5x" />
      </div>
      <span className="text-xl">{label}</span>
    </a>
  </div>
);
