export default function NavBar() {
  return (
    <nav className="fixed left-0 right-0 top-5 z-50 m-auto w-full px-3 sm:w-fit">
      <ul className="bg-white flex h-12 grow items-center rounded-[1.125rem] bg-opacity-80 px-[0.5rem] py-1 shadow backdrop-blur-lg backdrop-filter sm:gap-4 dark:bg-[rgb(83,77,77)] dark:bg-opacity-45">
        <li className="grow text-center">
          <a
            className="active:bg-blue-500 active:text-white rounded-lg px-2 py-1 text-[1.175rem] font-semibold transition-all hover:font-semibold dark:bg-[#EB7B14] dark:text-[#494949]"
            href="#"
          >
            Inico
          </a>
        </li>
        <li className="grow text-center">
          <a
            className="active:bg-blue-500 active:text-white rounded-lg px-2 py-1 text-[1.175rem] transition-all hover:font-semibold"
            href="#proyectos"
          >
            Proyectos
          </a>
        </li>
        <li className="grow text-center">
          <a
            className="active:bg-blue-500 active:text-white rounded-lg px-2 py-1 text-[1.175rem] transition-all hover:font-semibold"
            href="#sobre-mi"
          >
            Sobre mi
          </a>
        </li>
        <li className="grow text-center">
          <a
            className="active:bg-blue-500 active:text-white rounded-lg px-2 py-1 text-[1.175rem] transition-all hover:font-semibold"
            href="#contacto"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
