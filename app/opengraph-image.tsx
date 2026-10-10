import { ImageResponse } from "next/og";
import { calculators } from "@/lib/calculators";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} – Free financial calculators`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Default social share image, used by every page that doesn't define its own. */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 6, width: 64, height: 64, padding: 12, borderRadius: 16, background: "#2563eb" }}>
            <div style={{ width: 10, height: 18, borderRadius: 3, background: "rgba(255,255,255,0.7)" }} />
            <div style={{ width: 10, height: 28, borderRadius: 3, background: "rgba(255,255,255,0.85)" }} />
            <div style={{ width: 10, height: 40, borderRadius: 3, background: "#fff" }} />
          </div>
          <div style={{ fontSize: 44, fontWeight: 700 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1, maxWidth: 950 }}>Free financial calculators</div>
          <div style={{ fontSize: 32, color: "rgba(255,255,255,0.75)" }}>
            {calculators.slice(0, 5).map((c) => c.shortTitle).join(" · ")}
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#4ade80" }}>Accurate · Private · No sign-up</div>
      </div>
    ),
    size
  );
}
