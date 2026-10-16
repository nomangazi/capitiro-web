#!/usr/bin/env node
// IndexNow submission: tells Bing, Yandex, Seznam and Naver about new/updated pages right after a production deploy.
// Runs as the last step of `pnpm build` (see package.json). It reads the sitemap Next just wrote, picks URLs whose
// <lastmod> is within the last 3 days, and POSTs them to api.indexnow.org.
//
// - Does nothing unless VERCEL_ENV === "production" (preview/local builds never submit). `--force` overrides for manual runs.
// - `--dry-run` prints the payload instead of sending it. `--days=N` changes the lastmod window (default 3).
// - NEVER fails the build: every error is caught, one line is logged, exit code is always 0.
// - The key file (public/<key>.txt) ships in the same deploy as the first submission. That is fine: IndexNow fetches
//   keyLocation later, asynchronously, to verify ownership. The key is public by design.
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

// Public by design. Must match the filename and content of public/<key>.txt.
const KEY = "5ff17e818b5be00c746d166f6d0a1496";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const SITEMAP = join(process.cwd(), ".next/server/app/sitemap.xml.body");
const TIMEOUT_MS = 10_000;
const HUBS = ["/", "/guides", "/calculators"];

const args = process.argv.slice(2);
const force = args.includes("--force");
const dryRun = args.includes("--dry-run");
const days = Number(args.find((a) => a.startsWith("--days="))?.split("=")[1] ?? 3);

const log = (msg) => console.log(`[indexnow] ${msg}`);

function siteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return vercelProd ? `https://${vercelProd}` : "";
}

async function main() {
  if (process.env.VERCEL_ENV !== "production" && !force && !dryRun) {
    return log("skipped (not a production Vercel build; use --force or --dry-run)");
  }

  const base = siteUrl();
  if (!base) return log("skipped (no NEXT_PUBLIC_SITE_URL)");
  const { host, origin } = new URL(base);
  if (!dryRun && /^(localhost|127\.|0\.0\.0\.0)/.test(host)) return log(`skipped (host ${host} is not public)`);
  if (!existsSync(SITEMAP)) return log("skipped (built sitemap not found; run `pnpm build` first)");

  const cutoff = new Date(Date.now() - days * 86_400_000).toISOString().slice(0, 10);
  const entries = [...readFileSync(SITEMAP, "utf8").matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
    loc: m[1].match(/<loc>([^<]+)<\/loc>/)?.[1].trim(),
    lastmod: m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1].trim().slice(0, 10),
  }));
  // Only URLs on our own host (the key only proves ownership of this host). lastmod is a calendar day, compared lexically.
  const changed = entries.filter((e) => e.loc?.startsWith(`${origin}/`) && e.lastmod && e.lastmod >= cutoff);
  if (!changed.length) return log(`skipped (no sitemap URL changed since ${cutoff})`);

  const urlList = [...new Set([...HUBS.map((p) => `${origin}${p}`), ...changed.map((e) => e.loc)])].slice(0, 10_000);
  const payload = { host, key: KEY, keyLocation: `${origin}/${KEY}.txt`, urlList };

  if (dryRun) return log(`dry run, would POST to ${ENDPOINT}:\n${JSON.stringify(payload, null, 2)}`);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    log(`submitted ${urlList.length} URLs, HTTP ${res.status} (200/202 = accepted)`);
  } finally {
    clearTimeout(timer);
  }
}

try {
  await main();
} catch (err) {
  log(`failed (ignored): ${err?.name === "AbortError" ? `timeout after ${TIMEOUT_MS}ms` : (err?.message ?? err)}`);
}
process.exit(0);
