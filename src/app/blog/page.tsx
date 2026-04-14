import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../_components/CTASection";

export const metadata: Metadata = {
  title: "Blog — Shadow",
  description:
    "Vertical AI, communications intelligence, craft, and original research from the Shadow team.",
};

const posts = [
  {
    title: "The Data Layer",
    href: "/blog/the-data-layer",
    date: "March 16, 2026",
    series: null,
    excerpt:
      "Every communications engagement in the history of the discipline has started from the same place: someone's best guess. Not a bad guess, usually — but a guess nonetheless.",
  },
  {
    title: "The Business Model Crisis: Why the PR Agency Model Is Breaking",
    href: "/blog/the-business-model-crisis",
    date: "February 28, 2026",
    series: "Part 4 of 6 · The Structural Crisis in PR",
    excerpt:
      "The PR agency business model has remained largely unchanged for decades. Clients pay a monthly retainer, agencies staff those retainers with account teams — and the cracks are showing.",
  },
  {
    title: "What AI Actually Changes in Communications: Operations, Not Creativity",
    href: "/blog/what-ai-actually-changes",
    date: "February 28, 2026",
    series: "Part 5 of 6 · The Structural Crisis in PR",
    excerpt:
      "91% of communications professionals use generative AI. But the industry's anxiety has been about the wrong things. AI is not replacing judgment — it's attacking the operational layer beneath it.",
  },
  {
    title: "The Future of Communications Belongs to Judgment, Not Access",
    href: "/blog/what-comes-next",
    date: "February 28, 2026",
    series: "Part 6 of 6 · The Structural Crisis in PR",
    excerpt:
      "The final installment of the series. Coming soon.",
  },
  {
    title: "The Attention Shift: How Public Discourse Decentralized",
    href: "/blog/the-attention-shift",
    date: "January 15, 2026",
    series: "Part 1 of 6 · The Structural Crisis in PR",
    excerpt:
      "71% of PR professionals cite fragmentation as their primary challenge — yet most agency workflows were built for a centralized media environment that no longer exists.",
  },
  {
    title: "The Trust Shift: Why Credibility Now Follows Proximity, Not Prestige",
    href: "/blog/the-trust-shift",
    date: "January 15, 2026",
    series: "Part 2 of 6 · The Structural Crisis in PR",
    excerpt:
      "Trust in institutions has declined. In its place: contextual credibility — trust that flows from proximity, specificity, and demonstrated experience in a specific community.",
  },
  {
    title: "The Measurement Trap: Why PR Can't Prove ROI in a Metrics-Driven Culture",
    href: "/blog/the-measurement-trap",
    date: "January 15, 2026",
    series: "Part 3 of 6 · The Structural Crisis in PR",
    excerpt:
      "Only 32% of execs prioritize revenue or ROI from communications — yet PR teams face increasing pressure to demonstrate value in terms that don't fit what they actually do.",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-28 md:py-36 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            Blog
          </span>
          <h1 className="mt-4 font-serif text-5xl md:text-6xl text-foreground leading-tight max-w-3xl">
            Writing from Shadow
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Vertical AI, communications intelligence, craft, and original
            research — from the team building the operating system for modern
            PR.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col divide-y divide-border">
            {posts.map((post) => (
              <article key={post.href} className="py-10 first:pt-0 last:pb-0">
                <Link href={post.href} className="group block">
                  {post.series && (
                    <span className="inline-flex items-center text-xs font-mono text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4">
                      {post.series}
                    </span>
                  )}
                  <h2 className="font-serif text-2xl md:text-3xl text-foreground leading-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-xs text-muted-foreground font-mono">
                      {post.date}
                    </span>
                    <span className="text-xs text-primary font-medium group-hover:underline">
                      Read &rarr;
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Curious what Shadow can do for your team?"
        body="The best way to understand Shadow is to see it work on your actual clients and categories."
        primaryLabel="Book a demo"
        secondaryLabel="Meet the team"
        secondaryHref="/about"
      />
    </div>
  );
}
