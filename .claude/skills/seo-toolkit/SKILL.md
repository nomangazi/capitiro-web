---
name: seo-toolkit
description: SEO audit and fix workflows for Capitiro, covering single-page and site-wide audits, technical SEO, schema/structured data, content quality and E-E-A-T (YMYL finance), AI search (AI Overviews, ChatGPT, Perplexity) and backlink quality. Use when asked to audit, check or improve SEO, metadata, schema, Core Web Vitals, content depth, AI-search visibility or backlinks. Pair with seo-marketing for strategy and content planning.
---

# SEO toolkit (audit → fix)

Adapted for Capitiro from [claude-seo](https://github.com/AgricIDaniel/claude-seo) (MIT, see `LICENSE.txt`).
The upstream project depends on its own Python runtime, Chromium and paid APIs. This version keeps the
checklists and rules and replaces the scripts with tools this repo already has.

**Site profile:** static Next.js site (SSG), English, US/UK/EU audience, *publisher + tools* type,
**YMYL finance** (highest E-E-A-T bar). Every page is in the server HTML, so no JS-rendering risk.

## Tools available here

| Need | Use |
|---|---|
| On-page check of every page (title, description, canonical, H1, OG, JSON-LD, alt, dates, thin content, duplicates) | `pnpm build && pnpm seo:check` (`scripts/seo-check.mjs`; errors fail, warnings don't) |
| Inspect one built page | `.next/server/app/<route>.html` |
| Live production page | Vercel MCP `web_fetch_vercel_url` on `https://www.capitiro.com/...` |
| Numbers in content | `lib/math.ts` via a scratch script (YMYL: never guess) |
| Real search data | The owner's Google Search Console and Bing Webmaster Tools (ask for screenshots or exports) |
| Behaviour | Vercel Analytics (traffic) and Microsoft Clarity (heatmaps/recordings), dashboards owned by the user |
| Core Web Vitals | pagespeed.web.dev (the user runs it), or Vercel Speed Insights if enabled |

## Workflows

### 1. Site audit (`audit`)
1. `pnpm build && pnpm seo:check` and collect errors and warnings.
2. Walk `references/technical.md`. Most items are already solved by the architecture, so verify they still hold.
3. Check schema against `references/schema.md`.
4. Check 2–3 representative pages (one calculator, one guide, the homepage) against `references/on-page-and-quality.md` and `references/eeat-ymyl.md`.
5. Check AI-search readiness with `references/ai-search-geo.md`.
6. Report using the format below, then fix whatever is in scope (code or metadata) in a PR and list content work as follow-ups.

### 2. Single page (`page <route>`)
Same as above for one route: run `seo:check`, read the built HTML and the source, and score each section.

### 3. Content quality (`content <route>`)
Use `references/eeat-ymyl.md` and the content gates in `references/on-page-and-quality.md`. Rewrite or expand
with verified numbers, more internal links and a clearer answer-first structure.

### 4. Backlinks (`backlinks`)
No backlink API is connected. Use the owner's Search Console → Links report and Bing Webmaster → Backlinks,
then apply `references/backlinks.md` (quality signals, toxic patterns, when *not* to disavow, safe acquisition tactics).

## Hard rules (from upstream, verified against Google docs)

- **Never recommend HowTo schema.** Its rich results were removed in Sept 2023.
- **FAQPage:** Google retired FAQ rich results for all sites on 2026-05-07. Our existing FAQPage JSON-LD is
  accurate and harmless, so **keep it** (Info level, not an issue) but never promise a SERP feature from it.
- Core Web Vitals = **LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1** at the 75th percentile. Never mention FID (replaced by INP in March 2024).
- No templated metadata: a description must not just restate the title or end in a stock CTA copied across pages.
- Word counts are **coverage floors, not ranking factors**. Expand only with genuinely useful material (examples, tables, edge cases), never filler.
- GEO/AEO is still SEO (per Google's AI optimization guide). `llms.txt`, "AI chunking" and mention-farming are not Google ranking levers.
- Spam policies to never trip: scaled AI content without added value, site reputation abuse, expired-domain abuse,
  back-button hijacking (enforced since 2026-06-15, so ad scripts must never manipulate history).
- Our scores are heuristics. Search Console is the first-party source of truth.

## Report format

```
SEO Health: XX/100 (heuristic)
Technical 22% · Content 23% · On-page 20% · Schema 10% · Performance 10% · AI search 10% · Images 5%

Critical (blocks indexing / penalty risk) → fix now
High (clear ranking impact)               → this week
Medium (optimisation)                     → this month
Low (nice to have)                        → backlog
```
Every recommendation states: what was observed, why it matters, the fix, and **how we'll know it worked**
(a Search Console or Analytics signal to watch).

## Current known backlog (keep updated)

- Content depth: `seo:check` flags most calculator pages under 600 words and guides under 900 words. Expand with
  more worked examples, comparison tables, US/UK/EU notes and 5–10 internal links per guide.
- Consider an `Organization` `sameAs` list once social profiles exist (entity clarity for AI search).
- IndexNow (Bing/Yandex) could speed up non-Google indexing; low priority.
