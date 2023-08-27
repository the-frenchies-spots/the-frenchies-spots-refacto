/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  ...withPWA({
    dest: "public",
    register: true,
    skipWaitin: true,
  }),
};

module.exports = nextConfig;

module.exports = withPWA({
  // next.js config
});
