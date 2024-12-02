import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  useFileSystemPublicRoutes: false,
  images: {
    domains: ["www.grcooling.com"],
  },
};

export default nextConfig;
