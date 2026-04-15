import type { Metadata } from "next";
import { Geist_Mono, Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "./_components/Nav";
import { Footer } from "./_components/Footer";
import { SiteRail } from "./_components/SiteRail";

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
  title: "Shadow | The Operating System for Communications Teams",
  description:
    "Shadow is the AI operating system for PR and communications teams. Research, strategy, content, media, and pipeline in one platform.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
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
              "@type": "Organization",
              name: "Shadow",
              url: "https://shadow.inc",
              logo: "https://shadow.inc/logo.svg",
              sameAs: ["https://www.linkedin.com/company/shadow-research"],
            }),
          }}
        />
        <Nav />
        <SiteRail>
          <main>{children}</main>
        </SiteRail>
        <Footer />
      </body>
    </html>
  );
}
