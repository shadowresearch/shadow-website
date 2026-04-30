import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Program Execution | Shadow",
  description:
    "Turn narrative intelligence into programs that move. Shadow's execution layer handles proposals, media relations, SEO, GEO, thought leadership, and reporting, all grounded in what the data says.",
  alternates: {
    canonical: "/program-execution",
  },
  openGraph: {
    title: "Program Execution | Shadow",
    description:
      "Turn narrative intelligence into programs that move. Shadow's execution layer handles proposals, media relations, SEO, GEO, thought leadership, and reporting, all grounded in what the data says.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Program Execution | Shadow",
    description:
      "Where narrative intelligence becomes proposals, media programs, content strategies, and measurable campaigns.",
  },
};

const DAILY_MODES = [
  {
    label: "Proposals and strategic briefs",
    body:
      "Draft proposals grounded in live competitive data, client positioning, and market context. The narrative graph feeds the brief. Your team refines and approves.",
  },
  {
    label: "Media relations",
    body:
      "Press materials, media lists, journalist targeting, and pitch strategies built from who's actually covering the conversation. Not a static database. Live intelligence on journalist activity, beat alignment, and recent coverage.",
  },
  {
    label: "SEO strategy and content",
    body:
      "Keyword strategy, content planning, and optimised pages built from search demand data in the narrative graph. Identify which positions have commercial search intent and produce content that owns them.",
  },
  {
    label: "GEO and AI visibility",
    body:
      "Content structured to appear in LLM-generated responses. Audit AI search visibility, identify citation gaps, and produce content that earns mentions across ChatGPT, Claude, Gemini, and Perplexity.",
  },
  {
    label: "Thought leadership and ghostwriting",
    body:
      "Executive-voice content grounded in the client's positioning and tuned to the conversations audiences are actually having. Not generic AI output. Content that reflects the executive's point of view and the market's current narrative landscape.",
  },
  {
    label: "Awards and events",
    body:
      "Application drafting, event strategy, and award program management. Grounded in the client's proof points and the category's narrative context.",
  },
  {
    label: "Market reports and competitive analysis",
    body:
      "Periodic and on-demand reporting on competitive positioning, narrative movement, and market signals. Automated data collection, agent-driven analysis, human-reviewed output.",
  },
];

const HOW_IT_OPERATES = [
  {
    label: "Collaborative",
    body:
      "Work alongside AI agents in real time. Draft, refine, direct. Your judgment shapes the output. Agents handle the volume.",
  },
  {
    label: "Methodology-governed",
    body:
      "Your voice, quality standards, and process are governed by the execution layer. Every deliverable reflects how your best people think.",
  },
  {
    label: "Graph-connected",
    body:
      "Every mode draws from the narrative intelligence layer. Work is grounded in data, not assumptions.",
  },
  {
    label: "Client-persistent",
    body:
      "Context compounds across engagements. The 50th deliverable for a client is informed by the first 49.",
  },
];

export default function ProgramExecutionPage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="absolute inset-0 -z-0" aria-hidden="true">
          <Image
            src="/smoke.svg"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
            priority
            role="presentation"
          />
        </div>
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Program Execution
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-2xl">
            The work layer. Where narrative intelligence becomes proposals,
            media programs, content strategies, and measurable campaigns.
            Collaborate with AI agents on top of the positioning and
            intelligence layers to produce work that&apos;s grounded in what
            the data actually says.
          </p>
          <div className="mt-10 flex flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              See it in action
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

      {/* Daily modes */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  The same day, but without the stress.
                </h2>
              </div>
              <div className="flex flex-col gap-8">
                {DAILY_MODES.map((mode) => (
                  <div
                    key={mode.label}
                    className="border-t border-border pt-6"
                  >
                    <p className="font-heading text-base font-semibold text-foreground">
                      {mode.label}
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-md">
                      {mode.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Execution difference */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Every deliverable starts with context, not a blank page.
                </h2>
              </div>
              <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  On a fragmented tool stack, every deliverable starts from
                  scratch. The person writing the proposal has to manually
                  gather competitive data. The person drafting the pitch has to
                  check the media list. The person planning the content
                  calendar has to run their own keyword research.
                </p>
                <p>
                  On Shadow, the narrative graph has already done that work.
                  When a writing agent drafts a proposal, it pulls from the
                  live competitive landscape. When it builds a media list, it
                  draws from journalist activity data. When it plans content,
                  it starts from search demand and AI visibility gaps. The
                  context is there before the work begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it operates */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
              How it operates.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {HOW_IT_OPERATES.map((item) => (
                <div key={item.label} className="border-t border-border pt-6">
                  <p className="font-heading text-base font-semibold text-foreground">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-3xl">
              From intelligence to impact.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Program execution turns narrative positions into measurable
              programs. The intelligence does the thinking. Your team does the
              deciding.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Talk to us
              </Link>
              <Link
                href="/narrative-intelligence"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                See Narrative Intelligence
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
