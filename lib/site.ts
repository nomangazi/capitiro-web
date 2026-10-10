function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  // Vercel exposes the production domain at build time.
  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) return `https://${vercelProd}`;
  return "http://localhost:3000";
}

export const siteConfig = {
  name: "Capitiro",
  tagline: "Smart Financial Projections",
  description:
    "Free, accurate calculators for mortgages, loans, compound interest, retirement, savings and debt payoff. Private by design: everything runs in your browser.",
  url: resolveSiteUrl(),
  locale: "en_US",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contact@capitiro.com",
  /** Date the legal pages were last reviewed. Update whenever their content changes. */
  legalUpdated: "2026-10-10",
  /** Microsoft Clarity project id (heatmaps + session recordings). Public value; override with NEXT_PUBLIC_CLARITY_ID, set to "" to disable. */
  clarityId: process.env.NEXT_PUBLIC_CLARITY_ID ?? "yvn44sv5s0",
  adsense: {
    /** e.g. "ca-pub-1234567890123456". Ads and ads.txt are disabled while this is empty. */
    client: process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "",
    /** Display ad unit slot id used for in-content placements. Optional: Auto ads work without it. */
    inContentSlot: process.env.NEXT_PUBLIC_ADSENSE_SLOT_INCONTENT ?? "",
  },
} as const;

export function absoluteUrl(path = "/"): string {
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}
