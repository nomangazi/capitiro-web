import { siteConfig } from "@/lib/site";
import { ogSize, renderOgCard } from "@/lib/og-card";

export const alt = `${siteConfig.name} – Free financial calculators`;
export const size = ogSize;
export const contentType = "image/png";

/** Default social share image, used by every page that doesn't define its own. Crop-safe (centred). */
export default function OpenGraphImage() {
  return renderOgCard({ label: "Accurate · Private · Free", title: "Free financial calculators" });
}
