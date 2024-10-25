/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/DucksOnMoon.github.io",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
