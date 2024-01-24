export default function Footer() {
  return (
    <footer className="w-full ">
      <div className=" max-w-screen-xl rounded-t-lg bg-white p-4 shadow md:flex md:items-center md:justify-between dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          <a href="https://mgwebs.com/" className="hover:underline">
            MGWebs
          </a>
          . 2024
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
          <li>
            <a href="#home" className="me-4 hover:underline md:me-6">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="me-4 hover:underline md:me-6">
              About
            </a>
          </li>
          {/* <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              Privacy Policy
            </a>
          </li> */}
          {/* <li>
            <a href="#" className="me-4 hover:underline md:me-6">
              Licensing
            </a>
          </li> */}
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
