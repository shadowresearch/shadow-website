"use client";

import { useState } from "react";

interface DocCard {
  title: string;
  date: string;
}

interface FileItem {
  name: string;
  ext: string;
}

interface Track {
  id: string;
  label: string;
  drafts: DocCard[];
  completed: DocCard[];
  files: FileItem[];
}

const TRACKS: Track[] = [
  {
    id: "media",
    label: "Media",
    drafts: [
      { title: "Press release: Q2 product launch announcement", date: "Apr 25" },
      { title: "Tier-1 pitch: Bloomberg AI desk briefing", date: "Apr 24" },
      { title: "Media list: AI policy reporters", date: "Apr 24" },
      { title: "Briefing doc: Founder Q&A prep", date: "Apr 23" },
      { title: "Coverage report: Q1 share of voice", date: "Apr 20" },
    ],
    completed: [
      { title: "Press release: Series B funding announcement", date: "Apr 12" },
    ],
    files: [
      { name: "Shadow_Press_Kit_Q2_2026.pdf", ext: "PDF" },
      { name: "Spokesperson_Bios_Updated.docx", ext: "DOCX" },
      { name: "Embargo_List_Tier1_AI.xlsx", ext: "XLSX" },
    ],
  },
  {
    id: "social",
    label: "Social",
    drafts: [
      { title: "LinkedIn POV: AI agents for communications", date: "Apr 25" },
      { title: "X thread: Narrative graph explained", date: "Apr 24" },
      { title: "Founder long-form: positioning thesis", date: "Apr 24" },
      { title: "Series brief: founder voice cadence", date: "Apr 22" },
    ],
    completed: [],
    files: [
      { name: "Brand_Voice_Guidelines.pdf", ext: "PDF" },
      { name: "Founder_Content_Pillars.docx", ext: "DOCX" },
    ],
  },
  {
    id: "ai-visibility",
    label: "AI Visibility",
    drafts: [
      { title: "GEO page: narrative intelligence definition", date: "Apr 25" },
      { title: "ChatGPT audit: brand mention coverage", date: "Apr 24" },
      { title: "Perplexity citations report — weekly", date: "Apr 23" },
      { title: "Prompt set: category query baseline", date: "Apr 22" },
      { title: "Gemini visibility scan", date: "Apr 20" },
    ],
    completed: [
      { title: "Q1 GEO audit: baseline + recommendations", date: "Apr 02" },
    ],
    files: [
      { name: "GEO_Methodology_v3.pdf", ext: "PDF" },
      { name: "LLM_Prompt_Library_Comms.xlsx", ext: "XLSX" },
      { name: "Citation_Tracking_Schema.json", ext: "JSON" },
    ],
  },
  {
    id: "thought-leadership",
    label: "Thought Leadership",
    drafts: [
      { title: "Byline draft: Forbes contributor", date: "Apr 25" },
      { title: "Op-ed: Wall Street Journal submission", date: "Apr 24" },
      { title: "Keynote outline: SXSW 2026", date: "Apr 23" },
      { title: "Speaker abstract: PRSA national", date: "Apr 22" },
    ],
    completed: [
      { title: "HBR essay: future of communications", date: "Mar 28" },
      { title: "TechCrunch contributor: AI agents", date: "Mar 14" },
    ],
    files: [
      { name: "Speaker_Bureau_Targets_2026.xlsx", ext: "XLSX" },
      { name: "Executive_Bio_Long.docx", ext: "DOCX" },
    ],
  },
];

type Mode = "active" | "completed";

/**
 * ProgramExecutionViz
 *
 * Mirrors the workspace UI used in the Shadow product (workspace detail view):
 * a Work Products section with a Drafts/Completed toggle and a grid of
 * portrait document cards, followed by a Files section. Top-level sub-tabs
 * scope the workspace to a program track.
 */
export function ProgramExecutionViz() {
  const [activeTrack, setActiveTrack] = useState<string>(TRACKS[0].id);
  const [mode, setMode] = useState<Mode>("active");

  const track = TRACKS.find((t) => t.id === activeTrack) ?? TRACKS[0];
  const docs = mode === "active" ? track.drafts : track.completed;

  return (
    <div className="rounded-2xl bg-card overflow-hidden ring-1 ring-foreground/10 shadow-[0_18px_48px_-20px_rgba(0,0,0,0.25)]">
      {/* Top sub-tabs (program tracks) */}
      <div className="flex items-center gap-1 px-4 pt-3 border-b border-border/60 overflow-x-auto">
        {TRACKS.map((t) => {
          const isActive = t.id === activeTrack;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setActiveTrack(t.id);
                setMode("active");
              }}
              className={`shrink-0 text-[12px] px-3 py-2 transition-colors ${
                isActive
                  ? "text-foreground font-medium border-b-2 border-foreground -mb-px"
                  : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="px-5 py-5 space-y-7">
        {/* WORK PRODUCTS */}
        <section>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-[11px] font-heading font-semibold text-muted-foreground tracking-widest uppercase">
              Work Products
            </h3>
            <DraftToggle
              mode={mode}
              draftCount={track.drafts.length}
              completedCount={track.completed.length}
              onChange={setMode}
            />
          </div>
          <p className="text-[11px] text-muted-foreground mb-3">
            {mode === "active"
              ? "Client work drafted with Shadow in chat. Mark complete when finalized."
              : "Completed deliverables."}
          </p>
          <div className="h-px bg-border/60 mb-4" />
          <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-3">
            {docs.length === 0 ? (
              <div className="col-span-full py-8 text-center text-[12px] text-muted-foreground">
                No {mode === "active" ? "drafts" : "completed"} yet.
              </div>
            ) : (
              docs.slice(0, 5).map((doc, i) => (
                <DocCardView
                  key={`${activeTrack}-${mode}-${i}`}
                  card={doc}
                  index={i}
                />
              ))
            )}
          </div>
        </section>

        {/* FILES */}
        <section>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <h3 className="text-[11px] font-heading font-semibold text-muted-foreground tracking-widest uppercase">
                Files
              </h3>
              <span className="text-[11px] text-muted-foreground/70 tabular-nums">
                {track.files.length}
              </span>
            </div>
            <button
              type="button"
              className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              Upload
            </button>
          </div>
          <p className="text-[11px] text-muted-foreground mb-3">
            Relevant client materials that can be referenced by Shadow in chat.
          </p>
          <div className="h-px bg-border/60 mb-4" />
          <div className="flex flex-wrap gap-2">
            {track.files.map((f) => (
              <FileChip key={f.name} file={f} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function DraftToggle({
  mode,
  draftCount,
  completedCount,
  onChange,
}: {
  mode: Mode;
  draftCount: number;
  completedCount: number;
  onChange: (m: Mode) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-border/60 p-0.5 h-7">
      <button
        type="button"
        onClick={() => onChange("active")}
        className={`rounded-full h-6 px-2.5 text-[11px] flex items-center gap-1 transition-colors ${
          mode === "active"
            ? "bg-muted text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Drafts
        <span className="text-muted-foreground tabular-nums">{draftCount}</span>
      </button>
      <button
        type="button"
        onClick={() => onChange("completed")}
        className={`rounded-full h-6 px-2.5 text-[11px] flex items-center gap-1 transition-colors ${
          mode === "completed"
            ? "bg-muted text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        Completed
        <span className="text-muted-foreground tabular-nums">
          {completedCount}
        </span>
      </button>
    </div>
  );
}

function DocCardView({ card, index }: { card: DocCard; index: number }) {
  return (
    <div
      className="w-full aspect-[17/22] rounded-xl border border-border/40 bg-muted/30 flex flex-col overflow-hidden"
      style={{
        animation: `pe-card-in 380ms ease-out ${index * 60}ms both`,
      }}
    >
      {/* Faux document area */}
      <div className="flex-1 relative mx-2.5 mt-2.5 rounded-lg border border-border/30 bg-background overflow-hidden">
        <div className="flex-1 flex flex-col h-full px-3 pt-2.5">
          <p className="text-[12px] font-heading font-medium leading-snug text-foreground line-clamp-5">
            {card.title}
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </div>
      {/* Metadata footer */}
      <div className="px-3 py-2">
        <span className="text-[10px] text-muted-foreground tabular-nums">
          {card.date}
        </span>
      </div>
      <style jsx>{`
        @keyframes pe-card-in {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

function FileChip({ file }: { file: FileItem }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-background px-2.5 py-1.5 max-w-full">
      <span className="text-[11.5px] text-foreground truncate" title={file.name}>
        {file.name}
      </span>
      <span className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground/80 bg-muted/60 px-1.5 py-0.5 rounded shrink-0">
        {file.ext}
      </span>
    </div>
  );
}
