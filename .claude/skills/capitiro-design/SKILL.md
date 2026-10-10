---
name: capitiro-design
description: Capitiro's design system and UI rules. Use before creating or changing ANY page, component, calculator UI, chart, color, spacing or layout in this repo, so every screen looks consistent, trustworthy (YMYL finance) and accessible.
---

# Capitiro design system

Capitiro is a finance (YMYL) site for US, UK and EU visitors. The design goal is **calm, trustworthy and fast**:
lots of whitespace, flat surfaces, one strong blue, numbers that are easy to read. When in doubt, remove
decoration rather than add it.

## 1. Tokens (source of truth: `app/globals.css`)

Never hard-code hex colors in components. Use Tailwind classes mapped to the tokens:

| Token | Class | Use for |
|---|---|---|
| `--primary` (blue 221 83% 53%) | `bg-primary`, `text-primary` | CTAs, links, the hero result number, active states |
| `--navy` (222 47% 11%) | `bg-navy`, `text-navy-foreground` | Homepage hero band only |
| `--accent` (emerald) | `text-accent`, `bg-accent/15` | Positive money: interest *earned*, growth, success notices, trust ticks |
| `--destructive` (red) | `text-destructive` | Money *lost*: interest *paid*, purchasing power lost, warnings about debt |
| `--warning` (amber) | `border-warning/30 bg-warning/10` | Problem notices (payment too low, etc.) |
| `--muted` / `--muted-foreground` | `bg-muted`, `text-muted-foreground` | Secondary text, table headers, disclaimers |
| `--chart-1…5` | `var(--chart-n)` | Chart series (see §5) |

Light theme only. Don't add `dark:` variants or a theme toggle. Finance sites keep a single trusted look.

Radius: `--radius` is 0.625rem. Cards use `rounded-xl`; inputs and buttons use `rounded-lg`.
Shadows: only `shadow-sm` at rest and `shadow-md` on hover. No large or colored shadows.
Font: Inter (`font-sans`). Every number uses `tabular-nums`.

## 2. Layout

- Page width: the `container` utility (max 80rem, 16/24/32px gutters). Long text: `prose-content` (max 48rem).
- Vertical rhythm: section padding `py-16 sm:py-20`, gaps between blocks `space-y-6` (inside calculators) and `space-y-12` (page sections).
- Grids: cards are `grid gap-5 sm:grid-cols-2 lg:grid-cols-3`.
- Must work at 360px width with **no horizontal scroll**. Tables scroll inside their own container.

## 3. Page anatomy

**Calculator page.** Always use `components/site/CalculatorPage.tsx`; never build one by hand:
1. Breadcrumbs (Home › Calculators › Name), with JSON-LD
2. Tinted header: icon tile, H1 (exactly one per page), 1–2 sentence intro, trust row (Free · Private · Updated)
3. The calculator (`CalculatorShell`: sticky inputs on the left, results on the right)
4. `<AdSlot />`, which must stay *below* the results and never between inputs and results
5. Article (`prose-content`): How to use → Formula explained → Worked example → Tips. Related calculators go in the sidebar.
6. FAQ accordion (4–6 questions, also emitted as FAQPage JSON-LD)
7. Disclaimer box

**Guide page.** Use `GuideLayout`: breadcrumb, H1, byline + updated date + reading time, article, calculator CTA, ad, disclaimer.

**Legal/static page.** Use `LegalPage`.

## 4. Calculator UI components (`components/calculators/shared/`)

| Component | Rule |
|---|---|
| `NumberField` | Every numeric input. Always set `prefix={symbol}` for money or `suffix` ("%", "years"). Set `sliderMax` to a realistic range, and keep `max` as the hard limit. Use "Optional" as the `hint` for optional fields. |
| `Segmented` | Discrete choices with 2–4 options (term, compounding, view). Use it instead of a select. |
| `ResultSummary` | First stat = the single answer the user came for (big, blue). Then 2–4 secondary stats. Use tones from §1. |
| `Panel` | Every chart or table block, with a short `title` and an optional one-line `description`. |
| `Notice` | Contextual insight: `success` for savings, `info` for explanations, `warning` for impossible or bad inputs. |
| `TimeSeriesChart` | Money over time. One `area` series (headline) and dashed `line` series for references. |
| `BreakdownDonut` | "Where does the money go". 2–5 slices with the total in the center. |
| `ScheduleTable` | Amortization schedules. Yearly view by default. |

Copy rules: sentence case for labels ("Monthly contribution", not "Monthly Contribution"). Write results as
answers ("Debt-free in 2 years 9 months"). Never show `NaN`, `Infinity` or negative zero. Formatters
already return "—" or "Never".

## 5. Charts

- Colors: chart-1 blue for the main value, chart-2 green for money you put in, chart-3 red for interest or debt, chart-4 amber for costs, chart-5 violet for real/inflation-adjusted values.
- Y axis: compact currency (`$12K`). The tooltip shows full values. No chart titles inside the SVG, because the Panel provides them.
- `isAnimationActive={false}`, because results update as the user types.
- Give every chart a meaningful `ariaLabel`.

## 6. Accessibility checklist (WCAG 2.1 AA)

- Every input has a visible `<label>`. Sliders have `aria-label`.
- Results container is `aria-live="polite"` (already in `CalculatorShell`).
- Focus rings: `focus-visible:ring-3 focus-visible:ring-ring/50`. Never remove outlines without a replacement.
- Color is never the only signal: pair red/green with words ("Total interest", "saved").
- Text contrast is at least 4.5:1. Use `text-muted-foreground` only on white or muted backgrounds.
- Tap targets are at least 40px on mobile.

## 7. Performance rules (Core Web Vitals = SEO + ad revenue)

- Pages are Server Components. Only calculators, nav widgets and ad slots are `"use client"`.
- No new UI libraries without a strong reason. Use lucide icons only, and import them individually.
- Ad slots reserve height (`min-h-24`) so they don't cause layout shift.
- No web fonts besides Inter, and no images above the fold except SVG.
- Don't put `backdrop-filter` on the sticky header. It breaks the fixed mobile menu (it becomes the containing block).

## 8. Before you finish a UI change

1. `pnpm lint && pnpm build`
2. Check 390px and 1366px widths (Playwright screenshots or the browser). Look for overflow, wrapping and contrast.
3. Confirm the new UI reuses shared components instead of duplicating them.
