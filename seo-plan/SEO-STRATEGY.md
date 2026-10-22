# SEO Strategy: MGWebs
**Positioning: "Real websites, not AI slop" — a human-made web studio**
Date: 2026-10-22

## 1. Discovery

**Business:** MGWebs — Michael Geraghty, solo web developer/designer. Based in Ireland, with an active client base and an existing Spanish-language landing page targeting Tenerife ("diseño web tenerife"), so the practical market is two-sided: **Ireland (English)** and **Tenerife (Spanish)**.

**What the portfolio shows today (`lib/data.ts`):**
- E-commerce rebuild (WooCommerce) — BGRSolutions
- Holiday-rental sites (Next.js/WordPress) — Casa Magic, Villa Chloé
- Local business sites — Cloud Nine Tenerife (beauty/education salon)
- Community/non-profit — Tenerife Man Club (sponsored, mental health)
- A side project SaaS/tool — PremSim

**Target audience:** small business owners and independent operators (holiday-rental owners, local service businesses, community groups) in Ireland and the Canary Islands who are *not* well served by template builders or AI-website generators, and who want a site that feels designed by a person, not generated.

**Positioning hook — "not AI slop":** this is not a vague tagline. As of 2026 there's a documented, real market shift: AI-generated content/design is producing measurable trust erosion (consumers report "AI fatigue," human-made ads/content measurably outperform AI-made equivalents), and a competing "human-centered design" trend (visible texture, imperfect edges, hand-crafted detail) is forming specifically as a reaction to "AI slop web design" — identical, templated layouts AI tools default to. MGWebs can credibly own this as **the stated reason a client should hire a person instead of running Lovable/v0/Wix-AI** — a message none of the identified competitors (below) are currently using.

**Goals (proposed, confirm with Michael):**
- Generate qualified inbound leads via organic search (currently ~zero — see technical findings)
- Build a durable case-study library that also functions as the sales portfolio
- Establish MGWebs as the go-to "real, human-made" option in two underserved, low-competition niches (Ireland SMB web dev, Tenerife bilingual web dev) rather than competing broadly

## 2. Current Site Assessment (as of this repo, `refactor/tech-upgrades` branch)

| Area | Finding |
|---|---|
| **Domain** | `noreply@mgwebs.com` is used as the contact-form sender in `actions/sendEmail.ts`, but a public search shows **mgwebs.com is a parked, for-sale domain** — not something MGWebs currently owns/operates. See **Phase 0** below; this blocks both SEO and (likely) contact-form email deliverability right now. |
| **Indexation** | No organic footprint found in search. Baseline is effectively zero. |
| **robots.txt / sitemap.xml** | Neither exists (`app/robots.ts` / `app/sitemap.ts` or `public/` equivalents are absent). |
| **Metadata** | `app/layout.tsx` sets only a bare `title`/`description` and favicon icons. No `metadataBase`, no Open Graph, no Twitter card, no canonical URLs, no keywords. The `/links` page has OG/Twitter tags but the homepage — the page that matters — does not. |
| **Structured data** | No JSON-LD anywhere (no `ProfessionalService`, `Person`, or `CreativeWork` schema on case studies). |
| **Content depth** | Single page (`app/page.tsx`): Hero → Work → About → Contact. Each project gets one sentence. No dedicated, indexable URL per project/case study, no service pages, no blog. This is the single biggest limiter: there's almost nothing here for Google to rank beyond the homepage. |
| **Bilingual setup** | `/es` exists but is unlinked from any nav, not in a sitemap, and (prior to this plan) had duplicate-navbar/broken-image bugs — now fixed at the code level, but it's still an orphaned page with no `hreflang` relationship to `/`, so Google has no signal these are language variants of the same business. |
| **E-E-A-T signals** | Real author (Michael), real case studies with live client URLs — good raw material, but no bios, credentials, testimonials, or metrics currently surfaced on the site itself. |

This is a genuine blank slate: the technical foundation (build, lint, dependencies) was just modernized in a separate pass — this plan is the next layer on top of that.

## 3. Competitive Landscape (summary — full detail in `COMPETITOR-ANALYSIS.md`)

Two separate competitive sets, because the two markets don't overlap:
- **Tenerife (Spanish):** established local agencies (docemasuna, Prismalia, Efecto Newton, Akrolih, Webintenerife) and a strong freelance SEO specialist (Tony Reise) already ranking for `diseño web tenerife`.
- **Ireland (English):** a mix of freelancers/small studios (Logicode, Johny.ie, Cloveloop, Web Wizard, Webie) competing mostly on price and generic "custom website" messaging.

**Key gap in both markets:** none of the identified competitors lead with an explicit "no AI, human-made" message — they all use generic "bespoke"/"custom" language that AI-website tools now use too. This is open positioning space, not a crowded one.

## 4. Site Architecture (summary — full detail in `SITE-STRUCTURE.md`)

Evolve from one page into a small, real site: `/`, `/work/[case-study]`, `/services`, `/about`, `/contact`, with a proper `/es` mirror (not an orphan), plus `robots.txt`/`sitemap.xml` and JSON-LD.

## 5. Content Strategy (summary — full detail in `CONTENT-CALENDAR.md`)

Priority 1 is turning the 6 existing projects into 6 real, indexable case-study pages with specifics (problem, approach, result) — that's "free" content that already exists as a sentence each today. Priority 2 is a handful of "anti-AI-slop" thought-leadership posts that stake the positioning claim directly. Priority 3 is bilingual parity for the Tenerife side.

## 6. Technical Foundation

- `metadataBase`, Open Graph + Twitter cards on every route, canonical URLs
- `app/robots.ts` and `app/sitemap.ts` (Next.js App Router supports both as code, no static files needed)
- JSON-LD: `ProfessionalService` + `Person` on `/about`, `CreativeWork`/`Article`-style schema per case study
- `hreflang` pairing between `/` and `/es` once `/es` is a real mirror, not an orphan
- Core Web Vitals: re-baseline after the recent Next.js 16.4.2/Tailwind v4 upgrade (framework changes can shift CLS/LCP either way) — not measured yet in this plan, flagged for Phase 1

## 7. Implementation Roadmap

See `IMPLEMENTATION-ROADMAP.md` for the full phased plan. Headline: **Phase 0 (this week) is resolving the domain question** — nothing else in this strategy is worth doing against a domain MGWebs doesn't own.

## 8. KPI Targets

| Metric | Baseline (now) | 3 Month | 6 Month | 12 Month |
|---|---|---|---|---|
| Organic sessions/mo | ~0 (not indexed) | 50–150 | 300–600 | 800–1,500 |
| Ranking keywords (any position) | 0 | 15–25 | 50–80 | 120+ |
| Top-10 rankings (long-tail, e.g. "custom web developer tenerife") | 0 | 1–2 | 4–6 | 10+ |
| Indexed pages | 1–2 | 10+ | 18+ | 25+ |
| Contact-form leads from organic | 0 | 1–2/mo | 3–5/mo | 6–10/mo |
| Core Web Vitals ("Good" on all 3) | not measured | re-baseline | maintain | maintain |

These are directional targets for a brand-new, single-operator site in two low-to-medium competition niches — not benchmarked against paid keyword-volume data (no DataForSEO/GSC access was available for this plan; revisit once Search Console is live, see Phase 1).

## 9. Success Criteria & Risks

- **Success** = organic leads that convert to paid client work, not vanity traffic. Track contact-form submissions tagged by source/page, not just session counts.
- **Risk — domain.** Covered above; this is the one item that can invalidate the whole plan if not resolved first.
- **Risk — single-operator bandwidth.** This plan assumes Michael is also the implementer. The roadmap is sequenced so each phase is shippable in spare hours around client work, not a full-time content operation.
- **Risk — positioning drift.** "Not AI slop" only works if the site and case studies visibly *are* human-made (visible craft, specific details, real voice) — generic rewritten case-study copy would undercut the entire strategy. Treat the content calendar's specificity requirements as non-negotiable, not nice-to-have.
