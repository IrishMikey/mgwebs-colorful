export default function NavBar() {
  return (
    <nav className="fixed z-50 my-[20px] lg:left-0 lg:right-0">
      <div className="lg:flex lg:justify-center">
        <ul className="rounded-xl bg-white bg-opacity-60 px-[8px] py-1 shadow backdrop-blur-lg backdrop-filter  ">
          <li className="flex gap-8">
            <a
              className="text-[16px] transition-all hover:font-semibold"
              href="#home"
            >
              Home
            </a>
            <a
              className="text-[16px] transition-all hover:font-semibold"
              href="#work"
            >
              Work
            </a>
            <a
              className="text-[16px] transition-all hover:font-semibold"
              href="#about"
            >
              About
            </a>
            <a
              className="text-[16px] transition-all hover:font-semibold"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
