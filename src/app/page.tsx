import type { Metadata } from "next";
import Link from "next/link";
import { AgentWorkstream } from "./_components/AgentWorkstream";
import { HeroLandscape } from "./_components/HeroLandscape";
import { LogoMarquee } from "./_components/LogoMarquee";
import { PillarTopoViz } from "./_components/PillarTopoViz";
import { ProductionLineCarousel } from "./_components/ProductionLineCarousel";
import { ProgramAgentDemo } from "./_components/ProgramAgentDemo";
import { TimelineMetrics } from "./_components/TimelineMetrics";

export const metadata: Metadata = {
  title: "Shadow | Read the landscape. Run the program.",
  description:
    "Purpose-built for strategic communications. A live read on every landscape you operate in, then the program built from it. Intelligence and execution in one system.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Shadow | Read the landscape. Run the program.",
    description:
      "Purpose-built for strategic communications. A live read on every landscape you operate in, then the program built from it. Intelligence and execution in one system.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadow | Read the landscape. Run the program.",
    description:
      "Purpose-built for strategic communications. A live read on every landscape, then the program built from it.",
  },
};

const PILLARS = [
  {
    label: "Built for communications",
    body:
      "Shaped by the workflows and judgment of agency and in-house teams. Not a horizontal AI tool adapted for PR.",
  },
  {
    label: "Grounded in real-time data",
    body:
      "Continuous analysis across media, search, social, and AI. The landscape is always current.",
  },
  {
    label: "Accelerated by AI Agents",
    body:
      "Briefs, pitches, content, and reports drafted from the intelligence — not from scratch.",
  },
];

const PRODUCTION_LINE_CARDS = [
  {
    slug: "outcast",
    eyebrow: "Outcast — Agency",
    logo: "/logos/outcast_logo.svg",
    accent: "#B27A53",

    hero: { value: 3, suffix: "x", label: "Inbound growth in 90 days" },
    secondary: [
      { value: 80, suffix: "+", label: "Hours saved per week" },
      { value: 22, suffix: "", label: "Custom agents" },
    ],
    headline: "Absorbed 3x inbound, no new headcount.",
    body: "Triage, intelligence, proposals, SOWs, and agreements run by a custom agent stack — junior team operates closer to senior judgment.",
    details: {
      runs: ["Triage", "Intelligence", "Proposals", "SOWs", "Agreements"],
      summary:
        "Outcast needed to handle surging new business volume without pulling senior time from active clients. With Shadow running the full intake and contracting flow, the team tripled pipeline throughput across hundreds of accounts — and junior staff started shipping work closer to senior judgment.",
    },
  },
  {
    slug: "haymaker",
    eyebrow: "Haymaker — Agency",
    logo: "/logos/haymaker_logo.svg",
    accent: "#88A374",
    hero: { value: 50, suffix: "%", label: "Overall time reduction" },
    secondary: [
      { value: 90, suffix: "%", label: "Faster first drafts" },
      { value: 15, suffix: "+", label: "Clients covered" },
    ],
    headline: "Awards and events, halved in 30 days.",
    body: "Full lifecycle automated — research, roadmaps, briefs, and submissions. Strategists shifted from drafting to refining.",
    details: {
      runs: ["Awards research", "Roadmaps", "Briefs", "Submissions"],
      summary:
        "Haymaker was spending weeks per cycle on awards research, roadmaps, briefs, and final submissions across their client roster. Shadow automated the full lifecycle — halving production time and saving 40+ hours across awards and events workflows every week.",
    },
  },
  {
    slug: "inworld-ai",
    eyebrow: "Inworld AI — In-house",
    logo: "/logos/inworld.svg",
    accent: "#7489A3",
    hero: { value: 300, suffix: "+", label: "Personalized pitches" },
    secondary: [
      { value: 38, suffix: "", label: "Months of media data analyzed" },
      { value: 3, suffix: " days", label: "From zero to launch-ready" },
    ],
    headline: "A full launch playbook, built from scratch.",
    body: "Voice AI with no market precedent. Shadow analyzed thousands of articles across hundreds of journalists, then matched positioning to live keyword demand.",
    details: {
      runs: [
        "Media analysis",
        "Positioning",
        "Keyword demand",
        "Journalist mapping",
        "Personalized pitches",
      ],
      summary:
        "Inworld needed a data-driven launch plan for voice AI models with no precedent in the market. Shadow analyzed thousands of articles across hundreds of journalists, compounded it with keyword data to land positioning on beat for media and buyers, and built a 300+ journalist media list with personalized pitches.",
    },
  },
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
              "Purpose-built for strategic communications. A live read on every landscape you operate in, then the program built from it. Intelligence and execution in one system.",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Communications Platform",
            operatingSystem: "Web",
            url: "https://shadow.inc",
            image: "https://shadow.inc/logo2.svg",
            brand: {
              "@type": "Brand",
              name: "Shadow",
              slogan: "Read the landscape. Run the program.",
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
              "Read the landscape across media, search, social, and AI",
              "Run the program — briefs, press materials, content, pitches",
              "Run with a team of agents that read, analyse, and write",
            ],
          }),
        }}
      />

      {/* ━━━ Hero ━━━ */}
      <HeroLandscape>
        <div className="w-full max-w-[1425px] mx-auto px-8 md:px-16 pt-[15vh] md:pt-[17vh] pb-12 flex flex-col">
          {/* Heading + subhead */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] gap-x-10 lg:gap-x-20 gap-y-5 items-end">
            <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight">
              <span className="block">Read the landscape.</span>
              <span className="block">Run the program.</span>
            </h1>

            <p className="text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7]">
              Purpose-built for strategic communications. Designed for the AI
              era.
            </p>
          </div>

          {/* Logos + CTAs */}
          <div className="mt-5 lg:mt-7 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] gap-x-10 lg:gap-x-20 gap-y-6 items-center">
            <div className="max-w-[640px]">
              <p className="text-[10px] font-mono text-muted-foreground/70 uppercase tracking-widest">
                Trusted by the teams that brought you
              </p>
              <div className="mt-4 w-full">
                <LogoMarquee />
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <Link
                href="/pipeline"
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
      </HeroLandscape>

      {/* ━━━ Positioning Statement ━━━ */}
      <section className="px-4 md:px-8 pt-12 md:pt-24 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] gap-x-10 lg:gap-x-20 gap-y-8 items-start">
              <h2 className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] text-foreground leading-[1.05] tracking-tight">
                A new kind of communications infrastructure.
              </h2>
              <p className="text-[clamp(0.95rem,1.2vw,1.1rem)] text-muted-foreground leading-[1.65]">
                Shadow gives your team a live read on every landscape you
                operate in, then helps you build the program from it.
                Intelligence and execution in one system.
              </p>
            </div>
            <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              {PILLARS.map((p, i) => {
                const variant = (String(i + 1).padStart(2, "0") as "01" | "02" | "03");
                return (
                  <div key={p.label} className="flex flex-col">
                    <div className="mb-6 -mx-2">
                      <PillarTopoViz variant={variant} />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {p.label}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-sm">
                      {p.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Capability — Run the program ━━━ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-10 items-start">
              {/* Left column: heading + subheader + button stacked */}
              <div className="lg:sticky lg:top-28">
                <h2 className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] text-foreground leading-[1.05] tracking-tight">
                  Run the program.
                </h2>
                <p className="mt-6 text-[clamp(0.95rem,1.2vw,1.1rem)] text-muted-foreground leading-[1.65] max-w-md">
                  Proposals, strategies, pitches, and content. Built in minutes and ready for review.
                </p>
                <Link
                  href="/program-execution"
                  className="mt-6 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Explore program execution
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              {/* Right column: visual on dot grid backdrop */}
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-3 lg:-inset-5 rounded-2xl overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-[0.7]"
                    style={{ backgroundImage: "url('/sandscape.png')" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, color-mix(in srgb, var(--card) 50%, transparent) 0.4px, transparent 0.8px)",
                      backgroundSize: "5px 5px",
                    }}
                  />
                </div>
                <div className="relative bg-card rounded-2xl ring-1 ring-foreground/8 shadow-[0_24px_60px_-24px_rgba(43,32,22,0.18)] overflow-hidden">
                  <ProgramAgentDemo start />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Capability — Run with a team of agents ━━━ */}
      <section className="px-4 md:px-8 pb-24 md:pb-40">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-10 items-start">
              {/* Left column: heading + subheader + button, with metrics counter below */}
              <div className="lg:sticky lg:top-28 flex flex-col">
                <h2 className="font-serif text-[clamp(2rem,3.6vw,3.25rem)] text-foreground leading-[1.05] tracking-tight">
                  Your team of agents.
                </h2>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Specialised agents that read, analyse, write, and operate 24/7
                  as an extension of yourself.
                </p>
                <Link
                  href="/ai-agents"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
                >
                  Explore AI agents
                  <span aria-hidden="true">→</span>
                </Link>
                <div className="mt-12">
                  <TimelineMetrics />
                </div>
              </div>
              {/* Right column: agent workstream visual on dot grid backdrop */}
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-3 lg:-inset-5 rounded-2xl overflow-hidden"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-[0.7]"
                    style={{ backgroundImage: "url('/sandscape.png')" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, color-mix(in srgb, var(--card) 50%, transparent) 0.4px, transparent 0.8px)",
                      backgroundSize: "5px 5px",
                    }}
                  />
                </div>
                <div className="relative bg-card rounded-2xl ring-1 ring-foreground/8 shadow-[0_24px_60px_-24px_rgba(43,32,22,0.18)] overflow-hidden">
                  <AgentWorkstream />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Not a pilot. A production line. ━━━ */}
      <section className="px-4 md:px-8 pt-4 md:pt-8 pb-12 md:pb-20">
        <div className="max-w-[1425px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] gap-10 lg:gap-16 items-end">
            <div>
              <h2 className="font-serif font-normal text-[clamp(2rem,4.4vw,3.75rem)] leading-[1.05] tracking-tight text-foreground">
                Crafted with the best.
                <br />
                <em className="not-italic italic font-light text-foreground/55">
                  Not in a lab.  
                </em>
              </h2>
            </div>
            <div className="lg:pb-3 lg:justify-self-end flex flex-col items-start lg:items-end gap-5">
              <p className="text-[15px] leading-relaxed text-muted-foreground max-w-[420px] lg:text-right">
                Top teams running on Shadow today.
                <br />
                Real numbers, not gated claims.
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1 w-fit"
              >
                See all case studies
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <ProductionLineCarousel cards={PRODUCTION_LINE_CARDS} />
        </div>
      </section>

      {/* ━━━ Closing CTA ━━━ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-3xl">
              Read the landscape. Run the program.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              See it for yourself in your category.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Talk to us
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
