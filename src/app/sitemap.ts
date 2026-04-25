import type { MetadataRoute } from "next";
import { resources } from "./resources/_data/resources";

const baseUrl = "https://shadow.inc";

const blogSlugs = [
  "the-data-layer",
  "the-attention-shift",
  "the-trust-shift",
  "the-measurement-trap",
  "the-business-model-crisis",
  "what-ai-actually-changes",
  "what-comes-next",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },

    // Category pillar + platform
    { url: `${baseUrl}/narrative-intelligence`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/program-execution`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/ai-agents`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/operate`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Agent pages (new 6-agent architecture)
    { url: `${baseUrl}/researchers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/analysts`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/strategists`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/planners`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/writers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/reporters`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Audience pages
    { url: `${baseUrl}/for-agencies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/for-comms-teams`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/for-enterprise`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Comparison pages
    { url: `${baseUrl}/narrative-intelligence-vs-media-monitoring`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/vs-blackbird-ai`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },

    // Legacy product pages (kept live)
    { url: `${baseUrl}/intelligence`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/media`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/content`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/pipeline`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Company + resources
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/reports`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/reports/consumer-ai-narrative-cycles`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
  ];

  // Blog posts
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Resource pages
  const resourcePages: MetadataRoute.Sitemap = resources.map((resource) => ({
    url: `${baseUrl}/resources/${resource.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...mainPages, ...blogPages, ...resourcePages];
}
