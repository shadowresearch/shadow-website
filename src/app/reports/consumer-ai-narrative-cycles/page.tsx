import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "../../_components/CTASection";
import { NarrativeChart } from "./_components/NarrativeChart";

export const metadata: Metadata = {
  title: "Consumer AI Narrative Cycle Report | Shadow (April 2026)",
  description:
    "Seven consumer AI narratives tracked across 39 months and 200,000+ sources: agentic AI, generative AI, embodied AI, AI companion, personal AI, multimodal AI, and AI safety. Includes buyer intent data, CPC analysis, and 12-18 month forecast.",
  alternates: {
    canonical: "/reports/consumer-ai-narrative-cycles",
  },
  openGraph: {
    title: "Consumer AI Narrative Cycle Report | Shadow (April 2026)",
    description:
      "Seven consumer AI narratives tracked across 39 months and 200,000+ sources. Buyer intent data, CPC analysis, and 12-18 month forecast from Shadow.",
    type: "article",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consumer AI Narrative Cycle Report | Shadow (April 2026)",
    description:
      "Seven consumer AI narratives tracked across 39 months and 200,000+ sources. Buyer intent data, CPC analysis, and 12-18 month forecast from Shadow.",
  },
};

export default function ConsumerAINarrativeCyclesPage() {
  return (
    <div className="flex flex-col">
      <article className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground font-mono mb-10">
            <Link href="/reports" className="hover:text-foreground transition-colors">
              Reports
            </Link>
            <span className="text-border">/</span>
            <span className="text-foreground">Edition 1</span>
          </nav>

          {/* Title */}
          <h1 className="font-serif text-3xl md:text-4xl text-foreground leading-tight tracking-tight">
            Narrative Cycle Report: Consumer AI
          </h1>

          {/* Meta */}
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <span>A Shadow Market Analysis</span>
            <span className="text-border">&middot;</span>
            <span>April 2026</span>
            <span className="text-border">&middot;</span>
            <span>Edition 1</span>
          </div>

          {/* Description */}
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A data-driven analysis of how media narratives evolve within
            consumer AI and what that means for companies trying to position
            themselves. Each edition tracks monthly media volume across
            200,000+ global news sources, cross-references it against search
            demand and commercial intent data, and produces a forward-looking
            forecast of which narratives will dominate next, and when.
          </p>

          {/* Divider */}
          <div className="mt-10 mb-10 border-t border-border" />

          {/* Body */}
          <div className="space-y-6 text-base leading-relaxed text-foreground">

            {/* 1. Category Snapshot */}
            <h2 className="font-heading font-semibold text-2xl text-foreground mt-12 mb-4">
              1. The Category Snapshot
            </h2>

            <p>
              The term generating the most media coverage in consumer AI right
              now is not the one that dominated 18 months ago. And the term that
              will dominate 12 months from now is already accelerating at 188%
              quarter-over-quarter growth.
            </p>
            <p>
              We tracked seven distinct narratives across 39 months of
              continuous media data (January 2023 through March 2026), covering
              over 200,000 English-language news sources. Here is where each one
              sits today:
            </p>

            <DataTable
              headers={["Narrative", "Role", "Phase", "Q1 2026 Vol.", "QoQ Growth", "Buyer Alignment"]}
              rows={[
                ["Agentic AI", "Dominant", "Peak Surge", "180,822", "+85.5%", "Aligned"],
                ["Generative AI", "Predecessor", "Resurgence", "138,689", "+18.5%", "Aligned"],
                ["AI Safety", "Counter", "Reactive", "12,638", "+46.2%", "Decoupled"],
                ["AI Companion", "Emerging", "Early Accel.", "10,567", "+35.2%", "Misaligned"],
                ["Embodied AI", "Emerging", "Acceleration", "6,790", "+187.7%", "Media Leads"],
                ["Personal AI", "Emerging", "Pre-Accel.", "5,421", "+123.0%", "Market Leads"],
                ["Multimodal AI", "Emerging", "Incubation", "4,237", "+7.0%", "Market Leads"],
              ]}
            />

            <p>
              The conventional view is that consumer AI is an &ldquo;agentic AI&rdquo;
              story right now, and that positioning efforts should focus there.
              The data partially supports this. Agentic AI has the strongest
              media-buyer alignment of any narrative: high coverage volume, high
              search demand (110,000 monthly searches), and the deepest enterprise
              CPC pool ($20 to $136 per click). But it also reveals something the
              conventional view misses: narrative cycles in this category are
              compressing by roughly 33% each generation, the successor cycle is
              already in motion, and the window to position for it is shorter
              than most companies assume.
            </p>

            {/* 2. The Cycle Data */}
            <h2 className="font-heading font-semibold text-2xl text-foreground mt-12 mb-4">
              2. The Cycle Data
            </h2>

            <div className="my-8 p-6 md:p-8 border border-border rounded-lg bg-muted/20">
              <NarrativeChart />
            </div>

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              Generative AI: The predecessor that refused to decline
            </h3>
            <p>
              Generative AI established the first complete narrative cycle in
              our dataset. It emerged in January 2023 at 4,681 articles, surged
              to a peak of 124,440 articles per quarter in Q2 2023 (driven
              almost entirely by ChatGPT coverage), then entered a sustained
              decline through Q1 2025, bottoming at 80,999 per quarter. A 35%
              drawdown from peak.
            </p>
            <p>
              Then it did something the standard lifecycle model doesn&apos;t
              predict: it came back. Q1 2026 volume reached 138,689, exceeding
              the original peak by 11%. The coverage shifted from hype
              (&ldquo;what is generative AI?&rdquo;) to implementation
              (&ldquo;how enterprises are deploying generative AI&rdquo;). The
              term evolved from a novelty descriptor to an operational category.
            </p>
            <p className="text-sm text-muted-foreground">
              Cycle timing: 6 quarters from first signal to peak surge. 8
              quarters from peak to trough. Resurgence began ~10 quarters after
              peak.
            </p>

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              Agentic AI: The dominant cycle, still accelerating
            </h3>
            <p>
              Agentic AI first appeared at meaningful volume in Q1 2024 (2,931
              articles per quarter). It hit its inflection point in Q4 2024,
              when quarter-over-quarter growth reached 201.8%. By Q1 2026, it
              had reached 180,822 articles per quarter, with no plateau signal
              yet. March 2026 alone produced 98,484 articles, the single
              highest-volume month for any narrative in the dataset.
            </p>
            <p>
              The acceleration was anchored by specific corporate events:
              Salesforce&apos;s Agentforce launch, Microsoft&apos;s Copilot
              agent framework, and the broader enterprise AI agent ecosystem
              that consolidated in late 2024.
            </p>
            <p className="text-sm text-muted-foreground">
              Cycle timing: 4 quarters from first signal to peak surge.
              That&apos;s 33% faster than generative AI&apos;s equivalent
              journey.
            </p>

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              Embodied AI: The fastest-growing narrative in the dataset
            </h3>
            <p>
              Embodied AI was essentially invisible before 2025. Quarterly
              volumes were below 400 through all of 2024. Then Q1 2025 hit 801,
              Q3 2025 reached 1,946, and Q1 2026 exploded to 6,790: a 187.7%
              quarter-over-quarter acceleration. March 2026 alone produced 3,877
              articles.
            </p>
            <p>
              What makes this trajectory distinctive is the presence of multiple
              simultaneous corporate anchors. NVIDIA has been seeding
              &ldquo;physical AI&rdquo; as a parallel term. The Chinese
              government designated embodied AI as a strategic national priority
              in 2025. And the humanoid robotics wave (Figure, Tesla Optimus,
              Agility Robotics) is generating coverage that increasingly folds
              into the &ldquo;embodied AI&rdquo; umbrella. At the equivalent
              lifecycle stage, agentic AI was growing at roughly half this rate.
            </p>

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              AI Companion and Personal AI: Two terms, one convergence
            </h3>
            <p>
              &ldquo;AI Companion&rdquo; has been present in the dataset since
              Q1 2024, but its pattern is unusual. Rather than sustained
              acceleration, it follows a sawtooth: volume spikes on product
              events (Character.AI milestones, Meta&apos;s companion features)
              then retreats. Q1 2026 at 10,567 is its highest quarter, but the
              growth is uneven. No corporate anchor has claimed the term.
            </p>
            <p>
              &ldquo;Personal AI&rdquo; follows a different trajectory. Volume
              is lower (5,421 in Q1 2026) but more consistent, and the Q1 2026
              growth rate of 123% suggests early acceleration. More importantly,
              buyer intent signals for &ldquo;personal AI assistant&rdquo;
              (14,800 monthly searches, $6.45 CPC) are forming ahead of media
              coverage. In most narratives, media leads buyers. Here, buyers are
              leading media.
            </p>
            <p>
              These two terms are converging toward the same narrative space: AI
              that is individually yours, that knows your context, that adapts
              to you. &ldquo;Personal AI&rdquo; is the broader frame. It can
              absorb &ldquo;companion&rdquo; (consumer) while extending into
              enterprise use cases.
            </p>

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              The Compression Finding
            </h3>
            <p>
              The most operationally significant pattern in the data: each
              successive dominant narrative reaches peak surge faster than
              its predecessor.
            </p>
            <DataTable
              headers={["Narrative", "Quarters to Peak Surge", "Compression vs. Prior"]}
              rows={[
                ["Generative AI", "6 quarters", "Baseline"],
                ["Agentic AI", "4 quarters", "33% faster"],
                ["Embodied AI (est.)", "2\u20133 quarters", "Est. 50%+ faster"],
              ]}
            />
            <p>
              If this pattern holds, the next dominant cycle will reach peak
              surge in 2 to 3 quarters from its inflection point. For companies
              trying to time their positioning, this means the window between
              &ldquo;this narrative is emerging&rdquo; and &ldquo;this narrative
              is peaking&rdquo; is shrinking from 18 months to under 12.
            </p>

            {/* 3. The Buyer Map */}
            <h2 className="font-heading font-semibold text-2xl text-foreground mt-12 mb-4">
              3. The Buyer Map
            </h2>

            <p>
              Media coverage tells you what the press is writing about. It does
              not tell you where buyers are spending. We cross-referenced the
              narrative volume data against search demand and cost-per-click
              (CPC) data across 40 keywords to measure actual commercial intent.
            </p>

            <DataTable
              headers={["Narrative", "Media Status", "Search Vol.", "CPC Range", "Alignment"]}
              rows={[
                ["Agentic AI", "Peak Surge (181K/Q)", "110K + 60.5K/mo", "$20.65\u2013$136.19", "Aligned"],
                ["Generative AI", "Resurgent (139K/Q)", "60.5K + 18.1K/mo", "$11.40\u2013$16.14", "Aligned"],
                ["Embodied AI", "Accelerating (6.8K/Q)", "1.9K + 3.6K/mo", "$6.50\u2013$11.25", "Media Leads"],
                ["Personal AI", "Pre-Accel. (5.4K/Q)", "3.6K + 14.8K/mo", "$5.02\u2013$6.45", "Market Leads"],
                ["AI Companion", "Early Accel. (10.6K/Q)", "14.8K + 3.6K/mo", "$2.67\u2013$3.50", "Misaligned"],
                ["AI Safety", "Reactive (12.6K/Q)", "2.4K/mo", "$29.42", "Decoupled"],
              ]}
            />

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              Where media and money are aligned
            </h3>
            <p>
              Agentic AI has the strongest media-buyer alignment in the dataset.
              The &ldquo;AI agent SDK&rdquo; keyword at $136.19 per click
              signals enterprises in active procurement mode. Generative AI
              remains aligned but more competitive; lower CPC ($11.40) indicates
              a saturated, mature buyer market.
            </p>

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              Where media runs ahead of buyers
            </h3>
            <p>
              Embodied AI has growing media attention but thin buyer pools.
              Search volume for &ldquo;embodied AI&rdquo; is 1,900/month at
              $11.25 CPC. The CPC exists (some enterprises are bidding) but the
              volume is thin. Applying the 1\u20132 quarter media-to-buyer lag, buyer
              pool formation signals should appear by Q2\u2013Q3 2026.
            </p>

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              Where buyers run ahead of media
            </h3>
            <p>
              &ldquo;Personal AI assistant&rdquo; generates 14,800 monthly
              searches at $6.45 CPC, but &ldquo;personal AI&rdquo; as a media
              narrative only produced 5,421 articles in Q1 2026. Buyers are
              looking for something the press hasn&apos;t fully named yet.
            </p>

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              Where media and money are misaligned
            </h3>
            <p>
              AI Companion generates meaningful media coverage (10,567 articles)
              and meaningful search volume (14,800/month) but CPC is $2.67. For
              comparison, agentic AI keywords range from $20 to $136. Low CPC
              means consumer browsing, not enterprise evaluation.
            </p>

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              The media-to-buyer lag
            </h3>
            <p>
              In this category, the lag between media narrative acceleration and
              buyer pool formation is 1 to 2 quarters. This is unusually short
              compared to prior technology cycles (cloud computing showed a 4 to
              6 quarter lag). When you see a narrative accelerating in media, the
              buyer window opens within 3 to 6 months, not 12 to 18.
            </p>

            {/* 4. The Overlooked Signal */}
            <h2 className="font-heading font-semibold text-2xl text-foreground mt-12 mb-4">
              4. The Overlooked Signal: The Resurgence Paradox
            </h2>

            <p>
              The most counterintuitive finding in this dataset is a number:{" "}
              <span className="font-semibold">138,689</span>.
            </p>
            <p>
              That&apos;s the quarterly article count for &ldquo;generative
              AI&rdquo; in Q1 2026. It exceeds the original peak of 124,440 in
              Q2 2023 by 11%.
            </p>
            <p>
              This shouldn&apos;t happen. The standard narrative lifecycle model,
              and the Gartner Hype Cycle that most of the market uses as a mental
              model, assumes each cycle declines permanently once its successor
              emerges. Generative AI was supposed to be the term that peaked in
              2023, faded through 2024, and settled into background noise as
              &ldquo;agentic AI&rdquo; took over. Instead, it came back stronger.
            </p>
            <p>
              What&apos;s happening is a term-level evolution. &ldquo;Generative
              AI&rdquo; in 2023 was a novelty label attached to ChatGPT and
              wonder. &ldquo;Generative AI&rdquo; in 2026 is an enterprise
              deployment category. The coverage shifted from &ldquo;what is
              this?&rdquo; to &ldquo;how is it being implemented?&rdquo; The
              same words now carry different editorial weight.
            </p>
            <p>
              This pattern is invisible to snapshot analysis. It only becomes
              visible when you lay the curve against 39 months of continuous data
              and the lifecycle assumption breaks down.
            </p>

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              The implications
            </h3>
            <p>
              First, the total addressable narrative volume in consumer AI is
              expanding, not rotating. Each new narrative adds to the total
              rather than stealing share from its predecessors.
            </p>
            <p>
              Second, companies don&apos;t need to &ldquo;get off&rdquo; a
              narrative before it peaks. The fear that being associated with
              &ldquo;generative AI&rdquo; makes you look dated is contradicted
              by the data. The term still commands 138,000+ articles per quarter.
            </p>
            <p>
              Third, the portfolio approach outperforms the serial approach.
              Companies that are credible across multiple narrative layers
              simultaneously have more surface area for media coverage and buyer
              engagement than companies that ride one wave and try to jump to
              the next.
            </p>

            {/* 5. The Forecast */}
            <h2 className="font-heading font-semibold text-2xl text-foreground mt-12 mb-4">
              5. The Forecast
            </h2>

            <p>
              Based on 39 months of cycle data, compression patterns, and buyer
              intent signals, here is where we see consumer AI narratives
              heading over the next 12 to 18 months.
            </p>

            <DataTable
              headers={["Narrative", "Confidence", "Classification", "Est. Timing"]}
              rows={[
                ["Embodied AI", "High (75%)", "Successor", "Peak surge Q4 2026\u2013Q2 2027"],
                ["Personal AI", "Mod-High (60%)", "Parallel (consumer)", "Peak surge H2 2027\u2013H1 2028"],
                ["Multimodal AI", "Low (30%)", "Absorption risk", "Unlikely as independent cycle"],
              ]}
            />

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              Embodied AI: the next dominant narrative (75% confidence)
            </h3>
            <p>
              Embodied AI is following the same trajectory as agentic AI, but
              faster. At the equivalent lifecycle stage, agentic AI was growing
              at half the rate. Applying the 33% compression pattern, peak surge
              arrives in 2 to 3 quarters from the current inflection: late 2026
              to early 2027. The narrative has structural advantages: multiple
              simultaneous corporate anchors (NVIDIA, Chinese government,
              humanoid robotics companies), a logical semantic progression
              (generative to agentic to embodied), and active sub-narrative
              absorption.
            </p>
            <p>
              What could change this: a major robotics safety incident,
              regulatory action on autonomous systems, or NVIDIA rebranding away
              from &ldquo;physical AI.&rdquo; None are likely in the near term.
            </p>

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              Personal AI: the parallel consumer narrative (60% confidence)
            </h3>
            <p>
              &ldquo;Personal AI&rdquo; and &ldquo;AI Companion&rdquo; are
              converging, and &ldquo;personal AI&rdquo; is the broader, more
              durable label. Buyer intent data shows real demand forming (14,800
              monthly searches) ahead of media attention. This narrative will
              not replace agentic or embodied in business press. It will grow in
              parallel across consumer, lifestyle, and culture beats. The
              ignition event needed: a consumer AI product reaching 100M+ users
              under the &ldquo;personal AI&rdquo; label.
            </p>

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              Multimodal AI: absorption, not ascension (30% confidence)
            </h3>
            <p>
              &ldquo;Multimodal AI&rdquo; is growing but decelerating (7.0% QoQ
              in Q1 2026, down from 47.7% a year earlier). No corporate anchor
              has claimed the term exclusively. It is being absorbed as a
              capability descriptor (&ldquo;multimodal agents,&rdquo;
              &ldquo;multimodal models&rdquo;), following the pattern of
              &ldquo;cloud-native&rdquo; in the 2010s.
            </p>

            {/* 6. Positioning Windows */}
            <h2 className="font-heading font-semibold text-2xl text-foreground mt-12 mb-4">
              6. The Positioning Windows
            </h2>

            <p>
              Three distinct positioning windows open in the next 12 to 18
              months. Each suits a different company profile.
            </p>

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              Window 1: The Embodied AI Bridge (Now through Q3 2026)
            </h3>
            <WindowTable rows={[
              ["Best for", "Companies with robotics, hardware, spatial computing, or simulation products. Also AI infrastructure companies whose technology enables physical AI applications."],
              ["What it requires", "A credible connection between your product and AI systems that interact with the physical world. This doesn't require building robots. It requires articulating how your technology enables them."],
              ["Timing", "Position now. The window between \"early adopter credibility\" and \"everyone is claiming this\" is 2\u20133 quarters based on the compression pattern."],
              ["Risk if early", "Low. The media is covering it (6,790 articles last quarter) and buyer signals exist ($11.25 CPC)."],
              ["Risk if late", "High. By peak surge (est. Q4 2026\u2013Q2 2027), the narrative will be crowded. Differentiation becomes expensive."],
            ]} />

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              Window 2: The Personal AI Thought Leadership Play (Now through H1 2027)
            </h3>
            <WindowTable rows={[
              ["Best for", "Consumer AI products, AI assistant platforms, enterprise personalization companies, and wearable AI companies."],
              ["What it requires", "A perspective on what \"personal AI\" means that goes beyond features. The companies that own this narrative will articulate the implications: privacy, identity, cognitive extension."],
              ["Timing", "Wider window (narrative is earlier in lifecycle). But buyer signals (14,800 monthly searches at $6.45 CPC) indicate demand exists now."],
              ["Risk if early", "Minimal. You're speaking to an audience that's already searching for this concept."],
              ["Risk if late", "Moderate. Once a cultural ignition event occurs, the narrative will accelerate rapidly and the thought leadership window will close."],
            ]} />

            <h3 className="font-heading font-semibold text-xl text-foreground mt-8 mb-3">
              Window 3: The Portfolio Position (Ongoing)
            </h3>
            <WindowTable rows={[
              ["Best for", "AI platform companies, infrastructure providers, and any company whose technology spans multiple AI application domains."],
              ["What it requires", "Credibility across at least two active narratives simultaneously. The resurgence paradox tells us narratives in this category don't cannibalize each other; they layer."],
              ["Timing", "Structural advantage, not a moment in time. Requires investing in messaging across narratives now, while the current cycle is still dominant."],
              ["Risk", "Dilution. Being in two narratives without depth reads as unfocused. The portfolio approach works when each position is backed by specific, verifiable evidence."],
            ]} />

            <p>
              The difference between companies that ride narrative cycles and
              companies that get caught in them comes down to one thing: whether
              they&apos;re watching continuous data or reacting to what everyone
              else is already talking about. By the time a narrative feels
              obvious, the positioning window is already closing.
            </p>

            {/* Methodology */}
            <div className="mt-16 pt-8 border-t border-border">
              <h2 className="font-heading font-semibold text-sm text-muted-foreground tracking-wide uppercase mb-4">
                Methodology
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Media volume data sourced from Perigon News Intelligence API,
                covering 200,000+ global English-language sources. Monthly article
                counts tracked continuously from January 2023 through March 2026
                (39 months). Search volume and CPC data sourced from DataForSEO,
                reflecting US market conditions. Buyer intent classification based
                on CPC thresholds cross-referenced against search volume. Cycle
                forecasting based on observed compression patterns, growth
                trajectory comparison at equivalent lifecycle stages, and
                corporate anchor analysis.
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                Shadow Narrative Cycle Intelligence, Edition 1. Published April
                2026.
              </p>
            </div>
          </div>
        </div>
      </article>

      <CTASection
        heading="Want this analysis for your category?"
        body="Shadow runs Narrative Cycle Intelligence across any market. Book a demo to see what the data looks like for your clients' space."
        primaryLabel="Book a demo"
        secondaryLabel="Back to Reports"
        secondaryHref="/reports"
      />
    </div>
  );
}

/* ── Helper components ─────────────────────────────────────────────── */

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-6 overflow-x-auto -mx-6 px-6">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-border">
            {headers.map((h) => (
              <th
                key={h}
                className="py-2 pr-4 text-left text-xs font-medium text-muted-foreground tracking-wide uppercase whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/50">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`py-2.5 pr-4 whitespace-nowrap ${
                    j === 0
                      ? "font-medium text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function WindowTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="my-4 overflow-x-auto -mx-6 px-6">
      <table className="w-full text-sm border-collapse">
        <tbody>
          {rows.map(([label, value]) => (
            <tr key={label} className="border-b border-border/50">
              <td className="py-2.5 pr-4 font-medium text-foreground whitespace-nowrap align-top w-32">
                {label}
              </td>
              <td className="py-2.5 text-muted-foreground">
                {value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
