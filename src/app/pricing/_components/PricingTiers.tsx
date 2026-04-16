"use client";

import { useState } from "react";

function BillingToggle({
  annual,
  onToggle,
  label,
}: {
  annual: boolean;
  onToggle: () => void;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground">Monthly</span>
      <button
        type="button"
        onClick={onToggle}
        className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors ${
          annual ? "bg-primary" : "bg-border"
        }`}
        aria-label={`Toggle annual billing for ${label}`}
      >
        <span
          className={`pointer-events-none inline-block size-4 mt-0.5 rounded-full bg-background shadow-sm transition-transform ${
            annual ? "translate-x-[18px]" : "translate-x-0.5"
          }`}
        />
      </button>
      <span className="text-sm text-muted-foreground">Annual</span>
    </div>
  );
}

export function PricingTiers() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="border-b border-border">
      <div className="grid md:grid-cols-2">
        {/* In-house */}
        <div className="flex flex-col gap-4 px-6 md:px-16 py-16 md:border-r border-b md:border-b-0 border-border">
          <h2 className="font-heading text-3xl font-semibold text-foreground">
            In-house
          </h2>
          <p className="text-muted-foreground">
            <span className="text-2xl font-semibold text-foreground">
              {annual ? "$650" : "$750"}
            </span>
            <span className="text-sm">
              {annual ? "/month, billed annually" : "/month"}
            </span>
            {annual && (
              <span className="text-sm text-primary font-medium">
                {" "}&middot; Save 15%
              </span>
            )}
          </p>

          <BillingToggle
            annual={annual}
            onToggle={() => setAnnual(!annual)}
            label="In-house"
          />

          <p className="text-base text-muted-foreground leading-relaxed">
            For in-house communications teams managing a single brand, with full
            access to every capability in Shadow.
          </p>

          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1.5 size-1.5 rounded-full bg-current shrink-0" />
              One client workspace
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1.5 size-1.5 rounded-full bg-current shrink-0" />
              Unlimited users
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1.5 size-1.5 rounded-full bg-current shrink-0" />
              Full platform access
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1.5 size-1.5 rounded-full bg-current shrink-0" />
              AI agents and automation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1.5 size-1.5 rounded-full bg-current shrink-0" />
              Dedicated support
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1.5 size-1.5 rounded-full bg-current shrink-0" />
              Managed services
            </li>
          </ul>

          <a
            href="/contact"
            className="mt-4 self-start inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-xs font-semibold text-background transition-all"
          >
            Get started
          </a>
        </div>

        {/* Agencies */}
        <div className="flex flex-col gap-4 px-6 md:px-16 py-16">
          <h2 className="font-heading text-3xl font-semibold text-foreground">
            Agencies
          </h2>
          <p className="text-muted-foreground">
            <span className="text-2xl font-semibold text-foreground">
              {annual ? "$650" : "$750"}
            </span>
            <span className="text-sm">
              {annual ? "/client/month, billed annually" : "/client/month"}
            </span>
            {annual && (
              <span className="text-sm text-primary font-medium">
                {" "}&middot; Save 15%
              </span>
            )}
          </p>

          <BillingToggle
            annual={annual}
            onToggle={() => setAnnual(!annual)}
            label="Agencies"
          />

          <p className="text-base text-muted-foreground leading-relaxed">
            For agencies managing multiple clients. Per-client pricing decreases
            as you scale.
          </p>

          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1.5 size-1.5 rounded-full bg-current shrink-0" />
              Unlimited users
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1.5 size-1.5 rounded-full bg-current shrink-0" />
              Full platform access per client
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1.5 size-1.5 rounded-full bg-current shrink-0" />
              Consolidated billing
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1.5 size-1.5 rounded-full bg-current shrink-0" />
              Dedicated support
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1.5 size-1.5 rounded-full bg-current shrink-0" />
              Managed services
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1.5 size-1.5 rounded-full bg-current shrink-0" />
              Custom solutions
            </li>
          </ul>

          <a
            href="/contact"
            className="mt-4 self-start inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-xs font-semibold text-background transition-all"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}
