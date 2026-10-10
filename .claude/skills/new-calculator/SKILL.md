---
name: new-calculator
description: Step-by-step recipe for adding a new financial calculator to Capitiro (math + tests, client component, SEO page, registry). Use whenever the user asks to add, build or create a calculator or tool.
---

# Adding a new calculator

Follow every step. A calculator without tests, a worked example and an FAQ is not done.

## 0. Pick the right calculator
Check `.claude/skills/seo-marketing/references/keyword-targets.md` for the backlog and prioritise high-CPC
US/UK/EU keywords. Don't duplicate an existing tool. Extend it instead (e.g. add a field).

## 1. Math: `lib/math.ts`
- Add a pure function with a typed input/result interface. No React, no formatting, no rounding.
- Sanitize every input with `clamp()`. Handle 0% rates, empty (NaN) values and impossible states (return a flag like `payable: false` instead of throwing).
- Cap loops with `MAX_MONTHS`.

## 2. Tests: `lib/math.test.ts`
- At least: one textbook case with a known answer, one 0%/edge case and one bad-input case.
- Compute expected values independently (Python or a spreadsheet), not by copying the function's output.
- `pnpm test` must pass.

## 3. Registry: `lib/calculators.ts`
Add a `CalculatorMeta` entry (slug, title, shortTitle, summary under 160 chars, category, lucide icon, keywords,
`published` and `updated` as today's ISO date). The dates feed the visible byline, JSON-LD and sitemap `lastmod`.
The navbar, homepage, footer, sitemap and related links all update automatically.

## 4. Client component: `components/calculators/<Name>.tsx`
- `"use client"`, `useState` per input with realistic defaults (typical US values).
- Layout: `<CalculatorShell inputs={…}>` with `ResultSummary` first, then `Notice`(s), then `Panel`s with charts/tables.
- Get `symbol` and `money` from `useCurrency()`. Never hard-code "$".
- Follow `.claude/skills/capitiro-design` for components, tones and chart colors.

## 5. Page: `app/calculators/<slug>/page.tsx`
Copy an existing page (e.g. `app/calculators/savings-goal/page.tsx`) and replace:
- `metadata = buildMetadata({ title, description, path })`. The title includes the primary keyword, and the description is 120–160 characters.
- `intro`: 1–2 sentences answering "what will this tell me?"
- `article` must contain: **How to use** (ordered list), **Formula explained** (the real formula and variable definitions), **Worked example** (numbers verified with the math function), **Tips** (with 1–2 internal links to other calculators).
- `faqs`: 4–6 real questions people search for (People Also Ask), with plain-text answers of 40–80 words.

## 6. Verify
1. Run the worked-example numbers through the function in a scratch script and make sure the article matches.
2. `pnpm check` (lint + test + build). The new route must show as `○ (Static)`.
3. Check the page at 390px and 1366px, try 0, empty and huge values, and switch currency.
4. Add the slug to `PRIMARY_NAV` in `components/layout/Navbar.tsx` only if it is a top-traffic tool.
5. Update `.claude/PLAN.md` (tick it off) and the keyword backlog.
