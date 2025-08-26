import type { Metadata } from "next";
import NavBar from "../../components/navBar";
import { Toaster } from "@pheralb/toast";
import Footer from "../../components/footer";
import { Providers } from "../providers";
import ActiveSectionContextProvider from "@/context/active-section-context";

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
  return (
    <html lang="en" className="!scroll-smooth dark">
      <body suppressHydrationWarning={true}>
        {/* Abstract background shapes */}
        <div className="abstract-shape"></div>
        <div className="abstract-shape"></div>
        <div className="abstract-shape"></div>

        <Providers>
          <ActiveSectionContextProvider>
            <NavBar />
            {children}
            <Toaster />
          </ActiveSectionContextProvider>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
