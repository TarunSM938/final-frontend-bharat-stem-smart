"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "#FFFFFF",
        marginTop: "-162px",
        paddingTop: "162px",
      }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#E1E1E1 1px, transparent 1px), linear-gradient(90deg, #E1E1E1 1px, transparent 1px)",
          backgroundSize: "48px 32.8px",
        }}
      />

      {/* Blur strip – orange top */}
      <div
        className="absolute top-0 left-0 w-full pointer-events-none z-0"
        style={{ height: "102px", background: "rgba(246, 132, 31, 0.5)", filter: "blur(127px)" }}
      />

      {/* Blur strip – blue middle */}
      <div
        className="absolute left-0 pointer-events-none z-0"
        style={{ top: "306px", width: "97%", height: "102px", background: "rgba(25, 111, 172, 0.5)", filter: "blur(127px)" }}
      />

      {/* Blur strip – green bottom */}
      <div
        className="absolute left-0 pointer-events-none z-0"
        style={{ top: "612px", width: "99%", height: "102px", background: "rgba(22, 154, 76, 0.5)", filter: "blur(127px)" }}
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 mx-auto px-6 py-16 mt-16 md:px-12 md:py-24 md:mt-24"
        style={{ maxWidth: "1344px" }}
      >
        {/* Left column */}
        <div className="flex flex-col items-center md:items-start gap-8 w-full md:max-w-xl text-center md:text-left">
          {/* Badge */}
          <div
            className="flex items-center justify-center px-4 py-1.5"
            style={{ background: "#169A4C", borderRadius: "8px" }}
          >
            <span
              className="text-white uppercase"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", letterSpacing: "-0.005em" }}
            >
              About Us
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 4vw, 56px)",
              lineHeight: "100%",
              letterSpacing: "-0.015em",
              color: "#2C2B2B",
              margin: 0,
            }}
          >
            Building India's Innovation &amp; Generation
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "21px",
              lineHeight: "120%",
              letterSpacing: "-0.015em",
              color: "#2C2B2B",
              margin: 0,
            }}
          >
            We design, install, and manage fully equipped STEM labs with robotics, electronics, coding, curriculum, and a trained teacher — everything included.
          </p>
        </div>

        {/* Right column — robo.png fully visible, no cropping */}
        {/*
          KEY FIX:
          - Removed fixed height + fill + object-cover (was cropping the image)
          - Using width/height with h-auto so Next.js Image renders at natural aspect ratio
          - objectFit: "contain" ensures nothing gets clipped even if aspect ratio differs
        */}
        <div className="flex-shrink-0 w-full md:w-[400px]">
          <Image
            src="/about/robo.png"
            alt="STEM Programs"
            width={452}
            height={520}
            className="w-full h-auto"
            style={{
              borderRadius: "20px",
              objectFit: "contain",
              display: "block",
            }}
            priority
          />
        </div>
      </div>
    </section>
  );
}