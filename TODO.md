# Landing page — open items for Mikey

Everything shown on the site in `[BRACKETS]` is a placeholder. Copy lives in
`lib/content.ts`; contact details live in `lib/site.ts`.

## Copy & facts

- [x] **Business email**: `contact.email` in `lib/site.ts` is now the real `info@mgwebs.com`
- [ ] **Phone number**: temporarily removed everywhere (footer, final CTA, JSON-LD) at Mikey's request, 2026-10-27 — no number is ready yet. To bring it back: re-add `phoneDisplay`/`phoneE164` to `contact` in `lib/site.ts`, then restore the conditional `tel:` links in `components/footer.tsx` and `components/final-cta.tsx` and the JSON-LD `telephone` spread in `app/page.tsx` (see git history around this commit for the removed code). Also revert the "ring"/"ring me" copy in `components/about.tsx` and `actions/requestAudit.ts` once a number exists.
- [ ] **VAT note** (check registration status) → `vatNote`
- [ ] **Guarantee terms** wording → `guaranteeTerms`
- [ ] **Speed fix turnaround**: `[A WEEK]` → speed fix bullets
- [ ] **Work captions**: `[PHONE SCORE]` for topdj.ie and mikxyg.com
- [ ] **Speed-fix case study**: `[CLIENT NAME]`, score `[34] → [96]`, load time `[1.4s]`
- [ ] **Trading Online Voucher** FAQ: temporarily removed from `lib/content.ts` (and so from the FAQPage JSON-LD) pending confirmed wording from the Local Enterprise Office, 2026-10-27. Re-add the FAQ entry once confirmed.
- [ ] Re-add speed stats only if dated/sourced (removed in V3)

## Images (render as grey placeholders until supplied — no stock photos)

- [ ] Hero chip 1: **score card screenshot** (34 → 96), ~264×144 → pass `src` to the first `HeadlineChip` in `components/hero.tsx` (keep `priority`)
- [ ] Hero chip 2: **site on a phone mockup**, ~264×144 → second `HeadlineChip`
- [ ] **topdj.ie screenshot**, **mikxyg.com screenshot**, **client before/after** → `components/work.tsx` (swap `Placeholder` for `next/image`)
- [ ] **Portrait**: temporarily removed from the About section at Mikey's request, 2026-10-27 (was `public/me_headshot.webp`, a Tenerife photo, cropped — never a great fit). `components/about.tsx` is now text-only, single column. To bring a real portrait back: restore the two-column grid (image left, text right — see git history around this commit) with a proper photo.

## Launch

- [ ] Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD` on Vercel, then send a test request through the form
- [ ] Remove `RECAPTCHA_SECRET_KEY` / `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` from Vercel (the honeypot replaces reCAPTCHA)
- [ ] Run PageSpeed Insights (mobile) on the deployed URL and screenshot for the PR
- [ ] Validate JSON-LD in the Rich Results Test
- [ ] 301 redirect `mgwebs.ie` → `mgwebs.com` once purchased
- [ ] Optional: replace the old `public/favicon.ico` with the new MG monogram (`app/icon.svg` is already used by modern browsers)
- [ ] Optional: delete unused old portfolio images in `public/` (bgr*, casamagic, villachloe, gallery/, etc.)
