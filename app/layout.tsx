import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navBar";
import Footer from "./footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600"],
  variable: "--font-poppins",
});

// Font awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
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
    <html lang="en">
      <body
        className={`${inter.variable} relative flex flex-col items-center `}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
