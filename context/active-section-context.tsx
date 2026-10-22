"use client";

import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";
import { usePathname } from "next/navigation";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Set active section based on current pathname, adjusted during render
  // rather than in an effect (avoids a cascading re-render on navigation).
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (pathname === "/links") {
      setActiveSection("Links");
    } else if (pathname === "/") {
      setActiveSection("Home");
    }
  }

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider",
    );
  }

  return context;
}
