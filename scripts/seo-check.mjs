#!/usr/bin/env node
// On-page SEO checker for the static build. Run `pnpm build` first, then `pnpm seo:check`.
// Checks every prerendered HTML page against the rules in .claude/skills/seo-toolkit.
// Exit code 1 when any page has an error; warnings never fail the run.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = join(process.cwd(), ".next/server/app");
const SKIP = new Set(["_not-found.html", "_global-error.html"]);

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) return walk(full);
    return name.endsWith(".html") && !SKIP.has(name) ? [full] : [];
  });
}

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");

function meta(html, attr, key) {
  const re = new RegExp(`<meta[^>]+${attr}="${key}"[^>]*content="([^"]*)"`, "i");
  const re2 = new RegExp(`<meta[^>]+content="([^"]*)"[^>]*${attr}="${key}"`, "i");
  const m = html.match(re) ?? html.match(re2);
  return m ? decode(m[1]) : null;
}

function visibleText(html) {
  return decode(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<(header|footer|nav)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " ")
  )
    .replace(/\s+/g, " ")
    .trim();
}

/** Minimum words of main content by page type (topical coverage floors, not targets). */
function minWords(route) {
  if (route.startsWith("/guides/")) return 900;
  if (route.startsWith("/calculators/")) return 600;
  if (["/privacy-policy", "/terms-of-service", "/disclaimer", "/about"].includes(route)) return 300;
  if (route === "/") return 300;
  return 150;
}

const pages = walk(ROOT).map((file) => {
  const route = "/" + relative(ROOT, file).replace(/\.html$/, "").replace(/^index$/, "");
  return { route, html: readFileSync(file, "utf8") };
});

const titles = new Map();
const descriptions = new Map();
let errors = 0;
let warnings = 0;

for (const { route, html } of pages) {
  const issues = [];
  const err = (m) => issues.push(["ERROR", m]);
  const warn = (m) => issues.push(["warn", m]);

  const title = decode(html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? "");
  const description = meta(html, "name", "description");
  const canonical = html.match(/<link[^>]+rel="canonical"[^>]*href="([^"]*)"/i)?.[1];
  const robots = meta(html, "name", "robots");
  const h1s = html.match(/<h1[\s>]/gi)?.length ?? 0;
  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  const words = visibleText(html).split(" ").filter(Boolean).length;

  if (!title) err("missing <title>");
  else if (title.length < 30 || title.length > 65) warn(`title is ${title.length} chars (aim 30–60): "${title}"`);

  if (!description) err("missing meta description");
  else {
    if (description.length < 110 || description.length > 165) warn(`meta description is ${description.length} chars (aim 120–160)`);
    if (title && description.toLowerCase().startsWith(title.split("|")[0].trim().toLowerCase())) warn("meta description just repeats the title");
  }

  if (!canonical) err("missing canonical URL");
  else if (!/^https?:\/\//.test(canonical)) err(`canonical is not absolute: ${canonical}`);
  if (robots && /noindex/i.test(robots)) err(`page is noindex: ${robots}`);

  if (h1s !== 1) err(`expected exactly one <h1>, found ${h1s}`);

  for (const key of ["og:title", "og:description", "og:url", "og:image"]) {
    if (!meta(html, "property", key)) warn(`missing ${key}`);
  }

  for (const block of jsonLd) {
    try {
      const data = JSON.parse(block);
      for (const item of Array.isArray(data) ? data : [data]) {
        if (!item["@context"] || !item["@type"]) err("JSON-LD block without @context/@type");
        if (item["@type"] === "HowTo") err("HowTo schema is deprecated for rich results");
      }
    } catch {
      err("invalid JSON-LD");
    }
  }
  if (route.startsWith("/calculators/") && !jsonLd.some((b) => b.includes('"WebApplication"'))) err("calculator page missing WebApplication JSON-LD");
  if (route.startsWith("/guides/") && !jsonLd.some((b) => b.includes('"Article"'))) err("guide page missing Article JSON-LD");
  if ((route.startsWith("/guides/") || route.startsWith("/calculators/")) && !jsonLd.some((b) => b.includes("dateModified")))
    err("content page missing dateModified");

  const imgsNoAlt = [...html.matchAll(/<img\b(?![^>]*\balt=)[^>]*>/gi)].length;
  if (imgsNoAlt) err(`${imgsNoAlt} <img> without alt`);

  if (words < minWords(route)) warn(`thin content: ${words} words (floor ${minWords(route)})`);

  if (title) titles.set(title, [...(titles.get(title) ?? []), route]);
  if (description) descriptions.set(description, [...(descriptions.get(description) ?? []), route]);

  const e = issues.filter(([l]) => l === "ERROR").length;
  errors += e;
  warnings += issues.length - e;
  const status = e ? "✗" : issues.length ? "!" : "✓";
  console.log(`${status} ${route || "/"}  (${words} words)`);
  for (const [level, msg] of issues) console.log(`    ${level}: ${msg}`);
}

for (const [value, routes] of [...titles, ...descriptions]) {
  if (routes.length > 1) {
    errors++;
    console.log(`✗ duplicate title/description on ${routes.join(", ")}: "${value.slice(0, 70)}"`);
  }
}

console.log(`\n${pages.length} pages · ${errors} errors · ${warnings} warnings`);
process.exit(errors ? 1 : 0);
