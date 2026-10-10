import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 14, padding: 40, background: "#2563eb" }}>
        <div style={{ width: 24, height: 44, borderRadius: 8, background: "rgba(255,255,255,0.7)" }} />
        <div style={{ width: 24, height: 72, borderRadius: 8, background: "rgba(255,255,255,0.85)" }} />
        <div style={{ width: 24, height: 100, borderRadius: 8, background: "#fff" }} />
      </div>
    ),
    size
  );
}
