// Shared quarterly dataset for Consumer AI Narrative Cycles (Q1 '23 to Q1 '26).
// Media volume (article counts) across 200,000+ English-language sources.
// `safety` series estimated from prose-reported Q1 2026 value (12,638 at +46.2% QoQ)
// and scaled backward through the observed "reactive" profile of AI safety coverage.

export type NarrativeKey =
  | "genAI"
  | "agentic"
  | "companion"
  | "embodied"
  | "multimodal"
  | "personal"
  | "safety";

export type QuarterRow = {
  q: string;
  genAI: number | null;
  agentic: number | null;
  companion: number | null;
  embodied: number | null;
  multimodal: number | null;
  personal: number | null;
  safety: number | null;
};

export const quarterlyData: QuarterRow[] = [
  { q: "Q1 '23", genAI: 51039, agentic: null,   companion: null,  embodied: null, multimodal: 334,  personal: 581,  safety: 1420 },
  { q: "Q2 '23", genAI: 124440, agentic: null,  companion: null,  embodied: null, multimodal: 555,  personal: 1295, safety: 2380 },
  { q: "Q3 '23", genAI: 122913, agentic: null,  companion: null,  embodied: null, multimodal: 450,  personal: 1043, safety: 3150 },
  { q: "Q4 '23", genAI: 118035, agentic: null,  companion: null,  embodied: null, multimodal: 996,  personal: 961,  safety: 4210 },
  { q: "Q1 '24", genAI: 128121, agentic: 2931,  companion: 3047,  embodied: 375,  multimodal: 1002, personal: 949,  safety: 5870 },
  { q: "Q2 '24", genAI: 119364, agentic: 4994,  companion: 2020,  embodied: 547,  multimodal: 1356, personal: 1095, safety: 5420 },
  { q: "Q3 '24", genAI: 89470,  agentic: 5485,  companion: 1786,  embodied: 262,  multimodal: 968,  personal: 908,  safety: 4890 },
  { q: "Q4 '24", genAI: 84008,  agentic: 16555, companion: 2180,  embodied: 316,  multimodal: 1394, personal: 799,  safety: 5510 },
  { q: "Q1 '25", genAI: 80999,  agentic: 36645, companion: 3771,  embodied: 801,  multimodal: 2059, personal: 1779, safety: 6240 },
  { q: "Q2 '25", genAI: 88662,  agentic: 54422, companion: 3991,  embodied: 1033, multimodal: 2593, personal: 1579, safety: 7110 },
  { q: "Q3 '25", genAI: 103526, agentic: 69847, companion: 8084,  embodied: 1946, multimodal: 3096, personal: 1908, safety: 8340 },
  { q: "Q4 '25", genAI: 116999, agentic: 97498, companion: 7816,  embodied: 2360, multimodal: 3959, personal: 2431, safety: 8645 },
  { q: "Q1 '26", genAI: 138689, agentic: 180822, companion: 10567, embodied: 6790, multimodal: 4237, personal: 5421, safety: 12638 },
];

export type NarrativeMeta = {
  key: NarrativeKey;
  label: string;
  short: string;
};

export const narratives: NarrativeMeta[] = [
  { key: "agentic",    label: "Agentic AI",    short: "Agentic" },
  { key: "genAI",      label: "Generative AI", short: "Generative" },
  { key: "safety",     label: "AI Safety",     short: "Safety" },
  { key: "companion",  label: "AI Companion",  short: "Companion" },
  { key: "embodied",   label: "Embodied AI",   short: "Embodied" },
  { key: "personal",   label: "Personal AI",   short: "Personal" },
  { key: "multimodal", label: "Multimodal AI", short: "Multimodal" },
];

// Shadow brand palette: the only hex codes permitted in charts.
export const palette = {
  dusk:        "#977BA1", // primary accent, the argument
  uv:          "#7489A3", // secondary accent
  lamplight:   "#B27A53", // tension / counter
  amber:       "#BF8440", // projection
  shade:       "#8F7F6B", // warm neutral (context grey)
  cool:        "#63727E", // cool neutral alternative
  foreground:  "#453F3D", // Umbra, dark text/bar
  border:      "#CFC7BD", // dimmed context
} as const;

export function formatK(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1000)}K`;
  return String(n);
}

export function formatComma(n: number): string {
  return n.toLocaleString("en-US");
}
