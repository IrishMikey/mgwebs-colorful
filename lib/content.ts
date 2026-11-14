// Landing page copy. Anything in [BRACKETS] is a placeholder, see TODO.md.

export type BuildItem = {
  label: string;
  tools: string;
  time: string;
  result: string;
  href?: string;
};

export const builds: BuildItem[] = [
  {
    label: "topdj.ie",
    tools: "[TOOLS]",
    time: "[TIME]",
    result: "[PHONE SCORE]",
    href: "https://topdj.ie",
  },
  {
    label: "[CLIENT NAME]",
    tools: "[TOOLS]",
    time: "[TIME]",
    result: "Score [34] to [96]",
  },
  {
    label: "mikxyg.com",
    tools: "[TOOLS]",
    time: "[TIME]",
    result: "[PHONE SCORE]",
    href: "https://mikxyg.com",
  },
];

export type Service = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  variant: "tint" | "white" | "coral";
};

export const services: Service[] = [
  {
    number: "01",
    title: "New website",
    description:
      "A clean, fast site up to 5 pages that works on every phone and is set up for Google.",
    bullets: [
      "You approve the design first",
      "Contact form and maps",
      "30 days of help after launch",
    ],
    variant: "tint",
  },
  {
    number: "02",
    title: "Redesign or AI site rescue",
    description:
      "A fresh look for your current site, or a proper finish for one built with AI tools. You keep your place on Google.",
    bullets: [
      "Old links keep working",
      "Works with Lovable, Bolt, v0 and WordPress",
      "Rankings checked after launch",
    ],
    variant: "white",
  },
  {
    number: "03",
    title: "Speed fix",
    description:
      "Slow site? I fix images, code and loading so it passes Google's speed test. If it's not 90+ on phones, you don't pay.",
    bullets: [
      "Before and after report",
      "Usually done in [A WEEK]",
      "[GUARANTEE TERMS]",
    ],
    variant: "coral",
  },
];

export const extras = ["Design systems", "Ongoing care plan"];

export const steps = [
  {
    label: "Step 1",
    title: "Free review.",
    body: "Send your web address. In 48 hours you get a short video covering design, words, speed and anything that looks AI-made.",
  },
  {
    label: "Step 2",
    title: "One fixed price.",
    body: "A written price before anything starts. No hourly billing, nothing added at the end.",
  },
  {
    label: "Step 3",
    title: "See the difference.",
    body: "Before and after screenshots and numbers, and everything stays in your name.",
  },
];

export type AiTellItem = {
  number: string;
  tell: string;
  problem: string;
  fix: string;
};

export const aiTells: AiTellItem[] = [
  {
    number: "1",
    tell: "The same look as everyone else.",
    problem: "Purple gradients, three icon cards, a stock hero.",
    fix: "I design from your brand, your photos and your customers.",
  },
  {
    number: "2",
    tell: "Words that say nothing.",
    problem: '"Unlock your potential" tells no one what you do.',
    fix: "I write plain copy: what you do, where, and what it costs.",
  },
  {
    number: "3",
    tell: "Looks fine, works badly.",
    problem: "Slow on phones, broken forms, missing from Google.",
    fix: "I test on real phones and set it up so Google can find you.",
  },
];

export const faqs = [
  {
    question: "Is the review really free?",
    answer: "Yes. You keep the video whether or not you hire me.",
  },
  {
    question: "Do you use AI?",
    answer:
      "Yes, to build faster. I check every line and every page myself, so your site doesn't look or act AI-made.",
  },
  {
    question: "I built my site with Lovable, Bolt or ChatGPT. Can you fix it?",
    answer:
      "Yes. I'll tell you honestly whether to finish what you have or start fresh.",
  },
  {
    question: "I'm not good with technology. Is that OK?",
    answer:
      "Of course. I handle the technical side and explain everything simply.",
  },
  {
    question: "My site is on WordPress, Wix or Squarespace. Can you help?",
    answer: "Yes. I'll tell you whether to fix it where it is or move it.",
  },
  {
    question: "Do you only work in Ireland?",
    answer:
      "No. I'm based in Dublin and work with businesses anywhere, by video call.",
  },
];
