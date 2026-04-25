import Image from "next/image";
import Link from "next/link";
import { GlassSection } from "./GlassSection";

export function Footer() {
  return (
    <GlassSection>
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1360px] mx-auto px-8 md:px-16 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo2.svg"
                alt="Shadow"
                width={22}
                height={22}
                className="h-[22px] w-auto"
              />
              <span className="font-heading font-bold text-xl leading-none tracking-tight text-foreground">
                Shadow
              </span>
            </Link>
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
              Narrative intelligence and program execution powered by AI agents. Built for communications teams.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div className="flex flex-col gap-3">
              <span className="font-medium text-foreground text-xs tracking-wide uppercase">Product</span>
              <Link href="/narrative-intelligence" className="text-muted-foreground hover:text-foreground transition-colors">Narrative Intelligence</Link>
              <Link href="/program-execution" className="text-muted-foreground hover:text-foreground transition-colors">Program Execution</Link>
              <Link href="/ai-agents" className="text-muted-foreground hover:text-foreground transition-colors">AI Agents</Link>
              <Link href="/operate" className="text-muted-foreground hover:text-foreground transition-colors">Operate</Link>
              <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium text-foreground text-xs tracking-wide uppercase">Agents</span>
              <Link href="/researchers" className="text-muted-foreground hover:text-foreground transition-colors">Researchers</Link>
              <Link href="/analysts" className="text-muted-foreground hover:text-foreground transition-colors">Analysts</Link>
              <Link href="/strategists" className="text-muted-foreground hover:text-foreground transition-colors">Strategists</Link>
              <Link href="/planners" className="text-muted-foreground hover:text-foreground transition-colors">Planners</Link>
              <Link href="/writers" className="text-muted-foreground hover:text-foreground transition-colors">Writers</Link>
              <Link href="/reporters" className="text-muted-foreground hover:text-foreground transition-colors">Reporters</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium text-foreground text-xs tracking-wide uppercase">Company</span>
              <Link href="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link href="/reports" className="text-muted-foreground hover:text-foreground transition-colors">Reports</Link>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
              <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="font-medium text-foreground text-xs tracking-wide uppercase">Contact</span>
              <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Book a demo</a>
              <a href="mailto:hello@shadow.inc" className="text-muted-foreground hover:text-foreground transition-colors">hello@shadow.inc</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Shadow Inc. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built for communications teams.
          </p>
        </div>
      </div>
    </footer>
    </GlassSection>
  );
}
