"use client";

export default function ProgramsCTA() {
  return (
    <section
      // ↓ fixed height: 384px removed from inline — causes content to overflow on mobile
      // lg+ restores via className; other inline styles kept exactly
      className="w-full relative overflow-hidden flex flex-col justify-start items-start gap-[208px] box-border min-h-[384px] lg:h-[384px]"
    >
      {/* Blur orbs — unchanged */}
      <div style={{ width: "100%", height: "96px", background: "rgba(246, 132, 31, 0.5)", filter: "blur(127.43px)", flexShrink: 0 }} />
      <div style={{ width: "100%", height: "96px", background: "rgba(25, 111, 172, 0.5)", filter: "blur(127.43px)", flexShrink: 0 }} />
      <div style={{ width: "100%", height: "96px", background: "rgba(22, 154, 76, 0.5)", filter: "blur(127.43px)", flexShrink: 0 }} />

      {/* Grid overlay — unchanged */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 1,
          display: "flex", justifyContent: "center", alignItems: "center",
          // ↓ add padding so content doesn't touch edges on narrow screens
          padding: "40px 16px",
        }}
      >
        {/* ↓ fixed 888px → full-width on mobile */}
        <div className="w-full lg:w-[888px] flex flex-col justify-start items-center gap-8 lg:gap-[32px]">

          {/* Heading + subtitle */}
          <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", gap: "8px" }}>
            {/* ↓ responsive font size; lg+ restores 36px */}
            <h2
              className="text-[26px] lg:text-[36px]"
              style={{ alignSelf: "stretch", textAlign: "center", color: "#27272A", fontFamily: "Poppins, sans-serif", fontWeight: 700, lineHeight: "1.2", margin: 0 }}
            >
              Start Your School&apos;s Innovation Journey
            </h2>
            {/* ↓ responsive font size; lg+ restores 20px */}
            <p
              className="text-[16px] lg:text-[20px]"
              style={{ alignSelf: "stretch", textAlign: "center", color: "#27272A", fontFamily: "Inter, sans-serif", fontWeight: 400, lineHeight: "28px", margin: 0 }}
            >
              Book a demo and see how hands-on STEM learning can transform your classroom.
            </p>
          </div>

          {/* Buttons — ↓ flex-wrap on mobile so they don't overflow */}
          <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-[16px]">
            <button
              style={{ height: "44px", padding: "16px 28px", background: "#F97316", borderRadius: "8px", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <span style={{ color: "#FFFFFF", fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: 600, lineHeight: "16px", textTransform: "uppercase" }}>
                BOOK A DEMO
              </span>
            </button>

            <button
              style={{ padding: "14px 24px", background: "transparent", borderRadius: "8px", outline: "1px solid #27272A", outlineOffset: "-1px", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <span style={{ color: "#27272A", fontFamily: "Poppins, sans-serif", fontSize: "16px", fontWeight: 600, lineHeight: "16px", textTransform: "uppercase" }}>
                EXPLORE OUR PROGRAMMES
              </span>
            </button>
          </div>

          {/* Call Us — unchanged */}
          <div style={{ display: "inline-flex", justifyContent: "flex-start", alignItems: "center", gap: "5px" }}>
            <div style={{ width: "24px", height: "24px", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#clip_prog_cta_phone)">
                  <path d="M5.15312 0.769455C4.9125 0.188205 4.27812 -0.12117 3.67188 0.0444546L0.921875 0.794455C0.378125 0.944455 0 1.4382 0 2.0007C0 9.73195 6.26875 16.0007 14 16.0007C14.5625 16.0007 15.0563 15.6226 15.2063 15.0788L15.9563 12.3288C16.1219 11.7226 15.8125 11.0882 15.2312 10.8476L12.2312 9.59758C11.7219 9.38508 11.1313 9.53195 10.7844 9.96008L9.52188 11.5007C7.32188 10.4601 5.54063 8.67883 4.5 6.47883L6.04063 5.21945C6.46875 4.86945 6.61562 4.28195 6.40312 3.77258L5.15312 0.77258V0.769455Z" fill="#F89D4B"/>
                </g>
                <defs>
                  <clipPath id="clip_prog_cta_phone">
                    <path d="M0 0H16V16H0V0Z" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div style={{ width: "192px", display: "inline-flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-end", gap: "1px" }}>
              <span style={{ alignSelf: "stretch", textAlign: "center", color: "#2C2B2B", fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: "24px", letterSpacing: "-0.5px" }}>
                Call Us: +91 98765 43210
              </span>
              <div style={{ width: "120px", height: "0px", outline: "1px solid #000000", outlineOffset: "-0.5px" }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}