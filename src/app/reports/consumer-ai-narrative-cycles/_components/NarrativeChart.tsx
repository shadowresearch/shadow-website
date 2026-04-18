"use client";

import { useState } from "react";

const quarterlyData = [
  { q: "Q1 '23", genAI: 51039, agentic: null, companion: null, embodied: null, multimodal: 334, personal: 581 },
  { q: "Q2 '23", genAI: 124440, agentic: null, companion: null, embodied: null, multimodal: 555, personal: 1295 },
  { q: "Q3 '23", genAI: 122913, agentic: null, companion: null, embodied: null, multimodal: 450, personal: 1043 },
  { q: "Q4 '23", genAI: 118035, agentic: null, companion: null, embodied: null, multimodal: 996, personal: 961 },
  { q: "Q1 '24", genAI: 128121, agentic: 2931, companion: 3047, embodied: 375, multimodal: 1002, personal: 949 },
  { q: "Q2 '24", genAI: 119364, agentic: 4994, companion: 2020, embodied: 547, multimodal: 1356, personal: 1095 },
  { q: "Q3 '24", genAI: 89470, agentic: 5485, companion: 1786, embodied: 262, multimodal: 968, personal: 908 },
  { q: "Q4 '24", genAI: 84008, agentic: 16555, companion: 2180, embodied: 316, multimodal: 1394, personal: 799 },
  { q: "Q1 '25", genAI: 80999, agentic: 36645, companion: 3771, embodied: 801, multimodal: 2059, personal: 1779 },
  { q: "Q2 '25", genAI: 88662, agentic: 54422, companion: 3991, embodied: 1033, multimodal: 2593, personal: 1579 },
  { q: "Q3 '25", genAI: 103526, agentic: 69847, companion: 8084, embodied: 1946, multimodal: 3096, personal: 1908 },
  { q: "Q4 '25", genAI: 116999, agentic: 97498, companion: 7816, embodied: 2360, multimodal: 3959, personal: 2431 },
  { q: "Q1 '26", genAI: 138689, agentic: 180822, companion: 10567, embodied: 6790, multimodal: 4237, personal: 5421 },
];

type NarrativeKey = "genAI" | "agentic" | "companion" | "embodied" | "multimodal" | "personal";

const narratives: { key: NarrativeKey; label: string; color: string }[] = [
  { key: "agentic", label: "Agentic AI", color: "#7c6ef0" },
  { key: "genAI", label: "Generative AI", color: "#4a90d9" },
  { key: "companion", label: "AI Companion", color: "#e0976e" },
  { key: "embodied", label: "Embodied AI", color: "#d96a6a" },
  { key: "personal", label: "Personal AI", color: "#6abf8a" },
  { key: "multimodal", label: "Multimodal AI", color: "#9ca3af" },
];

const maxVal = 185000;

function formatNum(n: number): string {
  if (n >= 1000) return `${Math.round(n / 1000)}K`;
  return String(n);
}

export function NarrativeChart() {
  const [hoveredNarrative, setHoveredNarrative] = useState<NarrativeKey | null>(null);

  const W = 800;
  const H = 400;
  const padL = 56;
  const padR = 16;
  const padT = 16;
  const padB = 48;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const xStep = chartW / (quarterlyData.length - 1);

  function yPos(val: number) {
    return padT + chartH - (val / maxVal) * chartH;
  }

  function buildPath(key: NarrativeKey): string {
    const points: string[] = [];
    for (let i = 0; i < quarterlyData.length; i++) {
      const val = quarterlyData[i][key];
      if (val != null) {
        const x = padL + i * xStep;
        const y = yPos(val);
        points.push(`${points.length === 0 ? "M" : "L"}${x},${y}`);
      }
    }
    return points.join(" ");
  }

  const yTicks = [0, 50000, 100000, 150000];

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
        {narratives.map((n) => (
          <button
            key={n.key}
            type="button"
            className="flex items-center gap-1.5 text-xs transition-opacity"
            style={{
              opacity: hoveredNarrative && hoveredNarrative !== n.key ? 0.3 : 1,
            }}
            onMouseEnter={() => setHoveredNarrative(n.key)}
            onMouseLeave={() => setHoveredNarrative(null)}
          >
            <span
              className="inline-block w-3 h-[2px] rounded-full"
              style={{ backgroundColor: n.color }}
            />
            <span className="text-muted-foreground">{n.label}</span>
          </button>
        ))}
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Narrative volume over time chart"
      >
        {/* Grid lines */}
        {yTicks.map((tick) => (
          <g key={tick}>
            <line
              x1={padL}
              y1={yPos(tick)}
              x2={W - padR}
              y2={yPos(tick)}
              stroke="currentColor"
              className="text-border"
              strokeWidth={0.5}
            />
            <text
              x={padL - 8}
              y={yPos(tick) + 4}
              textAnchor="end"
              className="text-muted-foreground fill-current"
              fontSize={10}
            >
              {formatNum(tick)}
            </text>
          </g>
        ))}

        {/* X labels */}
        {quarterlyData.map((d, i) => (
          <text
            key={d.q}
            x={padL + i * xStep}
            y={H - 8}
            textAnchor="middle"
            className="text-muted-foreground fill-current"
            fontSize={9}
          >
            {d.q}
          </text>
        ))}

        {/* Lines */}
        {narratives.map((n) => (
          <path
            key={n.key}
            d={buildPath(n.key)}
            fill="none"
            stroke={n.color}
            strokeWidth={hoveredNarrative === n.key ? 3 : 1.5}
            strokeLinejoin="round"
            style={{
              opacity: hoveredNarrative && hoveredNarrative !== n.key ? 0.15 : 1,
              transition: "opacity 0.2s, stroke-width 0.2s",
            }}
          />
        ))}

        {/* End dots */}
        {narratives.map((n) => {
          const lastIdx = quarterlyData.length - 1;
          const val = quarterlyData[lastIdx][n.key];
          if (val == null) return null;
          return (
            <circle
              key={n.key}
              cx={padL + lastIdx * xStep}
              cy={yPos(val)}
              r={3}
              fill={n.color}
              style={{
                opacity: hoveredNarrative && hoveredNarrative !== n.key ? 0.15 : 1,
                transition: "opacity 0.2s",
              }}
            />
          );
        })}
      </svg>
      <p className="text-xs text-muted-foreground mt-2">
        Quarterly article volume across 200,000+ English-language news sources.
        Jan 2023 &ndash; Mar 2026.
      </p>
    </div>
  );
}
