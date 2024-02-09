import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import NavBar from "./navBarES";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className=" flex min-h-screen flex-col gap-16 font-poppins md:w-[575px] lg:m-auto xl:w-[1080px]">
        <section
          id="inicio"
          className="relative mb-20 flex min-h-[70vh] scroll-mt-[7rem] flex-col overflow-hidden px-4 pt-[7rem] xl:min-h-[90vh] xl:gap-[7rem]"
        >
          <div className="rounded-[0 0 150px 150px] absolute -right-16 top-0 -z-10 h-[15rem] w-[10rem] bg-royal-blue-300 blur-2xl"></div>
          <div className="flex flex-grow flex-col justify-between xl:gap-[5rem] ">
            <h4 className="w-full rounded-lg px-4 py-1 text-center text-[1.25rem] xl:text-[3.125rem] ">
              Hola, soy Michael 👋
            </h4>

            <h1 className="font-montserrat text-5xl font-bold  leading-[3.75rem] lg:text-[7.4375rem] lg:leading-[6.75rem]">
              Desarrollo y Diseño Web
              <span className="texStroke "> en Tenerife</span>
            </h1>
            <span className="text-lg md:w-auto xl:max-w-[80%] xl:text-3xl ">
              Mi misión es crear experiencias digitales agradables y orientadas
              al usuario con diseño web tenerife.
            </span>
          </div>
        </section>
        {/* Work section */}
        <section
          id="proyectos"
          className="mx-4 flex scroll-mt-[5rem] flex-col gap-3"
        >
          <h3 className="font-montserrat text-4xl font-bold text-[#070707] dark:text-[#EB7B14] ">
            Mis Proyectos
          </h3>

          <span className=" max-w-[294px]  text-[1.25rem] leading-8 sm:text-center md:max-w-fit md:text-start xl:max-w-[60%] xl:text-[1.375rem]">
            Descubra mis diversos proyectos para empresas en tenerife,
            destacando mi experiencia en diseño web tenerife.
          </span>

          <div className="mt-5 flex w-full flex-1 flex-col justify-center gap-8 md:gap-12">
            <Link
              href="https://bgrsolutions.net"
              className="flex w-full flex-col rounded-[1rem] bg-royal-blue-100  bg-opacity-30 px-[0.625rem] pb-[0.625rem] shadow  backdrop-blur-lg backdrop-filter transition-all hover:scale-[1.01] active:scale-100 xl:h-[750px]"
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
              className="flex w-full flex-col rounded-[1rem] bg-royal-blue-100 bg-opacity-30 px-[0.625rem] pb-[0.625rem] shadow   transition-all hover:scale-[1.01] active:scale-100 xl:h-[750px]"
            >
              <div className="flex items-center justify-between py-[13px] ">
                <h4 className=" text-[1.125rem] font-semibold">
                  CloudNineTenerife
                </h4>
                <span className="text-sm">Belleza y Educación</span>
              </div>
              <div className=" flex min-h-full w-full ">
                <div className="h-[200px] w-full rounded-[1rem] bg-[url('/cloudninetenerife.webp')] bg-cover bg-no-repeat md:h-[305px]  xl:h-[685px]"></div>
              </div>
            </Link>
          </div>
        </section>
        {/* About section */}
        <section
          id="sobre-mi"
          className="mx-4 my-[1rem] flex scroll-m-[5rem] flex-col gap-5"
        >
          <h3 className="font-montserrat text-4xl font-bold text-[#070707] dark:text-[#EB7B14]">
            Sobre Mi
          </h3>
          <div className="flex flex-col gap-5 xl:flex-1 xl:flex-row xl:items-center xl:gap-12">
            <div className="flex w-full flex-col gap-4 text-[1.1875rem] xl:text-[1.6rem] ">
              <span className="  sm:text-center md:text-start xl:max-w-[580px] ">
                ¡Hola! soy Michael Geraghty, un desarrollador web dedicado
                basado en las Islas Canarias.
              </span>
              <span className="sm:text-center  md:text-start xl:max-w-[580px] ">
                Con una pasión por el desarrollo web, me especializo en crear
                páginas web y aplicaciones dinámicas. Con habilidades en diseño
                de UI y diseño web wordpress tenerife, mi enfoque se centra en
                construir sitios web intuitivos y orientados al usuario.
              </span>
              <span className="sm:text-center  md:text-start xl:max-w-[580px] ">
                Si estás buscando servicios de diseño web en Tenerife, ¡has
                llegado al lugar indicado!
              </span>
            </div>
            <div className="">
              {/* <div className="h-[230px] md:h-[385px] w-full bg-[url('/me_headshot.webp')] bg-cover bg-no-repeat bg-center rounded-[1rem]"></div> */}
              <Image
                src="/me_headshot.webp"
                height="230"
                width="358"
                alt="Una foto de mi, Michael Geraghty"
                className="rounded-[1rem] xl:w-[700px]"
              ></Image>
            </div>
          </div>
        </section>
        <section
          id="contacto"
          className="mx-4 flex min-h-[90vh] scroll-mt-[5rem] flex-col gap-3 "
        >
          <h3 className="text-[30px] font-semibold ">Contact</h3>
          <span className="max-w-[388px] text-[1.125rem] sm:text-center md:max-w-fit md:text-start xl:max-w-[60%] xl:text-[1.375rem]">
            ¡Conéctate conmigo para colaboraciones, preguntas o simplemente para
            saludar! Si estás interesado en el diseño web en Tenerife, estaré
            encantado de ayudarte.
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
