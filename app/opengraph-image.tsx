import { ImageResponse } from "next/og";

export const alt =
  "MGWebs — Faster websites that win you more customers. Web design and speed fixes in Dublin.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const glow = (color: string) =>
  `radial-gradient(circle at center, ${color} 0%, rgba(255,255,255,0) 70%)`;

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
          position: "relative",
          background: "#ffffff",
          color: "#1D1D1F",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -260,
            left: -220,
            width: 720,
            height: 720,
            background: glow("rgba(214,54,63,0.22)"),
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -280,
            right: -220,
            width: 760,
            height: 760,
            background: glow("rgba(67,56,242,0.22)"),
          }}
        />
        <div style={{ fontSize: 34, letterSpacing: -0.5 }}>MGWebs</div>
        <div
          style={{
            marginTop: 36,
            fontSize: 78,
            lineHeight: 1.1,
            letterSpacing: -2,
            textAlign: "center",
            maxWidth: 960,
          }}
        >
          Faster websites that win you more customers.
        </div>
        <div style={{ marginTop: 36, fontSize: 28, color: "#5E5E63" }}>
          Web design & speed fixes in Dublin
        </div>
      </div>
    ),
    size,
  );
}
