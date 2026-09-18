import { ImageResponse } from "next/og";

export const alt = "Lim Ze Wei — Software Engineer";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0f14",
          color: "#f3f6f8",
          padding: "74px 82px",
          fontFamily: "Arial, Helvetica, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#8bd3ff",
            fontSize: 25,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase"
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 99,
              background: "#8bd3ff",
              boxShadow: "0 0 50px rgba(139, 211, 255, 0.55)"
            }}
          />
          Software Engineer · Malaysia
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              fontSize: 86,
              lineHeight: 0.98,
              letterSpacing: "-0.045em",
              fontWeight: 800
            }}
          >
            Lim Ze Wei
          </div>

          <div
            style={{
              fontSize: 39,
              lineHeight: 1.15,
              color: "#c8d2dc",
              maxWidth: 1000,
              fontWeight: 500
            }}
          >
            Backend · Integrations · Linux · AI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#9aa7b5",
            fontSize: 23
          }}
        >
          <div>Production systems · APIs · Infrastructure · AI/LLM</div>
          <div style={{ color: "#8bd3ff" }}>limzewei.vercel.app</div>
        </div>
      </div>
    ),
    size
  );
}
