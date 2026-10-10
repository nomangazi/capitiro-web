# On-page SEO and content quality gates

Adapted from claude-seo `seo-page` and `seo/references/quality-gates.md` (MIT).

## Title tag
- 30–60 characters **including** the " | Capitiro" suffix the layout template adds. Use `seoTitle` in `lib/guides.ts`
  when an H1 is longer.
- Primary keyword near the start, brand at the end, unique per page.
- Good: "Mortgage Calculator with Taxes, Insurance & PMI | Capitiro". Bad: "Home", keyword-stuffed or over 60 characters.

## Meta description
- 120–160 characters, unique, includes the keyword naturally.
- Written for this page. It must not open by repeating the title or close with a stock CTA reused everywhere
  (templated metadata is a documented quality problem even when the body is original).

## Headings and URL
- Exactly one H1 matching intent. H2/H3 in order with no skipped levels. Question-style H2s where natural.
- URLs short, lowercase and hyphenated, with no parameters (ours: `/calculators/<slug>`, `/guides/<slug>`).

## Links
- Internal: 5–10 per guide (1,500 words), 3–5 per calculator page, descriptive and varied anchors, no orphan pages
  (registries + footer + related cards cover this). Every guide links to its calculator and at least one other guide.
- External: cite primary sources for rules and statistics (IRS, CFPB, Consumer Financial Protection Bureau, Bank of
  England, FCA, ECB, Fannie Mae/Freddie Mac, government sites). Use `rel="noopener noreferrer"`.

## Technical metadata (automated by `buildMetadata` + `seo:check`)
- Absolute self-referencing canonical, index/follow.
- OG: title, description, url, image (1200×630). Twitter `summary_large_image`.
- Guides: `article:published_time` / `modified_time`.

## Images
- Alt text 10–125 characters describing the image (decorative: `alt=""`). Prefer SVG/WebP/AVIF, flag files over 200 KB,
  always set width/height (CLS). Charts are SVG from Recharts, so give the figure an `aria-label`.

## Content depth floors (coverage, not ranking factors)

| Page type | Floor (main-content words) | Notes |
|---|---|---|
| Homepage | 300–500 | Clear value proposition + links to every tool |
| Calculator page | 600 | How to use, formula, worked example, tips, 4–6 FAQs |
| Guide | 900 (aim 1,200–1,800) | Worked example, table, "how to decide", 5–10 internal links |
| About / legal | 300+ | Real, specific, current |

`seo:check` measures visible text excluding header, footer, nav and scripts.

## Readability
- About an 8th-grade level, sentences of ~15–20 words, paragraphs of 2–4 sentences, lists and tables for comparisons.
- Primary keyword in the title, H1 and first 100 words, plus semantic variations; density stays natural (~1–3%).

## Freshness
- `published` never changes. Bump `updated` only for real content changes.
- Review money pages every 6–12 months: rates in examples, tax/PMI rules, links.
