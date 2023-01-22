/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'media.takealot.com',
      'www.nutritechfit.com',
      'f004.backblazeb2.com',
    ],
  },
};

module.exports = nextConfig;
