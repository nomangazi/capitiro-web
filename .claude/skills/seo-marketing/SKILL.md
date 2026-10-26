---
name: seo-marketing
description: SEO and marketing playbook for Capitiro, covering keyword strategy, on-page SEO checklist, content/guide writing, internal linking, structured data and off-site promotion (Pinterest, Reddit, Quora, backlinks) for US/UK/EU finance traffic. Use when writing or editing page copy, metadata, guides, planning content, or asked about traffic growth or marketing.
---

# SEO and marketing playbook

The business model is organic search traffic from the US, UK and EU, monetised with AdSense. Every
piece of work should increase **qualified traffic** (people with a real money question), **trust**
(E-E-A-T) or **RPM**. Search engines and AdSense reviewers both reward the same thing: original,
accurate, genuinely helpful pages.

> For audits and fixes (technical, schema, E-E-A-T, AI search, backlinks) use `.claude/skills/seo-toolkit`,
> and run `pnpm build && pnpm seo:check` after any content or metadata change.

## 1. Keyword strategy

- One page = one primary intent. Calculators target "<topic> calculator" and guides target questions ("15 vs 30 year mortgage").
- Prioritise by **CPC × volume ÷ difficulty**. Finance CPCs are high: mortgage/refinance, insurance, debt consolidation, credit cards, retirement.
- New sites can't win "mortgage calculator" head terms quickly. Win **long-tail variants** first ("mortgage calculator with PMI and HOA", "credit card payoff calculator 24 months").
- UK/EU variants are often easier: "mortgage overpayment calculator UK", "ISA calculator", "compound interest calculator euro".
- The backlog lives in `references/keyword-targets.md`. Update it when you ship something.

## 2. On-page checklist (every page)

- [ ] `buildMetadata()` used. The title is 50–60 characters with the primary keyword first, and the brand is appended by the template.
- [ ] The meta description is 120–160 characters, states the benefit and includes the keyword.
- [ ] Exactly one H1, containing the keyword. H2s are written as questions or tasks people search for.
- [ ] The intro answers the query in the first 2 sentences.
- [ ] Structured data: calculators get WebApplication + FAQPage + Breadcrumb (automatic), and guides get Article + Breadcrumb (automatic). FAQ rich results were retired by Google in May 2026; keep the FAQPage markup but expect no SERP feature from it.
- [ ] 2–4 **internal links** with descriptive anchor text (never "click here"). Every guide links to its calculator, and every calculator links to 1–2 related tools.
- [ ] The worked example uses verified numbers. Run them through `lib/math.ts`, never guess.
- [ ] `published` and `updated` dates set in the registry. Both are shown on the page and emitted in JSON-LD, OG tags and the sitemap (see §2a).
- [ ] The page is added to the registry (`lib/calculators.ts` or `lib/guides.ts`) so the sitemap includes it.

## 2a. Dates (freshness signals)

Every calculator (`lib/calculators.ts`) and guide (`lib/guides.ts`) has `published` and `updated` ISO dates. The site
shows them ("Published … · Updated …") and emits them as `datePublished`/`dateModified` (JSON-LD),
`article:published_time`/`modified_time` (OG, guides) and `<lastmod>` in the sitemap.

- **Never change `published`.**
- **Bump `updated` only for a real content change**: new section, corrected or refreshed numbers, new FAQ or rewritten copy.
  Typo fixes and code or design changes don't count. Google ignores (and can distrust) fake "updated" dates.
- Review each page at least every 6–12 months: re-check rates in examples, links and rules (e.g. PMI or tax rules),
  then bump `updated`.

## 3. Writing style (YMYL)

- Plain English at about an 8th-grade reading level. Short paragraphs and lists.
- Neutral and factual. No hype, no guarantees, no product pushing.
- Mention US, UK and EU differences when they matter (401(k) vs ISA/SIPP, PMI is US-only, APR vs AER).
- Cite rules of thumb as guidelines ("a common guideline is…"), not as rules.
- Every guide must have a worked example with real numbers, a comparison table where useful, and a clear "how to decide" section.

## 4. Content plan (cadence: 2 guides per week)

Use `GuideLayout`, add to `lib/guides.ts`, and follow `references/content-calendar.md`. Cluster the guides around
calculators so internal links reinforce each other:

- **Mortgage cluster:** 15 vs 30 year ✅, how much house can I afford ✅, PMI explained ✅, extra mortgage payments ✅, refinance break-even ✅, UK overpayments.
- **Debt cluster:** avalanche vs snowball ✅, balance transfer math, debt consolidation loans, minimum payment trap.
- **Investing cluster:** Rule of 72 ✅, SIP vs lump sum ✅, index funds and fees (1% fee impact) ✅, simple vs compound interest ✅, dollar-cost averaging.
- **Retirement cluster:** 4% rule, how much to retire by age, 401(k) vs IRA, ISA vs SIPP (UK), FIRE number.
- **Saving cluster:** emergency fund size ✅, high-yield savings vs CD ✅, sinking funds.

## 5. Technical SEO (already implemented, keep it intact)

`app/sitemap.ts`, `app/robots.ts`, canonical URLs, Open Graph image (`app/opengraph-image.tsx`), manifest,
static generation for every route, breadcrumbs, and fast pages. After deploy:
1. Verify the domain in **Google Search Console** and **Bing Webmaster Tools**, then submit `/sitemap.xml`.
2. Request indexing for the homepage and each calculator. Bing, Yandex, Seznam and Naver are notified automatically on every production deploy via IndexNow (`deploy-vercel` skill).
3. Watch Search Console → Pages (indexing errors) and Core Web Vitals weekly.

## 6. Off-site marketing (do weekly)

| Channel | Tactic |
|---|---|
| **Pinterest** (huge for US personal finance) | 3–5 pins per page: tall 1000×1500 images with a headline ("How much will $500/month grow to?") that link to the calculator. Create boards per topic. |
| **Reddit** | Answer questions in r/personalfinance, r/UKPersonalFinance, r/eupersonalfinance, r/financialindependence. Give the full answer in the comment, and link to the calculator only when it adds value. Read each sub's self-promotion rules first. |
| **Quora** | Answer "how long to pay off…" and "how much will I have…" questions with a worked example and a link. |
| **Backlinks** | Pitch free embeddable calculators to personal-finance bloggers. Answer journalist requests (Connectively/Qwoted/Featured) with data. List the site on "best free financial calculators" roundups. |
| **Product Hunt / Hacker News** | One launch post once 10+ calculators exist. |
| **Social proof** | X/LinkedIn threads built from guide data ("A 1% fee costs you $X over 30 years"). |

Never buy links, use PBNs or spam forums. Google penalties also kill AdSense revenue.

**Ready-to-use material:** `references/marketing-kit.md` has the Pinterest boards and a pin title/description for every
guide and calculator, 8 draft Reddit/Quora answers, outreach email templates, a weekly 1-hour routine and the one-time
setup checklist. Pin images are generated at `/pin/guides/<slug>` and `/pin/calculators/<slug>` (1000×1500, from the
registries, see `app/pin/[...slug]/route.tsx` and `renderPinCard` in `lib/og-card.tsx`); they are not in the sitemap. When
you ship a new guide or calculator, add its pin entry to the kit. Every number in a kit draft must be copied from the
guide it links to.

## 7. Measure

- Search Console: impressions, clicks and average position per page. Refresh pages that sit at positions 8–20.
- AdSense: page RPM by page and by country.
- Optional: add privacy-friendly analytics (Vercel Analytics or Plausible). If you do, update the privacy policy (see the adsense-compliance skill).
- Monthly review: drop or merge pages with zero impressions after 3 months, and expand the winners.
