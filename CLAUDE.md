# Capitiro: guide for Claude

Static financial-calculator site (Next.js 16 App Router, Tailwind 4, shadcn/base-ui, Recharts) for US/UK/EU visitors,
deployed to Vercel on push and monetised with Google AdSense. Full roadmap: `.claude/PLAN.md`. Original brief: `AGENT.md`.

## Commands (always pnpm, never npm)
- `pnpm dev`: local dev server
- `pnpm test`: math unit tests (`lib/math.test.ts`, Node test runner)
- `pnpm lint` / `pnpm build`
- `pnpm seo:check`: on-page SEO check of the built pages (run after `pnpm build`)
- `pnpm check`: lint + test + build + seo:check. Run it before every commit.

## Skills: load the relevant one before working
| Task | Skill |
|---|---|
| Any UI, layout, color, chart work | `.claude/skills/capitiro-design` |
| Add a calculator | `.claude/skills/new-calculator` |
| Copy, metadata, guides, traffic, marketing | `.claude/skills/seo-marketing` |
| SEO audits, schema, E-E-A-T, AI search, backlinks | `.claude/skills/seo-toolkit` |
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

## Delivery workflow (owner-approved; the owner does not review PRs)
1. **Build with subagents.** Split work into independent tasks and run them in parallel, each in its own git worktree
   and branch. Main agent: Opus (high). Subagents: Sonnet (medium/high); Opus (low) only for tricky design/architecture.
2. **Cross-check with a different agent.** Every change is verified by a separate verifier subagent that did not write it:
   recomputes every number with `lib/math.ts`, checks claims and links, reviews code, runs `pnpm check`. Fix all
   FAIL findings and re-verify before opening/merging the PR.
3. **Main agent opens the PR, reviews the diff and merges it** (no waiting for the owner) once verification passes and
   `pnpm check` is green. Report merged PRs and live links to the owner afterwards.
4. **Features with sub-features:** create `feature/<name>` from `main`; each sub-feature gets its own branch and PR
   targeting `feature/<name>`; verify and merge them there; finally open one PR `feature/<name>` → `main`, verify the
   combined result and merge it.
5. Branch names: `content/…` (guides, copy), `feature/…` (features), `fix/…` (bugs), `chore/…` (docs, tooling).
   PR titles say plainly what changes. Never delete branches (local or on GitHub) and never enable
   auto-delete: the owner deletes merged branches manually.
6. Never merge anything that touches ads, privacy/consent or legal pages without verification, and never invent facts:
   if a fact or external link can't be verified, use a stable source page or flag it in the PR and the report.
