import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AgentFeed } from "./_components/AgentFeed";
import { EconomicsTable } from "./_components/EconomicsTable";
import { ExpandingCallout } from "./_components/ExpandingCallout";
import { LogoMarquee } from "./_components/LogoMarquee";
import { MachineHero } from "./_components/MachineHero";
import { ProductionLineCard } from "./_components/ProductionLineCard";
import { ProgramExecutionSection } from "./_components/ProgramExecutionSection";
import { ScrollRevealRowsHorizontal } from "./_components/ScrollRevealRowsHorizontal";
import { TerrainSection } from "./_components/TerrainSection";

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

const PRODUCTION_LINE_CARDS = [
  {
    slug: "outcast",
    eyebrow: "Outcast — Agency",
    accent: "#B27A53", // Lamplight
    hero: { value: 3, suffix: "x", label: "Inbound growth in 90 days" },
    secondary: [
      { value: 80, suffix: "+", label: "Hours saved per week" },
      { value: 22, suffix: "", label: "Custom agents" },
    ],
    headline: "Absorbed 3x inbound, no new headcount.",
    body: "Triage, intelligence, proposals, SOWs, and agreements run by a custom agent stack — junior team operates closer to senior judgment.",
  },
  {
    slug: "haymaker",
    eyebrow: "Haymaker — Agency",
    accent: "#B27A53", // Lamplight
    hero: { value: 50, suffix: "%", label: "Overall time reduction" },
    secondary: [
      { value: 90, suffix: "%", label: "Faster first drafts" },
      { value: 15, suffix: "+", label: "Clients covered" },
    ],
    headline: "Awards and events, halved in 30 days.",
    body: "Full lifecycle automated — research, roadmaps, briefs, and submissions. Strategists shifted from drafting to refining.",
  },
  {
    slug: "inworld-ai",
    eyebrow: "Inworld AI — In-house",
    accent: "#B27A53", // Lamplight
    hero: { value: 300, suffix: "+", label: "Personalized pitches" },
    secondary: [
      { value: 38, suffix: "", label: "Months of media data analyzed" },
      { value: 3, suffix: " days", label: "From zero to launch-ready" },
    ],
    headline: "A full launch playbook, built from scratch.",
    body: "Voice AI with no market precedent. Shadow analyzed thousands of articles across hundreds of journalists, then matched positioning to live keyword demand.",
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

      {/* ━━━ Machine Hero (dark, scroll-driven topographic decomposition) ━━━ */}
      <MachineHero />

      {/* ━━━ Program Execution (sticky pin, scroll-driven fade) ━━━ */}
      <ProgramExecutionSection />

      {/* ━━━ A new era for communications work ━━━ */}
      <section
        className="px-4 md:px-8 pt-20 md:pt-32 pb-20 md:pb-32"
        style={{ backgroundColor: "#E8E3D5" }}
      >
        <div className="max-w-[1360px] mx-auto px-8 md:px-16">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground/80 flex items-center gap-3">
            <span className="inline-block w-7 h-px bg-muted-foreground/50" />
            A new era for communications work
          </div>

          <h2 className="mt-10 md:mt-14 font-serif font-normal text-[clamp(2.25rem,6vw,5.5rem)] leading-[1.05] tracking-tight text-foreground">
            <span className="block">
              <em className="italic font-light text-foreground/70">For sixty years,</em>{" "}
              <span className="relative inline-block italic font-light text-foreground/70">
                timing was everything.
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[-0.04em] right-[-0.04em] top-1/2 h-[3px] -rotate-[4deg] origin-left"
                  style={{ backgroundColor: "#B0463A" }}
                />
              </span>
            </span>
            <span className="block">
              Now{" "}
              <em className="italic relative inline-block isolate">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-0.08em] bottom-[0.05em] top-[0.42em] -z-10 rounded-[2px]"
                  style={{ backgroundColor: "#E0D3AF" }}
                />
                <span className="relative">context</span>
              </em>{" "}
              is.
            </span>
          </h2>

          <p className="mt-12 md:mt-16 max-w-[640px] text-[clamp(1rem,1.4vw,1.25rem)] leading-[1.6] text-foreground/75">
            AI made every agency fast. It made the news cycle reflex a commodity
            overnight. The work that wins now is the work no horizontal model
            can produce &mdash; work that knows your clients, your reporters,
            your wins, your voice. Shadow is the only AI built to encode that.
          </p>
        </div>
      </section>

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
            <div className="max-w-[75%]">
              <p className="text-[10px] font-mono text-muted-foreground/70 uppercase tracking-widest">
                Trusted by the teams that brought you
              </p>
              <div className="mt-4">
                <LogoMarquee />
              </div>
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

      {/* ━━━ Narrative Graph (commented out — replaced by TerrainSection below) ━━━ */}
      {/*
      <section>
        <ExpandingCallout>
          <div className="relative max-w-[1360px] mx-auto px-6 md:px-10 py-12 md:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
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
                  and which narratives are about to break. It doesn't just
                  monitor what happened. It shows what's available to own.
                </p>
                <Link
                  href="/narrative-intelligence"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-background px-5 py-3 text-[13px] font-medium text-foreground hover:bg-background/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring w-fit"
                >
                  Explore Narrative Intelligence
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

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
      */}

      {/* ━━━ Your firm as terrain (scroll-driven 3D topography) ━━━ */}
      <TerrainSection />

      {/* ━━━ Production line — case study proof points ━━━ */}
      <section className="px-4 md:px-8 pt-16 md:pt-28 pb-12 md:pb-20">
        <div className="max-w-[1360px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] gap-10 lg:gap-16 items-end">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70 flex items-center gap-3">
                <span className="inline-block w-7 h-px bg-muted-foreground/30" />
                What this looks like in practice
              </div>
              <h2 className="mt-8 font-serif font-normal text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.05] tracking-tight text-foreground">
                Not a pilot.
                <br />
                <em className="not-italic italic font-light text-foreground/55">
                  A production line.
                </em>
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed text-muted-foreground max-w-[420px] lg:pb-3">
              Three of the agencies and in-house teams running on Shadow today.
              Real numbers from real programs &mdash; not gated case studies, not
              &quot;up to&quot; claims.
            </p>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {PRODUCTION_LINE_CARDS.map((card, i) => (
              <ProductionLineCard key={card.slug} {...card} index={i} />
            ))}
          </div>

          <div className="mt-12 md:mt-14 flex justify-center">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              See all case studies
              <span aria-hidden="true">→</span>
            </Link>
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
      <section className="bg-[#0a0908] text-[#f5f1ea] px-4 md:px-8 py-32 md:py-48">
        <div className="max-w-[1360px] mx-auto px-8 md:px-16 flex flex-col items-center text-center">
          <h2
            className="font-serif font-normal max-w-[760px]"
            style={{
              fontSize: "clamp(40px, 5vw, 72px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
            }}
          >
            <span className="block">
              The firms that win the next decade
            </span>
            <span
              className="block font-light"
              style={{ color: "rgba(245, 241, 234, 0.55)" }}
            >
              won&apos;t be the ones with more tools.
            </span>
          </h2>
          <div className="mt-12 flex gap-4 items-center justify-center flex-col sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded font-medium text-[15px] no-underline transition-colors"
              style={{ background: "#f5f1ea", color: "#2a2520" }}
            >
              Book a demo →
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 px-2 py-3.5 font-medium text-[15px] no-underline border-b"
              style={{ color: "#f5f1ea", borderColor: "#f5f1ea" }}
            >
              Read the case studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
