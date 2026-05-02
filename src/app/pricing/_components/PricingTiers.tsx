"use client";

import { useState } from "react";

interface Tier {
  name: string;
  unit: string;
  monthly?: number;
  customPrice?: string;
  pricingNote?: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  emphasis?: boolean;
  hideToggle?: boolean;
  checkColor: string;
  bgImage: string;
}

const TIERS: Tier[] = [
  {
    name: "In-house",
    unit: "/ month",
    monthly: 1000,
    checkColor: "#7489A3",
    bgImage: "/beachscape.png",
    description:
      "For in-house communications teams running a single brand, with full access to every capability in Shadow.",
    features: [
      "One client workspace",
      "Unlimited users",
      "Full platform access",
      "AI agents and automation",
      "Custom market reports",
      "Dedicated support",
      "Managed services",
    ],
    cta: { label: "Get started", href: "/contact" },
  },
  {
    name: "Agency",
    unit: "/ client / month",
    monthly: 750,
    checkColor: "#CC764F",
    bgImage: "/sandscape.png",
    description:
      "For agencies managing multiple clients. Per-client pricing decreases as you scale.",
    features: [
      "Unlimited client workspaces",
      "Unlimited users",
      "Full platform access per client",
      "Consolidated billing",
      "Dedicated support",
      "Fully managed",
      "Custom solutions",
    ],
    cta: { label: "Get started", href: "/contact" },
    emphasis: true,
  },
  {
    name: "Custom market reports",
    unit: "/ report",
    customPrice: "$50",
    pricingNote: "Pay as you go",
    checkColor: "#977BA1",
    bgImage: "/shorescape.png",
    description:
      "Daily, weekly, monthly, and on-demand narrative landscapes, competitive maps, and category reports. Custom fit and delivered to any channel.",
    features: [
      "Custom scope per report",
      "Narrative graph + agent analysis",
      "Branded final deliverable",
      "Source-cited methodology",
    ],
    cta: { label: "Talk to us", href: "/contact" },
    hideToggle: true,
  },
];

const ANNUAL_DISCOUNT = 0.15;

function BillingToggle({
  annual,
  onChange,
}: {
  annual: boolean;
  onChange: (annual: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-center gap-6">
      {[
        { value: false, label: "Monthly" },
        { value: true, label: "Annual" },
      ].map((option) => {
        const active = annual === option.value;
        return (
          <button
            key={option.label}
            type="button"
            onClick={() => onChange(option.value)}
            className={`text-sm pb-1 border-b transition-colors ${
              active
                ? "text-foreground border-foreground"
                : "text-muted-foreground border-transparent hover:text-foreground"
            }`}
          >
            {option.label}
          </button>
        );
      })}
      <span className="text-[10px] font-mono text-muted-foreground/70 tracking-widest uppercase">
        Save 15% annually
      </span>
    </div>
  );
}

export function PricingTiers() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="flex flex-col gap-10">
      <BillingToggle annual={annual} onChange={setAnnual} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-stretch">
        {TIERS.map((tier) => {
          const showAnnual = annual && !tier.hideToggle;
          const monthlyPrice = tier.monthly ?? 0;
          const numericPrice = showAnnual
            ? Math.round(monthlyPrice * (1 - ANNUAL_DISCOUNT))
            : monthlyPrice;
          const priceLabel = tier.customPrice ?? `$${numericPrice}`;

          return (
            <div key={tier.name} className="relative h-full">
              {/* Marble halo — extends outside the glass card */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 lg:-inset-3 rounded-2xl overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-[0.7]"
                  style={{ backgroundImage: `url('${tier.bgImage}')` }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, color-mix(in srgb, var(--card) 50%, transparent) 0.4px, transparent 0.8px)",
                    backgroundSize: "5px 5px",
                  }}
                />
              </div>
              {/* Glass card */}
              <div
                className="relative h-full rounded-2xl overflow-hidden backdrop-blur-3xl backdrop-saturate-150 bg-foreground/[0.55] isolate"
                style={{
                  boxShadow: [
                    "inset 0 1px 0 0 rgba(255,255,255,0.5)",
                    "inset 0 0 0 1px rgba(255,255,255,0.18)",
                    "inset 0 -1px 0 0 rgba(43,32,22,0.08)",
                    "0 1px 2px 0 rgba(43,32,22,0.04)",
                    "0 8px 24px -8px rgba(43,32,22,0.18)",
                    "0 24px 60px -24px rgba(43,32,22,0.22)",
                  ].join(", "),
                }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl z-10"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255,255,255,0.18) 0%, transparent 100%)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px z-10"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.65) 50%, transparent 100%)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px z-10"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
                  }}
                />
                <div className="relative flex flex-col h-full p-8">
                  <h3 className="font-heading text-base font-semibold text-background">
                    {tier.name}
                  </h3>

                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="font-serif text-3xl md:text-4xl font-medium text-background tracking-tight tabular-nums">
                      {priceLabel}
                    </span>
                    <span className="text-xs text-background/65">
                      {tier.unit}
                    </span>
                  </div>
                  {tier.pricingNote && (
                    <p className="mt-1.5 text-[10px] font-mono text-background/55 uppercase tracking-widest">
                      {tier.pricingNote}
                    </p>
                  )}
                  {showAnnual && !tier.pricingNote && (
                    <p className="mt-1.5 text-[10px] font-mono text-background/55 uppercase tracking-widest">
                      Billed annually
                    </p>
                  )}

                  <p className="mt-4 text-sm text-background/65 leading-relaxed">
                    {tier.description}
                  </p>

                  <ul className="mt-6 flex flex-col">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 py-2.5 border-b border-background/15 last:border-b-0"
                      >
                        <span
                          aria-hidden="true"
                          className="inline-flex items-center justify-center shrink-0"
                          style={{
                            width: 12,
                            height: 12,
                            color: tier.checkColor,
                          }}
                        >
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.5 6.3L5 8.5L9.5 3.5"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span className="text-[13px] text-background/85">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <a
                      href={tier.cta.href}
                      className={`w-full inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-[12px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                        tier.emphasis
                          ? "bg-background text-foreground hover:bg-background/90"
                          : "border border-background/30 text-background hover:bg-background/10"
                      }`}
                    >
                      {tier.cta.label}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
