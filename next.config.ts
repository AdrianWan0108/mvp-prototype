import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/mvp-prototype",
  assetPrefix: "/mvp-prototype/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
