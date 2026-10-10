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
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 6, width: 64, height: 64, padding: 12, borderRadius: 16, background: "#2563eb" }}>
              <div style={{ width: 10, height: 18, borderRadius: 3, background: "rgba(255,255,255,0.7)" }} />
              <div style={{ width: 10, height: 28, borderRadius: 3, background: "rgba(255,255,255,0.85)" }} />
              <div style={{ width: 10, height: 40, borderRadius: 3, background: "#fff" }} />
            </div>
            <div style={{ fontSize: 44, fontWeight: 700 }}>{siteConfig.name}</div>
          </div>
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
