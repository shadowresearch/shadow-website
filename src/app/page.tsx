import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AgentFeed } from "./_components/AgentFeed";
import { EconomicsTable } from "./_components/EconomicsTable";
import { ExpandingCallout } from "./_components/ExpandingCallout";
import { ProgramFeed } from "./_components/ProgramFeed";
import { ScrollRevealList } from "./_components/ScrollRevealList";
import { ScrollRevealRowsHorizontal } from "./_components/ScrollRevealRowsHorizontal";

export const metadata: Metadata = {
  title:
    "Shadow | Narrative Intelligence and Program Execution for Communications",
  description:
    "Shadow is a narrative intelligence platform built on real-time data across media, search, social, and AI. AI agents identify the positions you can own and help run the programs that take them.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Shadow | Narrative Intelligence and Program Execution for Communications",
    description:
      "Shadow is a narrative intelligence platform built on real-time data across media, search, social, and AI. AI agents identify the positions you can own and help run the programs that take them.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Shadow | Narrative Intelligence and Program Execution for Communications",
    description:
      "A narrative intelligence platform built on real-time data across media, search, social, and AI.",
  },
};

const LAYER_CHIPS = [
  {
    label: "Media",
    color: "#977BA1",
    body:
      "Coverage volume, sentiment, share of voice, journalist activity, competitive positioning across 200,000+ sources.",
  },
  {
    label: "Search",
    color: "#7489A3",
    body:
      "Keyword demand, ranking positions, content gaps, commercial intent signals, competitor footprint.",
  },
  {
    label: "Social",
    color: "#88A374",
    body:
      "Conversation patterns, audience signals, community sentiment, emerging narratives.",
  },
  {
    label: "AI",
    color: "#CC764F",
    body:
      "LLM citations, AI search visibility, prompt-level brand presence across ChatGPT, Claude, Gemini, and Perplexity.",
  },
];

const PROGRAM_MODES = [
  "Proposals and strategic briefs",
  "Media relations and press materials",
  "SEO content and keyword strategy",
  "GEO content and AI visibility",
  "Social and owned content",
  "Thought leadership and ghostwriting",
  "Awards and events applications",
  "Market reports and competitive analysis",
];

const READING_AGENTS = [
  {
    name: "Researchers",
    body:
      "Scan media, search, social, and AI data continuously and surface signals before they become obvious.",
  },
  {
    name: "Analysts",
    body:
      "Interpret patterns, track narrative cycles, score the positions, and map competitive movement.",
  },
];

const WRITING_AGENTS = [
  {
    name: "Strategists",
    body:
      "Co-author positioning, work with you to build the frameworks, and help define the narrative territory you want to own.",
  },
  {
    name: "Planners",
    body:
      "Structure programs, map timelines, allocate effort across channels and audiences.",
  },
  {
    name: "Writers",
    body:
      "Produce the work: press materials, thought leadership, GEO content, proposals, briefs.",
  },
  {
    name: "Reporters",
    body:
      "Track performance, compile measurement, prove impact, and surface what's working.",
  },
];

const INTEGRATIONS = [
  "Slack",
  "Gmail and Outlook",
  "Google Drive and OneDrive",
  "LinkedIn",
  "Google Analytics",
  "Facebook",
  "Custom integrations",
];

export default function Home() {
  return (
    <div className="flex flex-col bg-card">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "@id": "https://shadow.inc/#software",
            name: "Shadow",
            alternateName: "Shadow Narrative Intelligence Platform",
            description:
              "Shadow is a narrative intelligence platform built on real-time data across media, search, social, and AI. AI agents identify the positions you can own and help run the programs that take them.",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Narrative Intelligence Platform",
            operatingSystem: "Web",
            url: "https://shadow.inc",
            image: "https://shadow.inc/logo2.svg",
            brand: {
              "@type": "Brand",
              name: "Shadow",
              slogan:
                "Narrative intelligence and program execution powered by AI agents.",
            },
            publisher: { "@id": "https://shadow.inc/#organization" },
            offers: {
              "@type": "Offer",
              url: "https://shadow.inc/pricing",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            audience: {
              "@type": "Audience",
              audienceType: "Communications teams and agencies",
            },
            featureList: [
              "Narrative graph across media, search, social, and AI",
              "AI agents for research, analysis, strategy, planning, writing, and reporting",
              "Program execution: proposals, media relations, SEO, GEO, thought leadership",
              "Operate: intake, dossiers, staffing, and pipeline",
            ],
          }),
        }}
      />

      {/* ━━━ Hero ━━━ */}
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
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] gap-x-10 lg:gap-x-20 gap-y-8 lg:gap-y-10 items-end">
            <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight">
              <span className="block whitespace-nowrap">
                <Link
                  href="/narrative-intelligence"
                  className="underline underline-offset-[0.18em] decoration-[0.08em] hover:decoration-primary transition-colors"
                >
                  Narrative intelligence
                </Link>
              </span>
              <span className="block whitespace-nowrap">
                and{" "}
                <Link
                  href="/program-execution"
                  className="underline underline-offset-[0.18em] decoration-[0.08em] hover:decoration-primary transition-colors"
                >
                  program execution
                </Link>
              </span>
              <span className="block whitespace-nowrap">
                powered by{" "}
                <Link
                  href="/ai-agents"
                  className="underline underline-offset-[0.18em] decoration-[0.08em] hover:decoration-primary transition-colors"
                >
                  AI agents
                </Link>
              </span>
            </h1>

            <p className="text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7]">
              Shadow is a narrative intelligence platform built on real-time
              data across media, search, social, and AI. AI agents identify the
              positions you can own and help run the programs that take them.
            </p>

            {/* Logos */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {[
                { name: "HubSpot", file: "hubspot-1.svg" },
                { name: "Amazon", file: "amazon-1.svg" },
                { name: "Lovable", file: "lovable-1.svg" },
                { name: "OpenAI", file: "openai-1.svg" },
                { name: "Netflix", file: "netflix-1.svg" },
                { name: "Airbnb", file: "airbnb-1.svg" },
                { name: "Roblox", file: "roblox-1.svg" },
                { name: "Etsy", file: "etsy-1.svg" },
              ].map((logo) => (
                <Image
                  key={logo.name}
                  src={`/logos/${logo.file}`}
                  alt={logo.name}
                  width={80}
                  height={20}
                  loading="lazy"
                  className={`w-auto h-auto object-contain opacity-40 ${
                    logo.name === "Roblox" ? "max-h-5 max-w-16" : "max-h-3.5 max-w-14"
                  }`}
                />
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                See how it works
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

      {/* ━━━ Narrative Graph (dark; card → full-bleed on scroll) ━━━ */}
      <section>
        <ExpandingCallout>
          <div className="relative max-w-[1360px] mx-auto px-6 md:px-10 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Left: copy */}
              <div className="lg:sticky lg:top-28">
                <h2 className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] text-background leading-[1.08] tracking-tight">
                  The narrative graph.
                </h2>
                <p className="mt-6 text-base text-background/60 leading-relaxed max-w-md">
                  Most platforms give you one view: media coverage, or search
                  data, or social mentions, or AI citations. Shadow blends all
                  four into a single, real-time narrative graph.
                </p>
                <p className="mt-4 text-base text-background/60 leading-relaxed max-w-md">
                  The graph tracks how stories move across channels, which
                  positions are forming, where competitors are gaining ground,
                  and which narratives are about to break. It doesn&apos;t just
                  monitor what happened. It shows what&apos;s available to own.
                </p>
                <Link
                  href="/narrative-intelligence"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-background hover:text-background/75 transition-colors border-b border-background/30 hover:border-background/60 pb-1 w-fit"
                >
                  Explore Narrative Intelligence
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              {/* Right: layer chips */}
              <div className="flex flex-col gap-6">
                {LAYER_CHIPS.map((chip) => (
                  <div
                    key={chip.label}
                    className="pl-6 py-2"
                    style={{ borderLeft: `6px solid ${chip.color}` }}
                  >
                    <p className="font-heading text-lg font-semibold text-background">
                      {chip.label}
                    </p>
                    <p className="mt-2 text-sm md:text-[15px] text-background/60 leading-relaxed">
                      {chip.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ExpandingCallout>
      </section>

      {/* ━━━ Program Execution ━━━ */}
      <section className="px-4 md:px-8 pt-12 md:pt-24 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  From position to program.
                </h2>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Narrative intelligence is only valuable if you can act on it.
                  Shadow&apos;s program execution layer is where positioning
                  becomes work: proposals drafted from live competitive data,
                  media relations grounded in who&apos;s actually covering the
                  conversation, SEO and GEO content written to the positions
                  the graph identified, and thought leadership that speaks to
                  what audiences are searching for right now.
                </p>
                <Link
                  href="/program-execution"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Explore Program Execution
                  <span aria-hidden="true">→</span>
                </Link>
                <div className="mt-12">
                  <ProgramFeed />
                </div>
              </div>
              <ScrollRevealList items={PROGRAM_MODES} />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ AI Agents ━━━ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Your always-on narrative team.
                </h2>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Shadow gives you a team of specialised AI agents, each with a
                  defined role in the narrative craft. Some read from the
                  world. Others write to it. Together, they form a persistent
                  narrative team that operates as an extension of your team.
                </p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Every agent is governed by your methodology, your voice, and
                  your quality standards. They don&apos;t start from scratch.
                  They start from how your best people think.
                </p>
                <Link
                  href="/ai-agents"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Explore AI Agents
                  <span aria-hidden="true">→</span>
                </Link>
                <div className="mt-12">
                  <AgentFeed />
                </div>
              </div>
              <ScrollRevealRowsHorizontal
                rows={[...READING_AGENTS, ...WRITING_AGENTS].map((agent) => (
                  <div
                    key={agent.name}
                    className="grid grid-cols-[minmax(0,140px)_minmax(0,1fr)] gap-6 items-baseline border-b border-border py-5"
                  >
                    <span className="text-sm font-heading font-semibold text-foreground">
                      {agent.name}
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {agent.body}
                    </span>
                  </div>
                ))}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Economics ━━━ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  A structural change that unlocks new economics for communications teams.
                </h2>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-md">
                  When narrative intelligence runs continuously and program
                  execution is handled by a dedicated agent team, the way
                  communications teams work transforms. Not incrementally. Structurally.
                </p>
                <Link
                  href="/operate"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Explore Operate
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <EconomicsTable />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Fully managed. Fully connected. ━━━ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Fully managed. Fully connected.
                </h2>
                <Link
                  href="/pricing"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Explore pricing
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                  Shadow is not another platform your team has to learn. Every
                  deployment comes with a dedicated Shadow team that handles
                  setup, agent configuration, ongoing optimisation, and system
                  maintenance. Your methodology and voice are governed by
                  setup and enforced automatically from that point forward.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                  Shadow connects to the tools your team already runs on.
                  Agents read, write, and operate across your entire stack.
                </p>
                <ul className="flex flex-wrap gap-3">
                  {INTEGRATIONS.map((integration) => (
                    <li
                      key={integration}
                      className="border border-border rounded-full px-4 py-2 text-sm text-foreground"
                    >
                      {integration}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Closing CTA ━━━ */}
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
                Get in touch
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                See who runs on Shadow
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
