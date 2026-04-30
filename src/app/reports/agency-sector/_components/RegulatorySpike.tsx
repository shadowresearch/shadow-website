import { palette, monthlyData } from "./data";

// Bar of regulatory share of monthly volume — zero through March, 28% in April.
// Small chart, makes the emergence visible without competing with the stack chart.

export function RegulatorySpike() {
  const W = 800;
  const H = 280;
  const padL = 56;
  const padR = 32;
  const padT = 56;
  const padB = 48;
  const chartW = W - padL - padR;
  const chartH = H - padT - padB;

  const shares = monthlyData.map((r) => ({
    m: r.m,
    share: r.regulatory / r.total,
    count: r.regulatory,
  }));

  const maxVal = Math.max(...shares.map((s) => s.share));
  const yMax = Math.max(0.3, Math.ceil((maxVal + 0.05) * 10) / 10);

  const barW = chartW / shares.length - 24;
  const xBar = (i: number) =>
    padL + (i + 0.5) * (chartW / shares.length) - barW / 2;
  const yPos = (v: number) => padT + chartH - (v / yMax) * chartH;

  const yTicks = [0, yMax / 3, (2 * yMax) / 3, yMax];

  return (
    <figure className="w-full">
      <figcaption className="mb-5 max-w-[640px]">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Regulatory share of monthly agency coverage
        </p>
        <h3 className="mt-2 font-serif text-xl md:text-2xl text-foreground leading-snug tracking-tight">
          Regulatory coverage went from background noise to a quarter of the April story in one month.
        </h3>
      </figcaption>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Bar chart of regulatory share of monthly agency-sector coverage. Zero or low through March 2026; spikes in April after the FTC settlement."
      >
        {yTicks.map((t) => (
          <g key={t}>
            <text
              x={padL - 10}
              y={yPos(t) + 4}
              textAnchor="end"
              fontFamily="var(--font-mono)"
              fontSize={10}
              fill={palette.shade}
              className="tabular-nums"
            >
              {Math.round(t * 100)}%
            </text>
            <line
              x1={padL}
              y1={yPos(t)}
              x2={W - padR}
              y2={yPos(t)}
              stroke={palette.border}
              strokeWidth={0.5}
              strokeDasharray="2 4"
              opacity={0.5}
            />
          </g>
        ))}

        {shares.map((s, i) => {
          const isApr = s.m === "Apr '26";
          const h = (s.share / yMax) * chartH;
          return (
            <g key={s.m}>
              <rect
                x={xBar(i)}
                y={padT + chartH - h}
                width={barW}
                height={Math.max(0.5, h)}
                fill={isApr ? palette.amber : palette.shade}
                opacity={isApr ? 1 : 0.55}
              />
              <text
                x={xBar(i) + barW / 2}
                y={H - 14}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize={10}
                fill={palette.shade}
              >
                {s.m}
              </text>
              {s.count > 0 && (
                <text
                  x={xBar(i) + barW / 2}
                  y={padT + chartH - h - 8}
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                  fontSize={11}
                  fill={isApr ? palette.amber : palette.shade}
                  className="tabular-nums"
                >
                  {Math.round(s.share * 100)}%
                </text>
              )}
            </g>
          );
        })}

        {/* April callout */}
        <g>
          <line
            x1={xBar(shares.length - 1) + barW / 2}
            y1={yPos(maxVal) - 30}
            x2={xBar(shares.length - 1) + barW / 2}
            y2={yPos(maxVal) - 16}
            stroke={palette.amber}
            strokeWidth={0.5}
          />
          <text
            x={xBar(shares.length - 1) + barW / 2}
            y={yPos(maxVal) - 36}
            textAnchor="middle"
            fontFamily="var(--font-sans)"
            fontSize={11}
            fontStyle="italic"
            fill={palette.amber}
          >
            FTC settlement: WPP, Publicis, Dentsu
          </text>
        </g>
      </svg>

      <p className="mt-4 text-[11px] font-mono text-muted-foreground tracking-wide">
        Source: Perigon News Intelligence; Shadow analysis. Regulatory tag includes antitrust, brand-safety probe, and FTC coverage.
      </p>
    </figure>
  );
}
