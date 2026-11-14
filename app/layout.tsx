import type { Metadata, Viewport } from "next";
import { Inter, Questrial } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteUrl, siteName, siteTitle, siteDescription } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-questrial",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
    locale: "en_IE",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IE" className={`${inter.variable} ${questrial.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
