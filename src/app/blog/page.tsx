import type { Metadata } from "next";
import { CTASection } from "../_components/CTASection";

export const metadata: Metadata = {
  title: "Blog: Shadow",
  description:
    "Vertical AI, communications intelligence, craft, and original research from the Shadow team.",
};

const categories = [
  {
    title: "Vertical AI",
    description:
      "How domain-specific AI systems outperform general-purpose models — and what it means for the industries being transformed.",
    color: "bg-primary/10 border-primary/20",
    textColor: "text-primary",
  },
  {
    title: "Communications Intelligence",
    description:
      "Research, analysis, and perspective on the evolving media landscape, journalist behavior, and what effective PR looks like in 2025.",
    color: "bg-[oklch(0.623_0.093_54)]/10 border-[oklch(0.623_0.093_54)]/20",
    textColor: "text-[oklch(0.55_0.08_54)]",
  },
  {
    title: "Craft",
    description:
      "The practice of great communications — writing, pitching, storytelling, and building relationships with journalists.",
    color: "bg-[oklch(0.55_0.07_300)]/10 border-[oklch(0.55_0.07_300)]/20",
    textColor: "text-[oklch(0.45_0.07_300)]",
  },
  {
    title: "Product",
    description:
      "Updates, feature deep-dives, and the thinking behind Shadow's product decisions.",
    color: "bg-muted border-border",
    textColor: "text-muted-foreground",
  },
  {
    title: "Data & Research",
    description:
      "Original research on media trends, keyword patterns, AI answer engines, and the data behind modern communications.",
    color: "bg-card border-border",
    textColor: "text-foreground",
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

      {/* Categories */}
      <section className="py-20 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">
            Topics
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className={`border rounded-xl p-6 flex flex-col gap-3 ${cat.color}`}
              >
                <span
                  className={`text-xs font-mono uppercase tracking-widest ${cat.textColor}`}
                >
                  {cat.title}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon */}
      <section className="py-20 px-6 bg-muted/30 border-b border-border">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex flex-col items-center gap-4 max-w-lg">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Coming soon
            </span>
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              First posts dropping soon
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We&apos;re working on a series of pieces on vertical AI, the future
              of media intelligence, and what it means to build communications
              infrastructure from scratch. Subscribe to be first.
            </p>
            <form className="flex gap-2 w-full max-w-sm">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
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
