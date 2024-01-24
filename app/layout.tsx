import type { Metadata } from "next";
import { Poppins, Days_One } from "next/font/google";
import "./globals.css";
import NavBar from "./navBar";
import Footer from "./footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  variable: "--font-poppins",
});
const days_one = Days_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-days-one",
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
        className={`${poppins.variable} ${days_one.variable} flex flex-col items-center lg:m-auto lg:items-start`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
