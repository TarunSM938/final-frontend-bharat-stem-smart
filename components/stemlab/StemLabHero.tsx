import Image from "next/image";

export default function StemLabHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#FFFFFF", marginTop: "-162px", paddingTop: "162px" }}
    >
      {/* Grid background — unchanged */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#E1E1E1 1px, transparent 1px), linear-gradient(90deg, #E1E1E1 1px, transparent 1px)",
          backgroundSize: "48px 32.8px",
        }}
      />

      {/* Blur strips — unchanged */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-0" style={{ height: "102px", background: "rgba(246, 132, 31, 0.5)", filter: "blur(127px)" }} />
      <div className="absolute left-0 pointer-events-none z-0" style={{ top: "306px", width: "97%", height: "102px", background: "rgba(25, 111, 172, 0.5)", filter: "blur(127px)" }} />
      <div className="absolute left-0 pointer-events-none z-0" style={{ top: "612px", width: "99%", height: "102px", background: "rgba(22, 154, 76, 0.5)", filter: "blur(127px)" }} />

      {/* Content */}
      <div
        // ↓ mobile: flex-col, px-6, py-16, mt-16; md+: restores original flex-row px-12 py-24 mt-24
        className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 mx-auto px-6 py-16 mt-16 md:px-12 md:py-24 md:mt-24"
        style={{ maxWidth: "1344px" }}
      >
        {/* Left column */}
        {/* ↓ mobile: full width, centered text; md+: original items-start max-w-xl */}
        <div className="flex flex-col items-center md:items-start gap-8 w-full md:max-w-xl text-center md:text-left">

          {/* Badge — unchanged */}
          <div className="flex items-center justify-center px-4 py-1.5" style={{ background: "#169A4C", borderRadius: "0px" }}>
            <span className="text-white uppercase tracking-tight" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", letterSpacing: "-0.005em" }}>
              STEM LAB SETUP FOR SCHOOLS
            </span>
          </div>

          {/* Heading — unchanged (already uses clamp) */}
          <h1 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "100%", letterSpacing: "-0.015em", color: "#2C2B2B" }}>
            Transform Your School with a World-Class STEM Lab
          </h1>

          {/* Subtext — unchanged */}
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21px", lineHeight: "120%", letterSpacing: "-0.015em", color: "#2C2B2B" }}>
            We design, install, and manage fully equipped STEM labs with robotics, electronics, coding, curriculum, and a trained teacher — everything included.
          </p>

          {/* Buttons — ↓ wrap on very small screens */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
            <button
              className="uppercase font-semibold text-white transition-opacity hover:opacity-90"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "16px", letterSpacing: "-0.015em", background: "#F6841F", borderRadius: "8px", padding: "14px 28px", border: "none", cursor: "pointer" }}
            >
              Get a Lab Proposal
            </button>
            <button
              className="uppercase font-semibold transition-opacity hover:opacity-80"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "16px", letterSpacing: "-0.015em", background: "transparent", border: "1px solid #2C2B2B", borderRadius: "8px", padding: "13px 26px", color: "#2C2B2B", cursor: "pointer" }}
            >
              Book a School Visit
            </button>
          </div>
        </div>

        {/* Right column – hero image */}
        {/* ↓ mobile: full width fluid, auto height, no overflow; md+: restores fixed 390×367 */}
        <div className="relative flex-shrink-0 w-full md:w-[390px] overflow-hidden md:overflow-visible" style={{ height: "280px" }}>

          {/* Main image */}
          {/* ↓ mobile: w-full positioned normally; md+: restores original absolute right-0 top-[8px] 390×367 */}
          <div
            className="absolute overflow-hidden w-full md:w-[390px] md:right-0 md:top-[8px]"
            style={{ height: "100%", borderRadius: "20px" }}
          >
            <Image src="/stemlab/hero.jpg" alt="STEM Lab" fill className="object-cover" style={{ filter: "brightness(0.8)" }} />
          </div>

          {/* Floating labels — hidden on mobile (they use negative left offsets that bleed off screen) */}
          {/* md+: restored exactly as original */}
          <div
            className="hidden md:flex absolute items-center justify-center px-4 py-2 z-10"
            style={{ background: "#FFFFFF", boxShadow: "0px 4px 4px rgba(246, 132, 31, 0.5)", borderRadius: "8px", top: "0px", left: "-80px", whiteSpace: "nowrap" }}
          >
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "15px", color: "#000000", letterSpacing: "-0.005em" }}>
              4–6 Week Installation
            </span>
          </div>

          <div
            className="hidden md:flex absolute items-center justify-center px-4 py-2 z-10"
            style={{ background: "#2C2B2B", boxShadow: "0px 4px 4px rgba(22, 154, 76, 0.5)", borderRadius: "8px", bottom: "90px", left: "-70px", whiteSpace: "nowrap" }}
          >
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "15px", color: "#FFFFFF", letterSpacing: "-0.005em" }}>
              Teacher Provided
            </span>
          </div>

          <div
            className="hidden md:flex absolute items-center justify-center px-4 py-2 z-10"
            style={{ background: "#196FAC", boxShadow: "0px 4px 4px rgba(246, 132, 31, 0.1)", borderRadius: "8px", bottom: "0px", right: "-10px", whiteSpace: "nowrap" }}
          >
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "15px", color: "#FFFFFF", letterSpacing: "-0.005em" }}>
              Full Support Included
            </span>
          </div>

          {/* ↓ Mobile-only: floating labels as a simple row beneath image */}
          <div className="md:hidden absolute bottom-3 left-0 right-0 flex flex-wrap justify-center gap-2 px-2 z-10">
            <span style={{ background: "#FFFFFF", boxShadow: "0px 4px 4px rgba(246, 132, 31, 0.5)", borderRadius: "8px", padding: "6px 12px", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", color: "#000000" }}>
              4–6 Week Installation
            </span>
            <span style={{ background: "#2C2B2B", boxShadow: "0px 4px 4px rgba(22, 154, 76, 0.5)", borderRadius: "8px", padding: "6px 12px", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", color: "#FFFFFF" }}>
              Teacher Provided
            </span>
            <span style={{ background: "#196FAC", borderRadius: "8px", padding: "6px 12px", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "13px", color: "#FFFFFF" }}>
              Full Support Included
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}