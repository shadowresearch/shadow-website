import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Strategists | Shadow",
  description:
    "Strategists score positioning options against the live landscape. Shadow's positioning engine runs continuously at a depth manual teams can't reach.",
  alternates: {
    canonical: "/strategists",
  },
  openGraph: {
    title: "Strategists | Shadow",
    description:
      "Strategists score positioning options against the live landscape. Shadow's positioning engine runs continuously at a depth manual teams can't reach.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategists | Shadow",
    description:
      "Strategists score positioning options against the live landscape. Shadow's positioning engine runs continuously at a depth manual teams can't reach.",
  },
};

const faqs = [
  {
    q: "What does a Strategist agent actually produce?",
    a: "A ranked set of positioning options with explicit scores across differentiation, resonance, evidence, and extensibility. Each option includes the territory description, the competitive overlap, the proof points available, and the trade-offs. The Strategist recommends one, documents why, and hands the decision to a Planner for program design.",
  },
  {
    q: "How is this different from a senior strategist at an agency?",
    a: "A human Principal reviews a handful of positions against a static landscape deck. Shadow's Strategist scores every open territory against a live Narrative Graph that refreshes as coverage, search, and AI citations shift. The output is continuous, auditable, and tied to evidence the client can defend.",
  },
  {
    q: "Who does the Strategist replace on a retainer?",
    a: "The Strategist replaces the positioning work of a VP of Strategy, Account Director, Senior Strategist, or Principal. Human strategists remain essential for client relationships, judgment calls, and creative direction. Shadow removes the research-to-recommendation slog that consumes most of their billable hours.",
  },
  {
    q: "What inputs does a Strategist need to run?",
    a: "Client evidence (product, proof points, executive voice), the category landscape from Shadow's Analysts, buyer intent signals from search and social, and a defined objective. The Strategist pulls these from the Narrative Graph and the Client Workspace. No briefing deck required.",
  },
];

export default function StrategistsPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Find the position worth owning.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Strategists score every open territory against your client&apos;s
            evidence, the competitive landscape, and buyer intent. The output
            is a ranked set of positions your client can defensibly take.
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

      {/* What Strategists do */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Turn landscape into a positioning decision.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Strategists take the Analyst&apos;s read of the category and
                  make the call. They map open territory, test candidate
                  positions against the live Narrative Graph, and return a
                  ranked recommendation. The work is continuous: as the
                  landscape moves, the ranking updates. The Strategist tells
                  you which position is worth owning this quarter, and why the
                  next-best option is next-best.
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
                    title: "Positioning option generation",
                    desc: "Shadow's Strategist generates candidate positions from the intersection of client evidence, competitive whitespace, and buyer intent. Each option is a concrete territory with a claim, a proof structure, and a list of defensibility risks.",
                  },
                  {
                    title: "Multi-criteria scoring",
                    desc: "Every option is scored on differentiation (how far from competitors), resonance (alignment with buyer questions), evidence (what the client can prove), and extensibility (runway for future programs). Scores are transparent and auditable.",
                  },
                  {
                    title: "Trade-off analysis",
                    desc: "The Strategist explains what a position costs: the territories it forecloses, the competitors it provokes, and the proof burden it creates. Principals get the clarity they need to make a call in minutes, not weeks.",
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

      {/* What they replace */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="flex flex-col gap-8 order-2 lg:order-1">
                {[
                  {
                    title: "VP of Strategy (framework work)",
                    desc: "The positioning framework, competitive maps, and message architecture that a VP builds manually are assembled continuously by the Strategist, scored against live data, and versioned as inputs change.",
                  },
                  {
                    title: "Account Director (category immersion)",
                    desc: "New Account Directors spend their first month absorbing a client's category. Shadow's Strategist arrives already immersed: every category, competitor, and journalist beat is pre-loaded in the Narrative Graph.",
                  },
                  {
                    title: "Senior Strategist, Principal (recommendation)",
                    desc: "The final positioning recommendation, historically the Principal's deliverable, is produced by the Strategist with explicit scoring and trade-off reasoning. Principals still make the call. They just skip the slog.",
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
                  The work of a Principal&apos;s first six weeks.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  At a traditional agency, positioning work is absorbed by VPs
                  of Strategy, Account Directors, Senior Strategists, and
                  Principals. It takes weeks of landscape review, client
                  interviews, and framework workshops to produce a single
                  positioning recommendation. Shadow&apos;s Strategist
                  compresses the research-to-recommendation cycle to hours, not
                  weeks, and keeps the output live as the category changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How they work */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Scoring is the mechanism.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  The Strategist does not guess. It runs every candidate
                  position through a scoring model calibrated on four
                  dimensions. Differentiation is measured against competitor
                  coverage and share of voice. Resonance is measured against
                  search demand and AI query patterns. Evidence is measured
                  against the client&apos;s proof inventory. Extensibility is
                  measured by how many adjacent programs the position can seed.
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
                    title: "Differentiation",
                    desc: "How far the position sits from the nearest competitor claim, measured across earned coverage, owned content, paid placements, and AI citations. Closer positions score lower; open whitespace scores higher.",
                  },
                  {
                    title: "Resonance",
                    desc: "How closely the position maps to what buyers actually ask, scored against Shadow's keyword, social, and AI-query datasets. A position no one searches for is a vanity position.",
                  },
                  {
                    title: "Evidence",
                    desc: "What the client can prove today. The Strategist audits the client's proof inventory (customers, data, executive credentials, product milestones) and flags claims that exceed what evidence will defend.",
                  },
                  {
                    title: "Extensibility",
                    desc: "How many programs the position can generate over the next four quarters. A one-program position is a tactic. A multi-program position is a strategy.",
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

      {/* Handoff */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="flex flex-col gap-8 order-2 lg:order-1">
                {[
                  {
                    title: "Structured brief",
                    desc: "The Planner receives a machine-readable brief with the position, the proof stack, the audiences ranked by priority, and the program objectives. No interpretation required.",
                  },
                  {
                    title: "Living context",
                    desc: "If the landscape shifts mid-program, the Strategist flags it and the Planner adjusts. The loop runs continuously rather than at quarterly review.",
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
                  From decision to program.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Once the Strategist&apos;s recommendation is approved, the
                  work flows to a Planner. The handoff is structured: the
                  chosen position, the supporting evidence, the trade-offs
                  accepted, and the sequence priorities. Planners translate
                  positioning into angles, journalist targets, outlet mix, and
                  message variants. Nothing is lost in translation because
                  everything lives in the same Narrative Graph.
                </p>
                <Link
                  href="/planners"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Meet the Planners
                  <span aria-hidden="true">→</span>
                </Link>
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
              Questions about Strategists
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
                  href="/planners"
                  className="hover:text-foreground/70 transition-colors"
                >
                  Planners.
                </Link>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">
                Planners translate the chosen position into an executable
                program: angle variants, scored journalist lists, channel mix,
                and sequence.
              </p>
              <Link
                href="/planners"
                className="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
              >
                Continue to Planners
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
              See the positioning engine score your category.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Book a demo and we&apos;ll run your client&apos;s category
              through the Strategist live on the call.
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
