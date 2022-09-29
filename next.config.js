/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    images: {
      domains: ["tailwindui.com"],
    },
  },
};

module.exports = nextConfig;
