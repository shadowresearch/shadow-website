import type { Metadata } from "next";
import { Geist_Mono, Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "./_components/Nav";
import { Footer } from "./_components/Footer";

const delight = localFont({
  src: [
    {
      path: "../../public/fonts/delight/Delight-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/delight/Delight-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/delight/Delight-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/delight/Delight-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/delight/Delight-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-delight",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL("https://shadow.inc"),
  title: {
    default:
      "Shadow | The Narrative Intelligence Platform for Communications",
    template: "%s | Shadow",
  },
  description:
    "Shadow is a narrative intelligence platform built on real-time data across media, search, social, and AI. AI agents identify the positions you can own and help run the programs that take them.",
  applicationName: "Shadow",
  keywords: [
    "narrative intelligence",
    "narrative intelligence platform",
    "narrative graph",
    "communications platform",
    "AI agents for communications",
    "program execution",
    "media intelligence",
    "GEO",
    "AI visibility",
  ],
  authors: [{ name: "Shadow" }],
  creator: "Shadow",
  publisher: "Shadow",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo2.svg",
    apple: "/logo2.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Shadow",
    title: "Shadow | The Narrative Intelligence Platform for Communications",
    description:
      "A narrative intelligence platform built on real-time data across media, search, social, and AI. AI agents identify the positions you can own and help run the programs that take them.",
    url: "https://shadow.inc",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shadow | The Narrative Intelligence Platform for Communications",
    description:
      "Narrative intelligence and program execution for communications, powered by AI agents.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${delight.variable} ${geistMono.variable} ${raleway.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://shadow.inc/#organization",
                  name: "Shadow",
                  alternateName: ["Shadow Inc.", "shadow.inc"],
                  url: "https://shadow.inc",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://shadow.inc/logo2.svg",
                  },
                  description:
                    "Shadow is a narrative intelligence platform built on real-time data across media, search, social, and AI. AI agents identify the positions you can own and help run the programs that take them.",
                  founder: {
                    "@type": "Person",
                    name: "Jessen Gibbs",
                    jobTitle: "Founder & CEO",
                    worksFor: { "@id": "https://shadow.inc/#organization" },
                  },
                  sameAs: [
                    "https://www.linkedin.com/company/shadow-research",
                  ],
                  location: [
                    { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Vancouver", addressCountry: "CA" } },
                    { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Toronto", addressCountry: "CA" } },
                    { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" } },
                    { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY", addressCountry: "US" } },
                    { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "San Francisco", addressRegion: "CA", addressCountry: "US" } },
                  ],
                  brand: {
                    "@type": "Brand",
                    name: "Shadow",
                    slogan:
                      "Narrative intelligence and program execution powered by AI agents.",
                  },
                  knowsAbout: [
                    "narrative intelligence",
                    "narrative graph",
                    "program execution",
                    "AI agents for communications",
                    "media intelligence",
                    "generative engine optimization",
                    "AI visibility",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://shadow.inc/#website",
                  url: "https://shadow.inc",
                  name: "Shadow",
                  publisher: { "@id": "https://shadow.inc/#organization" },
                  inLanguage: "en-US",
                },
                {
                  "@type": "DefinedTerm",
                  "@id": "https://shadow.inc/narrative-intelligence#term",
                  name: "Narrative intelligence",
                  description:
                    "The practice of tracking how stories form, move, and resolve across media, search, social, and AI to identify which positions are available to own.",
                  inDefinedTermSet: {
                    "@type": "DefinedTermSet",
                    name: "Communications and AI",
                  },
                  url: "https://shadow.inc/narrative-intelligence",
                },
              ],
            }),
          }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
