import type { Metadata } from "next";
import { siteName, siteDescription } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${siteName} — Diseño y desarrollo web en Tenerife` },
  description: siteDescription.es,
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
    },
  },
  openGraph: {
    title: `${siteName} — Diseño y desarrollo web en Tenerife`,
    description: siteDescription.es,
    type: "website",
    url: "/es",
    locale: "es_ES",
  },
  twitter: {
    card: "summary",
    title: `${siteName} — Diseño y desarrollo web en Tenerife`,
    description: siteDescription.es,
  },
};

export default function EsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
