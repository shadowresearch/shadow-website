import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Analysts | Shadow",
  description:
    "Analysts interpret what Researchers gather. They produce fingerprints, landscapes, and white-space maps for every client.",
  alternates: {
    canonical: "/analysts",
  },
  openGraph: {
    title: "Analysts | Shadow",
    description:
      "Analysts interpret what Researchers gather. They produce fingerprints, landscapes, and white-space maps for every client.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Analysts | Shadow",
    description:
      "Analysts interpret what Researchers gather. They produce fingerprints, landscapes, and white-space maps for every client.",
  },
};

const faqs = [
  {
    q: "What is AI for competitive analysis?",
    a: "AI for competitive analysis uses structured signal from media, search, and AI answers to score how a brand compares to its rivals on claims, share of voice, and narrative momentum. Shadow's Analyst agents produce competitive overlays from a live narrative graph populated by Researchers against Perigon, DataForSEO, and AI answer audits.",
  },
  {
    q: "What is brand landscape analysis?",
    a: "Brand landscape analysis maps who owns what in a category across earned media, search results, and AI-generated answers. Analysts lay out the claims, the current owners, the contested territory, and the open territory. The output is a category view grounded in structured signal, not a static competitive matrix.",
  },
  {
    q: "What is white-space analysis?",
    a: "White-space analysis identifies claims with real demand (in search, in coverage requests, in AI queries) that no competitor currently owns. Analysts surface these gaps by intersecting DataForSEO demand signal with Perigon coverage data and AI answer logs. White space becomes the first input to the Positioning Engine.",
  },
  {
    q: "How do Analysts differ from Researchers?",
    a: "Researchers gather and structure signal into the narrative graph. Analysts interpret it. Researchers answer what is being said. Analysts answer what it means for the client. Together they form the reading layer of Shadow's narrative intelligence platform. Strategists, Planners, Writers, and Reporters pick up from there.",
  },
];

export default function AnalystsPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Interpret the landscape.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Analysts read the narrative graph in context. They produce
            fingerprints (client-level), landscapes (category-level), and drift
            alerts when positions start shifting.
          </p>
          <div className="mt-10 flex flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Request a landscape
            </Link>
            <Link
              href="/ai-agents"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              See all agents
            </Link>
          </div>
        </div>
      </section>

      {/* What Analysts do */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  The interpretation layer of narrative intelligence.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Analysts are the agents that make the narrative graph
                  legible. Researchers deliver structured signal. Analysts read
                  it. They produce artifacts humans can actually use: client
                  fingerprints, category landscapes, competitive overlays,
                  white-space maps, and drift alerts when a rival starts moving
                  on a claim.
                </p>
                <Link
                  href="/narrative-intelligence"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Explore narrative intelligence
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="flex flex-col gap-8">
                {[
                  {
                    title: "Fingerprinting",
                    desc: "Score the client's current narrative position across the claims that matter in the category.",
                  },
                  {
                    title: "Landscape mapping",
                    desc: "Lay out who owns what in a category across media, search, and AI answers.",
                  },
                  {
                    title: "White-space identification",
                    desc: "Surface claims that are live in search and AI demand but uncontested in coverage.",
                  },
                  {
                    title: "Competitive overlays",
                    desc: "Stack the client against rivals on share of voice, journalist relationships, and claim momentum.",
                  },
                  {
                    title: "Drift detection",
                    desc: "Alert when a claim the client owns starts shifting toward a competitor.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Analysts replace */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="flex flex-col gap-8 order-2 lg:order-1">
                {[
                  {
                    title: "Senior account managers",
                    desc: "Competitive decks and pitch-prep briefs used to take a week of senior time per client, per quarter. Analysts produce them on demand from live graph data. Senior managers review and direct instead of building.",
                  },
                  {
                    title: "Research analysts",
                    desc: "Quarterly positioning briefs, category one-pagers, and share-of-voice audits are standing outputs now. Research analysts move from assembling evidence to challenging it.",
                  },
                  {
                    title: "Strategy leads",
                    desc: "White-space identification used to rely on gut plus dated reports. Analysts ground the call in current search demand (DataForSEO), current coverage (Perigon), and current AI answers (ZipTie-style audits).",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  The strategic work stuck in decks.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Senior account managers and research analysts have
                  historically owned competitive decks, quarterly positioning
                  briefs, and category reviews. Those artifacts were expensive,
                  slow, and stale the day they shipped. Analysts produce them
                  continuously and ground every claim in the narrative graph.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Analysts work */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Read the graph, score the position, mark the shift.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Analysts query the narrative graph directly. They score each
                  client&apos;s narrative strength across the claims that
                  matter, identify which territory is contested versus open,
                  and watch for drift between reporting cycles. Every
                  conclusion traces back to signal.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Talk to us
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="flex flex-col gap-8">
                {[
                  {
                    title: "Query the graph",
                    desc: "Analysts pull structured views of the narrative graph scoped to a client, a category, or a specific claim. The graph is populated by Researchers against Perigon, DataForSEO, and AI answer logs.",
                  },
                  {
                    title: "Score narrative strength",
                    desc: "For each claim a client wants to own, Analysts score current strength: coverage volume, coverage quality, AI answer presence, search ownership, journalist alignment. Scoring methodology draws on the Princeton and Georgia Tech GEO study and Semrush 2025 entity-based ranking benchmarks.",
                  },
                  {
                    title: "Contested versus open",
                    desc: "Analysts flag territory where a rival is pulling ahead (contested) and claims with demand but no clear owner (open). Open territory becomes the first input to the Positioning Engine.",
                  },
                  {
                    title: "Drift detection",
                    desc: "When a claim a client owns starts shifting toward a competitor in coverage, search, or AI answers, Analysts raise a drift alert into the workspace. Teams move before the position is lost.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <p className="font-heading text-lg font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analyst handoff */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Landscape becomes the input to the Positioning Engine.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  The Analyst output is the input the Positioning Engine needs.
                  A scored fingerprint, a mapped landscape, and a set of open
                  claims go to the Strategist agent. Strategists run positioning
                  options against that landscape and return a ranked set of
                  claims the client could credibly own.
                </p>
                <Link
                  href="/strategists"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Meet the Strategists
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="flex flex-col gap-5 text-sm text-muted-foreground leading-relaxed max-w-md">
                <p>
                  Without Analysts, Strategists are scoring against raw signal.
                  With Analysts, Strategists are scoring against a curated,
                  contextualized reading of the market. The difference shows up
                  in the quality of the recommendation and the speed of the
                  approval.
                </p>
                <p>
                  Planners, Writers, and Reporters then execute against the
                  selected position. Every program traces back to an Analyst
                  read of the graph.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
              Questions about Analysts
            </h2>
            <div className="mt-10 space-y-10 max-w-3xl">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {f.q}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Up next in the workflow */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="max-w-[1425px] mx-auto px-8 md:px-16 border-t border-foreground/10 pt-12 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] gap-x-10 lg:gap-x-20 gap-y-6 items-start">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Up next in the workflow
            </p>
            <div>
              <h3 className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] text-foreground leading-[1.1] tracking-tight">
                <Link
                  href="/strategists"
                  className="hover:text-foreground/70 transition-colors"
                >
                  Strategists.
                </Link>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">
                Strategists score positioning options against the Analyst&apos;s
                read of the landscape and return a ranked recommendation the
                client can defensibly own.
              </p>
              <Link
                href="/strategists"
                className="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
              >
                Continue to Strategists
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              See your category through an Analyst read.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Book a demo and we will produce a live fingerprint and landscape
              on your client&apos;s space before the call.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Request a landscape
              </Link>
              <Link
                href="/ai-agents"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                See all agents
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
