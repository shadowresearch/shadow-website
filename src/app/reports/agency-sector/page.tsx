import type { Metadata } from "next";
import Link from "next/link";
import { MonthlyVolume } from "./_components/MonthlyVolume";
import { NarrativeStack } from "./_components/NarrativeStack";
import { NarrativeShare } from "./_components/NarrativeShare";
import { EntitySentiment } from "./_components/EntitySentiment";
import { InflectionTimeline } from "./_components/InflectionTimeline";
import { RegulatorySpike } from "./_components/RegulatorySpike";
import { AIFrameSplit } from "./_components/AIFrameSplit";

export const metadata: Metadata = {
  title:
    "The Agency Industry Under the Microscope | Shadow (April 2026)",
  description:
    "272 tier-1 articles across the agency holdco sector, Nov 2025 – Apr 2026. WPP carries 44.8% negative sentiment vs Omnicom at 26.6% — same forces, opposite frames. Talent under-covered; regulatory just emerging.",
  alternates: {
    canonical: "/reports/agency-sector",
  },
  openGraph: {
    title:
      "The Agency Industry Under the Microscope | Shadow (April 2026)",
    description:
      "How holdcos are being narrated in business and tech media — and why the frame matters more than the coverage volume.",
    type: "article",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "The Agency Industry Under the Microscope | Shadow (April 2026)",
    description:
      "WPP 44.8% negative. Omnicom 26.6%. Same disruption forces. Opposite frames. Six months of tier-1 agency-sector coverage analyzed.",
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
      name: "The agency industry under the microscope.",
      item: "https://shadow.inc/reports/agency-sector",
    },
  ],
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The Agency Industry Under the Microscope: how holdcos are being narrated in business and tech media.",
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
    "Shadow's Agency Sector Narrative Intelligence Report. 272 tier-1 articles across WPP, Publicis, Omnicom, IPG/Interpublic, and Dentsu. Five narratives, five months of coverage, one inflection point in February 2026.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://shadow.inc/reports/agency-sector",
  },
};

export default function AgencySectorPage() {
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

      {/* ━━━ Hero ━━━ */}
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
            <span className="text-foreground">Agency Sector</span>
          </nav>

          <h1 className="mt-6 font-serif font-medium text-[clamp(2.25rem,4.5vw,3.75rem)] text-foreground leading-[1.05] tracking-tight">
            The agency industry under the microscope.
          </h1>

          <p className="mt-8 text-[clamp(0.95rem,1.3vw,1.15rem)] text-muted-foreground leading-[1.7]">
            How holdcos and the agency model are being narrated in business and
            tech media — and why the frame matters more than the coverage
            volume. Business media has sorted the sector into two stories:
            consolidation-as-survival and AI-as-advantage. The companies that
            own the AI frame are receiving measurably less negative coverage.
            The ones still in the consolidation frame are being narrated as
            turnaround stories.
          </p>

          <p className="mt-8 text-xs font-mono text-muted-foreground uppercase tracking-wider">
            Analysis by{" "}
            <span className="text-foreground">Shadow Research Team</span>
            <span className="mx-2">·</span>
            <span>April 2026</span>
            <span className="mx-2">·</span>
            <span>Edition 1</span>
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
                    Four things the data is saying.
                  </h2>
                  <div className="mt-3 space-y-1 text-[14px] text-background leading-snug">
                    <p>February 2026 set the frame for the year.</p>
                    <p>
                      Every announcement since &mdash; an acquisition, a
                      layoff, an AI initiative &mdash; reads through it.
                    </p>
                  </div>

                  <ol className="mt-7 space-y-5">
                    <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5">
                      <span className="font-mono text-[10px] text-background/80 pt-1.5 tabular-nums">
                        01
                      </span>
                      <div>
                        <h3 className="font-serif font-medium text-[clamp(1rem,1.3vw,1.15rem)] text-background leading-snug">
                          Two frames split the sector: consolidation vs. AI.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            AI-frame companies receive measurably less negative
                            coverage.
                          </p>
                          <p>
                            Consolidation-frame companies are narrated as
                            turnaround stories.
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
                          February 2026 was the sector&rsquo;s inflection point.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            60 articles &mdash; more than twice any other month.
                          </p>
                          <p>
                            WPP&rsquo;s restructuring, the WSJ &ldquo;Madison
                            Avenue Is in Crisis&rdquo; piece, and the
                            Omnicom-IPG merger completing simultaneously.
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
                          Same forces, opposite frames: WPP 44.8%, Omnicom
                          26.6% negative.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            WPP carries the sector&rsquo;s highest negative
                            sentiment; Omnicom is framed as scale-led growth.
                          </p>
                          <p>
                            The difference is narrative positioning, not
                            business reality.
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
                          A new regulatory narrative is emerging.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            April 2026 FTC settlement with WPP, Publicis, and
                            Dentsu over ad-boycott allegations.
                          </p>
                          <p>
                            An antitrust frame that had not appeared before
                            &mdash; the story is at the beginning, not the end.
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
              Holdco comms teams are being asked to position into a sector
              narrative that was set, in February 2026, by six headlines they
              did not write. Coverage of any new announcement &mdash; an
              acquisition, a layoff, an AI initiative &mdash; will be
              interpreted through that pre-existing frame first. The question
              is not whether to counter the frame; it&rsquo;s whether you have
              a financial proof point strong enough to create a competing one.
            </p>
          </div>

          {/* Section 1: landscape */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-16 mb-2">
            Coverage spiked in February and has stayed elevated.
          </h2>
          <p>
            Tier-1 business and tech media produced 272 agency-sector articles
            across the six-month window. The shape isn&rsquo;t flat: a
            November base, a quiet December and January, then a single-month
            spike to 60 articles in February that more than doubled any other
            point in the series. Coverage stepped down in March, but did not
            return to the pre-February baseline.
          </p>

          <div className="my-10">
            <MonthlyVolume />
          </div>

          <p>
            The sentiment line tracks volume only loosely. February&rsquo;s
            spike came in at 38% negative; April&rsquo;s smaller volume came in
            at 41% negative. What&rsquo;s elevating sentiment in the more
            recent months isn&rsquo;t volume &mdash; it&rsquo;s the shift from
            financial coverage to regulatory coverage, which carries a more
            critical editorial frame by default.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: volume tells you the story is alive. Sentiment tells you which way it&rsquo;s pointed.
          </p>

          {/* Section 2: stack */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Margin pressure and consolidation dominate. AI is the third narrative, not the first.
          </h2>
          <p>
            Decomposed by narrative, the February spike is principally a
            margin and consolidation story: 23 margin/financial articles and
            14 consolidation articles in a single month. AI Reshaping shows
            up at 12 articles &mdash; a meaningful surge for the narrative
            but still the third-largest stack. The talent and regulatory
            slices are visible only in the months they actually moved.
          </p>

          <div className="my-10">
            <NarrativeStack />
          </div>

          <p>
            The AI narrative is being treated by business media as a
            secondary cause of the financial and consolidation story, not as
            the primary frame in its own right. That&rsquo;s an important
            distinction for AI-positioning announcements: the editorial
            assumption is &ldquo;AI is a reason this is happening&rdquo;
            &mdash; not &ldquo;AI is what we should be talking about.&rdquo;
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: AI announcements without a financial proof point will be absorbed into the dominant narrative, not differentiated from it.
          </p>

          {/* Section 3: SOV */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            The talent story is nearly invisible — and that gap will close.
          </h2>
          <p>
            Talent and jobs displacement occupies just 4% of tier-1 coverage
            despite Omnicom announcing roughly 4,000 layoffs after the IPG
            merger and the WSJ reporting nearly 3,000 industry-wide ad job
            eliminations since last year. Business journalists are writing
            the balance sheet story. They are not yet writing the workforce
            story at scale.
          </p>

          <div className="my-10">
            <NarrativeShare />
          </div>

          <p>
            The gap between actual workforce impact and editorial coverage is
            an order of magnitude. That gap will close &mdash; likely
            triggered by a single, well-sourced investigative piece that
            paints the entire sector. Holdcos that have already built a
            &ldquo;responsible AI / workforce&rdquo; narrative have headroom.
            The ones that haven&rsquo;t are exposed to whichever outlet
            decides to write the long piece first.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: under-coverage is not safety. It&rsquo;s a narrative liability with no fixed close date.
          </p>

          {/* Section 4: entity sentiment */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Same forces. Dramatically different coverage frames.
          </h2>
          <p>
            WPP and Omnicom are facing the same AI disruption, the same
            margin pressure, and the same need to consolidate. Their
            coverage doesn&rsquo;t reflect that. WPP runs at 44.8% negative
            sentiment in tier-1 media; Omnicom runs at 26.6%. That gap is
            68% relative. It is not explained by performance.
          </p>

          <div className="my-10">
            <EntitySentiment />
          </div>

          <p>
            The frame difference is doing the work. Omnicom is being
            narrated as an acquirer executing a scale strategy: same
            agency mergers, same headcount cuts, but framed as growth
            mechanics. WPP is being narrated as a legacy business in
            distress: same actions, framed as desperation. The
            announcement sequencing &mdash; Publicis posting Q4 results
            with AI as the reason for the upside, then WPP unveiling
            cuts with AI as the reason &mdash; is what locked the two
            frames in.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: the order in which AI shows up in your announcement decides whether AI becomes your tailwind or your headwind in coverage.
          </p>

          {/* Section 5: inflection */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            February 2026: the month business media decided what kind of story this is.
          </h2>
          <p>
            Six headlines, two weeks. Most coverage windows on the agency
            sector since have been operating inside the frame these stories
            set. The peak was a single WSJ headline &mdash; &ldquo;Madison
            Avenue Is in Crisis&rdquo; &mdash; that became the editorial
            shorthand for the rest of the quarter.
          </p>

          <div className="my-10">
            <InflectionTimeline />
          </div>

          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: the editorial frame is set before you brief the journalist. Working inside it, or against it, is the strategic decision.
          </p>

          {/* Section 6: AI frames */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            AI is the cause and the cure. The same forces. Two opposite stories.
          </h2>
          <p>
            The AI narrative in business media is not &ldquo;AI vs.
            agencies.&rdquo; It is &ldquo;agencies that got ahead of AI vs.
            agencies that didn&rsquo;t.&rdquo; The same outlets ran both
            framings within the same window.
          </p>

          <div className="my-10">
            <AIFrameSplit />
          </div>

          <p>
            Publicis locked in the advantage frame by pairing a clear
            financial thesis with AI positioning: market share gains, revenue
            growth, client wins attributable to AI capabilities. WPP&rsquo;s
            AI narrative arrived alongside the cost-cutting announcement
            &mdash; so AI is covered as the reason for cuts, not the reason
            for confidence. Sequence matters.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: AI as reason-for-confidence is a Q1 announcement. AI as reason-for-cuts is a Q4 announcement. The calendar slot is the strategy.
          </p>

          {/* Section 7: regulatory */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Regulatory scrutiny entered the frame in April. This story is at the beginning.
          </h2>
          <p>
            The FTC settlement with WPP, Publicis, and Dentsu over alleged
            coordination on ad boycotts pushed regulatory coverage from zero
            to roughly a quarter of monthly volume in a single month. The
            allegation is that the brand-safety apparatus agencies have built
            and sold to clients constitutes coordinated denial of advertising
            revenue. The settlement bans the practice.
          </p>

          <div className="my-10">
            <RegulatorySpike />
          </div>

          <p>
            Expect this to compound. The narrative will intersect with the AI
            story (AI-powered brand-safety tools are the next surface) and
            with the consolidation story (fewer holdcos controlling more ad
            spend deepens the antitrust angle). Both intersections create
            editorial follow-on opportunities for any outlet looking for the
            next agency-industry frame.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: regulatory is the first narrative in the data with no resolution path visible from inside the holdco.
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
                      Media data
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Perigon News Intelligence API. 272 agency-relevant
                      articles from tier-1 business and tech media (top 100
                      global sources by traffic). Full dataset: 2,459 articles
                      across all sources. Earned media only. English. Reprints
                      deduplicated. Source enrichment applied.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Entity set
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      WPP, Publicis Groupe, Omnicom, IPG / Interpublic,
                      Dentsu. Selected as the primary holdco subjects of
                      tier-1 coverage in the agency sector.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Narrative taxonomy
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Five narratives derived from the initial landscape scan:
                      Margin / Financial Distress, Consolidation, AI
                      Reshaping, Regulatory / Antitrust, Talent / Jobs
                      Displacement. Classified by keyword pattern matching
                      across title, summary, and keyword metadata fields.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Sentiment
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Perigon AI sentiment scoring (positive, negative,
                      neutral probability distributions per article). Entity
                      sentiment averaged across all articles citing the
                      entity. Directional, not editorial endorsement.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Time window
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      November 1, 2025 &mdash; April 30, 2026. Six months.
                      Analysis date: April 30, 2026.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Known limits
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Narrative classification is keyword-based; semantic
                      nuance may be missed in ambiguous articles. Edelman
                      Financial is excluded from entity analysis (distinct
                      from Edelman PR firm). Regulatory narrative spiked in
                      April; longer windows are needed to establish a
                      baseline.
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
