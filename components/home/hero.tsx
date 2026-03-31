"use client";

import { useState, useEffect, useRef } from "react";

// ─── image sources ─────────────────────────────────────────────────────────
const IMAGES = [
  "/hero/hero.jpg",
  "/hero/small1.jpg",
  "/hero/small2.jpg",
  "/hero/small3.png",
  "/hero/small4.png",
  "/hero/small5.png",
];

// ─── slot geometry (coords relative to the 607 × 420 groupDiv) ────────────
// slot 0 = big main | slots 1–5 = staggered small column (col starts left:395)
const SLOTS = [
  { top: 0,   left: 0,   w: 361, h: 403, r: "20px", z: 1 },
  { top: 0,   left: 395, w: 74,  h: 73,  r: "10px", z: 2 },
  { top: 89,  left: 509, w: 50,  h: 49,  r: "10px", z: 2 },
  { top: 202, left: 570, w: 37,  h: 35,  r: "10px", z: 2 },
  { top: 284, left: 520, w: 39,  h: 31,  r: "10px", z: 2 },
  { top: 344, left: 416, w: 84,  h: 60,  r: "10px", z: 2 },
];

// ── slot assignment ──────────────────────────────────────────────────────────
// Clockwise   → m increments → slotOf = (i - m + N) % N  (each image shifts to lower slot)
// Anti-clockwise → m decrements → same formula, but m goes down
//   equivalent: keep incrementing m and flip: slotOf = (i + m) % N
// Using the flip form so the interval logic stays the same (+1 each tick).
function slotOf(i: number, m: number) {
  return (i + m) % IMAGES.length;
}

// ─── animated carousel ─────────────────────────────────────────────────────
function RotatingImages() {
  const [tick, setTick] = useState(0);
  const prevTick = useRef(-1);

  useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => {
        prevTick.current = t;
        return t + 1;
      });
    }, 1500);
    return () => clearInterval(id);
  }, []);

  // which image currently occupies slot 0 (the big one)?
  // slotOf(i, tick) == 0  ⟺  (i + tick) % N == 0  ⟺  i == (N - tick % N) % N
  const activeMainIdx = (IMAGES.length - (tick % IMAGES.length)) % IMAGES.length;

  return (
    <>
      {IMAGES.map((src, i) => {
        const slot   = slotOf(i, tick);
        const s      = SLOTS[slot];
        const isMain = slot === 0;
        const justPromoted = isMain && prevTick.current !== -1 && i === activeMainIdx;

        return (
          <div
            key={i}
            style={{
              position:     "absolute",
              top:          s.top,
              left:         s.left,
              width:        s.w,
              height:       s.h,
              borderRadius: s.r,
              zIndex:       s.z,
              overflow:     "hidden",
              transition:
                "top 0.65s cubic-bezier(0.34,1.2,0.64,1)," +
                "left 0.65s cubic-bezier(0.34,1.2,0.64,1)," +
                "width 0.65s cubic-bezier(0.34,1.2,0.64,1)," +
                "height 0.65s cubic-bezier(0.34,1.2,0.64,1)," +
                "border-radius 0.65s ease," +
                "box-shadow 0.65s ease",
              animation: justPromoted
                ? "imgPopIn 0.65s cubic-bezier(0.34,1.56,0.64,1)"
                : undefined,
              boxShadow: isMain
                ? "0 0 0 3px rgba(246,132,31,0.5), 0 10px 36px rgba(0,0,0,0.20)"
                : "none",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        );
      })}

      <style>{`
        @keyframes imgPopIn {
          0%   { transform: scale(0.78); }
          55%  { transform: scale(1.05); }
          100% { transform: scale(1);    }
        }
      `}</style>
    </>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────
export default function Hero() {
  return (
    <>
      {/* ══════════════════════════ HERO ════════════════════════════════════
          Navbar is fixed: py-9 (36px) + 90px pill + 36px = 162px total.
          Figma shows 106px gap after navbar → paddingTop 200px on desktop.
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        className="w-full"
        style={{
          backgroundColor: "#fffefb",
          backgroundImage:
            "linear-gradient(rgba(44,43,43,0.06) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(44,43,43,0.06) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div
          className="max-w-[1296px] w-full mx-auto flex flex-col lg:flex-row justify-between items-center px-[48px] pb-[147px] gap-10 lg:gap-5"
          style={{
            // Navbar (fixed): py-9 (36px) top + 90px pill + 36px bottom = 162px total height
            // Figma shows 106px breathing room after navbar → 162 + 38 ≈ 200px
            // Mobile navbar ≈ 122px → 150px feels right
            paddingTop: "clamp(150px, 15vw, 200px)",
          }}
        >

          {/* ── LEFT ──────────────────────────────────────────────────────── */}
          <div
            className="w-full lg:w-[621px] flex flex-col items-center lg:items-start text-center lg:text-left flex-shrink-0"
            style={{ color: "#2c2b2b" }}
          >
            <span
              className="text-white text-[13px] font-semibold uppercase tracking-wide rounded-lg inline-flex items-center justify-center mb-4"
              style={{ backgroundColor: "#169a4c", padding: "6px 14px", lineHeight: "18px", fontFamily: "Inter, sans-serif" }}
            >
              Trusted by 50+ Schools
            </span>

            <h1
              className="text-[36px] sm:text-[46px] lg:text-[56px] leading-[1] mb-4 text-[#2c2b2b] self-stretch"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, letterSpacing: "-0.01em" }}
            >
              Empowering India Through Hands-On STEM Learning
            </h1>

            <p
              className="text-[21px] text-[#2c2b2b] mb-6 self-stretch"
              style={{ fontFamily: "Inter, sans-serif", letterSpacing: "-0.01em", lineHeight: "100%" }}
            >
              Practical Learning for the Next Generation
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start" style={{ fontFamily: "Poppins, sans-serif" }}>
              <button
                className="text-white font-semibold uppercase cursor-pointer border-none rounded-lg"
                style={{ backgroundColor: "#f6841f", height: "46px", padding: "16px 28px", fontSize: "16px", letterSpacing: "-0.01em", lineHeight: "18px" }}
              >
                Book a free demo
              </button>
              <button
                className="font-semibold uppercase cursor-pointer bg-transparent rounded-lg"
                style={{ color: "#2c2b2b", border: "1px solid #2c2b2b", padding: "14px 26px", fontSize: "16px", letterSpacing: "-0.01em", lineHeight: "18px" }}
              >
                Partner with us
              </button>
            </div>


          </div>

          {/* ── RIGHT desktop — anti-clockwise rotating carousel ─────────── */}
          <div
            className="hidden lg:block relative flex-shrink-0"
            style={{ width: "607px", height: "420px" }}
          >
            <RotatingImages />

            {/* Floating labels — z:10, never participate in animation */}
            <div
              className="absolute flex items-center justify-center text-white font-semibold whitespace-nowrap"
              style={{ top: "40px", left: "-50px", backgroundColor: "#2c2b2b", padding: "8px 15px", borderRadius: "8px", fontSize: "16px", lineHeight: "18px", zIndex: 10, boxShadow: "0px 4px 4px rgba(22,154,76,0.5)" }}
            >
              IoT &amp; Arduino
            </div>

            <div
              className="absolute flex items-center justify-center text-white font-semibold whitespace-nowrap"
              style={{ top: "343px", left: "35px", backgroundColor: "#196fac", padding: "8px 15px", borderRadius: "8px", fontSize: "16px", lineHeight: "18px", zIndex: 10, boxShadow: "0px 4px 4px rgba(31,111,191,0.5)" }}
            >
              Robotics &amp; AI
            </div>

            <div
              className="absolute flex items-center justify-center text-white font-semibold whitespace-nowrap"
              style={{ top: "-50px", left: "200px", backgroundColor: "#196fac", padding: "8px 15px", borderRadius: "8px", fontSize: "16px", lineHeight: "18px", zIndex: 10, boxShadow: "-1px 4px 9px rgba(246,132,31,0.1)" }}
            >
              After school &amp; Competition
            </div>

            <div
              className="absolute flex items-center justify-center font-semibold whitespace-nowrap"
              style={{ top: "261px", left: "343px", backgroundColor: "#fff", color: "#000", padding: "8px 15px", borderRadius: "8px", fontSize: "16px", lineHeight: "18px", zIndex: 10, boxShadow: "0px 4px 4px rgba(246,132,31,0.5)" }}
            >
              STEM Lab setup
            </div>
          </div>

          {/* ── RIGHT mobile — static ──────────────────────────────────────── */}
          <div className="lg:hidden w-full max-w-[400px] mx-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/hero/hero.jpg" alt="students" style={{ width: "100%", height: "auto", borderRadius: "20px", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════ STATS ════════════════════════════════════ */}
      <section>
        <div
          className="w-full grid grid-cols-2 lg:flex lg:justify-between lg:items-center px-8 lg:px-[50px] text-white py-6 lg:py-0 gap-4 lg:gap-0"
          style={{ backgroundColor: "#1f9a4b", minHeight: "100px" }}
        >
          {(
            [
              { value: "10,000+", label: "STUDENTS EMPOWERED"  },
              { value: "50",      label: "SCHOOLS PARTNERED"   },
              { value: "500",     label: "TEACHERS TRAINED"    },
              { value: "2",       label: "YEARS OF INNOVATION" },
            ] as const
          ).map((stat, idx) => (
            <>
              {idx > 0 && (
                <div key={`div-${idx}`} className="hidden lg:block w-px h-[70px] bg-white/60" />
              )}
              <div key={stat.label} className="flex-1 text-center">
                <h2 className="text-[30px] lg:text-[44px] font-bold mb-1 lg:mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {stat.value}
                </h2>
                <p className="text-xs lg:text-sm tracking-widest" style={{ fontFamily: "Inter, sans-serif" }}>
                  {stat.label}
                </p>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
}