"use client";

import { useEffect, useRef, useState } from "react";

interface SubscribeModalProps {
  open: boolean;
  onClose: () => void;
}

export function SubscribeModal({ open, onClose }: SubscribeModalProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const timestampRef = useRef(Date.now());
  const emailRef = useRef<HTMLInputElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    timestampRef.current = Date.now();
    setStatus("idle");
    setErrorMessage("");

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const focusTimer = setTimeout(() => {
      emailRef.current?.focus();
    }, 50);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

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

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="subscribe-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-md rounded-2xl bg-card ring-1 ring-foreground/10 shadow-[0_24px_64px_-24px_rgba(0,0,0,0.35)] p-6 md:p-8 animate-[subscribeIn_180ms_ease-out]">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 size-8 inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M4 4L12 12M12 4L4 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-6 text-center">
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
            <h3
              id="subscribe-modal-title"
              className="font-heading font-semibold text-lg text-foreground"
            >
              You&apos;re subscribed
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              The next weekly report will land in your inbox.
            </p>
          </div>
        ) : (
          <>
            <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Weekly reports
            </p>
            <h3
              id="subscribe-modal-title"
              className="mt-2 font-serif text-[clamp(1.25rem,1.6vw,1.5rem)] text-foreground leading-tight tracking-tight"
            >
              Get the briefing in your inbox.
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              A weekly read on the narratives moving across media, search, social, and AI.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3">
              <div className="absolute opacity-0 -z-10" aria-hidden="true" tabIndex={-1}>
                <input type="text" name="_hp_field" autoComplete="off" tabIndex={-1} />
              </div>

              <label htmlFor="modal-subscribe-email" className="sr-only">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                id="modal-subscribe-email"
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
                One email a week. Unsubscribe anytime.
              </p>
            </form>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes subscribeIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
