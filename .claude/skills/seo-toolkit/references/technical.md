# Technical SEO checklist

Adapted from claude-seo `seo-technical` (MIT). ✅ = solved by Capitiro's architecture; still verify after big changes.

## 1. Crawlability
- ✅ `app/robots.ts` allows all and points to the sitemap. A 5xx on robots.txt reads as "disallow everything" to compliant crawlers.
- ✅ `app/sitemap.ts` lists every registry page with `lastmod`.
- ✅ Every page is within 2 clicks of the homepage (nav, footer, index pages).
- Googlebot reads only the first **2 MB of HTML**. Keep JSON-LD and main content early, with no inline base64 images.
- Crawl rate can't be set manually. Influence it via sitemaps and fast responses.

## 2. Indexability
- ✅ Self-referencing absolute canonicals, one host (`www.capitiro.com`; apex redirects 308).
- No accidental `noindex` (`seo:check` errors on it).
- Canonical fixes can take up to ~2 weeks to be re-evaluated, so don't panic early.
- Avoid near-duplicate pages (e.g. two guides on the same intent). Merge instead.

## 3. Security
- ✅ HTTPS + HSTS (Vercel).
- Nice to have: CSP, X-Content-Type-Options, Referrer-Policy headers in `next.config.ts`. HTTPS is a lightweight signal,
  so don't over-weight headers.
- **Back-button hijacking** (`history.pushState`/`replaceState` abuse, often from ad scripts) violates spam policy and is enforced.
  Audit any new third-party script.

## 4. URLs
- ✅ Clean, hyphenated, no parameters, under 100 characters. Redirects: at most 1 hop, 301/308 for permanent moves.
- If a slug ever changes, add a permanent redirect in `next.config.ts` and keep the old URL working.

## 5. Mobile and page experience
- ✅ Responsive, viewport meta, no horizontal scroll at 360px, tap targets ≥ 40px.
- Ads (later): no intrusive interstitials, no heavy ad density above the fold, and no ad between inputs and results.

## 6. Core Web Vitals (75th percentile, field data)
- **LCP ≤ 2.5s · INP ≤ 200ms · CLS ≤ 0.1.** Never mention FID.
- Risks to watch: AdSense units without reserved height (CLS; AdSlot reserves `min-h-24`), heavy third-party scripts (INP),
  large hero images (LCP; we use none).
- Low-traffic sites often have no CrUX field data, so use PageSpeed Insights lab data as a proxy.

## 7. Structured data
- See `schema.md`. JSON-LD must be in the server HTML, which it is (Server Components).

## 8. Rendering
- ✅ SSG: all content is in the initial HTML, visible to Googlebot and to AI crawlers that don't run JS.
- Canonical, robots, title, description and JSON-LD are server-rendered. Never inject them client-side.

## 9. IndexNow (optional)
- Bing/Yandex/Naver support IndexNow for faster discovery (Google doesn't). Low priority. Bing Webmaster Tools can submit URLs manually.

## AI crawler policy (decided)
- We **allow** all crawlers (AI search visibility matters for a tools site). See `ai-search-geo.md` for what each bot governs.
