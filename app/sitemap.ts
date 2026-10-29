import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { caseStudies } from "@/content/work";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "monthly", priority: 1 },
    ...caseStudies.map((item) => ({
      url: `${siteUrl}/work/${item.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
