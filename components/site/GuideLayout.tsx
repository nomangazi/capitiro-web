import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Bookmark, Clock } from "lucide-react";
import { AdSlot } from "@/components/ads/AdSlot";
import { calculatorPath, getCalculator } from "@/lib/calculators";
import { getGuide, guidePath } from "@/lib/guides";
import { formatDate } from "@/lib/dates";
import { pinImagePath, pinterestSaveUrl } from "@/lib/pin";
import { articleJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";

/** Shared shell for long-form guides: breadcrumb, byline, article, calculator CTA, disclaimer. */
export function GuideLayout({ slug, children }: { slug: string; children: ReactNode }) {
  const guide = getGuide(slug);
  const calc = getCalculator(guide.calculator);
  const path = guidePath(slug);
  const Icon = calc.icon;

  const cta = (
    <Link
      href={calculatorPath(calc.slug)}
      className="group my-8 flex items-center gap-4 rounded-xl border border-primary/25 bg-primary/5 p-5 transition-colors hover:bg-primary/10"
    >
      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Icon className="size-5" aria-hidden />
      </span>
      <span className="flex-1">
        <span className="block font-semibold text-foreground">Try the {calc.title}</span>
        <span className="block text-sm text-muted-foreground">{calc.summary}</span>
      </span>
      <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-0.5" aria-hidden />
    </Link>
  );

  return (
    <div className="container max-w-3xl pt-6 pb-16">
      <JsonLd data={articleJsonLd({ title: guide.title, description: guide.description, path, published: guide.published, updated: guide.updated })} />
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: guide.title, path },
        ]}
      />
      <header className="mt-6 mb-8 space-y-4 border-b pb-8">
        <h1 className="text-3xl font-bold sm:text-4xl">{guide.title}</h1>
        <p className="text-lg text-muted-foreground">{guide.description}</p>
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <span>
            By <Link href="/about" className="font-medium text-foreground hover:underline">Capitiro Editorial Team</Link>
          </span>
          <span aria-hidden>·</span>
          <span>
            Published <time dateTime={guide.published}>{formatDate(guide.published)}</time>
          </span>
          <span aria-hidden>·</span>
          <span>
            Updated <time dateTime={guide.updated}>{formatDate(guide.updated)}</time>
          </span>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" aria-hidden /> {guide.readingMinutes} min read
          </span>
        </p>
      </header>
      <article className="prose-content">{children}</article>
      {cta}
      <p className="text-sm text-muted-foreground">
        <a
          href={pinterestSaveUrl({ pagePath: path, imagePath: pinImagePath("guides", slug), description: guide.title })}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center gap-1.5 hover:text-foreground hover:underline"
        >
          <Bookmark className="size-3.5" aria-hidden /> Save to Pinterest
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>
      <AdSlot className="mt-10" />
      <p className="mt-10 rounded-lg bg-muted px-4 py-3 text-xs leading-relaxed text-muted-foreground">
        <strong className="text-foreground">Disclaimer:</strong> This guide is general educational information, not personal financial
        advice. Figures are illustrative. Consider speaking with a licensed financial adviser about your situation.
      </p>
    </div>
  );
}
