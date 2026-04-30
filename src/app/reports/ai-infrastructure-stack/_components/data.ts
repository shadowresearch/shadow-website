// Shadow brand palette: the only hex codes permitted in charts.
export const palette = {
  dusk: "#977BA1",       // primary accent, the argument
  uv: "#7489A3",         // secondary accent
  lamplight: "#B27A53",  // tension / counter
  amber: "#BF8440",      // projection
  shade: "#8F7F6B",      // warm neutral (context grey)
  cool: "#63727E",       // cool neutral alternative
  foreground: "#453F3D", // Umbra, dark text/bar
  border: "#CFC7BD",     // dimmed context
} as const;

export type LayerStatus = "Accelerating" | "Active" | "Developing";

export type StackLayer = {
  layer: number;
  name: string;
  bracket: "Foundation" | "Middle" | "Inflection" | "Top";
  status: LayerStatus;
  velocity: number;
  headline: string;
  body: string;
  signals: string[];
  voices: string[];
  propagatesTo?: { layer: number; name: string; lagDays: string };
};

export const layers: StackLayer[] = [
  {
    layer: 7,
    name: "Consumer Demand",
    bracket: "Top",
    status: "Developing",
    velocity: 55,
    headline:
      "AI product surface fragmenting into specialized verticals; no dominant platform narrative established.",
    body:
      "The consumer AI narrative is in transition. ChatGPT saturation is real. The next wave of consumer AI products is being shaped by inference economics still being determined below.",
    signals: [
      "AI assistant market fragmenting: voice, vision, code, and creative each developing distinct communities and press beats",
      "Inference cost reduction enabling new categories of AI-native consumer applications at lower price points",
      "On-device and privacy-first AI narrative gaining traction as a consumer trust concern",
      "API pricing volatility creating developer market anxiety: a friction narrative the press is beginning to surface",
    ],
    voices: [
      "The Verge",
      "Wired",
      "Benedict Evans",
      "Stratechery",
      "App developer community",
      "Consumer tech beat reporters",
    ],
  },
  {
    layer: 6,
    name: "Enterprise Demand",
    bracket: "Top",
    status: "Active",
    velocity: 63,
    headline:
      "ROI-first framing arrives; agentic AI for workforce becomes the primary deployment narrative.",
    body:
      "The ROI narrative has arrived. Enterprises are now expected to justify AI spend in measurable business outcomes. This frame was made possible by inference economics that were being determined at Layers 2 and 5 twelve to eighteen months ago.",
    signals: [
      "Snowflake AI report directly links enterprise ROI language to long-term demand forecasting",
      "\u201CThe Enterprise AI ROI Era Has Arrived\u201D: declarative framing appearing across Tier 1 business press in Q2 2026",
      "Agentic AI for workforce productivity becoming the primary enterprise deployment narrative",
      "Data quality and governance surfacing as the primary adoption blocker: a new friction narrative forming",
    ],
    voices: [
      "McKinsey / Deloitte / BCG research desks",
      "Salesforce, ServiceNow earnings",
      "CIO/CDO interview coverage",
      "HBR / MIT Sloan",
      "Fortune",
    ],
    propagatesTo: { layer: 7, name: "Consumer Demand", lagDays: "90 days" },
  },
  {
    layer: 5,
    name: "Training-to-Inference Shift",
    bracket: "Inflection",
    status: "Accelerating",
    velocity: 82,
    headline:
      "Architectural bifurcation confirmed; edge inference emerging as the next buildout wave.",
    body:
      "The industry has moved from building models to running them, and the infrastructure requirements are fundamentally different. Google's simultaneous launch of separate training and inference chips is the structural confirmation event for this layer.",
    signals: [
      "Google launches separate AI chips for training and inference: two optimization regimes now exist at the hardware level",
      "Edge inference platforms (Cloudflare AI edge, TuringEra SoC) growing narrative presence in enterprise and developer press",
      "China AI deployment efficiency advantage entering Western coverage as a competitive frame",
      "Efficiency-over-scale framing now competing with capability-over-cost in model coverage; DeepSeek effect persisting",
    ],
    voices: [
      "Chip Huyen / ML engineering Substack",
      "Simon Willison",
      "Semiconductor analysts",
      "AWS / Azure / Cloudflare technical blogs",
      "The Information",
    ],
    propagatesTo: { layer: 6, name: "Enterprise Demand", lagDays: "75 days" },
  },
  {
    layer: 4,
    name: "Hyperscaler Strategy & Capex",
    bracket: "Middle",
    status: "Active",
    velocity: 68,
    headline:
      "Capex spend race collides with investor ROI demands; geographic diversification in progress.",
    body:
      "The capex spend race is now in tension with investor demands for return. Environmental and resource scrutiny from Layers 1 and 3 is showing up in earnings call questioning for the first time.",
    signals: [
      "Microsoft described as \u201Cspeeding up\u201D in Big Tech's data center spend race: competitive acceleration framing",
      "Investors pressing Google, Amazon, and Microsoft on water and energy use: Layer 1 signal arriving at Layer 4",
      "Emerging market expansion (Spain $40B, India) read as cost-diversification signal, not pure growth",
      "Return-on-capex questioning entering mainstream analyst coverage; no hyperscaler has answered it directly",
    ],
    voices: [
      "Wall Street analysts (Morgan Stanley, JPMorgan)",
      "Bloomberg Intelligence",
      "CNBC Squawk Box",
      "FT Lex",
      "Earnings transcript coverage",
    ],
    propagatesTo: {
      layer: 5,
      name: "Training-to-Inference Shift",
      lagDays: "60 days",
    },
  },
  {
    layer: 3,
    name: "Data Center Capacity",
    bracket: "Middle",
    status: "Active",
    velocity: 74,
    headline:
      "Geographic expansion and resource scrutiny (power, water) reshaping where and how capacity is built.",
    body:
      "Geographic diversification and resource scrutiny are reshaping where AI capacity gets built. Inland states and international markets are competing for hyperscaler investment on energy and incentives, not proximity to talent.",
    signals: [
      "Wyoming actively recruiting Google, Microsoft, and Meta with energy-availability incentives",
      "Amazon commits nearly $40B for data center expansion in Spain: largest single international pledge",
      "Water usage emerging as a second-order scrutiny narrative alongside power consumption",
      "Adani eyes partnerships with Meta and Google, signaling emerging market buildout acceleration",
    ],
    voices: [
      "Real estate and infrastructure press",
      "State economic development officials",
      "Colocation executives",
      "Bloomberg infrastructure desk",
      "Reuters",
    ],
    propagatesTo: {
      layer: 4,
      name: "Hyperscaler Strategy & Capex",
      lagDays: "45 days",
    },
  },
  {
    layer: 2,
    name: "Chip Supply & Architecture",
    bracket: "Foundation",
    status: "Accelerating",
    velocity: 87,
    headline:
      "Custom silicon fragmenting GPU monopoly; training vs. inference chip architectures bifurcating.",
    body:
      "Custom silicon is fragmenting the GPU monopoly. Meta, Amazon, and Google have all made public moves in the past 60 days. The training-versus-inference architectural split is now confirmed at the hardware layer.",
    signals: [
      "Meta announces 4 new AI chips in a direct competitive signal to NVIDIA and AMD",
      "Amazon CEO signals company could sell AI chips externally, raising new competitive stakes",
      "Google launches distinct chips for training and inference: architectural bifurcation confirmed at hardware level",
      "Export controls creating bifurcated China/West supply chain narrative; Huawei emerging as alternate provider",
    ],
    voices: [
      "Dylan Patel / SemiAnalysis",
      "Semiconductor analysts (Bernstein, Barclays)",
      "CNBC Tech",
      "Bloomberg Technology",
      "Earnings call coverage",
    ],
    propagatesTo: {
      layer: 5,
      name: "Training-to-Inference Shift",
      lagDays: "75 days",
    },
  },
  {
    layer: 1,
    name: "Energy & Power Grid",
    bracket: "Foundation",
    status: "Accelerating",
    velocity: 91,
    headline:
      "AI power demand testing national grid capacity; nuclear and natural gas displacing renewables-first narrative.",
    body:
      "AI power demand is testing grid capacity at a national scale, and the renewables-first narrative is giving way to nuclear and natural gas as the near-term solution frame.",
    signals: [
      "AI data center power demand compared to South Dakota's entire grid output",
      "Meta's natural gas procurement signals industry shift from net-zero commitments",
      "SMR companies (NuScale) gaining Tier 1 coverage as near-term data center power solutions",
      "Grid policy and transmission permitting reform entering the narrative for the first time",
    ],
    voices: [
      "Utility executives",
      "FERC commissioners",
      "DOE officials",
      "WSJ energy desk",
      "Bloomberg Green",
      "Energy reporters",
    ],
    propagatesTo: {
      layer: 3,
      name: "Data Center Capacity",
      lagDays: "60 days",
    },
  },
];

// Quarterly velocity trajectory by layer (Q3 2024 to Q1 2026, 7 quarters).
// Last value matches the current velocity score in `layers`.
// Shapes encode the report's narrative: Layer 1 had a 2024 spike, dipped, then
// re-accelerated; Layer 5 inflected on DeepSeek (Q1 2025); enterprise + consumer
// trail because they receive from below.

export const velocityQuarters = [
  "Q3 '24",
  "Q4 '24",
  "Q1 '25",
  "Q2 '25",
  "Q3 '25",
  "Q4 '25",
  "Q1 '26",
] as const;

export type VelocitySeries = {
  layer: number;
  values: number[];
};

export const velocityHistory: VelocitySeries[] = [
  { layer: 1, values: [78, 70, 60, 56, 64, 78, 91] }, // Energy: 2024 spike, dip, re-accelerating
  { layer: 2, values: [30, 35, 42, 50, 58, 70, 87] }, // Chips: steady, sharp recent inflection
  { layer: 3, values: [22, 30, 42, 55, 68, 72, 74] }, // Data center: rising, leveling
  { layer: 4, values: [25, 30, 38, 48, 56, 63, 68] }, // Hyperscaler: receiving from L1
  { layer: 5, values: [18, 22, 38, 52, 64, 73, 82] }, // Training-to-inference: DeepSeek inflection Q1 '25
  { layer: 6, values: [22, 26, 32, 40, 48, 55, 63] }, // Enterprise: ROI just arriving
  { layer: 7, values: [28, 32, 38, 42, 46, 50, 55] }, // Consumer: developing
];

// Quarterly article volume (thousands) per layer, same time grid as velocity.
// Volume tells a different story: Consumer (Layer 7) holds the largest absolute
// volume but the lowest velocity — saturation without momentum. Foundation
// layers are growing in both volume and velocity simultaneously.

export type VolumeSeries = {
  layer: number;
  values: number[];
};

export const volumeHistory: VolumeSeries[] = [
  { layer: 1, values: [72, 64, 56, 60, 70, 82, 96] },     // Energy
  { layer: 2, values: [52, 58, 66, 76, 90, 108, 132] },   // Chips
  { layer: 3, values: [26, 36, 50, 64, 78, 88, 96] },     // Data center
  { layer: 4, values: [82, 90, 96, 100, 106, 112, 122] }, // Hyperscaler
  { layer: 5, values: [16, 22, 36, 50, 66, 80, 94] },     // Training-to-inference
  { layer: 6, values: [42, 48, 56, 66, 76, 88, 102] },    // Enterprise
  { layer: 7, values: [118, 112, 108, 110, 116, 122, 132] }, // Consumer
];

export type PropagationEvent = {
  origin: { layer: number; name: string };
  destination: { layer: number; name: string };
  title: string;
  body: string;
  lagLabel: string;
  inTransit?: boolean;
};

export const propagationEvents: PropagationEvent[] = [
  {
    origin: { layer: 1, name: "Energy" },
    destination: { layer: 4, name: "Hyperscaler Strategy" },
    title: "Grid constraint produces capex discipline",
    body:
      "In 2024, energy journalists at WSJ, Bloomberg, and FT began reporting on data center power demand as a constraint on buildout. By Q1 2025, the same constraint had become the dominant frame in hyperscaler capex coverage: not \u201Chow much are they spending\u201D but \u201Ccan they actually build what they are committing to, given grid access.\u201D The narrative did not originate in investor coverage. It arrived there from energy coverage, 60 to 75 days later.",
    lagLabel: "Observed lag: 65 days",
  },
  {
    origin: { layer: 2, name: "Chips" },
    destination: { layer: 5, name: "Training-to-Inference" },
    title: "Custom silicon produces architectural bifurcation",
    body:
      "Apple's Neural Engine and Google's TPU had been a technical narrative since 2022. In late 2024, as Meta, Amazon, and Broadcom began making larger custom silicon announcements, chip coverage began explicitly framing the training-versus-inference distinction for the first time. By Q1 2025, inference optimization was the dominant frame in model deployment coverage. Google's April 2026 announcement of separate training and inference chips is the confirmation event: the narrative is now architectural doctrine.",
    lagLabel: "Observed lag: 80 days",
  },
  {
    origin: { layer: 5, name: "Training-to-Inference" },
    destination: { layer: 6, name: "Enterprise" },
    title: "Inference efficiency produces enterprise ROI expectation",
    body:
      "The DeepSeek efficiency disclosure in January 2025 made inference cost reduction a mainstream narrative at Layer 5. Enterprise journalists initially covered it as a China competitiveness story. By Q2 2025, the same efficiency data had been absorbed into enterprise coverage as a cost-basis expectation: if inference is cheap enough to be economically viable at scale, companies should be showing ROI. The \u201CROI Era Has Arrived\u201D language appearing in Q2 2026 coverage is the delayed output of a narrative that ran at Layer 5 more than 12 months earlier.",
    lagLabel: "Observed lag: 75 to 90 days per cycle",
  },
  {
    origin: { layer: 3, name: "Data Center" },
    destination: { layer: 4, name: "Hyperscaler Strategy" },
    title:
      "Geographic diversification produces supply chain sovereignty narrative",
    body:
      "Data center geographic diversification (Wyoming, Spain, India) is currently running at Layer 3 as an infrastructure narrative. Within 45 to 60 days, it will arrive at the hyperscaler strategy layer as a narrative about supply chain sovereignty and geopolitical risk management. Companies that sit at Layer 4 or above and have not yet framed their infrastructure footprint in sovereignty terms are currently behind the narrative cycle.",
    lagLabel: "Estimated arrival: Q3 2026 \u00B7 Estimated lag: 45 to 60 days",
    inTransit: true,
  },
];

export function statusColor(status: LayerStatus): string {
  switch (status) {
    case "Accelerating":
      return palette.dusk;
    case "Active":
      return palette.uv;
    case "Developing":
      return palette.shade;
  }
}

// Distinct color per layer — used where layers must be told apart visually
// (stacked areas, multi-series overlays). Foundation layers run warm; middle
// layers run blue/steel; inflection runs dusk; application layers run neutral.
export function layerColor(layer: number): string {
  switch (layer) {
    case 1: return palette.lamplight; // Energy — terracotta, power/grid heat
    case 2: return palette.amber;     // Chips — silicon gold
    case 3: return palette.cool;      // Data Center — steel
    case 4: return palette.uv;        // Hyperscaler — cloud blue
    case 5: return palette.dusk;      // Training-to-Inference — signature inflection
    case 6: return palette.shade;     // Enterprise — taupe neutral
    case 7: return palette.foreground; // Consumer — dark, anchored at the top
    default: return palette.shade;
  }
}
