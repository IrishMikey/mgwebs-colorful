# Site Structure: MGWebs
Date: 2026-10-22

## Current structure (as-is)

```
/                   — single page: Hero, Work (cards + gallery), About, Contact
/links              — link-in-bio page (keep as-is; not an SEO page, serves social traffic)
```

> **Update (2026-10-22):** the Spanish `/es` landing page has been removed by decision — the site is English-only going forward. Tenerife remains a real client market (several existing case studies are Tenerife-based) and stays in scope for `COMPETITOR-ANALYSIS.md`, but it's served by the English site rather than a dedicated translation. All bilingual/`hreflang` recommendations below are retired accordingly.

Everything under "Work" lives as anonymous `<div>` sections inside one page — no case study has its own URL, so none of it is independently indexable or shareable.

## Proposed structure

```
/                          — Home (EN): hero, condensed work preview, about teaser, contact
/work                      — Case study index
  /work/bgrsolutions
  /work/casa-magic
  /work/villa-chloe
  /work/cloud-nine-tenerife
  /work/tenerife-man-club
  /work/premsim
/services                  — What MGWebs does (single page is fine at this scale; split later if content grows)
/about                      — Michael's bio, process, "why human-made" statement (E-E-A-T home)
/contact
/blog                       — Thought-leadership + "anti-AI-slop" content (see CONTENT-CALENDAR.md)
  /blog/[slug]
/links                       — unchanged
```

### Why split `/work` into real pages
Each of the 6 existing projects already has: a title, a one-line description, a tech-stack tag, a live URL, and (for 3 of them) multiple supporting images already in `lib/data.ts`'s `modal` arrays. That's already most of a case-study page's raw material — it's currently trapped inside a card component's props instead of being its own crawlable URL. This is the single highest-leverage, lowest-new-content-cost move available.

### URL/slug conventions
- Lowercase, hyphenated, no trailing slash (matches current `app/links` convention).
- Case study slugs should match the project name, not a generic `/work/1` pattern — already implied by the table above.

## Internal linking plan

- Homepage → 2–3 featured case studies (not all 6 — keep the home page focused) → full `/work` index
- Each case study → `/services` and `/contact` (clear next step) + 1 related case study (same industry: pair the two Tenerife rentals, pair the WooCommerce rebuild near other e-commerce-adjacent proof if one is added later)
- `/about` → `/work` ("see it in action") and `/blog` (thought leadership builds the "real person" case)
- Blog posts → relevant case study when the post references a technique actually used on that project (keeps E-E-A-T concrete, not abstract)

## Sitemap & robots

Add `app/sitemap.ts` and `app/robots.ts` (Next.js App Router native support — no static XML file needed; both now exist, see Phase 1 in `IMPLEMENTATION-ROADMAP.md`). Sitemap should include `/`, `/work`, every `/work/[slug]`, `/services`, `/about`, `/contact`, `/blog`, and every published post. Exclude `/links` (social-traffic utility page, not a search-intent page) via `robots.ts` disallow or simply omitting from the sitemap.

## Schema per page type

| Page | Schema |
|---|---|
| `/` | `ProfessionalService` (or `Person` if Michael wants a personal-brand framing rather than a company framing — worth deciding explicitly, it changes the schema and the tone of the whole site) |
| `/about` | `Person` with `sameAs` linking GitHub/LinkedIn/Twitter |
| `/work/[slug]` | `CreativeWork` with `about`/`creator` pointing at the `Person`/`ProfessionalService` entity |
| `/blog/[slug]` | `BlogPosting` |

See `agency.md` template (loaded for this plan) for full JSON-LD examples to adapt.
