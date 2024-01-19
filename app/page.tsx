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
        className="mt-[13rem] flex h-[58dvh] scroll-mt-[17rem] flex-col gap-5 xl:gap-[7rem]"
      >
        <div className="flex flex-col items-center xl:items-start xl:gap-[15px] ">
          <h1 className="text-[30px] xl:text-[85px]  ">
            Hey, I&apos;m Michael 👋
          </h1>
          <h2 className="text-[40px] font-bold leading-[3.5rem] lg:text-[100px] ">
            Web Developer
          </h2>
        </div>
        <div className="flex flex-col items-center gap-2 lg:items-start">
          <span className="max-w-[388px] text-center text-[19px] md:w-auto xl:max-w-[60%] xl:text-start xl:text-[26px]">
            I&apos;m on a mission to create captivating, enjoyable, and
            user-oriented digital experiences
          </span>
          {/* <span className="xl-text-[28px] text-[18px] mx-6 sm:text-center max-w-[388px] md:w-auto">
            Let&apos;s turn <span className="font-semibold">your vision </span>
            into an online journey!
          </span> */}
        </div>
        {/* <div className="flex gap-8 justify-center">
          <Link
            href="#work"
            className="text-white bg-[#fd6231] text-center font-semibold xl-text-[32px] py-[10px] px-[20px] rounded-2xl"
          >
            My Work
          </Link>
          <Link
            href="#contact"
            className="bg-white xl-text-[32px] text-center py-[10px] px-[20px] rounded-2xl"
          >
            Contact
          </Link>
        </div> */}
      </section>
      <section
        id="work"
        className="mb-[50px] flex scroll-m-[60px] flex-col gap-3 md:gap-5"
      >
        <h3 className="text-[30px] font-semibold ">My Work</h3>

        <span className=" max-w-[388px] text-[18px] sm:text-center md:max-w-fit md:text-start">
          Discover my portfolio of diverse projects, highlighting my expertise
          in web development and design.
        </span>

        <div className="mt-5 flex w-full flex-1 flex-col justify-center gap-8 md:gap-12">
          <Link
            href="https://bgrsolutions.net"
            className="flex w-full flex-col rounded-[16px] bg-white bg-opacity-30 px-[10px] pb-[10px] shadow  backdrop-blur-lg backdrop-filter transition-all hover:scale-[1.01] active:scale-100 xl:h-[750px]"
          >
            <div className="flex items-center justify-between py-[13px] ">
              <h4 className=" text-[18px] font-semibold">BGRSolutions</h4>
              <span className=" text-sm">e-commerce</span>
            </div>
            <div className=" flex h-full w-full ">
              <div className="h-[200px] w-full rounded-[16px] bg-[url('/bgrsolutions.webp')] bg-cover bg-center bg-no-repeat md:h-[305px] xl:h-[685px]"></div>
            </div>
          </Link>
          <Link
            href="https://cloudninetenerife.es"
            className="flex w-full flex-col rounded-[16px] bg-white bg-opacity-30 px-[10px] pb-[10px] shadow  backdrop-blur-lg backdrop-filter transition-all hover:scale-[1.01] active:scale-100 xl:h-[750px]"
          >
            <div className="flex items-center justify-between py-[13px] ">
              <h4 className=" text-[18px] font-semibold">CloudNineTenerife</h4>
              <span className="text-sm">Beauty & Education</span>
            </div>
            <div className=" flex h-full w-full ">
              <div className="h-[200px] w-full rounded-[16px] bg-[url('/cloudninetenerife.webp')] bg-cover bg-no-repeat md:h-[305px]  xl:h-[685px]"></div>
            </div>
          </Link>
        </div>
      </section>
      {/* About section */}
      <section
        id="about"
        className="mb-[1rem] flex  scroll-m-[60px] flex-col gap-5"
      >
        <h3 className="text-[30px] font-semibold ">About</h3>
        <div className="flex flex-col gap-5 lg:flex-row xl:gap-12">
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
            {/* <div className="h-[230px] md:h-[385px] w-full bg-[url('/me_headshot.webp')] bg-cover bg-no-repeat bg-center rounded-[16px]"></div> */}
            <Image
              src="/me_headshot.webp"
              height="230"
              width="358"
              alt="A picture of me, Michael Geraghty"
              className="rounded-[16px] xl:w-[700px]"
            ></Image>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="mb-[48px] flex h-[90dvh] scroll-m-[80px] flex-col gap-3 pt-[3rem]"
      >
        <h3 className="text-[30px] font-semibold ">Contact</h3>
        <span className="max-w-[388px] text-[1.1875rem] sm:text-center md:max-w-fit md:text-start xl:max-w-[75%] xl:text-[2rem] xl:leading-[110%]">
          Connect with me for collaborations, questions, or just to say hello!
        </span>
        <div className="flex flex-1 flex-col gap-8 xl:mt-[12rem]">
          <div className="flex bg-opacity-50 p-8 text-center xl:justify-evenly">
            <div className="">
              <a href="mailto:mikeygeraghty@gmail.com">
                <div className="mb-2 flex items-center justify-center rounded-[16px]  bg-gray-100 backdrop-blur-lg backdrop-filter transition-all hover:scale-105 hover:border hover:border-[#1d5352] active:scale-100 xl:h-[250px] xl:w-[250px] xl:text-6xl">
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </div>
                <span className="text-[22px]">Email</span>
              </a>
            </div>
            <div className="">
              <a
                href="https://www.linkedin.com/in/michaeldanielgeraghty/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mb-2 flex items-center justify-center rounded-[16px]  bg-gray-100 backdrop-blur-lg backdrop-filter transition-all hover:scale-105 hover:border hover:border-[#1d5352] active:scale-100 xl:h-[250px] xl:w-[250px] xl:text-6xl">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </div>
                <span className="text-[22px]">LinkedIn</span>
              </a>
            </div>
            <div className=" ">
              <a
                href="https://twitter.com/MGWebss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mb-2 flex items-center justify-center rounded-[16px]  bg-gray-100 backdrop-blur-lg backdrop-filter transition-all hover:scale-105 hover:border hover:border-[#1d5352] active:scale-100 xl:h-[250px] xl:w-[250px] xl:text-6xl">
                  <FontAwesomeIcon className="" icon={faXTwitter} size="2x" />
                </div>
                <span className="text-[22px]">X</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
