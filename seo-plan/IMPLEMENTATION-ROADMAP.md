# Implementation Roadmap: MGWebs
Date: 2026-10-22

Phases follow the standard foundation → expansion → scale → authority structure, adapted to a solo operator's realistic pace. Weeks are relative to kickoff, not calendar-fixed.

## Phase 0 — Before anything else

This isn't in the standard template, but it has to come first here:

- [x] ~~Resolve the domain~~ — Michael is handling hosting/domain directly; not blocking the rest of this plan.
- [ ] Confirm business goals/positioning decision from `SEO-STRATEGY.md` §1 with Michael directly (personal brand vs. "MGWebs the studio" framing — affects schema choice in `SITE-STRUCTURE.md`; currently implemented as `Person` schema, see Phase 1).

## Phase 1 — Foundation (weeks 1–4)

- [x] `metadataBase`, Open Graph, Twitter card metadata added to `app/layout.tsx`
- [x] `app/robots.ts` and `app/sitemap.ts` added
- [x] `Person` JSON-LD added sitewide (via root layout)
- [ ] Google Search Console + Google Analytics (or continue with Vercel Analytics, but GSC specifically for indexing/query data) connected — needs the final domain from Phase 0
- [ ] Re-baseline Core Web Vitals once the site is live on its final domain
- [x] ~~Fix `/es` orphan status~~ — superseded: the Spanish page was removed by decision (2026-10-22), site is English-only. See `SITE-STRUCTURE.md` and `CONTENT-CALENDAR.md` for the updated scope.

## Phase 2 — Expansion (weeks 5–12)

- [ ] Build `/work` index + first 3 case-study pages (BGRSolutions, Casa Magic, Tenerife Man Club — pick the 3 with the strongest existing story first, per `CONTENT-CALENDAR.md`)
- [ ] Build `/about` with real bio, process, and the "why human-made" statement
- [ ] Build `/services`
- [ ] Publish first 2 "anti-AI-slop" posts (Priority 2, items 1–2 in `CONTENT-CALENDAR.md`)

## Phase 3 — Scale (weeks 13–24)

- [ ] Remaining 3 case studies published (Villa Chloé, Cloud Nine, PremSim)
- [ ] Remaining priority-2 blog post published
- [ ] Outreach: ask the 3–4 best-fit existing clients (Casa Magic, Villa Chloé, Cloud Nine, Tenerife Man Club) for a testimonial quote and, if willing, a backlink from their own site back to the case study — this is realistic, low-effort link building given these are real, friendly relationships, not cold outreach
- [ ] Local directory listings relevant to each market (Ireland business directories; Tenerife/Canarias local business listings) — cheap authority signal, matches the "agency.md" local-presence recommendation

## Phase 4 — Authority (months 7–12)

- [ ] Monitor AI-citation visibility (ChatGPT/Perplexity/Google AI Overviews) for "MGWebs" and the core positioning terms — the "anti-AI-slop" content is specifically written to be the kind of opinionated, specific content these systems tend to cite
- [ ] Revisit KPI table in `SEO-STRATEGY.md` against actual GSC/analytics data (the current targets are directional estimates made without keyword-volume data — correct them once real data exists)
- [ ] Decide whether `/blog` cadence continues at 1/month or needs to scale based on what's actually converting to leads

## Dependencies

- Phase 1's remaining items (GSC/analytics, Core Web Vitals baseline) need the final production domain from Phase 0 — everything else in Phase 1 is done.
- Phase 2's case studies depend on Michael supplying specifics (numbers, client quotes) per `CONTENT-CALENDAR.md` — flag this as the most likely bottleneck, not the writing/coding itself.
- Phase 3's testimonial/backlink outreach depends on client relationships staying warm — sequence it naturally around any ongoing maintenance work with those same clients rather than a cold ask.

## What would change this plan

- If Michael decides MGWebs should scale beyond solo-operator (hiring, agency framing) — architecture and schema choices in `SITE-STRUCTURE.md` would shift from `Person`-led to `Organization`-led.
- If real keyword-volume data (via GSC after Phase 1, or a DataForSEO connection) shows the long-tail terms in `COMPETITOR-ANALYSIS.md` are higher-difficulty than assumed, re-prioritize the `CONTENT-CALENDAR.md` topics toward whatever the data shows is actually reachable.
