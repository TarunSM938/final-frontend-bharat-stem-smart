"use client";

export default function StemLabCTA() {
  return (
    <section
      // ↓ replace inline padding with className so we can make it responsive
      // mobile: px-5 py-16; lg+: restores original padding 80px 48px 72px via inline style
      className="relative overflow-hidden text-center px-5 py-16 lg:px-12"
      style={{
        // ↓ only the non-padding values remain here; padding handled by className above on mobile
        // lg: inline style padding takes over (Tailwind lg: can't override inline styles, so we
        //     keep the inline style and let the className supply mobile-only padding via lower specificity)
        // Solution: use a wrapper approach — inline style is dropped; all padding via className
        background: "linear-gradient(135deg, #fde8d0 0%, #ddeaf5 100%)",
      }}
    >
      {/* ↓ restore desktop top/bottom padding with a Tailwind override */}
      <style>{`@media (min-width: 1024px) { .stem-cta-section { padding: 80px 48px 72px !important; } }`}</style>

      {/* Grid overlay — unchanged */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.055) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content — unchanged */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>

        {/* Heading — unchanged (already uses clamp) */}
        <h2
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(22px, 3vw, 32px)",
            lineHeight: "1.2",
            color: "#1A1A1A",
            margin: "0 0 8px 0",
          }}
        >
          Ready to Build Your School&apos;s STEM Legacy?
        </h2>

        {/* Subtitle — unchanged */}
        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "15px", color: "#2C2B2B", margin: "0 0 28px 0" }}>
          Get a Lab Proposal
        </p>

        {/* Buttons — already have flexWrap: "wrap", unchanged */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
          <button
            style={{
              background: "#F6841F", color: "#FFFFFF", border: "none",
              padding: "14px 28px", borderRadius: "8px",
              fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700,
              cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase", transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#D4700F")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#F6841F")}
          >
            Get a Lab Proposal
          </button>

          <button
            style={{
              background: "#FFFFFF", color: "#2C2B2B", border: "1.5px solid #2C2B2B",
              padding: "13px 28px", borderRadius: "8px",
              fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 700,
              cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase", transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#2C2B2B";
              (e.currentTarget as HTMLButtonElement).style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#FFFFFF";
              (e.currentTarget as HTMLButtonElement).style.color = "#2C2B2B";
            }}
          >
            Book a School Visit
          </button>
        </div>

        {/* Phone row — unchanged */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F6841F" width="15" height="15">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.59.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.59a1 1 0 0 1-.25 1.01z" />
          </svg>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#2C2B2B" }}>
            Call Us:{" "}
            <a href="tel:+919876543210" style={{ color: "#2C2B2B", textDecoration: "none", fontWeight: 600 }}>
              +91 98765 43210
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}