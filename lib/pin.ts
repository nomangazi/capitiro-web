import { absoluteUrl } from "./site";

/** Path of the 1000x1500 Pinterest pin image for a guide or calculator (see app/pin/[...slug]/route.tsx). */
export function pinImagePath(kind: "guides" | "calculators", slug: string): string {
  return `/pin/${kind}/${slug}`;
}

/**
 * Pinterest "Save" link. A plain URL, no Pinterest SDK or third-party script, so nothing loads
 * (and nothing is tracked) until the visitor chooses to click it.
 */
export function pinterestSaveUrl({ pagePath, imagePath, description }: { pagePath: string; imagePath: string; description: string }): string {
  const params = new URLSearchParams({
    url: absoluteUrl(pagePath),
    media: absoluteUrl(imagePath),
    description,
  });
  return `https://www.pinterest.com/pin/create/button/?${params.toString()}`;
}
