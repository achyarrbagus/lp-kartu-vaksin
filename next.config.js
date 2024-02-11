/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Add a rule for handling PDF files
    config.module.rules.push({
      test: /\.pdf$/,
      use: "file-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
