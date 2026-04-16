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
    descriptor: "Agency",
    headline: "How Outcast absorbed 3x inbound growth in 90 days without adding headcount",
    summary:
      "Outcast needed to handle surging new business volume without pulling senior time from active clients. With Shadow running triage, intelligence, proposals, SOWs, and agreements, the team tripled their pipeline throughput — saving 80+ hours a week across hundreds of accounts.",
    stats: [
      { label: "Inbound growth in 90 days", value: "3x" },
      { label: "Hours saved per week", value: "80+" },
      { label: "Custom agents", value: "22" },
    ],
  },
  {
    slug: "haymaker",
    team: "Haymaker",
    descriptor: "Agency",
    headline: "How Haymaker cut awards and events time by 50% in 30 days",
    summary:
      "Haymaker was spending weeks per cycle on awards research, roadmaps, briefs, and final submissions across their client roster. Shadow automated the full lifecycle — halving production time and saving 40+ hours across awards and events workflows.",
    stats: [
      { label: "Faster first drafts", value: "90%" },
      { label: "Clients covered", value: "15+" },
      { label: "Overall time reduction", value: "50%" },
    ],
  },
  {
    slug: "inworld-ai",
    team: "Inworld AI",
    descriptor: "In-house",
    headline: "How Inworld AI built a full launch strategy for next-generation voice models",
    summary:
      "Inworld needed a data-driven launch plan for voice AI models with no precedent in the market. Shadow helped the team analyze thousands of articles across hundreds of journalists, compound it with keyword data to find positioning that's on beat for the media and meets buyers where they are, and build a media list of 300+ journalists with personalized pitches.",
    stats: [
      { label: "Personalized pitches", value: "300+" },
      { label: "Months of media data analyzed", value: "38" },
      { label: "From zero to launch-ready", value: "3 days" },
    ],
  },
  {
    slug: "shadow-ai-visibility",
    team: "Shadow",
    descriptor: "Internal",
    headline: "How Shadow outranked Muck Rack, Cision, and Meltwater across 100+ AI prompts in 3 days",
    summary:
      "Shadow used its own platform to audit AI visibility across ChatGPT, Gemini, and Perplexity — then produced targeted content that doubled mention rates and overtook established industry leaders across 100+ competitive prompts in 72 hours.",
    stats: [
      { label: "Mention rate increase", value: "2x" },
      { label: "Competitive prompts won", value: "100+" },
      { label: "Time to results", value: "3 days" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
