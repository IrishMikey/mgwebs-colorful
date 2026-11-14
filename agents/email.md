Task: build the /info "Work with me" page + auto reply

Repo: mgwebs-colorful (Next.js App Router, TypeScript, Tailwind v4, deployed on Vercel as mgwebs.com). Follow the existing writing rules: no em or en dashes anywhere (copy, emails, comments), Irish English, first person "I".

Already done (don't redo)
Resend: mgwebs.com verified (eu-west-1). Segment Enquiries created. Contact properties services, budget, timeline, source (strings) created.
Vercel DNS: Resend records added. Root MX untouched (inbound mail stays on cPanel).
Vercel env vars (Production): RESEND_SEGMENT_ID, CONTACT_TO=info@mgwebs.com, MAIL_FROM=Mikey at MGWebs <info@mgwebs.com>.
Still missing (Mikey adds): a fresh RESEND_API_KEY (the existing one is old) and BOOKING_URL. Add both to .env.example and TODO.md.
Install

npm i resend (only new dependency).

Files
lib/enquiry-options.ts SERVICES, BUDGETS, TIMELINES arrays + Enquiry type
lib/email/enquiry.ts autoReply(e, bookingUrl) and notification(e) -> { subject, text, html }
app/info/actions.ts "use server" submitEnquiry(prevState, formData)
components/InfoForm.tsx "use client", useActionState, the only client JS
app/info/page.tsx server component, layout + copy + metadata

Add /info to app/sitemap.ts. Reuse the site's nav and footer.

Options
Services (multi, at least 1): New website · Redesign or AI site rescue · Speed fix · Care plan · Not sure yet
Budget (one): Under €500 · €500 to €1,000 · €1,000 to €2,500 · €2,500+ · Not sure yet
Timeline (one): As soon as possible · Within a month · 1 to 3 months · Just exploring
Page copy and layout

Metadata: title Work with me | MGWebs, description Tell me what you need help with, a rough budget and timeline. I'll reply within 24 hours with honest next steps., canonical https://mgwebs.com/info.

Two columns on ≥1024px inside max-w-narrow (1100px), single column on mobile. Coral glow top left, indigo glow bottom right (as the homepage hero).

Left column:

Eyebrow (15px, muted): Work with me
H1 (Questrial, clamp 40 to 60px): Tell me what you need help with.
Lead (20px, muted): Pick what fits, give me a rough budget and timeline, and I'll reply within 24 hours with honest next steps. No hard sell.
Meta (14px, muted): Fixed prices · Everything in your name · Reply within 24 hours
"What happens next" (H2 26px), three rows with hairline top borders and accent step labels:
Step 1: You fill this in. Takes a minute.
Step 2: You get an email from me straight away with a link to book a free 20 minute call.
Step 3: I reply personally within 24 hours with a fixed price or the next step.
On mobile this block sits below the form.

Right column: form card (white, 1px border-line, rounded-[28px], shadow-form, padding 36px), in order:

"What do you need help with?" checkbox pills
"Rough budget" radio pills
"When do you want to start?" radio pills
"Your name" + "Email" side by side (wrap on mobile)
Primary full width Send button (56px), then 14px muted note: I'll only use your email to reply. No spam, ever.

Pills: real inputs inside labels (sr-only input), min-height 48px, rounded-full, border-input; checked = bg-accent text-white border-accent; visible focus ring. Each group is a <fieldset> + <legend>. Inputs: 52px, 17px text, rounded-input, border-input, autocomplete set.

Hidden fields: source (from ?src=, default direct), rendered_at (timestamp set on mount), honeypot company_website (off-screen, tabIndex=-1).

Success state replaces the form (aria-live="polite"): check icon on accent tile, "Thanks, {first name}." (Questrial 28px), "Check your inbox: I've sent you a link to book a call. I'll also reply within 24 hours.", secondary button Book a call now → BOOKING_URL (new tab). Error state: "Something went wrong. Email me at info@mgwebs.com instead." (mailto). Field errors shown in text under each field.

Server action
Honeypot filled, or submitted under 2s after render: return success, do nothing.
Validate server side (no extra libs): name 1 to 80 chars, valid email, choices must be in the option arrays. Return per-field errors.
Save contact: resend.contacts.create({ email, firstName, lastName, unsubscribed: false, properties, segments: [{ id: RESEND_SEGMENT_ID }] }). If it errors (already exists): contacts.update({ email, ... }) then contacts.segments.add({ email, segmentId }). Log failures, don't block.
Promise.allSettled two sends from MAIL_FROM:
Notification to CONTACT_TO, replyTo = visitor.
Auto reply to visitor, replyTo = CONTACT_TO.
Success if the notification sent; otherwise return the error state.
Emails

Both text and simple inline-styled html (white, 560px max, Inter/system font, 16px, no images, no tracking). Escape all user input.

Auto reply, subject Thanks {first name}, here's what happens next:

Hi {first name},

Thanks for getting in touch. I've got your details and I'll reply personally within 24 hours.

If you'd like to talk it through sooner, book a free 20 minute call here:
[Book a call] (accent pill button linking to BOOKING_URL)

Here's what you sent me:
Help with: {services}
Budget: {budget}
Timeline: {timeline}

If anything's wrong, or you want to add a link to your current site, just reply to this email.

Mikey
MGWebs. · mgwebs.com (coral full stop)

Notification, subject New enquiry: {services} · {budget}: table of Name, Email (mailto), Help with, Budget, Timeline, Source, Sent (Europe/Dublin time), then "Hit reply to answer them directly."

Done when
[ ] npm run build and npm run lint:dashes pass.
[ ] Page matches the layout above at 320px, 768px and 1440px; axe 0 violations; keyboard works on every pill.
[ ] Mobile PageSpeed ≥ 95.
[ ] With real env vars: a test submit at /info?src=test creates the contact in Enquiries, sends the notification and the auto reply.
[ ] TODO.md lists RESEND_API_KEY and BOOKING_URL.
Commit on a branch and open a PR. Don't push to main.
