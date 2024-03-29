import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "./navBar";
import Footer from "./footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
  variable: "--font-poppins",
});
const montserrat = Montserrat({
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
        className={`${poppins.variable} ${montserrat.variable} flex flex-col items-center lg:m-auto lg:items-start`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
