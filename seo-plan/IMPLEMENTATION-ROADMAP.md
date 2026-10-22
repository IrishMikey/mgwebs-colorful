# Implementation Roadmap: MGWebs
Date: 2026-10-22

Phases follow the standard foundation → expansion → scale → authority structure, adapted to a solo operator's realistic pace. Weeks are relative to kickoff, not calendar-fixed.

## Phase 0 — Before anything else (this week)

This isn't in the standard template, but it has to come first here:

- [ ] **Resolve the domain.** `mgwebs.com` appears to be a parked/for-sale domain per public search results, not something MGWebs currently owns — yet `actions/sendEmail.ts` sends contact-form notifications "from" `noreply@mgwebs.com`. Confirm: (a) what domain the site actually deploys to today, (b) whether `mgwebs.com` needs to be purchased, and (c) whether Resend has a verified sending domain configured at all — if not, contact-form emails may currently be failing or landing in spam. This blocks every SEO recommendation below; there's no point optimizing for a domain that isn't stable.
- [ ] Confirm business goals/positioning decision from `SEO-STRATEGY.md` §1 with Michael directly (personal brand vs. "MGWebs the studio" framing — affects schema choice in `SITE-STRUCTURE.md`).

## Phase 1 — Foundation (weeks 1–4)

- [ ] Domain finalized and DNS/Resend sending domain verified (depends on Phase 0)
- [ ] `metadataBase`, Open Graph, Twitter card metadata added to `app/layout.tsx` (currently missing entirely on the homepage)
- [ ] `app/robots.ts` and `app/sitemap.ts` added
- [ ] `ProfessionalService`/`Person` JSON-LD added to the homepage
- [ ] Google Search Console + Google Analytics (or continue with Vercel Analytics, but GSC specifically for indexing/query data) connected
- [ ] Re-baseline Core Web Vitals post the recent Next 16.4.2/Tailwind v4 upgrade
- [ ] Fix `/es` orphan status: add a language switcher, add it to the sitemap, pair with `/` via `hreflang`

## Phase 2 — Expansion (weeks 5–12)

- [ ] Build `/work` index + first 3 case-study pages (BGRSolutions, Casa Magic, Tenerife Man Club — pick the 3 with the strongest existing story first, per `CONTENT-CALENDAR.md`)
- [ ] Build `/about` with real bio, process, and the "why human-made" statement
- [ ] Build `/services`
- [ ] Publish first 2 "anti-AI-slop" posts (Priority 2, items 1–2 in `CONTENT-CALENDAR.md`)
- [ ] `/es` minimum bilingual set: home, sobre-mi, contacto

## Phase 3 — Scale (weeks 13–24)

- [ ] Remaining 3 case studies published (Villa Chloé, Cloud Nine, PremSim)
- [ ] Remaining 2 priority-2 blog posts published
- [ ] Bilingual case studies for the two Tenerife rental properties
- [ ] Outreach: ask the 3–4 best-fit existing clients (Casa Magic, Villa Chloé, Cloud Nine, Tenerife Man Club) for a testimonial quote and, if willing, a backlink from their own site back to the case study — this is realistic, low-effort link building given these are real, friendly relationships, not cold outreach
- [ ] Local directory listings relevant to each market (Ireland business directories; Tenerife/Canarias local business listings) — cheap authority signal, matches the "agency.md" local-presence recommendation

## Phase 4 — Authority (months 7–12)

- [ ] Monitor AI-citation visibility (ChatGPT/Perplexity/Google AI Overviews) for "MGWebs" and the core positioning terms — the "anti-AI-slop" content is specifically written to be the kind of opinionated, specific content these systems tend to cite
- [ ] Revisit KPI table in `SEO-STRATEGY.md` against actual GSC/analytics data (the current targets are directional estimates made without keyword-volume data — correct them once real data exists)
- [ ] Decide whether `/blog` cadence continues at 1/month or needs to scale based on what's actually converting to leads

## Dependencies

- Phase 1's metadata/schema work has no blockers once Phase 0's domain question is settled.
- Phase 2's case studies depend on Michael supplying specifics (numbers, client quotes) per `CONTENT-CALENDAR.md` — flag this as the most likely bottleneck, not the writing/coding itself.
- Phase 3's testimonial/backlink outreach depends on client relationships staying warm — sequence it naturally around any ongoing maintenance work with those same clients rather than a cold ask.

## What would change this plan

- If Michael decides MGWebs should scale beyond solo-operator (hiring, agency framing) — architecture and schema choices in `SITE-STRUCTURE.md` would shift from `Person`-led to `Organization`-led.
- If real keyword-volume data (via GSC after Phase 1, or a DataForSEO connection) shows the long-tail terms in `COMPETITOR-ANALYSIS.md` are higher-difficulty than assumed, re-prioritize the `CONTENT-CALENDAR.md` topics toward whatever the data shows is actually reachable.
