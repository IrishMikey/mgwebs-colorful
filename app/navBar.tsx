"use client";
import { useEffect, useState } from "react";
import { Link, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "work", "about", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      let activeSection = "home";

      for (let i = 1; i < sectionIds.length; i++) {
        const section = document.getElementById(sectionIds[i]);
        if (section && scrollPosition >= section.offsetTop) {
          activeSection = sectionIds[i];
        }
      }

      setActiveSection(activeSection);
      console.log("Active section: " + activeSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      position="sticky"
      className="top-4 z-20 h-10 w-fit rounded-[1.125rem] bg-[rgb(139,139,139)] bg-opacity-80 px-[0.5rem] shadow backdrop-blur-lg backdrop-filter "
    >
      <NavbarContent>
        <NavbarItem isActive={true}>
          <Link href="#home">Home</Link>
        </NavbarItem>
        <NavbarItem isActive={activeSection === "work"}>
          <Link href="#work">Work</Link>
        </NavbarItem>
        <NavbarItem isActive={activeSection === "about"}>
          <Link href="#about">About</Link>
        </NavbarItem>
        <NavbarItem isActive={activeSection === "contact"}>
          <Link href="#contact">Contact</Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
