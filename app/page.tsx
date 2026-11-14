import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Builds from "@/components/builds";
import AiSection from "@/components/ai-section";
import Services from "@/components/services";
import HowItWorks from "@/components/how-it-works";
import About from "@/components/about";
import Faq from "@/components/faq";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";
import { faqs } from "@/lib/content";
import { siteDescription, siteName, siteUrl, social } from "@/lib/site";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    image: `${siteUrl}/opengraph-image`,
    areaServed: [
      { "@type": "Country", name: "Ireland" },
      { "@type": "Place", name: "Worldwide" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dublin",
      addressCountry: "IE",
    },
    priceRange: "€€",
    founder: { "@type": "Person", name: "Michael Geraghty" },
    sameAs: [social.instagram, social.tiktok, social.youtube].filter(
      (url): url is string => Boolean(url),
    ),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-full bg-accent px-5 py-3 text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Builds />
        <AiSection />
        <Services />
        <HowItWorks />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
