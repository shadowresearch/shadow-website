import type { Metadata } from "next";
import Link from "next/link";
import { CategoryLandscape } from "./_components/CategoryLandscape";
import { DisplacementDominance } from "./_components/DisplacementDominance";
import { AIEngineDivergence } from "./_components/AIEngineDivergence";
import { NarrativeRanking } from "./_components/NarrativeRanking";
import { AlignmentMatrix } from "./_components/AlignmentMatrix";
import { CPCSpread } from "./_components/CPCSpread";

export const metadata: Metadata = {
  title:
    "Workforce & Future of Work Narrative Report | Shadow (April 2026)",
  description:
    "21,606 articles across 5 narratives reveal a workforce landscape where displacement dominates the press, but the AI Productivity Paradox dominates AI engines and White Collar Compression dominates buyer CPC. Baseline edition.",
  alternates: {
    canonical: "/reports/workforce-future-of-work",
  },
  openGraph: {
    title:
      "Workforce & Future of Work Narrative Report | Shadow (April 2026)",
    description:
      "Displacement writes 45% of the workforce press. The narratives buyers pay for are different ones. Baseline edition across media, search, and AI engine visibility.",
    type: "article",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Workforce & Future of Work Narrative Report | Shadow (April 2026)",
    description:
      "21,606 articles, 5 narratives, three signals: media, search, AI visibility. The narratives the press covers are not the narratives buyers price.",
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
      name: "The workforce story the press writes is not the one buyers pay for.",
      item: "https://shadow.inc/reports/workforce-future-of-work",
    },
  ],
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The workforce story the press writes is not the one buyers pay for.",
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
    "Shadow's Workforce & Future of Work Narrative Report, Baseline Edition. 21,606 articles across 5 narratives, with monthly search demand and AI engine visibility cross-referenced.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://shadow.inc/reports/workforce-future-of-work",
  },
};

export default function WorkforceFutureOfWorkPage() {
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
            <span className="text-foreground">Baseline Edition</span>
          </nav>

          <h1 className="mt-6 font-serif font-medium text-[clamp(2.25rem,4.5vw,3.75rem)] text-foreground leading-[1.05] tracking-tight">
            The workforce story the press writes is not the one buyers pay for.
          </h1>

          <p className="mt-8 text-[clamp(0.95rem,1.3vw,1.15rem)] text-muted-foreground leading-[1.7]">
            Displacement writes 45% of the press. AI engines treat the
            productivity paradox as 12 times more important than the press
            does. Enterprise buyers are paying $29 per click to engage with the
            white-collar compression story on a fraction of that volume. Three
            signals, three different answers about what the workforce
            conversation actually is.
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
                    <p>One narrative anchors the press.</p>
                    <p>
                      Three more reorder the picture once you stack search and
                      AI-engine signal on top.
                    </p>
                  </div>

                  <ol className="mt-7 space-y-5">
                    <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5">
                      <span className="font-mono text-[10px] text-background/80 pt-1.5 tabular-nums">
                        01
                      </span>
                      <div>
                        <h3 className="font-serif font-medium text-[clamp(1rem,1.3vw,1.15rem)] text-background leading-snug">
                          Displacement is the only fully aligned narrative.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            9,737 articles &mdash; 45% of the category &mdash;
                            matched by 14,790 monthly searches.
                          </p>
                          <p>
                            Press and buyer intent are pointed in the same
                            direction.
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
                          AI engines treat the productivity paradox as central.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            52 AI-engine mentions on just 440 articles &mdash;
                            11.8 per 100.
                          </p>
                          <p>
                            An order of magnitude above the rest of the beat,
                            and the question buyers ask first.
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
                          White Collar Compression is the highest-CPC narrative
                          in the category.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>$29.08 weighted CPC on 8.2% of media volume.</p>
                          <p>
                            The clearest enterprise positioning opportunity on
                            the beat.
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
                          Skills Gap dominates press but not search.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>33% of coverage, only 5,500 monthly searches.</p>
                          <p>
                            The reskilling story is loud in the press and quiet
                            in the search bar.
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
                          Gig Economy Regulation is the only narrative
                          decelerating.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>&minus;15.4% velocity.</p>
                          <p>
                            Policy attention is shifting from gig classification
                            to AI-specific labor policy.
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
          {/* Stakes */}
          <div className="border-t border-border pt-10">
            <p className="text-xs font-mono text-primary uppercase tracking-[0.18em]">
              Why it matters
            </p>
            <p className="mt-4 text-[1.05rem] leading-[1.7] text-foreground">
              Enterprise communications and HR tech buyers are forced to pick
              which workforce story to attach a brand to. The default is to
              follow press volume. This data shows that produces the worst
              positioning math in the category &mdash; expensive to differentiate
              against, cheap on CPC. The narratives with low press volume and
              high buyer signal are where positioning still pays.
            </p>
          </div>

          {/* Section 1: landscape */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-16 mb-2">
            Workforce is one of the densest beats in the press.
          </h2>
          <p>
            21,606 articles in 28 days, across five tracked narratives, on a
            volume floor that holds even through weekends. The category has the
            scale to support narrative-level intelligence; it&apos;s the
            distribution of that scale across narratives that matters.
          </p>

          <div className="my-10">
            <CategoryLandscape />
          </div>

          <p>
            Volume is durable. The signal to read isn&apos;t whether the
            workforce conversation is loud, but which strand of it the data
            says is going to keep getting louder.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: scale is the table stakes; distribution is the strategy.
          </p>

          {/* Section 2: dominance */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            One narrative writes nearly half the workforce press.
          </h2>
          <p>
            AI Job Displacement Wave produced 9,737 articles in the trailing
            month &mdash; more than the other four narratives combined. It is
            also the only narrative classified ALIGNED: media volume and search
            demand move together at 14,790 searches a month. This is the
            anchor.
          </p>

          <div className="my-10">
            <DisplacementDominance />
          </div>

          <p>
            The displacement story is doing the structural work the workforce
            beat needs done: explaining headcount cuts to a public that wants a
            cause. Companies citing AI as the reason for layoffs pulls press
            and search in the same direction. That is what alignment looks
            like.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: if the goal is reach, displacement is the only narrative with the volume to deliver it.
          </p>

          {/* Section 3: AI engines */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            AI engines are asking a different question than the press.
          </h2>
          <p>
            Per 100 articles in each narrative, AI Productivity Paradox sees
            11.8 AI engine mentions &mdash; an order of magnitude above the
            displacement narrative. The press treats &ldquo;does AI actually
            work&rdquo; as a footnote; ChatGPT, Claude, Gemini, and Perplexity
            treat it as a primary frame.
          </p>

          <div className="my-10">
            <AIEngineDivergence />
          </div>

          <p>
            Buyers do not start in Google anymore. They start by asking an AI
            engine whether the AI tool they were just sold actually works. The
            narrative the engines surface in response is the narrative the
            buyer hears first &mdash; and that narrative is not the one running
            on the front page.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: brands that show up in AI-engine answers on productivity will reach buyers before any press cycle does.
          </p>

          {/* Section 4: ranking */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Coverage concentrates at the top; the tail is where positioning is still cheap.
          </h2>
          <p>
            After Displacement (45%) and Skills Gap (33%), the remaining three
            narratives split the bottom 22% of the beat. That tail is where
            every other signal &mdash; AI engine visibility, search-to-media
            ratio, CPC &mdash; gets interesting.
          </p>

          <div className="my-10">
            <NarrativeRanking />
          </div>

          <p>
            Two of the bottom three (Productivity Paradox, White Collar
            Compression) are the highest-CPC narratives in the category. Low
            press volume, high buyer intent. That is the working definition of
            a positioning window.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: the tail isn&apos;t a backwater; it&apos;s the room left to differentiate in.
          </p>

          {/* Section 5: alignment matrix */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Search and press disagree on four of five narratives.
          </h2>
          <p>
            The alignment matrix sorts each narrative by where buyer search
            volume sits relative to media coverage. Only displacement clears
            both axes. Skills Gap leads on press but lags in search. Gig
            Economy Regulation leads in search (8,280 monthly) but lags in
            press &mdash; a market signal the editorial calendar hasn&apos;t
            picked up yet.
          </p>

          <div className="my-10">
            <AlignmentMatrix />
          </div>

          <p>
            The two DECOUPLED narratives &mdash; Productivity Paradox and
            White Collar Compression &mdash; sit low on both axes. That looks
            like absence until you stack the AI engine and CPC signals on top.
            Then it looks like the most under-reported part of the workforce
            conversation.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: alignment is the wrong lens by itself. Stack three signals before you decide where to plant a flag.
          </p>

          {/* Section 6: CPC */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Enterprise buyers will pay $29 a click for the white-collar compression story.
          </h2>
          <p>
            Weighted CPC across each narrative&rsquo;s keyword set tells you
            what enterprise buyers will actually pay to engage. White Collar
            Compression sits at $29.08, six and a half times the displacement
            narrative, on roughly one-fifth the media volume. AI Productivity
            Paradox sits second at $15.37.
          </p>

          <div className="my-10">
            <CPCSpread />
          </div>

          <p>
            The narratives the press is loudest on are the cheapest to advertise
            against. The narratives the press underweights are the ones
            enterprise software buyers are actively shopping. That gap is the
            entire point of running narrative intelligence across three
            signals instead of one.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: comms that only watches press misses the part of the conversation that&rsquo;s actually being bought.
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
                      reprints excluded); DataForSEO search volume and CPC (US
                      market); Shadow GEO audit across ChatGPT, Claude, Gemini,
                      and Perplexity.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Date range
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Trailing 28 days through April 26, 2026 for media data;
                      April 2026 monthly aggregates for search and AI engine
                      visibility. Initialization date: April 28, 2026.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Sample
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Five tracked narratives: AI Job Displacement Wave, AI
                      Productivity Paradox, Skills Gap Acceleration, Gig Economy
                      Regulation, White Collar Compression. 31 keywords cross-
                      referenced for buyer intent.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Exclusions
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Non-English press. Non-news and paid-news labels filtered
                      at the source. Reprints excluded from media counts.
                    </dd>
                  </div>
                  <div className="md:col-span-2">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Known limits
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      This is a baseline edition: 28 days of media data is
                      enough for distribution and alignment, not enough for
                      cycle-shape analysis. Velocity scores should be re-read
                      after a second 28-day window. CPC is volume-weighted
                      across each narrative&rsquo;s keyword set; ambiguous
                      keywords may count toward more than one narrative.
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
