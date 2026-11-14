# Landing page (V4) — open items for Mikey

Everything shown on the site in `[BRACKETS]` is a placeholder. Copy lives in
`lib/content.ts`; contact details and social handles live in `lib/site.ts`.

## Copy & facts

- [x] **Business email**: `contact.email` in `lib/site.ts` is `info@mgwebs.com`
- [x] **VAT note**: not applicable, not shown (confirmed by Mikey)
- [x] **Trading Online Voucher FAQ**: not included (LEO wording not confirmed, confirmed by Mikey not to add)
- [x] **Social handles**: Instagram and TikTok set to `@mgwebss` in `lib/site.ts`
- [ ] **YouTube channel**: `social.youtube` in `lib/site.ts` is `null` → set once confirmed (shows in the footer once set)
- [ ] **Phone number**: still removed everywhere (footer, final CTA, About, JSON-LD) at Mikey's request, 2026-10-27, no number is ready yet. To bring it back: add `phoneDisplay`/`phoneE164` to `contact` in `lib/site.ts`, add the "Prefer to talk?" `tel:` line back to `components/final-cta.tsx` (see §5.9 of `agents/plan.md`), and reconsider the About closing line in `components/about.tsx`.
- [ ] **Guarantee terms** wording → `[GUARANTEE TERMS]` bullet in the Speed fix service, `lib/content.ts`
- [ ] **Speed fix turnaround**: `[A WEEK]` → Speed fix bullets, `lib/content.ts`
- [ ] **Build details**: `[TOOLS]`, `[TIME]`, `[PHONE SCORE]` pills for topdj.ie and mikxyg.com → `lib/content.ts`
- [ ] **Speed-fix case study**: `[CLIENT NAME]`, score `[34] to [96]` → `lib/content.ts`

## Images (render as grey placeholders until supplied — no stock photos)

- [ ] **topdj.ie screenshot**, **mikxyg.com screenshot**, **client before/after** → `components/builds.tsx` (swap `Placeholder` for `next/image`)
- [ ] **AI site screenshot** for the "What AI websites get wrong" section, with real coral markers over the three problem areas → `components/ai-section.tsx`. Once added, give it a real `alt` (e.g. "Example AI-generated website with three problems marked") and make the marker positions match the image.
- [ ] **Portrait**: still removed from the About section at Mikey's request, 2026-10-27 (was a Tenerife photo, never a great fit). `components/about.tsx` is text-only, single column. To bring a real portrait back: add a two-column grid (image left, text right, `rotate(-2deg)`, per §5.7 of `agents/plan.md`).

## /info "Work with me" page

- [ ] **`RESEND_API_KEY`**: the existing one is old, generate a fresh key in the Resend dashboard and set it in `.env.local` (to test locally) and on Vercel (Production). Right now `app/info/actions.ts` fails gracefully (logs the error, shows "Something went wrong...") without it, but no enquiry email or contact save will actually happen until it's set.
- [ ] **`BOOKING_URL`**: the free-20-minute-call booking link, set in `.env.local` and on Vercel. Used in the auto-reply email and the success state's "Book a call now" button (`lib/email/enquiry.ts`, `components/InfoForm.tsx`). Falls back to `https://mgwebs.com` until set.
- [ ] Already set in Vercel (Production), per `agents/email.md`: `RESEND_SEGMENT_ID`, `CONTACT_TO=info@mgwebs.com`, `MAIL_FROM=Mikey at MGWebs <info@mgwebs.com>`.
- [ ] Once both are set: submit a real test at `/info?src=test` and confirm the contact lands in the Enquiries segment and both emails (notification + auto reply) arrive.

## Launch

- [ ] Fill in `SMTP_PASSWORD` (and confirm `SMTP_HOST`/`SMTP_PORT`) in `.env.local` to test the form locally, then set the same four vars on Vercel for production. `actions/requestReview.ts` sends review requests to `info@mgwebs.com` only (no longer cc'd to Mikey's personal Gmail).
- [ ] Run PageSpeed Insights (mobile) on the deployed URL and screenshot for the PR
- [ ] Validate JSON-LD in the Rich Results Test
- [ ] 301 redirect `mgwebs.ie` → `mgwebs.com` once purchased
- [ ] Set up a Google Business Profile (Dublin, service-area business), per §8 of `agents/plan.md`
- [ ] Verify keyword map (§8 of `agents/plan.md`) in Google Keyword Planner before launch, then track in Search Console
- [ ] Optional: replace the old `public/favicon.ico` with the new MG monogram (`app/icon.svg` is already used by modern browsers)
- [ ] Optional: delete unused old portfolio images in `public/` (bgr*, casamagic, villachloe, gallery/, etc.)
