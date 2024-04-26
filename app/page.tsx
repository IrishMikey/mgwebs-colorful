"use client";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faArrowUpRightFromSquare,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import NavBar from "./navBar";
import NextImage from "next/image";

import { Card, Chip, Link, Image, Button } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState("inside");

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
          className="bg-zinc-900 flex scroll-mt-[5rem] flex-col gap-10 rounded-[1rem] px-3 py-5 pb-10"
        >
          <div className="flex flex-col gap-5">
            <h3 className=" flex justify-between text-[2rem] font-[600] leading-[1.1em]">
              Recent Work <span> 🔨</span>
            </h3>

            <span className="text-zinc-400 max-w-[40ch] ">
              Discover my portfolio of diverse projects, highlighting my
              knowledge in web development and design.
            </span>
          </div>

          <div className="mt-5 flex w-full flex-1 flex-col justify-center gap-8 md:gap-12">
            <Card
              onPress={onOpen}
              isPressable={true}
              className="bg-zinc-500 flex w-full flex-col gap-2 rounded-[1rem] bg-opacity-30 px-[0.625rem] pb-[0.625rem] shadow  backdrop-blur-lg backdrop-filter transition-all hover:scale-[1.01] active:scale-100 "
            >
              <div className="flex w-full items-center justify-between py-[13px] ">
                <h4 className=" text-[1.125rem] font-semibold">BGRSolutions</h4>
                <FontAwesomeIcon icon={faExpand} />
              </div>
              <Image
                as={NextImage}
                src="/bgrsolutions.webp"
                height={300}
                width={600}
                alt="Desktop screenshot of bgrsolutions.net"
              ></Image>
              <div className="flex items-center justify-between">
                <Chip color="default" radius="md">
                  WooCommerce
                </Chip>
              </div>
            </Card>
            <Modal
              isOpen={isOpen}
              backdrop="opaque"
              hideCloseButton={true}
              onOpenChange={onOpenChange}
              scrollBehavior={scrollBehavior}
              className=""
            >
              {/* PASS isOpen STATE FROM  useDisclosure HOOK*/}
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalBody className="gap-8">
                      <header className="flex flex-initial py-4 text-[2rem] font-semibold">
                        BGRSolutions
                      </header>
                      <p className="text-zinc-300">
                        A dynamic e-commerce solution using WordPress and
                        WooCommerce. Seamlessly integrating CSV imports and
                        translation plugins to ensure smooth operations.
                      </p>
                      <div className="bg-zinc-800 flex w-full justify-center rounded-[1rem] py-2">
                        <Image
                          as={NextImage}
                          width={200}
                          height={300}
                          src="/bgrHome-mobile.webp"
                          alt="A mobile screenshot of www.bgrsolutions.net homepage"
                        ></Image>
                      </div>
                      <p className="text-zinc-300">
                        With a knack for customization, I have added bespoke
                        HTML,CSS and JavaScript, elements when necessary,
                        enhancing functionality and aesthetics.
                      </p>
                      <div className="bg-zinc-800 flex w-full justify-center rounded-[1rem] p-2">
                        <Image
                          as={NextImage}
                          width={400}
                          height={300}
                          src="/bgrSamsung.webp"
                          alt="A mobile screenshot of www.bgrsolutions.net homepage"
                        ></Image>
                      </div>

                      <p className="text-zinc-300">
                        Designing promotional and in-store graphics. From
                        eye-catching posters to captivating digital displays, I
                        excel in crafting visually appealing assets that elevate
                        brand presence and drive engagement both online and
                        offline.
                      </p>
                      <Image
                        as={NextImage}
                        width={400}
                        height={300}
                        src="/bgr-media.webp"
                        alt="A graphic of a multimedia banner for an ecommerce"
                      ></Image>
                      <Image
                        as={NextImage}
                        width={400}
                        height={300}
                        src="/bgr-phones.webp"
                        alt="A graphic of a smartphone banner for an ecommerce"
                      ></Image>
                    </ModalBody>
                    <ModalFooter className="">
                      <Button fullWidth={true} color="primary">
                        <Link
                          href="https://bgrsolutions.net"
                          className="text-white flex gap-2"
                        >
                          Check it out
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </Link>
                      </Button>
                      <Button
                        isIconOnly={true}
                        variant="faded"
                        onPress={onClose}
                      >
                        X
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>

            <Link
              href="https://casamagictenerife.com"
              className="flex w-full flex-col rounded-[1rem] bg-[#fff]  bg-opacity-30 px-[0.625rem] pb-[0.625rem] shadow  backdrop-blur-lg backdrop-filter transition-all hover:scale-[1.01] active:scale-100 "
            >
              <div className="flex items-center justify-between py-[13px] ">
                <h4 className=" text-[1.125rem] font-semibold">Casa Magic</h4>
                <span className=" text-sm text-[#5c5c5c]">Holiday rental</span>
              </div>
              <div className=" flex min-h-full w-full flex-col gap-2 ">
                <div className="h-[200px] w-full rounded-[1rem] bg-[url('/casamagic.png')] bg-cover bg-center bg-no-repeat md:h-[305px] xl:h-[685px]"></div>
                <span className=" w-fit rounded-xl bg-[#a1a1a1] px-2 text-sm text-[#fff]">
                  NextJS
                </span>
              </div>
            </Link>
            <Link
              href="https://cloudninetenerife.es"
              className="flex w-full flex-col rounded-[1rem] bg-[#fff] bg-opacity-30 px-[0.625rem] pb-[0.625rem] shadow transition-all hover:scale-[1.01] active:scale-100 "
            >
              <div className="flex items-center justify-between py-[13px] ">
                <h4 className=" text-[1.125rem] font-semibold">Cloud Nine</h4>
                <span className="text-sm text-[#5c5c5c]">
                  Beauty & Education
                </span>
              </div>
              <div className=" flex min-h-full w-full flex-col gap-2 ">
                <div className="h-[200px] w-full rounded-[1rem] bg-[url('/cloudninetenerife.webp')] bg-cover bg-no-repeat md:h-[305px]  xl:h-[685px]"></div>
                <span className=" w-fit rounded-xl bg-[#a1a1a1] px-2 text-sm text-[#fff]">
                  NextJS
                </span>
              </div>
            </Link>
          </div>
        </section>
        {/* About section */}
        <section
          id="about"
          className="mx-4 my-[1rem] flex scroll-m-[5rem] flex-col gap-5"
        >
          <h3 className="dark:text-white  text-4xl font-bold ">About me</h3>
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
