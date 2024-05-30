import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import { Providers } from "./providers";

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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} flex flex-col items-center lg:mx-auto lg:max-w-screen-lg`}
      >
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
