import Image from "next/image";

const cards = [
  { icon: "/icons/time.png", iconColor: "#196FAC", title: "We Respond Within 24 Hours", body: "Every message is reviewed by a real team member — not a bot. We usually respond within a few hours, and always within 24 hours", borderColor: "#196FAC" },
  { icon: "/icons/message.png", iconColor: "#F6841F", title: "Free Consultation Included", body: "your first call or meeting is completely free. We understand your needs, suggest solutions, and answer all questions — with no obligation.", borderColor: "#F6841F" },
  { icon: "/icons/unlock.png", iconColor: "#169A4C", title: "No Pressure, No Commitment", body: "We believe in long-term partnerships, not hard selling. Take your time, explore options, and decide when you're ready.", borderColor: "#169A4C" },
];

export default function StemLabSetupSection() {
  return (
    // ↓ fixed height: 804px + inline padding removed; replaced with responsive className
    // lg+: restores original padding 180px 10px and exact layout
    <section
      className="w-full py-16 px-4 lg:py-[180px] lg:px-[10px] bg-[#FAFAFA] box-border flex justify-between items-start"
    >
      {/* Inner container — ↓ w-full on mobile; 1139px on desktop */}
      <div className="w-full lg:w-[1139px] mx-auto flex flex-col items-start gap-12 lg:gap-[70px]">

        {/* Header row — ↓ flex-col on mobile; original flex-row justify-between on desktop */}
        <div className="flex flex-col lg:flex-row lg:w-[1139px] lg:justify-between lg:items-start gap-6 lg:gap-0 w-full">

          {/* Left — label + heading — ↓ w-full on mobile; 657px on desktop */}
          <div className="w-full lg:w-[657px] flex flex-col justify-start items-start gap-6">

            {/* Label row — unchanged */}
            <div style={{ height: "20px", display: "inline-flex", justifyContent: "flex-start", alignItems: "center" }}>
              <span style={{ color: "#2C2B2B", fontFamily: "IBM Plex Sans Condensed, sans-serif", fontSize: "14px", fontWeight: 500, lineHeight: "20px", whiteSpace: "nowrap" }}>
                STEM Lab setup
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "3px", marginLeft: "4px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#F6841F" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#196FAC" }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#169A4C" }} />
              </div>
            </div>

            {/* Heading — ↓ responsive font; lg+ restores 48px */}
            <h2
              className="text-[28px] lg:text-[48px]"
              style={{ color: "#2C2B2B", fontFamily: "Inter, sans-serif", fontWeight: 600, lineHeight: "1.15", letterSpacing: "-0.72px", margin: 0, alignSelf: "stretch" }}
            >
              Complete STEM Lab Setup for Schools
            </h2>
          </div>

          {/* Right — subtext — unchanged */}
          <p style={{ color: "#2C2B2B", fontFamily: "Inter, sans-serif", fontSize: "21px", fontWeight: 400, lineHeight: "150%", letterSpacing: "-0.315px", margin: 0 }}>
            Transform Your School with a Modern STEM Lab.
          </p>
        </div>

        {/* Cards row — ↓ flex-col on mobile; original flex-row on desktop */}
        <div className="w-full flex flex-col lg:flex-row lg:justify-start lg:items-start gap-4 lg:gap-[8px]">
          {cards.map((card) => (
            <div
              key={card.title}
              // ↓ w-full on mobile; flex-1 on desktop
              className="w-full lg:flex-1"
              style={{ borderRadius: "20px", outline: "1px solid #000000", outlineOffset: "-1px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", overflow: "hidden", borderBottom: `4px solid ${card.borderColor}` }}
            >
              <div style={{ alignSelf: "stretch", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                  <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>

                    {/* Icon + Title — unchanged */}
                    <div style={{ alignSelf: "stretch", display: "inline-flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                      <div style={{ flex: 1, display: "flex", justifyContent: "flex-start", alignItems: "flex-start", gap: "8px" }}>
                        <div style={{ width: "24px", height: "24px", flexShrink: 0, overflow: "hidden", position: "relative" }}>
                          <Image src={card.icon} alt={card.title} width={24} height={24} style={{ objectFit: "contain" }} />
                        </div>
                        <h3 style={{ flex: 1, color: card.iconColor, fontFamily: "Poppins, sans-serif", fontSize: "24px", fontWeight: 600, lineHeight: "28px", margin: 0 }}>
                          {card.title}
                        </h3>
                      </div>
                    </div>

                    {/* Body — unchanged */}
                    <p style={{ alignSelf: "stretch", color: "#2C2B2B", fontFamily: "Inter, sans-serif", fontSize: "18px", fontWeight: 400, lineHeight: "28px", margin: 0 }}>
                      {card.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}