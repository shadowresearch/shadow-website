"use client";

import { useRef, useState } from "react";

export function SubscribeForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const timestampRef = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      email: formData.get("email") as string,
      kind: "newsletter",
      _hp_field: formData.get("_hp_field") as string,
      _timestamp: timestampRef.current,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-card ring-1 ring-foreground/10 p-8 flex flex-col items-center justify-center text-center">
        <div className="size-12 rounded-full bg-muted flex items-center justify-center mb-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 10.5L8.5 14L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground"
            />
          </svg>
        </div>
        <h3 className="font-heading font-semibold text-lg text-foreground">
          You&apos;re subscribed
        </h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-xs">
          The next weekly report will land in your inbox.
        </p>
      </div>
    );
  }

  return (
    <div
      id="subscribe"
      className="rounded-2xl bg-card ring-1 ring-foreground/10 p-6 md:p-7"
    >
      <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
        Weekly reports
      </p>
      <h3 className="mt-2 font-serif text-[clamp(1.25rem,1.6vw,1.5rem)] text-foreground leading-tight tracking-tight">
        Get the briefing in your inbox.
      </h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        A weekly read on the narratives moving across media, search, social, and AI.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <div className="absolute opacity-0 -z-10" aria-hidden="true" tabIndex={-1}>
          <input type="text" name="_hp_field" autoComplete="off" tabIndex={-1} />
        </div>

        <label htmlFor="subscribe-email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="subscribe-email"
          name="email"
          required
          className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-foreground transition-colors"
          placeholder="you@company.com"
          disabled={status === "submitting"}
        />

        {status === "error" && (
          <p className="text-sm text-red-600">{errorMessage}</p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2.5 text-xs font-semibold text-background transition-all disabled:opacity-50"
        >
          {status === "submitting" ? "Subscribing..." : "Subscribe"}
        </button>

        <p className="text-[11px] text-muted-foreground/70 leading-relaxed">
          One email a week. No spam. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
}
