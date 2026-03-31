"use client";

import Image from "next/image";

const programs = [
  {
    title: "Robotics &\nIoT & Arduino DIY Program",
    description: "Age-appropriate robotics sets for hands-on building and programming",
    image: "/programs/robotics.jpg",
  },
  {
    title: "IoT & Arduino DIY Program",
    description: "Age-appropriate robotics sets for hands-on building and programming",
    image: "/programs/iot.jpg",
  },
  {
    title: "After-School Programs & Competition Coaching",
    description: "Age-appropriate robotics sets for hands-on building and programming",
    image: "/programs/afterschool.jpg",
  },
];

export default function ChooseYourProgram() {
  return (
    // ↓ padding moved to className; lg+ restores original 176px vertical, 10px horizontal
    <section className="bg-white pt-24 pb-16 px-4  lg:px-[10px]">
      <div className="mx-auto" style={{ maxWidth: "1240px" }}>

        {/* Header Row */}
        {/* ↓ flex-col on mobile; original flex-row justify-between on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-0 mb-10 lg:mb-16">

          {/* Left: tag + heading — ↓ w-full on mobile; 552px on desktop */}
          <div className="w-full lg:w-[552px]">
            {/* Tagline + dots — unchanged */}
            <div className="flex items-center gap-1 mb-6">
              <span style={{ fontFamily: "IBM Plex Sans Condensed", fontSize: "14px", fontWeight: 500, color: "#27272A" }}>
                Our programs
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
              Choose your program
            </h2>
          </div>

          {/* Right: subtitle */}
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p style={{ fontFamily: "Inter", fontSize: "20px", fontWeight: 400, lineHeight: "32px", color: "#27272A", margin: 0, textAlign: "right", maxWidth: "360px" }}>
              A complete end-to-end STEM lab solution for your school.
            </p>
          </div>
        </div>

        {/* Cards Row */}
        {/* ↓ flex-col on mobile; original flex-row on desktop with mt-[64px] */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[12px] mt-0 lg:mt-[64px] lg:justify-start lg:items-start">
          {programs.map((program, index) => (
            <ProgramCard key={index} program={program} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProgramCard({
  program,
}: {
  program: { title: string; description: string; image: string };
}) {
  return (
    // ↓ w-full on mobile; original fixed 384px on desktop
    <div
      className="w-full lg:w-[384px]"
      style={{
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Border box — unchanged */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: "80px",
          borderRadius: "20px",
          outline: "1px solid #000000",
          outlineOffset: "-1px",
          background: "#FFFFFF",
          zIndex: 1,
          transition: "box-shadow 0.3s ease, outline 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0px 0px 0px 3px rgba(246,132,31,1.00)";
          (e.currentTarget as HTMLDivElement).style.outline = "1px solid #F6841F";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          (e.currentTarget as HTMLDivElement).style.outline = "1px solid #000000";
        }}
      />

      {/* Text area — unchanged */}
      <div
        style={{
          alignSelf: "stretch",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "10px",
          minHeight: "160px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h3 style={{ alignSelf: "stretch", textAlign: "center", color: "#27272A", fontFamily: "Inter, sans-serif", fontSize: "20px", fontWeight: 700, lineHeight: "28px", margin: 0, whiteSpace: "pre-line" }}>
          {program.title}
        </h3>
        <p style={{ alignSelf: "stretch", textAlign: "center", color: "#27272A", fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: "24px", margin: 0 }}>
          {program.description}
        </p>
      </div>

      {/* Ghost 1 — unchanged */}
      <div style={{ width: "291px", height: "16px", background: "#D9D9D9", borderRadius: "12px 12px 0 0", alignSelf: "center", position: "relative", zIndex: 2 }} />
      {/* Ghost 2 — unchanged */}
      <div style={{ width: "332px", height: "16px", background: "#E6E6E6", borderRadius: "12px 12px 0 0", alignSelf: "center", position: "relative", zIndex: 2, marginTop: "-2px" }} />

      {/* Image — unchanged */}
      <div
        style={{
          alignSelf: "stretch",
          height: "164px",
          minHeight: "164px",
          maxHeight: "164px",
          position: "relative",
          zIndex: 3,
          borderRadius: "0 0 20px 20px",
          overflow: "hidden",
          marginTop: "-2px",
          flexShrink: 0,
        }}
      >
        <Image src={program.image} alt={program.title} fill sizes="(max-width: 1024px) 100vw, 384px" style={{ objectFit: "cover", objectPosition: "center" }} />
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 4,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 7L7 17M7 17H17M7 17V7" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}