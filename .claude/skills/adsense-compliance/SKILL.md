---
name: adsense-compliance
description: Google AdSense setup, approval checklist, ad placement rules, GDPR/UK consent (CMP) and revenue optimisation for Capitiro. Use when touching ads, ad slots, privacy/cookie pages, consent, ads.txt, or when preparing the AdSense application.
---

# AdSense: setup, compliance and RPM

Revenue = traffic × RPM. RPM depends on visitor country (US/UK/EU are high), topic (finance is among
the highest-CPC niches), viewability and page speed. Policy violations can end the account, so
compliance always comes before revenue.

## 1. How ads are wired in this repo

| Piece | File | Notes |
|---|---|---|
| Config | `lib/site.ts` → `siteConfig.adsense` | Reads `NEXT_PUBLIC_ADSENSE_CLIENT` (ca-pub-…) and `NEXT_PUBLIC_ADSENSE_SLOT_INCONTENT` |
| Loader script | `app/layout.tsx` | Only rendered when the client id is set. Also adds the `google-adsense-account` meta tag for verification. |
| ads.txt | `app/ads.txt/route.ts` | Built from the client id at build time. Redeploy after setting the env var. |
| Manual unit | `components/ads/AdSlot.tsx` | Renders nothing in production until configured, and a dashed placeholder in dev |
| Consent link | `components/ads/ConsentSettingsLink.tsx` | Footer link that reopens Google's CMP dialog |

Placements today: below the results on every calculator, mid-homepage, end of each guide.
Auto ads can be switched on in the AdSense dashboard on top of these.

## 2. Getting approved (do this in order)

1. Deploy on a **custom domain** (e.g. capitiro.com). Approval on `*.vercel.app` is not possible.
2. Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CONTACT_EMAIL` (a real, monitored inbox on the domain) in Vercel.
3. Make sure these exist and are linked in the footer: About, Contact, Privacy policy, Terms, Disclaimer. They are already built.
4. Content depth: at least 8 calculators with real explanations and 3+ guides. **Aim for 15–20 quality guides before applying.** "Low value content" is the most common rejection reason for tool sites.
5. Submit the sitemap in Google Search Console and wait until most pages are indexed (usually 2–4 weeks).
6. Apply at adsense.google.com, add `NEXT_PUBLIC_ADSENSE_CLIENT` in Vercel and redeploy (this injects the script, meta tag and ads.txt).
7. In AdSense → **Privacy & messaging**, create the **European regulations (GDPR) message** for EEA/UK/Switzerland and, optionally, the US state regulations message. This is Google's own certified CMP. No extra code is needed, and it is **required** to serve ads to EEA/UK users.
8. After approval, create a display ad unit ("In-content", responsive), put its slot id in `NEXT_PUBLIC_ADSENSE_SLOT_INCONTENT` and redeploy.

## 3. Placement rules (policy + UX)

- Never place ads between inputs and results, or anywhere they could be mistaken for a calculator button or result.
- Label every manual unit "Advertisement" (AdSlot does this).
- At most one ad above the fold on mobile. Never sticky ads that cover content.
- No ads on the 404 page, legal pages or pages with little content.
- Don't use wording like "click here", "support us by clicking ads", or arrows pointing at ads.
- Never click your own ads. Use the AdSense "preview" tools, and make sure no friends or family test-click either.
- No pop-ups or interstitials that block the calculator.

## 4. Content and finance-specific policies

- Never promise returns ("guaranteed 10%"). Always show the disclaimer.
- No content about get-rich-quick schemes, unlicensed lending, crypto pump schemes or payday-loan promotion.
- Don't copy content from other sites. Every page must be original.
- Keep dates honest. Only bump `updated` when the content has actually been reviewed.

## 5. Raising RPM (after approval)

- Speed first: keep LCP under 2.5s and CLS under 0.1. Ad slots reserve height. Check PageSpeed Insights monthly.
- Long, genuinely useful pages earn more viewable impressions. Expand the articles under each calculator.
- Write content for high-CPC intents: mortgage, refinance, insurance, debt consolidation, retirement, credit cards (see the seo-marketing skill).
- Test Auto ads with "anchor" and "vignette" formats off, then on, and compare RPM over 2 weeks each.
- Consider Ezoic / Mediavine / Raptive once traffic reaches their minimums (they pay more than plain AdSense for finance).

## 6. Privacy policy must stay in sync

If you add analytics, a newsletter, affiliate links or any new cookie, update `app/privacy-policy/page.tsx`,
change `siteConfig.legalUpdated`, and check the consent message covers it.
