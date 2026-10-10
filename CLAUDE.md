# Capitiro: guide for Claude

Static financial-calculator site (Next.js 16 App Router, Tailwind 4, shadcn/base-ui, Recharts) for US/UK/EU visitors,
deployed to Vercel on push and monetised with Google AdSense. Full roadmap: `.claude/PLAN.md`. Original brief: `AGENT.md`.

## Commands (always pnpm, never npm)
- `pnpm dev`: local dev server
- `pnpm test`: math unit tests (`lib/math.test.ts`, Node test runner)
- `pnpm lint` / `pnpm build`
- `pnpm check`: lint + test + build. Run it before every commit.

## Skills: load the relevant one before working
| Task | Skill |
|---|---|
| Any UI, layout, color, chart work | `.claude/skills/capitiro-design` |
| Add a calculator | `.claude/skills/new-calculator` |
| Copy, metadata, guides, traffic, marketing | `.claude/skills/seo-marketing` |
| Ads, consent, privacy, ads.txt | `.claude/skills/adsense-compliance` |
| Pushing / deploying / env vars | `.claude/skills/deploy-vercel` |

## Architecture
- `lib/math.ts`: all financial math. Pure, unrounded, never throws or returns NaN. Every function is tested.
- `lib/calculators.ts` / `lib/guides.ts`: registries. Nav, homepage, footer, sitemap and related links read from them.
- `lib/site.ts`: site config and env vars. `lib/seo.ts`: metadata and JSON-LD builders. `lib/format.ts`: money formatting.
- `components/calculators/*`: client components; `components/calculators/shared/*`: the calculator UI kit.
- `components/site/*`: server page templates (`CalculatorPage`, `GuideLayout`, `LegalPage`, `Breadcrumbs`).
- `components/providers/currency.ts`: `useCurrency()` (USD/EUR/GBP display; no FX conversion).
- `app/**/page.tsx`: Server Components only (SEO). Interactivity lives in client components.

## Hard rules
- Zero backend: no API routes with server state, no database, no collecting user financial data.
- Use `const` for anything never reassigned.
- Every calculator page: `buildMetadata`, `CalculatorPage` (JSON-LD, How to use, Formula explained, worked example, FAQ).
- Numbers in content must be verified against `lib/math.ts`. This is a YMYL site.
- Never hard-code "$" in calculator UI; use `useCurrency()`.
- Never place ads between calculator inputs and results.
