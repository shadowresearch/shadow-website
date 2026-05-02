import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reporters | Shadow",
  description:
    "Reporters measure what moved. Coverage, reach, sentiment, SERP movement, AI citation changes. Close the learning loop.",
  alternates: {
    canonical: "/reporters",
  },
  openGraph: {
    title: "Reporters | Shadow",
    description:
      "Reporters measure what moved. Coverage, reach, sentiment, SERP movement, AI citation changes. Close the learning loop.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reporters | Shadow",
    description:
      "Reporters measure what moved. Coverage, reach, sentiment, SERP movement, AI citation changes. Close the learning loop.",
  },
};

const faqs = [
  {
    q: "Why call them Reporters?",
    a: "Two reasons. They produce the report: the program recap, the coverage log, the share-of-voice update. And they echo journalism: they describe what happened, not what the team hoped would happen. The doubled meaning is intentional. Comms measurement has a credibility problem; a journalistic posture is the fix.",
  },
  {
    q: "What does a Reporter actually measure?",
    a: "Coverage volume, reach, tier, message pickup, sentiment, share of voice, SERP movement, AI citation changes across ChatGPT, Perplexity, Gemini, and Claude, journalist engagement, and downstream syndication. Each metric is tied to the program's original objective, so the report shows whether the program moved what it was built to move.",
  },
  {
    q: "How does measurement feed back into the next program?",
    a: "Every program report writes back to the Narrative Graph. Angles that landed get reinforced. Journalists who engaged get upgraded. Positions that moved AI citation patterns get tagged. When the Strategist runs the next cycle, it scores options against a graph that is literally smarter than it was before. The loop closes.",
  },
  {
    q: "Who does the Reporter replace?",
    a: "Research Analysts running measurement, Account Managers writing monthly recaps, and Media Analysts assembling coverage books. The work is pattern work: collecting coverage, tagging it, summarizing it, and reporting it. Shadow's Reporter runs continuously and produces the deliverable with the same rigor every time.",
  },
];

export default function ReportersPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Measure what moved.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Reporters track what happened after execution. Coverage, reach,
            message pickup, SERP movement, AI citation changes. Every program
            writes back to the narrative graph and makes the next one sharper.
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

      {/* What Reporters do */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Tell the program what actually happened.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Reporters measure execution against intent. They track
                  coverage volume, reach, message pickup, journalist
                  engagement, SERP movement, and AI citation changes. The
                  output is a structured report that ties every metric to a
                  program objective. Not a dashboard of activity: a narrative
                  of outcomes. What moved, what did not, why, and what the
                  next program should do differently.
                </p>
                <Link
                  href="/program-execution"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Explore program execution
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="flex flex-col gap-8">
                {[
                  {
                    title: "Coverage analysis",
                    desc: "Every placement is captured, tiered, and tagged. Shadow's Reporter measures message pickup against the program's approved messages and sentiment against the client's positioning. Coverage is judged on quality, not just count.",
                  },
                  {
                    title: "SERP and GEO tracking",
                    desc: "Reporters monitor search rankings for the client's target queries and AI citation rates across ChatGPT, Perplexity, Gemini, and Claude. Movement pre- and post-program is attributed to the work, not left to intuition.",
                  },
                  {
                    title: "Attribution",
                    desc: "Coverage, inbound interest, search visibility, and AI citation changes are connected to program inputs. Which angle drove tier-one pickup. Which journalist seeded the syndication. Which release moved AI answers. Attribution is explicit, not inferred.",
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
                    title: "Research Analyst (measurement)",
                    desc: "Coverage tagging, sentiment scoring, and share-of-voice assembly run continuously in Shadow. Research Analysts move from production to analysis, adding interpretation to data that is already clean.",
                  },
                  {
                    title: "Account Manager (reporting)",
                    desc: "The monthly report is no longer a weekend project. Shadow's Reporter drafts the recap against live data and program objectives. Account Managers review, annotate, and send.",
                  },
                  {
                    title: "Media Analyst",
                    desc: "Share of voice, message pickup, and competitive benchmarking are Shadow's baseline output. Media Analysts shift to pattern work: identifying trends, naming anomalies, and recommending response.",
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
                  The measurement work nobody has time for.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Research Analysts build coverage books. Account Managers
                  write monthly recaps. Media Analysts assemble share-of-voice
                  charts. The work is important and chronically
                  under-resourced, so reports arrive late, get simplified, or
                  skip steps. Shadow&apos;s Reporter runs the full measurement
                  loop continuously, then packages the output to whatever
                  cadence the client requires.
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
                  Capture, attribute, report.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Reporters run three continuous processes. They capture every
                  surface the program touches: coverage, social, search, AI
                  answers, journalist engagement, inbound interest. They
                  attribute observed movement back to specific program inputs.
                  They report on a schedule the client sets, in a format the
                  client can read. The cycle runs whether anyone is watching.
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
                    title: "Coverage capture",
                    desc: "Shadow scans 200,000+ sources continuously. Placements are detected, tagged, and scored. Syndication chains are tracked. Broadcast hits are transcribed. Podcast mentions are captured. Nothing material goes unlogged.",
                  },
                  {
                    title: "SERP and AI citation monitoring",
                    desc: "The Reporter runs standardized query sets against Google, Bing, and major AI engines on a weekly cadence. Changes in ranking, AI citation, and share of AI voice are time-stamped and attributed to program events.",
                  },
                  {
                    title: "Attribution model",
                    desc: "Shadow's attribution connects outputs to inputs. Which angle drove the tier-one placement. Which release moved an AI answer. Which journalist's coverage seeded a syndication. Attribution is traced through the Narrative Graph, not estimated by proximity in time.",
                  },
                  {
                    title: "Report production",
                    desc: "Reports ship in the format the client expects: structured PDF, live dashboard, email digest, board-ready deck. Cadence is configurable: weekly, monthly, quarterly, post-program. The content is consistent; the packaging adapts.",
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

      {/* The learning loop */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="flex flex-col gap-8 order-2 lg:order-1">
                {[
                  {
                    title: "Angle reinforcement",
                    desc: "Angles that produced tier-one coverage or strong AI citation movement are weighted up in the Planner's angle generation. Angles that fell flat are weighted down. Learning is persistent across programs and clients (within privacy scopes).",
                  },
                  {
                    title: "Journalist signal",
                    desc: "Engagement patterns update journalist profiles. Reporters who replied, booked calls, or published get a positive signal. Reporters who ignored pitches in their own beat area get a negative one.",
                  },
                  {
                    title: "Position calibration",
                    desc: "Positions that moved measurable outcomes get flagged in the Narrative Graph as high-leverage. The next Strategist cycle scores candidate positions against a record of what actually moved the category, not just what read well in a deck.",
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
                  Every program makes the next one sharper.
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Reporters close the loop that most comms workflows leave
                  open. Every program&apos;s outcomes write back to the
                  Narrative Graph. Angles that landed get weighted.
                  Journalists who engaged get upgraded. Positions that moved
                  AI citations get tagged as effective. The next time a
                  Strategist runs, the scoring model is calibrated on what
                  actually worked. This is why Shadow compounds.
                </p>
                <Link
                  href="/strategists"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Meet the Strategists
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
              Questions about Reporters
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

      {/* The cycle restarts */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="max-w-[1425px] mx-auto px-8 md:px-16 border-t border-foreground/10 pt-12 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] gap-x-10 lg:gap-x-20 gap-y-6 items-start">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              The cycle restarts
            </p>
            <div>
              <h3 className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] text-foreground leading-[1.1] tracking-tight">
                <Link
                  href="/researchers"
                  className="hover:text-foreground/70 transition-colors"
                >
                  Researchers.
                </Link>
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">
                What the Reporter learns flows back to the Researcher. The
                landscape keeps moving. Researchers gather the next round of
                signal and the loop runs again, smarter than before.
              </p>
              <Link
                href="/researchers"
                className="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
              >
                Back to Researchers
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
              See what Shadow measures on a live program.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Book a demo and we&apos;ll show a Reporter attribute coverage,
              SERP movement, and AI citation change to the inputs that drove
              them.
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
