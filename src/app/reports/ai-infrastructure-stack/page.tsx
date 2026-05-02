import type { Metadata } from "next";
import Link from "next/link";
import { StackMap } from "./_components/StackMap";
import { VelocityByLayer } from "./_components/VelocityByLayer";
import { CycleTimeline } from "./_components/CycleTimeline";
import { VolumeStack } from "./_components/VolumeStack";
import { LayerCards } from "./_components/LayerCards";
import { PropagationFlow } from "./_components/PropagationFlow";

export const metadata: Metadata = {
  title: "AI Infrastructure Stack Narrative Report | Shadow (April 2026)",
  description:
    "Seven layers of the AI infrastructure stack, mapped as narrative environments. Energy and chips lead by 60 to 90 days; enterprise ROI and consumer demand are receiving delayed signals from below.",
  alternates: {
    canonical: "/reports/ai-infrastructure-stack",
  },
  openGraph: {
    title: "AI Infrastructure Stack Narrative Report | Shadow (April 2026)",
    description:
      "Narratives in the AI stack do not start at the top. They start at the bottom and travel up. The lag is 60 to 90 days.",
    type: "article",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Infrastructure Stack Narrative Report | Shadow (April 2026)",
    description:
      "7 stack layers, 23 narrative signals, and 4 traceable propagation events. The intelligence value lives at the bottom.",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://shadow.inc/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Reports",
      item: "https://shadow.inc/reports",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Narratives in the AI stack do not start at the top. They start at the bottom and travel up.",
      item: "https://shadow.inc/reports/ai-infrastructure-stack",
    },
  ],
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI infrastructure narratives lead application narratives by 60 to 90 days.",
  datePublished: "2026-04-30",
  dateModified: "2026-04-30",
  author: {
    "@type": "Organization",
    name: "Shadow",
    url: "https://shadow.inc",
  },
  publisher: {
    "@type": "Organization",
    name: "Shadow",
    url: "https://shadow.inc",
  },
  description:
    "Shadow's AI Infrastructure Stack Narrative Report. Seven interconnected narrative layers, 23 active signals, and observed cross-layer propagation lag from energy and chips up to enterprise and consumer demand.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://shadow.inc/reports/ai-infrastructure-stack",
  },
};

export default function AIInfrastructureStackPage() {
  return (
    <div className="flex flex-col bg-card">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      {/* ━━━ Hero / Headline finding ━━━ */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[960px] mx-auto px-8 md:px-16 pb-12 pt-24">
          <nav className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider mb-10">
            <Link
              href="/reports"
              className="hover:text-foreground transition-colors"
            >
              Reports
            </Link>
            <span className="text-border">/</span>
            <span className="text-foreground">Edition 1</span>
          </nav>

          <h1 className="mt-6 font-serif font-medium text-[clamp(2.25rem,4.5vw,3.75rem)] text-foreground leading-[1.05] tracking-tight">
            Narratives in the AI stack do not start at the top. They start at the bottom and travel up.
          </h1>

          <p className="mt-8 text-[clamp(0.95rem,1.3vw,1.15rem)] text-muted-foreground leading-[1.7]">
            The lag is 60 to 90 days. That is where the intelligence value
            lives. This report treats the AI infrastructure stack not as a
            single topic but as a system of seven interconnected narrative
            environments, each with its own dominant framing, its own key
            voices, and its own propagation dynamics. Energy and grid
            constraints at the base. Chip supply and architecture one floor up.
            Data center capacity, hyperscaler strategy, the training-to-inference
            shift, and enterprise and consumer demand at the top.
          </p>

          <p className="mt-8 text-xs font-mono text-muted-foreground uppercase tracking-wider">
            Analysis by{" "}
            <span className="text-foreground">Shadow Research Team</span>
            <span className="mx-2">·</span>
            <span>April 2026</span>
            <span className="mx-2">·</span>
            <span>Edition 1</span>
          </p>

          {/* Top-line stats */}
          <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 border-t border-border pt-8">
            <div>
              <dt className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                Stack layers
              </dt>
              <dd className="mt-2 font-serif text-2xl text-foreground tabular-nums">
                7
              </dd>
              <dd className="mt-1 text-[12px] text-muted-foreground leading-snug">
                Discrete narrative environments
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                Propagation lag
              </dt>
              <dd className="mt-2 font-serif text-2xl text-foreground tabular-nums">
                60–90d
              </dd>
              <dd className="mt-1 text-[12px] text-muted-foreground leading-snug">
                Observed, infrastructure to application
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                Accelerating layers
              </dt>
              <dd className="mt-2 font-serif text-2xl text-foreground tabular-nums">
                3
              </dd>
              <dd className="mt-1 text-[12px] text-muted-foreground leading-snug">
                Energy, chips, training-to-inference
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                In-transit signals
              </dt>
              <dd className="mt-2 font-serif text-2xl text-foreground tabular-nums">
                2
              </dd>
              <dd className="mt-1 text-[12px] text-muted-foreground leading-snug">
                Active propagation events right now
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ━━━ TL;DR ━━━ */}
      <section className="px-8 md:px-16 pb-16">
        <div className="max-w-[720px] mx-auto relative rounded-2xl overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.7]"
            style={{ backgroundImage: "url('/sandscape.png')" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, color-mix(in srgb, var(--card) 50%, transparent) 0.4px, transparent 0.8px)",
              backgroundSize: "5px 5px",
            }}
          />
          <div className="relative p-3 lg:p-5">
            <div
              className="relative rounded-2xl overflow-hidden backdrop-blur-3xl backdrop-saturate-150 bg-foreground/[0.55] isolate"
              style={{
                boxShadow: [
                  "inset 0 1px 0 0 rgba(255,255,255,0.5)",
                  "inset 0 0 0 1px rgba(255,255,255,0.18)",
                  "inset 0 -1px 0 0 rgba(43,32,22,0.08)",
                  "0 1px 2px 0 rgba(43,32,22,0.04)",
                  "0 8px 24px -8px rgba(43,32,22,0.18)",
                  "0 24px 48px -16px rgba(43,32,22,0.22)",
                ].join(", "),
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, transparent 100%)",
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.65) 50%, transparent 100%)",
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
                }}
              />
              <div className="relative p-6 lg:p-8">
                <div>
                  <p className="text-xs font-mono text-background uppercase tracking-[0.18em]">
                    Five findings
                  </p>
                  <h2 className="mt-3 font-serif font-normal text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.2] tracking-tight text-background">
                    What the stack is telling us right now.
                  </h2>
                  <div className="mt-3 space-y-1 text-[14px] text-background leading-snug">
                    <p>The intelligence value lives at the bottom.</p>
                    <p>The application layer is in a receiving state.</p>
                  </div>

                  <ol className="mt-7 space-y-5">
                    <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5">
                      <span className="font-mono text-[10px] text-background/80 pt-1.5 tabular-nums">
                        01
                      </span>
                      <div>
                        <h3 className="font-serif font-medium text-[clamp(1rem,1.3vw,1.15rem)] text-background leading-snug">
                          Infrastructure leads application by 60 to 90 days.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            The Q3 2024 energy constraint narrative produced
                            the Q1 2026 capex discipline framing.
                          </p>
                          <p>
                            Application teams are receiving delayed signals
                            from below, not reacting in real time.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5">
                      <span className="font-mono text-[10px] text-background/80 pt-1.5 tabular-nums">
                        02
                      </span>
                      <div>
                        <h3 className="font-serif font-medium text-[clamp(1rem,1.3vw,1.15rem)] text-background leading-snug">
                          Custom silicon is the in-transit signal that matters.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            Meta, Amazon, and Google all moved off NVIDIA
                            dependency in the past 60 days.
                          </p>
                          <p>
                            Reshapes enterprise procurement and inference cost
                            framing by Q3 2026.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5">
                      <span className="font-mono text-[10px] text-background/80 pt-1.5 tabular-nums">
                        03
                      </span>
                      <div>
                        <h3 className="font-serif font-medium text-[clamp(1rem,1.3vw,1.15rem)] text-background leading-snug">
                          Google&apos;s split chips confirm the architectural
                          bifurcation.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            The stack has bifurcated into two distinct
                            optimization regimes.
                          </p>
                          <p>
                            60 to 90 days before this becomes the frame product
                            evaluation runs through.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5">
                      <span className="font-mono text-[10px] text-background/80 pt-1.5 tabular-nums">
                        04
                      </span>
                      <div>
                        <h3 className="font-serif font-medium text-[clamp(1rem,1.3vw,1.15rem)] text-background leading-snug">
                          The enterprise ROI narrative is 18-month-old
                          infrastructure economics.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            Reliable, cheaper inference made measurable
                            enterprise outcomes possible.
                          </p>
                          <p>
                            Enterprise comms teams never tracked the story
                            that produced their own.
                          </p>
                        </div>
                      </div>
                    </li>

                    <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5">
                      <span className="font-mono text-[10px] text-background/80 pt-1.5 tabular-nums">
                        05
                      </span>
                      <div>
                        <h3 className="font-serif font-medium text-[clamp(1rem,1.3vw,1.15rem)] text-background leading-snug">
                          Two narratives are in active transit as of April 2026.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            Geographic data center diversification arrives at
                            the hyperscaler layer in 45 to 60 days.
                          </p>
                          <p>
                            The training-to-inference shift produces an
                            inference-first enterprise narrative in 60 to 75.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ Body ━━━ */}
      <article className="px-8 md:px-16 pb-16 md:pb-24">
        <div className="max-w-[960px] mx-auto space-y-8 text-base leading-relaxed text-foreground">
          {/* Stakes block */}
          <div className="border-t border-border pt-10">
            <p className="text-xs font-mono text-primary uppercase tracking-[0.18em]">
              Why it matters
            </p>
            <p className="mt-4 text-[1.05rem] leading-[1.7] text-foreground">
              Comms teams across AI keep optimizing for the wrong narrative
              environment. They treat &ldquo;AI&rdquo; as a single topic. It is
              a system of seven layers, each with its own press cycle, voices,
              and framing conventions. The frame your reporters will use next
              quarter is already visible two layers below you as of April 2026.
            </p>
          </div>

          {/* Section: The system */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-16 mb-2">
            Seven layers. Seven narrative environments.
          </h2>
          <p>
            Each layer operates on its own media cycle, with its own dominant
            voices and framing conventions. Narratives do not originate
            simultaneously across layers. They emerge from constraints in lower
            layers and propagate upward. The map below orders them top to
            bottom: where they sit in the stack, what state each is in, and how
            much narrative momentum each is generating right now.
          </p>

          <div className="my-10">
            <StackMap />
          </div>

          <p>
            Three of the seven are accelerating, and all three sit in the
            infrastructure half of the stack. The application layers are in a
            receiving state, absorbing narratives that were already
            well-established in infrastructure coverage 60 to 90 days ago.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: the unit of analysis is the layer, not the topic.
          </p>

          {/* Section: Velocity */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Infrastructure layers are generating the most momentum.
          </h2>
          <p>
            Three of the seven layers are accelerating right now, and all
            three sit in the infrastructure half of the stack: Energy &amp;
            Power Grid (Layer 1), Chip Supply &amp; Architecture (Layer 2),
            and the Training-to-Inference Shift (Layer 5). The application
            layers — Enterprise and Consumer — are the slowest movers in the
            set. We measure that with a velocity score, defined below.
          </p>
          {/* Inline methodology: how the velocity score is computed */}
          <div className="my-10 relative rounded-2xl overflow-hidden not-prose">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.7]"
              style={{ backgroundImage: "url('/sandscape.png')" }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, color-mix(in srgb, var(--card) 50%, transparent) 0.4px, transparent 0.8px)",
                backgroundSize: "5px 5px",
              }}
            />
            <div className="relative p-3 lg:p-5">
              <div
                className="relative rounded-2xl overflow-hidden backdrop-blur-3xl backdrop-saturate-150 bg-foreground/[0.55] isolate"
                style={{
                  boxShadow: [
                    "inset 0 1px 0 0 rgba(255,255,255,0.5)",
                    "inset 0 0 0 1px rgba(255,255,255,0.18)",
                    "inset 0 -1px 0 0 rgba(43,32,22,0.08)",
                    "0 1px 2px 0 rgba(43,32,22,0.04)",
                    "0 8px 24px -8px rgba(43,32,22,0.18)",
                    "0 24px 48px -16px rgba(43,32,22,0.22)",
                  ].join(", "),
                }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, transparent 100%)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.65) 50%, transparent 100%)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
                  }}
                />

                <div className="relative p-6 lg:p-8">
                  <p className="text-[10px] font-mono text-background/70 uppercase tracking-[0.18em]">
                    Velocity score · how it is computed
                  </p>
                  <h3 className="mt-3 font-serif font-normal text-[clamp(1.25rem,2vw,1.6rem)] leading-[1.25] tracking-tight text-background">
                    Three signals, one composite, indexed to a 90-day baseline.
                  </h3>
                  <p className="mt-3 text-[14px] text-background/90 leading-relaxed max-w-[64ch]">
                    Each layer&apos;s velocity score is a weighted blend of
                    three independent measurements taken from the past 60 days
                    of earned coverage, then indexed against the same layer&apos;s
                    trailing 90-day baseline. The result is a 0–100 number
                    where 100 is the highest level the layer has reached in
                    that window.
                  </p>

                  <dl className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-8">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-background/70">
                        Volume growth · 40%
                      </dt>
                      <dd className="mt-2 text-[14px] text-background leading-relaxed">
                        Quarter-over-quarter change in narrative-tagged
                        article count for the layer, normalized against the
                        layer&apos;s own 90-day mean. Captures how fast
                        coverage is intensifying.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-background/70">
                        Source-tier concentration · 30%
                      </dt>
                      <dd className="mt-2 text-[14px] text-background leading-relaxed">
                        Share of layer coverage appearing in Tier 1 outlets
                        (WSJ, FT, Bloomberg, NYT, The Information, Reuters,
                        major trade press). Captures how seriously the
                        editorial center is treating the layer.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-background/70">
                        Thematic concentration · 30%
                      </dt>
                      <dd className="mt-2 text-[14px] text-background leading-relaxed">
                        Share of layer coverage captured by the single
                        dominant narrative within the layer (the top
                        narrative&apos;s share of layer-tagged articles).
                        Captures how unified the framing is.
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8 border-t border-background/15 pt-6">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-background/70">
                        Index formula
                      </dt>
                      <dd className="mt-2 text-[14px] text-background leading-relaxed">
                        score = 100 × (0.4 · volume_z + 0.3 · tier1_share + 0.3 · top_narrative_share),
                        clamped to 0–100. Z-scores are computed against the
                        layer&apos;s 90-day trailing distribution.
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-background/70">
                        Why it&apos;s relative, not absolute
                      </dt>
                      <dd className="mt-2 text-[14px] text-background leading-relaxed">
                        Layers have different natural coverage volumes — Layer
                        4 (Hyperscaler) sees more raw articles than Layer 2
                        (Chips), but that doesn&apos;t make its narrative more
                        active. Indexing to each layer&apos;s own baseline
                        makes scores comparable across the stack.
                      </dd>
                    </div>
                  </div>

                  {/* Threshold bands: how to read a score */}
                  <div className="mt-7 border-t border-background/15 pt-6">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-background/70">
                      Reading a score
                    </p>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="rounded-xl bg-background/10 border border-background/15 px-4 py-3">
                        <div className="flex items-baseline gap-2">
                          <span
                            className="inline-block w-2 h-2 rounded-full"
                            style={{ background: "#977BA1" }}
                          />
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-background">
                            Accelerating
                          </span>
                          <span className="ml-auto font-mono text-[11px] text-background/80 tabular-nums">
                            75+
                          </span>
                        </div>
                        <p className="mt-2 text-[13px] text-background/85 leading-snug">
                          A dominant frame is consolidating fast in Tier 1 coverage.
                        </p>
                      </div>
                      <div className="rounded-xl bg-background/10 border border-background/15 px-4 py-3">
                        <div className="flex items-baseline gap-2">
                          <span
                            className="inline-block w-2 h-2 rounded-full"
                            style={{ background: "#7489A3" }}
                          />
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-background">
                            Active
                          </span>
                          <span className="ml-auto font-mono text-[11px] text-background/80 tabular-nums">
                            55–75
                          </span>
                        </div>
                        <p className="mt-2 text-[13px] text-background/85 leading-snug">
                          Coverage is sustained, framing is contested or in flux.
                        </p>
                      </div>
                      <div className="rounded-xl bg-background/10 border border-background/15 px-4 py-3">
                        <div className="flex items-baseline gap-2">
                          <span
                            className="inline-block w-2 h-2 rounded-full"
                            style={{ background: "#8F7F6B" }}
                          />
                          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-background">
                            Developing
                          </span>
                          <span className="ml-auto font-mono text-[11px] text-background/80 tabular-nums">
                            &lt;55
                          </span>
                        </div>
                        <p className="mt-2 text-[13px] text-background/85 leading-snug">
                          Coverage exists, but no narrative owns the layer yet.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p>
            By that measure: Energy (91), Chips (87), and the
            Training-to-Inference shift (82) lead. Hyperscaler (68), Data
            Center (74), and Enterprise (63) sit in the active band. Consumer
            (55) is the only layer in the developing band — high coverage,
            but no consolidating story.
          </p>

          <div className="my-10">
            <VelocityByLayer />
          </div>

          <p>
            By the time a narrative reaches the application layer, it has been
            running in infrastructure media for 60 to 90 days. The velocity
            ranking is the propagation thesis in static form: momentum
            originates below and dissipates upward.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: if you operate above Layer 4, your incoming narratives are
            already visible in coverage you are probably not reading.
          </p>

          {/* Section: Cycle timeline */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            The cycles rise and fall layer by layer.
          </h2>
          <p>
            Velocity over the past seven quarters, plotted layer by layer.
            Energy peaked early, dipped, and is re-accelerating. The chip
            cycle inflected sharply in the past two quarters. Training-to-
            inference broke open after DeepSeek in Q1 2025. Enterprise and
            consumer demand have only just begun to climb.
          </p>

          <div className="my-10">
            <CycleTimeline />
          </div>

          <p>
            Read the chart bottom-up: the cycle apex marker (the larger dot)
            arrives at lower layers first and migrates upward. That is the
            propagation thesis as a moving picture. Each peak you see at the
            bottom is roughly the next peak coming at the top, 60 to 90 days
            out.
          </p>

          {/* Section: Volume */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            High-volume layers and high-velocity layers are not the same.
          </h2>
          <p>
            Velocity is one half of the picture. Volume is the other. The
            panels below plot quarterly article volume per layer, ordered by
            Q1 2026 size. Layers can end the window at the same headline
            number with completely different trajectories underneath.
          </p>

          <div className="my-10">
            <VolumeStack />
          </div>

          <p>
            Consumer Demand (L7) and Chip Supply (L2) both end Q1 2026 at
            132K articles. They got there in completely different ways.
            Consumer crawled — 118K to 132K, +12% across seven quarters,
            with a dip in the middle. Chips climbed steeply, 52K to 132K, a
            2.5× run with most of the gain in the past three quarters.
            Endpoint says they are the same size; trajectory says they are
            opposite stories. The fastest absolute climbers are
            Training-to-Inference (5.9× from a small base), Data Center
            Capacity (3.7×), and Chip Supply (2.5×) — the same three layers
            leading on velocity.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: a layer&apos;s endpoint hides what it took to get
            there. Trajectory is the volume signal worth tracking.
          </p>

          {/* Section: Layer analysis */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            The dominant narrative in each layer, and what it sends upward.
          </h2>
          <p>
            For each layer: the current dominant narrative, its key voices, the
            active signals driving it, and the propagation destination and
            estimated lag. Read bottom-up — that is the direction the
            narratives are traveling.
          </p>

          <div className="my-10">
            <LayerCards />
          </div>

          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: most of these signals will become next quarter&apos;s
            framing one or two layers above their origin. The question is not
            whether they propagate. It is when.
          </p>

          {/* Section: Propagation */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Narrative propagation is measurable, not theoretical.
          </h2>
          <p>
            The 60-to-90-day lag between infrastructure narratives and
            application-layer framing is traceable in media data. These four
            propagation events are observed in the past 18 months — three
            already complete, one in active transit.
          </p>

          <div className="my-10">
            <PropagationFlow />
          </div>

          <p>
            Two narratives are in active transit as of April 2026. If you
            operate at the enterprise demand layer (Layer 6) and have not yet
            built inference-efficiency proof points into your positioning, you
            are 60 to 75 days from the moment journalists will expect them. If
            you operate at the hyperscaler strategy layer (Layer 4) and have
            not yet framed your buildout in sovereignty terms, the window is 45
            to 60 days. Both windows are still open.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: there is a finite window between when a frame is visible
            below you and when it is expected of you.
          </p>

          {/* Section: How to use this */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            What this means depending on where you sit.
          </h2>
          <p>
            The intelligence value of this report differs depending on where in
            the stack you operate. Three audiences, three different reads.
          </p>

          <div className="mt-8 space-y-7 border-l border-border pl-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Layers 1–3 · Infrastructure comms
              </p>
              <h4 className="mt-1.5 font-serif text-[1.05rem] text-foreground tracking-tight">
                You are at the origin of the propagation cycle.
              </h4>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                The narratives you manage now will frame your customers&apos;
                businesses in 60 to 90 days. Most of your comms work is
                received at the top of the stack by audiences who do not
                understand infrastructure. Build translation assets now —
                the frame you are living in needs a version a CIO can
                receive. You have the window to define it before it arrives
                distorted.
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Layers 5–7 · Application comms
              </p>
              <h4 className="mt-1.5 font-serif text-[1.05rem] text-foreground tracking-tight">
                You are in a receiving state.
              </h4>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                The narratives arriving at your layer were visible in
                infrastructure media 60 to 90 days ago. Reporters covering
                your space have already been primed by coverage you probably
                did not read. Inference efficiency, the ROI demand, the
                sovereignty framing: all of it originated below you. Read
                infrastructure press weekly for narrative intelligence — the
                frame you will respond to in Q3 2026 is visible at Layers 1
                and 2 in the April 2026 cut.
              </p>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Agencies & consultants · Any AI stack client
              </p>
              <h4 className="mt-1.5 font-serif text-[1.05rem] text-foreground tracking-tight">
                The unit of analysis your clients are using is wrong.
              </h4>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                &ldquo;AI&rdquo; as a single topic flattens a seven-layer
                system. Your clients sit on one floor. Their narratives do
                not originate with them, and their comms strategy should
                not be built as if they do. Map every client to their
                layer, then audit what is active two layers below them —
                that is their incoming narrative environment for Q3 2026.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* ━━━ Methodology ━━━ */}
      <section className="px-8 md:px-16 pb-16">
        <div className="max-w-[960px] mx-auto relative rounded-2xl overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.7]"
            style={{ backgroundImage: "url('/sandscape.png')" }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, color-mix(in srgb, var(--card) 50%, transparent) 0.4px, transparent 0.8px)",
              backgroundSize: "5px 5px",
            }}
          />
          <div className="relative p-3 lg:p-5">
            <div
              className="relative rounded-2xl overflow-hidden backdrop-blur-3xl backdrop-saturate-150 bg-foreground/[0.55] isolate"
              style={{
                boxShadow: [
                  "inset 0 1px 0 0 rgba(255,255,255,0.5)",
                  "inset 0 0 0 1px rgba(255,255,255,0.18)",
                  "inset 0 -1px 0 0 rgba(43,32,22,0.08)",
                  "0 1px 2px 0 rgba(43,32,22,0.04)",
                  "0 8px 24px -8px rgba(43,32,22,0.18)",
                  "0 24px 48px -16px rgba(43,32,22,0.22)",
                ].join(", "),
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, transparent 100%)",
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.65) 50%, transparent 100%)",
                }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
                }}
              />
              <div className="relative p-6 lg:p-8">
                <p className="text-xs font-mono text-background/70 uppercase tracking-[0.18em]">
                  Methodology
                </p>
                <h3 className="mt-3 font-serif font-normal text-[clamp(1.5rem,2.6vw,2.25rem)] leading-[1.25] tracking-tight text-background">
                  How we did this.
                </h3>
                <p className="mt-4 text-[15px] text-background/90 leading-relaxed">
                  Researched and authored by Shadow.
                </p>

                <dl className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Sources
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Perigon News Intelligence API. Earned media only
                      (non-news and paid-news labels excluded). English
                      language. Reprints deduplicated.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Date range
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      60-day period ending April 30, 2026, with 18-month
                      historical comparison for propagation analysis.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Sample
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Five narrative-layer queries covering energy and grid,
                      chip supply and architecture, data center capacity,
                      hyperscaler strategy, training-to-inference dynamics, and
                      enterprise and consumer demand. Total Perigon universe
                      across all queries: ~5.2M articles.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Velocity scores
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Shadow composite of coverage volume growth, source-tier
                      concentration (Tier 1 penetration), and thematic
                      concentration (share of layer coverage captured by the
                      dominant narrative). Indexed to a 90-day trailing
                      baseline. Scores are relative within the stack.
                    </dd>
                  </div>
                  <div className="md:col-span-2">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Propagation lag estimates
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Derived from cross-layer narrative matching in media
                      data, tracking when a frame first appeared at a lower
                      layer and when it became dominant at the receiving
                      layer. Estimates represent observed medians across three
                      or more traceable propagation events per pathway, not
                      point estimates.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="px-8 md:px-16 pb-16 md:pb-24">
        <div className="max-w-[960px] mx-auto border-t border-border pt-16 md:pt-20">
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.5rem)] text-foreground leading-[1.08] tracking-tight">
            Want this analysis for your category?
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-[52ch]">
            Shadow runs Narrative Cycle Intelligence across any market. Book a
            demo to see what the data looks like for your clients&apos; space.
          </p>
          <div className="mt-8 flex flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Book a demo
            </Link>
            <Link
              href="/reports"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Back to Reports
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
