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

      <main className=" flex min-h-screen flex-col gap-16 font-poppins lg:m-auto xl:w-[1080px]">
        <section
          id="home"
          className="relative mb-20 flex min-h-[70vh] scroll-mt-[7rem] flex-col overflow-hidden px-4 pt-[7rem] xl:min-h-[90vh] "
        >
          {/* Corner glow */}
          {/* <div className="rounded-[0 0 150px 150px] absolute -right-16 top-0 -z-10 h-[15rem] w-[10rem] bg-royal-blue-300 blur-2xl"></div> */}
          <div className="flex flex-grow flex-col justify-between">
            <h4 className="w-full rounded-lg px-4 py-1 text-center text-[1.25rem] text-[#9ba1a5] ">
              Hey, I&apos;m Michael 👋
            </h4>

            <h1 className=" text-6xl font-bold  leading-[3.75rem] lg:text-[7.4375rem] lg:leading-[6.75rem]">
              Web Developer <span className="texStroke "> &Designer</span>
            </h1>
            <span className="text-lg text-[#9ba1a5] md:w-auto xl:max-w-[80%] xl:text-3xl">
              I&apos;m on a mission to create captivating, enjoyable, and
              user-oriented digital experiences
            </span>
          </div>
        </section>
        {/* Work section */}
        <section
          id="work"
          className="flex scroll-mt-[5rem] flex-col gap-10 rounded-[1rem] bg-zinc-900 px-3 py-5 pb-10"
        >
          <div className="flex flex-col gap-5">
            <h3 className=" flex justify-between text-[2rem] font-[600] leading-[1.1em]">
              Recent Work <span> 🔨</span>
            </h3>

            <span className="max-w-[40ch] text-zinc-400 ">
              Discover my portfolio of diverse projects, highlighting my
              knowledge in web development and design.
            </span>
          </div>

          <div className="mt-5 flex w-full flex-1 flex-col justify-center gap-8 md:gap-12">
            <WorksCards />
          </div>
        </section>
        {/* About section */}
        <section
          id="about"
          className="mx-4 my-[1rem] flex scroll-m-[5rem] flex-col gap-5"
        >
          <h3 className="text-4xl  font-bold dark:text-white ">About me</h3>
          <div className="flex flex-col gap-5 xl:flex-1 xl:flex-row xl:items-center xl:gap-12">
            <div className="flex w-full flex-col gap-4 text-[1.1875rem] xl:text-[1.6rem] ">
              <span className="  sm:text-center md:text-start xl:max-w-[580px] ">
                Hello! I&apos;m Michael Geraghty, a dedicated Web Developer
                based in the Canary Islands.
              </span>
              <span className="sm:text-center  md:text-start xl:max-w-[580px] ">
                With a passion for web development, I specialize in creating
                dynamic web pages and applications. Skilled in UI design and
                Next.Js, I focus on building intuitive, user-driven websites.
              </span>
              <span className="sm:text-center  md:text-start xl:max-w-[580px] ">
                I thrive on feedback and detail, ensuring every project is a
                step towards digital excellence.
              </span>
            </div>
            <div className="">
              {/* <div className="h-[230px] md:h-[385px] w-full bg-[url('/me_headshot.webp')] bg-cover bg-no-repeat bg-center rounded-[1rem]"></div> */}
              <Image
                src="/me_headshot.webp"
                height="230"
                width="358"
                alt="A picture of me, Michael Geraghty"
                className="rounded-[1rem] xl:w-[700px]"
              ></Image>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="mx-4 flex min-h-[90vh] scroll-mt-[5rem] flex-col gap-3 "
        >
          <h3 className="text-[30px] font-semibold ">Contact</h3>
          <span className="max-w-[388px] text-[1.125rem] sm:text-center md:max-w-fit md:text-start xl:max-w-[60%] xl:text-[1.375rem]">
            Connect with me for collaborations, questions, or just to say hello!
          </span>
          <div className="flex flex-1 flex-col gap-8 xl:mt-[12rem]">
            <div className="flex flex-col gap-5 bg-opacity-50 p-8 text-center lg:flex-row xl:justify-evenly">
              <div className="flex justify-center">
                <a href="mailto:mikeygeraghty@gmail.com">
                  <div className="shadow-neutral-500/20 mb-2 flex min-h-[120px] w-[170px] items-center justify-center rounded-[1rem] bg-royal-blue-100 text-royal-blue-400 shadow-lg backdrop-blur-lg backdrop-filter  transition hover:scale-105 hover:border-royal-blue-500 hover:text-royal-blue-600 active:scale-95 active:text-royal-blue-500 xl:h-[200px] xl:w-[200px] xl:text-2xl">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size="5x"
                      className="  "
                    />
                  </div>
                  <span className="text-xl">Email</span>
                </a>
              </div>
              <div className="flex justify-center">
                <a
                  href="https://www.linkedin.com/in/michaeldanielgeraghty/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="shadow-neutral-500/20 mb-2 flex min-h-[120px] w-[170px] items-center justify-center rounded-[1rem] bg-royal-blue-100 text-royal-blue-400  shadow-lg backdrop-blur-lg backdrop-filter transition hover:scale-105 hover:border hover:border-royal-blue-500 hover:text-royal-blue-600 active:scale-95 active:text-royal-blue-500 xl:h-[200px] xl:w-[200px] xl:text-2xl">
                    <FontAwesomeIcon icon={faLinkedin} size="5x" className="" />
                  </div>
                  <span className="text-xl">LinkedIn</span>
                </a>
              </div>
              <div className="flex justify-center ">
                <a
                  href="https://twitter.com/MGWebss"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="shadow-neutral-500/20 mb-2 flex min-h-[120px] w-[170px] items-center justify-center rounded-[1rem] bg-royal-blue-100 text-royal-blue-400 shadow-lg  backdrop-blur-lg backdrop-filter transition  hover:scale-105 hover:border hover:border-royal-blue-500 hover:text-royal-blue-600 active:scale-95 active:text-royal-blue-500 xl:h-[200px] xl:w-[200px] xl:text-2xl">
                    <FontAwesomeIcon className="" icon={faXTwitter} size="5x" />
                  </div>
                  <span className="text-xl">X</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
