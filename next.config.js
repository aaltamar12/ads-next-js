/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "",
  experimental: {
    appDir: true,
    serverActions: true,
  },
  reactStrictMode: true,
  distDir: "out",
  env: {
    BACKEND_URL: "http://localhost:3001",
  },
};

module.exports = nextConfig;
