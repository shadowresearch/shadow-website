import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Shadow",
  description:
    "Vertical AI, market intelligence, communications craft, and original research from the Shadow team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Shadow",
    description:
      "Vertical AI, market intelligence, communications craft, and original research from the Shadow team.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Shadow",
    description:
      "Vertical AI, market intelligence, communications craft, and original research from the Shadow team.",
  },
};

const posts = [
  {
    title: "The Data Layer",
    href: "/blog/the-data-layer",
    date: "March 16, 2026",
    series: null,
    excerpt:
      "Every communications engagement in the history of the discipline has started from the same place: someone's best guess. Not a bad guess, usually, but a guess nonetheless.",
  },
  {
    title: "The Business Model Crisis: Why the PR Agency Model Is Breaking",
    href: "/blog/the-business-model-crisis",
    date: "February 28, 2026",
    series: "Part 4 of 6 · The Structural Crisis in PR",
    excerpt:
      "The PR agency business model has remained largely unchanged for decades. Clients pay a monthly retainer, agencies staff those retainers with account teams, and the cracks are showing.",
  },
  {
    title: "What AI Actually Changes in Communications: Operations, Not Creativity",
    href: "/blog/what-ai-actually-changes",
    date: "February 28, 2026",
    series: "Part 5 of 6 · The Structural Crisis in PR",
    excerpt:
      "91% of communications professionals use generative AI. But the industry's anxiety has been about the wrong things. AI is not replacing judgment. It's attacking the operational layer beneath it.",
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
      "71% of PR professionals cite fragmentation as their primary challenge, yet most agency workflows were built for a centralized media environment that no longer exists.",
  },
  {
    title: "The Trust Shift: Why Credibility Now Follows Proximity, Not Prestige",
    href: "/blog/the-trust-shift",
    date: "January 15, 2026",
    series: "Part 2 of 6 · The Structural Crisis in PR",
    excerpt:
      "Trust in institutions has declined. In its place: contextual credibility, trust that flows from proximity, specificity, and demonstrated experience in a specific community.",
  },
  {
    title: "The Measurement Trap: Why PR Can't Prove ROI in a Metrics-Driven Culture",
    href: "/blog/the-measurement-trap",
    date: "January 15, 2026",
    series: "Part 3 of 6 · The Structural Crisis in PR",
    excerpt:
      "Only 32% of execs prioritize revenue or ROI from communications, yet PR teams face increasing pressure to demonstrate value in terms that don't fit what they actually do.",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* ━━━ Hero ━━━ */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Writing from Shadow.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Vertical AI, communications intelligence, craft, and original
            research from the team building the operating system for modern PR.
          </p>
        </div>
      </section>

      {/* ━━━ Posts ━━━ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
              {posts.map((post) => (
                <li key={post.href}>
                  <Link href={post.href} className="block group">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      {post.series ?? post.date}
                    </p>
                    <h2 className="mt-3 font-heading text-xl font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    {post.series && (
                      <p className="mt-4 text-xs font-mono text-muted-foreground">
                        {post.date}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              Curious what Shadow can do for your team?
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              The best way to understand Shadow is to see it work on your actual
              clients and categories.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Book a demo
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Meet the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
