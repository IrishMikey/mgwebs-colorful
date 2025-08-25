import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links - MGWebs",
  description:
    "Connect with Michael Geraghty on social media and explore his work",
  openGraph: {
    title: "Links - MGWebs",
    description:
      "Connect with Michael Geraghty on social media and explore his work",
    type: "website",
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
