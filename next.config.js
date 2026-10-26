/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 95],
  },
  experimental: {
    // Most visitors arrive cold from outreach links, so removing the
    // render-blocking stylesheet request beats caching it.
    inlineCss: true,
  },
  // Allows HMR over Tailscale/LAN access in dev (e.g. opening the dev
  // server from another device's browser instead of localhost).
  allowedDevOrigins: ["100.64.36.88"],
}

module.exports = nextConfig
