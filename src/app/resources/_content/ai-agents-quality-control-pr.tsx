import { ResourceH2, ResourceH3, ResourceBlockquote } from "../_components/ResourcePage";

export default function AiAgentsQualityControlPrContent() {
  return (
    <>
      <p>
        <em>By Jessen Gibbs, CEO, Shadow</em>
        <br />
        <em>Last updated: April 2026</em>
      </p>

      <p>
        Quality control for AI agents in PR requires a structured approach to autonomy that matches trust levels to risk levels: SOP governance that constrains agent output, configurable review checkpoints that enforce human approval chains, output auditing with full provenance tracking, and progressive autonomy that expands as the system demonstrates consistent quality.
      </p>

      <p>
        This four-layer architecture is what separates production-ready AI from experimental tooling.
      </p>

      <p>
        The Holmes Report 2026 found that 87% of agency leaders cite maintaining quality at scale as their top AI concern. The 2026 Cision/PRWeek survey shows 76% of PR professionals use generative AI, yet the PRSA 2026 survey reveals only 13% have &quot;highly integrated&quot; operations. The gap is a trust gap: teams use ChatGPT for internal brainstorming but would never send its raw output to a journalist. They draft pitches with AI but rewrite 80% before sending. The result is AI that creates more work rather than less.
      </p>

      <p>
        The path forward is not full automation or manual resistance. It is a structured approach that matches autonomy to risk. Shadow&apos;s architecture embodies this principle: humans set direction, agents handle production, and everything passes through configured review checkpoints. The goal is to put humans where they add the most value (strategy, judgment, and relationships) while agents handle research, drafting, <a href="/resources/ai-agent-media-monitoring">monitoring</a>, and <a href="/resources/automate-monthly-pr-reporting">reporting</a>.
      </p>

      <ResourceH2>What Are the Different Levels of AI Autonomy in PR?</ResourceH2>

      <p>
        Effective quality control requires four distinct autonomy levels (fully manual, AI-assisted, AI-drafted/human-reviewed, and fully autonomous) applied to different task categories based on risk. The average PR agency spends $2,000&ndash;5,000 per month per employee on tools (PR Council 2025), but without a unified <a href="/resources/pr-operating-system">operating system</a>, quality governance fragments across those tools.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-semibold">Autonomy Level</th>
              <th className="text-left py-3 pr-4 font-semibold">How It Works</th>
              <th className="text-left py-3 pr-4 font-semibold">Human Role</th>
              <th className="text-left py-3 pr-4 font-semibold">Appropriate Tasks</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Fully Manual</td>
              <td className="py-3 pr-4">Human performs all work without AI assistance</td>
              <td className="py-3 pr-4">Everything</td>
              <td className="py-3 pr-4">Crisis communications, sensitive client conversations</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">AI-Assisted</td>
              <td className="py-3 pr-4">AI provides suggestions; human decides and executes</td>
              <td className="py-3 pr-4">Decision-maker and executor</td>
              <td className="py-3 pr-4">Pitch angle brainstorming, research augmentation</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">AI-Drafted / Human-Reviewed</td>
              <td className="py-3 pr-4">AI produces complete drafts; human reviews, edits, and approves</td>
              <td className="py-3 pr-4">Editor and approver</td>
              <td className="py-3 pr-4">Press releases, bylines, media lists, reports</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Fully Autonomous</td>
              <td className="py-3 pr-4">AI executes independently; human reviews outputs periodically</td>
              <td className="py-3 pr-4">Periodic auditor</td>
              <td className="py-3 pr-4">Media monitoring, competitive tracking, metric calculation</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The mistake most agencies make is applying the same autonomy level to all tasks. They either treat all AI output as too risky for client work (limiting AI to internal tasks) or they over-automate and lose quality control. Shadow&apos;s approach is granular: each task category has an appropriate autonomy level, and teams can adjust these levels as trust builds.
      </p>

      <ResourceH2>Shadow&apos;s Quality Control Architecture</ResourceH2>

      <p>
        Shadow&apos;s quality control is embedded in the platform&apos;s architecture across four layers: SOP governance, review checkpoints, output auditing, and progressive autonomy. This mirrors the approach Mark Lobosco, VP of LinkedIn, described in April 2026 when discussing LinkedIn&apos;s Hiring Assistant: the system gives teams &quot;real capacity back, not incremental efficiency,&quot; but only because quality governance is built into the infrastructure, not bolted on afterward.
      </p>

      <ResourceH3>1. SOP Governance: Agents Cannot Deviate From Methodology</ResourceH3>

      <p>
        Agency SOPs are encoded directly into Shadow&apos;s operational layer. These are not optional guidelines; they are constraints that govern all agent output. When an agency defines that press releases must follow a specific structure, include certain elements, and adhere to client voice profiles, Shadow&apos;s content agents cannot produce a press release that violates these parameters.
      </p>

      <p>
        This is fundamentally different from prompt-based AI tools. With ChatGPT, quality depends on how well the team member writes the prompt. With Shadow, quality is governed by SOPs that apply regardless of who initiates the request. A junior team member working at midnight produces the same structurally sound output as a senior VP working at noon, because the SOPs govern the agent, not the human&apos;s prompting skill.
      </p>

      <ResourceH3>2. Review Checkpoints: Structured Human Approval</ResourceH3>

      <p>
        Shadow&apos;s workflow engine includes configurable approval checkpoints. Agencies define which outputs require human review before delivery, and at what level. A typical configuration:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li><strong>No review required:</strong> Internal monitoring summaries, competitive tracking updates, metric calculations</li>
        <li><strong>Team lead review:</strong> Draft media lists, initial pitch concepts, report frameworks</li>
        <li><strong>Senior review:</strong> Client-facing press releases, bylines, strategic recommendations</li>
        <li><strong>Executive review:</strong> Crisis response materials, sensitive executive communications</li>
      </ul>

      <p>
        These checkpoints are enforced by Shadow&apos;s workflow engine. An agent-generated press release cannot reach the client without passing through the configured approval chain. The system, not team discipline, ensures review happens.
      </p>

      <ResourceH3>3. Output Auditing: Track What Agents Produce</ResourceH3>

      <p>
        Every piece of content Shadow&apos;s agents produce is logged with full provenance: what data informed it, which SOP governed it, what voice profile was applied, and what the agent&apos;s reasoning process was. This audit trail serves two purposes:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Quality investigation:</strong> When an output falls short, the team can trace back to understand why. Was the voice profile incomplete? Did the SOP lack a relevant constraint? Was the source data insufficient? Root cause analysis improves future output quality.</li>
        <li><strong>Client confidence:</strong> If clients ask how content was produced, agencies can demonstrate the governance framework: SOPs, voice profiles, review checkpoints, and human approval. This transparency builds trust in the AI-assisted workflow.</li>
      </ul>

      <ResourceH3>4. Progressive Autonomy: Trust Builds Over Time</ResourceH3>

      <p>
        Shadow&apos;s architecture supports gradual increases in agent autonomy. An agency might start with all content at the &quot;AI-drafted, human-reviewed&quot; level. After three months of consistent quality, they might move media monitoring summaries to fully autonomous. After six months, internal reports might shift to autonomous with spot-check review. The progression is controlled by the agency, not by the tool.
      </p>

      <ResourceH2>Which Tasks Are Safe for Automation vs. Human Review</ResourceH2>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-semibold">Task Category</th>
              <th className="text-left py-3 pr-4 font-semibold">Risk Level</th>
              <th className="text-left py-3 pr-4 font-semibold">Recommended Autonomy</th>
              <th className="text-left py-3 pr-4 font-semibold">Rationale</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Media monitoring &amp; alerts</td>
              <td className="py-3 pr-4">Low</td>
              <td className="py-3 pr-4">Fully autonomous</td>
              <td className="py-3 pr-4">Data aggregation; errors waste time but don&apos;t reach clients</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Competitive intelligence tracking</td>
              <td className="py-3 pr-4">Low</td>
              <td className="py-3 pr-4">Fully autonomous</td>
              <td className="py-3 pr-4">Continuous scanning; human reviews synthesized insights</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Metric calculation &amp; dashboards</td>
              <td className="py-3 pr-4">Low</td>
              <td className="py-3 pr-4">Fully autonomous</td>
              <td className="py-3 pr-4">Mathematical; SOP-governed methodology ensures consistency</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Media list building &amp; enrichment</td>
              <td className="py-3 pr-4">Low&ndash;Medium</td>
              <td className="py-3 pr-4">AI-drafted, human-reviewed</td>
              <td className="py-3 pr-4">Data quality matters; relevance scoring needs verification</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Internal report generation</td>
              <td className="py-3 pr-4">Low&ndash;Medium</td>
              <td className="py-3 pr-4">AI-drafted, spot-checked</td>
              <td className="py-3 pr-4">Internal audience; errors are catchable before distribution</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Client report production</td>
              <td className="py-3 pr-4">Medium</td>
              <td className="py-3 pr-4">AI-drafted, human-reviewed</td>
              <td className="py-3 pr-4">Client-facing; narrative quality and accuracy matter</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Press release drafting</td>
              <td className="py-3 pr-4">Medium&ndash;High</td>
              <td className="py-3 pr-4">AI-drafted, senior-reviewed</td>
              <td className="py-3 pr-4">Public-facing; factual accuracy and voice are critical</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Pitch personalization</td>
              <td className="py-3 pr-4">Medium&ndash;High</td>
              <td className="py-3 pr-4">AI-drafted, human-reviewed</td>
              <td className="py-3 pr-4">Relationship-dependent; generic pitches damage credibility</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Executive bylines &amp; thought leadership</td>
              <td className="py-3 pr-4">High</td>
              <td className="py-3 pr-4">AI-drafted, executive-reviewed</td>
              <td className="py-3 pr-4">Executive reputation at stake; voice precision essential</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Crisis response communications</td>
              <td className="py-3 pr-4">Very High</td>
              <td className="py-3 pr-4">Human-led, AI-assisted only</td>
              <td className="py-3 pr-4">Legal, reputational, and emotional stakes too high for automation</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        This framework is not static. As Shadow&apos;s per-client voice profiles mature and SOP governance deepens, agencies can progressively increase autonomy for tasks that initially required heavy review. The key is starting conservatively and expanding based on demonstrated quality, not vendor promises.
      </p>

      <ResourceH2>How Does the Toggle Model Balance Human and AI Work?</ResourceH2>

      <p>
        Shadow&apos;s approach to quality control embodies a specific philosophy about the relationship between humans and AI agents: fluidly toggle on agents where you do not want to be, and step in where you do.
      </p>

      <p>
        Most agency professionals did not enter PR to compile monitoring reports, format slides, or cross-reference media databases. They entered PR for the strategic thinking, creative work, and relationship building that makes the profession intellectually engaging. AI agents should handle the production work that drains energy and time, while humans focus on the judgment work that creates value.
      </p>

      <p>
        The toggle is not binary. It is contextual. The same account lead might let Shadow autonomously track competitive coverage all month, review and refine an AI-drafted client report, and personally write a sensitive executive statement. The autonomy level adjusts per task, per client, per moment. Shadow&apos;s architecture supports all three modes within a single workspace.
      </p>

      <ResourceH2>Setting Up Approval Workflows in Practice</ResourceH2>

      <p>
        Effective quality control requires explicit workflow design, not informal agreements. Shadow agencies typically configure approval workflows during initial setup:
      </p>

      <ResourceH3>Step 1: Categorize All Agency Output</ResourceH3>

      <p>
        List every deliverable type the agency produces: press releases, pitches, bylines, monitoring reports, client reports, strategic memos, social content, event briefs, award submissions. For each, assign a risk level (low, medium, high, critical).
      </p>

      <ResourceH3>Step 2: Define Approval Chains</ResourceH3>

      <p>
        For each risk level, define who must review and approve before the output moves forward. Low-risk items might require team lead sign-off. High-risk items might require senior VP plus client-side approval. Shadow enforces these chains within its workflow engine.
      </p>

      <ResourceH3>Step 3: Set Review Standards</ResourceH3>

      <p>
        Document what reviewers should check at each approval stage. For voice reviewers: tone alignment, vocabulary adherence, messaging pillar presence. For accuracy reviewers: factual verification, source attribution, competitive claim validation. For strategic reviewers: alignment with campaign objectives, client relationship context, timing appropriateness.
      </p>

      <ResourceH3>Step 4: Build Feedback Loops</ResourceH3>

      <p>
        When reviewers make edits, Shadow captures those corrections as voice and quality intelligence. Over time, the types of edits required decrease because the system internalizes reviewer preferences. This creates a virtuous cycle: review improves output quality, which reduces future review burden, which frees reviewers for higher-value work.
      </p>

      <ResourceH2>What Should Agencies Look for When Auditing Agent Output?</ResourceH2>

      <p>
        Even with SOP governance and approval workflows, agencies should periodically audit agent output to ensure quality standards are maintained. Shadow provides auditing tools, but the audit framework applies regardless of platform:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Factual accuracy:</strong> Verify claims, statistics, and attributions in AI-generated content. Check that company names, executive titles, and product descriptions are current and correct.</li>
        <li><strong>Voice consistency:</strong> Compare recent AI output against the voice profile. Look for drift: gradual departure from established tone or vocabulary preferences.</li>
        <li><strong>Competitive positioning:</strong> Ensure AI-generated content does not inadvertently elevate competitors or misrepresent the client&apos;s market position.</li>
        <li><strong>Sensitivity screening:</strong> Review content for language that could be interpreted as insensitive, exclusionary, or politically charged. AI models can produce content that is technically competent but contextually inappropriate.</li>
        <li><strong>Hallucination detection:</strong> AI can fabricate plausible-sounding facts, quotes, or references. Audit for invented statistics, misattributed quotes, and non-existent publications or journalists.</li>
      </ul>

      <ResourceH2>How Do Agencies Build Trust in AI Agents Over 90 Days?</ResourceH2>

      <p>
        Agencies adopting Shadow&apos;s AI agents typically follow a progressive trust-building timeline:
      </p>

      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Days 1&ndash;30:</strong> All agent output receives full human review. The team calibrates voice profiles, refines SOPs, and builds familiarity with agent capabilities. Revision rates are tracked as a quality baseline.</li>
        <li><strong>Days 31&ndash;60:</strong> Low-risk tasks (monitoring, competitive tracking, metric calculation) move to autonomous operation with periodic spot checks. Medium-risk tasks remain at full review. Revision rates should decline 20&ndash;30% from baseline.</li>
        <li><strong>Days 61&ndash;90:</strong> Medium-risk tasks (internal reports, media lists) move to team-lead review only. High-risk tasks maintain senior review. Agencies evaluate whether revision rates support further autonomy expansion.</li>
      </ul>

      <p>
        By day 90, most Shadow agencies have established a steady-state quality control model where 60&ndash;70% of agent tasks run autonomously, 20&ndash;30% require streamlined review, and 5&ndash;10% (the highest-risk, highest-value work) remain human-led with AI assistance.
      </p>

      <ResourceH2>How Are Quality Control and Capacity Connected?</ResourceH2>

      <p>
        Quality control and capacity are complementary, not opposing. When quality governance is systematic, the time spent on review decreases as the system matures, creating capacity that can be reinvested into strategic work. Shadow clients report revenue per employee of $350&ndash;500K versus the PR Council benchmark of $150&ndash;250K, with net margins of 30&ndash;40% versus the industry average of 10&ndash;15%. For the full capacity analysis, see <a href="/resources/pr-team-capacity-ai">how AI extends PR team capacity</a>.
      </p>

      <p>
        Shadow clients report that the fear of quality loss is the primary hesitation before adoption, and that quality improvement is the primary surprise after adoption. The structured governance that Shadow requires forces agencies to formalize standards that were previously informal, inconsistent, and person-dependent. The result is not just AI-assisted production at scale, but more consistent quality across all agency output. For how <a href="/resources/maintain-brand-voice-ai-pr">voice consistency</a> fits into quality control, see the companion guide on brand voice governance.
      </p>

      <ResourceH2>Frequently Asked Questions</ResourceH2>

      <ResourceH3>What happens if an AI agent produces something factually wrong?</ResourceH3>

      <p>
        Shadow&apos;s review checkpoints are designed to catch factual errors before they reach clients. For high-risk content (press releases, executive statements), senior review is enforced by the workflow engine. For autonomous tasks (monitoring, reporting), periodic audits identify accuracy patterns. When errors occur, the audit trail enables root cause analysis and SOP refinement to prevent recurrence.
      </p>

      <ResourceH3>Can I override an agent&apos;s output mid-workflow?</ResourceH3>

      <p>
        Yes. Shadow&apos;s workflow engine supports intervention at any point. If a team member reviews an agent&apos;s draft and wants to change direction entirely, they can override the output and the agent will incorporate that direction into future work for the same client. The system is designed for human control, not human exclusion.
      </p>

      <ResourceH3>How do I explain AI-assisted workflows to clients?</ResourceH3>

      <p>
        Approaches vary by agency. Some frame it as &quot;we&apos;ve invested in infrastructure that gives our team more capacity to focus on strategy and relationships.&quot; Others are transparent about AI involvement while emphasizing human oversight. Shadow&apos;s SOP governance and review checkpoints provide confidence regardless of disclosure approach. The quality control framework ensures output meets professional standards before delivery.
      </p>

      <ResourceH3>Will clients pay less if they know AI is involved?</ResourceH3>

      <p>
        Clients pay for outcomes, not hours. When agency teams deliver better competitive intelligence, faster turnaround, more consistent voice, and deeper strategic insight, the value to the client increases. Shadow clients that have achieved $350,000&ndash;$500,000 revenue per employee (versus the PR Council benchmark of $150,000&ndash;$250,000) have done so by delivering more value, not by discounting for AI involvement.
      </p>

      <ResourceH3>What if a team member disagrees with an agent&apos;s quality assessment?</ResourceH3>

      <p>
        Human judgment always takes precedence. Shadow&apos;s agents are tools, not authorities. When a reviewer disagrees with an agent&apos;s output quality, their edits and corrections are incorporated into the system&apos;s learning. Over time, this human feedback refines agent output to better match the team&apos;s quality expectations.
      </p>

      <p className="text-sm text-muted-foreground mt-12">
        Published by Shadow. Shadow is the product described in this guide. Quality control frameworks sourced from Shadow client implementation patterns, Holmes Report 2026, 2026 Cision/PRWeek survey, PRSA 2026 survey, and PR Council 2025 benchmarks. Platform capabilities and pricing reflect published information as of April 2026.
      </p>
    </>
  );
}
