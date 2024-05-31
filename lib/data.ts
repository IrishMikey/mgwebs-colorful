import bgrPhonesImg from "@/public/bgr-phones.webp";
import bgrSamsungImg from "@/public/bgrSamsung.webp";
import bgrMediaImg from "@/public/bgr-media.webp";
import bgrsolutionsImg from "@/public/bgrsolutions.webp";

import casamagicImg from "@/public/casamagic.webp";
import cloudninetenerifeImg from "@/public/cloudninetenerife.webp";
import manclubImg from "@/public/tenerifemanclub.png";

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
] as const;
export const projectsData = [
  {
    title: "BGRSolutions",
    desc: "A dynamic e-commerce solution using WordPress and WooCommerce. Seamlessly integrating CSV imports and translation plugins to ensure smooth operations.",
    card: {
      imageUrl: bgrsolutionsImg,
      built_with: ["WooCommerce"],
      link: "https://bgrsolutions.net",
      alt: "A screenshot of bgrsolutions.net",
    },
    modal: [
      {
        imageUrl: bgrSamsungImg,
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
    title: "Casa Magic",
    desc: "Casa Magic. A holiday rental in Tenerife Sur. Made with NextJs & Tailwind.",
    card: {
      imageUrl: casamagicImg,
      built_with: ["NextJS"],
      link: "https://casamagictenerife.com",
      alt: "A screenshot of Casamagictenerife.com",
    },
    modal: [
      {
        imageUrl: casamagicImg,
        desc: "Casa Magic. A holiday rental in Tenerife Sur. Made with NextJs & Tailwind.",
        alt: "A screenshot of Casamagictenerife.com",
      },
    ],
  },

  {
    title: "Tenerife Man Club",
    desc: "A space for men of Tenerife to talk in a non-judgemental atmosphere improving their mental health.",
    sponsored: "Sponsored",
    card: {
      imageUrl: manclubImg,
      built_with: ["WordPress"],
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
  {
    title: "Cloud Nine",
    desc: "Cloud Nine Tenerife is a beauty & education salon in the south of Tenerife.",
    card: {
      imageUrl: cloudninetenerifeImg,
      built_with: ["NextJS"],
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
] as const;
