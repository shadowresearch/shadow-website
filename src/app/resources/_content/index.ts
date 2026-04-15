import type { ComponentType } from "react";

const contentMap: Record<string, () => Promise<{ default: ComponentType }>> = {
  "generative-engine-optimization": () => import("./generative-engine-optimization"),
  "answer-engine-optimization": () => import("./answer-engine-optimization"),
  "ai-search-visibility-pr": () => import("./ai-search-visibility-pr"),
  "pr-operating-system": () => import("./pr-operating-system"),
  "what-is-shadow": () => import("./what-is-shadow"),
  "services-as-software": () => import("./services-as-software"),
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
