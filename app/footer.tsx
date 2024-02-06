export default function Footer() {
  return (
    <footer className="bg-royal-blue-900 text-royal-blue-100 w-full rounded-t-lg shadow">
      <div className=" max-w-screen  p-4 md:flex md:w-[575px] md:items-center md:justify-between lg:m-auto xl:w-[1080px] ">
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
