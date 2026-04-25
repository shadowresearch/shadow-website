import {
  palette,
  quarterlyData,
  narratives,
  formatK,
  type NarrativeKey,
} from "./data";

// Small multiples: 7 mini line charts, one per narrative.
// Grey lines with the hot quarter for each narrative highlighted in Dusk.
// Independent y-scales: each panel makes its own shape the point.

const PANEL_W = 240;
const PANEL_H = 120;
const padL = 6;
const padR = 6;
const padT = 34;
const padB = 22;

function Panel({
  label,
  short,
  narrativeKey,
  caption,
}: {
  label: string;
  short: string;
  narrativeKey: NarrativeKey;
  caption: string;
}) {
  const values = quarterlyData.map((r) => r[narrativeKey]);
  const defined = values.map((v) => v ?? 0);
  const max = Math.max(...defined, 1);

  const chartW = PANEL_W - padL - padR;
  const chartH = PANEL_H - padT - padB;
  const xStep = chartW / (values.length - 1);
  const xPos = (i: number) => padL + i * xStep;
  const yPos = (v: number) => padT + chartH - (v / max) * chartH;

  // Build path through non-null points only.
  const pathPoints: string[] = [];
  values.forEach((v, i) => {
    if (v == null) return;
    pathPoints.push(
      `${pathPoints.length === 0 ? "M" : "L"}${xPos(i)},${yPos(v)}`
    );
  });
  const path = pathPoints.join(" ");

  // Find hot quarter (largest QoQ absolute jump).
  let hotIdx = -1;
  let hotJump = 0;
  for (let i = 1; i < values.length; i++) {
    const prev = values[i - 1];
    const cur = values[i];
    if (prev == null || cur == null) continue;
    const jump = cur - prev;
    if (jump > hotJump) {
      hotJump = jump;
      hotIdx = i;
    }
  }

  const lastVal = values[values.length - 1] ?? 0;

  return (
    <div className="flex flex-col">
      <svg
        viewBox={`0 0 ${PANEL_W} ${PANEL_H}`}
        className="w-full h-auto"
        role="img"
        aria-label={`${label} quarterly volume sparkline.`}
      >
        {/* Panel title (mono eyebrow inside SVG) */}
        <text
          x={padL}
          y={14}
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.foreground}
          className="uppercase tracking-widest"
        >
          {short.toUpperCase()}
        </text>
        <text
          x={padL}
          y={28}
          fontFamily="var(--font-mono)"
          fontSize={10}
          fill={palette.shade}
          className="tabular-nums"
        >
          {formatK(lastVal)} in Q1 &apos;26
        </text>

        {/* Baseline */}
        <line
          x1={padL}
          y1={padT + chartH}
          x2={PANEL_W - padR}
          y2={padT + chartH}
          stroke={palette.border}
          strokeWidth={0.5}
        />

        {/* Line */}
        <path
          d={path}
          fill="none"
          stroke={palette.shade}
          strokeWidth={1.5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Hot quarter segment */}
        {hotIdx > 0 &&
          values[hotIdx - 1] != null &&
          values[hotIdx] != null && (
            <path
              d={`M${xPos(hotIdx - 1)},${yPos(
                values[hotIdx - 1] as number
              )} L${xPos(hotIdx)},${yPos(values[hotIdx] as number)}`}
              fill="none"
              stroke={palette.dusk}
              strokeWidth={2.25}
              strokeLinecap="round"
            />
          )}

        {/* Hot dot */}
        {hotIdx > 0 && values[hotIdx] != null && (
          <circle
            cx={xPos(hotIdx)}
            cy={yPos(values[hotIdx] as number)}
            r={2.75}
            fill={palette.dusk}
          />
        )}

        {/* X endpoints label */}
        <text
          x={padL}
          y={PANEL_H - 6}
          fontFamily="var(--font-mono)"
          fontSize={8}
          fill={palette.shade}
        >
          Q1 &apos;23
        </text>
        <text
          x={PANEL_W - padR}
          y={PANEL_H - 6}
          textAnchor="end"
          fontFamily="var(--font-mono)"
          fontSize={8}
          fill={palette.shade}
        >
          Q1 &apos;26
        </text>
      </svg>

      <p
        className="mt-2 text-[11px] leading-snug text-muted-foreground"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        {caption}
      </p>
    </div>
  );
}

const panels: {
  key: NarrativeKey;
  caption: string;
}[] = [
  {
    key: "agentic",
    caption:
      "No plateau signal yet. March 2026 alone produced 98,484 articles.",
  },
  {
    key: "genAI",
    caption:
      "Resurgence paradox: Q1 2026 exceeded the 2023 peak by 11%.",
  },
  {
    key: "safety",
    caption:
      "Reactive pattern. Spikes after incidents, settles back to baseline.",
  },
  {
    key: "companion",
    caption:
      "Sawtooth, not a wave. Spikes on product news, retreats between.",
  },
  {
    key: "embodied",
    caption:
      "Invisible until 2025. +187.7% QoQ in Q1 2026, fastest in the set.",
  },
  {
    key: "personal",
    caption:
      "Buyer intent forming ahead of media. +123% QoQ in Q1 2026.",
  },
  {
    key: "multimodal",
    caption: "Decelerating (7% QoQ). Being absorbed as a capability descriptor.",
  },
];

export function NarrativeSmallMultiples() {
  const byKey = new Map(narratives.map((n) => [n.key, n]));

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Quarterly article volume · Jan 2023 – Mar 2026
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Every narrative has its own shape. Three are surging, three are cyclical, one is fading.
        </h3>
      </figcaption>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-8">
        {panels.map((p) => {
          const meta = byKey.get(p.key);
          if (!meta) return null;
          return (
            <Panel
              key={p.key}
              label={meta.label}
              short={meta.short}
              narrativeKey={p.key}
              caption={p.caption}
            />
          );
        })}
      </div>

      <p className="mt-6 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon; Shadow analysis. Dusk segment marks each narrative&apos;s largest QoQ jump.
      </p>
    </figure>
  );
}
