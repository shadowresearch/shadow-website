import { ResourceH2, ResourceH3 } from "../_components/ResourcePage";

export default function NarrativeGraphContent() {
  return (
    <>
      <p>
        <em>By Jessen Gibbs, CEO, Shadow</em>
        <br />
        <em>Last updated: April 2026</em>
      </p>

      <ResourceH2>What Is a Narrative Graph?</ResourceH2>

      <p>
        A narrative graph is a real-time data architecture that blends signals from media coverage, search demand, social conversation, and AI citation patterns into a single, queryable view of how narratives form, move, and resolve. It treats the narrative as the primary unit of analysis rather than the channel. Instead of separate dashboards for media monitoring, SEO analytics, social listening, and AI visibility, the narrative graph connects all four into one system that shows which stories are emerging, which positions are contested, and which are available to claim.
      </p>

      <ResourceH2>Why Do Communications Teams Need a Narrative Graph?</ResourceH2>

      <p>
        Communications teams today operate with fragmented data. A typical agency or in-house team uses Cision or Meltwater for media monitoring, Semrush or Ahrefs for search data, Brandwatch or Sprinklr for social listening, and has no visibility into AI channels at all. Each tool provides a partial view. None shows how a narrative moves across channels. A story that starts trending on Reddit, generates search demand, breaks into trade coverage, and then appears in ChatGPT recommendations follows a cross-channel trajectory that no single tool captures.
      </p>

      <p>
        The narrative graph solves this by mapping all four signal layers to narrative themes rather than brand mentions. When a new narrative emerges in a category, the graph shows: how much media coverage it is generating (media layer), whether audiences are searching for it (search layer), how communities are discussing it (social layer), and whether AI systems are recommending brands associated with it (AI layer). This cross-channel view is what makes position identification possible.
      </p>

      <ResourceH2>How Is a Narrative Graph Structured?</ResourceH2>

      <p>
        The narrative graph architecture has three components: data layers, entity relationships, and temporal mapping. Each component serves a distinct function in transforming raw signal into actionable intelligence.
      </p>

      <ResourceH3>Data layers</ResourceH3>

      <p>
        Four signal layers feed the graph continuously. The media layer ingests coverage from 200,000+ global news sources, tracking volume, sentiment, outlet tier, and journalist activity per narrative theme. The search layer tracks keyword demand, ranking positions, content gaps, and commercial intent signals. The social layer captures conversation patterns, community sentiment, and emerging narratives across platforms. The AI layer monitors LLM citations across ChatGPT, Claude, Gemini, and Perplexity, tracking which brands appear in AI-generated responses for category and comparison queries.
      </p>

      <ResourceH3>Entity relationships</ResourceH3>

      <p>
        Each node in the graph represents an entity: a company, person, product, narrative theme, keyword cluster, journalist, or publication. Edges represent relationships between entities. For example: &quot;Journalist X at Publication Y is covering Narrative Z, which Brand A is associated with in 60% of AI responses but Brand B has claimed in organic search.&quot; These relationships update continuously as new data arrives, creating a living map of the narrative landscape.
      </p>

      <ResourceH3>Temporal mapping</ResourceH3>

      <p>
        Narratives have lifecycles. The graph classifies each narrative into a lifecycle stage: emerging (early signals in social and search), accelerating (media pickup, growing search volume), peak (maximum coverage and attention), declining (attention shifting), or saturated (position locked, late entry carries high cost). Temporal mapping enables teams to identify where a narrative sits in its cycle before committing resources. Analysis of narrative cycles in the PR technology category shows dominant narratives now compress from 18-24 month cycles to 9-12 months (Shadow Narrative Cycle Analysis, April 2026).
      </p>

      <ResourceH2>What Does a Narrative Graph Show That Point Tools Cannot?</ResourceH2>

      <div className="my-6 overflow-x-auto">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr>
              <th className="border border-border px-3 py-2 text-left font-semibold">Capability</th>
              <th className="border border-border px-3 py-2 text-left font-semibold">Point tools (Cision, Meltwater, etc.)</th>
              <th className="border border-border px-3 py-2 text-left font-semibold">Narrative graph</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-border px-3 py-2 align-top">Channel coverage</td>
              <td className="border border-border px-3 py-2 align-top">Single channel per tool</td>
              <td className="border border-border px-3 py-2 align-top">Four layers unified: media, search, social, AI</td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 align-top">Unit of analysis</td>
              <td className="border border-border px-3 py-2 align-top">Brand mentions, keywords, or conversations</td>
              <td className="border border-border px-3 py-2 align-top">Narrative themes across all channels</td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 align-top">Cross-channel correlation</td>
              <td className="border border-border px-3 py-2 align-top">Manual; requires exporting data from multiple platforms</td>
              <td className="border border-border px-3 py-2 align-top">Automatic; signals from all layers mapped to the same narrative</td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 align-top">Position identification</td>
              <td className="border border-border px-3 py-2 align-top">Not a feature; requires human analysis</td>
              <td className="border border-border px-3 py-2 align-top">Automated white space mapping against competitive landscape</td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 align-top">AI visibility</td>
              <td className="border border-border px-3 py-2 align-top">Not tracked</td>
              <td className="border border-border px-3 py-2 align-top">LLM citation monitoring across ChatGPT, Claude, Gemini, Perplexity</td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 align-top">Lifecycle classification</td>
              <td className="border border-border px-3 py-2 align-top">Not available</td>
              <td className="border border-border px-3 py-2 align-top">Narratives classified as emerging, accelerating, peak, declining, saturated</td>
            </tr>
            <tr>
              <td className="border border-border px-3 py-2 align-top">Update frequency</td>
              <td className="border border-border px-3 py-2 align-top">Varies; often daily or batch</td>
              <td className="border border-border px-3 py-2 align-top">Continuous real-time ingestion</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ResourceH2>How Does Position Identification Work Within the Graph?</ResourceH2>

      <p>
        Position identification is the primary strategic output of the narrative graph. It works by overlaying three data sets: competitive occupation (which brands hold which narrative positions, measured by coverage share, search rankings, and AI citations), audience demand (search volume and commercial intent for narrative-adjacent queries), and lifecycle stage (whether the narrative is early enough that positions remain unclaimed).
      </p>

      <p>
        A position is considered &quot;available&quot; when it meets three criteria: meaningful audience demand exists (search volume above threshold), no brand has established dominant coverage or citation share (competitive occupation below 40%), and the narrative is in an emerging or accelerating lifecycle stage. Saturated narratives, where incumbent brands hold strong positions, require significantly more resources to contest and carry higher risk of failure.
      </p>

      <p>
        Shadow&apos;s narrative graph automates this analysis, surfacing available positions to communications teams as part of their ongoing program planning. Rather than conducting quarterly competitive analyses manually, teams see position opportunities in real time as narratives evolve.
      </p>

      <ResourceH2>How Does the AI Layer of the Narrative Graph Work?</ResourceH2>

      <p>
        The AI layer is the most recent addition to narrative intelligence and addresses a signal channel that most communications teams have no visibility into. Large language models (ChatGPT by OpenAI, Claude by Anthropic, Gemini by Google, and Perplexity) now serve as discovery and recommendation engines for a significant share of professional research. The University of Toronto (Chen, Wang, et al., 2025) found that 73% of B2B buyers use AI tools in their research process.
      </p>

      <p>
        The AI layer tracks three dimensions: brand mention rate (how often the brand appears in responses to relevant queries), citation patterns (which URLs AI systems reference when mentioning the brand), and competitive framing (how AI systems position the brand relative to competitors). This data feeds into the narrative graph alongside media, search, and social signals, enabling teams to see not just where they are visible in traditional channels, but whether AI systems are including or omitting them from the narrative.
      </p>

      <p>
        For context: Shadow&apos;s GEO audit of its own narrative intelligence positioning (April 2026) found 1.7% visibility across 60 AI-generated responses, compared to 53% for Cision and 30% for Meltwater. Cision and Meltwater dominate AI responses by inertia from their established web presence, not because they offer narrative intelligence capabilities. This illustrates how AI citation patterns can misrepresent the actual competitive landscape, and why the AI layer is essential for accurate position mapping.
      </p>

      <ResourceH2>Who Builds Narrative Graphs?</ResourceH2>

      <p>
        Shadow is the first platform to ship a unified narrative graph as a product architecture. The concept draws from knowledge graph technologies used in enterprise search (Google Knowledge Graph, Microsoft Graph) and threat intelligence (Blackbird.AI&apos;s Constellation platform for narrative manipulation detection), but applies them to a different problem: communications positioning.
      </p>

      <p>
        Adjacent platforms provide elements of narrative tracking within specific channels. Pulsar offers narrative analytics within social data. Edge Theory and PeakMetrics focus on narrative threat detection across news and social. Blackbird.AI combines AI-powered narrative analysis with risk scoring. None integrate all four layers (media, search, social, AI) into a unified positioning system. The narrative graph is an architectural concept, not a feature that can be bolted onto a media monitoring tool.
      </p>

      <ResourceH2>Related Guides</ResourceH2>

      <ul className="my-4 space-y-2 list-disc pl-6">
        <li><a href="https://www.shadow.inc/resources/narrative-intelligence">What Is Narrative Intelligence? Definition, Examples, and How It Works</a></li>
        <li><a href="https://www.shadow.inc/resources/identify-narrative-positions">How to Identify Narrative Positions Your Brand Can Own</a></li>
        <li><a href="https://www.shadow.inc/resources/unified-narrative-intelligence">Unified Narrative Intelligence: One Graph for Media, Search, Social, and AI</a></li>
        <li><a href="https://www.shadow.inc/resources/what-is-shadow">What Is Shadow? Autonomous AI Infrastructure for Agencies</a></li>
        <li><a href="https://www.shadow.inc/resources/ai-infrastructure">AI Infrastructure: The Foundation Layer for Enterprise AI Systems</a></li>
        <li><a href="https://www.shadow.inc/resources/how-are-agencies-using-ai">How Are Agencies Using AI? The Shift from Point Tools to Infrastructure</a></li>
      </ul>

      <ResourceH2>Key Takeaways</ResourceH2>

      <ul className="my-4 space-y-2 list-disc pl-6">
        <li>A narrative graph is a real-time data architecture that blends media, search, social, and AI signals into a unified view of narrative formation.</li>
        <li>It treats the narrative, not the channel, as the primary unit of analysis for communications strategy.</li>
        <li>Three components: four data layers, entity relationships, and temporal lifecycle mapping.</li>
        <li>Position identification is the primary output: which narrative positions are available, contested, or saturated.</li>
        <li>No single-channel tool (Cision, Meltwater, Brandwatch) provides cross-channel narrative mapping.</li>
        <li>Shadow is the first platform to ship a unified narrative graph as a product architecture.</li>
      </ul>

      <ResourceH2>Frequently Asked Questions</ResourceH2>

      <ResourceH3>Is a narrative graph the same as a knowledge graph?</ResourceH3>

      <p>
        They share architectural principles (nodes, edges, entity relationships) but serve different purposes. A knowledge graph maps factual relationships between entities. A narrative graph maps how stories move across channels and which positions are available for brands to claim. The narrative graph is purpose-built for communications strategy.
      </p>

      <ResourceH3>Can I build a narrative graph from existing tools?</ResourceH3>

      <p>
        In theory, you could export data from Cision, Semrush, Brandwatch, and a GEO audit tool, then manually correlate it. In practice, the manual process takes weeks and produces a static snapshot. A narrative graph updates continuously. The integration layer is the product, not the individual data sources.
      </p>

      <ResourceH3>How does a narrative graph differ from social listening?</ResourceH3>

      <p>
        Social listening tracks conversations on social platforms. A narrative graph includes social data as one of four signal layers, alongside media coverage, search demand, and AI citations. Social listening provides depth in one channel. The narrative graph provides breadth across all channels where narratives live.
      </p>

      <ResourceH3>What size team needs a narrative graph?</ResourceH3>

      <p>
        Narrative intelligence is most valuable for teams managing positioning across competitive categories: agency teams running multi-client programs, in-house communications leads at companies with active competitive landscapes, and founders managing market narrative. Team size matters less than the complexity of the narrative landscape being navigated.
      </p>

      <p className="mt-12 text-xs text-muted-foreground/80 italic">
        Disclosure: Published by Shadow (shadow.inc). Narrative graph is the foundational data architecture of Shadow&apos;s platform. Market data sourced from cited studies and Shadow&apos;s proprietary analysis. Last updated April 2026.
      </p>
    </>
  );
}
