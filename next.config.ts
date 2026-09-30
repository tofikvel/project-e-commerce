import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zskgdlasgskhjpepzyir.supabase.co",
      },
    ],
  },
};

export default nextConfig;
