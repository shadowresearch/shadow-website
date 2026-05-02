import Link from "next/link";
import { ResourceH2, ResourceH3 } from "../_components/ResourcePage";

export default function ServicesAsSoftwareContent() {
  return (
    <>
      <p>
        <em>By Jessen Gibbs, CEO, Shadow</em>
        <br />
        <em>Last updated: April 2026</em>
      </p>

      <p>
        The services-as-software thesis argues that AI is inverting the dominant technology business model of the past twenty years. Instead of selling software tools that help customers perform work (software-as-a-service), companies will use AI to perform the work internally and sell the finished output (services-as-software). The customer buys the outcome, not the tool.
      </p>

      <p>
        Foundation Capital formalized this thesis in a 2025 research brief, estimating the total addressable market at $4.6 trillion: the combined global spend on human-delivered professional services that AI can now perform or substantially automate. Their analysis found that 60-80% of agency and professional services revenue comes from execution, not strategy. AI collapses the cost of execution while preserving the value of the strategic layer.
      </p>

      <p>
        Y Combinator validated the thesis independently. In its Spring 2026 Request for Startups, YC listed &quot;AI-Native Agencies&quot; as a priority investment category. Group Partner Aaron Epstein wrote the brief, arguing that agencies have historically repelled venture capital because growth is tied to headcount. AI breaks the constraint. An AI-native agency can achieve software-like margins (60-80%) while delivering services outcomes.
      </p>

      <ResourceH2>What is the difference between SaaS and services-as-software?</ResourceH2>

      <p>
        The distinction is architectural, not cosmetic. It determines who does the work, how the business scales, and what the customer pays for. SaaS sells access to a tool the customer operates. Services-as-software uses AI agents to perform the work and sells the completed deliverable. The customer reviews and approves rather than learns and operates.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 pr-4 font-semibold">Dimension</th>
              <th className="text-left py-3 pr-4 font-semibold">Software-as-a-Service (SaaS)</th>
              <th className="text-left py-3 pr-4 font-semibold">Services-as-Software (SaS)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">What is sold</td>
              <td className="py-3 pr-4">Access to a software tool</td>
              <td className="py-3 pr-4">A completed deliverable or outcome</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Who does the work</td>
              <td className="py-3 pr-4">The customer, using the software</td>
              <td className="py-3 pr-4">AI agents, with human oversight</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Revenue model</td>
              <td className="py-3 pr-4">Subscription (per seat, per month)</td>
              <td className="py-3 pr-4">Outcome-based or retainer (per deliverable, per project, per month)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Scaling constraint</td>
              <td className="py-3 pr-4">Customer acquisition cost</td>
              <td className="py-3 pr-4">Agent architecture sophistication</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Margin profile</td>
              <td className="py-3 pr-4">70-85% gross margin</td>
              <td className="py-3 pr-4">60-80% gross margin (approaching SaaS)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Customer effort</td>
              <td className="py-3 pr-4">High (customer must learn and operate the tool)</td>
              <td className="py-3 pr-4">Low (customer reviews and approves)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="py-3 pr-4 font-medium">Example in PR</td>
              <td className="py-3 pr-4">Cision, Muck Rack, Meltwater (media databases the agency operates)</td>
              <td className="py-3 pr-4">Shadow (a PR operating system where AI agents perform communications work; the agency reviews output)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        The inversion matters for understanding what is happening in the agency market. SaaS companies spent two decades selling productivity tools to agency workers. Services-as-software companies are replacing the execution layer with AI agents and selling the finished work directly to clients, or providing the PR operating system that enables agencies to do the same.
      </p>

      <ResourceH2>Where does the services-as-software thesis come from?</ResourceH2>

      <p>
        The intellectual lineage runs through three sources, each building on the previous one. Together they represent a convergence of venture capital conviction, institutional restructuring, and market data that rarely aligns this cleanly around a single thesis.
      </p>

      <ResourceH3>Foundation Capital (2025)</ResourceH3>

      <p>
        Ashu Garg published the foundational analysis. The core argument: every professional service that follows a repeatable process is vulnerable to software automation. Accounting, legal review, customer support, marketing execution, media relations. The $4.6 trillion figure represents the aggregate spend on these services globally. Foundation Capital began investing in companies executing the thesis before publishing the research.
      </p>

      <ResourceH3>Y Combinator (Spring 2026)</ResourceH3>

      <p>
        Aaron Epstein&apos;s RFS brief applied the thesis to agencies specifically. His framing: &quot;The next big companies may not sell software. They&apos;ll do the work.&quot; Epstein argued that agencies are the clearest application of the thesis because agency work is process-heavy, execution-dense, and scales poorly with humans. AI-native agencies fix all three constraints. YC began accepting AI-native agency applications for its Spring 2026 batch.
      </p>

      <ResourceH3>UBS / Accenture (2026)</ResourceH3>

      <p>
        UBS analyst Kevin McVeigh projected that the convergence of AI, software, and services into outcome-based integrated systems could create a $1.5 trillion &quot;services-as-software&quot; opportunity by 2035. Accenture restructured its entire organization under a unified &quot;Reinvention Services&quot; model to position for this shift. When a $64 billion consulting firm reorganizes around a thesis, the thesis has institutional weight.
      </p>

      <ResourceH2>Which companies are executing the services-as-software thesis?</ResourceH2>

      <p>
        Funded companies are proving the model across verticals. Each applies the same structural logic: use AI to perform the execution work, sell the completed output to clients, scale without proportional headcount growth.
      </p>

      <p>
        <strong>14.ai</strong> (YC W26, $3M seed): AI-native customer support agency. Replaces ticketing systems, AI software add-ons, and human support agents with a single contract. Backed by General Catalyst, SV Angel, and founders of Dropbox and Slack. (TechCrunch, March 2026)
      </p>

      <p>
        <strong>Mega</strong> ($11.5M Series A, a16z): AI-native marketing agency for SMBs. Zero to $10M revenue in ten months. Positions as &quot;an enterprise-grade growth team, without the agency.&quot;
      </p>

      <p>
        <strong>Multiply</strong> ($9.5M, Mayfield): AI agents for B2B advertising. Emerged from stealth March 2026.
      </p>

      <p>
        <strong>Shadow</strong> (Shadow): The PR operating system for communications agencies. AI agents perform research, media targeting, content production, competitive intelligence, and reporting. Julie Inouye, CEO of Outcast (a Next 15 / Maker Collective agency with clients including OpenAI, Amazon, and Meta), described Shadow in a referral to another agency CEO: &quot;I can just share what problem I&apos;m trying to solve and the Shadow team will work with you to build out a custom solution that feels like an extension of your team.&quot;
      </p>

      <p>
        <strong>EPAM Empathy Lab</strong> (enterprise): AI-native agency for brand growth, launched in North America February 2026. Part of EPAM Systems ($3.4B annual revenue), signaling that the model scales beyond startups.
      </p>

      <ResourceH2>What does services-as-software mean for communications?</ResourceH2>

      <p>
        The communications industry fits the services-as-software pattern precisely. The work is process-intensive: research, media list building, pitch drafting, coverage monitoring, award applications, content production. Most of this work follows repeatable patterns. Senior strategists add the most value in judgment, relationships, and narrative framing, but execution consumes 60-80% of billable hours.
      </p>

      <p>
        The traditional PR agency model has structural constraints that the thesis directly addresses:
      </p>

      <p>
        <strong>Revenue scales with headcount.</strong> Adding a new client requires hiring or reallocating an account team. A PR operating system breaks this constraint by having AI agents handle execution autonomously.
      </p>

      <p>
        <strong>Margins are thin.</strong> Agency gross margins typically range from 30-50%. Services-as-software models push margins toward 60-80% by replacing execution labor with compute. For a detailed framework on how to measure this shift, see <Link href="/resources/pr-operating-system-roi">How to Calculate the ROI of a PR Operating System</Link>.
      </p>

      <p>
        <strong>Quality is inconsistent.</strong> Work quality depends on which humans are assigned to the account. A PR operating system with persistent client memory delivers consistent quality because the same agent architecture and accumulated context serves every client.
      </p>

      <p>
        Amity Gay, Senior Vice President of Communications at Outcast, described using Shadow&apos;s proposal agent after months of accumulated client context: &quot;It gives me feedback on the what and why, particularly when I request a change. It arranges things in a thoughtful, human-like way vs. an obvious AI format.&quot; The agent had significantly streamlined her workflow.
      </p>

      <p>
        The thesis does not argue that AI replaces the strategist. It argues that AI replaces the execution layer, freeing the strategist to focus on judgment and relationships. The agencies that adopt a PR operating system can serve more clients at higher quality with fewer people. Those that do not will compete against services-as-software entrants operating at fundamentally different economics.
      </p>

      <ResourceH2>How the PR operating system enables the services-as-software model</ResourceH2>

      <p>
        The services-as-software thesis requires an enabling architecture. In communications, that architecture is the PR operating system: a unified platform that integrates operations, services, intelligence, monitoring, and reporting so AI agents can execute end-to-end workflows rather than isolated tasks.
      </p>

      <p>
        Without a PR OS, agencies attempting the services-as-software model face the same integration problems that plague traditional tool stacks. AI writing tools cannot access media monitoring data. Pitching tools have no context on competitive positioning. Reporting tools cannot pull from research workflows. The result is a faster version of the same fragmented process, not a structural transformation.
      </p>

      <p>
        A PR operating system solves this by providing persistent client context across every function. When an agent drafts a pitch, it draws on the client&apos;s competitive landscape, recent coverage, messaging framework, and journalist relationship history. When it produces a report, it connects coverage data to the strategic objectives documented during onboarding. This is what makes the margin shift possible: not faster individual tasks, but elimination of the integration tax that consumes 60-75% of the actual cost of running a fragmented stack.
      </p>

      <p>
        The holding companies understand this. WPP Open, Publicis CoreAI, Omnicom Omni, and Havas Converged.AI are all building proprietary versions of this architecture for their networks. Independent agencies cannot license those platforms. Shadow exists to provide the same structural capability as an open PR operating system accessible to any agency.
      </p>

      <ResourceH2>Key Takeaways</ResourceH2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Services-as-software inverts the SaaS model: companies use AI to perform the work and sell the outcome, not the tool.</li>
        <li>Foundation Capital estimates the total addressable market at $4.6 trillion in global professional services spend.</li>
        <li>Y Combinator listed AI-native agencies as a priority investment category in Spring 2026, validating the agency-specific application.</li>
        <li>The PR operating system is the enabling architecture that makes the model work in communications.</li>
        <li>Agencies adopting a PR OS can achieve 60-80% gross margins by replacing execution labor with AI agents while preserving the strategic layer.</li>
        <li>Holding companies are building proprietary versions; independent agencies need an open alternative.</li>
      </ul>

      <ResourceH2>Frequently Asked Questions</ResourceH2>

      <ResourceH3>Is services-as-software the same as AI-as-a-service?</ResourceH3>

      <p>
        No. AI-as-a-service (AIaaS) sells access to AI models or infrastructure (OpenAI&apos;s API, AWS Bedrock, Google Vertex AI). The customer builds their own applications on top. Services-as-software uses AI internally and sells the completed work product. The customer never touches the AI. Foundation Capital&apos;s thesis is specifically about this distinction: the value shifts from selling the tool to selling the outcome.
      </p>

      <ResourceH3>How big is the services-as-software market?</ResourceH3>

      <p>
        Foundation Capital estimates the total addressable market at $4.6 trillion, representing global spend on human-delivered professional services. UBS projects the segment could reach $1.5 trillion by 2035 as Accenture and similar firms restructure around the model. Both estimates focus on services where execution follows repeatable processes: accounting, legal review, customer support, marketing, media relations, and consulting.
      </p>

      <ResourceH3>Why are VCs funding agencies now when they avoided them before?</ResourceH3>

      <p>
        Traditional agencies scale linearly with headcount, producing 30-50% gross margins. Venture capital requires non-linear scaling. AI-native agencies break the headcount constraint: revenue can grow 10x without 10x the employees because AI agents handle execution. Y Combinator&apos;s Aaron Epstein and Foundation Capital&apos;s Ashu Garg both argue this changes the margin structure enough to make agencies venture-backable for the first time.
      </p>

      <ResourceH3>What is the difference between Foundation Capital&apos;s thesis and Y Combinator&apos;s?</ResourceH3>

      <p>
        Foundation Capital frames the thesis as a macroeconomic shift: $4.6 trillion in services spend moving from human delivery to software delivery. Y Combinator frames it as an agency-specific opportunity: AI-native agencies are the vehicle that captures the shift. The theses are complementary. Foundation Capital identifies the market. Y Combinator identifies the business model.
      </p>

      <ResourceH3>What is the role of a PR operating system in services-as-software?</ResourceH3>

      <p>
        A PR operating system is the enabling architecture that makes services-as-software work in communications. It provides the unified data layer, persistent client context, and end-to-end agent workflows required to replace execution labor with AI. Without it, agencies get faster individual tasks but not the structural margin shift the thesis describes. Shadow is the PR operating system built for this model.
      </p>

      <p className="text-sm text-muted-foreground mt-12">
        About the author: Jessen Gibbs is founder and CEO of Shadow, the PR operating system for communications agencies. Shadow&apos;s AI agents handle research, media targeting, content production, competitive intelligence, and reporting for PR agencies including Outcast (Next 15 / Maker Collective) and Haymaker.
      </p>

      <p className="text-sm text-muted-foreground">
        Last updated: April 2026. Published by Shadow (Shadow). Shadow is the PR operating system for communications agencies. Market estimates sourced from Foundation Capital and UBS as cited. Funding data sourced from TechCrunch, company announcements, and Crunchbase. Pricing and projections reflect published figures as of April 2026 and may change.
      </p>
    </>
  );
}
