import type { Metadata } from "next";
import Link from "next/link";
import { NarrativeLandscape } from "./_components/NarrativeLandscape";
import { LifecycleTable } from "./_components/LifecycleTable";
import { WhiteSpaceMatrix } from "./_components/WhiteSpaceMatrix";
import { EntityVisibility } from "./_components/EntityVisibility";
import { ProviderBreakdown } from "./_components/ProviderBreakdown";
import { SearchDemand } from "./_components/SearchDemand";

export const metadata: Metadata = {
  title:
    "PR & Comms Agency Narrative Intelligence | Shadow (April 2026)",
  description:
    "13,200+ articles, 60 GEO queries, and 44 keywords across the PR/comms agency category. GEO and Crisis PR are the two open lanes; Edelman owns AI visibility at 65%; the AI Adoption story has already peaked.",
  alternates: {
    canonical: "/reports/pr-comms-agency",
  },
  openGraph: {
    title:
      "PR & Comms Agency Narrative Intelligence | Shadow (April 2026)",
    description:
      "The industry is talking about AI. Buyers are searching for GEO. No agency has claimed the gap. Eight narratives mapped across media, search, and AI engine visibility.",
    type: "article",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PR & Comms Agency Narrative Intelligence | Shadow (April 2026)",
    description:
      "GEO is the open lane. Edelman owns AI visibility. AI Adoption has peaked. Eight narratives mapped across three signals.",
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
      name: "The industry is talking about AI. Buyers are searching for GEO. No agency has claimed the gap.",
      item: "https://shadow.inc/reports/pr-comms-agency",
    },
  ],
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The industry is talking about AI. Buyers are searching for GEO. No agency has claimed the gap.",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
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
    "Shadow's PR & Comms Agency Narrative Intelligence Report, Edition 1. 13,200+ articles across 8 narratives, with monthly search demand and AI engine visibility cross-referenced.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://shadow.inc/reports/pr-comms-agency",
  },
};

export default function PRCommsAgencyPage() {
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
            The industry is talking about AI. Buyers are searching for GEO. No agency has claimed the gap.
          </h1>

          <p className="mt-8 text-[clamp(0.95rem,1.3vw,1.15rem)] text-muted-foreground leading-[1.7]">
            Media coverage of AI transformation in PR exploded to 613 articles
            in six months and peaked in February 2026. Search demand tells a
            different story: buyers are running 5,760 monthly queries for
            generative engine optimization and AI visibility, against just 111
            articles published. No agency owns this narrative in media, search,
            or AI models. The window is open for roughly six to twelve months.
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
                    Five things the data is saying.
                  </h2>
                  <div className="mt-3 space-y-1 text-[14px] text-background leading-snug">
                    <p>AI dominates the press, but the press is fatigued.</p>
                    <p>
                      The narratives with low volume and high buyer signal are
                      where positioning still pays.
                    </p>
                  </div>

                  <ol className="mt-7 space-y-5">
                    <li className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5">
                      <span className="font-mono text-[10px] text-background/80 pt-1.5 tabular-nums">
                        01
                      </span>
                      <div>
                        <h3 className="font-serif font-medium text-[clamp(1rem,1.3vw,1.15rem)] text-background leading-snug">
                          GEO / AI Visibility is the open lane in the category.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            5,760 monthly searches; 111 articles in 6 months;
                            8 of 60 AI-model queries.
                          </p>
                          <p>
                            Highest-demand, lowest-supply narrative on the beat
                            &mdash; and no agency has claimed it.
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
                          AI Adoption dominates volume but has already fatigued.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            613 articles &mdash; the most in the category
                            &mdash; but coverage fell 70% February to April.
                          </p>
                          <p>
                            Broad AI talk no longer differentiates in this beat.
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
                          Trust &amp; Credibility just spiked.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            498 articles in April 2026 alone &mdash; more than
                            the prior five months combined.
                          </p>
                          <p>
                            Sentiment is negative-dominant; watch for a second
                            spike.
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
                          Edelman owns AI visibility; the indies are climbing.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            Edelman draws 65% of all GEO queries.
                          </p>
                          <p>
                            Finn Partners and Ruder Finn now outrank
                            FleishmanHillard and Ketchum in AI models.
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
                          Crisis PR in the AI Era is the second white space.
                        </h3>
                        <div className="mt-1.5 space-y-0.5 text-[13.5px] md:text-[14px] text-background/95 leading-snug">
                          <p>
                            1,440 monthly searches, only 64 articles.
                          </p>
                          <p>
                            The 48-hour crisis-window narrative is real, and
                            unowned.
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
              PR and comms leadership teams are being asked to pick which AI
              narrative to attach a positioning bet to. The default is to
              follow press volume. This data shows that produces the worst
              positioning math in the category &mdash; expensive to differentiate
              on, fading in coverage, and undifferentiated in AI engine output.
              The narratives with low press volume and high buyer signal are
              where positioning still pays.
            </p>
          </div>

          {/* Section 1: landscape */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-16 mb-2">
            AI dominates the conversation. But it has already peaked.
          </h2>
          <p>
            Media coverage of the PR/comms agency category broke out in
            November 2025 and accelerated through February 2026 on the back of
            AI transformation reporting. Then it fragmented. AI Adoption fell
            70% from peak by April; GEO continued to climb; Trust &amp;
            Credibility appeared from nothing to 498 articles in a single
            month.
          </p>

          <div className="my-10">
            <NarrativeLandscape />
          </div>

          <p>
            Three different narratives, three different velocities. The
            takeaway is not that the category is loud &mdash; everyone reading
            this knows it is &mdash; but that the loud strand of the
            conversation is the one decelerating. The strand still accelerating
            is the one nobody is competing for.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: stop entering the AI Adoption conversation. Start defining the GEO one.
          </p>

          {/* Section 2: lifecycle */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Eight narratives. Two are wide open. Most are overcrowded.
          </h2>
          <p>
            Sorted by velocity, trajectory, and cross-pillar signal, the
            category breaks into seven roles. Two priority lanes (GEO and
            Crisis PR) sit on a thin supply. One defending position (AI
            Adoption) is overcrowded but unavoidable. One monitor (Trust)
            arrived suddenly and may keep going. The rest are support, context,
            or exit territory.
          </p>

          <div className="my-10">
            <LifecycleTable />
          </div>

          <p>
            The gap between what the industry publishes and what buyers search
            is the entire point of running narrative intelligence on three
            signals instead of one. Two of the eight narratives are
            underserved by an order of magnitude. The remaining six are
            already crowded or already exhausted.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: priority isn&rsquo;t about volume; it&rsquo;s about where the supply gap is widest.
          </p>

          {/* Section 3: white space */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            The industry publishes what it wants to say. Buyers search for what they need.
          </h2>
          <p>
            Plotted on media-vs-search axes, the category sorts cleanly into
            quadrants. GEO sits alone in the high-search, low-coverage quadrant
            with a 0.02x ratio &mdash; severe undersupply. Crisis PR is right
            behind it at 0.04x. Corporate Advocacy Retreat is in the opposite
            corner: heavy negative coverage, almost no buyer demand.
          </p>

          <div className="my-10">
            <WhiteSpaceMatrix />
          </div>

          <p>
            Buyers do not start in Google anymore. They do still start there
            for high-intent commercial queries. The keyword data shows them
            shopping for &ldquo;generative engine optimization&rdquo; and
            &ldquo;crisis communications agency&rdquo; at agency-selection
            CPCs. The press has not figured out that this is happening yet.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: the white-space quadrant is where positioning pays before the rest of the category catches up.
          </p>

          {/* Section 4: entity AI visibility */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Edelman is the category&rsquo;s AI default. Independents are gaining fast.
          </h2>
          <p>
            Across 60 GEO audit queries, Edelman appears in 65% &mdash; nearly
            twice its nearest competitor. That is the headline. The structural
            finding: Finn Partners and Ruder Finn, both independents, now
            outrank FleishmanHillard and Ketchum in AI-generated
            recommendations. AI engines are surfacing the &ldquo;independent
            premium&rdquo; narrative without being prompted.
          </p>

          <div className="my-10">
            <EntityVisibility />
          </div>

          <p>
            Brand-name visibility in AI engines is not the same thing as media
            visibility. Network agencies that dominate share-of-voice in the
            press do not automatically inherit it in AI output. The agencies
            that have invested in citation density, methodology pages, and
            AI-readable formats are the ones showing up in the answers buyers
            see first.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: AI visibility is a separate scoreboard. It is being kept now, and the leaderboard is not the one the trade press would predict.
          </p>

          {/* Section 5: provider breakdown */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            No challenger is provider-specific. Edelman&rsquo;s lead holds across all four engines.
          </h2>
          <p>
            Sliced by AI provider, the top six entities show a remarkably
            stable distribution. Edelman leads on ChatGPT, Claude, Gemini, and
            Perplexity. Weber Shandwick is consistent second across three of
            the four. The model-by-model variation is small, which means
            building visibility on one engine carries to the others &mdash; but
            it also means the gap between leaders and the long tail compounds.
          </p>

          <div className="my-10">
            <ProviderBreakdown />
          </div>

          <p>
            The largest visibility gap in the audit is on the query
            &ldquo;biggest industry trends&rdquo; &mdash; almost no entities
            are cited at all. The category has no spokesperson in AI for its
            most active narrative. That is the cleanest piece of white space in
            the entire dataset.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: AI transformation thought leadership is unclaimed in AI models. It will be claimed by whoever shows up with the citations to back it.
          </p>

          {/* Section 6: search */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            GEO commands premium search demand. The CPC signals serious buyer intent.
          </h2>
          <p>
            Among the 44-keyword universe priced for the category, the GEO
            cluster ($18&ndash;$23 CPC) sits inside the same cost range as
            agency-selection terms like &ldquo;PR firm&rdquo; ($22.38) and
            &ldquo;best PR agency&rdquo; ($18.56). These are not curiosity
            searches. They are buyers running price comparisons.
          </p>

          <div className="my-10">
            <SearchDemand />
          </div>

          <p>
            High CPC means competitive buyer intent &mdash; the people typing
            these terms are making decisions, not researching. The narratives
            the press is loudest on (AI Adoption broadly) are the cheapest to
            advertise against because they have not converted into commercial
            queries. The narratives nobody is publishing on (GEO, Crisis PR
            specialization, Tech PR) are the ones agencies are paying real
            money to capture.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: the keyword market has already priced in what the trade press has not yet noticed.
          </p>

          {/* Resolution */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Five moves. One window.
          </h2>
          <p>
            Synthesizing across signals, the strategic priority order is
            clear. Own GEO now. Build the Crisis-PR-in-the-AI-Era narrative
            second. Differentiate on AI Adoption rather than re-entering it.
            Monitor Trust &amp; Credibility for a second spike. Stop publishing
            on Corporate Advocacy entirely.
          </p>
          <p>
            The window for the first move is the binding constraint. GEO has
            an estimated six-to-twelve-month window before a major agency
            either acquires a credible GEO firm or builds one. Either action
            collapses the white space. The question is not whether someone
            owns this narrative; it is who owns it by the end of 2026.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: if the goal is category authority on AI, the move that earns it is the one nobody else has made yet.
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
                      Media: Perigon News API
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      13,200+ articles collected Oct 27, 2025 &mdash; Apr 27,
                      2026. Earned media only. English language. Reprints
                      deduplicated. Source enrichment applied. Quality filter
                      for entity analysis: PR trade press plus tier-1 business
                      media.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Search: DataForSEO
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      44 keywords with monthly volume and CPC. 500 Edelman
                      ranked keywords. 251-keyword 5-domain intersection across
                      Edelman, Weber Shandwick, FleishmanHillard, Ketchum, and
                      Finn Partners. US market (code 2840). English.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      AI / GEO: Shadow GEO Audit
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      15 prompts × 4 providers (GPT-5, Claude Opus 4, Gemini
                      2.5 Pro, Perplexity Sonar Pro) = 60 queries. 659
                      citations captured. Point-in-time snapshot &mdash; AI
                      responses vary on re-query. Run April 27, 2026.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Sample
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Eight tracked narratives: GEO / AI Visibility, AI
                      Adoption, Trust &amp; Credibility, Crisis PR in the AI
                      Era, Earned Media &amp; Measurement, Consolidation &amp;
                      M&amp;A, Talent &amp; Workforce, Corporate Advocacy
                      Retreat. 20+ entities tracked.
                    </dd>
                  </div>
                  <div className="md:col-span-2">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70">
                      Known limits
                    </dt>
                    <dd className="mt-2 text-[15px] text-background leading-relaxed">
                      Narrative taxonomy is derived from Phase 1 discovery
                      across 655 quality-source articles. Lifecycle
                      classifications are directional. Cross-pillar synthesis
                      and positioning recommendations are Shadow analysis.
                      Entity SOV is relative across the tracked set, not
                      absolute across all agencies; some boutique independents
                      may be underrepresented in the Perigon index.
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
