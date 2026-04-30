// Shared dataset for the PR & Comms Agency Narrative Intelligence report.
// Source workbook: PR_Comms_Agency_Narrative_Intelligence_2026-04.xlsx
// Window: Oct 27, 2025 – Apr 27, 2026.

export type NarrativeKey =
  | "geo"
  | "aiAdoption"
  | "trust"
  | "crisis"
  | "earned"
  | "consolidation"
  | "talent"
  | "advocacy";

export type MonthRow = {
  m: string;
  geo: number;
  aiAdoption: number;
  trust: number;
  crisis: number;
  earned: number;
  consolidation: number;
  talent: number;
  advocacy: number;
};

// Monthly article counts by narrative. Earned-media only, English, dedup'd.
export const monthlyData: MonthRow[] = [
  { m: "Oct '25", geo: 2,  aiAdoption: 13,  trust: 0,   crisis: 1,  earned: 3,  consolidation: 16, talent: 3,  advocacy: 2 },
  { m: "Nov '25", geo: 5,  aiAdoption: 68,  trust: 0,   crisis: 4,  earned: 15, consolidation: 96, talent: 18, advocacy: 8 },
  { m: "Dec '25", geo: 8,  aiAdoption: 50,  trust: 0,   crisis: 6,  earned: 22, consolidation: 63, talent: 22, advocacy: 12 },
  { m: "Jan '26", geo: 14, aiAdoption: 138, trust: 0,   crisis: 8,  earned: 30, consolidation: 34, talent: 25, advocacy: 15 },
  { m: "Feb '26", geo: 19, aiAdoption: 205, trust: 0,   crisis: 12, earned: 32, consolidation: 37, talent: 28, advocacy: 18 },
  { m: "Mar '26", geo: 27, aiAdoption: 80,  trust: 0,   crisis: 15, earned: 35, consolidation: 52, talent: 30, advocacy: 22 },
  { m: "Apr '26", geo: 36, aiAdoption: 59,  trust: 498, crisis: 18, earned: 28, consolidation: 45, talent: 22, advocacy: 12 },
];

export type Lifecycle =
  | "Accelerating"
  | "Growing"
  | "Spiking"
  | "Episodic"
  | "Plateau";

export type Priority =
  | "PRIMARY"
  | "SECONDARY"
  | "DEFEND"
  | "MONITOR"
  | "SUPPORT"
  | "CONTEXT"
  | "EXIT";

export type NarrativeMeta = {
  key: NarrativeKey;
  label: string;
  short: string;
  lifecycle: Lifecycle;
  mediaVol: number;       // 6-mo article count
  searchVol: number;      // monthly searches across cluster
  aiMentions: number;     // mentions across 60 GEO queries
  ratio: number;          // search/media supply ratio
  priority: Priority;
};

export const narratives: NarrativeMeta[] = [
  { key: "geo",           label: "GEO / AI Visibility",         short: "GEO",          lifecycle: "Accelerating", mediaVol: 111, searchVol: 5760, aiMentions: 8,  ratio: 0.02, priority: "PRIMARY"   },
  { key: "aiAdoption",    label: "AI Adoption & Transformation", short: "AI Adoption",  lifecycle: "Growing",      mediaVol: 613, searchVol: 4540, aiMentions: 32, ratio: 0.13, priority: "DEFEND"    },
  { key: "trust",         label: "Trust & Credibility",          short: "Trust",        lifecycle: "Spiking",      mediaVol: 498, searchVol: 480,  aiMentions: 5,  ratio: 1.04, priority: "MONITOR"   },
  { key: "crisis",        label: "Crisis PR in the AI Era",      short: "Crisis",       lifecycle: "Accelerating", mediaVol: 64,  searchVol: 1440, aiMentions: 12, ratio: 0.04, priority: "SECONDARY" },
  { key: "earned",        label: "Earned Media & Measurement",   short: "Earned",       lifecycle: "Accelerating", mediaVol: 165, searchVol: 830,  aiMentions: 6,  ratio: 0.20, priority: "SUPPORT"   },
  { key: "consolidation", label: "Consolidation & M&A",          short: "Consolidation",lifecycle: "Episodic",     mediaVol: 343, searchVol: 340,  aiMentions: 18, ratio: 1.01, priority: "CONTEXT"   },
  { key: "talent",        label: "Talent & Workforce",           short: "Talent",       lifecycle: "Growing",      mediaVol: 148, searchVol: 360,  aiMentions: 3,  ratio: 0.41, priority: "SUPPORT"   },
  { key: "advocacy",      label: "Corporate Advocacy Retreat",   short: "Advocacy",     lifecycle: "Plateau",      mediaVol: 89,  searchVol: 50,   aiMentions: 0,  ratio: 1.78, priority: "EXIT"      },
];

// AI engine mention frequency. 15 prompts × 4 providers = 60 queries.
// SOV is share of those 60 queries that surface the entity.
export type EntityRow = {
  entity: string;
  total: number;        // /60
  sov: number;          // 0–1
  chatgpt: number;
  claude: number;
  gemini: number;
  perplexity: number;
};

export const entities: EntityRow[] = [
  { entity: "Edelman",            total: 39, sov: 0.65, chatgpt: 11, claude: 11, gemini: 9, perplexity: 8 },
  { entity: "Weber Shandwick",    total: 29, sov: 0.48, chatgpt: 8,  claude: 7,  gemini: 9, perplexity: 5 },
  { entity: "Burson / WPP",       total: 24, sov: 0.40, chatgpt: 6,  claude: 8,  gemini: 6, perplexity: 4 },
  { entity: "Ruder Finn",         total: 17, sov: 0.28, chatgpt: 6,  claude: 4,  gemini: 3, perplexity: 4 },
  { entity: "Finn Partners",      total: 16, sov: 0.27, chatgpt: 3,  claude: 4,  gemini: 4, perplexity: 5 },
  { entity: "BCW",                total: 16, sov: 0.27, chatgpt: 3,  claude: 5,  gemini: 5, perplexity: 3 },
  { entity: "FleishmanHillard",   total: 15, sov: 0.25, chatgpt: 6,  claude: 4,  gemini: 2, perplexity: 3 },
  { entity: "Ketchum",            total: 15, sov: 0.25, chatgpt: 5,  claude: 2,  gemini: 4, perplexity: 4 },
  { entity: "WPP (holding co)",   total: 13, sov: 0.22, chatgpt: 3,  claude: 5,  gemini: 3, perplexity: 2 },
  { entity: "Omnicom (holding co)", total: 10, sov: 0.17, chatgpt: 2, claude: 3, gemini: 3, perplexity: 2 },
];

// Search keyword universe (US, April 2026).
export type Keyword = {
  term: string;
  volume: number;
  cpc: number;
  cluster: "GEO/AI" | "Crisis PR" | "Agency Selection" | "Tech PR" | "Brand";
};

export const keywords: Keyword[] = [
  { term: "PR firm",                          volume: 5400, cpc: 22.38, cluster: "Agency Selection" },
  { term: "PR agency",                        volume: 6600, cpc: 19.05, cluster: "Agency Selection" },
  { term: "top PR firms",                     volume: 1600, cpc: 18.56, cluster: "Agency Selection" },
  { term: "best PR agency",                   volume: 1600, cpc: 18.56, cluster: "Agency Selection" },
  { term: "tech PR agency",                   volume: 880,  cpc: 52.22, cluster: "Tech PR" },
  { term: "generative engine optimization",   volume: 4400, cpc: 18.35, cluster: "GEO/AI" },
  { term: "GEO optimization",                 volume: 880,  cpc: 23.04, cluster: "GEO/AI" },
  { term: "AI visibility",                    volume: 480,  cpc: 23.31, cluster: "GEO/AI" },
  { term: "AI PR agency",                     volume: 170,  cpc: 18.10, cluster: "GEO/AI" },
  { term: "crisis communications agency",     volume: 720,  cpc: 17.10, cluster: "Crisis PR" },
  { term: "crisis PR firm",                   volume: 720,  cpc: 17.10, cluster: "Crisis PR" },
];

// Shadow brand palette — the only hex codes permitted in charts.
export const palette = {
  dusk:        "#977BA1",
  uv:          "#7489A3",
  lamplight:   "#B27A53",
  amber:       "#BF8440",
  shade:       "#8F7F6B",
  cool:        "#63727E",
  foreground:  "#453F3D",
  border:      "#CFC7BD",
} as const;

export function formatComma(n: number): string {
  return n.toLocaleString("en-US");
}

export function formatPct(n: number): string {
  return `${Math.round(n * 100)}%`;
}
