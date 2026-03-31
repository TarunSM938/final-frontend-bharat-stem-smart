"use client";
import Image from "next/image";

const cards = [
  { image: "/stemlab/robotics.jpg", title: "Robotics Kits", description: "Age-appropriate robotics sets for hands-on building and programming", borderColor: "#F6841F" },
  { image: "/stemlab/arduino.jpg", title: "Arduino & IoT Kits", description: "Full sets of Arduino boards, sensors, components, motors, wires, and project manuals for DIY electronics projects.", borderColor: "#1F6FBF" },
  { image: "/stemlab/coding.jpg", title: "Coding Platforms", description: "Access to programming software, learning management system (LMS), and digital curriculum resources.", borderColor: "#169A4C" },
];

// Reusable card — identical markup to the original, extracted to avoid duplication
function IncludedCard({ card, suffix }: { card: typeof cards[0]; suffix: string }) {
  return (
    <div
      key={card.title + suffix}
      className="flex flex-col items-center overflow-hidden"
      style={{ border: "1px solid #000000", borderRadius: "20px", background: "#FFFFFF", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0px 16px 40px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      <div className="relative w-full overflow-hidden" style={{ height: "164px", borderRadius: "20px 20px 0 0" }}>
        <Image src={card.image} alt={card.title} fill className="object-cover" />
      </div>
      <div
        className="flex flex-col items-center justify-center gap-2 px-6 py-6 w-full"
        style={{ borderBottom: `4px solid ${card.borderColor}`, borderRadius: "0 0 20px 20px", flexGrow: 1 }}
      >
        <h3 className="text-center" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "20px", lineHeight: "28px", letterSpacing: "-0.5px", color: "#2C2B2B", margin: 0 }}>
          {card.title}
        </h3>
        <p className="text-center" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "23px", letterSpacing: "-0.5px", color: "#2C2B2B", margin: 0 }}>
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function WhatIsIncluded() {
  return (
    // ↓ padding moved to className; lg+ restores original 180px 159px
    <section
      className="w-full flex flex-col justify-center items-center py-16 px-4 lg:py-[180px] lg:px-[159px]"
      style={{ background: "#FFFFFF", gap: "10px" }}
    >
      <div className="flex flex-col items-start gap-12 w-full" style={{ maxWidth: "1122px" }}>

        {/* Header Row */}
        {/* ↓ flex-col on mobile; original flex-row justify-between on desktop */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start w-full gap-6">

          {/* Left — ↓ w-full on mobile; maxWidth 552px on desktop */}
          <div className="flex flex-col items-start gap-6 w-full lg:max-w-[552px]">
            {/* Tag row — unchanged */}
            <div className="flex flex-row items-center gap-2">
              <span style={{ fontFamily: "IBM Plex Sans Condensed, Inter, sans-serif", fontWeight: 500, fontSize: "14px", lineHeight: "20px", letterSpacing: "-0.15px", color: "#2C2B2B" }}>
                Everything Delivered. Nothing Left Out.
              </span>
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "#F6841F" }} />
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "#196FAC" }} />
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "#169A4C" }} />
            </div>

            {/* Heading — ↓ responsive font; lg+ restores 48px */}
            <h2
              className="text-[30px] lg:text-[48px]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, lineHeight: "100%", letterSpacing: "-0.72px", color: "#2C2B2B", margin: 0 }}
            >
              What's included
            </h2>
          </div>

          {/* Right subtitle — stacks below on mobile; unchanged on desktop */}
          <div className="flex items-center lg:max-w-[570px] lg:self-stretch">
            <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21px", lineHeight: "150%", letterSpacing: "-0.315px", color: "#2C2B2B", margin: 0 }}>
              A complete end-to-end STEM lab solution for your school.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col gap-4 w-full">

          {/* Row 1 — grid already has grid-cols-1 md:grid-cols-3, unchanged */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
            {cards.map((card) => (
              <IncludedCard key={card.title} card={card} suffix="" />
            ))}
          </div>

          {/* Row 2 — unchanged */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
            {cards.map((card) => (
              <IncludedCard key={card.title + "-2"} card={card} suffix="-2" />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}