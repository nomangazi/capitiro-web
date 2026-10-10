# Backlinks: quality, risks and safe acquisition

Adapted from claude-seo `seo-backlinks`, `backlink-quality.md` and `free-backlink-sources.md` (MIT).

## Measuring (free)
- **Google Search Console → Links**: top linking sites, linked pages, anchor text (first-party, verified site).
- **Bing Webmaster Tools → Backlinks**: inbound URLs + anchors.
- Optional: the Moz free API (Domain Authority, Spam Score).
- Referring **domains** matter more than raw link count. The top 50–100 referring domains carry most of the authority.
- Never invent a "backlink health score" from partial data. Say "not assessed" when the data isn't there.

## Healthy anchor mix (publisher/tools site)
Branded 30–40% · URL 20–30% · generic 10–15% · partial match 10–20% · exact match 3–8%.
A spike of exact-match anchors from unrelated sites is a red flag.

## Toxic patterns (auto-flag)
Link farms/PBNs, hacked-site injections (pharma/casino), auto-generated or spun articles, site-wide footer links
from unrelated domains, domains with no indexed pages, brand-new domains with hundreds of outbound links,
exact-match anchors from 5+ unrelated domains.

**Review:** article directories, low-quality guest-post networks, reciprocal link rings, expired domains repurposed
for links, unrelated-niche links, forum profile links, press-release syndication at scale.

## Disavow: rarely
Only if there is a manual action, a clear negative-SEO attack, or more than ~10% of the profile is confirmed toxic.
Do **not** disavow ordinary low-quality or nofollow links, since Google already ignores them.

## Velocity signals
- 10× normal new links in a week → investigate (possible negative SEO)
- 50%+ links lost in a month → check Search Console for manual actions or site issues
- Zero new links for 3+ months → content isn't attracting links, so build linkable assets

## Safe acquisition tactics for Capitiro (highest value first)
1. **Embeddable calculator widget** with a "Powered by Capitiro" credit link (the editorial value is the tool itself).
2. **Original data assets**: "PMI cost by down payment", "what a 1% fee costs over 30 years", tables journalists can cite.
3. **Journalist requests** (Connectively, Qwoted, Featured): expert answers with real numbers.
4. **Resource-page outreach**: personal-finance resource lists, university and credit-union financial-literacy pages.
5. **Guest articles** on relevant personal-finance blogs (one contextual link, no networks).
6. **Brand mentions**: Reddit/Quora answers that genuinely help, YouTube or LinkedIn presence (also helps AI search).

**Never:** buy links, PBNs, link exchanges, comment or forum spam, expired-domain redirects (all are spam-policy
violations, and a penalty also ends AdSense income).
