export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mgwebs.com"
).replace(/\/$/, "");

export const siteName = "MGWebs";

export const siteTitle = "MGWebs — Web Design & Speed Fixes in Dublin";

export const siteDescription =
  "Faster websites for Irish small businesses. Free speed check, fixed prices from €199, and everything in your name. Based in Dublin.";

// TODO(Mikey): replace the placeholders below (see TODO.md).
export const contact = {
  email: "[HELLO]@mgwebs.com",
  phoneDisplay: "+353 [NUMBER]",
  // E.164 format, e.g. "+353871234567". Leave empty until the number is real.
  phoneE164: "",
};

export const isPlaceholder = (value: string) => /\[.*\]/.test(value);
