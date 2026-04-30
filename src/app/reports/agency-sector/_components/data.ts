// Shared dataset for the Agency Sector Narrative Intelligence report.
// Source workbook: Agency_Narrative_Intelligence_2026-04.xlsx
// Window: Nov 1, 2025 – Apr 30, 2026. Tier-1 business and tech media.

export type NarrativeKey =
  | "consolidation"
  | "ai"
  | "margin"
  | "talent"
  | "regulatory";

export type MonthRow = {
  m: string;
  total: number;
  consolidation: number;
  ai: number;
  margin: number;
  talent: number;
  regulatory: number;
  avgNeg: number; // 0–1
};

export const monthlyData: MonthRow[] = [
  { m: "Nov '25", total: 49, consolidation: 8,  ai: 4,  margin: 12, talent: 0, regulatory: 4, avgNeg: 0.293 },
  { m: "Dec '25", total: 22, consolidation: 6,  ai: 4,  margin: 9,  talent: 0, regulatory: 0, avgNeg: 0.280 },
  { m: "Jan '26", total: 26, consolidation: 6,  ai: 1,  margin: 7,  talent: 0, regulatory: 0, avgNeg: 0.342 },
  { m: "Feb '26", total: 60, consolidation: 14, ai: 12, margin: 23, talent: 4, regulatory: 4, avgNeg: 0.381 },
  { m: "Mar '26", total: 27, consolidation: 4,  ai: 2,  margin: 5,  talent: 1, regulatory: 0, avgNeg: 0.234 },
  { m: "Apr '26", total: 32, consolidation: 5,  ai: 4,  margin: 2,  talent: 0, regulatory: 9, avgNeg: 0.411 },
];

export type NarrativeMeta = {
  key: NarrativeKey;
  label: string;
  short: string;
  count: number;
  share: number; // 0–1
  lifecycle: string;
  color: string;
};

// Palette (declared first so narrative meta can reference colors).
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

export const narratives: NarrativeMeta[] = [
  { key: "margin",        label: "Margin / Financial",  short: "Margin",        count: 70, share: 0.26, lifecycle: "Peak / Plateau", color: palette.dusk      },
  { key: "consolidation", label: "Consolidation",       short: "Consolidation", count: 59, share: 0.22, lifecycle: "Accelerating",   color: palette.lamplight },
  { key: "ai",            label: "AI Reshaping",        short: "AI",            count: 36, share: 0.13, lifecycle: "Accelerating",   color: palette.uv        },
  { key: "regulatory",    label: "Regulatory",          short: "Regulatory",    count: 18, share: 0.07, lifecycle: "Emerging",       color: palette.amber     },
  { key: "talent",        label: "Talent / Jobs",       short: "Talent",        count: 10, share: 0.04, lifecycle: "Underreported",  color: palette.cool      },
];

export type EntityRow = {
  entity: string;
  n: number;
  neg: number;
  pos: number;
  neutral: number;
  frame: string;
};

export const entities: EntityRow[] = [
  { entity: "WPP",             n: 95, neg: 0.448, pos: 0.258, neutral: 0.294, frame: "Crisis / Turnaround" },
  { entity: "Dentsu",          n: 25, neg: 0.365, pos: 0.279, neutral: 0.356, frame: "Restructuring / Transition" },
  { entity: "Publicis",        n: 59, neg: 0.352, pos: 0.317, neutral: 0.331, frame: "AI Advantage / Transformation" },
  { entity: "Omnicom",         n: 92, neg: 0.266, pos: 0.367, neutral: 0.367, frame: "Scale / Acquisition Growth" },
  { entity: "IPG / Interpublic", n: 51, neg: 0.233, pos: 0.414, neutral: 0.353, frame: "Exit at Premium / Strategic Asset" },
];

// Six headlines that defined the February 2026 inflection.
export type Headline = {
  date: string;
  source: string;
  title: string;
  tags: string[];
  blurb: string;
  isPeak?: boolean;
};

export const inflectionHeadlines: Headline[] = [
  {
    date: "Feb 3, 2026",
    source: "WSJ",
    title: "Publicis Says Account Wins, AI Demand Lift Top Line",
    tags: ["AI Advantage"],
    blurb:
      "Publicis reports Q4 results showing market share gains driven by AI demand. Sets the 'survivor' frame for Publicis. This piece becomes the anchor against which all WPP coverage is implicitly measured.",
  },
  {
    date: "Feb 13, 2026",
    source: "The Guardian",
    title: "UK Ad Agencies Undergo Their Biggest Exodus of Staff as AI Threatens Industry",
    tags: ["AI", "Talent"],
    blurb:
      "First major piece to explicitly frame AI and the talent exodus together. Sets the sector-wide crisis narrative in motion, establishing the 'AI as cause of job losses' frame that subsequent coverage amplifies.",
  },
  {
    date: "Feb 17, 2026",
    source: "WSJ",
    title: "Madison Avenue Is in Crisis. Midwestern Ad Agencies See an Opportunity.",
    tags: ["Consolidation", "AI"],
    blurb:
      "The headline that crystallized the sector's narrative. 'Madison Avenue Is in Crisis' becomes the shorthand business journalists use to frame holdco coverage for the rest of the quarter. A single WSJ headline sets the editorial frame.",
    isPeak: true,
  },
  {
    date: "Feb 26, 2026",
    source: "WSJ + Bloomberg + Guardian",
    title: "WPP Overhauls Structure, Slashes Dividend / WPP Eyes £500M in Annual Savings",
    tags: ["Margin", "Consolidation"],
    blurb:
      "WPP CEO Cindy Rose unveils the turnaround plan. Agency mergers, £500M cost-cutting program, dividend slashed. Every major outlet covers it. The 'turnaround' frame locks in for WPP. Bloomberg simultaneously publishes 'WPP Needs an Activist Jolt, Not a McKinsey Makeover' — a harsh editorial verdict.",
  },
  {
    date: "Feb 2026",
    source: "Reuters",
    title: "Omnicom to Cut 4,000 Jobs, Shut Several Agencies After IPG Takeover",
    tags: ["Consolidation"],
    blurb:
      "The largest announced layoff event in agency-sector history. Receives less coverage than WPP's restructuring. The scale story — Omnicom growing through acquisition — absorbs the jobs narrative, diffusing the negative frame.",
  },
  {
    date: "Feb 2026",
    source: "Axios",
    title: "Omnicom Consolidates PR Agencies Following IPG Merger",
    tags: ["Consolidation"],
    blurb:
      "Omnicom merges Porter Novelli with FleishmanHillard, Ketchum with Golin. A consequential restructuring of the PR agency landscape — covered as consolidation news, not crisis news. Different frame, same action.",
  },
];

export const aiCrisisHeadlines = [
  { source: "The Guardian", title: "UK ad agencies undergo their biggest exodus of staff as AI threatens industry" },
  { source: "Yahoo / Finance", title: "Advertising giant WPP cut £500m in costs as it races to counter AI threat" },
  { source: "The Guardian", title: "WPP to Merge Ad Agencies and Cut Jobs in Radical Shake-Up to Counter AI Threat" },
  { source: "Forbes", title: "The Hidden AI Failure That's Quietly Breaking Advertising Economics" },
];

export const aiAdvantageHeadlines = [
  { source: "WSJ", title: "Publicis Says Account Wins, AI Demand Lift Top Line" },
  { source: "Bloomberg", title: "Ad Agency Stocks Seen Turning AI Disruption to Their Advantage" },
  { source: "WSJ", title: "Publicis Sapient CEO Sees Demand for Consultant AI Projects Picking Up" },
  { source: "CNBC", title: "Creating Value in AI: Focus on Enterprise Over Consumer Uses, Says Publicis Sapient" },
];

export function formatComma(n: number): string {
  return n.toLocaleString("en-US");
}

export function formatPct(n: number): string {
  return `${Math.round(n * 100)}%`;
}

export function formatPct1(n: number): string {
  return `${(n * 100).toFixed(1)}%`;
}
