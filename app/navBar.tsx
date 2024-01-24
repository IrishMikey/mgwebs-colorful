export default function NavBar() {
  return (
    <nav className="fixed z-50 my-[20px] w-full px-3 lg:left-0 lg:right-0 lg:w-fit ">
      <ul className="flex h-12 grow items-center rounded-[1.125rem] bg-white bg-opacity-60 px-[0.5rem] py-1 shadow backdrop-blur-lg backdrop-filter ">
        <li className="grow text-center">
          <a
            className="rounded-lg px-2 py-1 text-[1.25rem] transition-all hover:font-semibold active:bg-blue-500 active:text-white"
            href="#"
          >
            Home
          </a>
        </li>
        <li className="grow text-center">
          <a
            className="rounded-lg px-2 py-1 text-[1.25rem] transition-all hover:font-semibold active:bg-blue-500 active:text-white"
            href="#work"
          >
            Work
          </a>
        </li>
        <li className="grow text-center">
          <a
            className="rounded-lg px-2 py-1 text-[1.25rem] transition-all hover:font-semibold active:bg-blue-500 active:text-white"
            href="#about"
          >
            About
          </a>
        </li>
        <li className="grow text-center">
          <a
            className="rounded-lg px-2 py-1 text-[1.25rem] transition-all hover:font-semibold active:bg-blue-500 active:text-white"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
