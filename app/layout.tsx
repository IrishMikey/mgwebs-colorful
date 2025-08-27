import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navBar";
import { Toaster } from "@pheralb/toast";
import Footer from "../components/footer";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";

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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body className={`${inter.variable} `} suppressHydrationWarning={true}>
        {/* Abstract background shapes */}
        <div className="abstract-shape"></div>
        <div className="abstract-shape"></div>
        <div className="abstract-shape"></div>

        <Providers>
          <ActiveSectionContextProvider>
            <NavBar />
            {children}
            <Analytics />
            <Toaster />
          </ActiveSectionContextProvider>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
