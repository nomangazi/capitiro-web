import { calculators } from "@/lib/calculators";
import { guides } from "@/lib/guides";
import { renderPinCard } from "@/lib/og-card";

export const dynamic = "force-static";
export const dynamicParams = false;

/**
 * Pinterest pin images (1000x1500): /pin/calculators/<slug> and /pin/guides/<slug>.
 * Read straight from the registries, so every new calculator or guide gets a pin automatically.
 * Not in the sitemap on purpose: these are image assets, not pages.
 */
export function generateStaticParams() {
  return [
    ...calculators.map((c) => ({ slug: ["calculators", c.slug] })),
    ...guides.map((g) => ({ slug: ["guides", g.slug] })),
  ];
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const [kind, slug] = (await params).slug;
  const calculator = kind === "calculators" ? calculators.find((c) => c.slug === slug) : undefined;
  const guide = kind === "guides" ? guides.find((g) => g.slug === slug) : undefined;
  if (calculator) return renderPinCard({ label: "Free calculator", title: calculator.title, benefit: calculator.summary });
  if (guide) return renderPinCard({ label: "Guide", title: guide.title, benefit: guide.description });
  return new Response("Not found", { status: 404 });
}
