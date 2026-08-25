import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.babcsf.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
