export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mgwebs.com"
).replace(/\/$/, "");

export const siteName = "MGWebs";

export const siteTitle = "MGWebs | Web Designer in Dublin, AI-built sites finished by hand";

export const siteDescription =
  "Web developer in Dublin. I build fast websites with AI and finish every detail by hand. Free review, fixed written prices, everything in your name.";

export const contact = {
  email: "info@mgwebs.com",
};

// Business-facing handles, shared with the Instagram/TikTok content this site links from.
export const social = {
  instagram: "https://instagram.com/mgwebss",
  tiktok: "https://tiktok.com/@mgwebss",
  youtube: null as string | null, // [CHANNEL]: add once confirmed, see TODO.md
};
