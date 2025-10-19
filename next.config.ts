import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // ✅ Do not block production builds on type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
