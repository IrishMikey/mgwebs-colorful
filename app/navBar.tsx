export default function NavBar() {
  return (
    <nav className="my-[20px] z-50 fixed">
      <div>
        <ul className="bg-white bg-opacity-60 backdrop-filter shadow backdrop-blur-lg px-[16px] py-1 rounded-xl">
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
