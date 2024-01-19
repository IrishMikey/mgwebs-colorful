import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./navBar";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500"],
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
        className={`${poppins.className} flex flex-col items-center lg:m-auto lg:items-start`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
