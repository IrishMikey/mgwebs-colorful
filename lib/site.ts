export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mgwebs.com"
).replace(/\/$/, "");

export const siteName = "MGWebs";

export const siteDescription = {
  en: "Hand-built websites for small businesses in Ireland and Tenerife — real design and development, not AI-generated templates.",
  es: "Páginas web hechas a mano para pequeños negocios en Tenerife — diseño y desarrollo real, no plantillas generadas por IA.",
};
