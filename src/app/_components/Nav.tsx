"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const productLinks: { href: string; label: string; description: string }[] = [
  {
    href: "/narrative-intelligence",
    label: "Narrative Intelligence",
    description: "Read every landscape in real time",
  },
  {
    href: "/program-execution",
    label: "Program Execution",
    description: "Turn insight into shippable work",
  },
  {
    href: "/ai-agents",
    label: "AI Agents",
    description: "Run a specialized agent team",
  },
  {
    href: "/operate",
    label: "Operate",
    description: "Run the agency end to end",
  },
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
  const [productOpen, setProductOpen] = useState(false);
  const productCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (productCloseTimer.current) clearTimeout(productCloseTimer.current);
    };
  }, []);

  const openProduct = () => {
    if (productCloseTimer.current) {
      clearTimeout(productCloseTimer.current);
      productCloseTimer.current = null;
    }
    setProductOpen(true);
  };

  const scheduleCloseProduct = () => {
    if (productCloseTimer.current) clearTimeout(productCloseTimer.current);
    productCloseTimer.current = setTimeout(() => setProductOpen(false), 120);
  };

  const productActive = productLinks.some((l) => l.href === pathname);

  return (
    <nav className="sticky top-0 z-50 bg-card">
      <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-4 flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2.5 shrink-0 mr-auto">
          <Image
            src="/logo2.svg"
            alt="Shadow"
            width={16}
            height={26}
            priority
            className="block h-[26px] w-[16px] shrink-0"
          />
          <span
            aria-hidden={scrolled ? "true" : "false"}
            className={`font-heading font-bold text-2xl leading-none text-foreground tracking-tight overflow-hidden inline-block transition-all duration-300 ease-out ${
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
          <div
            className="relative"
            onMouseEnter={openProduct}
            onMouseLeave={scheduleCloseProduct}
            onFocus={openProduct}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                scheduleCloseProduct();
              }
            }}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={productOpen}
              onClick={() => setProductOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm transition-colors ${
                productActive || productOpen
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Product
              <svg
                aria-hidden="true"
                viewBox="0 0 12 12"
                className={`size-3 transition-transform ${
                  productOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Hover bridge to prevent flicker */}
            <div
              aria-hidden="true"
              className={`absolute left-0 right-0 top-full h-3 ${
                productOpen ? "" : "pointer-events-none"
              }`}
            />

            <div
              role="menu"
              className={`absolute left-1/2 -translate-x-1/2 top-[calc(100%+0.5rem)] w-[260px] rounded-2xl bg-card ring-1 ring-foreground/10 shadow-[0_18px_48px_-20px_rgba(0,0,0,0.25)] overflow-hidden transition-all duration-150 origin-top ${
                productOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-[0.98] pointer-events-none"
              }`}
            >
              <div className="flex flex-col gap-1 p-2">
                {productLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
                      onClick={() => setProductOpen(false)}
                      className={`block rounded-lg px-4 py-3 transition-colors ${
                        isActive ? "bg-muted/30" : "hover:bg-foreground/[0.03]"
                      }`}
                    >
                      <p
                        className={`font-heading text-[13px] leading-[1.3] text-foreground ${
                          isActive ? "font-semibold" : "font-medium"
                        }`}
                      >
                        {link.label}
                      </p>
                      <p className="mt-1 text-[12px] text-muted-foreground leading-snug">
                        {link.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

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
            <p className="pt-2 pb-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/70">
              Product
            </p>
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
            <p className="pt-4 pb-1 text-[10px] font-mono uppercase tracking-widest text-muted-foreground/70">
              Company
            </p>
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
