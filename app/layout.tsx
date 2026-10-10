import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/site/JsonLd";
import { websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – Free Financial Calculators`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: { siteName: siteConfig.name, locale: siteConfig.locale, type: "website" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  // Lets AdSense verify site ownership during the approval review.
  other: siteConfig.adsense.client ? { "google-adsense-account": siteConfig.adsense.client } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background font-sans">
        <JsonLd data={websiteJsonLd()} />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        {/* Cookieless page-view analytics (Vercel Web Analytics); no consent banner required. */}
        <Analytics />
        {siteConfig.adsense.client && (
          // Loads AdSense (including Auto ads and Google's consent message for EEA/UK visitors).
          <Script
            id="adsense"
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsense.client}`}
          />
        )}
      </body>
    </html>
  );
}
