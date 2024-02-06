import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="mx-4 flex min-h-screen flex-col gap-16 font-poppins md:w-[575px] lg:m-auto xl:w-[1080px]">
      <section
        id="home"
        className="mb-20 flex min-h-[75vh] scroll-mt-[7rem] flex-col overflow-hidden pt-[7rem] xl:min-h-[90vh] xl:gap-[7rem]"
      >
        <div className="bg-royal-blue-300 rounded-[0 0 150px 150px] absolute -right-16 top-0 -z-10 h-[250px] w-[150px] blur-2xl"></div>
        <div className="flex flex-grow flex-col justify-between xl:gap-[5rem] ">
          <h4 className="w-full rounded-lg px-4 py-1 text-center text-[1.25rem] xl:text-[3.125rem] ">
            Hey, I&apos;m Michael 👋
          </h4>

          <h1 className="font-montserrat text-6xl font-bold  leading-[3.75rem] lg:text-[7.4375rem] lg:leading-[6.75rem]">
            Web Developer <span className="texStroke "> &Designer</span>
          </h1>
          <span className="text-lg md:w-auto xl:max-w-[80%] xl:text-3xl ">
            I&apos;m on a mission to create captivating, enjoyable, and
            user-oriented digital experiences
          </span>
        </div>
      </section>
      {/* Work section */}
      <section id="work" className="flex scroll-m-[4.375rem] flex-col gap-3">
        <h3 className="font-montserrat text-4xl font-bold text-[#070707] ">
          My Work
        </h3>

        <span className=" max-w-[294px]  text-[1.25rem] leading-8 sm:text-center md:max-w-fit md:text-start xl:max-w-[60%] xl:text-[1.375rem]">
          Discover my portfolio of diverse projects, highlighting my expertise
          in web development and design.
        </span>

        <div className="mt-5 flex w-full flex-1 flex-col justify-center gap-8 md:gap-12">
          <Link
            href="https://bgrsolutions.net"
            className="bg-royal-blue-100 flex w-full flex-col rounded-[1rem]  bg-opacity-30 px-[0.625rem] pb-[0.625rem] shadow  backdrop-blur-lg backdrop-filter transition-all hover:scale-[1.01] active:scale-100 xl:h-[750px]"
          >
            <div className="flex items-center justify-between py-[13px] ">
              <h4 className=" text-[1.125rem] font-semibold">BGRSolutions</h4>
              <span className=" text-sm">e-commerce</span>
            </div>
            <div className=" flex min-h-full w-full ">
              <div className="h-[200px] w-full rounded-[1rem] bg-[url('/bgrsolutions.webp')] bg-cover bg-center bg-no-repeat md:h-[305px] xl:h-[685px]"></div>
            </div>
          </Link>
          <Link
            href="https://cloudninetenerife.es"
            className="bg-royal-blue-100 flex w-full flex-col rounded-[1rem] bg-opacity-30 px-[0.625rem] pb-[0.625rem] shadow   transition-all hover:scale-[1.01] active:scale-100 xl:h-[750px]"
          >
            <div className="flex items-center justify-between py-[13px] ">
              <h4 className=" text-[1.125rem] font-semibold">
                CloudNineTenerife
              </h4>
              <span className="text-sm">Beauty & Education</span>
            </div>
            <div className=" flex min-h-full w-full ">
              <div className="h-[200px] w-full rounded-[1rem] bg-[url('/cloudninetenerife.webp')] bg-cover bg-no-repeat md:h-[305px]  xl:h-[685px]"></div>
            </div>
          </Link>
        </div>
      </section>
      {/* About section */}
      <section
        id="about"
        className="my-[1rem] flex scroll-m-[60px] flex-col gap-5"
      >
        <h3 className="font-montserrat text-4xl font-bold text-[#070707]">
          About
        </h3>
        <div className="flex flex-col gap-5 xl:flex-1 xl:flex-row xl:items-center xl:gap-12">
          <div className="flex w-full flex-col gap-4 text-[1.1875rem] xl:text-[1.6rem] ">
            <span className="  sm:text-center md:text-start xl:max-w-[580px] ">
              Hello! I&apos;m Michael Geraghty, a dedicated Web Developer based
              in the Canary Islands.
            </span>
            <span className="sm:text-center  md:text-start xl:max-w-[580px] ">
              With a passion for web development, I specialize in creating
              dynamic web pages and applications. Skilled in UI design and
              Next.Js, I focus on building intuitive, user-driven websites.
            </span>
            <span className="sm:text-center  md:text-start xl:max-w-[580px] ">
              I thrive on feedback and detail, ensuring every project is a step
              towards digital excellence.
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
        className="mb-[48px] flex min-h-[90vh] scroll-m-[58px] flex-col gap-3 "
      >
        <h3 className="text-[30px] font-semibold ">Contact</h3>
        <span className="max-w-[388px] text-[1.125rem] sm:text-center md:max-w-fit md:text-start xl:max-w-[60%] xl:text-[1.375rem]">
          Connect with me for collaborations, questions, or just to say hello!
        </span>
        <div className="flex flex-1 flex-col gap-8 xl:mt-[12rem]">
          <div className="flex flex-col gap-5 bg-opacity-50 p-8 text-center lg:flex-row xl:justify-evenly">
            <div className="flex justify-center">
              <a href="mailto:mikeygeraghty@gmail.com">
                <div className="hover:border-royal-blue-500 text-royal-blue-400 active:text-royal-blue-500 hover:text-royal-blue-600 bg-royal-blue-100 mb-2 flex min-h-[120px] w-[170px] items-center justify-center rounded-[1rem] shadow-lg  shadow-neutral-500/20 backdrop-blur-lg backdrop-filter transition hover:scale-105 active:scale-95 xl:h-[200px] xl:w-[200px] xl:text-2xl">
                  <FontAwesomeIcon icon={faEnvelope} size="5x" className="  " />
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
                <div className="bg-royal-blue-100 text-royal-blue-400 active:text-royal-blue-500 hover:text-royal-blue-600 hover:border-royal-blue-500 mb-2 flex min-h-[120px] w-[170px] items-center  justify-center rounded-[1rem] shadow-lg shadow-neutral-500/20 backdrop-blur-lg backdrop-filter transition hover:scale-105 hover:border active:scale-95 xl:h-[200px] xl:w-[200px] xl:text-2xl">
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
                <div className="text-royal-blue-400 active:text-royal-blue-500 hover:text-royal-blue-600 bg-royal-blue-100 hover:border-royal-blue-500 mb-2 flex min-h-[120px] w-[170px] items-center justify-center  rounded-[1rem] shadow-lg shadow-neutral-500/20  backdrop-blur-lg backdrop-filter transition hover:scale-105 hover:border active:scale-95 xl:h-[200px] xl:w-[200px] xl:text-2xl">
                  <FontAwesomeIcon className="" icon={faXTwitter} size="5x" />
                </div>
                <span className="text-xl">X</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
