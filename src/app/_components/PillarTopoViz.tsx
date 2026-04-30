/**
 * PillarTopoViz
 *
 * Square dot-grid backdrop with one composed scene per variant. Each
 * scene combines a dominant landform with smaller midground/scenery
 * elements (distant peaks, a sun/moon, horizon traces) so the cards
 * feel like complete little abstract landscapes rather than a single
 * shape on a grid.
 *
 *   01 — anchored single peak, sun + distant ridges
 *   02 — connected mountain range with horizon line
 *   03 — paired flows (peak cascading right, mirror cascading left),
 *        with trailing motion particles
 *
 * Pure server SVG, no JS, no animation.
 */

const VIEW = 200; // square viewBox edge
const N_COLS = 120;
const N_ROWS = 80;
const SPACING_X = VIEW / N_COLS; // 1.667
const SPACING_Y = VIEW / N_ROWS; // 2.5
// Cell aspect ratio: rows are 1.5× the height of cols.
const CELL_ASPECT = SPACING_Y / SPACING_X; // 1.5

// Background grid dot — uniform across the canvas.
const BG_DOT_R = 0.32;
// Foreground — main subject of the scene.
const FG_DOT_R = BG_DOT_R * 1.6;
const FG_COLOR = "#000";
// Midground — secondary scene elements (distant peaks, sun, particles).
const MG_DOT_R = BG_DOT_R * 1.1;
const MG_COLOR = "rgba(43, 32, 22, 0.65)";
const BG_COLOR = "var(--card)";

type Variant = "01" | "02" | "03";

const LABELS: Record<Variant, string> = {
  "01": "Dot grid scene: single anchored peak with sun and distant ridges.",
  "02": "Dot grid scene: a mountain range across a horizon.",
  "03": "Dot grid scene: paired flows cascading in opposite directions.",
};

type Dot = readonly [col: number, row: number, tier?: "mg"];

// Filled triangular pyramid of dots.
function pyramid(
  centerCol: number,
  baseRow: number,
  baseHalfCols: number,
  heightRows: number,
): [number, number][] {
  const dots: [number, number][] = [];
  for (let h = 0; h < heightRows; h++) {
    const row = baseRow - h;
    const ratio =
      heightRows > 1 ? (heightRows - 1 - h) / (heightRows - 1) : 0;
    const half = Math.round(baseHalfCols * ratio);
    for (let dx = -half; dx <= half; dx++) {
      dots.push([centerCol + dx, row]);
    }
  }
  return dots;
}

// Horizontal band of `width` dots starting at `startCol`, on row `row`.
function band(
  startCol: number,
  width: number,
  row: number,
): [number, number][] {
  return Array.from(
    { length: width },
    (_, i) => [startCol + i, row] as [number, number],
  );
}

// Filled circle (sun/moon) — aspect-corrected so it reads round despite
// the grid's 1.5:1 row:col cell ratio.
function disk(
  centerCol: number,
  centerRow: number,
  radius: number,
): [number, number][] {
  const dots: [number, number][] = [];
  const rowRange = Math.ceil(radius / CELL_ASPECT);
  for (let dy = -rowRange; dy <= rowRange; dy++) {
    for (let dx = -radius; dx <= radius; dx++) {
      const ny = dy * CELL_ASPECT;
      if (dx * dx + ny * ny <= radius * radius) {
        dots.push([centerCol + dx, centerRow + dy]);
      }
    }
  }
  return dots;
}

// Scattered dots evenly spaced across a row, like a horizon trace.
function dashedRow(
  startCol: number,
  endCol: number,
  step: number,
  row: number,
): [number, number][] {
  const dots: [number, number][] = [];
  for (let c = startCol; c <= endCol; c += step) dots.push([c, row]);
  return dots;
}

function tier(dots: [number, number][], t: "mg"): Dot[] {
  return dots.map(([c, r]) => [c, r, t] as Dot);
}

function fg(dots: [number, number][]): Dot[] {
  return dots.map(([c, r]) => [c, r] as Dot);
}

// 01 — Anchored single peak, with a sun above-right and two smaller
// distant ridges flanking. Reads as a monument under an open sky.
const SHAPE_01: Dot[] = [
  ...fg(pyramid(60, 62, 30, 24)),
  // Distant ridges in midground
  ...tier(pyramid(14, 56, 9, 7), "mg"),
  ...tier(pyramid(104, 58, 8, 6), "mg"),
  // Sun above-right
  ...tier(disk(98, 16, 3), "mg"),
  // Faint horizon trace below the main peak's base
  ...tier(dashedRow(0, 120, 4, 70), "mg"),
];

// 02 — A connected mountain range across a wide horizon. Three peaks
// in the foreground, two distant ridges far back, and a horizon line
// that links the whole thing together.
const SHAPE_02: Dot[] = [
  ...fg(pyramid(34, 58, 15, 14)),
  ...fg(pyramid(86, 52, 22, 18)),
  ...fg(pyramid(58, 38, 8, 9)),
  // Distant peaks at the far left and far right
  ...tier(pyramid(6, 50, 5, 5), "mg"),
  ...tier(pyramid(116, 52, 4, 4), "mg"),
  // Sun above-left, balancing the taller right peak
  ...tier(disk(18, 14, 3), "mg"),
  // Horizon traces — thin dashed lines extending past the range
  ...tier(dashedRow(0, 118, 3, 65), "mg"),
  ...tier(dashedRow(0, 118, 5, 72), "mg"),
];

// 03 — Two cascading flows facing each other. Main peak with a ridge
// tapering right, smaller mirror above tapering left, and a few stray
// motion particles between them suggesting flow across the scene.
const SHAPE_03: Dot[] = [
  // Main peak + right-tapering cascade
  ...fg(pyramid(27, 60, 24, 20)),
  ...fg(band(50, 12, 60)),
  ...fg(band(62, 12, 62)),
  ...fg(band(74, 12, 64)),
  ...fg(band(86, 12, 66)),
  // Mirror, half scale, above-right
  ...fg(pyramid(88, 24, 10, 10)),
  ...fg(band(70, 8, 24)),
  ...fg(band(62, 8, 26)),
  ...fg(band(54, 8, 28)),
  ...fg(band(46, 8, 30)),
  // Sun far upper-left
  ...tier(disk(14, 12, 3), "mg"),
  // Distant ridge behind the main peak
  ...tier(pyramid(40, 50, 6, 5), "mg"),
  // Trailing motion particles between the two flows
  ...tier(
    [
      [38, 38],
      [42, 40],
      [46, 42],
      [50, 44],
      [54, 46],
      [58, 48],
    ],
    "mg",
  ),
  // Horizon trace beneath the cascade
  ...tier(dashedRow(0, 120, 5, 72), "mg"),
];

const SHAPES: Record<Variant, Dot[]> = {
  "01": SHAPE_01,
  "02": SHAPE_02,
  "03": SHAPE_03,
};

const BACKDROPS: Record<Variant, string> = {
  "01": "/sandscape.png",
  "02": "/shorescape.png",
  "03": "/beachscape.png",
};

function DotGrid({ variant }: { variant: Variant }) {
  const patternId = `pillar-dot-grid-${variant}`;
  const maskId = `pillar-dot-mask-${variant}`;

  return (
    <div className="relative aspect-square w-full max-w-sm rounded-2xl overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-[0.7]"
        style={{ backgroundImage: `url('${BACKDROPS[variant]}')` }}
      />
      <svg
        viewBox={`0 0 ${VIEW} ${VIEW}`}
        className="absolute inset-0 w-full h-full block"
        role="img"
        aria-label={LABELS[variant]}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <pattern
            id={patternId}
            x="0"
            y="0"
            width={SPACING_X}
            height={SPACING_Y}
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx={SPACING_X / 2}
              cy={SPACING_Y / 2}
              r={BG_DOT_R}
              fill={BG_COLOR}
            />
          </pattern>
          {/* Mask: white = keep, black = erase. Silhouette circles punch
              holes in the dot pattern, revealing the image beneath. */}
          <mask id={maskId}>
            <rect width={VIEW} height={VIEW} fill="white" />
            {SHAPES[variant].map(([col, row, t], i) => {
              const isMg = t === "mg";
              return (
                <circle
                  key={i}
                  cx={col * SPACING_X + SPACING_X / 2}
                  cy={row * SPACING_Y + SPACING_Y / 2}
                  r={isMg ? MG_DOT_R : FG_DOT_R}
                  fill="black"
                />
              );
            })}
          </mask>
        </defs>
        <rect
          width={VIEW}
          height={VIEW}
          fill={`url(#${patternId})`}
          mask={`url(#${maskId})`}
        />
      </svg>
    </div>
  );
}

export function PillarTopoViz({ variant }: { variant: Variant }) {
  return <DotGrid variant={variant} />;
}

export function PillarTopoViz01() {
  return <DotGrid variant="01" />;
}

export function PillarTopoViz02() {
  return <DotGrid variant="02" />;
}

export function PillarTopoViz03() {
  return <DotGrid variant="03" />;
}
