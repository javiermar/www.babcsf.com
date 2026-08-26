import type { MetadataRoute } from "next";
import { BOARD_PROFILES, SCHOLARS } from "@/lib/directory";

const baseUrl = "https://www.babcsf.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/scholarships", "/mentorship", "/gala", "/board", "/impact"] as const;

  return [
    ...staticRoutes.map((path, index) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
      priority: index === 0 ? 1 : path === "/scholarships" || path === "/gala" ? 0.9 : 0.8,
    })),
    ...SCHOLARS.map(({ slug }) => ({
      url: `${baseUrl}/scholars/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...BOARD_PROFILES.map(({ slug }) => ({
      url: `${baseUrl}/board/${slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
