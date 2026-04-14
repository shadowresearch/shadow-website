import type { Metadata } from "next";
import { Baskervville, Geist_Mono, Raleway } from "next/font/google";
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

const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Shadow — AI Infrastructure for PR",
  description:
    "AI-powered operating system for PR agencies. Automates research, content creation, media tracking, and communications workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${delight.variable} ${geistMono.variable} ${raleway.variable} ${baskervville.variable} antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
