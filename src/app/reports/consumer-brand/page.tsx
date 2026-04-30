import type { Metadata } from "next";
import Link from "next/link";
import { CategoryLandscape } from "./_components/CategoryLandscape";
import { NarrativeRanking } from "./_components/NarrativeRanking";
import { CreatorVelocity } from "./_components/CreatorVelocity";
import { AlignmentMatrix } from "./_components/AlignmentMatrix";
import { AIEngineDivergence } from "./_components/AIEngineDivergence";
import { CPCSpread } from "./_components/CPCSpread";

export const metadata: Metadata = {
  title: "Consumer & Brand Narrative Report | Shadow (April 2026)",
  description:
    "28,382 articles across 6 narratives reveal a consumer landscape dominated by creator and DTC coverage. Tariff Brand Identity commands the highest AI engine visibility on just 10% of media volume.",
  alternates: {
    canonical: "/reports/consumer-brand",
  },
  openGraph: {
    title: "Consumer & Brand Narrative Report | Shadow (April 2026)",
    description:
      "The press writes about creators. AI engines talk about tariffs. Six consumer narratives, 28 days, the divergence that should drive brand positioning.",
    type: "article",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consumer & Brand Narrative Report | Shadow (April 2026)",
    description:
      "The press writes about creators. AI engines talk about tariffs. Six consumer narratives, 28 days.",
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The press writes about creators. AI engines talk about tariffs.",
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
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
    "Shadow's Consumer & Brand Narrative Report, Baseline Edition. 28 days of media data across 6 consumer narratives, with search demand, AI engine visibility, and CPC analysis.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://shadow.inc/reports/consumer-brand",
  },
};

export default function ConsumerBrandPage() {
  return (
    <div className="flex flex-col bg-card">
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
            <span className="text-foreground">Baseline Edition</span>
          </nav>

          <h1 className="mt-6 font-serif font-medium text-[clamp(2.25rem,4.5vw,3.75rem)] text-foreground leading-[1.05] tracking-tight">
            The press writes about creators. AI engines talk about tariffs.
          </h1>

          <p className="mt-8 text-[clamp(0.95rem,1.3vw,1.15rem)] text-muted-foreground leading-[1.7]">
            28,382 articles across 6 narratives reveal a consumer landscape
            dominated by creator and DTC coverage (62% combined), with sports
            media rights as the steady-state anchor. The surprise: Tariff
            Brand Identity generates 87 AI engine mentions on just 10% of
            media volume, the highest absolute AI count in the category. For
            consumer brands navigating positioning, that divergence signals
            where the conversation is heading.
          </p>

          <p className="mt-8 text-xs font-mono text-muted-foreground uppercase tracking-wider">
            Analysis by{" "}
            <span className="text-foreground">Shadow Research Team</span>
            <span className="mx-2">·</span>
            <span>April 2026</span>
            <span className="mx-2">·</span>
            <span>Baseline Edition</span>
          </p>
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
                    The finding
                  </p>
                  <h2 className="mt-3 font-serif font-normal text-[clamp(1.25rem,2vw,1.75rem)] leading-[1.2] tracking-tight text-background">
                    Five things the data is saying.
                  </h2>
                  <div className="mt-3 space-y-1 text-[14px] text-background leading-snug">
                    <p>The press writes one consumer story.</p>
                    <p>
                      The search bar and the AI engines tell two different ones
                      &mdash; and that&rsquo;s where positioning still pays.
                    </p>
                  </div>

                  <ol className="mt-7 space-y-5">
                    <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5">
                      <span className="font-mono text-[10px] text-background/80 pt-1.5 tabular-nums">
                        01
                      </span>
                      <div>
                        <h3 className="font-serif font-medium text-[clamp(1rem,1.3vw,1.15rem)] text-background leading-snug">
                          Creator Economy is the only narrative still
                          accelerating.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            10,258 articles &mdash; 36.1% of the category
                            &mdash; growing at +65.5% velocity.
                          </p>
                          <p>
                            Influencer marketing is moving from established to
                            dominant inside the beat.
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
                          AI engines treat tariffs as the defining consumer
                          narrative.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            87 AI-engine mentions on 2,823 articles &mdash; the
                            highest absolute count in the category.
                          </p>
                          <p>
                            Roughly 30&times; DTC&rsquo;s count, on a fraction
                            of the press volume.
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
                          Retail AI Transformation is the highest-CPC narrative
                          in the category.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>$19.33 weighted CPC on 2.7% of media volume.</p>
                          <p>
                            The clearest enterprise positioning opportunity on
                            the consumer beat.
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
                          DTC dominates search but not press.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            26.1% of coverage, 14.5M monthly searches &mdash;
                            Shein 9.1M, Temu 5M, TikTok Shop 368K.
                          </p>
                          <p>
                            &ldquo;DTC&rdquo; is really a proxy for fast-fashion
                            platform competition.
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
                          Sports Media Rights War is the only narrative
                          decelerating.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>&minus;13.2% velocity.</p>
                          <p>
                            Streaming-rights deals have been announced; the
                            press is moving on.
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

      {/* ━━━ Stat strip ━━━ */}
      <section className="px-8 md:px-16 pb-16">
        <div className="max-w-[960px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 border-t border-border pt-10">
            <div>
              <p className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] text-foreground leading-tight tracking-tight tabular-nums">
                28,382
              </p>
              <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                Total Articles · 28d
              </p>
            </div>
            <div>
              <p className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] text-foreground leading-tight tracking-tight tabular-nums">
                14.5M
              </p>
              <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                Peak Search · DTC
              </p>
            </div>
            <div>
              <p className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] text-foreground leading-tight tracking-tight tabular-nums">
                87
              </p>
              <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                Peak AI Mentions · Tariff
              </p>
            </div>
            <div>
              <p className="font-serif text-[clamp(1.5rem,2.5vw,2rem)] text-foreground leading-tight tracking-tight tabular-nums">
                +65.5%
              </p>
              <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                Fastest Velocity · Creator
              </p>
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
              Brand and comms teams across consumer-facing companies are being
              asked to pick a narrative to position against. The press, the
              search bar, and the AI engines are all telling different stories
              about what matters. This baseline says: pick by audience. The
              press writes about creators. Buyers search for fast-fashion. AI
              engines surface trade policy. Each surface rewards a different
              positioning bet.
            </p>
          </div>

          {/* Context / landscape */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-16 mb-2">
            The consumer beat is dense, and two new narratives just went live.
          </h2>
          <p>
            Twenty-eight days, six narratives, 28,382 articles. The category
            runs at roughly 1,000 articles per day with sharp weekend troughs.
            On April 23–24, Tariff Brand Identity and Luxury Resilience Test
            crossed the detection threshold and added a combined 2,000+
            articles in a single day, lifting the category to its highest
            volume of the period.
          </p>

          <div className="my-10">
            <CategoryLandscape />
          </div>

          <p>
            Two narratives going live in the same week is unusual. It signals
            a shift in what the consumer press is willing to cover: trade
            policy as a brand identity question, and luxury as a macro
            stress-test. Both are likely to compound through Q2.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: the consumer beat is broadening, not consolidating.
          </p>

          {/* Tension — concentration */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Coverage concentrates at the top.
          </h2>
          <p>
            Creator Economy Maturation alone accounts for 36.1% of all
            consumer coverage. DTC Survival Reckoning adds another 26.1%. The
            top two narratives carry 62% of the beat. Sports anchors a steady
            18.8%. Tariff, Luxury, and Retail AI together split the remaining
            18.9%.
          </p>

          <div className="my-10">
            <NarrativeRanking />
          </div>

          <p>
            Concentration at the top creates two distinct plays. Compete for
            share of voice inside the crowded stories where attention is
            cheap but differentiation is hard. Or build position in a thinner
            narrative before the press catches up to where buyers and AI
            engines already are.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: the tail is where consumer differentiation is still
            possible.
          </p>

          {/* Velocity — the fastest mover */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Creator Economy is accelerating. Sports Rights is rolling off.
          </h2>
          <p>
            Velocity, computed as the change in 28-day media volume against
            the prior 28-day window, separates the live narratives from the
            absorbed ones. Creator Economy is up 65.5%. Sports Media Rights
            War is down 13.2%. Everything else is roughly flat or in
            initialization.
          </p>

          <div className="my-10">
            <CreatorVelocity />
          </div>

          <p>
            Creator&rsquo;s acceleration is structural, not event-driven.
            Influencer marketing is moving from established to dominant inside
            the category. Sports&rsquo; deceleration is the opposite shape:
            the major streaming-rights deals have been announced, and the
            press is moving on to whatever earnings cycle comes next.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: position on creator now or fight for share later.
          </p>

          {/* Alignment matrix */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Press attention does not match what consumers actually search for.
          </h2>
          <p>
            Plot media volume against monthly search demand and the alignment
            picture inverts. DTC Survival Reckoning sits at 14.5 million
            monthly searches — Shein at 9.1M, Temu at 5M, TikTok Shop at
            368K. The press treats DTC as a profitability story. The search
            data says it&rsquo;s really a fast-fashion platform competition.
          </p>

          <div className="my-10">
            <AlignmentMatrix />
          </div>

          <p>
            Sports Media Rights also leans market-led: 75K monthly searches
            against 5,343 articles. ESPN streaming alone draws 60,500 monthly
            searches. Creator Economy is the only top narrative where press
            volume and search demand line up cleanly. The decoupled
            quadrant — Tariff, Luxury, Retail AI — is where new positioning
            is cheapest and least crowded.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: the search bar tells a different story than the press
            release.
          </p>

          {/* AI engines */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            AI engines are running ahead of the press on tariffs.
          </h2>
          <p>
            Across ChatGPT, Claude, Gemini, and Perplexity, Tariff Brand
            Identity drew 87 AI engine mentions in April — the highest
            absolute count in the category and roughly 30 times what DTC
            generates. AI engines are treating trade policy as a defining
            consumer narrative even though press coverage has barely begun.
          </p>

          <div className="my-10">
            <AIEngineDivergence />
          </div>

          <p>
            Retail AI Transformation tells a related story. Nine AI engine
            mentions for every 100 articles is the highest ratio in the
            category, and the conversation is led by Amazon, Walmart, and
            Target. When AI engines and AI-shopping coverage converge, GEO
            visibility is decided by a small set of named entities — and
            challengers don&rsquo;t make the cut by accident.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: if AI engines are where buyers will research consumer
            brands next, tariff and retail AI are the narratives to own first.
          </p>

          {/* CPC */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            The narratives buyers pay for are not the ones generating
            headlines.
          </h2>
          <p>
            Weighted CPC across each narrative&rsquo;s keyword set sorts the
            beat by buyer intent. Retail AI Transformation tops the chart at
            $19.33 — and the single hottest keyword inside it, &ldquo;retail
            media network,&rdquo; runs $55.11 per click. Creator Economy
            comes in at $18.38, anchored by &ldquo;UGC marketing&rdquo; at
            $38.23.
          </p>

          <div className="my-10">
            <CPCSpread />
          </div>

          <p>
            DTC&rsquo;s $0.38 weighted CPC is a function of Shein and Temu
            absorbing all the volume at fractions of a cent. Strip those out
            and DTC keywords like &ldquo;direct to consumer&rdquo; clear $30.
            The point: the spreadsheet view of CPC is not the buyer view.
            Strategic keywords are still expensive even when the category
            average looks cheap.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: enterprise positioning is decided by the long tail of
            high-CPC, low-volume terms — not the headline narrative.
          </p>
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
                      Perigon News Intelligence API (English-language press,
                      reprints excluded); DataForSEO search volume and CPC
                      data (US market); Shadow GEO audit across ChatGPT,
                      Claude, Gemini, and Perplexity.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Date range
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Daily media volume covers 30 March – 26 April 2026 (28
                      days). Search demand, AI visibility, and CPC reflect
                      April 2026 monthly aggregates.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Sample
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Six tracked narratives: Creator Economy Maturation, DTC
                      Survival Reckoning, Sports Media Rights War, Tariff
                      Brand Identity, Luxury Resilience Test, Retail AI
                      Transformation. CPC weighted across 35 keywords.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Exclusions
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Non-English press; non-news and paid-news labels;
                      reprint duplicates collapsed. Tariff and Luxury
                      narratives initialize on 23–24 April 2026; prior days
                      report as zero.
                    </dd>
                  </div>
                  <div className="md:col-span-2">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Known limits
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      This is the baseline edition; trend lines reflect a
                      single 28-day window and will sharpen with each
                      successive cut. Velocity is computed against the prior
                      28-day window and is suppressed for narratives that
                      initialized inside the current period.
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
