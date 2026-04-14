import type { Metadata } from "next";
import { BlogPost } from "../_components/BlogPost";

export const metadata: Metadata = {
  title: "The Future of Communications Belongs to Judgment, Not Access — Shadow Blog",
  description:
    "Part 6 of The Structural Crisis in PR. Coming soon.",
};

const relatedPosts = [
  { part: 1, title: "The Attention Shift: How Public Discourse Decentralized", href: "/blog/the-attention-shift" },
  { part: 2, title: "The Trust Shift: Why Credibility Now Follows Proximity, Not Prestige", href: "/blog/the-trust-shift" },
  { part: 3, title: "The Measurement Trap: Why PR Can't Prove ROI in a Metrics-Driven Culture", href: "/blog/the-measurement-trap" },
  { part: 4, title: "The Business Model Crisis: Why the PR Agency Model Is Breaking", href: "/blog/the-business-model-crisis" },
  { part: 5, title: "What AI Actually Changes in Communications: Operations, Not Creativity", href: "/blog/what-ai-actually-changes" },
];

export default function WhatComesNextPage() {
  return (
    <BlogPost
      title="The Future of Communications Belongs to Judgment, Not Access"
      author="Jessen Gibbs, CEO, Shadow"
      date="February 28, 2026"
      series={{ name: "The Structural Crisis in PR", part: 6, total: 6 }}
      relatedPosts={relatedPosts}
    >
      <p className="text-muted-foreground italic">
        This article is being migrated. Check back soon.
      </p>
    </BlogPost>
  );
}
