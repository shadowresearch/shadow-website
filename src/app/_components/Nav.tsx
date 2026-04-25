"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const productLinks = [
  { href: "/narrative-intelligence", label: "Narrative Intelligence" },
  { href: "/program-execution", label: "Program Execution" },
  { href: "/ai-agents", label: "AI Agents" },
  { href: "/operate", label: "Operate" },
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-card">
      <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/logo2.svg"
            alt="Shadow"
            width={22}
            height={22}
            className="h-[22px] w-auto"
          />
          <span
            aria-hidden={scrolled ? "true" : "false"}
            className={`font-heading font-bold text-xl leading-none text-foreground tracking-tight overflow-hidden inline-block transition-all duration-300 ease-out ${
              scrolled
                ? "opacity-0 max-w-0 -ml-3"
                : "opacity-100 max-w-[200px] ml-0"
            }`}
          >
            Shadow
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {productLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
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
            {productLinks.map((link) => (
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
