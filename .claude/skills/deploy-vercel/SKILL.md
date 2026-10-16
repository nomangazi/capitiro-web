---
name: deploy-vercel
description: Pre-push and Vercel deployment checklist for Capitiro, covering environment variables, custom domain and post-deploy SEO/AdSense steps. Use before committing/pushing changes that will deploy, or when the user asks about deployment, domains or environment variables.
---

# Deploying Capitiro to Vercel

Pushing to the production branch auto-deploys on Vercel. A broken build means the live site doesn't update,
and a wrong number on a live finance page hurts trust, so verify before every push.

## Before every push

```bash
pnpm check   # = pnpm lint && pnpm test && pnpm build
```
All routes in the build output must be `○ (Static)`. If something turns dynamic (`ƒ`), find out why.
For UI changes, also check 390px and 1366px widths (see the capitiro-design skill).

## Environment variables (Vercel → Project → Settings → Environment Variables)

| Variable | Example | Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://capitiro.com` | Yes, once a custom domain exists (used for canonical URLs, the sitemap and OG). Falls back to the Vercel production URL. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `hello@capitiro.com` | Yes. Shown on Contact, Privacy and Terms pages. Must be a real inbox. |
| `NEXT_PUBLIC_ADSENSE_CLIENT` | `ca-pub-1234567890123456` | After you apply to AdSense. Enables the script, verification meta tag and ads.txt. |
| `NEXT_PUBLIC_ADSENSE_SLOT_INCONTENT` | `1234567890` | After approval. Enables the manual in-content units. |

`NEXT_PUBLIC_*` values are baked in at build time, so **redeploy after changing them**. `.env.example` lists them for local use.

## First-time setup

1. vercel.com → Add New Project → import `nomangazi/capitiro-web`. The framework is auto-detected and pnpm is detected from the lockfile.
2. Add a custom domain (Settings → Domains). Pick one canonical host (apex or www) and redirect the other.
3. Set the env vars above and redeploy.
4. Check `/robots.txt`, `/sitemap.xml`, `/ads.txt` and `/opengraph-image` on the live domain.
5. Google Search Console: add a Domain property, verify via DNS, submit the sitemap. Repeat in Bing Webmaster Tools.
6. Then follow `.claude/skills/adsense-compliance` step 2 onwards.

## Rollback

Vercel → Deployments → pick the last good deployment → "Promote to Production". Then fix forward on the branch.

## IndexNow (instant indexing for Bing, Yandex, Seznam, Naver)

- `pnpm build` ends with `node scripts/indexnow.mjs` (chained in the `build` script, because pnpm does not run `postbuild` hooks by
  default). Vercel runs the package's `build` script, so every production deploy submits changed URLs automatically.
- It does nothing unless `VERCEL_ENV=production` (previews and local `pnpm check` never touch the network). It reads
  `.next/server/app/sitemap.xml.body`, takes URLs with `<lastmod>` in the last 3 days plus `/`, `/guides` and `/calculators`,
  and POSTs them to `https://api.indexnow.org/indexnow`. It never fails the build: errors are logged and ignored.
- The key is public by design: constant `KEY` in `scripts/indexnow.mjs`, served as `public/<key>.txt` (file content = the key).
  Keep the filename, content and constant in sync if the key is ever rotated. The first deploy ships the key file and the first
  submission together; IndexNow verifies the key file afterwards, so this is fine.
- Host comes from `NEXT_PUBLIC_SITE_URL` (must be the live host, `https://www.capitiro.com`), so URLs on any other host are never sent.
- Manual run after a build: `node scripts/indexnow.mjs --force` (add `--days=N` to widen the window, `--dry-run` to print the payload only).
- Check results in Bing Webmaster Tools → IndexNow (submissions and any key/host errors). HTTP 200/202 in the build log = accepted.
