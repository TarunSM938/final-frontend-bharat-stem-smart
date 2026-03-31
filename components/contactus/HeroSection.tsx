"use client";

import { useEffect, useState } from "react";

// ─── Floating contact photos ───────────────────────────────────────────────
// Update these paths to your actual contact page images
const FLOAT_PHOTOS = [
  { src: "https://i.pinimg.com/736x/73/e0/44/73e044eae53c8d6d0f8e3f8aa1b1e5db.jpg", w: 180, h: 130, style: { top: "8%",  left: "2%",  rotate: "-6deg"  } },
  { src: "https://i.pinimg.com/736x/57/98/e5/5798e50f362d1b87f4df19bd78e1599f.jpg", w: 120, h: 90,  style: { top: "5%",  left: "38%", rotate: "4deg"   } },
  { src: "https://i.pinimg.com/1200x/59/c4/5d/59c45d7a1d6b160aecbae582535754e3.jpg", w: 150, h: 110, style: { top: "2%",  left: "68%", rotate: "-3deg"  } },
  { src: "https://i.pinimg.com/736x/8d/33/bd/8d33bde8b35223f8014f6e504c2457b3.jpg", w: 110, h: 90,  style: { top: "48%", left: "72%", rotate: "5deg"   } },
  { src: "https://i.pinimg.com/736x/25/7b/20/257b2059897d72cf1c77c1d0533b0983.jpg", w: 130, h: 100, style: { top: "60%", left: "40%", rotate: "-4deg"  } },
  { src: "https://i.pinimg.com/736x/54/90/ee/5490ee1b427a02917f68be4acbbab67e.jpg", w: 100, h: 80,  style: { top: "55%", left: "8%",  rotate: "6deg"   } },
];

// ─── Animated stat badges ─────────────────────────────────────────────────
const BADGES = [
  { label: "Schools",  value: "50+",    color: "#169A4C", top: "18%", left: "30%" },
  { label: "Students", value: "10K+",   color: "#1F6FBF", top: "62%", left: "58%" },
  { label: "Cities",   value: "20+",    color: "#F6841F", top: "72%", left: "22%" },
];

// ─── Parallax float hook ───────────────────────────────────────────────────
function useMouseParallax() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const cx = window.innerWidth  / 2;
      const cy = window.innerHeight / 2;
      setOffset({ x: (e.clientX - cx) / cx, y: (e.clientY - cy) / cy });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);
  return offset;
}

// ─── Single floating photo tile ───────────────────────────────────────────
function FloatTile({ src, w, h, style, depth, visible, index, parallax }: {
  src: string; w: number; h: number;
  style: { top: string; left: string; rotate: string };
  depth: number; visible: boolean; index: number;
  parallax: { x: number; y: number };
}) {
  const px = parallax.x * depth * 14;
  const py = parallax.y * depth * 14;

  return (
    <div
      style={{
        position: "absolute",
        top: style.top,
        left: style.left,
        width: w,
        height: h,
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
        border: "2px solid rgba(255,255,255,0.7)",
        // entrance
        opacity: visible ? 1 : 0,
        transform: visible
          ? `rotate(${style.rotate}) translate(${px}px, ${py}px)`
          : `rotate(${style.rotate}) translateY(30px) scale(0.88)`,
        transition: `opacity 0.65s ease ${index * 90}ms, transform 0.65s cubic-bezier(0.34,1.15,0.64,1) ${index * 90}ms`,
        // continuous float animation
        animation: visible ? `tileFloat${index % 3} ${3.5 + index * 0.4}s ease-in-out ${index * 0.3}s infinite` : "none",
        zIndex: 1,
        willChange: "transform",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      {/* glass shine */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%)",
      }} />
    </div>
  );
}

// ─── Stat badge ───────────────────────────────────────────────────────────
function StatBadge({ label, value, color, top, left, visible, index }: {
  label: string; value: string; color: string;
  top: string; left: string; visible: boolean; index: number;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top, left,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "88px",
        height: "88px",
        borderRadius: "50%",
        background: "#fff",
        boxShadow: `0 4px 20px ${color}55, 0 0 0 3px ${color}33`,
        border: `2px solid ${color}`,
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.6)",
        transition: `opacity 0.5s ease ${300 + index * 120}ms, transform 0.5s cubic-bezier(0.34,1.5,0.64,1) ${300 + index * 120}ms`,
        zIndex: 3,
        animation: visible ? `badgePulse 2.5s ease-in-out ${index * 0.5}s infinite` : "none",
      }}
    >
      <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "20px", color, lineHeight: 1 }}>{value}</span>
      <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "10px", color: "#2C2B2B", opacity: 0.7, textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</span>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────
export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const parallax = useMouseParallax();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="w-full relative overflow-hidden"
      style={{ background: "#FFFEFB", marginTop: "-162px", paddingTop: "162px" }}
    >
      <style>{`
        @keyframes tileFloat0 { 0%,100%{transform:translateY(0px) rotate(-6deg)} 50%{transform:translateY(-10px) rotate(-6deg)} }
        @keyframes tileFloat1 { 0%,100%{transform:translateY(0px) rotate(4deg)}  50%{transform:translateY(-8px) rotate(4deg)} }
        @keyframes tileFloat2 { 0%,100%{transform:translateY(0px) rotate(-3deg)} 50%{transform:translateY(-12px) rotate(-3deg)} }
        @keyframes badgePulse { 0%,100%{box-shadow:var(--bs)} 50%{box-shadow:var(--bs),0 0 0 6px rgba(0,0,0,0.04)} }

        @keyframes textSlideUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        .hero-badge   { animation: textSlideUp 0.5s ease 0.05s both; }
        .hero-heading { animation: textSlideUp 0.6s ease 0.15s both; }
        .hero-sub     { animation: textSlideUp 0.6s ease 0.25s both; }
        .hero-cta     { animation: textSlideUp 0.6s ease 0.35s both; }
      `}</style>

      {/* ── Dot grid bg ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(#E1E1E1 1px, transparent 1px), linear-gradient(90deg, #E1E1E1 1px, transparent 1px)", backgroundSize: "48px 32.8px" }} />

      {/* ── Blur colour strips ── */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-0" style={{ height: "102px", background: "rgba(246,132,31,0.5)", filter: "blur(127px)" }} />
      <div className="absolute left-0 pointer-events-none z-0" style={{ top: "306px", width: "97%", height: "102px", background: "rgba(25,111,172,0.5)", filter: "blur(127px)" }} />
      <div className="absolute left-0 pointer-events-none z-0" style={{ top: "612px", width: "99%", height: "102px", background: "rgba(22,154,76,0.5)", filter: "blur(127px)" }} />

      {/* ══════════ DESKTOP ══════════ */}
      <div
        className="hidden lg:flex relative z-10 flex-row items-center justify-between gap-10 mx-auto px-12 py-24 mt-24"
        style={{ maxWidth: "1344px" }}
      >

        {/* Left — text (identical to ProgramsHero) */}
        <div className="flex flex-col items-start gap-8 max-w-xl text-left flex-shrink-0">

          <div className="hero-badge flex items-center justify-center px-4 py-1.5" style={{ background: "#169A4C", borderRadius: "8px" }}>
            <span className="text-white uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", letterSpacing: "-0.005em" }}>
              Contact Us
            </span>
          </div>

          <h1
            className="hero-heading m-0"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "100%", letterSpacing: "-0.015em", color: "#2C2B2B" }}
          >
            Let&apos;s Build the Future of STEM Education Together
          </h1>

          <p className="hero-sub m-0" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21px", lineHeight: "120%", letterSpacing: "-0.015em", color: "#2C2B2B" }}>
            Whether you&apos;re a school planning a STEM lab, a parent exploring programs, or a student ready to create and innovate — our team is here to help. Reach out today and let&apos;s start the conversation.
          </p>
        </div>

        {/* Right — floating photo collage, clipped to container */}
        <div
          className="relative flex-shrink-0"
          style={{ width: "520px", height: "400px", overflow: "hidden", borderRadius: "16px" }}
        >
          {/* Floating photo tiles */}
          {FLOAT_PHOTOS.map((tile, i) => (
            <FloatTile
              key={i}
              {...tile}
              depth={(i % 3) + 1}
              visible={visible}
              index={i}
              parallax={parallax}
            />
          ))}

          {/* Stat badges */}
          {BADGES.map((b, i) => (
            <StatBadge key={b.label} {...b} visible={visible} index={i} />
          ))}

          {/* Centre glow */}
          <div style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: "260px", height: "260px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(246,132,31,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }} />
        </div>
      </div>

      {/* ══════════ MOBILE ══════════ */}
      <div className="lg:hidden relative z-10 flex flex-col items-center px-6 py-16 mt-16 gap-8 text-center mx-auto" style={{ maxWidth: "1344px" }}>

        <div style={{ backgroundColor: "#169A4C", borderRadius: "8px", padding: "6px 16px", display: "inline-block" }}>
          <span className="text-white uppercase" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "16px", letterSpacing: "-0.005em" }}>Contact Us</span>
        </div>

        <h1 className="m-0 text-[#2C2B2B]" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "clamp(28px, 7vw, 40px)", lineHeight: "100%", letterSpacing: "-0.015em" }}>
          Let&apos;s Build the Future of STEM Education Together
        </h1>

        <p className="m-0" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "18px", lineHeight: "120%", letterSpacing: "-0.015em", color: "#2C2B2B" }}>
          Whether you&apos;re a school planning a STEM lab, a parent exploring programs, or a student ready to create and innovate — our team is here to help.
        </p>

        {/* Mobile photo grid — 2×2 */}
        <div className="grid grid-cols-2 gap-2 w-full">
          {FLOAT_PHOTOS.slice(0, 4).map((tile, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden" style={{ height: "110px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tile.src} alt="" style={{ width: "100%", height: "110px", objectFit: "cover", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(0,0,0,0.06) 0%,rgba(0,0,0,0.18) 100%)" }} />
            </div>
          ))}
        </div>

        {/* Inline stat pills — mobile */}
        <div className="flex gap-3 flex-wrap justify-center">
          {BADGES.map((b) => (
            <div key={b.label} style={{ background: "#fff", border: `2px solid ${b.color}`, borderRadius: "99px", padding: "6px 16px", display: "flex", gap: "6px", alignItems: "center", boxShadow: `0 3px 12px ${b.color}33` }}>
              <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "16px", color: b.color }}>{b.value}</span>
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "12px", color: "#2C2B2B", opacity: 0.7, textTransform: "uppercase" }}>{b.label}</span>
            </div>
          ))}
        </div>

      </div>{/* end mobile wrapper */}

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10" style={{ height: "60px", background: "linear-gradient(to bottom, transparent, #FFFEFB)" }} />
    </div>
  );
}