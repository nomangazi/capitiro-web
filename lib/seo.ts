import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

interface PageMetaInput {
  /** Page title without the brand suffix — the root layout template appends " | Capitiro" */
  title: string;
  /** 120–160 characters, includes the primary keyword */
  description: string;
  /** Path starting with "/", used for the canonical URL */
  path: string;
  type?: "website" | "article";
  /** Absolute title override (skips the template), e.g. for the homepage */
  absoluteTitle?: boolean;
  /** ISO dates for articles, emitted as article:published_time / article:modified_time */
  published?: string;
  modified?: string;
}

const CONTENT_PATH = /^\/(calculators|guides)\/([^/]+)\/?$/;

/** /calculators/<slug> and /guides/<slug> get their own /og/... image; everything else uses the default. */
function ogImagePath(path: string): string {
  const match = CONTENT_PATH.exec(path);
  return match ? `/og/${match[1]}/${match[2]}` : "/opengraph-image";
}

/** Canonical, Open Graph and Twitter metadata for any page. */
export function buildMetadata({ title, description, path, type = "website", absoluteTitle, published, modified }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  // Page-level openGraph replaces the root one, so the default share image must be repeated here.
  const images = [{ url: absoluteUrl(ogImagePath(path)), width: 1200, height: 630, alt: CONTENT_PATH.test(path) ? title : `${siteConfig.name} – Free financial calculators` }];
  const base = { title, description, url, siteName: siteConfig.name, locale: siteConfig.locale, images };
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph:
      type === "article"
        ? { ...base, type, publishedTime: published, modifiedTime: modified ?? published }
        : { ...base, type },
    twitter: { card: "summary_large_image", title, description, images: images.map((i) => i.url) },
  };
}

export interface FaqItem {
  question: string;
  /** Plain-text answer (also used in FAQPage structured data) */
  answer: string;
}

type JsonLdObject = Record<string, unknown>;

export function breadcrumbJsonLd(items: { name: string; path: string }[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: FaqItem[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function calculatorJsonLd({ name, description, path, published, updated }: {
  name: string;
  description: string;
  path: string;
  published: string;
  updated: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: absoluteUrl(path),
    applicationCategory: "FinanceApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    isAccessibleForFree: true,
    datePublished: published,
    dateModified: updated,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
}

export function articleJsonLd({ title, description, path, published, updated }: {
  title: string;
  description: string;
  path: string;
  published: string;
  updated?: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished: published,
    dateModified: updated ?? published,
    author: { "@type": "Organization", name: `${siteConfig.name} Editorial Team`, url: absoluteUrl("/about") },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
}

export function websiteJsonLd(): JsonLdObject[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: absoluteUrl("/icon.svg"),
      email: siteConfig.contactEmail,
      sameAs: Object.values(siteConfig.social),
    },
  ];
}
