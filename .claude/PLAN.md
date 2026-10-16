# Capitiro: master plan

**Goal:** a static, fast, trustworthy financial-calculator site for US/UK/EU visitors, deployed on Vercel from
GitHub and monetised with Google AdSense.

**Formula:** Revenue = organic visitors × pages per visit × page RPM.
Everything below raises one of those three numbers without risking the AdSense account.

Skills to use while working (in `.claude/skills/`):
- `capitiro-design`: any UI change
- `new-calculator`: adding a tool
- `seo-marketing`: copy, guides, metadata, promotion
- `adsense-compliance`: ads, consent, privacy
- `deploy-vercel`: before pushing

---

## Phase 1: Foundation ✅ (done)
- [x] Next.js 16 App Router, Tailwind 4, shadcn/base-ui, Recharts, pnpm
- [x] Design tokens (blue/navy/emerald), `container` and `prose-content` utilities, light-only theme
- [x] Navbar with mobile menu and currency picker (USD/EUR/GBP, auto-detected from browser locale and remembered)
- [x] Footer with all calculators, company and legal links, and the consent-settings link
- [x] Brand mark (`Logo`, `app/icon.svg`, `apple-icon`), default OG image

## Phase 2: Calculators ✅ (8 live)
- [x] Fixed old bugs: broken chart colors (`hsl(var())`), wrong yearly loan totals, NaN at 0% rate, ignored compounding option, lint errors
- [x] Shared calculator kit: `NumberField` (input + slider), `Segmented`, `CalculatorShell`, `ResultSummary`, `Notice`, `TimeSeriesChart`, `BreakdownDonut`, `ScheduleTable`
- [x] Mortgage (PITI, PMI with 78% LTV drop-off, HOA)
- [x] Loan amortization (+ extra payments, monthly/yearly schedule)
- [x] Credit card payoff (+ "pay off in 12/24/36 months")
- [x] Compound interest (yearly/quarterly/monthly/daily)
- [x] SIP (+ annual step-up)
- [x] Retirement (real vs nominal, 4% rule income)
- [x] Savings goal
- [x] Inflation
- [x] `lib/math.test.ts`: 19 tests against textbook formulas (`pnpm test`)

## Phase 3: Content and trust ✅
- [x] `CalculatorPage` template: breadcrumb, H1, trust row, calculator, ad, article (how-to, formula, verified example, tips), FAQ, related, disclaimer
- [x] Homepage, `/calculators` index
- [x] Guides system (`lib/guides.ts`, `GuideLayout`) + 3 guides
- [x] About, Contact, Privacy policy (GDPR/UK GDPR/CCPA + Google ad disclosures), Terms, Disclaimer, 404

## Phase 4: SEO and ads infrastructure ✅
- [x] Per-page metadata with canonical/OG/Twitter (`lib/seo.ts`)
- [x] JSON-LD: WebSite, Organization, WebApplication, FAQPage, BreadcrumbList, Article
- [x] `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `ads.txt` (from env)
- [x] AdSense loader, verification meta, `AdSlot` with reserved height, CMP revocation link
- [x] All 28 routes statically generated

---

## Phase 5: Launch (owner actions, in this order)
- [ ] Buy a domain (e.g. capitiro.com) and connect it in Vercel
- [ ] Create a real inbox for `NEXT_PUBLIC_CONTACT_EMAIL`
- [ ] Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CONTACT_EMAIL` in Vercel, then redeploy
- [ ] Have the privacy policy and terms reviewed (they are a strong template, not legal advice)
- [ ] Google Search Console + Bing Webmaster Tools: verify, submit sitemap, request indexing
- [ ] Start the content calendar (`.claude/skills/seo-marketing/references/content-calendar.md`)

## Phase 6: Content growth (weeks 1–6)
- [ ] 2 guides per week until about 15–20 guides
- [ ] Next calculators: ~~refinance break-even~~ (done: /calculators/refinance), multi-debt payoff, auto loan, home affordability (see keyword-targets.md)
- [ ] Pinterest pins + Reddit/Quora answers for each new page
- [x] Vercel Web Analytics (cookieless) + privacy policy updated
- [ ] GA4 with Consent Mode v2 after AdSense approval (link GA4 ↔ AdSense)

## Phase 6b: SEO depth (from seo-toolkit audit)
- [x] og:image on every page, titles ≤ 60 chars, meta descriptions 120–160, `pnpm seo:check` in `pnpm check`
- [ ] Expand calculator pages to 600+ words and guides to 1,200+ (examples, tables, US/UK/EU notes, 5–10 internal links)
- [ ] Embeddable calculator widget (backlink engine)
- [ ] Organization `sameAs` once social profiles exist

## Phase 7: Monetise (about week 6+, once pages are indexed)
- [ ] Apply to AdSense, then set `NEXT_PUBLIC_ADSENSE_CLIENT` and redeploy
- [ ] Configure the GDPR message in AdSense → Privacy & messaging (required for EEA/UK)
- [ ] After approval: create an in-content unit, set `NEXT_PUBLIC_ADSENSE_SLOT_INCONTENT`, test Auto ads
- [ ] Monitor RPM per page and country, and Core Web Vitals

## Phase 8: Scale (month 3+)
- [ ] Shareable result URLs (inputs in the query string) for social sharing and backlinks
- [ ] Embeddable calculator widget for bloggers (backlink engine)
- [ ] Print/PDF amortization schedule
- [ ] UK/EU-specific tools (mortgage overpayment UK, ISA/SIPP)
- [ ] Apply to higher-paying ad networks (Ezoic → Mediavine/Raptive) when traffic qualifies
- [ ] Monthly SEO review: refresh pages ranked 8–20, prune pages with zero impressions
