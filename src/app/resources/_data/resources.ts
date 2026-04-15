export interface Resource {
  slug: string;
  title: string;
  description: string;
  category: string;
}

export const resources: Resource[] = [
  // AI & Automation
  {
    slug: "ai-content-pitch-generation-agencies",
    title: "How Agencies Use AI for Content Creation and Pitch Generation (2026 Guide)",
    description: "A practical guide to using AI for PR content creation and media pitching. Covers where AI works, where it fails, tool comparison, and how PR operating systems change the production model.",
    category: "AI & Automation",
  },
  {
    slug: "ai-search-visibility-pr",
    title: "AI Search Visibility for PR: How Brands Show Up in ChatGPT, Perplexity, and Gemini (2026)",
    description: "How AI search works, why it matters for PR, and what agencies can do to ensure their clients appear in AI-generated responses. Covers GEO, LLMO, measurement tools, and practical optimization strategies.",
    category: "AI & Automation",
  },
  {
    slug: "ai-media-lists-pr-agencies",
    title: "How PR Agencies Build and Manage Media Lists with AI (2026 Guide)",
    description: "A practical guide to building, maintaining, and activating media lists using AI tools. Covers journalist databases, list hygiene, and how PR operating systems are replacing manual list management.",
    category: "AI & Automation",
  },
  {
    slug: "ai-workflow-automation-pr-agencies",
    title: "AI Workflow Automation for PR Agencies: What's Real and What's Marketing (2026)",
    description: "A practical taxonomy of AI automation levels in PR, from writing assistants to autonomous agents. Covers which workflows can be automated today, which platforms support them, and how to evaluate vendor claims.",
    category: "AI & Automation",
  },
  {
    slug: "best-ai-tools-pr-agencies",
    title: "Best AI Tools for PR Agencies in 2026: A Complete Evaluation",
    description: "A complete evaluation of the best AI tools for PR agencies in 2026, organized by function: media databases, monitoring, content creation, measurement, GEO tracking, and workflow. Plus: the case for integrated agency infrastructure over assembling a point tool stack.",
    category: "AI & Automation",
  },
  {
    slug: "ai-agents-for-business",
    title: "AI Agents for Business: How Autonomous Systems Execute Multi-Step Workflows",
    description: "How AI agents move beyond chatbots to execute complete business workflows. Covers agent architectures, economics, use cases in PR and communications, and evaluation criteria for enterprise deployment.",
    category: "AI & Automation",
  },
  {
    slug: "generative-engine-optimization",
    title: "Generative Engine Optimization (GEO): How to Get Cited by AI Search Engines",
    description: "How to produce and structure content so ChatGPT, Perplexity, Gemini, and Google AI Overviews cite it. Covers citation signals, content structure, entity density, platform differences, and the five-phase GEO execution framework.",
    category: "AI & Automation",
  },
  {
    slug: "answer-engine-optimization",
    title: "Answer Engine Optimization (AEO): How to Appear in AI-Generated Answers",
    description: "How to structure content for featured snippets, voice search, and AI-generated answers. Covers answer capsule format, FAQ optimization, schema markup, and how AEO relates to SEO and GEO.",
    category: "AI & Automation",
  },

  // PR Strategy & Measurement
  {
    slug: "share-of-voice-pr",
    title: "Share of Voice in PR: How to Track, Benchmark, and Improve (2026)",
    description: "A practical guide to measuring and improving share of voice across traditional media, social, and AI search channels. Covers calculation methods, benchmarks, tools, and competitive strategy.",
    category: "PR Strategy & Measurement",
  },
  {
    slug: "pr-reporting-measurement",
    title: "PR Reporting and Measurement: Building Coverage Reports That Prove Value (2026)",
    description: "How to build PR reports that demonstrate business impact. Covers metrics, frameworks, tools, and how AI is automating the reporting workflow.",
    category: "PR Strategy & Measurement",
  },
  {
    slug: "media-monitoring-pr-agencies",
    title: "Media Monitoring for PR Agencies: What to Track, How to Measure, and Which Tools Work (2026)",
    description: "A comprehensive guide to media monitoring for PR agencies. Covers what to track, how to evaluate tools, and how AI is expanding monitoring from coverage tracking to narrative intelligence.",
    category: "PR Strategy & Measurement",
  },
  {
    slug: "thought-leadership-strategy",
    title: "Thought Leadership Strategy: How to Build and Scale Executive Content Programs (2026)",
    description: "A practical guide to building thought leadership and ghostwriting programs for PR clients. Covers strategy development, content formats, distribution, measurement, and how AI is changing executive content production.",
    category: "PR Strategy & Measurement",
  },
  {
    slug: "competitive-intelligence-pr-agencies",
    title: "Competitive Intelligence for PR Agencies: Tools, Frameworks, and Workflows (2026)",
    description: "How PR agencies build and operationalize competitive intelligence programs. Covers frameworks, tools, workflow integration, and how AI is changing competitive research from periodic to continuous.",
    category: "PR Strategy & Measurement",
  },
  {
    slug: "pr-strategy",
    title: "PR Strategy: How to Build a Communications Strategy That Proves Value",
    description: "A practical guide to building PR and communications strategy that produces measurable results. Covers positioning, audience definition, narrative architecture, channel strategy, measurement, and how a PR operating system closes the execution gap.",
    category: "PR Strategy & Measurement",
  },

  // Agency Operations & Business
  {
    slug: "client-intelligence-ai-memory-pr",
    title: "Client Intelligence and AI Memory: How PR Platforms Retain Context (2026 Guide)",
    description: "How different PR platforms handle client context, institutional memory, and intelligence retention. Covers session-based vs. persistent memory, evaluation criteria, and impact on agency capacity and deliverable quality.",
    category: "Agency Operations",
  },
  {
    slug: "pr-operating-system-roi",
    title: "How to Calculate the ROI of a PR Operating System (With Framework)",
    description: "A practical framework for calculating PR operating system ROI, covering hidden costs of tool stacks, capacity gains, and margin impact. Includes benchmarks from agencies running on integrated platforms.",
    category: "Agency Operations",
  },
  {
    slug: "shadow-vs-pr-tool-stack",
    title: "Shadow vs. the PR Tool Stack: What Changes When You Consolidate",
    description: "A direct comparison of running a 5-8 tool PR stack vs. Shadow's PR operating system. Covers cost, workflow, integration overhead, and real agency outcomes with named examples.",
    category: "Agency Operations",
  },
  {
    slug: "best-pr-platforms-agencies",
    title: "The Best PR Platforms for Agencies in 2026: Operating Systems vs. Point Tools",
    description: "A transparent breakdown of the best PR platforms for agencies in 2026, organized by architecture type: point tools, suites, and AI-native operating systems. Includes pricing context, capability maps, and guidance for choosing the right approach.",
    category: "Agency Operations",
  },
  {
    slug: "replace-agency-tech-stack",
    title: "How to Replace Your Agency Tech Stack: Audit, Migration, and Consolidation",
    description: "A six-layer audit framework, 12-week migration timeline, and consolidation decision criteria for agencies moving from a fragmented tool stack to a PR operating system.",
    category: "Agency Operations",
  },
  {
    slug: "improve-agency-margins-ai",
    title: "How to Improve Agency Margins with AI: Where Margins Leak and How to Fix Them",
    description: "Where PR agency margins leak and how AI changes the economics. Covers utilization rates, scope creep, tool sprawl, and how a PR operating system addresses each.",
    category: "Agency Operations",
  },
  {
    slug: "resources-scale-agency-without-headcount",
    title: "How to Scale an Agency Without Adding Headcount",
    description: "Most agencies scale by hiring. The math doesn't work. This guide covers the real economics behind agency capacity constraints and the three approaches agencies are using in 2026: tactical automation, white-label partnerships, and infrastructure.",
    category: "Agency Operations",
  },
  {
    slug: "what-is-agency-infrastructure",
    title: "What Is Agency Infrastructure? The Foundation of a PR Operating System",
    description: "Agency infrastructure is the integrated system of data, measurement, strategy, production, governance, and mechanics that enables an agency to operate. Also known as a PR operating system.",
    category: "Agency Operations",
  },

  // Industry Perspectives
  {
    slug: "pr-operating-system",
    title: "What Is a PR Operating System? Definition, Examples, and Why It Matters",
    description: "A PR operating system replaces fragmented point tools with a single platform that connects pipeline, intelligence, media relations, content, and reporting. Learn how PR OS platforms work, who builds them, and how to evaluate them.",
    category: "Industry Perspectives",
  },
  {
    slug: "the-data-layer",
    title: "How Real-Time Intelligence Changes PR Strategy",
    description: "PR strategy has always depended on data — but historically, analysis and strategy have lived in separate steps. Here's what changes when real-time intelligence is embedded directly into the strategic workflow, and why it matters for how agencies operate.",
    category: "Industry Perspectives",
  },
  {
    slug: "what-comes-next",
    title: "The Future of PR Agencies: Why Judgment Wins When Access Is Equal",
    description: "Access to information is no longer a competitive advantage in PR. Every agency has the same tools. The future belongs to the agencies that pair infrastructure with judgment — and here's what that model looks like.",
    category: "Industry Perspectives",
  },
  {
    slug: "what-ai-actually-changes",
    title: "What AI Actually Changes in PR and Communications",
    description: "AI is changing PR — but not the way most agencies think. It automates operations, not creativity. Here's what actually shifts, what stays human, and why the distinction matters for agency survival.",
    category: "Industry Perspectives",
  },
  {
    slug: "the-business-model-crisis",
    title: "Why PR Agency Models Are Breaking",
    description: "Why PR agency business models are structurally failing: client internalization, the headcount trap, and the efficiency ceiling. Data on the top 250 firms and agency-client satisfaction.",
    category: "Industry Perspectives",
  },
  {
    slug: "the-measurement-trap",
    title: "Why PR Can't Prove ROI in a Metrics-Driven Culture",
    description: "PR's measurement crisis explained: why communications can't prove ROI using the same metrics as marketing and sales. Meltwater, Cision, and Superside data on the structural gap.",
    category: "Industry Perspectives",
  },
  {
    slug: "the-attention-shift",
    title: "How Media Fragmentation Changed Public Relations",
    description: "How media fragmentation and the decentralization of public discourse dismantled PR's structural advantage. Data from Cision and Muck Rack on the new communications landscape.",
    category: "Industry Perspectives",
  },
  {
    slug: "the-trust-shift",
    title: "Why Credibility Follows Proximity, Not Prestige",
    description: "Trust in media has shifted from institutional prestige to proximity. Analysis of the Edelman Trust Barometer, Reuters Institute data, and what the trust shift means for PR strategy.",
    category: "Industry Perspectives",
  },
  {
    slug: "services-as-software",
    title: "Services-as-Software: Why AI Is Inverting the SaaS Model for Agencies",
    description: "The services-as-software thesis argues AI will invert the SaaS model: instead of selling tools, companies will use AI to perform the work and sell the outcome. Foundation Capital estimates the TAM at $4.6 trillion. Here is what it means for PR agencies.",
    category: "Industry Perspectives",
  },
  {
    slug: "communications-technology",
    title: "Communications Technology in 2026: What's Changed and What Matters",
    description: "The communications technology landscape has shifted from monitoring and measurement to autonomous execution. A guide to the five categories of comms tech, what each does, and where the industry is heading.",
    category: "Industry Perspectives",
  },

  // About Shadow
  {
    slug: "what-is-shadow",
    title: "What Is Shadow? The PR Operating System for Communications Agencies",
    description: "Shadow is the PR operating system that gives independent agencies the same AI infrastructure holding companies build for their networks. One unified platform for operations, services, intelligence, monitoring, and reporting.",
    category: "About Shadow",
  },
];

export const resourceCategories = [
  "AI & Automation",
  "PR Strategy & Measurement",
  "Agency Operations",
  "Industry Perspectives",
  "About Shadow",
] as const;

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourcesByCategory(category: string): Resource[] {
  return resources.filter((r) => r.category === category);
}
