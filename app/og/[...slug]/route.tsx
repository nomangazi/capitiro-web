import { calculators } from "@/lib/calculators";
import { guides } from "@/lib/guides";
import { renderOgCard } from "@/lib/og-card";

export const dynamic = "force-static";
export const dynamicParams = false;

/** Per-page share images: /og/calculators/<slug> and /og/guides/<slug>. */
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
  if (calculator) return renderOgCard({ label: "Calculator", title: calculator.title });
  if (guide) return renderOgCard({ label: "Guide", title: guide.title });
  return new Response("Not found", { status: 404 });
}
