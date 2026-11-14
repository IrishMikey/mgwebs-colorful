# SEO Strategy: MGWebs
**Positioning: "Real websites, not AI slop" — a human-made web studio**
Date: 2026-10-22

## 1. Discovery

**Business:** MGWebs — Michael Geraghty, solo web developer/designer. Based in Ireland, with an active client base that includes several Tenerife-based businesses. The site is English-only (a Spanish `/es` landing page existed briefly during this planning pass and was removed by decision on 2026-10-22) — Tenerife clients are served in English.

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
- Establish MGWebs as the go-to "real, human-made" option in two underserved, low-competition niches (Ireland SMB web dev, Tenerife web dev for English-speaking/international clients) rather than competing broadly

## 2. Site Assessment

| Area | Finding at audit (2026-10-22) | Status |
|---|---|---|
| **Domain** | `noreply@mgwebs.com` is used as the contact-form sender in `actions/sendEmail.ts`, but a public search showed `mgwebs.com` as a parked, for-sale domain. | Michael is handling hosting/domain directly — not a blocker for this plan. |
| **Indexation** | No organic footprint found in search. Baseline is effectively zero. | Unchanged — nothing to re-measure until the site is live on its final domain. |
| **robots.txt / sitemap.xml** | Neither existed. | **Done.** `app/robots.ts` and `app/sitemap.ts` added (Phase 1). |
| **Metadata** | Bare `title`/`description` only — no `metadataBase`, Open Graph, Twitter card, canonical URL, or keywords on the homepage. | **Done.** Added to `app/layout.tsx` (Phase 1). |
| **Structured data** | No JSON-LD anywhere. | **Done** for the homepage (`Person` schema). Per-case-study `CreativeWork` schema is still Phase 2 work, once `/work/[slug]` pages exist. |
| **Content depth** | Single page (`app/page.tsx`): Hero → Work → About → Contact. Each project gets one sentence. No dedicated, indexable URL per project/case study, no service pages, no blog. | **Still open — the single biggest limiter.** This is the Phase 2 priority. |
| **Bilingual setup** | `/es` existed but was unlinked from any nav and had duplicate-navbar/broken-image bugs. | **Resolved by decision, not by fixing:** `/es` was removed entirely (2026-10-22). The site is English-only; see `SITE-STRUCTURE.md` and `CONTENT-CALENDAR.md` for the updated scope. |
| **E-E-A-T signals** | Real author (Michael), real case studies with live client URLs — good raw material, but no bios, credentials, testimonials, or metrics surfaced on the site itself. | Still open — Phase 2 (`/about`, case studies). |

The technical foundation (build, lint, dependencies, and now Phase 1's metadata/robots/sitemap/schema) is in place. The remaining gap is content depth — Phase 2 is where this plan earns its keep.

## 3. Competitive Landscape (summary — full detail in `COMPETITOR-ANALYSIS.md`)

Two separate competitive sets, because the two markets don't overlap:
- **Tenerife:** established local agencies (docemasuna, Prismalia, Efecto Newton, Akrolih, Webintenerife) and a strong freelance SEO specialist (Tony Reise) already ranking for Spanish-language search terms — MGWebs isn't competing head-on for those terms without a Spanish page, but is well placed for English-language searches from international/expat property owners and businesses, which is the actual existing client profile (Casa Magic, Villa Chloé, Cloud Nine).
- **Ireland (English):** a mix of freelancers/small studios (Logicode, Johny.ie, Cloveloop, Web Wizard, Webie) competing mostly on price and generic "custom website" messaging.

**Key gap in both markets:** none of the identified competitors lead with an explicit "no AI, human-made" message — they all use generic "bespoke"/"custom" language that AI-website tools now use too. This is open positioning space, not a crowded one.

## 4. Site Architecture (summary — full detail in `SITE-STRUCTURE.md`)

Evolve from one page into a small, real site: `/`, `/work/[case-study]`, `/services`, `/about`, `/contact`, `/blog`, plus `robots.txt`/`sitemap.xml` and JSON-LD (the last two now shipped — see Technical Foundation below). English-only.

## 5. Content Strategy (summary — full detail in `CONTENT-CALENDAR.md`)

Priority 1 is turning the 6 existing projects into 6 real, indexable case-study pages with specifics (problem, approach, result) — that's "free" content that already exists as a sentence each today. Priority 2 is a handful of "anti-AI-slop" thought-leadership posts that stake the positioning claim directly.

## 6. Technical Foundation

- [x] `metadataBase`, Open Graph + Twitter cards, canonical URL — done on the homepage; extend to new routes as they're built in Phase 2
- [x] `app/robots.ts` and `app/sitemap.ts` — done
- [x] `Person` JSON-LD sitewide — done; add `CreativeWork` schema per case study once `/work/[slug]` pages exist
- [ ] Core Web Vitals: re-baseline once the site is live on its final domain (framework changes from the recent Next.js 16.4.2/Tailwind v4 upgrade can shift CLS/LCP either way)

## 7. Implementation Roadmap

See `IMPLEMENTATION-ROADMAP.md` for the full phased plan. Phase 1's technical foundation is done; Phase 2 (case studies, `/about`, `/services`, first blog posts) is next.

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
- **Risk — single-operator bandwidth.** This plan assumes Michael is also the implementer. The roadmap is sequenced so each phase is shippable in spare hours around client work, not a full-time content operation.
- **Risk — positioning drift.** "Not AI slop" only works if the site and case studies visibly *are* human-made (visible craft, specific details, real voice) — generic rewritten case-study copy would undercut the entire strategy. Treat the content calendar's specificity requirements as non-negotiable, not nice-to-have.
