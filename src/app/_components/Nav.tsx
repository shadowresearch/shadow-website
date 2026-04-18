"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const agentLinks = [
  { href: "/intelligence", label: "Intelligence Agents" },
  { href: "/media", label: "Media Agents" },
  { href: "/content", label: "Content Agents" },
  { href: "/pipeline", label: "Pipeline Agents" },
];

const navLinks = [
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/reports", label: "Reports" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [agentsOpen, setAgentsOpen] = useState(false);
  const pathname = usePathname();

  const isAgentPage = agentLinks.some((l) => pathname === l.href);

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1120px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.svg" alt="Shadow" width={20} height={34} />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {/* Agents dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAgentsOpen(true)}
            onMouseLeave={() => setAgentsOpen(false)}
          >
            <button
              type="button"
              className={`text-sm transition-colors flex items-center gap-1 ${
                isAgentPage
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Agents
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className={`transition-transform ${agentsOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {agentsOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-background border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                  {agentLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        pathname === link.href
                          ? "text-foreground font-medium bg-muted/30"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/20"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-foreground px-3.5 py-1.5 text-xs font-semibold text-background transition-all shrink-0"
          >
            Book a demo
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center size-8 gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-px bg-foreground transition-all ${open ? "rotate-45 translate-y-1" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-foreground transition-all ${open ? "-rotate-45 -translate-y-1" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col px-6 py-4">
            <span className="py-2 text-xs font-medium text-muted-foreground tracking-wide uppercase">
              Agents
            </span>
            {agentLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 pl-3 text-sm border-b border-border transition-colors ${
                  pathname === link.href ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-sm border-b border-border transition-colors ${
                  pathname === link.href ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
