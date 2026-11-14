import type { Enquiry } from "@/lib/enquiry-options";

type EmailContent = { subject: string; text: string; html: string };

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const firstName = (name: string) => name.trim().split(/\s+/)[0] || name;

const wrapper = (body: string) => `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#ffffff;color:#1d1d1f;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,Arial,sans-serif;">
    <div style="max-width:560px;margin:0 auto;padding:32px 24px;font-size:16px;line-height:1.6;">
      ${body}
    </div>
  </body>
</html>`;

const buttonHtml = (label: string, href: string) =>
  `<a href="${escapeHtml(href)}" style="display:inline-block;margin-top:20px;padding:14px 28px;background:#4338f2;color:#ffffff;border-radius:999px;text-decoration:none;font-weight:500;">${escapeHtml(label)}</a>`;

export function autoReply(enquiry: Enquiry, bookingUrl: string): EmailContent {
  const name = firstName(enquiry.name);
  const services = enquiry.services.join(", ");

  const subject = `Thanks ${name}, here's what happens next`;

  const text = [
    `Hi ${name},`,
    "",
    "Thanks for getting in touch. I've got your details and I'll reply personally within 24 hours.",
    "",
    "If you'd like to talk it through sooner, book a free 20 minute call here:",
    bookingUrl,
    "",
    "Here's what you sent me:",
    `Help with: ${services}`,
    `Budget: ${enquiry.budget}`,
    `Timeline: ${enquiry.timeline}`,
    "",
    "If anything's wrong, or you want to add a link to your current site, just reply to this email.",
    "",
    "Mikey",
    "MGWebs. · mgwebs.com",
  ].join("\n");

  const html = wrapper(`
    <p style="margin:0 0 16px;">Hi ${escapeHtml(name)},</p>
    <p style="margin:0 0 16px;">Thanks for getting in touch. I've got your details and I'll reply personally within 24 hours.</p>
    <p style="margin:0 0 4px;">If you'd like to talk it through sooner, book a free 20 minute call here:</p>
    ${buttonHtml("Book a call", bookingUrl)}
    <p style="margin:28px 0 4px;">Here's what you sent me:</p>
    <p style="margin:4px 0;">Help with: ${escapeHtml(services)}</p>
    <p style="margin:4px 0;">Budget: ${escapeHtml(enquiry.budget)}</p>
    <p style="margin:4px 0;">Timeline: ${escapeHtml(enquiry.timeline)}</p>
    <p style="margin:28px 0 16px;">If anything's wrong, or you want to add a link to your current site, just reply to this email.</p>
    <p style="margin:0;">Mikey<br>MGWebs<span style="color:#d6363f;">.</span> · mgwebs.com</p>
  `);

  return { subject, text, html };
}

export function notification(enquiry: Enquiry): EmailContent {
  const sentAt = new Date().toLocaleString("en-IE", {
    timeZone: "Europe/Dublin",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const subject = `New enquiry: ${enquiry.services.join(", ")} · ${enquiry.budget}`;

  const rows: [string, string][] = [
    ["Name", enquiry.name],
    ["Email", enquiry.email],
    ["Help with", enquiry.services.join(", ")],
    ["Budget", enquiry.budget],
    ["Timeline", enquiry.timeline],
    ["Source", enquiry.source],
    ["Sent", sentAt],
  ];

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Hit reply to answer them directly.",
  ].join("\n");

  const html = wrapper(`
    <table style="width:100%;border-collapse:collapse;">
      ${rows
        .map(([label, value]) => {
          const displayValue =
            label === "Email"
              ? `<a href="mailto:${escapeHtml(value)}" style="color:#4338f2;text-decoration:none;">${escapeHtml(value)}</a>`
              : escapeHtml(value);
          return `<tr><td style="padding:8px 0;border-bottom:1px solid #e2e2e7;color:#5e5e63;width:110px;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 0;border-bottom:1px solid #e2e2e7;">${displayValue}</td></tr>`;
        })
        .join("")}
    </table>
    <p style="margin:24px 0 0;">Hit reply to answer them directly.</p>
  `);

  return { subject, text, html };
}
