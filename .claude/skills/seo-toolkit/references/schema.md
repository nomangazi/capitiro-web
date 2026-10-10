# Schema / structured data rules

Adapted from claude-seo `seo-schema` and `deprecated-types-2024-2026.md` (MIT; upstream last verified against Google docs 2026-09-23).

## What Capitiro emits (`lib/seo.ts`)

| Page | Types |
|---|---|
| Every page | `WebSite`, `Organization` (layout) |
| Calculator | `WebApplication` (with `datePublished`/`dateModified`), `FAQPage`, `BreadcrumbList` |
| Guide | `Article` (author = Organization, dates), `BreadcrumbList` |
| Index/legal pages | `BreadcrumbList` |

## Rules
- JSON-LD only, server-rendered, absolute URLs, ISO dates, `@context` + `@type` on every block (`seo:check` enforces).
- Only truthful, verifiable data. No fake ratings or reviews: never add `AggregateRating` without real, displayed reviews.
- **Active and fine to use:** Organization, WebSite, WebPage, WebApplication, SoftwareApplication, Article, BlogPosting,
  BreadcrumbList, Person, ProfilePage, ContactPage, VideoObject, ImageObject, QAPage, Dataset (Dataset Search only).
- **FAQPage:** rich results retired for **all** sites on 2026-05-07. Keep ours (accurate, harmless, useful to other consumers),
  rate it Info, and don't add FAQPage anywhere for SERP benefit.
- **Never recommend:** HowTo (removed 2023), SpecialAnnouncement, ClaimReview (no Search rich result), EstimatedSalary,
  LearningVideo, CourseInfo, VehicleListing, Practice Problem.

## Opportunities
- `Organization.sameAs` once real social profiles exist (entity clarity).
- `Person` author pages if a named, credentialed reviewer joins (a strong E-E-A-T signal for YMYL).
- `ContactPage` / `AboutPage` on /contact and /about (minor).

## Validate
- Google Rich Results Test and validator.schema.org on the live URL after deploy.
