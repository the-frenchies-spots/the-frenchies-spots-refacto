/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  ...withPWA({
    dest: "public",
    register: true,
    skipWaitin: true,
  }),
  experimental: {
    appDir: true,
  },
  transpilePackages: [
    "@frenchies-spots/material",
    "@frenchies-spots/gql",
    "@frenchies-spots/hooks",
  ],
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
