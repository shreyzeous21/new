import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'www.grcooling.com' }],
    unoptimized: true,
  },
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;