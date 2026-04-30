/**
 * HeroProductMockup
 *
 * High-fidelity light-mode Shadow workspace mockup: a 3-pane (sidebar /
 * canvas / inspector) view of the Bridge client space with the Overview
 * tab active. The canvas shows narrative-intelligence summary content
 * (work products grid, files). The right inspector loops in client
 * activity analytics — a multi-series area chart, team workload bars,
 * and the agent activity feed. A floating thread popover overlays the
 * canvas/inspector boundary in the lower-right, mirroring Linear's
 * channel-thread pattern.
 *
 * Built to read like a real product screenshot at 16:10 (MacBook) ratio
 * rather than a stylised diagram. Palette is tuned to the page's warm
 * cream system tokens.
 */

import Image from "next/image";

/**
 * Brand palette (matches /globals.css site tokens):
 *   Ash    #E0DFDD  — bg / Tailwind --background
 *   Card   #FBFAF6  — Tailwind --card (warm white, near-neutral)
 *   Shade  #7F7265  — muted foreground
 *   Umbra  #453F3D  — foreground
 * Sidebar/inspector panel sits between Card and Ash so it differentiates
 * from the canvas without taking on a yellow-cream cast.
 */
const C = {
  bg: "#FBFAF6",
  panel: "#F1EFE8",
  panelInset: "#E8E5DB",
  panelHi: "#E0DDD0",
  border: "rgba(69, 63, 61, 0.10)",
  borderHi: "rgba(69, 63, 61, 0.16)",
  borderStrong: "rgba(69, 63, 61, 0.22)",
  fg: "#453F3D",
  fg85: "rgba(69, 63, 61, 0.82)",
  fg65: "rgba(69, 63, 61, 0.62)",
  fg45: "rgba(69, 63, 61, 0.42)",
  fg25: "rgba(69, 63, 61, 0.22)",
  fg15: "rgba(69, 63, 61, 0.12)",
  fg05: "rgba(69, 63, 61, 0.05)",
  green: "#88A374",
  orange: "#CC764F",
  blue: "#7489A3",
  purple: "#977BA1",
  tan: "#B27A53",
};

export function HeroProductMockup() {
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden shadow-[0_24px_72px_-32px_rgba(69,63,61,0.18),0_8px_20px_-12px_rgba(69,63,61,0.10)]"
      style={{
        background: C.bg,
        color: C.fg,
        // hairline ring tinted to the cream palette
        outline: `1px solid ${C.border}`,
        outlineOffset: "-1px",
        fontFamily:
          "var(--font-raleway), ui-sans-serif, system-ui, sans-serif",
      }}
      aria-hidden="true"
    >
      <div className="grid grid-cols-[224px_minmax(0,1fr)_300px] aspect-[16/10]">
        <Sidebar />
        <Canvas />
        <Inspector />
      </div>
      <FloatingReport />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   SIDEBAR
   ───────────────────────────────────────────────────────────────── */

function Sidebar() {
  return (
    <aside
      className="flex flex-col border-r"
      style={{ borderColor: C.border, background: C.panel }}
    >
      {/* Brand */}
      <div
        className="flex items-center justify-between h-11 px-3.5 border-b shrink-0"
        style={{ borderColor: C.border }}
      >
        <div className="flex items-center gap-2">
          <Image
            src="/logo2.svg"
            alt="Shadow"
            width={74}
            height={123}
            className="h-[18px] w-auto"
          />
          <span
            className="text-[12.5px] font-semibold tracking-tight"
            style={{ color: C.fg }}
          >
            Shadow
          </span>
        </div>
        <Glyph
          d="M3 2.5h7v7H3zM6 4.5v3"
          stroke={C.fg45}
          width={12}
          height={12}
        />
      </div>

      {/* Quick actions */}
      <div className="px-2 pt-2.5 flex flex-col gap-px text-[12px]">
        <NavRow icon="plus" label="Chat" hoverable />
        <NavRow icon="history" label="History" />
      </div>

      {/* Workspace */}
      <SidebarSection label="Workspace">
        <NavRow icon="dashboard" label="Dashboard" />
        <NavRow icon="analytics" label="Analytics" active />
        <NavRow icon="clients" label="Clients" expanded>
          <SubRow label="Bridge" status="active" />
          <SubRow label="Cohere" />
          <SubRow label="HubSpot" />
          <SubRow label="Inworld" />
        </NavRow>
        <NavRow icon="integrations" label="Integrations" />
        <NavRow icon="assets" label="Assets" />
      </SidebarSection>

      {/* Governance (was Plans) */}
      <SidebarSection label="Governance" trailing="+">
        <AgentRow name="New inbound triage" />
        <AgentRow name="Intelligence dossier" />
        <AgentRow name="Press inbound triage" />
        <AgentRow name="Proposals" />
        <AgentRow name="RFP response" />
        <AgentRow name="Executive POV" />
        <AgentRow name="GEO content" />
        <AgentRow name="Media list curation" />
        <AgentRow name="Crisis response" />
        <AgentRow name="E&A submissions" />
        <AgentRow name="Media digest" />
      </SidebarSection>

      {/* User chip */}
      <div
        className="mt-auto flex items-center gap-2.5 h-11 px-3.5 border-t"
        style={{ borderColor: C.border, background: C.panel }}
      >
        <div
          className="size-6 rounded-full flex items-center justify-center text-[10px] font-semibold"
          style={{
            background: "rgba(136, 163, 116, 0.14)",
            color: "#5a7d4d",
            border: "1px solid rgba(136, 163, 116, 0.5)",
          }}
        >
          J
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[11.5px] font-medium leading-tight" style={{ color: C.fg }}>
            Jessen Gibbs
          </p>
          <p className="text-[9.5px] leading-tight" style={{ color: C.fg45 }}>
            hello@shadow.inc
          </p>
        </div>
        <Glyph
          d="M3 4l2-2 2 2M3 7l2 2 2-2"
          stroke={C.fg45}
          width={10}
          height={11}
        />
      </div>
    </aside>
  );
}

function SidebarSection({
  label,
  trailing,
  children,
}: {
  label: string;
  trailing?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-2 pt-3.5">
      <div className="flex items-center justify-between px-2 mb-1.5">
        <p
          className="text-[9.5px] font-mono uppercase tracking-[0.18em]"
          style={{ color: C.fg45 }}
        >
          {label}
        </p>
        {trailing && (
          <span
            className="text-[14px] leading-none"
            style={{ color: C.fg65 }}
          >
            {trailing}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-px">{children}</div>
    </div>
  );
}

function NavRow({
  icon,
  label,
  active,
  expanded,
  hoverable,
  badge,
  children,
}: {
  icon: string;
  label: string;
  active?: boolean;
  expanded?: boolean;
  hoverable?: boolean;
  badge?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div
        className="flex items-center gap-2 h-[26px] px-2 rounded-md text-[12px]"
        style={{
          background: active ? C.fg05 : "transparent",
          color: active ? C.fg : hoverable ? C.fg85 : C.fg65,
        }}
      >
        <NavIcon icon={icon} color={active ? C.fg : C.fg45} />
        <span className="truncate">{label}</span>
        {badge && (
          <span
            className="ml-auto text-[10px] font-mono tabular-nums"
            style={{ color: C.fg45 }}
          >
            {badge}
          </span>
        )}
      </div>
      {expanded && children && (
        <div className="ml-5 mt-0.5 flex flex-col gap-px">{children}</div>
      )}
    </div>
  );
}

function SubRow({ label, status }: { label: string; status?: "active" }) {
  return (
    <div
      className="flex items-center h-[24px] px-2 rounded-md text-[11.5px]"
      style={{
        color: status === "active" ? C.fg : C.fg65,
        background: status === "active" ? C.fg05 : "transparent",
      }}
    >
      <span className="truncate">{label}</span>
    </div>
  );
}

function AgentRow({ name }: { name: string }) {
  return (
    <div
      className="flex items-center h-[26px] px-2 rounded-md text-[12px]"
      style={{ color: C.fg85 }}
    >
      <span className="truncate">{name}</span>
    </div>
  );
}

function NavIcon({ icon, color }: { icon: string; color: string }) {
  const props = {
    width: 13,
    height: 13,
    viewBox: "0 0 13 13",
    fill: "none" as const,
    style: { color },
  };
  switch (icon) {
    case "plus":
      return (
        <svg {...props}>
          <path
            d="M6.5 3v7M3 6.5h7"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      );
    case "history":
      return (
        <svg {...props}>
          <circle cx="6.5" cy="6.5" r="4" stroke="currentColor" strokeWidth="1.1" />
          <path
            d="M6.5 4.2v2.5l1.6 1"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      );
    case "dashboard":
      return (
        <svg {...props}>
          <rect x="2" y="2" width="3.5" height="4" rx="0.6" stroke="currentColor" strokeWidth="1.1" />
          <rect x="2" y="7.5" width="3.5" height="3.5" rx="0.6" stroke="currentColor" strokeWidth="1.1" />
          <rect x="7" y="2" width="3.5" height="3.5" rx="0.6" stroke="currentColor" strokeWidth="1.1" />
          <rect x="7" y="7" width="3.5" height="4" rx="0.6" stroke="currentColor" strokeWidth="1.1" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...props}>
          <path
            d="M2.5 10V8M5 10V5.5M7.5 10V7M10 10V3"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      );
    case "clients":
      return (
        <svg {...props}>
          <circle cx="4.5" cy="5" r="1.7" stroke="currentColor" strokeWidth="1.1" />
          <circle cx="9" cy="6" r="1.3" stroke="currentColor" strokeWidth="1.1" />
          <path
            d="M2 10c.4-1.5 1.5-2.3 2.5-2.3s2.1.8 2.5 2.3"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      );
    case "integrations":
      return (
        <svg {...props}>
          <rect
            x="1.5"
            y="1.5"
            width="3.5"
            height="3.5"
            rx="0.6"
            stroke="currentColor"
            strokeWidth="1.1"
          />
          <rect
            x="8"
            y="1.5"
            width="3.5"
            height="3.5"
            rx="0.6"
            stroke="currentColor"
            strokeWidth="1.1"
          />
          <rect
            x="4.75"
            y="8"
            width="3.5"
            height="3.5"
            rx="0.6"
            stroke="currentColor"
            strokeWidth="1.1"
          />
          <path
            d="M3.25 5L6.5 8M9.75 5L6.5 8"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      );
    case "assets":
      return (
        <svg {...props}>
          <path
            d="M6.5 2L11 4.5v4L6.5 11 2 8.5v-4L6.5 2zM2 4.5l4.5 2.5 4.5-2.5M6.5 7v4"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return <svg {...props} />;
  }
}

/* ─────────────────────────────────────────────────────────────────
   CANVAS — Bridge client space, Overview tab
   ───────────────────────────────────────────────────────────────── */

function Canvas() {
  return (
    <main className="flex flex-col min-w-0" style={{ background: C.bg }}>
      {/* Top bar — breadcrumb + meta */}
      <div
        className="flex items-center gap-3 h-11 px-5 border-b shrink-0"
        style={{ borderColor: C.border }}
      >
        <div
          className="flex items-center gap-1.5 text-[11.5px] min-w-0"
          style={{ color: C.fg65 }}
        >
          <span>Clients</span>
          <Chevron />
          <span>Bridge</span>
          <Chevron />
          <span style={{ color: C.fg }} className="truncate">
            Series B announcement
          </span>
        </div>
        <Star color={C.orange} />
      </div>

      {/* Title row */}
      <div
        className="px-5 pt-4 pb-3 border-b shrink-0"
        style={{ borderColor: C.border }}
      >
        <p
          className="text-[10px] font-mono uppercase tracking-[0.18em]"
          style={{ color: C.fg45 }}
        >
          Bridge · Series B
        </p>
        <h3
          className="mt-1 text-[18px] font-semibold tracking-tight leading-[1.1]"
          style={{ color: C.fg }}
        >
          Bridge as stablecoin infrastructure
        </h3>
      </div>

      {/* Tabs */}
      <div
        className="flex items-end gap-5 h-9 px-5 border-b text-[11.5px] shrink-0"
        style={{ borderColor: C.border, color: C.fg45 }}
      >
        <Tab label="Overview" active />
        <Tab label="Messaging" />
        <Tab label="Media strategy" />
        <Tab label="GEO Content" badge="3" />
        <Tab label="Digital" />
        <Tab label="Thought Leadership" />
      </div>

      {/* Overview content */}
      <div className="flex-1 min-h-0 px-5 py-4 flex flex-col gap-5 overflow-hidden">
        <WorkProducts />
        <FilesSection />
      </div>
    </main>
  );
}

function Tab({
  label,
  active,
  badge,
}: {
  label: string;
  active?: boolean;
  badge?: string;
}) {
  return (
    <div
      className="relative flex items-center gap-1.5 h-full -mb-px"
      style={{ color: active ? C.fg : C.fg45 }}
    >
      <span>{label}</span>
      {badge && (
        <span
          className="text-[9.5px] font-mono tabular-nums px-1 rounded"
          style={{
            background: active ? C.fg15 : C.fg05,
            color: active ? C.fg65 : C.fg45,
            border: `1px solid ${C.border}`,
          }}
        >
          {badge}
        </span>
      )}
      {active && (
        <span
          className="absolute left-0 right-0 -bottom-px h-px"
          style={{ background: C.fg }}
        />
      )}
    </div>
  );
}


function WorkProducts() {
  const products: { title: string; date: string }[] = [
    { title: "Bridge Series B Announce: V3", date: "Apr 29" },
    { title: "Bridge Series B Announce: V2", date: "Apr 29" },
    { title: "Stablecoin Infrastructure Positioning Frame", date: "Apr 28" },
    { title: "Tier-1 Pitch: Bloomberg + The Information", date: "Apr 28" },
    { title: "Competitive Landscape: Stripe x Paxos x Bridge", date: "Apr 22" },
  ];
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex items-center gap-4 shrink-0">
        <p
          className="text-[10px] font-mono uppercase tracking-[0.2em]"
          style={{ color: C.fg45 }}
        >
          Work Products
        </p>
        <div
          className="inline-flex items-center rounded-full p-0.5"
          style={{
            background: C.fg05,
            border: `1px solid ${C.border}`,
          }}
        >
          <span
            className="px-2.5 py-0.5 rounded-full flex items-center gap-1.5 text-[11px]"
            style={{
              background: C.bg,
              color: C.fg,
              border: `1px solid ${C.border}`,
            }}
          >
            Drafts
            <span
              className="text-[10px] font-mono tabular-nums"
              style={{ color: C.fg65 }}
            >
              5
            </span>
          </span>
          <span
            className="px-2.5 py-0.5 flex items-center gap-1.5 text-[11px]"
            style={{ color: C.fg45 }}
          >
            Completed
            <span className="text-[10px] font-mono tabular-nums">0</span>
          </span>
        </div>
      </div>
      <div className="my-3 h-px shrink-0" style={{ background: C.border }} />

      <div className="grid grid-cols-5 gap-2.5 shrink-0 items-start">
        {products.map((p) => (
          <div
            key={p.title}
            className="rounded-xl flex flex-col p-2 aspect-[3/4]"
            style={{
              background: C.panel,
              border: `1px solid ${C.border}`,
            }}
          >
            {/* Inner document box */}
            <div
              className="rounded-lg flex-1 min-h-0 px-2.5 pt-2.5"
              style={{
                background: "#fdfaf3",
                border: `1px solid ${C.border}`,
              }}
            >
              <p
                className="text-[11px] leading-[1.4]"
                style={{ color: C.fg }}
              >
                {p.title}
              </p>
            </div>
            <p
              className="mt-1.5 px-1 text-[10px] font-mono"
              style={{ color: C.fg45 }}
            >
              {p.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FilesSection() {
  const files: { name: string; ext: string }[] = [
    { name: "bridge_press_kit_v3.pdf", ext: "PDF" },
    { name: "stripe_q1_stablecoin_references.xlsx", ext: "XLSX" },
    { name: "bridge_brand_guidelines.pdf", ext: "PDF" },
    { name: "bridge_messaging_house_v2.pdf", ext: "PDF" },
    { name: "competitor_landscape_q1.pdf", ext: "PDF" },
    { name: "tier1_press_list_q2.csv", ext: "CSV" },
    { name: "bridge_founder_bios.docx", ext: "DOCX" },
    { name: "embargo_protocol_2026.pdf", ext: "PDF" },
    { name: "coverage_tracker_q1.xlsx", ext: "XLSX" },
    { name: "spokesperson_qa_briefing.pdf", ext: "PDF" },
    { name: "bridge_logo_assets.zip", ext: "ZIP" },
    { name: "stablecoin_market_landscape.xlsx", ext: "XLSX" },
    { name: "bridge_seriesB_pitch_deck.pdf", ext: "PDF" },
    { name: "bloomberg_briefing_template.docx", ext: "DOCX" },
  ];
  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex items-center gap-2 shrink-0">
        <p
          className="text-[10px] font-mono uppercase tracking-[0.2em]"
          style={{ color: C.fg45 }}
        >
          Files
        </p>
        <span
          className="text-[10px] font-mono tabular-nums"
          style={{ color: C.fg65 }}
        >
          {files.length}
        </span>
        <span
          className="ml-auto text-[10px] font-mono uppercase tracking-[0.2em]"
          style={{ color: C.fg65 }}
        >
          Upload
        </span>
      </div>
      <p className="mt-2 text-[11px] shrink-0" style={{ color: C.fg45 }}>
        Relevant client materials that can be referenced by Shadow in chat.
      </p>
      <div className="my-3 h-px shrink-0" style={{ background: C.border }} />
      <div className="flex flex-wrap gap-2 content-start flex-1 min-h-0">
        {files.map((f) => (
          <div
            key={f.name}
            className="inline-flex items-center gap-2 rounded-md pl-2.5 pr-1.5 h-7 self-start"
            style={{
              background: C.panel,
              border: `1px solid ${C.border}`,
            }}
          >
            <span className="text-[11px]" style={{ color: C.fg }}>
              {f.name}
            </span>
            <span
              className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded"
              style={{
                background: C.fg15,
                color: C.fg65,
              }}
            >
              {f.ext}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   INSPECTOR — analytics + workload + activity
   ───────────────────────────────────────────────────────────────── */

function Inspector() {
  return (
    <aside
      className="flex flex-col border-l overflow-hidden"
      style={{ borderColor: C.border, background: C.panel }}
    >
      <div
        className="flex items-center justify-between h-11 px-4 border-b shrink-0"
        style={{ borderColor: C.border }}
      >
        <span className="text-[11px] font-medium" style={{ color: C.fg65 }}>
          Activity
        </span>
        <span
          className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[9.5px] font-mono"
          style={{
            background: C.bg,
            color: C.fg65,
            border: `1px solid ${C.border}`,
          }}
        >
          90d
          <Glyph d="M3 4l2 2 2-2" stroke={C.fg45} width={10} height={8} />
        </span>
      </div>

      <InspectorActivityChart />
      <TeamWorkload />
      <RecentActivity />
    </aside>
  );
}

function InspectorActivityChart() {
  const SERIES = [
    {
      name: "Media",
      color: C.orange,
      pts: [0.4, 0.45, 0.55, 0.5, 0.6, 0.65, 0.72, 0.78, 0.82, 0.84, 0.88, 0.9],
    },
    {
      name: "AI",
      color: C.purple,
      pts: [0.2, 0.25, 0.32, 0.4, 0.46, 0.52, 0.58, 0.66, 0.72, 0.78, 0.84, 0.92],
    },
    {
      name: "Search",
      color: C.blue,
      pts: [0.5, 0.52, 0.55, 0.58, 0.62, 0.6, 0.65, 0.68, 0.7, 0.72, 0.74, 0.76],
    },
    {
      name: "Social",
      color: C.green,
      pts: [0.28, 0.32, 0.34, 0.38, 0.42, 0.46, 0.5, 0.5, 0.55, 0.6, 0.62, 0.65],
    },
  ];
  const W = 280;
  const H = 100;
  const PAD_T = 4;
  const PAD_B = 4;
  const innerH = H - PAD_T - PAD_B;
  function path(pts: number[]) {
    const dx = W / (pts.length - 1);
    let d = "";
    pts.forEach((p, i) => {
      const x = i * dx;
      const y = PAD_T + (1 - p) * innerH;
      if (i === 0) d += `M ${x} ${y}`;
      else {
        const px = (i - 1) * dx;
        const cx = (px + x) / 2;
        const py = PAD_T + (1 - pts[i - 1]) * innerH;
        d += ` Q ${cx} ${py} ${cx} ${(py + y) / 2}`;
        d += ` Q ${cx} ${y} ${x} ${y}`;
      }
    });
    return d;
  }
  function area(pts: number[]) {
    return `${path(pts)} L ${W} ${PAD_T + innerH} L 0 ${PAD_T + innerH} Z`;
  }
  return (
    <div
      className="px-4 pt-3 pb-3 border-b shrink-0"
      style={{ borderColor: C.border }}
    >
      <div className="flex items-baseline justify-between">
        <p
          className="text-[10.5px] font-medium"
          style={{ color: C.fg }}
        >
          Client volume
        </p>
        <p
          className="text-[9.5px] font-mono"
          style={{ color: C.fg45 }}
        >
          Bridge · 12 weeks
        </p>
      </div>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="none"
        className="w-full mt-2"
        style={{ height: 88, display: "block" }}
      >
        {[0.33, 0.66].map((g, i) => (
          <line
            key={i}
            x1={0}
            x2={W}
            y1={PAD_T + (1 - g) * innerH}
            y2={PAD_T + (1 - g) * innerH}
            stroke={C.fg15}
            strokeDasharray="2 3"
            strokeWidth={0.6}
          />
        ))}
        {SERIES.map((s) => (
          <path
            key={`a-${s.name}`}
            d={area(s.pts)}
            fill={s.color}
            opacity={0.06}
          />
        ))}
        {SERIES.map((s) => (
          <path
            key={`l-${s.name}`}
            d={path(s.pts)}
            stroke={s.color}
            strokeWidth={1.3}
            fill="none"
            vectorEffect="non-scaling-stroke"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        ))}
      </svg>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        {SERIES.map((s) => (
          <div key={s.name} className="flex items-center gap-1.5">
            <span
              className="size-1.5 rounded-full"
              style={{ background: s.color }}
            />
            <span className="text-[10px]" style={{ color: C.fg65 }}>
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamWorkload() {
  const ROWS = [
    { name: "Researcher", accent: C.blue, segs: [0.32, 0.18, 0.12] },
    { name: "Strategist", accent: C.purple, segs: [0.22, 0.14] },
    { name: "Writer", accent: C.orange, segs: [0.4, 0.18, 0.12, 0.08] },
    { name: "Analyst", accent: C.tan, segs: [0.18, 0.12] },
  ];
  return (
    <div
      className="px-4 pt-3 pb-3 border-b shrink-0"
      style={{ borderColor: C.border }}
    >
      <p
        className="text-[9.5px] font-mono uppercase tracking-[0.16em] mb-2"
        style={{ color: C.fg45 }}
      >
        Team workload
      </p>
      <div className="flex flex-col gap-1.5">
        {ROWS.map((row) => {
          const total = row.segs.reduce((a, b) => a + b, 0);
          return (
            <div
              key={row.name}
              className="grid grid-cols-[64px_minmax(0,1fr)_24px] gap-2 items-center text-[10.5px]"
            >
              <span style={{ color: C.fg65 }} className="truncate">
                {row.name}
              </span>
              <div
                className="h-[6px] rounded-full overflow-hidden flex"
                style={{ background: C.fg15 }}
              >
                {row.segs.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      width: `${s * 100}%`,
                      background: row.accent,
                      opacity: 0.9 - i * 0.18,
                    }}
                  />
                ))}
              </div>
              <span
                className="text-[10px] font-mono tabular-nums text-right"
                style={{ color: C.fg65 }}
              >
                {Math.round(total * 100)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RecentActivity() {
  const ROWS: {
    actor: string;
    accent: string;
    kind: "agent" | "user";
    verb: string;
    target: string;
    time: string;
  }[] = [
    {
      actor: "Strategist",
      accent: C.purple,
      kind: "agent",
      verb: "drafted",
      target: "Positioning · v3",
      time: "2m",
    },
    {
      actor: "Researcher",
      accent: C.blue,
      kind: "agent",
      verb: "indexed",
      target: "Stripe · Paxos · Bridge",
      time: "8m",
    },
    {
      actor: "Writer",
      accent: C.orange,
      kind: "agent",
      verb: "published",
      target: "Tier-1 pitch list",
      time: "1h",
    },
    {
      actor: "jessen",
      accent: C.green,
      kind: "user",
      verb: "set",
      target: "Embargo · Tue 9 AM ET",
      time: "1h",
    },
    {
      actor: "Reporter",
      accent: C.tan,
      kind: "agent",
      verb: "monitoring",
      target: "Bloomberg · WSJ · Information",
      time: "3h",
    },
    {
      actor: "Analyst",
      accent: C.tan,
      kind: "agent",
      verb: "scored",
      target: "Narrative position · 0.84",
      time: "4h",
    },
  ];
  return (
    <div className="flex-1 min-h-0 px-4 pt-3 pb-3 overflow-hidden">
      <p
        className="text-[9.5px] font-mono uppercase tracking-[0.16em] mb-2"
        style={{ color: C.fg45 }}
      >
        Recent activity
      </p>
      <div className="flex flex-col gap-1.5">
        {ROWS.map((r, i) => (
          <div key={i} className="flex items-center gap-1.5 text-[10.5px]">
            <span style={{ color: C.fg65 }} className="shrink-0">
              {r.verb}
            </span>
            <span style={{ color: C.fg }} className="truncate">
              {r.target}
            </span>
            <span
              className="ml-auto text-[9.5px] font-mono shrink-0"
              style={{ color: C.fg45 }}
            >
              {r.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   FLOATING REPORT — narrative landscape report popover
   ───────────────────────────────────────────────────────────────── */

function FloatingReport() {
  const KPIS = [
    { label: "SOV", value: "22%", delta: "+4", sub: "vs Q1" },
    { label: "GEO", value: "31%", delta: "+9", sub: "ChatGPT · Claude" },
    { label: "Sentiment", value: "0.84", delta: "+0.12", sub: "rolling 30d" },
    { label: "Coverage", value: "217", delta: "+63", sub: "tier-1 articles" },
  ];

  const SERIES = [
    {
      name: "Media",
      color: C.orange,
      pts: [0.42, 0.45, 0.5, 0.48, 0.55, 0.6, 0.66, 0.62, 0.7, 0.75, 0.78, 0.82, 0.86, 0.84, 0.88],
    },
    {
      name: "AI",
      color: C.purple,
      pts: [0.18, 0.22, 0.28, 0.34, 0.38, 0.45, 0.5, 0.58, 0.66, 0.7, 0.74, 0.78, 0.82, 0.85, 0.91],
    },
    {
      name: "Search",
      color: C.blue,
      pts: [0.5, 0.55, 0.52, 0.58, 0.6, 0.62, 0.65, 0.68, 0.66, 0.7, 0.72, 0.7, 0.74, 0.76, 0.78],
    },
    {
      name: "Social",
      color: C.green,
      pts: [0.25, 0.3, 0.32, 0.36, 0.4, 0.42, 0.45, 0.5, 0.55, 0.5, 0.52, 0.55, 0.58, 0.6, 0.64],
    },
  ];
  const W = 380;
  const H = 100;
  const PAD_T = 4;
  const PAD_B = 4;
  const innerH = H - PAD_T - PAD_B;
  function path(pts: number[]) {
    const dx = W / (pts.length - 1);
    let d = "";
    pts.forEach((p, i) => {
      const x = i * dx;
      const y = PAD_T + (1 - p) * innerH;
      if (i === 0) d += `M ${x} ${y}`;
      else {
        const px = (i - 1) * dx;
        const cx = (px + x) / 2;
        const py = PAD_T + (1 - pts[i - 1]) * innerH;
        d += ` Q ${cx} ${py} ${cx} ${(py + y) / 2}`;
        d += ` Q ${cx} ${y} ${x} ${y}`;
      }
    });
    return d;
  }
  function area(pts: number[]) {
    return `${path(pts)} L ${W} ${PAD_T + innerH} L 0 ${PAD_T + innerH} Z`;
  }

  return (
    <div
      className="absolute right-[40px] bottom-[36px] w-[420px] rounded-xl backdrop-blur-md shadow-[0_28px_64px_-18px_rgba(58,52,42,0.22),0_6px_16px_-10px_rgba(58,52,42,0.12)]"
      style={{
        background: "rgba(252, 250, 245, 0.92)",
        border: `1px solid ${C.borderHi}`,
      }}
    >
      {/* Header */}
      <div
        className="flex items-center gap-2 px-3.5 py-2.5 border-b"
        style={{ borderColor: C.border }}
      >
        <span
          className="text-[10px] font-mono uppercase tracking-[0.18em]"
          style={{ color: C.fg45 }}
        >
          Narrative landscape
        </span>
        <span
          className="ml-auto text-[11.5px] font-medium"
          style={{ color: C.fg }}
        >
          Wednesday, April 29
        </span>
      </div>

      {/* KPI grid */}
      <div
        className="grid grid-cols-4 px-3.5 py-3 border-b"
        style={{ borderColor: C.border }}
      >
        {KPIS.map((k, i) => (
          <div
            key={k.label}
            className="px-2 first:pl-0 last:pr-0"
            style={{
              borderRight:
                i < KPIS.length - 1 ? `1px solid ${C.border}` : "none",
            }}
          >
            <p
              className="text-[9px] font-mono uppercase tracking-[0.14em] truncate"
              style={{ color: C.fg45 }}
            >
              {k.label}
            </p>
            <div className="mt-1 flex items-baseline gap-1">
              <span
                className="text-[15px] font-semibold tabular-nums"
                style={{ color: C.fg }}
              >
                {k.value}
              </span>
              <span
                className="text-[9.5px] font-mono tabular-nums"
                style={{ color: C.green }}
              >
                {k.delta}
              </span>
            </div>
            <p className="mt-0.5 text-[9px] truncate" style={{ color: C.fg45 }}>
              {k.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="px-3.5 pt-3 pb-3">
        <div className="flex items-center justify-between">
          <p
            className="text-[9.5px] font-mono uppercase tracking-[0.16em]"
            style={{ color: C.fg45 }}
          >
            Narrative volume · 90 days
          </p>
          <div className="flex items-center gap-2.5">
            {SERIES.map((s) => (
              <div key={s.name} className="flex items-center gap-1">
                <span
                  className="size-1.5 rounded-full"
                  style={{ background: s.color }}
                />
                <span className="text-[9px]" style={{ color: C.fg65 }}>
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <p
          className="mt-1 text-[12px] font-medium leading-tight"
          style={{ color: C.fg }}
        >
          Bridge is overtaking the wallet narrative.
        </p>
        <svg
          viewBox={`0 0 ${W} ${H}`}
          preserveAspectRatio="none"
          className="w-full mt-2"
          style={{ height: 96, display: "block" }}
        >
          {[0.33, 0.66].map((g, i) => (
            <line
              key={i}
              x1={0}
              x2={W}
              y1={PAD_T + (1 - g) * innerH}
              y2={PAD_T + (1 - g) * innerH}
              stroke={C.fg15}
              strokeDasharray="2 3"
              strokeWidth={0.6}
            />
          ))}
          {SERIES.map((s) => (
            <path
              key={`a-${s.name}`}
              d={area(s.pts)}
              fill={s.color}
              opacity={0.06}
            />
          ))}
          {SERIES.map((s) => (
            <path
              key={`l-${s.name}`}
              d={path(s.pts)}
              stroke={s.color}
              strokeWidth={1.4}
              fill="none"
              vectorEffect="non-scaling-stroke"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          ))}
          {(() => {
            const last = SERIES[1].pts[SERIES[1].pts.length - 1];
            const x = W;
            const y = PAD_T + (1 - last) * innerH;
            return (
              <>
                <line
                  x1={x}
                  x2={x}
                  y1={PAD_T}
                  y2={PAD_T + innerH}
                  stroke={C.fg25}
                  strokeDasharray="2 3"
                  strokeWidth={0.6}
                />
                <circle
                  cx={x}
                  cy={y}
                  r={3}
                  fill={C.bg}
                  stroke={SERIES[1].color}
                  strokeWidth={1.6}
                />
              </>
            );
          })()}
        </svg>
        <div className="flex items-center justify-between mt-1">
          {["FEB", "MAR", "APR"].map((t) => (
            <span
              key={t}
              className="text-[9px] font-mono tracking-widest"
              style={{ color: C.fg45 }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   PRIMITIVES
   ───────────────────────────────────────────────────────────────── */

function Chevron() {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" style={{ color: C.fg45 }}>
      <path
        d="M3 2l2 2-2 2"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Star({ color }: { color: string }) {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ color }}>
      <path
        d="M5.5 1.5l1.2 2.5 2.7.4-2 1.9.5 2.7-2.4-1.3-2.4 1.3.5-2.7-2-1.9 2.7-.4L5.5 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Glyph({
  d,
  stroke,
  width = 12,
  height = 12,
}: {
  d: string;
  stroke: string;
  width?: number;
  height?: number;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      style={{ color: stroke }}
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
