# MGWebs — Landing Page Redesign Brief (V3 "Clean with personality")

Implementation spec for redesigning the MGWebs landing page to match the V3 mock-up.
Audience: Claude Code / a developer working in the existing repo.

---

## 0. Goal & constraints

- **Purpose:** a one-page site Mikey shares during cold outreach as social proof. It must build trust in under 10 seconds and convert to a **free speed check** request.
- **Audience:** Irish small-business owners of all ages, including older, less technical owners. Plain English, large tap targets, high contrast.
- **Look:** clean, Apple-like (white space, near-black text, one accent) with subtle personality (tilted image chips, soft glows, overlapping service cards).
- **Stack:** Next.js (App Router) + TypeScript + **Tailwind CSS v4**, deployed on Vercel. Keep the existing repo structure; replace the landing page only. Style with Tailwind utilities using the theme tokens below — no hardcoded hex values or arbitrary values in components except where noted (rotations, chip sizes).
- **The site is the demo:** it must score **95+ on mobile PageSpeed** and pass all Core Web Vitals.

### Do not

- Add new dependencies unless listed here (no UI kits, no animation libraries).
- Use gradients other than the soft blurred glows described below.
- Use emoji as icons.
- Lorem ipsum. Copy is final unless marked `[PLACEHOLDER]`.

---

## 1. Design tokens

Tailwind v4 is CSS-first: define tokens with `@theme` in `app/globals.css`. Each `--color-*`, `--radius-*`, `--shadow-*`, `--font-*` and `--container-*` variable becomes a utility automatically (e.g. `bg-accent`, `text-muted`, `rounded-card`, `shadow-card`, `max-w-page`).

```css
@import "tailwindcss";

@theme {
  /* Colour */
  --color-bg: #FFFFFF;
  --color-subtle: #FAFAFC;      /* bg-subtle — work section */
  --color-muted-bg: #F5F5F7;    /* bg-muted-bg — guarantee panel, pills */
  --color-tint: #EEF0FF;        /* bg-tint — service card 01 */
  --color-placeholder: #ECECF1; /* bg-placeholder — image placeholders */
  --color-line: #E2E2E7;        /* border-line */
  --color-line-strong: #D2D2D7; /* border-line-strong */
  --color-input: #C7C7CC;       /* border-input */

  --color-ink: #1D1D1F;         /* text-ink — primary text */
  --color-body: #45454A;        /* text-body — long-form body */
  --color-muted: #5E5E63;       /* text-muted — passes 4.5:1 on white AND #F5F5F7 */

  --color-accent: #4338F2;      /* indigo — buttons, links, step labels */
  --color-accent-hover: #3529D9;
  --color-coral: #D6363F;       /* heart tile, card 03, glows. White text passes 4.5:1 */

  /* Fonts (wired to next/font variables, see §2) */
  --font-sans: var(--font-body), system-ui, -apple-system, sans-serif;
  --font-display: var(--font-questrial), var(--font-body), sans-serif;

  /* Radius */
  --radius-input: 14px;   /* rounded-input — inputs, heart tile */
  --radius-media: 22px;   /* rounded-media — work images */
  --radius-card: 26px;    /* rounded-card — service cards */
  --radius-panel: 36px;   /* rounded-panel — guarantee panel */

  /* Shadow */
  --shadow-card: 0 18px 40px rgb(0 0 0 / 0.07);
  --shadow-form: 0 24px 60px rgb(0 0 0 / 0.06);
  --shadow-chip: 0 8px 20px rgb(0 0 0 / 0.08);

  /* Layout */
  --container-page: 1200px;   /* max-w-page */
  --container-narrow: 1100px; /* max-w-narrow */
  --container-prose: 820px;   /* max-w-prose (overrides default) */
}

@layer base {
  html { @apply bg-bg text-ink font-sans antialiased; }
  h1, h2, h3 { @apply font-display font-normal; }
  :focus-visible { @apply outline-2 outline-offset-3 outline-accent; }
}

@utility section-y { padding-block: 72px; @media (width >= 48rem) { padding-block: 112px; } }
```

Use `rounded-full` for pills. If the repo is still on **Tailwind v3**, put the same values under `theme.extend` in `tailwind.config.ts` instead and keep the utility names identical.

**Contrast rules:** never put `text-muted` on a background darker than `bg-muted-bg` (#F5F5F7). Never use coral or accent for body text on tinted backgrounds. Run axe after build.

---

## 2. Typography

Load with `next/font/google` (self-hosted, no layout shift):

```ts
import { Inter, Questrial } from "next/font/google";
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});
export const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-questrial",
  display: "swap",
});
```

Apply both `.variable` classes to `<html>` in `app/layout.tsx`. Then use `font-display` for headings and the default `font-sans` for body.

| Role            | Font          | Desktop   | Mobile    | Line-height | Tracking |
| --------------- | ------------- | --------- | --------- | ----------- | -------- |
| H1 (hero)       | Questrial 400 | 76px      | 44px      | 1.12        | -0.02em  |
| H2 (section)    | Questrial 400 | 52px      | 36px      | 1.1         | -0.02em  |
| H2 (final CTA)  | Questrial 400 | 56px      | 38px      | 1.08        | -0.02em  |
| H3 (card title) | Questrial 400 | 34px      | 28px      | 1.2         | -0.01em  |
| H3 (step / FAQ) | Questrial 400 | 26 / 22px | 22 / 20px | 1.3         | 0        |
| Price           | Questrial 400 | 30px      | 28px      | 1.2         | 0        |
| Lead paragraph  | Inter 400     | 20px      | 18px      | 1.6         | 0        |
| Body            | Inter 400     | 17–19px   | 17px      | 1.65        | 0        |
| Small / meta    | Inter 400     | 14–15px   | 14px      | 1.5         | 0        |
| Buttons, labels | Inter 500     | 15–17px   | 16px      | 1           | 0        |

Use responsive utilities or arbitrary `clamp()` for H1/H2 (e.g. `text-[clamp(44px,6vw,76px)] leading-[1.12] tracking-[-0.02em]`). **Minimum body text 17px** — older visitors are a key audience.

Example class strings:

- H1: `font-display text-[clamp(44px,6vw,76px)] leading-[1.12] tracking-[-0.02em] text-ink`
- H2: `font-display text-[clamp(36px,4.2vw,52px)] leading-[1.1] tracking-[-0.02em]`
- Lead: `text-lg md:text-xl leading-relaxed text-muted`
- Primary button: `inline-flex items-center min-h-13 px-6.5 rounded-full bg-accent hover:bg-accent-hover text-white font-medium`
- Secondary button: `inline-flex items-center min-h-13 px-6.5 rounded-full bg-white border border-line-strong text-ink font-medium`
- Service card (coral): `w-full max-w-[680px] rounded-card p-9 bg-coral text-white md:-rotate-[0.4deg] md:-mt-[18px] self-end`
- Glow: `pointer-events-none absolute size-[420px] rounded-full bg-coral/15 blur-[80px]` + `aria-hidden`
- Reduced motion: add `motion-reduce:rotate-0` to every rotated element.

---

## 3. Components

Build as small React server components in `components/`. No client JS except the form.

### Button

- Pill (`rounded-full`), min-height **52px** (56px in form), padding `0 26px`, Inter 500 16px.
- `primary`: `bg-accent hover:bg-accent-hover text-white`.
- `secondary`: `bg-white border border-line-strong text-ink`.
- Always a real `<a href>` or `<button>`. Focus ring comes from the base `:focus-visible` rule (`outline-accent`).

### HeadlineChip (inline image in H1)

- `inline-flex`, `vertical-align: middle`, 132×72px desktop (88×48 mobile), radius 16px, 1px `border-line`, `shadow-chip`.
- Rotations: first `-4deg`, second `3deg`.
- Content: `next/image` with real screenshots (see §6). `alt=""` and `aria-hidden` — decorative; the H1 text must read correctly without them.

### Glow (decorative)

- Absolutely positioned circle, `filter: blur(80–90px)`, `opacity: 0.14–0.18`, `aria-hidden`, `pointer-events: none`.
- Parent section needs `position: relative; overflow: hidden` (or the page wrapper does) to prevent horizontal scroll.
- Respect `prefers-reduced-transparency` if supported — fall back to no glow.

### WorkCard

- Image block 240px tall, `rounded-media`, label pill bottom-left (white, radius pill, 13px).
- Caption below in muted text.
- Middle card offset `margin-top: 40px` on desktop only (≥1024px).

### ServiceCard (stacked)

- Max-width 680px, `rounded-card`, padding 36px, flex-wrap row: left column (title, description, price) + right bullet list aligned to bottom.
- Variants: `tint` (`bg-tint`), `white` (`border border-line shadow-card`), `coral` (`bg-coral text-white`).
- Stack: card 1 `align-self: flex-start; rotate(-0.6deg)`, card 2 `center; rotate(0.5deg); margin-top: -18px`, card 3 `flex-end; rotate(-0.4deg); margin-top: -18px`.
- **Mobile (<768px):** full width, no rotation, `margin-top: 12px` (no overlap).

### FAQ item

- Use native `<details><summary>` for accessibility and zero JS. Hairline top border `border-line-strong`; last item gets bottom border too.

### AuditForm (client component)

- Fields: Name, Website address (`type="url"`, allow no protocol — normalise on submit), Email or phone.
- Real `<label for>` on every input. Inputs min-height 52px, 17px text, radius 14px.
- Submit → Server Action / Route Handler that emails Mikey (Resend is already available) and returns a success state: "Thanks — I'll be in touch within 24 hours."
- Honeypot field for spam; no CAPTCHA.
- Errors announced with `aria-live="polite"`.

---

## 4. Page structure & copy

`app/page.tsx`. Sections in order. Copy is final unless `[PLACEHOLDER]`.

### 4.1 Nav

- Three-part row: left links **Work** (`#work`), **Prices** (`#services`); centre wordmark **MGWebs** (Questrial 22px); right **Questions** (`#faq`), **Free speed check** (`#audit`, accent colour, Inter 500).
- Mobile: wordmark left, single "Free speed check" link right; hide the others (no hamburger needed for a one-pager).

### 4.2 Hero (`#top`)

- Centred, max-width 1040px, padding 96px top / 120px bottom. Coral glow top-left, indigo glow bottom-right.
- Eyebrow (15px muted): **Mikey · Web designer in Dublin**
- H1: **Faster websites** `[chip: score 34→96]` **that win you** `[chip: site on a phone]` **more customers.**
- Lead: **I build and fix websites for Irish small businesses. Start with a free speed check, explained in plain English.**
- Buttons: secondary **See my work** → `#work`; primary **Get a free speed check** → `#audit`.
- Meta line (14px muted): **Fixed prices · Everything in your name · Reply within 24 hours**

### 4.3 Work (`#work`)

- Background `bg-subtle`, top corners rounded 40px.
- H2: **Websites** `[coral heart tile 54×54, radius 14, white stroke heart SVG]` **I've built and fixed**
- Side text: **Every project comes with before and after numbers, so you can see exactly what changed.**
- Cards:
  1. Label **topdj.ie** — caption **DJ booking website · [PHONE SCORE]** — link to https://topdj.ie
  2. Label **[CLIENT NAME]** — caption **Speed fix · Score [34] → [96], loads in [1.4s]**
  3. Label **mikxyg.com** — caption **Brand site and design system · [PHONE SCORE]** — link to https://mikxyg.com

### 4.4 Services & prices (`#services`)

- H2 centred: **What I do**
- Sub: **Fixed, written prices before any work starts.** `[VAT NOTE]`
- Card 01 (tint) — **01 Speed fix** — "Slow site? I fix images, code and loading so it passes Google's speed test. 90+ on phones, or you don't pay." — **from €199** — bullets: Free speed check first · Before and after report · Usually done in [A WEEK]
- Card 02 (white) — **02 New website** — "A clean, fast site up to 5 pages that works on every phone and is set up for Google." — **from €799** — bullets: You approve the design first · Contact form and maps · 30 days of help after launch
- Card 03 (coral) — **03 Redesign** — "A fresh look for your current site, without losing your place on Google." — **from €999** — bullets: Old links keep working · Rankings checked after launch · Faster than before
- Care plan row (centred pills): **Care plans to keep it fast and safe:** `[Essential €29 / month]` `[Plus €59 / month]` **Cancel any time.**

### 4.5 How it works

- H2 centred: **Simple from start to finish**
- Three columns, each with a 1px top border, accent step label (14px, 600):
  - **Step 1 — Free speed check:** Send your web address. In 48 hours you get your score and a short video explaining it.
  - **Step 2 — One fixed price:** A written price before anything starts. No hourly billing, nothing added on at the end.
  - **Step 3 — See the difference:** You get the before and after numbers, and everything stays in your name.

### 4.6 Guarantee

- Panel `bg-muted-bg`, `rounded-panel`, padding 88px, centred, small coral glow top-right.
- Eyebrow: **My promise**
- H2 (48px): **If your phone score isn't 90+ after my speed fix, you don't pay for it.**
- Terms (14px muted): `[TERMS — e.g. applies to the pages agreed in your quote; excludes third-party add-ons you choose to keep.]`
- Button primary: **Check my site for free** → `#audit`

### 4.7 About

- Left: portrait `[PHOTO]`, 380px tall, radius 30px, `rotate(-2deg)`.
- H2: **Hi, I'm Mikey.**
- P1: **I'm a professional web developer based in Dublin. By day I build websites in financial services. MGWebs is how I bring that same standard to small businesses, at a fair, fixed price.**
- P2: **You deal with me directly, in plain English. If you'd rather talk than email, just ring.**
- Do **not** name the employer.

### 4.8 FAQ (`#faq`)

- H2 centred: **Questions**
- Is the speed check really free? — _Yes. You keep the report and video whether or not you hire me._
- I'm not good with technology. Is that OK? — _Of course. I handle the technical side and explain everything simply._
- My site is on WordPress, Wix or Squarespace. Can you help? — _Yes. I'll tell you honestly whether to fix it where it is or start fresh._
- Can I use the Trading Online Voucher? — _Your Local Enterprise Office voucher can cover up to 50% of eligible costs, up to €2,500._ `[CONFIRM WITH LEO]`
- Also emit these as `FAQPage` JSON-LD.

### 4.9 Final CTA + form (`#audit`)

- Left: H2 **Is your website slowing you down?** / **Send me your web address and find out for free. You'll hear back within 48 hours.** / **Prefer to talk?** `tel:` link **+353 [NUMBER]** in accent.
- Right: AuditForm card (white, 1px border, `rounded-[28px] shadow-form p-9`). Button **Send my free speed check**. Note below: **Reply within 24 hours. No spam, ever.**

### 4.10 Footer

- Hairline top border. Row: **MGWebs** (Questrial 18px) · Dublin, Ireland | `[HELLO]@mgwebs.com` · +353 `[NUMBER]` | © 2026 MGWebs

---

## 5. Responsive behaviour

| Breakpoint | Changes                                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ≥1024px    | As designed. Middle work card offset. Service cards staggered + rotated.                                                                                                        |
| 768–1023px | Work cards 2-up then wrap. Service cards full width, keep small overlap, no rotation.                                                                                           |
| <768px     | Single column everywhere. H1 44px, chips 88×48. Nav collapses to wordmark + CTA. Service cards: no overlap/rotation. About photo above text, no rotation. Section padding 72px. |

No horizontal scroll at 320px. Every tap target ≥ 48px.

---

## 6. Images & assets

- Use `next/image` with explicit `width`/`height`, AVIF/WebP, `sizes` set per layout.
- Hero chips and portrait: `priority` only on the first hero chip (LCP candidate is the H1 text — keep it that way).
- Everything below the fold lazy-loads (default).
- Needed from Mikey: `[PORTRAIT]`, `[SCORE CARD SCREENSHOT]`, `[PHONE MOCKUP]`, `[topdj.ie screenshot]`, `[mikxyg.com screenshot]`, `[CLIENT before/after]`.
- Until provided, render `bg-placeholder` boxes with the label — **do not** use stock photos.
- Heart icon: inline SVG (stroke, 2.2px, round caps). Favicon: "MG" monogram on accent.

---

## 7. SEO & metadata

- `<html lang="en-IE">`.
- Title: **MGWebs — Web Design & Speed Fixes in Dublin**
- Description: **Faster websites for Irish small businesses. Free speed check, fixed prices from €199, and everything in your name. Based in Dublin.**
- Open Graph image 1200×630 (wordmark + H1 on white with glows).
- JSON-LD: `ProfessionalService` (name, url, areaServed: Ireland, address locality Dublin, telephone, priceRange "€€") + `FAQPage`.
- `sitemap.ts`, `robots.ts`, canonical to `https://mgwebs.com`.
- Redirect `mgwebs.ie` → `mgwebs.com` (301) when purchased.

---

## 8. Performance budget

- Mobile PageSpeed **≥ 95**; LCP < 2.0s, INP < 200ms, CLS < 0.05.
- Total JS shipped < 70KB gzipped (form is the only client component).
- No third-party scripts except Vercel Analytics / Speed Insights.
- Fonts via `next/font` only; no external font requests.
- Glows use CSS only (no images).

---

## 9. Accessibility checklist

- WCAG 2.2 AA. Run axe + Lighthouse accessibility (target 100).
- One `<h1>`; logical heading order.
- All decorative elements (`chips`, `glows`, heart tile) `aria-hidden`.
- Visible focus states on every interactive element.
- `prefers-reduced-motion`: remove card/photo rotations.
- Form: labels, `autocomplete` (`name`, `url`, `email`/`tel`), error messages in text, not colour alone.

---

## 10. Acceptance criteria

- [ ] Matches V3 mock-up layout, tokens and copy.
- [ ] All `[PLACEHOLDER]` items listed in a `TODO.md` for Mikey.
- [ ] Mobile PageSpeed ≥ 95, CWV all green (screenshot in PR).
- [ ] axe: 0 violations. Works at 320px, 768px, 1280px, 1440px.
- [ ] Form submission sends an email and shows success state; honeypot blocks bots.
- [ ] Lighthouse SEO 100; JSON-LD validates in Rich Results Test.
- [ ] No console errors; no layout shift on font load.

---

## 11. Open items for Mikey

1. Real before/after numbers and screenshots for the speed-fix case study.
2. Guarantee terms wording.
3. VAT note (check registration status).
4. Turnaround times (speed fix, new site).
5. Business email and phone number.
6. Portrait photo.
7. Confirm Trading Online Voucher wording with LEO.
8. Update or date-stamp the speed stats if reintroduced (removed from V3).
