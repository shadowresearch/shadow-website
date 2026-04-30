import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Narrative Intelligence vs Media Monitoring | Shadow",
  description:
    "Media monitoring tells you what was said. Narrative intelligence tells you what it means, where to position, and what to do next.",
  alternates: {
    canonical: "/narrative-intelligence-vs-media-monitoring",
  },
  openGraph: {
    title: "Narrative Intelligence vs Media Monitoring | Shadow",
    description:
      "Media monitoring tells you what was said. Narrative intelligence tells you what it means, where to position, and what to do next.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Narrative Intelligence vs Media Monitoring | Shadow",
    description:
      "Media monitoring tells you what was said. Narrative intelligence tells you what it means, where to position, and what to do next.",
  },
};

const dimensionsTable = [
  {
    dimension: "Surfaces covered",
    monitoring: "News, broadcast, social",
    intelligence: "News, broadcast, social, organic search, AI answer engines",
  },
  {
    dimension: "Primary output",
    monitoring: "Mentions, clips, share-of-voice charts",
    intelligence: "Narrative map, position recommendations, drafted content",
  },
  {
    dimension: "Cadence",
    monitoring: "Daily digests, weekly and monthly reports",
    intelligence: "Continuous read, triggered on narrative movement",
  },
  {
    dimension: "Decision support",
    monitoring: "Human reads the report and infers what to do",
    intelligence: "System proposes the next action with reasoning",
  },
  {
    dimension: "Positioning guidance",
    monitoring: "None; measurement only",
    intelligence: "Explicit: which claim to own, why, and how",
  },
  {
    dimension: "Measurement philosophy",
    monitoring: "Volume, reach, sentiment",
    intelligence: "Narrative share, position held, AI citation rate",
  },
  {
    dimension: "Learning loop",
    monitoring: "Static; reports do not compound",
    intelligence: "Per-client memory; each cycle improves targeting",
  },
  {
    dimension: "Cost model",
    monitoring: "Seats plus modules; assembly by human analysts",
    intelligence: "Platform plus agents; analysis is built into the system",
  },
];

const outputsTable = [
  {
    question: "What are they saying about us?",
    monitoring: "Clip book, sentiment score",
    intelligence: "Claim map, frame attribution, source credibility",
  },
  {
    question: "Where is the category going?",
    monitoring: "Trend chart of mention volume",
    intelligence: "Emerging frames, inflection points, competitor drift",
  },
  {
    question: "What should we say next?",
    monitoring: "Not addressed",
    intelligence: "Position recommendation, proof requirements, drafted pitches",
  },
  {
    question: "Who should we pitch?",
    monitoring: "Database search by beat",
    intelligence: "Context-aware targeting against the claim you are trying to own",
  },
  {
    question: "Did we move the narrative?",
    monitoring: "Share of voice delta",
    intelligence: "Position held, frame adoption, AI answer presence",
  },
];

const faqs = [
  {
    q: "Does narrative intelligence replace media monitoring?",
    a: "No. Narrative intelligence consumes monitoring data as one of its inputs. Shadow ingests coverage from providers like Perigon, combines it with search and AI-answer signals, and turns the combined substrate into positioning decisions. Teams that adopt Shadow typically keep or consolidate their monitoring stack rather than abandon it.",
  },
  {
    q: "Is narrative intelligence the same as AI-enhanced monitoring?",
    a: "No. AI-enhanced monitoring applies language models to summarize or tag mentions inside the same reporting workflow. Narrative intelligence is a different layer. It models how claims form across media, search, and AI, then produces a position and the content to take it. Summarization is not strategy.",
  },
  {
    q: "Which vendors operate in the narrative intelligence layer?",
    a: "The category is forming. Shadow operates the positioning half: reading the landscape and building positions for communications teams. Blackbird.AI operates the defensive half, detecting narrative threats for trust and safety, risk, and government teams. Monitoring providers such as Meltwater, Cision, and Muck Rack continue to lead the reporting layer beneath both.",
  },
  {
    q: "How do teams measure narrative intelligence?",
    a: "By position, not volume. The useful metrics are narrative share on a defined claim, frame adoption inside target outlets, search visibility on category questions, and citation presence inside AI answers. Mention count remains a diagnostic, not the scoreboard.",
  },
];

export default function NarrativeIntelligenceVsMediaMonitoringPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Narrative intelligence is not media monitoring.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Media monitoring reports what was said. Narrative intelligence
            reads how claims originate, propagate, and mutate across media,
            search, and AI, then points to the position a brand can
            defensibly own.
          </p>
          <div className="mt-10 flex flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Book a demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* Answer capsule */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="max-w-3xl">
              <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                What is the difference between media monitoring and narrative
                intelligence?
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                Media monitoring is a reporting layer. It captures mentions
                across news, broadcast, and social, then hands them to a human
                to interpret. Narrative intelligence is a decision layer. It
                reads how claims form and move across media, search, and AI,
                models which positions a brand can credibly own, and produces
                the language and plan to take them. Monitoring answers what
                was said. Narrative intelligence answers what it means and
                what to do next.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What media monitoring is */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-xl">
                  What media monitoring is, and who does it well.
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Media monitoring is the practice of capturing, tagging, and
                  reporting on brand and topic mentions across published
                  sources. The category is mature. Meltwater tracks roughly
                  300,000 online sources. Cision maintains more than 1.6
                  million journalist profiles and owns PR Newswire for
                  distribution. Muck Rack specializes in journalist data and
                  outreach. PR Newswire, Business Wire, and Agility PR
                  Solutions round out the wire and database end of the stack.
                </p>
                <p>
                  These platforms do what they are built to do: aggregate
                  coverage, measure reach, compute share of voice, and produce
                  end-of-month reports. The 2026 Cision and PRWeek Global
                  Comms Report found that 76 percent of communicators use
                  generative AI, most often on top of this monitoring data to
                  summarize or tag it.
                </p>
                <p>
                  Monitoring is necessary. It is also incomplete. It tells a
                  team what has already been published. It does not tell a
                  team where the narrative is going, what position is still
                  available, or what to write next.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What narrative intelligence is */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-xl">
                  What narrative intelligence is.
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Narrative intelligence is a two-part system. A reading layer
                  that models how claims form and travel, and a positioning
                  layer that turns that model into defensible language. Shadow
                  calls these the Narrative Graph and the Positioning Engine.
                  Together they read the landscape, write the position, run
                  the program, and measure what moved.
                </p>
                <p>
                  The reading layer works across three surfaces that, in 2026,
                  jointly determine whether a brand is understood: traditional
                  media, search, and AI answers. Perigon, DataForSEO, and
                  AI-answer audits from tools like Profound and ZipTie feed
                  the graph. Gartner forecasts that by 2028 half of buyer
                  research will start inside a generative engine, which makes
                  the AI surface a first-class signal, not an afterthought.
                </p>
                <p>
                  The positioning layer is where narrative intelligence earns
                  its name. It does not summarize coverage. It proposes a
                  position a brand can hold, the proof required to hold it,
                  and the specific pitches, bylines, and AI-ready content that
                  take it. Six agents operate the flow: Researchers, Analysts,
                  Strategists, Planners, Writers, and Reporters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table 1 */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-3xl">
              How the two layers differ on the dimensions that matter.
            </h2>
            <div className="mt-10 overflow-x-auto border border-border rounded-2xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="p-4 font-heading font-semibold text-foreground">
                      Dimension
                    </th>
                    <th className="p-4 font-heading font-semibold text-foreground">
                      Media monitoring
                    </th>
                    <th className="p-4 font-heading font-semibold text-foreground">
                      Narrative intelligence
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dimensionsTable.map((row) => (
                    <tr key={row.dimension} className="border-t border-border">
                      <td className="p-4 font-medium text-foreground">
                        {row.dimension}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {row.monitoring}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {row.intelligence}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Where each belongs */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-xl">
                  Monitoring is input. Narrative intelligence is the decision
                  system.
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-sm text-muted-foreground leading-relaxed">
                <p>
                  The two are not substitutes. Monitoring feeds the graph.
                  Shadow ingests coverage from monitoring providers, combines
                  it with search data from DataForSEO and AI-answer audits,
                  and turns the combined signal into a model of the narrative.
                </p>
                <p>
                  The right framing: monitoring sits at the data layer.
                  Narrative intelligence sits at the decision layer on top of
                  it. A communications team that retains only monitoring
                  retains the input but not the system that turns input into
                  action. A team that adopts narrative intelligence keeps the
                  monitoring signal and gains the positioning logic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three surfaces */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-3xl">
              Where narratives are formed in 2026.
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
              Monitoring was built when media was the only surface that
              mattered. Three surfaces now jointly shape how a category is
              understood, and narrative intelligence reads all three.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  Media
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Origination and amplification. Reporters, trade outlets, and
                  analysts still decide which claims become frames. Perigon
                  tracks roughly 140,000 sources in real time. The question is
                  not whether a brand was mentioned, but whether the frame
                  around the mention is the one the brand wants to hold.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  Search
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Buyer intent formation. Search behavior captured by
                  DataForSEO, Semrush, and Ahrefs exposes the questions a
                  market is asking before it buys. A position is only
                  defensible if the category is already forming search demand
                  for it. Similarweb reported in 2026 that roughly 60 percent
                  of Google searches end without a click, which changes where
                  answers actually land.
                </p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-foreground">
                  AI answers
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Synthesis to the next generation of decision-makers.
                  ChatGPT, Perplexity, Google AI Overview, Claude, and Gemini
                  now synthesize positions on a brand before a human reads a
                  single article. Audits from Profound and ZipTie show which
                  answers a brand appears in and which it does not. This is
                  the surface monitoring cannot see.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table 2 */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-3xl">
              What each system actually produces.
            </h2>
            <div className="mt-10 overflow-x-auto border border-border rounded-2xl">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted/30">
                  <tr>
                    <th className="p-4 font-heading font-semibold text-foreground">
                      Question the team asks
                    </th>
                    <th className="p-4 font-heading font-semibold text-foreground">
                      Media monitoring output
                    </th>
                    <th className="p-4 font-heading font-semibold text-foreground">
                      Narrative intelligence output
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {outputsTable.map((row) => (
                    <tr key={row.question} className="border-t border-border">
                      <td className="p-4 font-medium text-foreground">
                        {row.question}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {row.monitoring}
                      </td>
                      <td className="p-4 text-muted-foreground">
                        {row.intelligence}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* When teams outgrow */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-xl">
                  When a comms team outgrows monitoring.
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-sm text-muted-foreground leading-relaxed">
                <p>
                  A few patterns signal that monitoring has become the ceiling
                  rather than the floor. Reports are accurate and nobody reads
                  them. Coverage is growing and pipeline is not. An AI engine
                  confidently describes the brand in terms the brand would
                  never choose. A competitor moves into a frame the brand
                  assumed it owned.
                </p>
                <p>
                  These are not monitoring failures. They are the limits of a
                  category that was designed to report the past. The PRSA
                  2026 membership survey found that 90 percent of
                  communications teams have integrated AI into workflows, but
                  only 13 percent describe their operations as highly
                  integrated. The gap is structural: reporting tools plus
                  human interpretation cannot keep up with three surfaces
                  moving in parallel.
                </p>
                <p>
                  The resolution is not more dashboards. It is a decision
                  system that reads the landscape and proposes the next move.
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
              Frequently asked questions.
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

      {/* CTA */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              See your narrative before your next reporting cycle.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Shadow reads the landscape across media, search, and AI, then
              writes the position you can own. Book a demo and we will pull a
              live narrative map for your category before the call.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Book a demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
