import { ImageResponse } from "next/og";
import { siteConfig } from "./site";

export const ogSize = { width: 1200, height: 630 };

/**
 * Chat apps (WhatsApp, iMessage, ...) center-crop share images to roughly a square.
 * Everything important stays inside the central 630px (x 285..915) so the crop never cuts text.
 */
const SAFE_WIDTH = 630;

function titleFontSize(title: string): number {
  if (title.length <= 28) return 62;
  if (title.length <= 44) return 54;
  return 48;
}

/** Brand lockup: blue bar-chart tile plus the site name. Shared by the share card and the Pinterest pin. */
function BrandMark({ scale = 1 }: { scale?: number }) {
  const s = (n: number) => Math.round(n * scale);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: s(18) }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: s(6), width: s(64), height: s(64), padding: s(12), borderRadius: s(16), background: "#2563eb" }}>
        <div style={{ width: s(10), height: s(18), borderRadius: s(3), background: "rgba(255,255,255,0.7)" }} />
        <div style={{ width: s(10), height: s(28), borderRadius: s(3), background: "rgba(255,255,255,0.85)" }} />
        <div style={{ width: s(10), height: s(40), borderRadius: s(3), background: "#fff" }} />
      </div>
      <div style={{ fontSize: s(44), fontWeight: 700 }}>{siteConfig.name}</div>
    </div>
  );
}

/** Brand share image: logo, category label, large title and domain, all inside the crop-safe centre. */
export function renderOgCard({ label, title }: { label: string; title: string }): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: SAFE_WIDTH,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 0",
          }}
        >
          <BrandMark />
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#4ade80", textTransform: "uppercase", letterSpacing: 3 }}>{label}</div>
            <div style={{ fontSize: titleFontSize(title), fontWeight: 800, lineHeight: 1.15, display: "flex" }}>{title}</div>
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.75)" }}>capitiro.com</div>
        </div>
      </div>
    ),
    ogSize
  );
}

/** Pinterest pin size: 2:3 portrait. */
export const pinSize = { width: 1000, height: 1500 };

/** Shortens text to at most `max` characters at a word boundary, adding an ellipsis when cut. */
export function truncateText(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const trimmed = (lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut)
    .replace(/[\s,;:.\u2013\u2014-]+$/, "")
    // Don't end on a dangling function word ("...what to pay to be free in").
    .replace(/(\s+(?:a|an|and|at|be|by|for|in|is|of|on|or|the|to|with))+$/i, "");
  return `${trimmed}\u2026`;
}

function pinTitleFontSize(title: string): number {
  if (title.length <= 30) return 92;
  if (title.length <= 50) return 78;
  return 66;
}

/** Pinterest pin (1000x1500): label, big headline, short benefit line and the domain at the bottom. */
export function renderPinCard({ label, title, benefit }: { label: string; title: string; benefit: string }): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "96px 80px 80px",
          background: "linear-gradient(160deg, #0f172a 0%, #1e3a8a 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <BrandMark scale={1.1} />
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ display: "flex", alignSelf: "flex-start", fontSize: 32, fontWeight: 700, color: "#0f172a", background: "#4ade80", borderRadius: 999, padding: "10px 28px", textTransform: "uppercase", letterSpacing: 3 }}>
            {label}
          </div>
          <div style={{ display: "flex", fontSize: pinTitleFontSize(title), fontWeight: 800, lineHeight: 1.12 }}>{title}</div>
          <div style={{ display: "flex", fontSize: 40, lineHeight: 1.4, color: "rgba(255,255,255,0.85)" }}>{truncateText(benefit, 150)}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "2px solid rgba(255,255,255,0.25)", paddingTop: 36 }}>
          <div style={{ display: "flex", fontSize: 42, fontWeight: 700 }}>{new URL(siteConfig.url).host}</div>
          <div style={{ display: "flex", fontSize: 30, color: "rgba(255,255,255,0.7)" }}>Free. No sign-up.</div>
        </div>
      </div>
    ),
    pinSize
  );
}
