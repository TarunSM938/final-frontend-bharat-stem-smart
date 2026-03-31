const steps = [
  { number: "01", title: "Free Consultation & Needs Assessment", description: "We visit your school, understand your goals, check space, and suggest the best STEM lab plan. No cost. No obligation.", dot: "#F6841F", bg: "rgba(246, 132, 31, 0.2)", left: 48.77, top: 0, rotate: "7.22deg" },
  { number: "02", title: "Customised Proposal & Planning", description: "You receive a complete plan with lab design, equipment list, curriculum, timeline, and pricing. Clear. Transparent. Tailored.", dot: "#196FAC", bg: "rgba(25, 111, 172, 0.2)", left: 723, top: 233.53, rotate: "-7.74deg" },
  { number: "03", title: "Lab Setup & Installation (Weeks 3–6)", description: "We handle full lab setup — furniture, kits, software, safety, and testing. Ready-to-use STEM lab in a few weeks.", dot: "#169A4C", bg: "rgba(22, 154, 76, 0.2)", left: 57.12, top: 525.16, rotate: "7.22deg" },
  { number: "04", title: "Trained STEM Teacher Provided by Us", description: "We provide our own trained STEM teacher for your school. No hiring. No training. No extra workload for your staff.", dot: "#F6841F", bg: "rgba(246, 132, 31, 0.2)", left: 668.5, top: 781.12, rotate: "-7.74deg" },
  { number: "05", title: "Launch & Ongoing Support (Week 8+)", description: "We help you launch the lab and provide continuous support, updates, and assistance whenever needed.", dot: "#196FAC", bg: "#DDEAF3", left: 57.12, top: 1045.16, rotate: "7.22deg" },
];

const lines = [
  { width: 747.31, left: 183, top: 220, rotate: "17.68deg" },
  { width: 725.29, left: 231, top: 668, rotate: "30.49deg" },
  { width: 681.98, left: 253, top: 876, rotate: "-38.98deg" },
  { width: 725.29, left: 299.44, top: 1324.64, rotate: "-34.35deg" },
];

// ── Original desktop StepCard — unchanged ─────────────────────────────────────
function StepCard({ step }: { step: typeof steps[0] }) {
  return (
    <div
      style={{
        position: "absolute",
        left: step.left,
        top: step.top,
        width: "384px",
        transform: `rotate(${step.rotate})`,
        background: "#FFFFFF",
        borderRadius: "20px",
        boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "10px",
        padding: "14px 14px 10px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "rgba(212,212,212,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: step.dot }} />
      </div>
      <div style={{ alignSelf: "stretch", background: step.bg, borderRadius: "20px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div style={{ display: "inline-flex", alignItems: "flex-start", gap: "24px", alignSelf: "stretch" }}>
          <div style={{ flex: 1, display: "inline-flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "48px", lineHeight: "58.3px", color: "#000000" }}>{step.number}</span>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px", alignSelf: "stretch" }}>
              <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "30px", lineHeight: "40px", color: "#2C2B2B", margin: 0, alignSelf: "stretch" }}>{step.title}</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "17.5px", lineHeight: "26px", color: "#2C2B2B", opacity: 0.6, margin: 0, alignSelf: "stretch" }}>{step.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Mobile StepCard — flat, no rotation, no absolute positioning ──────────────
function MobileStepCard({ step }: { step: typeof steps[0] }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: "20px",
        boxShadow: "0px 4px 4px rgba(0,0,0,0.15)",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      {/* Dot indicator */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(212,212,212,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: step.dot }} />
        </div>
        <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "32px", lineHeight: "1", color: "#000000" }}>{step.number}</span>
      </div>
      {/* Content */}
      <div style={{ background: step.bg, borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
        <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "20px", lineHeight: "28px", color: "#2C2B2B", margin: 0 }}>{step.title}</h3>
        <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "15px", lineHeight: "24px", color: "#2C2B2B", opacity: 0.7, margin: 0 }}>{step.description}</p>
      </div>
    </div>
  );
}

export default function ImplementationProcess() {
  return (
    // ↓ padding moved to className; lg+ restores original 180px 0 204px
    <section className="bg-[#FAFAFA] py-16 lg:py-[180px] lg:pb-[204px]">
      {/* ↓ inner padding moved to className; lg+ restores 0 48px */}
      <div className="max-w-[1179px] mx-auto px-4 lg:px-[48px]">

        {/* Header — ↓ flex-col on mobile; original side-by-side + fixed height on desktop */}
        {/* ↓ remove fixed height:128px and mb:121px on mobile */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start w-full mb-10 lg:mb-[121px] lg:h-[128px] gap-6 lg:gap-0">

          {/* Left: tag + heading — ↓ w-full on mobile; 577px on desktop */}
          <div className="w-full lg:w-[577px] flex flex-col items-start gap-6">
            <div style={{ display: "inline-flex", alignItems: "center", height: "20px", alignSelf: "stretch" }}>
              <span style={{ fontFamily: "'IBM Plex Sans Condensed', sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", color: "#27272A", width: "290px", textAlign: "center" }}>
                A simple, structured, and risk-free process.
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "3px", marginLeft: "4px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#F6841F", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#196FAC", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#169A4C", display: "inline-block" }} />
              </div>
            </div>
            {/* ↓ responsive font; lg+ restores 48px */}
            <h2
              className="text-[30px] lg:text-[48px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, lineHeight: "1.15", color: "#2C2B2B", margin: 0, alignSelf: "stretch" }}
            >
              Implementation process
            </h2>
          </div>

          {/* Right: subtitle */}
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start", gap: "24px" }}>
            <p
              className="whitespace-normal lg:whitespace-nowrap"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "20px", lineHeight: "32px", color: "#2C2B2B", margin: 0, width: "280px" }}
            >
              From Consultation to Launch in 6-8 Weeks
            </p>
          </div>
        </div>

        {/* ── MOBILE: vertical card list — hidden on lg+ ── */}
        <div className="flex flex-col gap-4 lg:hidden">
          {steps.map((step) => (
            <MobileStepCard key={step.number} step={step} />
          ))}
        </div>

        {/* ── DESKTOP: original absolute-positioned canvas — hidden on mobile ── */}
        <div className="hidden lg:block" style={{ position: "relative", width: "1163px", height: "1450px" }}>
          {/* Dashed connector lines — unchanged */}
          <svg viewBox="0 0 1163 1450" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", top: 0, left: 0, width: "1163px", height: "1450px", zIndex: 0 }}>
            {lines.map((l, i) => {
              const rad = (parseFloat(l.rotate) * Math.PI) / 180;
              const x2 = l.left + l.width * Math.cos(rad);
              const y2 = l.top + l.width * Math.sin(rad);
              return (
                <line key={i} x1={l.left} y1={l.top} x2={x2} y2={y2}
                  stroke="#C7C0C0" strokeWidth="3" strokeDasharray="7 7" strokeLinecap="round" />
              );
            })}
          </svg>
          {/* Step cards — unchanged */}
          <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
            {steps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}