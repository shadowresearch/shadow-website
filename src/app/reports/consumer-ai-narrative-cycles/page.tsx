import type { Metadata } from "next";
import Link from "next/link";
import { CategoryGrowth } from "./_components/CategoryGrowth";
import { AgenticOvertake } from "./_components/AgenticOvertake";
import { NarrativeSmallMultiples } from "./_components/NarrativeSmallMultiples";
import { NarrativeRanking } from "./_components/NarrativeRanking";
import { AccelerationSlope } from "./_components/AccelerationSlope";
import { Forecast } from "./_components/Forecast";

export const metadata: Metadata = {
  title: "Consumer AI Narrative Cycle Report | Shadow (April 2026)",
  description:
    "Agentic AI overtook generative AI in Q1 2026. Seven consumer AI narratives tracked across 39 months and 200,000+ sources, with buyer intent data, CPC analysis, and a 12-18 month forecast.",
  alternates: {
    canonical: "/reports/consumer-ai-narrative-cycles",
  },
  openGraph: {
    title: "Consumer AI Narrative Cycle Report | Shadow (April 2026)",
    description:
      "Agentic AI overtook generative AI in Q1 2026. Seven consumer AI narratives tracked across 39 months and 200,000+ sources.",
    type: "article",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consumer AI Narrative Cycle Report | Shadow (April 2026)",
    description:
      "Agentic AI overtook generative AI in Q1 2026. Seven narratives tracked across 39 months and 200,000+ sources.",
  },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Agentic AI overtook generative AI in Q1 2026.",
  datePublished: "2026-04-22",
  dateModified: "2026-04-22",
  author: {
    "@type": "Person",
    name: "Jessen Gibbs",
  },
  publisher: {
    "@type": "Organization",
    name: "Shadow",
    url: "https://shadow.inc",
  },
  description:
    "Shadow's Consumer AI Narrative Cycle Report, Edition 1. 39 months of continuous media volume data across 200,000+ sources, covering seven narratives from emergence to dominance.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://shadow.inc/reports/consumer-ai-narrative-cycles",
  },
};

export default function ConsumerAINarrativeCyclesPage() {
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
            <span className="text-foreground">Edition 1</span>
          </nav>


          <h1 className="mt-6 font-serif font-medium text-[clamp(2.25rem,4.5vw,3.75rem)] text-foreground leading-[1.05] tracking-tight">
            Agentic AI overtook generative AI in Q1 2026.
          </h1>

          <p className="mt-8 text-[clamp(0.95rem,1.3vw,1.15rem)] text-muted-foreground leading-[1.7]">
            After two years at the top of the category, generative AI was passed
            by agentic AI in a single quarter. The successor cycle reached peak
            surge 33% faster than the cycle it replaced. For anyone positioning
            a consumer AI company, the window to own the next narrative is
            shorter than it was last time.
          </p>

          <p className="mt-8 text-xs font-mono text-muted-foreground uppercase tracking-wider">
            Analysis by{" "}
            <span className="text-foreground">Shadow, Jessen Gibbs, CEO</span>
            <span className="mx-2">·</span>
            <span>April 2026</span>
            <span className="mx-2">·</span>
            <span>Edition 1</span>
          </p>
        </div>
      </section>

      {/* ━━━ TL;DR ━━━ */}
      <section className="px-8 md:px-16 pb-16">
        <div className="max-w-[960px] mx-auto">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.18em]">
            The finding
          </p>
          <ol className="mt-6 space-y-5 font-serif text-[clamp(1.05rem,1.5vw,1.25rem)] text-foreground leading-[1.55]">
            <li className="flex gap-5">
              <span className="font-mono text-xs text-muted-foreground pt-2 tabular-nums">
                01
              </span>
              <span>
                Agentic AI reached 180,822 quarterly articles in Q1 2026,
                passing generative AI for the first time.
              </span>
            </li>
            <li className="flex gap-5">
              <span className="font-mono text-xs text-muted-foreground pt-2 tabular-nums">
                02
              </span>
              <span>
                Generative AI did not decline. It came back: Q1 2026 volume
                exceeded the original 2023 peak by 11%.
              </span>
            </li>
            <li className="flex gap-5">
              <span className="font-mono text-xs text-muted-foreground pt-2 tabular-nums">
                03
              </span>
              <span>
                Embodied AI grew 188% quarter-over-quarter, the fastest mover
                in the dataset and the likely next dominant cycle.
              </span>
            </li>
            <li className="flex gap-5">
              <span className="font-mono text-xs text-muted-foreground pt-2 tabular-nums">
                04
              </span>
              <span>
                Cycles are compressing by roughly 33% per generation. The next
                peak will arrive in 2 to 3 quarters, not 6.
              </span>
            </li>
            <li className="flex gap-5">
              <span className="font-mono text-xs text-muted-foreground pt-2 tabular-nums">
                05
              </span>
              <span>
                Buyer intent lags media by only 1 to 2 quarters in this
                category, less than half the lag seen in cloud computing.
              </span>
            </li>
          </ol>
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
              Communications teams, strategists, and founders in consumer AI
              are being asked to pick a narrative to position against. That
              decision used to have an 18-month window. This data says it now
              has a 9-month window. Pick late and you are buying into a
              crowded story. Pick wrong and you are paying enterprise CPC for
              a consumer keyword.
            </p>
          </div>

          {/* Context / landscape */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-16 mb-2">
            The category itself is growing, not rotating.
          </h2>
          <p>
            Thirty-nine months of continuous media data, seven narratives,
            over 200,000 English-language news sources. Total volume in Q1
            2026 reached its highest point on record. The standard assumption,
            that each wave of AI coverage cannibalizes the last one, is not
            what the data shows.
          </p>

          <div className="my-10">
            <CategoryGrowth />
          </div>

          <p>
            Every new narrative adds to the aggregate. Nothing dies cleanly.
            That matters because it changes the question from &ldquo;which
            narrative do I ride this year&rdquo; to &ldquo;which narratives can
            I credibly hold at once.&rdquo;
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: positioning is a portfolio problem, not a switching
            problem.
          </p>

          {/* Tension */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            The successor arrived faster than the incumbent expected.
          </h2>
          <p>
            Agentic AI first appeared at meaningful volume in Q1 2024. It hit
            its inflection in Q4 2024, when quarterly growth reached 201.8%.
            By Q1 2026 it was at 180,822 articles per quarter, the single
            largest narrative volume in the dataset. March 2026 alone produced
            98,484 articles.
          </p>

          <div className="my-10">
            <AgenticOvertake />
          </div>

          <p>
            The acceleration was anchored by specific corporate events:
            Salesforce Agentforce, Microsoft Copilot agents, and the broader
            enterprise AI agent ecosystem that consolidated in late 2024. But
            the mechanism under all of it is compression. Agentic AI covered
            the same ground generative AI covered, one quarter shorter per
            stage.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: the next cycle will arrive faster still.
          </p>

          {/* Exploration 1: per-narrative shapes */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Each narrative has its own shape, and the shape is the strategy.
          </h2>
          <p>
            Three narratives are surging: agentic, embodied, and personal AI.
            Three are cyclical: generative, safety, and companion. One is
            fading into a capability descriptor: multimodal. Laid side by
            side, the shapes tell you how to position.
          </p>

          <div className="my-10">
            <NarrativeSmallMultiples />
          </div>

          <p>
            A sawtooth shape (AI companion) says buyers are reacting to
            products, not narratives. A shallow wave with a reactive tail (AI
            safety) says coverage is event-driven, not campaignable. A steep,
            unbroken climb (embodied AI) says a corporate anchor has claimed
            the term and the cycle is live.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: pick the shape that matches the story you can actually
            tell.
          </p>

          {/* Exploration 2: ranking */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Coverage is concentrating at the top.
          </h2>
          <p>
            Agentic AI and generative AI together accounted for 80% of all
            narrative-tagged coverage in Q1 2026. The long tail, safety,
            companion, embodied, personal, multimodal, split the remaining
            20%.
          </p>

          <div className="my-10">
            <NarrativeRanking />
          </div>

          <p>
            Concentration at the top creates two distinct plays. Fight for
            share of voice inside the crowded stories, where buyer intent is
            already priced in (agentic AI SDK keywords run $20 to $136 per
            click). Or build position in a thinner narrative before the crowd
            arrives.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: the tail is where differentiation is still cheap.
          </p>

          {/* Exploration 3: acceleration */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Embodied AI is the fastest mover of the quarter.
          </h2>
          <p>
            Ranked by quarter-over-quarter growth, embodied AI is the
            standout: 187.7% in Q1 2026. Personal AI is the next fastest at
            123%. Agentic AI, despite its scale, grew at 85.5%. Growth rates
            invert the volume ranking.
          </p>

          <div className="my-10">
            <AccelerationSlope />
          </div>

          <p>
            Embodied AI has the structural pattern of a dominant cycle in
            formation: multiple simultaneous corporate anchors (NVIDIA, the
            Chinese government, humanoid robotics companies), a logical
            semantic progression from generative to agentic to embodied, and
            active sub-narrative absorption. At the equivalent lifecycle
            stage, agentic AI was growing at roughly half this rate.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: the next 180K-article quarter is already visible in the
            data.
          </p>

          {/* Exploration 4: resurgence paradox */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            Generative AI did not die. It got repurposed.
          </h2>
          <p>
            Q1 2026 quarterly volume for generative AI reached 138,689. That
            exceeds the original 2023 peak of 124,440 by 11%. The standard
            narrative-lifecycle model does not predict this. The Gartner Hype
            Cycle does not predict this.
          </p>
          <p>
            What happened is a term-level evolution. &ldquo;Generative
            AI&rdquo; in 2023 was a novelty label attached to ChatGPT and
            wonder. &ldquo;Generative AI&rdquo; in 2026 is an enterprise
            deployment category. Same words, different editorial weight.
            Coverage shifted from &ldquo;what is this&rdquo; to &ldquo;how is
            it being implemented.&rdquo;
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: no narrative needs to be abandoned, only reframed.
          </p>

          {/* Resolution / forecast */}
          <h2 className="font-serif text-[clamp(1.75rem,2.75vw,2.25rem)] tracking-tight mt-20 mb-2">
            The forecast: embodied peaks in late 2026.
          </h2>
          <p>
            Applying the observed 33% compression pattern to the current
            inflection point, embodied AI reaches peak surge between Q4 2026
            and Q1 2027. Agentic AI continues its climb through mid-2026
            before decelerating. Generative AI holds as a resurgent baseline.
          </p>

          <div className="my-10">
            <Forecast />
          </div>

          <p>
            Three things could break this forecast: a major robotics safety
            incident that kills embodied momentum, regulatory action on
            autonomous systems, or NVIDIA rebranding away from &ldquo;physical
            AI.&rdquo; None look likely in the next two quarters. The
            positioning window for embodied AI is open now and closes in Q3
            2026.
          </p>
          <p className="border-l-2 border-primary pl-4 font-serif italic text-foreground">
            So what: if you are waiting for embodied AI to feel obvious, the
            window has already closed.
          </p>
        </div>
      </article>

      {/* ━━━ Methodology ━━━ */}
      <section className="px-8 md:px-16 pb-16">
        <div className="max-w-[960px] mx-auto rounded-2xl border border-border bg-background p-8 md:p-10">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.18em]">
            Methodology
          </p>
          <h3 className="mt-3 font-serif text-2xl">How we did this.</h3>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Analysis by Shadow. Jessen Gibbs, CEO, is the named analyst.
          </p>

          <dl className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 text-sm">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Sources
              </dt>
              <dd className="mt-2 text-foreground leading-relaxed">
                Perigon News Intelligence API (200,000+ English-language
                sources); DataForSEO search volume and CPC data (US market);
                Shadow analysis.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Date range
              </dt>
              <dd className="mt-2 text-foreground leading-relaxed">
                January 2023 through March 2026, 39 continuous months.
                Quarterly aggregation.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Sample
              </dt>
              <dd className="mt-2 text-foreground leading-relaxed">
                Seven tracked narratives: agentic AI, generative AI, AI safety,
                AI companion, embodied AI, personal AI, multimodal AI. Buyer
                intent cross-referenced against 40 keywords.
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Exclusions
              </dt>
              <dd className="mt-2 text-foreground leading-relaxed">
                Non-English press. Enterprise-only trade publications below
                standard distribution thresholds. Paid-placement content where
                editorially flagged.
              </dd>
            </div>
            <div className="md:col-span-2">
              <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Known limits
              </dt>
              <dd className="mt-2 text-foreground leading-relaxed">
                Projections assume the 33% cycle-compression pattern holds and
                no major regulatory or corporate-anchor shock. Projections are
                drawn as dashed lines and labeled on every chart. Volume
                tagging is keyword-based; ambiguous articles may count against
                more than one narrative.
              </dd>
            </div>
          </dl>
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
