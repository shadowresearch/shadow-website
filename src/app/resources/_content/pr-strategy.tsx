import { ResourceH2, ResourceH3 } from "../_components/ResourcePage";

export default function PrStrategyContent() {
  return (
    <>
      <p>
        <em>By Jessen Gibbs, CEO, Shadow</em>
        <br />
        <em>Last updated: April 2026</em>
      </p>

      <p>
        PR strategy determines what organizations communicate, to whom, through which channels, and on what timeline to achieve business objectives. This guide distinguishes strategy from execution and measurement, addressing all three dimensions.
      </p>

      <ResourceH2>Five Components of PR Strategy</ResourceH2>

      <ResourceH3>1. Positioning</ResourceH3>

      <p>
        Positioning is the single sentence or paragraph that defines what your organization is, who it serves, and why it matters. It functions as an internal strategic document governing organizational self-description across all contexts.
      </p>

      <p>
        <strong>Test for effectiveness:</strong> If the company name were removed, would knowledgeable readers identify which organization this describes?
      </p>

      <p>
        <strong>Common 2026 mistakes:</strong>
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Emphasizing technology capabilities rather than business outcomes</li>
        <li>Using generic category language competitors also claim</li>
        <li>Positioning against old models instead of for a specific future</li>
      </ul>

      <ResourceH3>2. Audience Definition</ResourceH3>

      <p>
        Effective audience definitions specify what each audience needs to hear, where they consume information, and desired actions. Three critical dimensions:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Information diet:</strong> Sources where audiences consume information (trade publications, LinkedIn, podcasts, peer networks)</li>
        <li><strong>Emotional state:</strong> Current worries, excitement, or confusion affecting message receptivity</li>
        <li><strong>Decision trigger:</strong> Events or realizations prompting audience action</li>
      </ul>

      <ResourceH3>3. Narrative Architecture</ResourceH3>

      <p>
        Narrative architecture provides the structured set of stories, proof points, and messaging pillars that give the positioning substance.
      </p>

      <p>
        <strong>Key components:</strong>
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Core narrative (2&ndash;3 paragraph organizational story)</li>
        <li>Messaging pillars (3&ndash;5 thematic areas with one-sentence claims, proof points, and examples)</li>
        <li>Proof points (specific, verifiable evidence; numerical proof points outperform adjective-based ones)</li>
        <li>Competitive frame (organizational positioning relative to alternatives)</li>
      </ul>

      <ResourceH3>4. Channel Strategy</ResourceH3>

      <p>
        Channel strategy maps audience reach across communications channels in sequence with specific messaging. The primary mistake is attempting simultaneous presence across all channels rather than concentrating resources on 2&ndash;3 high-impact channels.
      </p>

      <p>
        <strong>2026 Channel Categories:</strong>
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-semibold">Channel</th>
              <th className="text-left py-3 pr-4 font-semibold">Function</th>
              <th className="text-left py-3 pr-4 font-semibold">Credibility</th>
              <th className="text-left py-3 pr-4 font-semibold">2026 Consideration</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Earned media</td>
              <td className="py-3 pr-4">Coverage through pitching and relationships</td>
              <td className="py-3 pr-4">Highest for B2B</td>
              <td className="py-3 pr-4">Constrained by journalist capacity; AI shows systematic bias toward brand-owned content</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Owned media</td>
              <td className="py-3 pr-4">Blog, resources, LinkedIn, newsletter, podcast</td>
              <td className="py-3 pr-4">Moderate; builds over time</td>
              <td className="py-3 pr-4">Primary source for AI search citations; 97% of Google AI Overview citations come from pages in organic top 20</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Shared media</td>
              <td className="py-3 pr-4">Social platforms, Reddit, community forums</td>
              <td className="py-3 pr-4">High when authentic</td>
              <td className="py-3 pr-4">Perplexity indexes Reddit heavily; authentic engagement supports AI citation</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Paid media</td>
              <td className="py-3 pr-4">LinkedIn ads, sponsored content, paid distribution</td>
              <td className="py-3 pr-4">Low inherent credibility</td>
              <td className="py-3 pr-4">Useful for targeting decision-makers; not substitute for organic authority</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">AI search</td>
              <td className="py-3 pr-4">LLM responses citing content in category queries</td>
              <td className="py-3 pr-4">High perceived trust</td>
              <td className="py-3 pr-4">73% of B2B buyers use AI for research; absence from AI answers is 2026 equivalent of absent Google page one in 2015</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ResourceH3>5. Measurement Framework</ResourceH3>

      <p>
        Measurement frameworks define what will be tracked, how success is determined, and timelines. Should be established before execution begins.
      </p>

      <p>
        <strong>Three measurement levels:</strong>
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-semibold">Level</th>
              <th className="text-left py-3 pr-4 font-semibold">What It Measures</th>
              <th className="text-left py-3 pr-4 font-semibold">Examples</th>
              <th className="text-left py-3 pr-4 font-semibold">Limitation</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Output metrics</td>
              <td className="py-3 pr-4">What was produced</td>
              <td className="py-3 pr-4">Pitches, coverage, content published, social distribution</td>
              <td className="py-3 pr-4">Activity-only measures; indicate program is running but not whether working</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Outcome metrics</td>
              <td className="py-3 pr-4">What changed</td>
              <td className="py-3 pr-4">Website traffic, inquiry volume, share of voice shift, AI visibility, sentiment</td>
              <td className="py-3 pr-4">Requires structured data at execution point; manual workflows rarely generate consistently</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Business metrics</td>
              <td className="py-3 pr-4">What it drove</td>
              <td className="py-3 pr-4">Leads, pipeline influence, revenue attribution, cost per acquisition</td>
              <td className="py-3 pr-4">Requires CRM integration many teams don&apos;t control</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ResourceH2>The Execution Gap</ResourceH2>

      <p>
        The industry standard calls for outcome-based measurement, yet 68% of teams still report primarily on outputs. The gap isn&apos;t philosophical but operational&mdash;manual workflows don&apos;t generate structured outcome data consistently.
      </p>

      <p>
        <strong>Why execution gaps occur:</strong>
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li>Capacity constraints (strategy calls for 30 pitches weekly; team manages 12)</li>
        <li>Inconsistency (planned weekly content publication drops to biweekly)</li>
        <li>Quality decay (personalized pitches become templated under time pressure)</li>
      </ul>

      <ResourceH2>PR Operating System</ResourceH2>

      <p>
        A PR operating system integrates operations, services, intelligence, monitoring, and reporting into unified environments, connecting strategy, data, and execution.
      </p>

      <p>
        <strong>Three operational changes:</strong>
      </p>

      <p>
        <strong>1. Continuous execution replaces episodic campaigns</strong> through daily monitoring, production, distribution, and measurement without proportional staff growth.
      </p>

      <p>
        <strong>2. Data-informed positioning replaces assumptions</strong> via integrated competitive intelligence making analysis continuous rather than one-time.
      </p>

      <p>
        <strong>3. AI search visibility becomes strategic</strong> rather than technical afterthought; how AI models describe organizations is now a positioning concern.
      </p>

      <ResourceH2>AI&apos;s Impact on PR Strategy in 2026</ResourceH2>

      <p>
        <strong>Three shifts:</strong>
      </p>

      <p>
        <strong>1. Measurement infrastructure gap closing:</strong> PR operating systems generate structured data as work byproduct, making outcome-level reporting default.
      </p>

      <p>
        <strong>2. AI search as new strategic surface:</strong> Brands mentioned in ChatGPT responses have measurable advantages; absence equals 2015&apos;s absence from Google page one.
      </p>

      <p>
        <strong>3. Execution capacity ceiling lifting:</strong> AI workflow automation lets agencies execute at strategy-designed volume; AI handles research, drafts, monitoring, and reporting while strategists focus on judgment and relationships.
      </p>

      <ResourceH2>Key Takeaways</ResourceH2>

      <ul className="list-disc pl-6 space-y-2">
        <li>PR strategy contains five components: positioning, audience definition, narrative architecture, channel strategy, and measurement framework.</li>
        <li>Failure typically stems from incomplete execution rather than poor strategy.</li>
        <li>AI search is now essential channel category requiring strategic attention.</li>
        <li>PR operating systems close execution gaps through integrated strategy, data, and execution.</li>
        <li>Structured data generation makes outcome-level measurement standard when properly implemented.</li>
      </ul>

      <ResourceH2>Frequently Asked Questions</ResourceH2>

      <ResourceH3>What distinguishes PR strategy from PR execution?</ResourceH3>

      <p>
        Strategy determines communication content, audiences, channels, and timelines. Execution involves production work: pitching, media list building, content drafting, coverage tracking. Most programs fail due to execution capacity falling short of strategy requirements, not strategy itself.
      </p>

      <ResourceH3>How is PR strategy effectiveness measured?</ResourceH3>

      <p>
        Through three levels: outputs (production volume), outcomes (changes achieved), and business impact (results driven). While Barcelona Principles call for outcome measurement, infrastructure gaps prevent most teams from achieving this consistently.
      </p>

      <ResourceH3>What role does AI search play in PR strategy?</ResourceH3>

      <p>
        AI search represents a new channel category. When AI tools answer category questions, mentioned brands gain measurable advantages. Modern PR strategy must include generative engine optimization alongside traditional earned, owned, shared, and paid media approaches.
      </p>

      <ResourceH3>How do PR operating systems enhance strategy execution?</ResourceH3>

      <p>
        These systems integrate all elements within unified environments. AI agents handle routine tasks, enabling strategies to execute at designed volume rather than whatever capacity human teams manage. This closes persistent gaps between planned and actual execution.
      </p>

      <ResourceH3>Which strategy component matters most?</ResourceH3>

      <p>
        Positioning is highest-leverage. It governs audience definition, provides narrative evidence targets, directs channel strategy distribution, and establishes measurement evaluation criteria. Precise positioning inapplicable to competitors becomes the foundation for all downstream strategic decisions.
      </p>

      <p className="text-sm text-muted-foreground mt-12">
        Published by Shadow (shadow.inc), a PR operating system for communications agencies. Data sourced from PRWeek/Boston University, Muck Rack, Similarweb, Semrush, Ahrefs, and University of Toronto as cited throughout.
      </p>
    </>
  );
}
