import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["www.grcooling.com"],
  },
  // output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
