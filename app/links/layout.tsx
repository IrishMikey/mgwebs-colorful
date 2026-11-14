import type { Metadata } from "next";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: { absolute: "Links - MGWebs" },
  description:
    "Connect with Michael Geraghty on social media and explore his work",
  alternates: {
    canonical: "/links",
  },
  openGraph: {
    title: "Links - MGWebs",
    description:
      "Connect with Michael Geraghty on social media and explore his work",
    type: "website",
    url: "/links",
  },
  twitter: {
    card: "summary_large_image",
    title: "Links - MGWebs",
    description:
      "Connect with Michael Geraghty on social media and explore his work",
  },
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
