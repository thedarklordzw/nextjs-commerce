/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.takealot.com', 'www.nutritechfit.com'],
  },
};

module.exports = nextConfig;
