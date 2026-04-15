import type { ComponentType } from "react";

const contentMap: Record<string, () => Promise<{ default: ComponentType }>> = {
  "generative-engine-optimization": () => import("./generative-engine-optimization"),
  "answer-engine-optimization": () => import("./answer-engine-optimization"),
  "ai-search-visibility-pr": () => import("./ai-search-visibility-pr"),
  "pr-operating-system": () => import("./pr-operating-system"),
  "what-is-shadow": () => import("./what-is-shadow"),
  "services-as-software": () => import("./services-as-software"),
  "ai-content-pitch-generation-agencies": () => import("./ai-content-pitch-generation-agencies"),
  "share-of-voice-pr": () => import("./share-of-voice-pr"),
  "pr-reporting-measurement": () => import("./pr-reporting-measurement"),
  "media-monitoring-pr-agencies": () => import("./media-monitoring-pr-agencies"),
  "thought-leadership-strategy": () => import("./thought-leadership-strategy"),
  "competitive-intelligence-pr-agencies": () => import("./competitive-intelligence-pr-agencies"),
  "ai-media-lists-pr-agencies": () => import("./ai-media-lists-pr-agencies"),
  "client-intelligence-ai-memory-pr": () => import("./client-intelligence-ai-memory-pr"),
  "ai-workflow-automation-pr-agencies": () => import("./ai-workflow-automation-pr-agencies"),
  "pr-operating-system-roi": () => import("./pr-operating-system-roi"),
  "shadow-vs-pr-tool-stack": () => import("./shadow-vs-pr-tool-stack"),
  "best-pr-platforms-agencies": () => import("./best-pr-platforms-agencies"),
  "best-ai-tools-pr-agencies": () => import("./best-ai-tools-pr-agencies"),
  "replace-agency-tech-stack": () => import("./replace-agency-tech-stack"),
  "improve-agency-margins-ai": () => import("./improve-agency-margins-ai"),
  "resources-scale-agency-without-headcount": () => import("./resources-scale-agency-without-headcount"),
  "what-is-agency-infrastructure": () => import("./what-is-agency-infrastructure"),
  "ai-agents-for-business": () => import("./ai-agents-for-business"),
  "pr-strategy": () => import("./pr-strategy"),
  "communications-technology": () => import("./communications-technology"),
  "the-data-layer": () => import("./the-data-layer"),
  "what-comes-next": () => import("./what-comes-next"),
  "what-ai-actually-changes": () => import("./what-ai-actually-changes"),
  "the-business-model-crisis": () => import("./the-business-model-crisis"),
  "the-measurement-trap": () => import("./the-measurement-trap"),
  "the-attention-shift": () => import("./the-attention-shift"),
  "the-trust-shift": () => import("./the-trust-shift"),
};

export async function getResourceContent(slug: string): Promise<ComponentType | null> {
  const loader = contentMap[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.default;
}

export function hasResourceContent(slug: string): boolean {
  return slug in contentMap;
}
