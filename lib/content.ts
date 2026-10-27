// Landing page copy. Anything in [BRACKETS] is a placeholder — see TODO.md.

export type WorkItem = {
  label: string;
  caption: string;
  href?: string;
};

export const work: WorkItem[] = [
  {
    label: "topdj.ie",
    caption: "DJ booking website · [PHONE SCORE]",
    href: "https://topdj.ie",
  },
  {
    label: "[CLIENT NAME]",
    caption: "Speed fix · Score [34] → [96], loads in [1.4s]",
  },
  {
    label: "mikxyg.com",
    caption: "Brand site and design system · [PHONE SCORE]",
    href: "https://mikxyg.com",
  },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  price: string;
  bullets: string[];
  variant: "tint" | "white" | "coral";
};

export const services: Service[] = [
  {
    number: "01",
    title: "Speed fix",
    description:
      "Slow site? I fix images, code and loading so it passes Google’s speed test. 90+ on phones, or you don’t pay.",
    price: "€199",
    bullets: [
      "Free speed check first",
      "Before and after report",
      "Usually done in [A WEEK]",
    ],
    variant: "tint",
  },
  {
    number: "02",
    title: "New website",
    description:
      "A clean, fast site up to 5 pages that works on every phone and is set up for Google.",
    price: "€799",
    bullets: [
      "You approve the design first",
      "Contact form and maps",
      "30 days of help after launch",
    ],
    variant: "white",
  },
  {
    number: "03",
    title: "Redesign",
    description:
      "A fresh look for your current site, without losing your place on Google.",
    price: "€999",
    bullets: [
      "Old links keep working",
      "Rankings checked after launch",
      "Faster than before",
    ],
    variant: "coral",
  },
];

export const carePlans = ["Essential €29 / month", "Plus €59 / month"];

export const vatNote = "[VAT NOTE]";

export const steps = [
  {
    label: "Step 1",
    title: "Free speed check",
    body: "Send your web address. In 48 hours you get your score and a short video explaining it.",
  },
  {
    label: "Step 2",
    title: "One fixed price",
    body: "A written price before anything starts. No hourly billing, nothing added on at the end.",
  },
  {
    label: "Step 3",
    title: "See the difference",
    body: "You get the before and after numbers, and everything stays in your name.",
  },
];

export const guaranteeTerms =
  "[TERMS — e.g. applies to the pages agreed in your quote; excludes third-party add-ons you choose to keep.]";

export const faqs = [
  {
    question: "Is the speed check really free?",
    answer: "Yes. You keep the report and video whether or not you hire me.",
  },
  {
    question: "I’m not good with technology. Is that OK?",
    answer:
      "Of course. I handle the technical side and explain everything simply.",
  },
  {
    question: "My site is on WordPress, Wix or Squarespace. Can you help?",
    answer:
      "Yes. I’ll tell you honestly whether to fix it where it is or start fresh.",
  },
];
