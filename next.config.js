/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // for avatarurl placeholder. Remove when auth is finalised
    domains: ["images.unsplash.com", "via.placeholder.com"],
  },
};

module.exports = nextConfig;
