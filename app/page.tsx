import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import NavBar from "./navBar";
import { Image } from "@nextui-org/react";
import WorksCards from "./content/worksCards";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="gap-18 flex min-h-screen flex-col font-poppins lg:mx-auto xl:w-[1080px]">
        <section
          id="home"
          className="relative mb-20 flex min-h-[70vh] scroll-mt-[7rem] flex-col overflow-hidden px-4 pt-[7rem] xl:min-h-[90vh]"
        >
          <div className="flex flex-grow flex-col justify-between">
            <h4 className="w-full rounded-lg px-4 py-1 text-center text-[1.25rem] text-[#c6c8c9]">
              Hey, I&apos;m Michael 👋
            </h4>
            <h1 className="max-w-[8ch] text-6xl  font-bold leading-[3.75rem] lg:text-[7.4375rem] lg:leading-[6.75rem]">
              Web Developer <span className="texStroke">& Designer</span>
            </h1>
            <span className="text-2xl text-[#F2E9E9] md:w-auto xl:max-w-[80%] xl:text-3xl">
              I&apos;m on a mission to create captivating, enjoyable, and
              user-oriented digital experiences
            </span>
          </div>
        </section>
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
