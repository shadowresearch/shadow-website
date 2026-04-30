import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Enterprise | Shadow",
  description:
    "Shadow gives enterprise comms leaders narrative intelligence across every region, brand, and executive. Operated by six agents, always on.",
  alternates: {
    canonical: "/for-enterprise",
  },
  openGraph: {
    title: "For Enterprise | Shadow",
    description:
      "Shadow gives enterprise comms leaders narrative intelligence across every region, brand, and executive. Operated by six agents, always on.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Enterprise | Shadow",
    description:
      "Shadow gives enterprise comms leaders narrative intelligence across every region, brand, and executive. Operated by six agents, always on.",
  },
};

const tracksAtScale = [
  {
    title: "Regional media coverage",
    description:
      "Shadow monitors Tier 1 and trade media across North America, EMEA, APAC, and LATAM in native language. Regional narratives get mapped to the global frame, so a story breaking in Germany is visible to the New York desk the same day.",
  },
  {
    title: "Category and narrative shifts",
    description:
      "Shadow Analysts track how each category your company operates in is being described, by whom, and how the frames are evolving. Early shifts get flagged before they show up in mainstream coverage.",
  },
  {
    title: "Executive visibility",
    description:
      "CEO, CFO, General Counsel, division presidents, and regional leaders all get individual visibility tracking. Share of voice, tone, narrative themes, and AI citation profile per executive.",
  },
  {
    title: "Competitor positioning",
    description:
      "Shadow maps every major competitor's positioning, messaging, executive moves, and earned media trajectory. When a competitor reframes a category, you see it before the analysts publish on it.",
  },
  {
    title: "AI citation patterns",
    description:
      "Structured queries across ChatGPT, Perplexity, Google AI Overview, and Gemini on the questions that define your industry. Shadow tracks which sources drive AI citations and what content closes the gaps.",
  },
  {
    title: "Risk and sensitivity mapping",
    description:
      "Shadow maintains a live layer of narrative pressure points (regulatory, reputational, geopolitical) and early-warning signals, so the crisis team is already briefed when a moment arrives.",
  },
];

const integration = [
  {
    title: "SSO and identity",
    description:
      "SAML and OIDC single sign-on via Okta, Azure AD, Google Workspace, and Ping. SCIM 2.0 provisioning for automated user lifecycle. MFA enforced at the identity provider level.",
  },
  {
    title: "Role-based access control",
    description:
      "Granular permissions across brands, regions, and executive profiles. Separate roles for comms analysts, regional leads, agency partners, and executive viewers. Audit logs for every access event.",
  },
  {
    title: "White-glove onboarding",
    description:
      "A dedicated Shadow deployment team handles configuration, data migration, historical backfill, agent tuning, and user training. Typical enterprise deployments reach full production within 45 days.",
  },
  {
    title: "Runs alongside legacy vendors",
    description:
      "Shadow works in parallel with Meltwater, Cision, Muck Rack, Brandwatch, and Sprinklr during transition. No forced switchover. Most enterprise customers consolidate two to four vendors into Shadow within the first year.",
  },
];

const governance = [
  {
    title: "SOC 2 Type II and ISO 27001",
    description:
      "Annual third-party audits across security, availability, and confidentiality controls. Full documentation available under NDA during procurement review.",
  },
  {
    title: "Data residency",
    description:
      "Choose US or EU data residency at deployment. All customer data, including ingested coverage and generated outputs, remains in the chosen region. GDPR and UK GDPR compliant by default.",
  },
  {
    title: "No training on your data",
    description:
      "Shadow's models are never trained on customer content. Briefs, drafts, messaging, and internal intelligence remain private to your tenant. Contractual guarantees available.",
  },
  {
    title: "Audit, export, and retention controls",
    description:
      "Every action logged. Full data export on request. Configurable retention policies per brand or per region to match internal records governance and regulatory requirements.",
  },
];

const faqs = [
  {
    q: "How does Shadow price at enterprise scale?",
    a: "Enterprise pricing is portfolio-based: brands in scope, regions covered, executives tracked, and AI answer coverage depth. No per-seat fees. Global comms functions typically see total vendor spend drop as Shadow replaces two to four legacy tools within the first year.",
  },
  {
    q: "Can Shadow handle regulated industries like financial services or healthcare?",
    a: "Yes. Shadow has customers in regulated financial services, life sciences, and critical infrastructure. Dedicated tenant options are available, with configurable data residency, retention, and audit controls to meet sector requirements including FINRA, HIPAA, and NIS2.",
  },
  {
    q: "How does Shadow work alongside our existing PR agency network?",
    a: "Most enterprise customers run Shadow as central infrastructure and give regional or specialty agencies scoped access. The CCO's team sees the full portfolio. Agencies see their account. The result is one source of narrative truth across a distributed agency roster.",
  },
  {
    q: "What does a typical enterprise deployment look like?",
    a: "Forty-five days from contract to full production. Week one: scoping and SSO. Weeks two and three: data ingestion and agent tuning. Weeks four and five: role configuration and agency access. Weeks six and seven: training and live deployment across the global team.",
  },
];

export default function ForEnterprisePage() {
  return (
    <div className="flex flex-col bg-card">
      {/* Hero */}
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-16 pt-24">
          <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight max-w-4xl">
            Narrative intelligence, at enterprise scale.
          </h1>
          <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-xl">
            Shadow runs across every brand, region, and executive in your
            portfolio. One platform that reads the full narrative landscape
            and surfaces the positions, risks, and opportunities that matter.
          </p>
          <div className="mt-10 flex flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Talk to enterprise
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Enterprise case studies
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise problem */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight max-w-xl">
                  Four surfaces, no unified view.
                </h2>
              </div>
              <div className="flex flex-col gap-5 text-sm text-muted-foreground leading-relaxed">
                <p className="text-sm italic text-foreground/80">
                  Shadow is the enterprise narrative intelligence platform for
                  global communications leaders. It unifies the four surfaces
                  that define modern reputation (earned coverage, search
                  results, AI answer engines, and social) into one live
                  landscape, operated by six agents across every brand, region,
                  and executive in the portfolio.
                </p>
                <p>
                  Enterprise comms has fractured across four surfaces. Earned
                  coverage still matters, and the Chief Communications Officer
                  is graded on it. But search results increasingly define what
                  buyers, candidates, and regulators believe. AI answer engines
                  (ChatGPT, Perplexity, Google AI Overview, Gemini) are
                  rewriting the encyclopedia of each industry in real time. And
                  social continues to move faster than any central function can
                  track.
                </p>
                <p>
                  Most Fortune 500 comms functions cover these surfaces with
                  different vendors, different regional teams, and different
                  reporting cadences. The CEO asks how the company is being
                  described and gets four partial answers from four different
                  sources. Shadow collapses that fragmentation. One platform,
                  six agents, unified landscape, governed access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks at scale */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Where does Shadow run inside a global comms function?
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Shadow runs continuously across the full portfolio: every
                  region, every operating brand, every named executive. Six
                  agents (Researchers, Analysts, Strategists, Planners,
                  Writers, Reporters) work against the same underlying graph,
                  so a shift in one market surfaces instantly across the
                  others.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                {tracksAtScale.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 order-2 lg:order-1">
                {integration.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  How does Shadow fit into an enterprise tech stack?
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Shadow deploys with enterprise-grade controls: SSO,
                  role-based access, SCIM provisioning, and data residency
                  options. It runs alongside Meltwater, Cision, Muck Rack, and
                  Brandwatch during transition, with consolidation typically
                  completed within 12 months of deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
                  Does Shadow meet enterprise security and compliance requirements?
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  Shadow is built for regulated industries. SOC 2 Type II,
                  GDPR-compliant, with data residency options in the United
                  States and the European Union. Customer data is never used
                  to train Shadow&apos;s models. Dedicated tenant options
                  available for financial services, healthcare, and public
                  sector.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10">
                {governance.map((item) => (
                  <div key={item.title}>
                    <p className="text-sm font-medium text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-16 md:py-24">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] text-foreground leading-[1.08] tracking-tight">
              Enterprise questions, answered.
            </h2>
            <div className="mt-10 space-y-10 max-w-3xl">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {f.q}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                    {f.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 md:px-8 pb-12 md:pb-20">
        <div className="rounded-3xl bg-card overflow-hidden">
          <div className="max-w-[1425px] mx-auto px-8 md:px-16 py-24 md:py-32">
            <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-foreground leading-[1.04] tracking-tight max-w-2xl">
              Bring your portfolio. We will map it.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-md">
              Send us your brands, regions, and executives. We will deliver
              the baseline landscape, risk map, and position ranking before
              the procurement conversation begins.
            </p>
            <div className="mt-10 flex flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-[13px] font-medium text-background transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Talk to enterprise
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-[13px] font-medium text-foreground hover:bg-muted/40 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
