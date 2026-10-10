import type { MetadataRoute } from "next";
import { calculatorPath, calculators } from "@/lib/calculators";
import { guidePath, guides } from "@/lib/guides";
import { absoluteUrl, siteConfig } from "@/lib/site";

/** Every indexable route. New calculators and guides are picked up automatically from their registries. */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/calculators"), changeFrequency: "weekly", priority: 0.9 },
    { url: absoluteUrl("/guides"), changeFrequency: "weekly", priority: 0.7 },
    { url: absoluteUrl("/about"), changeFrequency: "yearly", priority: 0.4 },
    { url: absoluteUrl("/contact"), changeFrequency: "yearly", priority: 0.3 },
    ...["/privacy-policy", "/terms-of-service", "/disclaimer"].map((path) => ({
      url: absoluteUrl(path),
      lastModified: siteConfig.legalUpdated,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];

  const calculatorPages: MetadataRoute.Sitemap = calculators.map((c) => ({
    url: absoluteUrl(calculatorPath(c.slug)),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((g) => ({
    url: absoluteUrl(guidePath(g.slug)),
    lastModified: g.updated,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...calculatorPages, ...guidePages];
}
