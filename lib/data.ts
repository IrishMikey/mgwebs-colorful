import bgrPhonesImg from "@/public/bgr-phones.webp";
import bgrMediaImg from "@/public/bgr-media.webp";
import bgrsolutionsImg from "@/public/bgrsolutions.png";
import premSimImg from "@/public/premsim.png";

import casamagicImg from "@/public/casamagic.webp";
import cloudninetenerifeImg from "@/public/cloudninetenerife.webp";
import manclubImg from "@/public/tenerifemanclub.png";
import villaChloeImg from "@/public/villachloe.png";

import gamingBanner from "@/public/gallery/gamingBanner.png";
import tvBanner from "@/public/gallery/tvBanner.png";
import eurosBanner from "@/public/gallery/eurosBanner.png";
import componentesBanner from "@/public/gallery/componentesBanner.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Work",
    hash: "#work",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "Links",
    hash: "/links",
  },
] as const;
export const projectsData = [
  {
    title: "PremSim",
    desc: "Interactive Premier League table simulator.",
    card: {
      imageUrl: premSimImg,
      built_with: {
        tech: "Vite + React",
        colour: "default",
      },
      link: "https://premsim.com",
      alt: "A screenshot of premsim.com",
    },
    modal: [
      {
        imageUrl: premSimImg,
        desc: "Interactive Premier League table simulator, based on users' predictions.",
        alt: "A screenshot of premsim.com",
      },
    ],
  },
  {
    title: "BGRSolutions",
    desc: "A dynamic e-commerce solution using WordPress and WooCommerce. Seamlessly integrating CSV imports and translation plugins to ensure smooth operations.",
    card: {
      imageUrl: bgrsolutionsImg,
      built_with: {
        tech: "WooCommerce",
        colour: "secondary",
      },
      link: "https://bgrsolutions.net",
      alt: "A screenshot of bgrsolutions.net",
    },
    modal: [
      {
        imageUrl: bgrsolutionsImg,
        desc: "A dynamic e-commerce solution using WordPress and WooCommerce. Seamlessly integrating CSV imports and translation plugins to ensure smooth operations.",
        alt: "A screenshot of bgrsolutions.net",
      },
      {
        imageUrl: bgrMediaImg,
        desc: "With a knack for customization, I have added bespoke HTML, CSS, and JavaScript elements when necessary, enhancing functionality and aesthetics.",
        alt: "A graphic of a multimedia banner for an ecommerce",
      },
      {
        imageUrl: bgrPhonesImg,
        desc: "Designing promotional and in-store graphics. From eye-catching posters to captivating digital displays, I excel in crafting visually appealing assets that elevate brand presence and drive engagement both online and offline.",
        alt: "A graphic of a smartphone banner for an ecommerce",
      },
    ],
    date: "Mar 2023 - Nov 2024",
  },
  {
    title: "Casa Magic",
    desc: "A holiday rental in Tenerife Sur. Made with NextJs & Tailwind.",
    card: {
      imageUrl: casamagicImg,
      built_with: {
        tech: "Next.js",
        colour: "default",
      },
      link: "https://casamagictenerife.com",
      alt: "A screenshot of Casamagictenerife.com",
    },
    modal: [
      {
        imageUrl: casamagicImg,
        desc: "A holiday rental in Tenerife Sur. Made with NextJs & Tailwind.",
        alt: "A screenshot of Casamagictenerife.com",
      },
    ],
  },
  {
    title: "Villa Chloé",
    desc: "The perfect villa rental in Tenerife Sur for golfers. Neighbouring 2 golf courses, Golf del Sur & Amarilla Golf.",
    card: {
      imageUrl: villaChloeImg,
      built_with: {
        tech: "WordPress",
        colour: "primary",
      },
      link: "https://villachloe135.com",
      alt: "A screenshot of villa chloé, holiday villa in tenerife",
    },
    modal: [
      {
        imageUrl: bgrsolutionsImg,
        desc: "A dynamic e-commerce solution using WordPress and WooCommerce. Seamlessly integrating CSV imports and translation plugins to ensure smooth operations.",
        alt: "A screenshot of bgrsolutions.net",
      },
      {
        imageUrl: bgrMediaImg,
        desc: "With a knack for customization, I have added bespoke HTML, CSS, and JavaScript elements when necessary, enhancing functionality and aesthetics.",
        alt: "A graphic of a multimedia banner for an ecommerce",
      },
      {
        imageUrl: bgrPhonesImg,
        desc: "Designing promotional and in-store graphics. From eye-catching posters to captivating digital displays, I excel in crafting visually appealing assets that elevate brand presence and drive engagement both online and offline.",
        alt: "A graphic of a smartphone banner for an ecommerce",
      },
    ],
  },
  {
    title: "Cloud Nine",
    desc: "Cloud Nine Tenerife is a beauty & education salon in the south of Tenerife.",
    card: {
      imageUrl: cloudninetenerifeImg,
      built_with: {
        tech: "Next.js",
        colour: "default",
      },
      link: "https://cloudninetenerife.es",
      alt: "A screenshot of cloudninetenerife.es",
    },
    modal: [
      {
        imageUrl: cloudninetenerifeImg,
        desc: "Cloud Nine Tenerife is a beauty & education salon in the south of Tenerife.",
        alt: "A screenshot of cloudninetenerife.es",
      },
    ],
  },
  {
    title: "Tenerife Man Club",
    desc: "A space for men of Tenerife to talk in a non-judgemental atmosphere improving their mental health.",
    sponsored: "Sponsored",
    card: {
      imageUrl: manclubImg,
      built_with: {
        tech: "WordPress",
        colour: "primary",
      },
      link: "https://tenerifeman.club",
      alt: "A screenshot of tenerifeman.club",
    },
    modal: [
      {
        imageUrl: cloudninetenerifeImg,
        desc: "Cloud Nine Tenerife is a beauty & education salon in the south of Tenerife.",
        alt: "A screenshot of cloudninetenerife.es",
      },
    ],
  },
] as const;

export const galleryImgs = [
  { imageUrl: gamingBanner },
  { imageUrl: eurosBanner },
  { imageUrl: componentesBanner },
  { imageUrl: tvBanner },
] as const;
