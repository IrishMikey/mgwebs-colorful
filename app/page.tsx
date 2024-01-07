import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col xl-w-[1440px] mx-4">
      <section
        id="home"
        className="flex flex-col xl-scroll-mt-[5rem] scroll-mt-[17rem] mt-[10rem] xl-mt-[5rem] gap-5 xl-gap-12 h-[65dvh]"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-[30px] xl-text-[99px] text-center ">
            Hey, I&apos;m Michael 👋
          </h1>
          <h2 className="text-[40px] xl-text-[93px] font-bold text-center leading-[3.5rem] ">
            Web Developer
          </h2>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="xl:text-[28px] text-[19px] text-center max-w-[388px] md:w-auto">
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
        className="flex flex-col scroll-m-[80px] xl-gap-[120px] gap-3 mb-[48px]"
      >
        <h3 className="xl-text-[99px] font-semibold text-[30px] ">My Work</h3>
        <span className="xl-text-[28px] text-[18px] sm:text-center max-w-[388px] md:w-auto">
          Discover my portfolio of diverse projects, highlighting my expertise
          in web development and design.
        </span>
        <div className="flex flex-col xl-gap-[50px] gap-8 w-full mt-5 flex-1 justify-center">
          <div className="flex flex-col w-full rounded-[16px] bg-white bg-opacity-30 backdrop-filter shadow backdrop-blur-lg  pb-[10px] px-[10px]">
            <div className="flex justify-between items-center py-[13px] ">
              <h4 className="xl-text-[41px] text-[18px] font-semibold">
                BGRSolutions
              </h4>
              <span className="xl-text-[32px] text-sm">e-commerce</span>
            </div>
            <div className=" flex w-full h-full ">
              <Link
                href="https://bgrsolutions.net"
                className="h-[200px] xl-h-[691px] w-full bg-[url('/bgrsolutions.webp')] bg-cover bg-no-repeat bg-center rounded-[16px] transition-all hover:scale-[1.01]"
              ></Link>
            </div>
          </div>
          <div className="flex flex-col w-full rounded-[16px] bg-white bg-opacity-30 backdrop-filter shadow backdrop-blur-lg  pb-[10px] px-[10px]">
            <div className="flex justify-between items-center py-[13px] ">
              <h4 className="xl-text-[41px] text-[18px] font-semibold">
                CloudNineTenerife
              </h4>
              <span className="xl-text-[32px] text-sm">Beauty & Education</span>
            </div>
            <div className=" flex w-full h-full ">
              <Link
                href="https://cloudninetenerife.es"
                className="h-[200px] xl-h-[691px] w-full bg-[url('/cloudninetenerife.webp')] bg-cover bg-no-repeat rounded-[16px] transition-all hover:scale-[1.01]"
              ></Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id="work"
        className="flex flex-col min-h-[90vh] scroll-m-[80px] xl-gap-[120px] gap-3 mb-[48px]"
      >
        <h3 className="xl-text-[99px] font-semibold text-[30px] ">About</h3>
        <span className="xl-text-[28px] text-[19px] sm:text-center max-w-[388px] md:w-auto ">
          Hello! I&apos;m Michael Geraghty, a dedicated Web Developer based in
          the Canary Islands.
        </span>
        <span className="xl-text-[28px] text-[19px] sm:text-center max-w-[388px] md:w-auto ">
          With a passion for web development, I specialize in creating dynamic
          web pages and applications. Skilled in React.Js and Next.Js, I focus
          on building intuitive, user-driven websites.
        </span>
        <span className="xl-text-[28px] text-[19px] sm:text-center max-w-[388px] md:w-auto ">
          I thrive on feedback and detail, ensuring every project is a step
          towards digital excellence..
        </span>
      </section>
      {/* <section
        id="contact"
        className="flex flex-col min-h-[95vh] items-center  gap-[120px]"
      >
        <h3 className="text-[99px] font-semibold  ">Contact</h3>
        <div className="flex flex-col items-center p-8 bg-opacity-50 rounded-[32px] backdrop-filter backdrop-blur-lg bg-gray-100 w-2/3">
          <ul className="space-y-4">
            <li className="glass-item">
              <a
                href="https://www.linkedin.com/in/michaeldanielgeraghty/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[33px] hover:font-semibold transition-all"
              >
                LinkedIn
              </a>
            </li>
            <li className="glass-item">
              <a
                href="mailto:mikeygeraghty@gmail.com"
                className="text-[33px] hover:font-semibold transition-all"
              >
                Email
              </a>
            </li>
            <li className="glass-item">
              <a
                href="https://twitter.com/geraghtymikey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[33px] hover:font-semibold transition-all"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </section> */}
    </main>
  );
}
