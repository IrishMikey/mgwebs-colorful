# Landing page — open items for Mikey

Everything shown on the site in `[BRACKETS]` is a placeholder. Copy lives in
`lib/content.ts`; contact details live in `lib/site.ts`.

## Copy & facts

- [ ] **Business email**: `[HELLO]@mgwebs.com` → `contact.email` in `lib/site.ts` (form emails already send from `info@mgwebs.com`)
- [ ] **Phone number**: `+353 [NUMBER]` → `contact.phoneDisplay`, plus `contact.phoneE164` (e.g. `+353871234567`). The `tel:` links and JSON-LD `telephone` only appear once `phoneE164` is set.
- [ ] **VAT note** (check registration status) → `vatNote`
- [ ] **Guarantee terms** wording → `guaranteeTerms`
- [ ] **Speed fix turnaround**: `[A WEEK]` → speed fix bullets
- [ ] **Work captions**: `[PHONE SCORE]` for topdj.ie and mikxyg.com
- [ ] **Speed-fix case study**: `[CLIENT NAME]`, score `[34] → [96]`, load time `[1.4s]`
- [ ] **Trading Online Voucher** answer: confirm wording with your LEO (also emitted in FAQPage JSON-LD)
- [ ] Re-add speed stats only if dated/sourced (removed in V3)

## Images (render as grey placeholders until supplied — no stock photos)

- [ ] Hero chip 1: **score card screenshot** (34 → 96), ~264×144 → pass `src` to the first `HeadlineChip` in `components/hero.tsx` (keep `priority`)
- [ ] Hero chip 2: **site on a phone mockup**, ~264×144 → second `HeadlineChip`
- [ ] **topdj.ie screenshot**, **mikxyg.com screenshot**, **client before/after** → `components/work.tsx` (swap `Placeholder` for `next/image`)
- [ ] **Portrait**: currently uses `public/me_headshot.webp` (Tenerife photo, cropped). Swap for a proper portrait if you have one.

## Launch

- [ ] Set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD` on Vercel, then send a test request through the form
- [ ] Remove `RECAPTCHA_SECRET_KEY` / `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` from Vercel (the honeypot replaces reCAPTCHA)
- [ ] Run PageSpeed Insights (mobile) on the deployed URL and screenshot for the PR
- [ ] Validate JSON-LD in the Rich Results Test
- [ ] 301 redirect `mgwebs.ie` → `mgwebs.com` once purchased
- [ ] Optional: replace the old `public/favicon.ico` with the new MG monogram (`app/icon.svg` is already used by modern browsers)
- [ ] Optional: delete unused old portfolio images in `public/` (bgr*, casamagic, villachloe, gallery/, etc.)
