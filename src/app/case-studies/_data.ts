export interface CaseStudy {
  slug: string;
  team: string;
  descriptor: string;
  headline: string;
  summary: string;
  stats: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "outcast",
    team: "Outcast",
    descriptor: "Next 15 Agency",
    headline: "How Outcast automated new business from inbound to signed agreement",
    summary:
      "Outcast uses Shadow to run their entire new business pipeline. From inbound triage and prospect research to proposals and service agreements — Shadow handles the operational lift so the team can focus on winning the relationship.",
    stats: [
      { label: "Proposals generated", value: "50+" },
      { label: "Inbound response time", value: "<1hr" },
      { label: "Pipeline managed", value: "End-to-end" },
    ],
  },
  {
    slug: "haymaker",
    team: "Haymaker",
    descriptor: "Agency",
    headline: "How Haymaker automated awards and events across their client roster",
    summary:
      "Haymaker uses Shadow to manage the full awards and events lifecycle. From identifying the right opportunities and building roadmaps to drafting briefs and producing final submissions — Shadow has helped them scale a process that used to bottleneck the entire team.",
    stats: [
      { label: "Clients covered", value: "20+" },
      { label: "Submissions produced", value: "100+" },
      { label: "Process", value: "End-to-end" },
    ],
  },
  {
    slug: "inworld-ai",
    team: "Inworld AI",
    descriptor: "Startup · Voice AI",
    headline: "\"AI just learned to read the room\" — launching the world's best voice AI models",
    summary:
      "Shadow built the full launch strategy for Inworld AI's TTS-1.5 and TTS-2.0 — the first voice models with native context awareness and empathetic adaptation. From market analysis and narrative positioning to a three-phase media roadmap and 40+ targeted journalist pitches, Shadow delivered a data-driven campaign that positioned Inworld as the voice layer for the agentic AI era.",
    stats: [
      { label: "Journalists targeted", value: "40+" },
      { label: "Media tiers mapped", value: "3" },
      { label: "Phase roadmap", value: "18mo" },
    ],
  },
  {
    slug: "shadow-ai-visibility",
    team: "Shadow",
    descriptor: "Internal · AI Visibility",
    headline: "How Shadow boosted its own AI visibility by 70% in three days",
    summary:
      "Shadow used its own GEO auditing and content production tools to analyze how it appeared across ChatGPT, Gemini, Perplexity, and Claude — then produced and published optimized content that increased AI search citation rates by 70% in 72 hours.",
    stats: [
      { label: "Visibility increase", value: "70%" },
      { label: "Time to results", value: "3 days" },
      { label: "AI engines audited", value: "4" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
