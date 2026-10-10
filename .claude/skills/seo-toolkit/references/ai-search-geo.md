# AI search (AI Overviews, AI Mode, ChatGPT, Perplexity, Claude)

Adapted from claude-seo `seo-geo` (MIT). Google's own guide: "optimizing for generative AI search is … still SEO."
AI Overviews and AI Mode come from the same Googlebot index and quality systems.

## What helps (in order)
1. **Rank well in classic search.** Most AI Overview citations come from top-10 results.
2. **Answer-first, self-contained passages.** Put the direct answer in the first 40–60 words of a section, use
   "X is…" definitions and quotable sentences with specific numbers.
3. **Structure:** question-style H2s, short paragraphs, tables for comparisons, ordered lists for steps.
4. **Freshness:** visible updated dates and a real refresh schedule (third-party studies find stale pages cited less).
5. **Entity clarity:** consistent brand name, Organization schema, About page, later `sameAs` profiles.
6. **Brand mentions** on Reddit, YouTube, LinkedIn and Wikipedia-grade sources correlate with AI citations more than raw backlinks (Ahrefs 2025 study, a correlation not a cause).
7. **Interactive tools:** calculators are a natural fit, so describe what the tool answers in plain text too.

## What doesn't (per Google)
- `llms.txt` or other AI-only files: not needed for Google and no ranking effect (may help non-Google tools; optional).
- Artificial "chunking", rewriting for AI, or buying or faking mentions.

## Crawlers: which bot governs which claim

| Claim | Bot that decides it |
|---|---|
| In Google Search / AI Overviews / AI Mode | `Googlebot` (not `Google-Extended`) |
| Used for Gemini training/grounding | `Google-Extended` |
| Citable in ChatGPT Search | `OAI-SearchBot` (not `GPTBot`) |
| Used for OpenAI training | `GPTBot` |
| Citable in Claude search | `Claude-SearchBot` (not `ClaudeBot`) |
| Used for Anthropic training | `ClaudeBot` |
| Perplexity answers | `PerplexityBot` |
| Apple Intelligence training | `Applebot-Extended` (Siri/Spotlight use `Applebot`) |

Capitiro's robots.txt allows everything, which maximises AI-search visibility. Blocking training bots is a
licensing choice and doesn't affect search citability.

## Quick GEO audit for a page
- [ ] The core question is answered in the first screen of text
- [ ] At least one table or list with concrete numbers
- [ ] H2s phrased the way people ask
- [ ] Published/updated dates visible, plus Article/WebApplication JSON-LD with dates
- [ ] Links to the matching calculator and 2+ related pages
