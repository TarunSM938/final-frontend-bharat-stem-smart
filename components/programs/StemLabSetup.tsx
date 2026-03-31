"use client";

const cards = [
  { number: "01", title: "Turnkey STEM Lab with Equipment & Curriculum", borderColor: "#196FAC" },
  { number: "02", title: "Our Trained STEM Teacher at Your School", borderColor: "#F6841F" },
  { number: "03", title: "Full Setup, Training & Ongoing Support", borderColor: "#169A4C" },
];

export default function StemLabSetup() {
  return (
    // ↓ padding moved to className; lg+ restores original 176px vertical, 10px horizontal
    <section className="bg-white pt-16 pb-24 px-4  lg:px-[10px]">
      <div className="mx-auto" style={{ maxWidth: "1240px" }}>

        {/* Header Row */}
        {/* ↓ flex-col on mobile; original flex-row justify-between on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-0 mb-10 lg:mb-12">

          {/* Left: tag + heading — ↓ w-full on mobile; 657px on desktop */}
          <div className="w-full lg:w-[657px]">
            {/* Tagline + dots — unchanged */}
            <div className="flex items-center gap-1 mb-6">
              <span style={{ fontFamily: "IBM Plex Sans Condensed", fontSize: "14px", fontWeight: 500, color: "#27272A" }}>
                STEM Lab setup
              </span>
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "#F6841F" }} />
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "#196FAC" }} />
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "#169A4C" }} />
            </div>

            {/* Heading — ↓ responsive font size; lg+ restores 48px */}
            <h2
              className="text-[30px] lg:text-[48px]"
              style={{ fontFamily: "Inter", fontWeight: 600, lineHeight: "1.15", color: "#27272A", margin: 0 }}
            >
              Complete STEM Lab Setup<br />for Schools
            </h2>
          </div>

          {/* Right: subtitle — stacks below on mobile */}
          <div className="flex items-end">
            <p style={{ fontFamily: "Inter", fontSize: "20px", fontWeight: 400, lineHeight: "32px", color: "#27272A", margin: 0, textAlign: "right" }}>
              Transform Your School with a Modern STEM Lab.
            </p>
          </div>
        </div>

        {/* Cards — ↓ flex-col on mobile; original flex-row on desktop */}
        <div className="flex flex-col lg:flex-row lg:justify-start lg:items-stretch gap-4 lg:gap-[32px]">
          {cards.map((card) => (
            <div
              key={card.number}
              // ↓ w-full on mobile; flex-1 on desktop (from inline style)
              className="w-full lg:flex-1"
              style={{
                borderRadius: "20px",
                borderTop: "1px solid #000000",
                borderLeft: "1px solid #000000",
                borderRight: "1px solid #000000",
                borderBottom: `4px solid ${card.borderColor}`,
                padding: "24px",
                display: "flex",
                alignItems: "flex-start",
                gap: "32px",
              }}
            >
              <span style={{ color: "#27272A", fontFamily: "Poppins, sans-serif", fontSize: "24px", fontWeight: 600, lineHeight: "28px", flexShrink: 0 }}>
                {card.number}
              </span>
              <span style={{ flex: 1, color: "#27272A", fontFamily: "Poppins, sans-serif", fontSize: "24px", fontWeight: 600, lineHeight: "28px" }}>
                {card.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}