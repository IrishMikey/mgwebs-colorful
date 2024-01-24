import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  return (
    <main className="mx-4 flex min-h-screen flex-col md:w-[575px] lg:m-auto xl:w-[1080px]">
      <section
        id="home"
        className="flex h-[96svh] scroll-mt-[13rem] flex-col items-center justify-center gap-12 xl:mt-[9rem] xl:h-[80dvh] xl:gap-[7rem]"
      >
        <div className="bg- flex max-w-[300px] flex-col justify-between  gap-7 xl:gap-[15px] ">
          <a
            href="#about"
            className="absolute left-0 top-[9rem] rounded-r-lg bg-white bg-opacity-60 px-4 py-1 text-[1.25rem] italic shadow backdrop-blur-lg backdrop-filter xl:text-[3.125rem] "
          >
            Hey, I&apos;m Michael 👋
          </a>
          <h1 className="text-center text-[3.25rem] font-bold leading-[3.125rem] lg:text-[7.4375rem] xl:leading-[7.9375rem]">
            Web Developer <span className="texStroke italic"> & Designer</span>
          </h1>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="max-w-[388px] text-center text-2xl md:w-auto xl:max-w-[60%] xl:text-[1.375rem]">
            I&apos;m on a mission to create captivating, enjoyable, and
            user-oriented digital experiences
          </span>
          {/* <span className="xl-text-[28px] text-[1.125rem] mx-6 sm:text-center max-w-[388px] md:w-auto">
            Let&apos;s turn <span className="font-semibold">your vision </span>
            into an online journey!
          </span> */}
        </div>
        {/* <div className="flex gap-8 justify-center">
          <Link
            href="#work"
            className="text-white bg-[#fd6231] text-center font-semibold xl-text-[32px] py-[0.625rem] px-[20px] rounded-2xl"
          >
            My Work
          </Link>
          <Link
            href="#contact"
            className="bg-white xl-text-[32px] text-center py-[0.625rem] px-[20px] rounded-2xl"
          >
            Contact
          </Link>
        </div> */}
      </section>
      {/* Work section */}
      <section
        id="work"
        className="mb-[50px] flex scroll-m-[60px] flex-col gap-3"
      >
        <h3 className="text-[30px] font-semibold ">My Work</h3>

        <span className=" max-w-[388px] text-[1.125rem] sm:text-center md:max-w-fit md:text-start xl:max-w-[60%] xl:text-[1.375rem]">
          Discover my portfolio of diverse projects, highlighting my expertise
          in web development and design.
        </span>

        <div className="mt-5 flex w-full flex-1 flex-col justify-center gap-8 md:gap-12">
          <Link
            href="https://bgrsolutions.net"
            className="flex w-full flex-col rounded-[1rem] bg-white bg-opacity-30 px-[0.625rem] pb-[0.625rem] shadow  backdrop-blur-lg backdrop-filter transition-all hover:scale-[1.01] active:scale-100 xl:h-[750px]"
          >
            <div className="flex items-center justify-between py-[13px] ">
              <h4 className=" text-[1.125rem] font-semibold">BGRSolutions</h4>
              <span className=" text-sm">e-commerce</span>
            </div>
            <div className=" flex h-full w-full ">
              <div className="h-[200px] w-full rounded-[1rem] bg-[url('/bgrsolutions.webp')] bg-cover bg-center bg-no-repeat md:h-[305px] xl:h-[685px]"></div>
            </div>
          </Link>
          <Link
            href="https://cloudninetenerife.es"
            className="flex w-full flex-col rounded-[1rem] bg-white bg-opacity-30 px-[0.625rem] pb-[0.625rem] shadow  backdrop-blur-lg backdrop-filter transition-all hover:scale-[1.01] active:scale-100 xl:h-[750px]"
          >
            <div className="flex items-center justify-between py-[13px] ">
              <h4 className=" text-[1.125rem] font-semibold">
                CloudNineTenerife
              </h4>
              <span className="text-sm">Beauty & Education</span>
            </div>
            <div className=" flex h-full w-full ">
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
        <h3 className="text-[30px] font-semibold ">About</h3>
        <div className="flex flex-col gap-5 lg:flex-row xl:flex-1 xl:items-center xl:gap-12">
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
        className="mb-[48px] flex h-[90dvh] scroll-m-[58px] flex-col gap-3 pt-[3rem]"
      >
        <h3 className="text-[30px] font-semibold ">Contact</h3>
        <span className="max-w-[388px] text-[1.125rem] sm:text-center md:max-w-fit md:text-start xl:max-w-[60%] xl:text-[1.375rem]">
          Connect with me for collaborations, questions, or just to say hello!
        </span>
        <div className="flex flex-1 flex-col gap-8 xl:mt-[12rem]">
          <div className="flex flex-col gap-5 bg-opacity-50 p-8 text-center lg:flex-row xl:justify-evenly">
            <div className="flex justify-center">
              <a href="mailto:mikeygeraghty@gmail.com">
                <div className="mb-2 flex h-[120px] w-[170px] items-center justify-center rounded-[1rem] bg-gray-100 shadow-lg shadow-neutral-500/20 backdrop-blur-lg  backdrop-filter transition hover:scale-105 hover:border hover:border-[#1d5352] active:scale-95 xl:h-[250px] xl:w-[250px] xl:text-6xl">
                  <FontAwesomeIcon icon={faEnvelope} size="5x" />
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
                <div className="mb-2 flex h-[120px] w-[170px] items-center justify-center rounded-[1rem]  bg-gray-100 shadow-lg shadow-neutral-500/20 backdrop-blur-lg backdrop-filter transition hover:scale-105 hover:border hover:border-[#1d5352] active:scale-95 xl:h-[250px] xl:w-[250px] xl:text-6xl">
                  <FontAwesomeIcon icon={faLinkedin} size="5x" />
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
                <div className="mb-2 flex h-[120px] w-[170px] items-center justify-center rounded-[1rem] bg-gray-100 shadow-lg shadow-neutral-500/20 backdrop-blur-lg  backdrop-filter transition hover:scale-105 hover:border hover:border-[#1d5352] active:scale-95 xl:h-[250px] xl:w-[250px] xl:text-6xl">
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
