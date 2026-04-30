import type { Metadata } from "next";
import { ContactForm } from "./_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Shadow",
  description:
    "Book a demo or get in touch with the Shadow team. See how Shadow can power your communications workflows.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Shadow",
    description:
      "Book a demo or get in touch with the Shadow team. See how Shadow can power your communications workflows.",
    type: "website",
    siteName: "Shadow",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Shadow",
    description:
      "Book a demo or get in touch with the Shadow team. See how Shadow can power your communications workflows.",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col bg-card">
      <section className="flex items-start relative">
        <div className="relative z-10 w-full max-w-[1425px] mx-auto px-8 md:px-16 pb-24 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="font-serif font-medium text-[clamp(2rem,4vw,3.75rem)] text-foreground leading-[1.05] tracking-tight">
                Meet the team
              </h1>
              <p className="mt-6 text-[clamp(0.95rem,1.3vw,1.1rem)] text-muted-foreground leading-[1.7] max-w-md">
                If there&apos;s a specific workflow or use case you&apos;d like
                us to demo live on the call, leave the details in your message
                and we&apos;ll prepare a custom walkthrough for your team.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
