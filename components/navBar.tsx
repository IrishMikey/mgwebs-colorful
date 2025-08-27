"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useRouter, usePathname } from "next/navigation";

export default function NavBar() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const router = useRouter();
  const pathname = usePathname();

  // Hide navbar on links page
  if (pathname === "/links") {
    return null;
  }

  return (
    <header className="relative z-[999]">
      <motion.div
        className="fixed left-1/2 top-4 h-[3rem] w-[95vw] max-w-[28rem] rounded-xl shadow-2xl backdrop-blur-xl sm:top-6 sm:h-[4.285rem] sm:w-[34rem]"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="top-4 flex h-[3rem] items-center justify-center sm:top-[1.7rem] sm:h-[4.285rem]">
          <ul className="flex w-[95vw] max-w-[28rem] items-center justify-between px-1 text-[0.85rem] font-medium sm:w-[34rem] sm:px-2 sm:text-[0.9rem]">
            {links.map((link) => (
              <motion.li
                className="relative flex h-3/4 items-center justify-center"
                key={link.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-1 py-2 text-[14px] text-white transition-all duration-300 hover:text-purple-300 sm:px-2 sm:py-3 sm:text-[16px]",
                    {
                      "text-purple-200": activeSection === link.name,
                    },
                  )}
                  href={link.hash}
                  onClick={() => {
                    if (link.hash.startsWith("#")) {
                      // If we're on the links page, navigate back to main page first
                      if (pathname === "/links") {
                        router.push(link.hash);
                      } else {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                      }
                    } else {
                      // For full page routes like /links
                      setActiveSection(link.name);
                    }
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
