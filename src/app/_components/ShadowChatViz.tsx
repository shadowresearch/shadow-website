/**
 * ShadowChatViz
 *
 * Renders Shadow's chat UI directly on the page background — no dark
 * panel, no faux app chrome. Reasoning steps with a dashed vertical
 * connector and a "thinking" terminal step, then the live document
 * artifact card. The whole composition fades into the page at the top
 * so the conversation reads as continuing above the visible frame.
 */

const STEPS: string[] = [
  "Reading positioning brief — Atlas Materials",
  "Indexing press history and analyst coverage",
  "Mapping competitive landscape — climate materials",
  "Reading narrative landscape — circular economy",
  "Identifying ownable positions and white space",
  "Building Q2 program scope and cadence",
  "Drafting outreach plan and Tier-1 list",
];

// Animation timing (kept here so page.tsx can use the same keyframe + base
// to chain in the deliverables list right after the doc card)
export const SHADOW_CHAT_STEP_MS = 380;
export const SHADOW_CHAT_DOC_DELAY_MS =
  SHADOW_CHAT_STEP_MS * 7 + 250; // after the 7 chain steps
export const SHADOW_CHAT_AFTER_DOC_MS = SHADOW_CHAT_DOC_DELAY_MS + 600;

export function ShadowChatViz() {
  return (
    <div className="relative w-full max-w-[1080px]">
      <div className="relative pl-5">
        {/* Dashed connector — spans the chain AND extends down into the doc
            card so the doc reads as the chain's terminal node. */}
        <div
          aria-hidden="true"
          className="absolute left-[5px] top-[10px] bottom-[60px] md:bottom-[80px] border-l border-dashed border-foreground/15"
        />

        <ReasoningList />
        <DocumentArtifact />
      </div>

      <style>{`
        @keyframes shadow-chat-step-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ─── Reasoning list ─────────────────────────────────────────────── */

function ReasoningList() {
  return (
    <ol className="relative flex flex-col gap-5 md:gap-6">
      {STEPS.map((label, i) => (
        <StepRow key={i} label={label} index={i} />
      ))}
    </ol>
  );
}

function StepRow({ label, index }: { label: string; index: number }) {
  return (
    <li
      className="relative flex items-center gap-3 text-[15px] md:text-[16px] text-muted-foreground"
      style={{
        animation: `shadow-chat-step-in 360ms ease-out ${
          index * SHADOW_CHAT_STEP_MS
        }ms both`,
      }}
    >
      {/* Node on the dashed line — single subtle dot */}
      <span
        aria-hidden="true"
        className="absolute -left-[18px] top-1/2 -translate-y-1/2 size-[5px] rounded-full bg-foreground/35"
      />

      <span className="truncate">{label}</span>

      <CheckCircle />
      <ChevronDown />
    </li>
  );
}

function CheckCircle() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
      style={{ color: "var(--primary)" }}
    >
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1" />
      <path
        d="M5 8l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="shrink-0 text-muted-foreground/60"
    >
      <path
        d="M4 6l3 3 3-3"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Document artifact ──────────────────────────────────────────── */

function DocumentArtifact() {
  return (
    <div
      className="relative mt-7 md:mt-8"
      style={{
        animation: `shadow-chat-step-in 520ms ease-out ${SHADOW_CHAT_DOC_DELAY_MS}ms both`,
      }}
    >
      {/* Terminal node on the dashed line — same bullet language as the
          chain steps, so the doc reads as the final node of the chain. */}
      <span
        aria-hidden="true"
        className="absolute -left-[18px] top-[22px] md:top-[26px] size-[5px] rounded-full bg-foreground/35"
      />

      <article
        className="rounded-2xl border border-foreground/10 bg-background/60 px-6 md:px-10 py-6 md:py-8"
        style={{
          boxShadow:
            "0 1px 0 rgba(58, 52, 42, 0.04), 0 12px 40px -20px rgba(58, 52, 42, 0.18)",
        }}
      >
        <div className="flex items-center gap-3">
          <p className="text-[13px] text-muted-foreground/80 truncate">
            Shadow · New client / Atlas Materials
          </p>
          <div className="ml-auto flex items-center gap-2 text-muted-foreground/60">
            <DocIcon path="M5 4h6v8H5zM5 7h6" />
            <DocIcon path="M5 8c1-2 4-2 5 0M9 6L11 4M5 8L3 10" />
            <DocIcon path="M3 3h4M3 3v4M13 3h-4M13 3v4M3 13h4M3 13v-4M13 13h-4M13 13v-4" />
            <DocIcon path="M5 5h6v6h-6zM5 11l6-6" />
          </div>
        </div>

        <div className="mt-5 h-px bg-foreground/10" />

        <h3 className="mt-7 font-heading font-bold text-foreground tracking-tight leading-[1.05] text-[clamp(1.5rem,2.6vw,2.25rem)]">
          Atlas Materials: Q2 Program Brief
        </h3>
        <p className="mt-3 italic text-muted-foreground text-[clamp(0.95rem,1.1vw,1rem)]">
          April 29, 2026 | Climate materials · Series A announce in 6 weeks
        </p>

        <div className="mt-7 h-px bg-foreground/10" />

        <h4 className="mt-7 font-heading font-medium text-muted-foreground/70 text-[clamp(1.125rem,1.6vw,1.375rem)] tracking-tight">
          Landscape
        </h4>

        <p className="mt-4 text-muted-foreground/85 text-[clamp(0.95rem,1.05vw,1.0625rem)] leading-relaxed">
          Atlas sits at the intersection of climate materials and circular
          economy — a category currently shaped by three incumbent narratives
          and one emerging white space the team can credibly own ahead of the
          Series A announce.
        </p>
        <p className="mt-3 italic text-muted-foreground/55 text-[clamp(0.9rem,1vw,1rem)] leading-relaxed">
          Coverage in this space skews toward financing milestones over
          technical differentiation; reframing around process advantage opens…
        </p>
      </article>
    </div>
  );
}

function DocIcon({ path }: { path: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
