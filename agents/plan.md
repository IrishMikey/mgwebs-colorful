# MGWebs: Landing Page Brief (V4 "Built with AI, finished by hand")

Implementation spec for the MGWebs landing page. V4 keeps the V3 look and repositions the copy around the AI/dev content on Instagram, TikTok and Shorts.
Audience: Claude Code / a developer working in the existing repo.

**What changed from V3:** speed is now one service, not the headline. The lead offer is a free website review. A new "What AI websites get wrong" section. Work becomes Builds. No em dashes anywhere (see §1). Keyword map added (§8).

---

## 0. Goal and constraints

- **Purpose:** a one-page site Mikey shares during outreach and links from his socials. It must build trust in under 10 seconds and convert to a **free website review** request.
- **Positioning:** a web developer who uses AI to build fast, and checks every detail by hand so the site doesn't look or act AI-made.
- **Audience:**
  1. Small-business owners (Dublin first, but not limited to Ireland), including older, less technical owners.
  2. People who built a site with AI tools (Lovable, Bolt, v0, ChatGPT) and need a human to finish or fix it.
  3. Followers arriving from Instagram, TikTok and Shorts.
- **Voice:** plain English, first person ("I", never "we"), honest about AI. Large tap targets, high contrast.
- **Look:** clean, Apple-like (white space, near-black text, one accent) with subtle personality (soft glows, overlapping service cards). No images in the headline: the H1 is text only. Matches the MGWebs design system and Instagram kit.
- **Stack:** Next.js (App Router) + TypeScript + **Tailwind CSS v4**, deployed on Vercel. Keep the existing repo structure; replace the landing page only. Style with Tailwind utilities using the theme tokens below. No hardcoded hex values or arbitrary values in components except where noted (rotations).
- **The site is the demo:** it must score **95+ on mobile PageSpeed** and pass all Core Web Vitals.

### Do not

- Add new dependencies unless listed here (no UI kits, no animation libraries).
- Use gradients other than the soft blurred glows described below.
- Use emoji as icons.
- Use lorem ipsum. Copy is final unless marked `[PLACEHOLDER]`.
- Use em dashes. See §1.

---

## 1. Writing rules (read before touching copy)

### No em dashes. None.

The em dash (—) is one of the most recognised signs of AI-written text. Readers, clients and other developers spot it instantly. MGWebs sells sites that **don't** look AI-made, so a single em dash on the page undercuts the whole pitch. It reads as "he didn't even check his own site".

- **Banned characters in all copy:** em dash `—` and en dash `–`. This covers page text, headings, buttons, alt text, meta titles and descriptions, Open Graph text, JSON-LD, form messages, emails sent by the form, and code comments that ship.
- **Use instead:** a full stop (best), a comma, a colon, or brackets. Split the sentence if it needs a dash.
  - Don't: "Fast sites — built with AI — finished by hand."
  - Do: "Fast sites. Built with AI, finished by hand."
- **Ranges:** use "to" ("€29 to €59 a month", "2 to 3 days"). A plain hyphen is fine inside a compound word ("one-page", "AI-made").
- **Separators in titles:** use a pipe `|` or a middle dot `·`.
- **Check it in CI.** This fails (and prints the offending lines) if any em or en dash is found. List only folders that exist in the repo:
  ```bash
  ! LC_ALL=C.UTF-8 grep -rnP "[\x{2014}\x{2013}]" app components lib \
    --include=*.ts --include=*.tsx --include=*.md --include=*.mdx --include=*.json
  ```
  Save it as `scripts/lint-dashes.sh`, add `"lint:dashes": "sh scripts/lint-dashes.sh"` to `package.json`, and run it in the Vercel build: `"build": "npm run lint:dashes && next build"`.

### Other AI-copy tells to avoid

- Openers: "Welcome to", "In today's digital landscape", "Look no further".
- Words: unlock, elevate, seamless, cutting-edge, game-changer, empower, robust, leverage, bespoke, world-class, next-level.
- Padding in threes ("fast, reliable and scalable") when one specific fact would do.
- Vague claims. Use numbers: "loads in 1.4 seconds", "from €799", "reply within 24 hours".
- Irish English spelling throughout: colour, optimise, centre.

---

## 2. Design tokens

Tailwind v4 is CSS-first: define tokens with `@theme` in `app/globals.css`. Each `--color-*`, `--radius-*`, `--shadow-*`, `--font-*` and `--container-*` variable becomes a utility automatically (e.g. `bg-accent`, `text-muted`, `rounded-card`, `shadow-card`, `max-w-page`).

```css
@import "tailwindcss";

@theme {
  /* Colour */
  --color-bg: #ffffff;
  --color-subtle: #fafafc; /* bg-subtle: builds section */
  --color-muted-bg: #f5f5f7; /* bg-muted-bg: panels, pills */
  --color-tint: #eef0ff; /* bg-tint: service card 01 */
  --color-placeholder: #ececf1; /* bg-placeholder: image placeholders */
  --color-line: #e2e2e7; /* border-line */
  --color-line-strong: #d2d2d7; /* border-line-strong */
  --color-input: #8e8e93; /* border-input: 3.3:1 on white (V3's #C7C7CC failed 3:1) */

  --color-ink: #1d1d1f; /* text-ink, and bg-ink for the AI section */
  --color-ink-2: #2c2c2e; /* bg-ink-2: screenshot frames on ink */
  --color-ink-muted: #a1a1a6; /* text-ink-muted: secondary text on ink (6.6:1) */
  --color-body: #45454a; /* text-body: long-form body */
  --color-muted: #5e5e63; /* text-muted: passes 4.5:1 on white AND #F5F5F7 */

  --color-accent: #4338f2; /* indigo: buttons, links, step labels. Means "fixed" */
  --color-accent-hover: #3529d9;
  --color-coral: #d6363f; /* means "what's wrong": markers, before scores, logo full stop */

  /* Fonts (wired to next/font variables, see §3) */
  --font-sans: var(--font-body), system-ui, -apple-system, sans-serif;
  --font-display: var(--font-questrial), var(--font-body), sans-serif;

  /* Radius */
  --radius-input: 14px;
  --radius-media: 22px;
  --radius-card: 26px;
  --radius-panel: 36px;

  /* Shadow */
  --shadow-card: 0 18px 40px rgb(0 0 0 / 0.07);
  --shadow-form: 0 24px 60px rgb(0 0 0 / 0.06);
  --shadow-chip: 0 8px 20px rgb(0 0 0 / 0.08);

  /* Layout */
  --container-page: 1200px;
  --container-narrow: 1100px;
  --container-prose: 820px;
}

@layer base {
  html {
    @apply bg-bg text-ink font-sans antialiased;
  }
  h1,
  h2,
  h3 {
    @apply font-display font-normal;
  }
  :focus-visible {
    @apply outline-accent outline-2 outline-offset-3;
  }
}

@utility section-y {
  padding-block: 72px;
  @media (width >= 48rem) {
    padding-block: 112px;
  }
}
```

Use `rounded-full` for pills. If the repo is still on **Tailwind v3**, put the same values under `theme.extend` in `tailwind.config.ts` and keep the utility names identical.

**Contrast rules:** never put `text-muted` on a background darker than `bg-muted-bg`. On `bg-ink`, text is white or `text-ink-muted` only. Coral on ink is for markers and large numbers only (3.6:1), never body text. Never use indigo text on ink (fails). Run axe after build.

**Colour meaning:** coral = what's wrong, indigo = fixed. Keep this consistent with the Instagram posts.

---

## 3. Typography

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

Apply both `.variable` classes to `<html>` in `app/layout.tsx`. Use `font-display` for headings and the default `font-sans` for body. (JetBrains Mono is used on Instagram for prompts; the site doesn't need it.)

| Role                      | Font          | Desktop    | Mobile | Line-height | Tracking |
| ------------------------- | ------------- | ---------- | ------ | ----------- | -------- |
| H1 (hero)                 | Questrial 400 | 76px       | 44px   | 1.12        | -0.02em  |
| H2 (section)              | Questrial 400 | 52px       | 36px   | 1.1         | -0.02em  |
| H2 (final CTA)            | Questrial 400 | 56px       | 38px   | 1.08        | -0.02em  |
| H3 (card title)           | Questrial 400 | 34px       | 28px   | 1.2         | -0.01em  |
| H3 (step / FAQ / AI item) | Questrial 400 | 26px       | 22px   | 1.3         | 0        |
| Price                     | Questrial 400 | 30px       | 28px   | 1.2         | 0        |
| Lead paragraph            | Inter 400     | 20px       | 18px   | 1.6         | 0        |
| Body                      | Inter 400     | 17 to 19px | 17px   | 1.65        | 0        |
| Small / meta              | Inter 400     | 14 to 15px | 14px   | 1.5         | 0        |
| Buttons, labels           | Inter 500     | 15 to 17px | 16px   | 1           | 0        |

Use `clamp()` for H1/H2 (e.g. `text-[clamp(44px,6vw,76px)] leading-[1.12] tracking-[-0.02em]`). **Minimum body text 17px.**

Example class strings:

- H1: `font-display text-[clamp(44px,6vw,76px)] leading-[1.12] tracking-[-0.02em] text-ink`
- H2: `font-display text-[clamp(36px,4.2vw,52px)] leading-[1.1] tracking-[-0.02em]`
- Lead: `text-lg md:text-xl leading-relaxed text-muted`
- Primary button: `inline-flex items-center min-h-13 px-6.5 rounded-full bg-accent hover:bg-accent-hover text-white font-medium`
- Secondary button: `inline-flex items-center min-h-13 px-6.5 rounded-full bg-white border border-line-strong text-ink font-medium`
- Glow: `pointer-events-none absolute size-[420px] rounded-full bg-coral/15 blur-[80px]` + `aria-hidden`
- Reduced motion: add `motion-reduce:rotate-0` to every rotated element.

---

## 4. Components

Small React server components in `components/`. No client JS except the form.

### Button

- Pill, min-height **52px** (56px in form), padding `0 26px`, Inter 500 16px.
- `primary`: `bg-accent hover:bg-accent-hover text-white`. `secondary`: `bg-white border border-line-strong text-ink`.
- Always a real `<a href>` or `<button>`.

### Glow (decorative)

- Absolutely positioned circle, blur 80 to 90px, opacity 0.14 to 0.18, `aria-hidden`, `pointer-events: none`. Parent `relative overflow-hidden`.

### BuildCard (replaces WorkCard)

- Image block 240px tall, `rounded-media`, label pill bottom-left (white, 13px).
- Below: one-line title (H3 26px), then a row of `bg-tint` pills: **tools used**, **time taken**, **result** (e.g. phone score). Same structure as the Instagram Build post.
- Middle card offset `margin-top: 40px` on desktop only (≥1024px).

### AiTellItem (new, for §5.4)

- On `bg-ink`. Coral number circle (40px, white Questrial number), H3 in white, one line of "how I fix it" in `text-ink-muted`.

### ServiceCard (stacked)

- Max-width 680px, `rounded-card`, padding 36px, flex-wrap row: left (title, description, price) + right bullet list.
- Variants: `tint`, `white` (`border border-line shadow-card`), `coral` (`bg-coral text-white`).
- Desktop stagger: card 1 `self-start rotate(-0.6deg)`, card 2 `self-center rotate(0.5deg) -mt-[18px]`, card 3 `self-end rotate(-0.4deg) -mt-[18px]`.
- Mobile (<768px): full width, no rotation, `mt-3`.

### FAQ item

- Native `<details><summary>`. Hairline top border `border-line-strong`; last item gets a bottom border too.

### ReviewForm (client component, was AuditForm)

- Fields: Name, Website address (`type="url"`, allow no protocol, normalise on submit), Email or phone, optional "Anything you'd like me to look at?" (textarea, 3 rows).
- Real `<label for>` on every input. Inputs min-height 52px, 17px text, radius 14px, `border-input`.
- Submit → Server Action that emails Mikey via Resend and shows: "Thanks. I'll be in touch within 24 hours."
- Honeypot field; no CAPTCHA. Errors announced with `aria-live="polite"`.

---

## 5. Page structure and copy

`app/page.tsx`. Sections in order. Copy is final unless `[PLACEHOLDER]`.

### 5.1 Nav

- Left: **Builds** (`#builds`), **Prices** (`#services`). Centre: wordmark **MGWebs.** (Questrial 22px, coral full stop). Right: **Questions** (`#faq`), **Free review** (`#review`, accent, Inter 500).
- Mobile: wordmark left, "Free review" right.

### 5.2 Hero (`#top`)

- Centred, max-width 1040px, padding 96px top / 120px bottom. Coral glow top-left, indigo glow bottom-right.
- Eyebrow (15px muted): **Mikey · Web developer in Dublin, building with AI**
- H1 (text only, no inline images): **Good websites built fast with AI, finished by hand.**
- Lead: **I use AI to build faster, then check every detail myself so your site doesn't look or act AI-made. Start with a free review, explained in plain English.**
- Buttons: secondary **See my builds** → `#builds`; primary **Get a free review** → `#review`.
- Meta line (14px muted): **Fixed prices · Everything in your name · Reply within 24 hours**

### 5.3 Builds (`#builds`)

- `bg-subtle`, top corners rounded 40px.
- H2: **Things I've built** `[coral heart tile 54×54, radius 14, white stroke heart]`
- Side text: **Every build shows the tools, the time and the result, the same way I post them on Instagram.**
- Cards:
  1. **topdj.ie**: DJ booking website · pills `[TOOLS]` `[TIME]` `[PHONE SCORE]` · links to https://topdj.ie
  2. **[CLIENT NAME]**: Speed fix · pills `[TOOLS]` `[TIME]` `Score [34] to [96]`
  3. **mikxyg.com**: Brand site and design system · pills `[TOOLS]` `[TIME]` `[PHONE SCORE]` · links to https://mikxyg.com

### 5.4 What AI websites get wrong (new, `#ai`)

- Full-width `bg-ink`, `rounded-panel` inset in the page container, padding 88px desktop / 48px mobile. White text.
- Eyebrow (accent pill with white text, or coral outline pill): **Spot the AI site**
- H2 (white): **What AI websites get wrong**
- Lead (`text-ink-muted`): **AI is great at a first draft. These are the three things I fix on almost every AI-built site.**
- Three `AiTellItem`s:
  1. **The same look as everyone else.** Purple gradients, three icon cards, a stock hero. → _I design from your brand, your photos and your customers._
  2. **Words that say nothing.** "Unlock your potential" tells no one what you do. → _I write plain copy: what you do, where, and what it costs._
  3. **Looks fine, works badly.** Slow on phones, broken forms, missing from Google. → _I test on real phones and set it up so Google can find you._
- Link below (white, underlined): **Built yours with Lovable, Bolt or ChatGPT? I can finish it.** → `#review`
- A square screenshot of an AI-looking site with coral markers 1 to 3 over the gradient, the headline and the cards (same as the Roast post). `next/image`, lazy, `alt="Example AI-generated website with three problems marked"`.

### 5.5 Services and prices (`#services`)

- H2 centred: **What I do**
- Sub: **Fixed, written prices before any work starts.** `[VAT NOTE]`
- Card 01 (tint): **01 New website**: "A clean, fast site up to 5 pages that works on every phone and is set up for Google." **from €799** · bullets: You approve the design first · Contact form and maps · 30 days of help after launch
- Card 02 (white): **02 Redesign or AI site rescue**: "A fresh look for your current site, or a proper finish for one built with AI tools. You keep your place on Google." **from €999** · bullets: Old links keep working · Works with Lovable, Bolt, v0 and WordPress · Rankings checked after launch
- Card 03 (coral): **03 Speed fix**: "Slow site? I fix images, code and loading so it passes Google's speed test. If it's not 90+ on phones, you don't pay." **from €199** · bullets: Before and after report · Usually done in [A WEEK] · `[GUARANTEE TERMS]`
- Extras row (centred pills): **Also:** `[Design systems]` `[Care plan from €29 / month]` **Cancel any time.**

### 5.6 How it works

- H2 centred: **Simple from start to finish**
- Three columns, 1px top border, accent step label (14px, 600):
  - **Step 1: Free review.** Send your web address. In 48 hours you get a short video covering design, words, speed and anything that looks AI-made.
  - **Step 2: One fixed price.** A written price before anything starts. No hourly billing, nothing added at the end.
  - **Step 3: See the difference.** Before and after screenshots and numbers, and everything stays in your name.

### 5.7 About

- Left: portrait `[PHOTO]` (the night flash headshot), 380px tall, radius 30px, `rotate(-2deg)`.
- H2: **Hi, I'm Mikey.**
- P1: **I'm a professional web developer based in Dublin. By day I build websites in financial services. MGWebs is how I bring that standard to small businesses, at a fair, fixed price.**
- P2: **I use AI every day to build faster, and I share what works (and what doesn't) on Instagram and TikTok.** Links: `[@HANDLE]` Instagram · `[@HANDLE]` TikTok · `[CHANNEL]` YouTube
- P3: **You deal with me directly, in plain English. If you'd rather talk than email, just ring.**
- Do **not** name the employer.

### 5.8 FAQ (`#faq`)

- H2 centred: **Questions**
- **Is the review really free?** Yes. You keep the video whether or not you hire me.
- **Do you use AI?** Yes, to build faster. I check every line and every page myself, so your site doesn't look or act AI-made.
- **I built my site with Lovable, Bolt or ChatGPT. Can you fix it?** Yes. I'll tell you honestly whether to finish what you have or start fresh.
- **I'm not good with technology. Is that OK?** Of course. I handle the technical side and explain everything simply.
- **My site is on WordPress, Wix or Squarespace. Can you help?** Yes. I'll tell you whether to fix it where it is or move it.
- **Do you only work in Ireland?** No. I'm based in Dublin and work with businesses anywhere, by video call.
- **Can I use the Trading Online Voucher?** Irish businesses: your Local Enterprise Office voucher can cover up to 50% of eligible costs, up to €2,500. `[CONFIRM WITH LEO]`
- Emit these as `FAQPage` JSON-LD.

### 5.9 Final CTA + form (`#review`)

- Left: H2 **Does your website look like everyone else's?** / **Send me your web address for a free review. You'll hear back within 48 hours.** / **Prefer to talk?** `tel:` link **+353 [NUMBER]** in accent.
- Right: ReviewForm card (white, 1px border, `rounded-[28px] shadow-form p-9`). Button **Send my free review**. Note: **Reply within 24 hours. No spam, ever.**

### 5.10 Footer

- Hairline top border. Row: **MGWebs.** (Questrial 18px) · Dublin, Ireland | `[HELLO]@mgwebs.com` · +353 `[NUMBER]` | Instagram · TikTok · YouTube (plain text links, no embeds) | © 2026 MGWebs

---

## 6. Responsive behaviour

| Breakpoint    | Changes                                                                                                                             |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ≥1024px       | As designed. Middle build card offset. Service cards staggered and rotated.                                                         |
| 768 to 1023px | Build cards 2-up then wrap. Service cards full width, small overlap, no rotation. AI section items stay stacked.                    |
| <768px        | Single column. H1 44px. Nav collapses to wordmark + CTA. No card overlap or rotation. About photo above text. Section padding 72px. |

No horizontal scroll at 320px. Every tap target ≥ 48px.

---

## 7. Images and assets

- `next/image` with explicit `width`/`height`, AVIF/WebP, `sizes` per layout.
- The hero has no images; the LCP element is the H1 text. Keep it that way. Everything below the fold lazy-loads.
- Needed from Mikey: `[PORTRAIT]`, `[topdj.ie screenshot]`, `[mikxyg.com screenshot]`, `[CLIENT before/after]`, `[AI site screenshot for §5.4]` (a mock "Novaline" example (fictional brand) is on the landing V4 canvas; swap for a real own build when ready).
- Until provided, render `bg-placeholder` boxes with the label. **No** stock photos.
- No social embeds (Instagram/TikTok widgets add heavy third-party JS and break the performance budget).

---

## 8. SEO, keywords and metadata

### Keyword map

Starting set, not yet checked for volume. Verify in Google Keyword Planner before launch, then track in Search Console.

| Priority                                     | Keywords                                                                                                             | Where they go                                                    |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Main (ready to hire)                         | web designer Dublin · web developer Dublin · small business website Dublin · website redesign Dublin                 | `<title>`, meta description, hero eyebrow, About P1              |
| Services                                     | website speed optimisation / optimization · fix slow website · Next.js developer Ireland                             | Service cards 01 to 03, FAQ                                      |
| AI angle (low competition, fits the content) | fix AI-generated website · Lovable / Bolt / v0 developer · make my AI website look professional                      | §5.4 H2 and link, card 02, FAQ "I built my site with Lovable..." |
| Later (needs guide pages)                    | why AI websites all look the same · how to prompt AI to build a website · best AI website builder for small business | Future `/guides` pages, one per keyword                          |

Rules: one main keyword per page element, written as a person would say it. No stuffing. Headings stay plain English first.

### Metadata

- `<html lang="en-IE">`.
- Title: **MGWebs | Web Designer in Dublin, AI-built sites finished by hand**
- Description: **Web developer in Dublin. I build fast websites with AI and finish every detail by hand. Free review, fixed prices from €199, everything in your name.**
- Open Graph image 1200×630 (wordmark + H1 on white with glows).
- JSON-LD: `ProfessionalService` (name, url, areaServed: ["Ireland", "Worldwide"], address locality Dublin, telephone, priceRange "€€", sameAs: Instagram, TikTok, YouTube URLs) + `FAQPage`.
- `sitemap.ts`, `robots.ts`, canonical `https://mgwebs.com`. Redirect `mgwebs.ie` → `mgwebs.com` (301) when purchased.
- **Set up a Google Business Profile** (Dublin, service-area business). It will do more for "Dublin" searches than anything on the page.
- All metadata must pass the em dash check in §1.

---

## 9. Performance budget

- Mobile PageSpeed **≥ 95**; LCP < 2.0s, INP < 200ms, CLS < 0.05.
- Total JS shipped < 70KB gzipped (form is the only client component).
- No third-party scripts except Vercel Analytics / Speed Insights.
- Fonts via `next/font` only. Glows in CSS only.

---

## 10. Accessibility checklist

- WCAG 2.2 AA. axe + Lighthouse accessibility (target 100).
- One `<h1>`; logical heading order.
- Decorative glows and heart tile `aria-hidden`.
- Visible focus on every interactive element, including on `bg-ink` (use a white outline there).
- `prefers-reduced-motion`: remove rotations.
- Form: labels, `autocomplete` (`name`, `url`, `email`/`tel`), errors in text, not colour alone.

---

## 11. Acceptance criteria

- [ ] Matches V4 layout, tokens and copy.
- [ ] `npm run lint:dashes` returns zero em or en dashes across app, components, content, metadata and JSON-LD.
- [ ] None of the banned words from §1 appear in shipped copy.
- [ ] All `[PLACEHOLDER]` items listed in a `TODO.md` for Mikey.
- [ ] Mobile PageSpeed ≥ 95, CWV all green (screenshot in PR).
- [ ] axe: 0 violations. Works at 320px, 768px, 1280px, 1440px.
- [ ] Form sends an email and shows the success state; honeypot blocks bots.
- [ ] Lighthouse SEO 100; JSON-LD validates in Rich Results Test. (you have no browser)
- [ ] No console errors; no layout shift on font load.

---

1. Social handles (Instagram, TikTok, @mgwebss).
2. VAT note NA. Dont add
3. Business email info@mgwebs
4. Confirm Trading Online Voucher wording with LEO. NO
5. Confirm "AI site rescue" is part of card 02
   .

## 12. Open items for Mikey

2. Real build details: tools, time and results for each card.
3. Real before/after numbers and screenshots for the speed-fix build.
4. Guarantee terms wording.
5. Turnaround times (speed fix, new site, rescue).
6. Portrait photo (night flash headshot).
