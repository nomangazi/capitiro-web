import { absoluteUrl } from "./site";
import { calculatorPath, type CalculatorMeta } from "./calculators";

/** Path of the chrome-free, iframe-able version of a calculator. */
export function embedPath(slug: string): string {
  return `/embed/${slug}`;
}

/** True for /embed/<slug> widget routes (not the /embed directory page itself). */
export function isEmbedWidgetPath(pathname: string | null): boolean {
  return !!pathname && pathname.startsWith("/embed/");
}

/** Suggested iframe height in px. Taller calculators (more inputs) get more room. */
const EMBED_HEIGHTS: Record<string, number> = {
  mortgage: 1400,
  "home-affordability": 1500,
  "loan-amortization": 1300,
  "credit-card-payoff": 1200,
  retirement: 1300,
};

export function embedHeight(slug: string): number {
  return EMBED_HEIGHTS[slug] ?? 1150;
}

/** Copy-paste HTML: the iframe plus a plain credit link, so the backlink survives even if iframes are blocked. */
export function embedSnippet(calc: CalculatorMeta): string {
  return [
    `<iframe src="${absoluteUrl(embedPath(calc.slug))}" title="${calc.title} by Capitiro" width="100%" height="${embedHeight(calc.slug)}" style="border:1px solid #e5e7eb;border-radius:12px;max-width:800px" loading="lazy"></iframe>`,
    `<p style="font-size:13px">${calc.title} by <a href="${absoluteUrl(calculatorPath(calc.slug))}">Capitiro</a></p>`,
  ].join("\n");
}
