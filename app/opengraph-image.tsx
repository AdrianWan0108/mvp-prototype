import { ImageResponse } from "next/og";

export const alt =
  "Motion Vitality Pilates — Pilates & GYROTONIC® studio in Markham";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d5d44 0%, #0c1f19 100%)",
          color: "#ffffff",
          fontFamily: "serif",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -1 }}>
          Motion Vitality Pilates
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "#91d0af",
          }}
        >
          Strong mind starts with a fit body
        </div>
        <div style={{ marginTop: 12, fontSize: 26, opacity: 0.85 }}>
          Polestar-certified · Markham, Ontario
        </div>
      </div>
    ),
    { ...size },
  );
}
