import { ResourceH2, ResourceH3 } from "../_components/ResourcePage";

export default function IdentifyNarrativePositionsContent() {
  return (
    <>
      <p>
        <em>By Jessen Gibbs, CEO, Shadow</em>
        <br />
        <em>Last updated: April 2026</em>
      </p>

      <ResourceH2>How to Identify Narrative Positions Your Brand Can Own</ResourceH2>

      <p>
        Identifying narrative positions to own is a three-stage process: map the narrative landscape, find the white space where demand exceeds occupation, and score each opportunity against your brand&apos;s credibility and resources. The goal is to find positions where audience interest is high, competitive occupation is low, and your brand has a legitimate claim. This framework replaces the traditional approach of crafting messaging internally and pushing it outward with an outside-in method that starts from what the market actually looks like.
      </p>

      <ResourceH2>What Is a Narrative Position?</ResourceH2>

      <p>
        A narrative position is a specific claim that a brand occupies in the public conversation across media, search, social, and AI channels. It is not a tagline, a brand message, or a positioning statement written for internal alignment. A narrative position is measured by whether the brand is actually associated with the claim when audiences, journalists, and AI systems encounter it. &quot;We help agencies scale&quot; is a message. &quot;The company that proved independent agencies can operate at holdco scale using AI&quot; is a narrative position, because it can be measured in coverage, search rankings, AI citations, and audience association.
      </p>

      <ResourceH2>Stage 1: How Do You Map the Narrative Landscape?</ResourceH2>

      <p>
        Narrative mapping is the first stage. The objective is to inventory every active narrative in your category, classify its lifecycle stage, and identify which brands are associated with each narrative. This requires data from all four signal layers: media, search, social, and AI.
      </p>

      <ResourceH3>Media signal mapping</ResourceH3>

      <p>
        Use media monitoring data to identify the narratives generating coverage in your category. Track article volume per narrative theme over the past 12-18 months. Classify coverage by outlet tier (tier-one national, trade, regional) and sentiment. Tools like Cision, Meltwater, and Perigon News Intelligence API provide this data. Map which brands are quoted, mentioned, or positioned as leaders within each narrative thread.
      </p>

      <ResourceH3>Search demand mapping</ResourceH3>

      <p>
        Overlay search data to see which narratives have audience demand behind them. A narrative with high media coverage but no search volume is a press conversation, not a market opportunity. Use keyword research tools (Semrush, Ahrefs, DataForSEO) to track monthly search volume, keyword difficulty, and commercial intent (CPC as a proxy for buyer intent) for queries associated with each narrative. The most valuable positions sit at the intersection of rising media coverage and rising search demand.
      </p>

      <ResourceH3>Social and AI signal mapping</ResourceH3>

      <p>
        Add social conversation data from platforms like Brandwatch, Pulsar, or Sprinklr to capture narratives forming in communities before they hit media. Layer in AI citation data by auditing how LLMs respond to category queries, comparison prompts, and use-case questions. Shadow&apos;s GEO audit methodology queries ChatGPT, Claude, Gemini, and Perplexity with 15-50 prompts to map which brands are recommended, cited, and described for each narrative position.
      </p>

      <ResourceH2>Stage 2: How Do You Find Narrative White Space?</ResourceH2>

      <p>
        White space is a narrative position where meaningful audience demand exists but no brand has established dominant ownership. Finding white space requires overlaying three data sets from your narrative map: competitive occupation, audience demand, and lifecycle stage.
      </p>

      <ResourceH3>The white space identification framework</ResourceH3>

      <div className="my-6 overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr>
              <th className="border border-border px-3 py-2 text-left font-semibold">Criterion</th>
              <th className="border border-border px-3 py-2 text-left font-semibold">Measurement</th>
              <th className="border border-border px-3 py-2 text-left font-semibold">Threshold for &quot;available&quot;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-3 py-2 align-top">Competitive occupation</td>
              <td className="border border-border px-3 py-2 align-top">Share of coverage, search rankings, and AI citations held by the leading brand</td>
              <td className="border border-border px-3 py-2 align-top">Below 40% combined share (no single brand dominates)</td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 align-top">Audience demand</td>
              <td className="border border-border px-3 py-2 align-top">Monthly search volume for narrative-adjacent queries</td>
              <td className="border border-border px-3 py-2 align-top">Above 500 monthly searches with commercial intent indicators</td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 align-top">Lifecycle stage</td>
              <td className="border border-border px-3 py-2 align-top">Narrative classified as emerging, accelerating, peak, declining, or saturated</td>
              <td className="border border-border px-3 py-2 align-top">Emerging or accelerating (peak is contestable but expensive; declining and saturated are avoid)</td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 align-top">AI visibility gap</td>
              <td className="border border-border px-3 py-2 align-top">Percentage of AI responses that mention the leading brand for this narrative</td>
              <td className="border border-border px-3 py-2 align-top">Below 30% (opportunity for new entrant to be cited)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        White space is most abundant at the intersection of emerging narratives (where no brand has yet claimed the position) and rising search demand (where audiences are starting to look for solutions). The narrative graph automates this analysis by continuously scoring positions across all four criteria. Without a unified data system, this analysis requires manual export and correlation across multiple tools, which typically takes weeks and produces a static snapshot that ages quickly.
      </p>

      <ResourceH2>Stage 3: How Do You Score Positions for Fit?</ResourceH2>

      <p>
        Not every available position is worth pursuing. Position scoring evaluates each white space opportunity against your brand&apos;s specific ability to claim and defend it. A position your brand cannot credibly hold is a liability, not an asset.
      </p>

      <ResourceH3>The position scoring criteria</ResourceH3>

      <ul className="my-4 space-y-2 list-disc pl-6">
        <li>Credibility: Does the brand have proof points (customers, case studies, product capabilities, third-party validation) that support this position? A brand claiming &quot;narrative intelligence&quot; without a product that tracks narratives will be fact-checked by journalists and AI systems alike.</li>
        <li>Content footprint: Does the brand have existing content (website pages, resources, press coverage) that supports the position? Content footprint affects how quickly AI systems and search engines will associate the brand with the narrative.</li>
        <li>Executive voice: Can the brand&apos;s spokesperson speak to this position authentically and with conviction? Narrative positions that require the executive to perform something they do not genuinely believe will crack under interview pressure.</li>
        <li>Defensibility: Can the brand sustain this position against competitive entry? Positions based on proprietary technology, unique data, or first-hand experience are more defensible than positions based on generic claims.</li>
        <li>Resource alignment: Does pursuing this position align with existing program priorities, or does it require a new content and media relations effort from scratch?</li>
      </ul>

      <ResourceH2>What Are Common Mistakes in Narrative Positioning?</ResourceH2>

      <ul className="my-4 space-y-2 list-disc pl-6">
        <li>Positioning from the inside out: Starting with what the brand wants to say rather than what the landscape allows. The strongest positions are identified from outside in, using data about what the market actually looks like.</li>
        <li>Chasing saturated narratives: Entering a narrative where incumbents hold strong positions. In the AI for PR category, &quot;AI-powered media monitoring&quot; is saturated: Cision and Meltwater dominate coverage, search, and AI citations. Contesting this position requires outsized resources with uncertain return.</li>
        <li>Conflating awareness with position: Having your brand mentioned is not the same as holding a position. Position ownership means audiences, journalists, and AI systems associate your brand specifically with a narrative claim, not just the category.</li>
        <li>Skipping the AI layer: Teams that audit media coverage and search rankings but ignore how LLMs are describing their category are working with an incomplete map. As of 2025, 73% of B2B buyers use AI in their research process (University of Toronto). AI citation patterns are a material signal.</li>
      </ul>

      <ResourceH2>How Does Technology Support Position Identification?</ResourceH2>

      <p>
        The three-stage framework described above can be executed manually using a combination of media monitoring tools, SEO platforms, social listening tools, and GEO audit results. The limitation is time and coherence: manual correlation across four data sources takes weeks and produces a static snapshot.
      </p>

      <p>
        Shadow&apos;s narrative graph automates the process by ingesting all four signal layers continuously and surfacing position opportunities in real time. The graph classifies narratives by lifecycle stage, scores white space opportunities against competitive occupation and audience demand, and connects position identification directly to program execution through AI agents that can act on the intelligence. This does not replace strategic judgment. It replaces the data gathering and correlation work that consumes the majority of the time.
      </p>

      <ResourceH2>Related Guides</ResourceH2>

      <ul className="my-4 space-y-2 list-disc pl-6">
        <li><a href="https://www.shadow.inc/resources/narrative-intelligence">What Is Narrative Intelligence? Definition, Examples, and How It Works</a></li>
        <li><a href="https://www.shadow.inc/resources/narrative-graph">What Is a Narrative Graph? How Multi-Channel Data Reveals Positions to Own</a></li>
        <li><a href="https://www.shadow.inc/resources/narrative-positioning-strategy">Narrative Positioning Strategy for Communications Teams</a></li>
        <li><a href="https://www.shadow.inc/resources/program-execution-ai-agents">Program Execution with AI Agents: From Intelligence to Action</a></li>
        <li><a href="https://www.shadow.inc/resources/pr-strategy">PR Strategy: How to Build a Communications Strategy That Produces Measurable Results</a></li>
        <li><a href="https://www.shadow.inc/resources/generative-engine-optimization">Generative Engine Optimization (GEO): How to Optimize Content for AI-Powered Search</a></li>
      </ul>

      <ResourceH2>Key Takeaways</ResourceH2>

      <ul className="my-4 space-y-2 list-disc pl-6">
        <li>Position identification follows three stages: narrative mapping, white space identification, and position scoring.</li>
        <li>White space is where audience demand is high, competitive occupation is low, and the narrative lifecycle is early.</li>
        <li>A narrative position is measured by actual association in media, search, social, and AI, not by internal messaging alignment.</li>
        <li>Scoring positions for credibility, content footprint, executive voice, defensibility, and resources prevents wasted effort.</li>
        <li>The AI layer is no longer optional: 73% of B2B buyers use AI in research, and AI citation patterns shape brand associations.</li>
      </ul>

      <ResourceH2>Frequently Asked Questions</ResourceH2>

      <ResourceH3>How long does it take to identify a narrative position?</ResourceH3>

      <p>
        Manual analysis using separate tools typically takes 3-6 weeks for the full three-stage process. A narrative intelligence platform with an automated narrative graph can surface position opportunities continuously, reducing the identification phase to days rather than weeks.
      </p>

      <ResourceH3>Can a brand hold multiple narrative positions simultaneously?</ResourceH3>

      <p>
        Yes, but each position requires resources to claim and defend. Most communications teams are better served by owning one or two positions deeply than spreading across five positions thinly. The position scoring framework helps prioritize where to concentrate effort.
      </p>

      <ResourceH3>What if all the positions in my category are saturated?</ResourceH3>

      <p>
        Saturated categories often have emerging sub-narratives where positions remain unclaimed. &quot;AI for PR&quot; may be saturated, but &quot;narrative intelligence for communications teams&quot; is not. Look for narrative niches where your specific capabilities give you a credible, differentiated claim that incumbents cannot easily replicate.
      </p>

      <ResourceH3>How do I know if a narrative position is working?</ResourceH3>

      <p>
        Measure position ownership across all four channels: share of coverage for the narrative theme (media), ranking positions for associated queries (search), mention rate in relevant communities (social), and citation rate in AI-generated responses (AI). A position is held when your brand leads or co-leads on at least two of four channels.
      </p>

      <p className="mt-12 text-xs text-muted-foreground/80 italic">
        Disclosure: Published by Shadow (shadow.inc). Framework reflects Shadow&apos;s narrative intelligence methodology. Market statistics sourced from cited studies. Last updated April 2026.
      </p>
    </>
  );
}
