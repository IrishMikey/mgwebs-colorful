import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navBar";
import { Toaster } from "@pheralb/toast";
import Footer from "../components/footer";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import { siteUrl, siteName, siteDescription } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Font awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import ActiveSectionContextProvider from "@/context/active-section-context";
config.autoAddCss = false;

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Hand-built websites, not AI slop`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription.en,
  keywords: [
    "web developer",
    "web design Ireland",
    "web design Tenerife",
    "diseño web Tenerife",
    "custom website design",
    "small business website",
  ],
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: `${siteName} — Hand-built websites, not AI slop`,
    description: siteDescription.en,
    images: [{ url: "/headshot.jpg" }],
    locale: "en_IE",
  },
  twitter: {
    card: "summary",
    title: `${siteName} — Hand-built websites, not AI slop`,
    description: siteDescription.en,
    images: ["/headshot.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Michael Geraghty",
  alternateName: siteName,
  url: siteUrl,
  jobTitle: "Web Developer & Designer",
  description: siteDescription.en,
  image: `${siteUrl}/headshot.jpg`,
  sameAs: [
    "https://github.com/IrishMikey",
    "https://www.linkedin.com/in/michaeldanielgeraghty/",
    "https://twitter.com/MGWebss",
  ],
  knowsAbout: [
    "Web Development",
    "Web Design",
    "Next.js",
    "WordPress",
    "E-commerce",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body className={`${inter.variable} `} suppressHydrationWarning={true}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {recaptchaSiteKey ? (
          <Script
            id="google-recaptcha"
            src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
            strategy="afterInteractive"
          />
        ) : null}
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
