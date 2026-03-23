import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/visionbridge.ai",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
