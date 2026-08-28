import type { NextConfig } from "next";

const noIndexHeaders = [
  {
    key: "X-Robots-Tag",
    value: "noindex, nofollow, nosnippet",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      { source: "/_next/:path*", headers: noIndexHeaders },
      { source: "/api/:path*", headers: noIndexHeaders },
    ];
  },
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
