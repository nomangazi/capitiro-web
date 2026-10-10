import type { ReactNode } from "react";
import Link from "next/link";
import { CheckCircle2, Lock, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AdSlot } from "@/components/ads/AdSlot";
import { calculatorPath, getCalculator, getRelatedCalculators } from "@/lib/calculators";
import { calculatorJsonLd, faqJsonLd, type FaqItem } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { CalculatorCard } from "./CalculatorCard";
import { JsonLd } from "./JsonLd";

interface CalculatorPageProps {
  slug: string;
  /** One or two sentences under the H1 that state what the tool answers */
  intro: string;
  /** The interactive client component */
  calculator: ReactNode;
  /** Long-form explainer: must include H2 "How to use", H2 "Formula explained" and a worked example */
  article: ReactNode;
  faqs: FaqItem[];
  /** ISO date the content was last reviewed — shown to readers (E-E-A-T) */
  updated: string;
}

/**
 * Standard anatomy for every calculator page (see .claude/skills/capitiro-design):
 * breadcrumb → H1 + intro + trust row → calculator → ad → article → FAQ → related → disclaimer.
 */
export function CalculatorPage({ slug, intro, calculator, article, faqs, updated }: CalculatorPageProps) {
  const meta = getCalculator(slug);
  const path = calculatorPath(slug);
  const related = getRelatedCalculators(slug);
  const Icon = meta.icon;
  const updatedLabel = new Date(updated).toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });

  return (
    <div className="pb-16">
      <JsonLd data={[calculatorJsonLd({ name: meta.title, description: meta.summary, path }), faqJsonLd(faqs)]} />

      <div className="border-b bg-gradient-to-b from-secondary/70 to-background">
        <div className="container space-y-5 pt-6 pb-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Calculators", path: "/calculators" },
              { name: meta.title, path },
            ]}
          />
          <div className="flex items-start gap-4">
            <span className="hidden size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm sm:inline-flex">
              <Icon className="size-6" aria-hidden />
            </span>
            <div className="space-y-3">
              <h1 className="text-3xl font-bold sm:text-4xl">{meta.title}</h1>
              <p className="max-w-3xl text-lg text-muted-foreground">{intro}</p>
            </div>
          </div>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-accent" aria-hidden /> Free, no sign-up
            </li>
            <li className="flex items-center gap-1.5">
              <Lock className="size-4 text-accent" aria-hidden /> Private — runs in your browser
            </li>
            <li className="flex items-center gap-1.5">
              <Sparkles className="size-4 text-accent" aria-hidden /> Updated <time dateTime={updated}>{updatedLabel}</time>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-8 space-y-12">
        {calculator}

        <AdSlot />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="prose-content">{article}</article>
          <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
            <h2 className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">Related calculators</h2>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {related.map((calc) => (
                <CalculatorCard key={calc.slug} calculator={calc} compact />
              ))}
            </div>
          </aside>
        </div>

        <section className="max-w-3xl" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="mb-4 text-2xl font-bold">
            Frequently asked questions
          </h2>
          <Accordion className="rounded-xl border bg-card px-5">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="py-4 text-base">{faq.question}</AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <p className="max-w-3xl rounded-lg bg-muted px-4 py-3 text-xs leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Disclaimer:</strong> Results are estimates for educational purposes only and are not
          financial, tax or legal advice. Actual rates, fees and returns vary. Speak to a qualified professional before making
          financial decisions. See our <Link href="/disclaimer" className="underline">full disclaimer</Link>.
        </p>
      </div>
    </div>
  );
}
