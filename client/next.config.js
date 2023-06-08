/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 깃허브 이미지
    domains: ["avatars.githubusercontent.com"],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      bufferutil: false,
      "utf-8-validate": false,
    };
    return config;
  },
};

module.exports = nextConfig;
