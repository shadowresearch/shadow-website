// Shared dataset for Workforce & Future of Work — Baseline Edition (April 2026).
// 5 narratives tracked across 28 days of media data plus monthly cross-pillar
// synthesis (search demand, AI engine visibility, CPC, alignment classification).
// Source: Perigon (media), DataForSEO (search/CPC), Shadow GEO audit (AI engines).

export type NarrativeKey =
  | "displacement"
  | "productivity"
  | "skills"
  | "gig"
  | "whiteCollar";

export type NarrativeMeta = {
  key: NarrativeKey;
  label: string;
  short: string;
  classification: "ALIGNED" | "DECOUPLED" | "MEDIA_LEADS" | "MARKET_LEADS";
  lifecycle: "Incubation" | "Acceleration" | "Peak Plateau";
  mediaVolume: number;
  searchVolume: number;
  aiMentions: number;
  velocity: number;
  weightedCpc: number;
  peakCpc: number;
};

// Volume figures from the monthly cross-pillar synthesis sheet.
// Weighted CPC computed across keyword mix; peak CPC is the single highest
// keyword CPC inside the narrative.
export const narratives: NarrativeMeta[] = [
  {
    key: "displacement",
    label: "AI Job Displacement Wave",
    short: "Displacement",
    classification: "ALIGNED",
    lifecycle: "Acceleration",
    mediaVolume: 9737,
    searchVolume: 14790,
    aiMentions: 17,
    velocity: 18.4,
    weightedCpc: 4.45,
    peakCpc: 13.91,
  },
  {
    key: "productivity",
    label: "AI Productivity Paradox",
    short: "Productivity",
    classification: "DECOUPLED",
    lifecycle: "Acceleration",
    mediaVolume: 440,
    searchVolume: 1840,
    aiMentions: 52,
    velocity: 16.4,
    weightedCpc: 15.37,
    peakCpc: 25.14,
  },
  {
    key: "skills",
    label: "Skills Gap Acceleration",
    short: "Skills Gap",
    classification: "MEDIA_LEADS",
    lifecycle: "Peak Plateau",
    mediaVolume: 7173,
    searchVolume: 5500,
    aiMentions: 60,
    velocity: 19.1,
    weightedCpc: 7.39,
    peakCpc: 29.38,
  },
  {
    key: "gig",
    label: "Gig Economy Regulation",
    short: "Gig Economy",
    classification: "MARKET_LEADS",
    lifecycle: "Peak Plateau",
    mediaVolume: 2477,
    searchVolume: 8280,
    aiMentions: 35,
    velocity: -15.4,
    weightedCpc: 4.77,
    peakCpc: 4.81,
  },
  {
    key: "whiteCollar",
    label: "White Collar Compression",
    short: "White Collar",
    classification: "DECOUPLED",
    lifecycle: "Incubation",
    mediaVolume: 1779,
    searchVolume: 4440,
    aiMentions: 20,
    velocity: 18.8,
    weightedCpc: 29.08,
    peakCpc: 33.80,
  },
];

export type DailyRow = {
  date: string;
  displacement: number;
  productivity: number;
  skills: number;
  gig: number;
  whiteCollar: number;
};

// 28 trailing days, 2026-03-30 → 2026-04-26.
export const dailyData: DailyRow[] = [
  { date: "2026-03-30", displacement: 338, productivity: 14, skills: 268, gig: 113, whiteCollar: 65 },
  { date: "2026-03-31", displacement: 451, productivity: 21, skills: 326, gig: 124, whiteCollar: 74 },
  { date: "2026-04-01", displacement: 470, productivity: 15, skills: 340, gig: 98,  whiteCollar: 81 },
  { date: "2026-04-02", displacement: 435, productivity: 26, skills: 321, gig: 101, whiteCollar: 73 },
  { date: "2026-04-03", displacement: 273, productivity: 23, skills: 207, gig: 158, whiteCollar: 56 },
  { date: "2026-04-04", displacement: 135, productivity: 8,  skills: 97,  gig: 69,  whiteCollar: 36 },
  { date: "2026-04-05", displacement: 132, productivity: 3,  skills: 98,  gig: 52,  whiteCollar: 40 },
  { date: "2026-04-06", displacement: 336, productivity: 25, skills: 249, gig: 108, whiteCollar: 72 },
  { date: "2026-04-07", displacement: 446, productivity: 15, skills: 331, gig: 118, whiteCollar: 77 },
  { date: "2026-04-08", displacement: 386, productivity: 16, skills: 249, gig: 84,  whiteCollar: 68 },
  { date: "2026-04-09", displacement: 398, productivity: 13, skills: 321, gig: 81,  whiteCollar: 82 },
  { date: "2026-04-10", displacement: 328, productivity: 16, skills: 226, gig: 84,  whiteCollar: 65 },
  { date: "2026-04-11", displacement: 171, productivity: 4,  skills: 100, gig: 48,  whiteCollar: 30 },
  { date: "2026-04-12", displacement: 146, productivity: 4,  skills: 101, gig: 46,  whiteCollar: 23 },
  { date: "2026-04-13", displacement: 422, productivity: 17, skills: 297, gig: 101, whiteCollar: 49 },
  { date: "2026-04-14", displacement: 433, productivity: 19, skills: 345, gig: 119, whiteCollar: 69 },
  { date: "2026-04-15", displacement: 430, productivity: 22, skills: 360, gig: 104, whiteCollar: 74 },
  { date: "2026-04-16", displacement: 499, productivity: 21, skills: 354, gig: 88,  whiteCollar: 79 },
  { date: "2026-04-17", displacement: 416, productivity: 14, skills: 310, gig: 73,  whiteCollar: 59 },
  { date: "2026-04-18", displacement: 225, productivity: 5,  skills: 148, gig: 52,  whiteCollar: 55 },
  { date: "2026-04-19", displacement: 222, productivity: 11, skills: 151, gig: 51,  whiteCollar: 47 },
  { date: "2026-04-20", displacement: 437, productivity: 16, skills: 311, gig: 100, whiteCollar: 74 },
  { date: "2026-04-21", displacement: 454, productivity: 26, skills: 323, gig: 93,  whiteCollar: 73 },
  { date: "2026-04-22", displacement: 445, productivity: 22, skills: 340, gig: 101, whiteCollar: 86 },
  { date: "2026-04-23", displacement: 542, productivity: 25, skills: 398, gig: 106, whiteCollar: 107 },
  { date: "2026-04-24", displacement: 460, productivity: 21, skills: 326, gig: 104, whiteCollar: 81 },
  { date: "2026-04-25", displacement: 183, productivity: 9,  skills: 152, gig: 50,  whiteCollar: 44 },
  { date: "2026-04-26", displacement: 124, productivity: 9,  skills: 124, gig: 51,  whiteCollar: 40 },
];

export const NARRATIVE_KEYS: NarrativeKey[] = [
  "displacement",
  "productivity",
  "skills",
  "gig",
  "whiteCollar",
];

// Shadow brand palette: the only hex codes permitted in charts.
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

export function formatK(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1000)}K`;
  return String(n);
}

export function formatComma(n: number): string {
  return n.toLocaleString("en-US");
}

export function shortDate(iso: string): string {
  // "2026-04-26" → "Apr 26"
  const [, m, d] = iso.split("-");
  const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${months[parseInt(m, 10)]} ${parseInt(d, 10)}`;
}
