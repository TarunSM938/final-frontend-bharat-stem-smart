"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// ─── Background photo grid ─────────────────────────────────────────────────
// All pulled from /programs/ folder — update paths to match your actual files
const BG_PHOTOS = [
  "/programs/p1.jpeg",
  "/programs/p3.jpeg",
  "/programs/p4.jpeg",
  "/programs/p5.jpeg",
  "/programs/p6.jpeg",
  "/programs/p8.jpeg",
  "/programs/p10.jpeg",
  "/programs/p7.jpeg",
  "/programs/p9.jpg",
  "/programs/p10.jpg",
  "/programs/p7.jpeg",
  "/programs/p7.jpeg",
];

// Grid layout: each tile has a column-span and row-span
// 4-column, 3-row grid — some tiles are 1×1, some are 2×1 or 1×2 for variety
const TILES = [
  { col: "1 / 3", row: "1 / 2" },  // wide  top-left
  { col: "3 / 4", row: "1 / 2" },  // normal
  { col: "4 / 5", row: "1 / 3" },  // tall  right
  { col: "1 / 2", row: "2 / 3" },  // normal
  { col: "2 / 4", row: "2 / 3" },  // wide  middle
  { col: "1 / 2", row: "3 / 4" },  // normal
  { col: "2 / 3", row: "3 / 4" },  // normal
  { col: "3 / 5", row: "3 / 4" },  // wide  bottom-right
];

function PhotoGrid() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // staggered fade-in on mount
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridTemplateRows: "repeat(3, 1fr)",
        gap: "6px",
        width: "100%",
        height: "100%",
      }}
    >
      {TILES.map((tile, i) => (
        <div
          key={i}
          style={{
            gridColumn: tile.col,
            gridRow: tile.row,
            borderRadius: "12px",
            overflow: "hidden",
            position: "relative",
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.94)",
            transition: `opacity 0.6s ease ${i * 60}ms, transform 0.6s cubic-bezier(0.34,1.1,0.64,1) ${i * 60}ms`,
          }}
        >
          <Image
            src={BG_PHOTOS[i % BG_PHOTOS.length]}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {/* subtle dark vignette on each tile */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.22) 100%)",
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default function ProgramsHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#FFFFFF", marginTop: "-162px", paddingTop: "162px" }}
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

      {/* Blur strips */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-0" style={{ height: "102px", background: "rgba(246, 132, 31, 0.5)", filter: "blur(127px)" }} />
      <div className="absolute left-0 pointer-events-none z-0" style={{ top: "306px", width: "97%", height: "102px", background: "rgba(25, 111, 172, 0.5)", filter: "blur(127px)" }} />
      <div className="absolute left-0 pointer-events-none z-0" style={{ top: "612px", width: "99%", height: "102px", background: "rgba(22, 154, 76, 0.5)", filter: "blur(127px)" }} />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 mx-auto px-6 py-16 mt-16 md:px-12 md:py-24 md:mt-24"
        style={{ maxWidth: "1344px" }}
      >
        {/* ── Left: text ── */}
        <div className="flex flex-col items-center md:items-start gap-8 w-full md:max-w-xl text-center md:text-left flex-shrink-0">
          <div className="flex items-center justify-center px-4 py-1.5" style={{ background: "#169A4C", borderRadius: "8px" }}>
            <span className="text-white uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", letterSpacing: "-0.005em" }}>
              OUR PROGRAMS
            </span>
          </div>

          <h1 style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "100%", letterSpacing: "-0.015em", color: "#2C2B2B", margin: 0 }}>
            Complete STEM Programs for Students &amp; Schools
          </h1>

          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21px", lineHeight: "120%", letterSpacing: "-0.015em", color: "#2C2B2B", margin: 0 }}>
            Hands-on STEM education designed for modern classrooms and future-ready learning.
          </p>
        </div>

        {/* ── Right: photo mosaic grid ── */}
        {/* Desktop: fixed 520×400, hidden overflow so tiles don't bleed */}
        <div
          className="hidden md:block flex-shrink-0"
          style={{ width: "520px", height: "400px" }}
        >
          <PhotoGrid />
        </div>

        {/* Mobile: 2-col simple grid (no complex spans) */}
        <div className="md:hidden w-full grid grid-cols-2 gap-2" style={{ height: "260px" }}>
          {BG_PHOTOS.slice(0, 4).map((src, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden"
              style={{
                opacity: 1,
                height: "120px",
              }}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="50vw" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.2) 100%)" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade so the section blends into the next */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none z-10"
        style={{ height: "80px", background: "linear-gradient(to bottom, transparent, #FFFFFF)" }}
      />
    </section>
  );
}