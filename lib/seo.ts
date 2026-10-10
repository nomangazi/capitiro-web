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
}

/** Canonical, Open Graph and Twitter metadata for any page. */
export function buildMetadata({ title, description, path, type = "website", absoluteTitle }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
    },
    twitter: { card: "summary_large_image", title, description },
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

export function calculatorJsonLd({ name, description, path }: { name: string; description: string; path: string }): JsonLdObject {
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
    },
  ];
}
