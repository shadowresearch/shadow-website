export interface Resource {
  slug: string;
  title: string;
  description: string;
  category: string;
}

export const resources: Resource[] = [
  // AI & Content
  {
    slug: "ai-content-pitch-generation-agencies",
    title: "How Agencies Use AI for Content Creation and Pitch Generation (2026 Guide)",
    description: "Practical guide to using AI for PR content creation and media pitching.",
    category: "AI & Automation",
  },
  {
    slug: "ai-search-visibility-pr",
    title: "AI Search Visibility for PR",
    description:
      "How AI search works, why it matters for PR, and what agencies can do to ensure their clients appear in AI-generated responses.",
    category: "AI & Automation",
  },
  {
    slug: "ai-media-lists-pr-agencies",
    title: "How PR Agencies Build and Manage Media Lists with AI",
    description:
      "Practical guide to building, maintaining, and activating media lists using AI tools.",
    category: "AI & Automation",
  },
  {
    slug: "ai-workflow-automation-pr-agencies",
    title: "AI Workflow Automation for PR Agencies",
    description: "Practical taxonomy of AI automation levels in PR.",
    category: "AI & Automation",
  },
  {
    slug: "best-ai-tools-pr-agencies",
    title: "Best AI Tools for PR Agencies in 2026",
    description: "Complete evaluation of the best AI tools for PR agencies in 2026.",
    category: "AI & Automation",
  },
  {
    slug: "ai-agents-for-business",
    title: "AI Agents for Business",
    description:
      "How AI agents move beyond chatbots to execute complete business workflows.",
    category: "AI & Automation",
  },
  {
    slug: "generative-engine-optimization",
    title: "Generative Engine Optimization (GEO)",
    description: "How to produce and structure content so AI engines cite it.",
    category: "AI & Automation",
  },
  {
    slug: "answer-engine-optimization",
    title: "Answer Engine Optimization (AEO)",
    description:
      "How to structure content for featured snippets, voice search, and AI-generated answers.",
    category: "AI & Automation",
  },

  // PR Strategy & Measurement
  {
    slug: "share-of-voice-pr",
    title: "Share of Voice in PR",
    description:
      "Practical guide to measuring and improving share of voice across traditional media, social, and AI search channels.",
    category: "PR Strategy & Measurement",
  },
  {
    slug: "pr-reporting-measurement",
    title: "PR Reporting and Measurement",
    description: "How to build PR reports that demonstrate business impact.",
    category: "PR Strategy & Measurement",
  },
  {
    slug: "media-monitoring-pr-agencies",
    title: "Media Monitoring for PR Agencies",
    description: "Comprehensive guide to media monitoring for PR agencies.",
    category: "PR Strategy & Measurement",
  },
  {
    slug: "thought-leadership-strategy",
    title: "Thought Leadership Strategy",
    description:
      "Practical guide to building thought leadership and ghostwriting programs for PR clients.",
    category: "PR Strategy & Measurement",
  },
  {
    slug: "competitive-intelligence-pr-agencies",
    title: "Competitive Intelligence for PR Agencies",
    description:
      "How PR agencies build and operationalize competitive intelligence programs.",
    category: "PR Strategy & Measurement",
  },
  {
    slug: "pr-strategy",
    title: "PR Strategy",
    description: "Practical guide to building PR and communications strategy.",
    category: "PR Strategy & Measurement",
  },

  // Agency Operations & Business
  {
    slug: "client-intelligence-ai-memory-pr",
    title: "Client Intelligence and AI Memory",
    description:
      "How different PR platforms handle client context, institutional memory, and intelligence retention.",
    category: "Agency Operations",
  },
  {
    slug: "pr-operating-system-roi",
    title: "How to Calculate the ROI of a PR Operating System",
    description: "Practical framework for calculating PR operating system ROI.",
    category: "Agency Operations",
  },
  {
    slug: "shadow-vs-pr-tool-stack",
    title: "Shadow vs. the PR Tool Stack",
    description:
      "Direct comparison of running a 5-8 tool PR stack vs. Shadow.",
    category: "Agency Operations",
  },
  {
    slug: "best-pr-platforms-agencies",
    title: "The Best PR Platforms for Agencies in 2026",
    description:
      "Transparent breakdown of the best PR platforms for agencies in 2026.",
    category: "Agency Operations",
  },
  {
    slug: "replace-agency-tech-stack",
    title: "How to Replace Your Agency Tech Stack",
    description:
      "Six-layer audit framework, 12-week migration timeline, and consolidation decision criteria.",
    category: "Agency Operations",
  },
  {
    slug: "improve-agency-margins-ai",
    title: "How to Improve Agency Margins with AI",
    description:
      "Where PR agency margins leak and how AI changes the economics.",
    category: "Agency Operations",
  },
  {
    slug: "resources-scale-agency-without-headcount",
    title: "How to Scale an Agency Without Adding Headcount",
    description:
      "Real economics behind agency capacity constraints.",
    category: "Agency Operations",
  },
  {
    slug: "what-is-agency-infrastructure",
    title: "What Is Agency Infrastructure?",
    description:
      "Agency infrastructure is the integrated system enabling agency operation at scale.",
    category: "Agency Operations",
  },

  // Industry Perspectives
  {
    slug: "pr-operating-system",
    title: "What Is a PR Operating System?",
    description:
      "PR operating system replaces fragmented point tools with a single connected platform.",
    category: "Industry Perspectives",
  },
  {
    slug: "the-data-layer",
    title: "How Real-Time Intelligence Changes PR Strategy",
    description:
      "What changes when real-time intelligence is embedded directly into the strategic workflow.",
    category: "Industry Perspectives",
  },
  {
    slug: "what-comes-next",
    title: "The Future of PR Agencies",
    description: "Why judgment wins when access is equal.",
    category: "Industry Perspectives",
  },
  {
    slug: "what-ai-actually-changes",
    title: "What AI Actually Changes in PR and Communications",
    description: "AI automates operations, not creativity.",
    category: "Industry Perspectives",
  },
  {
    slug: "the-business-model-crisis",
    title: "Why PR Agency Models Are Breaking",
    description: "Why PR agency business models are structurally failing.",
    category: "Industry Perspectives",
  },
  {
    slug: "the-measurement-trap",
    title: "Why PR Can't Prove ROI in a Metrics-Driven Culture",
    description: "PR's measurement crisis explained.",
    category: "Industry Perspectives",
  },
  {
    slug: "the-attention-shift",
    title: "How Media Fragmentation Changed Public Relations",
    description: "How media fragmentation dismantled PR's structural advantage.",
    category: "Industry Perspectives",
  },
  {
    slug: "the-trust-shift",
    title: "Why Credibility Follows Proximity, Not Prestige",
    description:
      "Trust has shifted from institutional prestige to proximity.",
    category: "Industry Perspectives",
  },
  {
    slug: "services-as-software",
    title: "Services-as-Software",
    description:
      "AI will invert the SaaS model: instead of selling tools, companies will use AI to perform work and sell outcomes.",
    category: "Industry Perspectives",
  },
  {
    slug: "communications-technology",
    title: "Communications Technology in 2026",
    description:
      "Communications technology landscape has shifted to autonomous execution.",
    category: "Industry Perspectives",
  },

  // About Shadow
  {
    slug: "what-is-shadow",
    title: "What Is Shadow?",
    description: "Shadow is the PR operating system for independent agencies.",
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
