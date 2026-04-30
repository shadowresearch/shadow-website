// Shared dataset for Consumer & Brand — Baseline Edition (April 2026).
// 6 narratives tracked across 28 days of media data plus monthly cross-pillar
// synthesis (search demand, AI engine visibility, CPC, alignment classification).
// Source: Perigon (media), DataForSEO (search/CPC), Shadow GEO audit (AI engines).

export type NarrativeKey =
  | "creator"
  | "dtc"
  | "sports"
  | "tariff"
  | "luxury"
  | "retailAI";

export type NarrativeMeta = {
  key: NarrativeKey;
  label: string;
  short: string;
  classification: "ALIGNED" | "DECOUPLED" | "MEDIA_LEADS" | "MARKET_LEADS";
  lifecycle: "Incubation" | "Acceleration" | "Peak Plateau" | "Deceleration";
  mediaVolume: number;
  searchVolume: number;
  aiMentions: number;
  velocity: number;
  weightedCpc: number;
  peakCpc: number;
};

// Volume figures from the Cross-Pillar Synthesis sheet (April 2026).
// Weighted CPC computed across each narrative's keyword mix; peak CPC is the
// single highest keyword CPC inside the narrative.
export const narratives: NarrativeMeta[] = [
  {
    key: "creator",
    label: "Creator Economy Maturation",
    short: "Creator Economy",
    classification: "ALIGNED",
    lifecycle: "Peak Plateau",
    mediaVolume: 10258,
    searchVolume: 14720,
    aiMentions: 33,
    velocity: 65.5,
    weightedCpc: 18.38,
    peakCpc: 38.23,
  },
  {
    key: "dtc",
    label: "DTC Survival Reckoning",
    short: "DTC",
    classification: "MARKET_LEADS",
    lifecycle: "Deceleration",
    mediaVolume: 7421,
    searchVolume: 14539400,
    aiMentions: 3,
    velocity: 2.8,
    weightedCpc: 0.38,
    peakCpc: 31.85,
  },
  {
    key: "sports",
    label: "Sports Media Rights War",
    short: "Sports Rights",
    classification: "MARKET_LEADS",
    lifecycle: "Peak Plateau",
    mediaVolume: 5343,
    searchVolume: 75470,
    aiMentions: 59,
    velocity: -13.2,
    weightedCpc: 2.94,
    peakCpc: 6.11,
  },
  {
    key: "tariff",
    label: "Tariff Brand Identity",
    short: "Tariff Brand",
    classification: "DECOUPLED",
    lifecycle: "Acceleration",
    mediaVolume: 2823,
    searchVolume: 8100,
    aiMentions: 87,
    velocity: 0,
    weightedCpc: 1.34,
    peakCpc: 1.34,
  },
  {
    key: "luxury",
    label: "Luxury Resilience Test",
    short: "Luxury",
    classification: "DECOUPLED",
    lifecycle: "Acceleration",
    mediaVolume: 1770,
    searchVolume: 2040,
    aiMentions: 24,
    velocity: 0,
    weightedCpc: 0.57,
    peakCpc: 0.89,
  },
  {
    key: "retailAI",
    label: "Retail AI Transformation",
    short: "Retail AI",
    classification: "DECOUPLED",
    lifecycle: "Acceleration",
    mediaVolume: 767,
    searchVolume: 9130,
    aiMentions: 69,
    velocity: -2.9,
    weightedCpc: 19.33,
    peakCpc: 55.11,
  },
];

export type DailyRow = {
  date: string;
  creator: number;
  dtc: number;
  sports: number;
  tariff: number;
  luxury: number;
  retailAI: number;
};

// 28 trailing days, 2026-03-30 → 2026-04-26. Source: Daily Media Volume sheet.
// Tariff and Luxury initialize on 2026-04-23 / 2026-04-24 when their narratives
// crossed the detection threshold; prior days are recorded as 0 in the dataset.
export const dailyData: DailyRow[] = [
  { date: "2026-03-30", creator:   0, dtc: 266, sports: 234, tariff:    0, luxury:   0, retailAI: 31 },
  { date: "2026-03-31", creator:  62, dtc: 331, sports: 263, tariff:    0, luxury:   0, retailAI: 55 },
  { date: "2026-04-01", creator: 492, dtc: 457, sports: 221, tariff:    0, luxury:   0, retailAI: 32 },
  { date: "2026-04-02", creator: 452, dtc: 302, sports: 241, tariff:    0, luxury:   0, retailAI: 27 },
  { date: "2026-04-03", creator: 347, dtc: 188, sports: 148, tariff:    0, luxury:   0, retailAI: 13 },
  { date: "2026-04-04", creator: 196, dtc: 141, sports: 130, tariff:    0, luxury:   0, retailAI:  6 },
  { date: "2026-04-05", creator: 166, dtc:  86, sports: 115, tariff:    0, luxury:   0, retailAI: 11 },
  { date: "2026-04-06", creator: 344, dtc: 230, sports: 179, tariff:    0, luxury:   0, retailAI: 32 },
  { date: "2026-04-07", creator: 469, dtc: 349, sports: 261, tariff:    0, luxury:   0, retailAI: 38 },
  { date: "2026-04-08", creator: 422, dtc: 310, sports: 179, tariff:    0, luxury:   0, retailAI: 30 },
  { date: "2026-04-09", creator: 518, dtc: 294, sports: 280, tariff:    0, luxury:   0, retailAI: 43 },
  { date: "2026-04-10", creator: 437, dtc: 263, sports: 183, tariff:    0, luxury:   0, retailAI: 25 },
  { date: "2026-04-11", creator: 233, dtc: 121, sports: 112, tariff:    0, luxury:   0, retailAI: 12 },
  { date: "2026-04-12", creator: 194, dtc:  84, sports: 138, tariff:    0, luxury:   0, retailAI:  9 },
  { date: "2026-04-13", creator: 486, dtc: 319, sports: 198, tariff:    0, luxury:   0, retailAI: 43 },
  { date: "2026-04-14", creator: 547, dtc: 450, sports: 229, tariff:    0, luxury:   0, retailAI: 40 },
  { date: "2026-04-15", creator: 585, dtc: 364, sports: 259, tariff:    0, luxury:   0, retailAI: 36 },
  { date: "2026-04-16", creator: 470, dtc: 308, sports: 239, tariff:    0, luxury:   0, retailAI: 30 },
  { date: "2026-04-17", creator: 471, dtc: 338, sports: 233, tariff:    0, luxury:   0, retailAI: 36 },
  { date: "2026-04-18", creator: 256, dtc: 196, sports: 181, tariff:    0, luxury:   0, retailAI: 21 },
  { date: "2026-04-19", creator: 272, dtc: 204, sports: 147, tariff:    0, luxury:   0, retailAI: 27 },
  { date: "2026-04-20", creator: 501, dtc: 430, sports: 219, tariff:    0, luxury:   0, retailAI: 35 },
  { date: "2026-04-21", creator: 522, dtc: 344, sports: 181, tariff:    0, luxury:   0, retailAI: 25 },
  { date: "2026-04-22", creator: 509, dtc: 281, sports: 182, tariff:    0, luxury:   0, retailAI: 33 },
  { date: "2026-04-23", creator: 500, dtc: 295, sports: 214, tariff:  957, luxury:   0, retailAI: 42 },
  { date: "2026-04-24", creator: 433, dtc: 253, sports: 189, tariff: 1059, luxury: 541, retailAI: 20 },
  { date: "2026-04-25", creator: 205, dtc: 120, sports: 113, tariff:  436, luxury: 665, retailAI: 10 },
  { date: "2026-04-26", creator: 169, dtc:  97, sports:  75, tariff:  371, luxury: 564, retailAI:  5 },
];

export const NARRATIVE_KEYS: NarrativeKey[] = [
  "creator",
  "dtc",
  "sports",
  "tariff",
  "luxury",
  "retailAI",
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
