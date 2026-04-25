import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExpandingCallout } from "../_components/ExpandingCallout";

export const metadata: Metadata = {
  title: "Narrative Intelligence | Shadow",
  description:
    "Shadow's narrative intelligence layer blends media, search, social, and AI data into a unified, real-time graph. Identify the positions you can own before your competitors see them.",
  alternates: {
    canonical: "/narrative-intelligence",
  },
  openGraph: {
    title: "Narrative Intelligence | Shadow",
    description:
      "Shadow's narrative intelligence layer blends media, search, social, and AI data into a unified, real-time graph. Identify the positions you can own before your competitors see them.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Narrative Intelligence | Shadow",
    description:
      "A unified, real-time graph that blends media, search, social, and AI data.",
  },
};

const LAYERS = [
  {
    label: "Media layer",
    color: "#977BA1",
    body:
      "Real-time coverage tracking across 200,000+ global sources. Volume, sentiment, outlet tier, journalist activity, spokesperson mentions, competitive share of voice. Organised per client, updated continuously.",
  },
  {
    label: "Search layer",
    color: "#7489A3",
    body:
      "Keyword demand, ranking positions, content gaps, and commercial intent signals. What audiences are actively searching for, which competitors own those positions, and where the openings are.",
  },
  {
    label: "Social layer",
    color: "#88A374",
    body:
      "Conversation patterns across social platforms. Community sentiment, emerging narratives, audience signals. How conversations form and where they gain traction before media picks them up.",
  },
  {
    label: "AI layer",
    color: "#CC764F",
    body:
      "LLM citation tracking across ChatGPT, Claude, Gemini, and Perplexity. Which brands appear in AI-generated responses, which prompts trigger competitive mentions, and where citation gaps exist. This is the newest channel, and most communications teams have no visibility into it at all.",
  },
];

const POSITIONS = [
  {
    label: "Position identification",
    body:
      "Where is the conversation going? Which narratives are gaining momentum? Which competitor claims are weakening?",
  },
  {
    label: "Narrative cycle tracking",
    body:
      "How do narratives evolve across channels? What's the typical lifecycle? Where are we in the current cycle?",
  },
  {
    label: "Competitive mapping",
    body:
      "Who owns which positions? Where are they exposed? Where are they overextended?",
  },
  {
    label: "White space detection",
    body:
      "Which positions have demand (people are searching, media is covering) but no clear owner?",
  },
  {
    label: "Timing signals",
    body:
      "When is the right moment to enter a conversation? When is a narrative peaking, and when is it still early enough to own?",
  },
];

const HOW_IT_OPERATES = [
  {
    label: "Always running",
    body:
      "Reading agents (researchers and analysts) monitor continuously. No manual searches. No scheduled pulls. Intelligence is live.",
  },
  {
    label: "Feeds program execution",
    body:
      "Positions identified in the graph flow directly into program execution. A narrative opening becomes a content brief. A competitive gap becomes a pitch strategy. No re-entry required.",
  },
  {
    label: "Compounds over time",
    body:
      "The graph gets sharper with use. Patterns that take weeks to see manually surface in hours. Competitive blind spots that persist across quarters become visible.",
  },
];

export default function NarrativeIntelligencePage() {
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
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Narrative Intelligence
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-2xl">
            A unified, real-time graph that blends media, search, social, and
            AI data to show you which positions are forming, which are
            available, and which ones you should take.
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

      {/* The Narrative Graph (dark; card → full-bleed on scroll) */}
      <section>
        <ExpandingCallout>
          <div className="relative max-w-[1360px] mx-auto px-6 md:px-10 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left: copy */}
              <div className="lg:sticky lg:top-28">
                <h2 className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] text-background leading-[1.08] tracking-tight">
                  One graph. Four narrative layers. Real-time.
                </h2>
                <p className="mt-6 text-base text-background/60 leading-relaxed max-w-md">
                  Shadow&apos;s narrative graph is the foundational data
                  architecture of the platform. It continuously ingests signals
                  across four layers and maps them into a unified view of how
                  narratives are forming, moving, and resolving.
                </p>
              </div>

              {/* Right: layer chips */}
              <div className="flex flex-col gap-6">
                {LAYERS.map((layer) => (
                  <div
                    key={layer.label}
                    className="pl-6 py-2"
                    style={{ borderLeft: `6px solid ${layer.color}` }}
                  >
                    <p className="font-heading text-lg font-semibold text-background">
                      {layer.label}
                    </p>
                    <p className="mt-2 text-sm md:text-[15px] text-background/60 leading-relaxed">
                      {layer.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ExpandingCallout>
      </section>

      {/* From data to positions */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  From data to positions.
                </h2>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-md">
                  The narrative graph doesn&apos;t just aggregate data. It
                  identifies positions: specific narrative territories that are
                  available, forming, or contested.
                </p>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-md">
                  This is what makes Shadow&apos;s approach to intelligence
                  different. It&apos;s not just &ldquo;what happened.&rdquo;
                  It&apos;s &ldquo;what&apos;s available.&rdquo;
                </p>
              </div>
              <div className="flex flex-col gap-8">
                {POSITIONS.map((item) => (
                  <div key={item.label}>
                    <p className="font-heading text-base font-semibold text-foreground">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-md">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it operates */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
              How it operates.
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Replace your stack */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Replace your stack with one graph.
                </h2>
              </div>
              <div className="flex flex-col gap-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Communications teams currently piece together narrative
                  understanding from disconnected sources: Cision or Meltwater
                  for media
                  monitoring, SEMrush or Ahrefs for search data, Brandwatch or
                  Sprout for social listening, and nothing for AI visibility.
                  Each tool gives a partial view. None of them connect the
                  signals into a coherent picture of what&apos;s actually
                  happening in the narrative landscape.
                </p>
                <p>
                  The narrative graph replaces that assembly with a single,
                  connected data layer that feeds every other part of the
                  platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-3xl">
              Narrative intelligence changes what your team can see.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              When you see the full picture, you stop reacting and start
              positioning. That&apos;s the difference.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Talk to us
              </Link>
              <Link
                href="/program-execution"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                See Program Execution
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
