import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  useFileSystemPublicRoutes: false,
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["www.grcooling.com"],
  },
};

export default nextConfig;
