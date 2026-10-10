# E-E-A-T for a YMYL finance site

Adapted from claude-seo `seo-content` and `eeat-framework.md` (MIT), based on Google's Search Quality Rater Guidelines (Sept 2025).

**Trust is the most important part of E-E-A-T.** Experience, Expertise and Authoritativeness support it. Financial
content is YMYL, so it carries the highest bar. E-E-A-T is a rater concept that informs ranking systems, not a direct score.

## Google's Who / How / Why test (run on every page)

| Question | Capitiro answer to maintain |
|---|---|
| **Who** made it? | "Capitiro Editorial Team" byline → /about, plus editorial standards. Upgrade path: a named, credentialed reviewer (CFP/CPA) on money pages |
| **How** was it made? | Formulas shown, numbers computed by tested code (`lib/math.ts`), dates visible, corrections via /contact |
| **Why** does it exist? | To answer a real money question with a free tool, not to farm clicks. No thin pages written to a word count |

## Signals checklist

**Experience**
- [ ] Worked examples with specific, verifiable numbers (ours are computed, not invented)
- [ ] Original data or tables (e.g. PMI by down payment, extra-payment savings)
- [ ] Real-world caveats ("check your servicer applies extra to principal")

**Expertise**
- [ ] Correct terminology (APR vs APY/AER, PMI vs MIP), accurate rules with sources
- [ ] Formula section on every calculator, plus edge cases (0% rate, payment below interest)

**Authoritativeness**
- [ ] Topic clusters (mortgage, debt, retirement…) with dense internal linking
- [ ] Citations *to* primary sources, and over time citations/mentions *from* others (see `backlinks.md`)

**Trust**
- [ ] HTTPS, About, Contact (real inbox), Privacy, Terms, Disclaimer
- [ ] Published + updated dates, disclaimers, no deceptive ads, ads clearly labelled
- [ ] Transparent corrections; never promise returns

## AI-assisted content
AI help is acceptable **if** the page adds unique value with human oversight. Low-quality markers to avoid:
generic phrasing, no specific numbers, identical structure across many pages, no attribution, factual errors.
Scaled content abuse explicitly covers "using generative AI tools to generate many pages without adding value".
So publish at a steady pace, and give every guide a real worked example and a distinct angle.

## Scoring (internal heuristic)
Experience 20 · Expertise 25 · Authoritativeness 25 · Trust 30 = 100. Google publishes no numeric weights.
