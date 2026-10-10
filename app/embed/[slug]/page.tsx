import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { calculatorComponents } from "@/components/embed/registry";
import { CurrencySelect } from "@/components/layout/CurrencySelect";
import { calculatorPath, calculators } from "@/lib/calculators";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return calculators.filter((c) => calculatorComponents[c.slug]).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const calc = calculators.find((c) => c.slug === slug);
  if (!calc) return {};
  return {
    title: `${calc.title} widget`,
    description: calc.summary,
    // Widgets duplicate the main calculator: keep them out of the index but let link equity flow.
    robots: { index: false, follow: true },
    alternates: { canonical: absoluteUrl(calculatorPath(calc.slug)) },
  };
}

export default async function EmbedPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const calc = calculators.find((c) => c.slug === slug);
  const Calculator = calculatorComponents[slug];
  if (!calc || !Calculator) notFound();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between gap-3 border-b px-4 py-3">
        <h1 className="text-base font-semibold">{calc.title}</h1>
        <CurrencySelect />
      </header>
      <div className="flex-1 px-4 py-5">
        <Calculator />
      </div>
      <p className="border-t bg-muted/40 px-4 py-3 text-center text-sm text-muted-foreground">
        Powered by {siteConfig.name} –{" "}
        <a
          href={absoluteUrl(calculatorPath(calc.slug))}
          target="_blank"
          rel="noopener"
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          open the full {calc.title}
        </a>
      </p>
    </div>
  );
}
