const baseUrl = "https://shadow.inc";

const posts = [
  {
    title: "The Data Layer",
    slug: "the-data-layer",
    date: "2026-03-16",
    description:
      "Every communications engagement in the history of the discipline has started from the same place: someone's best guess.",
  },
  {
    title: "The Business Model Crisis: Why the PR Agency Model Is Breaking",
    slug: "the-business-model-crisis",
    date: "2026-02-28",
    description:
      "The PR agency business model has remained largely unchanged for decades.",
  },
  {
    title: "What AI Actually Changes in Communications: Operations, Not Creativity",
    slug: "what-ai-actually-changes",
    date: "2026-02-28",
    description: "91% of communications professionals use generative AI.",
  },
  {
    title: "The Future of Communications Belongs to Judgment, Not Access",
    slug: "what-comes-next",
    date: "2026-02-28",
    description: "The final installment of the series.",
  },
  {
    title: "The Attention Shift: How Public Discourse Decentralized",
    slug: "the-attention-shift",
    date: "2026-01-15",
    description:
      "71% of PR professionals cite fragmentation as their primary challenge.",
  },
  {
    title: "The Trust Shift: Why Credibility Now Follows Proximity, Not Prestige",
    slug: "the-trust-shift",
    date: "2026-01-15",
    description: "Trust in institutions has declined.",
  },
  {
    title: "The Measurement Trap: Why PR Can't Prove ROI in a Metrics-Driven Culture",
    slug: "the-measurement-trap",
    date: "2026-01-15",
    description:
      "Only 32% of execs prioritize revenue or ROI from communications.",
  },
];

export async function GET() {
  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${baseUrl}/blog/${post.slug}</guid>
    </item>
  `
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Shadow Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Vertical AI, market intelligence, communications craft, and original research from the Shadow team.</description>
    <language>en</language>
    <atom:link href="${baseUrl}/blog/feed.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(feed.trim(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
