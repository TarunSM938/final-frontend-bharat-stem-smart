"use client";

const features = [
  "Capacity: 60–80 students per batch",
  "25 Robotics Kits + 20 Arduino Kits + IoT Modules",
  "Complete lab furniture and professional setup",
  "2-year curriculum: Grades 6–10",
  "5-day teacher training for 3 teachers",
  "LMS access + digital resources + support",
  "Investment: ₹[Contact for Pricing]",
];

const packages = [
  { id: "basic", name: "Basic", subtitle: "Starting stem", description: "The most popular choice for established schools ready to go all-in on STEM", price: "₹800", popular: false, dark: false, height: "562px" },
  { id: "standard", name: "Standard", subtitle: "STEM Comprehensive", description: "The most popular choice for established schools ready to go all-in on STEM", price: "₹1500", popular: true, dark: true, height: "598px" },
  { id: "basic2", name: "Basic", subtitle: "Starting stem", description: "The most popular choice for established schools ready to go all-in on STEM", price: "₹200", popular: false, dark: false, height: "562px" },
];

function CheckIcon({ dark }: { dark: boolean }) {
  if (dark) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
        <mask id="mask0_1_2982" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
          <path d="M7.99992 14.6666C8.87556 14.6677 9.74278 14.4957 10.5518 14.1606C11.3607 13.8255 12.0955 13.3339 12.7139 12.7139C13.3339 12.0955 13.8255 11.3607 14.1606 10.5518C14.4957 9.74278 14.6677 8.87556 14.6666 7.99992C14.6677 7.12429 14.4957 6.25707 14.1606 5.44809C13.8255 4.63911 13.3339 3.90431 12.7139 3.28592C12.0955 2.66598 11.3607 2.17433 10.5518 1.83923C9.74278 1.50413 8.87556 1.33218 7.99992 1.33326C7.12429 1.33218 6.25707 1.50413 5.44809 1.83923C4.63911 2.17433 3.90431 2.66598 3.28592 3.28592C2.66598 3.90431 2.17433 4.63911 1.83923 5.44809C1.50413 6.25707 1.33218 7.12429 1.33326 7.99992C1.33218 8.87556 1.50413 9.74278 1.83923 10.5518C2.17433 11.3607 2.66598 12.0955 3.28592 12.7139C3.90431 13.3339 4.63911 13.8255 5.44809 14.1606C6.25707 14.4957 7.12429 14.6677 7.99992 14.6666Z" fill="white" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M5.33325 8L7.33325 10L11.3333 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </mask>
        <g mask="url(#mask0_1_2982)"><path d="M0 0H16V16H0V0Z" fill="#169A4C"/></g>
      </svg>
    );
  }
  return (
    <div style={{ position: "relative", width: "20px", height: "20px", flexShrink: 0 }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="9" stroke="#F6841F" strokeWidth="1.5" />
        <path d="M6.5 10L9 12.5L13.5 7.5" stroke="#F6841F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function Packages() {
  return (
    // ↓ padding moved to className; lg+ restores original 176px 128px
    <section
      className="w-full py-16 px-4 lg:py-[176px] lg:px-[128px] box-border flex flex-col items-center overflow-hidden"
      style={{ background: "#F6841F" }}
    >
      <div
        style={{ maxWidth: "1166px", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "48px" }}
      >
        {/* Header — unchanged */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", alignSelf: "stretch" }}>
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "36px", lineHeight: "48px", color: "#FFFFFF", margin: 0, textAlign: "center", alignSelf: "stretch" }}>
            Choose your package
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "24px", lineHeight: "28px", color: "#FFFFFF", margin: 0, textAlign: "center", alignSelf: "stretch" }}>
            Three Packages. One Perfect Fit.
          </p>
        </div>

        {/* Cards row — ↓ flex-col on mobile; original flex-row on desktop */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-6 lg:gap-[20px] w-full">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              // ↓ w-full h-auto on mobile; flex-1 + original fixed height on desktop
              className={`w-full lg:flex-1 h-auto ${pkg.dark ? "lg:h-[598px]" : "lg:h-[562px]"}`}
              style={{
                background: pkg.dark ? "#2C2B2B" : "#FFFFFF",
                borderRadius: "20px",
                outline: `1px solid ${pkg.dark ? "#F6841F" : "#27272A"}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                // ↓ reduced bottom padding on mobile slightly; lg+ matches original
                padding: pkg.dark ? "0 16px 24px" : "0 16px 16px",
                boxSizing: "border-box",
                flexDirection: "row",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-10px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = pkg.dark
                  ? "0px 20px 50px rgba(246, 132, 31, 0.4)"
                  : "0px 20px 50px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* ↓ inner content: w-full on mobile; original 320px on desktop */}
              <div className="w-full lg:w-[320px] flex flex-col items-end gap-[20px]">

                {/* Most Popular badge — unchanged */}
                {pkg.popular && (
                  <div style={{ background: "#169A4C", borderRadius: "8px", padding: "6px 14px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "16px", color: "#FFFFFF", textTransform: "uppercase" }}>
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Card body — ↓ h-auto on mobile; 496px on desktop */}
                <div className="w-full h-auto lg:h-[496px] flex flex-col gap-[16px]">

                  {/* Top section — unchanged */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: pkg.dark ? "16px" : "20px", alignSelf: "stretch" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignSelf: "stretch" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignSelf: "stretch" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignSelf: "stretch" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignSelf: "stretch" }}>
                            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "36px", lineHeight: "32px", color: pkg.dark ? "#FFFFFF" : "#000000", alignSelf: "stretch" }}>{pkg.name}</span>
                            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "24px", lineHeight: "20px", letterSpacing: "-0.015em", color: pkg.dark ? "#FFFFFF" : "#000000", alignSelf: "stretch" }}>{pkg.subtitle}</span>
                          </div>
                          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "28px", color: pkg.dark ? "#FFFFFF" : "#000000", opacity: 0.8, margin: 0, alignSelf: "stretch" }}>{pkg.description}</p>
                        </div>
                      </div>
                      <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "48px", lineHeight: "52.8px", color: pkg.dark ? "#FFFFFF" : "#000000", alignSelf: "stretch" }}>{pkg.price}</span>
                    </div>

                    {/* CTA Button — unchanged */}
                    <button
                      style={{ alignSelf: "stretch", height: "44px", padding: "16px 28px", borderRadius: "8px", background: pkg.dark ? "#F6841F" : "transparent", outline: pkg.dark ? "none" : "1px solid #F6841F", border: "none", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px" }}
                    >
                      <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "16px", lineHeight: "16px", color: pkg.dark ? "#FFFFFF" : "#F6841F", textTransform: "uppercase" }}>
                        REQUEST A PROPOSAL
                      </span>
                    </button>
                  </div>

                  {/* Divider — unchanged */}
                  <div style={{ alignSelf: "stretch", height: "1px", background: pkg.dark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.25)" }} />

                  {/* Feature list — unchanged */}
                  <div style={{ display: "flex", flexDirection: "column", gap: pkg.dark ? "6px" : "4px", alignSelf: "stretch" }}>
                    {features.map((feature, i) => (
                      <div key={i} style={{ display: "inline-flex", alignItems: i === 0 ? "center" : "flex-start", gap: "6px", alignSelf: "stretch" }}>
                        <CheckIcon dark={pkg.dark} />
                        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: i === 0 ? "24px" : "16px", color: pkg.dark ? "#FFFFFF" : "#000000", flex: 1 }}>
                          {feature}
                        </span>
                      </div>
                    ))}
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