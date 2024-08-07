import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navBar";
import { Toaster } from '@pheralb/toast';
import Footer from "../components/footer";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600"],
  variable: "--font-inter",
});

// Font awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import ActiveSectionContextProvider from "@/context/active-section-context";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "MGWebs",
  description: "Web development by Michael Geraghty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body className={`${inter.variable} `}>
        <Providers>
          <ActiveSectionContextProvider>
            <NavBar />
            {children}
            <Toaster/>
          </ActiveSectionContextProvider>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
