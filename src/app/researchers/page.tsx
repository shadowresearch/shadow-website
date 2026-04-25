import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Researchers | Shadow",
  description:
    "Researchers gather signal across media, search, and AI. They build the narrative graph that every other Shadow agent reads from.",
  alternates: {
    canonical: "/researchers",
  },
  openGraph: {
    title: "Researchers | Shadow",
    description:
      "Researchers gather signal across media, search, and AI. They build the narrative graph that every other Shadow agent reads from.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Researchers | Shadow",
    description:
      "Researchers gather signal across media, search, and AI. They build the narrative graph that every other Shadow agent reads from.",
  },
};

const faqs = [
  {
    q: "What is an AI agent for media monitoring?",
    a: "An AI agent for media monitoring runs continuous scans across news, search, and AI engines, resolves what it finds to real entities, and delivers structured output instead of raw clips. Shadow's Researcher agents pull from Perigon, DataForSEO, and AI answer logs, then write resolved signal into the narrative graph for every client workspace.",
  },
  {
    q: "How many sources do Researchers monitor?",
    a: "Researchers monitor 200K+ sources across news, trade press, broadcast transcripts, and regional outlets through Perigon, plus search data from DataForSEO and AI answers from ChatGPT, Perplexity, Google AI Overview, and Claude. Coverage is updated continuously, not on a weekly cadence.",
  },
  {
    q: "What is a narrative graph?",
    a: "A narrative graph is a structured representation of what is being said, by whom, about whom, across media, search, and AI. It stores claims, entities, outlets, journalists, and momentum as queryable nodes and edges. Shadow's Researchers build the narrative graph; Analysts, Strategists, Planners, Writers, and Reporters all read from it.",
  },
  {
    q: "Do Researchers replace a human research team?",
    a: "Researchers replace the manual gathering work: monitoring, clip reports, competitive scans, and daily news triage. Strategic interpretation stays human-led, supported by Analyst agents. Agencies redeploy their research analysts into interpretation, strategy, and client-facing work instead of Boolean search strings.",
  },
];

export default function ResearchersPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Gather signal. Structure what you find.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Researchers monitor 200K+ sources across media, search, and AI
            answers, then structure what they find into a narrative graph that
            every other Shadow agent reads from.
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

      {/* What Researchers do */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  The reading half of narrative intelligence.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Researchers are Shadow&apos;s signal layer. They run
                  continuously. Every client workspace has Researchers watching
                  media, search, and AI engines for anything that touches the
                  client, its competitors, or the claims the client wants to
                  own. Findings are resolved, deduplicated, and ingested into
                  the narrative graph.
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
                    title: "Continuous monitoring",
                    desc: "Researchers pull from Perigon, DataForSEO, and AI answer sources around the clock. No clip reports to chase.",
                  },
                  {
                    title: "Entity resolution",
                    desc: "Every mention is tied to a resolved entity (company, person, product, claim), so the narrative graph stays clean across variant spellings and aliases.",
                  },
                  {
                    title: "Graph ingestion",
                    desc: "Findings land in the narrative graph as structured nodes and edges, ready for Analysts, Strategists, and Reporters to query.",
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

      {/* What Researchers replace */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="flex flex-col gap-8 order-2 lg:order-1">
                {[
                  {
                    title: "Research analysts",
                    desc: "Manual landscape scans, weekly competitive clip reports, and category monitoring now run continuously. Analysts review structured output instead of building it from scratch.",
                  },
                  {
                    title: "Account coordinators",
                    desc: "Daily coverage pulls, Google alerts triage, and newsletter-style clip reports are replaced by a Researcher that delivers filtered, resolved signal directly into the workspace.",
                  },
                  {
                    title: "Junior account executives",
                    desc: "Hours lost to monitoring competitor mentions and scanning for breaking stories are reclaimed. Juniors ship strategy, not spreadsheets.",
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
                  The work that used to eat junior hours.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Media monitoring, competitive clip roundups, daily news
                  digests, and manual coverage tracking used to fall on research
                  analysts, account coordinators, and junior account executives.
                  Researchers take that work off the team and keep it running
                  overnight, on weekends, and at scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Researchers work */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Built on real pipes, not a chat wrapper.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Researchers do not guess. They pull from named, structured
                  sources and write resolved signal into the narrative graph.
                  Every claim in the graph is traceable to an article, a query,
                  or an AI answer log. No hallucinated coverage. No invented
                  quotes.
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
                    title: "Perigon for media",
                    desc: "Researchers read from 200K+ news sources through Perigon, covering trade press, regional outlets, tier-one publications, and broadcast transcripts. Stories are clustered and scored for authority.",
                  },
                  {
                    title: "DataForSEO for search",
                    desc: "Search volume, trend data, SERP composition, and ranking shifts come from DataForSEO. Researchers watch which queries are heating up and which are getting quietly captured by rivals.",
                  },
                  {
                    title: "AI answer audits",
                    desc: "Researchers run structured prompts against ChatGPT, Perplexity, Google AI Overview, and Claude, then log how the client appears (or does not). Findings use methodology aligned with ZipTie and the Princeton and Georgia Tech GEO study.",
                  },
                  {
                    title: "Graph-level entity resolution",
                    desc: "Every mention is resolved before it hits the graph. A Semrush 2025 benchmark on entity variance in brand coverage is one of the inputs to Shadow's resolution model.",
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

      {/* Researchers in the workflow */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Researcher to Analyst handoff.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Researchers do not interpret. They gather and structure. The
                  interpretation layer is the Analyst. Once a Researcher has
                  resolved signal into the narrative graph, Analysts read it in
                  context: fingerprinting a client, mapping a category, scoring
                  white space, flagging drift.
                </p>
                <Link
                  href="/analysts"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Meet the Analysts
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="flex flex-col gap-5 text-sm text-muted-foreground leading-relaxed max-w-md">
                <p>
                  The handoff is tight. Researchers publish a nightly graph
                  delta. Analysts wake to a changed landscape. Strategists see
                  new positions scored by morning. The user opens the workspace
                  and sees what actually shifted.
                </p>
                <p>
                  Without Researchers, the narrative graph goes stale within
                  hours. With Researchers, it is a living map.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
              Questions about Researchers
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

      {/* Final CTA */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              Put Researchers on your category.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Book a demo and we will stand up a Researcher run on your
              client&apos;s space before the call.
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
