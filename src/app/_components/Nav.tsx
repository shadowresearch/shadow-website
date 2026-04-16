"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/intelligence", label: "Intelligence" },
  { href: "/media", label: "Media" },
  { href: "/content", label: "Content" },
  { href: "/pipeline", label: "Pipeline" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1120px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.svg" alt="Shadow" width={20} height={34} />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
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
