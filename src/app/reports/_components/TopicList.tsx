"use client";

import { useState } from "react";
import Link from "next/link";

interface Report {
  slug: string;
  edition: string;
  date: string;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
}

interface Topic {
  id: string;
  name: string;
  description: string;
  reports: Report[];
}

export function TopicList({ topics }: { topics: Topic[] }) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="border-t border-border">
      {topics.map((topic) => {
        const isOpen = openIds.has(topic.id);
        const count = topic.reports.length;
        const countLabel =
          count === 0
            ? "Coming soon"
            : `${count} ${count === 1 ? "report" : "reports"}`;

        return (
          <div
            key={topic.id}
            id={topic.id}
            className="border-b border-border"
          >
            <button
              type="button"
              onClick={() => toggle(topic.id)}
              aria-expanded={isOpen}
              aria-controls={`${topic.id}-panel`}
              className="w-full text-left px-8 md:px-12 py-6 transition-colors hover:bg-muted/30 focus:outline-none"
            >
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)_auto] gap-y-3 gap-x-10 items-start">
                <div>
                  <p className="text-base md:text-[17px] font-heading font-semibold text-foreground leading-tight">
                    {topic.name}
                  </p>
                  <p className="mt-1.5 text-[11px] font-mono uppercase tracking-widest text-muted-foreground/70">
                    {countLabel}
                  </p>
                </div>
                <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed pt-0.5 md:max-w-[480px]">
                  {topic.description}
                </p>
                <span
                  aria-hidden="true"
                  className={`hidden md:inline-flex items-center justify-center size-7 text-muted-foreground/70 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M3 5L7 9L11 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </button>

            <div
              id={`${topic.id}-panel`}
              role="region"
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden min-h-0">
                <div className="px-8 md:px-12">
                  {count === 0 ? (
                    <ComingSoonInline />
                  ) : (
                    <ul className="flex flex-col">
                      {topic.reports.map((report) => (
                        <li key={report.slug}>
                          <ReportRow report={report} />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ReportRow({ report }: { report: Report }) {
  const meta = [
    report.edition,
    report.date,
    ...report.stats.map((s) => `${s.value} ${s.label.toLowerCase()}`),
  ].join("  ·  ");

  return (
    <Link
      href={`/reports/${report.slug}`}
      className="group grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 py-6 px-8 md:px-12 -mx-8 md:-mx-12 hover:bg-muted/30 transition-colors focus:outline-none"
    >
      <div className="min-w-0">
        <p className="text-sm md:text-[15px] font-heading font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
          {report.title}
        </p>
        <p className="mt-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground/70 truncate">
          {meta}
        </p>
      </div>
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center size-7 text-muted-foreground/50 group-hover:text-foreground transition-colors text-sm"
      >
        →
      </span>
    </Link>
  );
}

function ComingSoonInline() {
  return (
    <div className="py-6 -mx-8 md:-mx-12 px-8 md:px-12 flex items-center justify-between gap-6 flex-wrap">
      <p className="text-sm text-muted-foreground">
        First report in production. Subscribe to read it when it ships.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 text-sm text-foreground hover:text-foreground/70 transition-colors border-b border-foreground/30 hover:border-foreground/60 pb-1"
      >
        Request this report
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
