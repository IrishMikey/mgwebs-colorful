/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 95],
  },
  // Allows HMR over Tailscale/LAN access in dev (e.g. opening the dev
  // server from another device's browser instead of localhost).
  allowedDevOrigins: ["100.64.36.88"],
}

module.exports = nextConfig
