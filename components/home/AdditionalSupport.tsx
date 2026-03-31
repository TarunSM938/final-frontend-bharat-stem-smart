"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Inter, Poppins, IBM_Plex_Sans_Condensed } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });
const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({ subsets: ["latin"], weight: ["500"] });

const ACCENTS = ["#F6841F", "#196FAC", "#169A4C", "#F6841F", "#196FAC", "#169A4C", "#F6841F", "#196FAC"];

const supports = [
  {
    title: "Teacher Training & Support",
    description: "Empowering educators with modern teaching tools and skills to meet curriculum standards effectively.",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=220&fit=crop",
    icon: "/icons/v1.svg",
  },
  {
    title: "Parent Awareness Sessions",
    description: "Online sessions guiding parents on coding and AI to help understand their child's learning journey.",
    image: "https://i.pinimg.com/1200x/53/7e/11/537e1100ee7378aed2c2e4d4c9f22afa.jpg",
    icon: "/icons/v2.svg",
  },
  {
    title: "Parent Empowerment Programs",
    description: "Webinars providing parents with tools to actively participate in their child's education.",
    image: "https://i.pinimg.com/1200x/f2/d0/55/f2d055be1a39d9fd46a85254b1756418.jpg",
    icon: "/icons/v3.svg",
  },
  {
    title: "CS Skill Workshop",
    description: "Interactive workshops to bridge learning gaps and equip students with essential tech skills.",
    image: "https://i.pinimg.com/1200x/68/1c/87/681c87f4d867c67e49b8e69da52504d9.jpg",
    icon: "/icons/v4.svg",
  },
  {
    title: "Coding Club",
    description: "A collaborative space for students to share ideas and develop coding skills together.",
    image: "https://i.pinimg.com/1200x/8f/24/1d/8f241d0ca75763f23d3a541c8c86be93.jpg",
    icon: "/icons/v5.svg",
  },
  {
    title: "Digital Fest",
    description: "A global platform where students showcase tech projects and innovative designs to the world.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=220&fit=crop",
    icon: "/icons/v6.svg",
  },
  {
    title: "Coding Competition Support",
    description: "Resources and support for students competing in national and international coding challenges worldwide.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=220&fit=crop",
    icon: "/icons/v7.png",
  },
  {
    title: "24/7 Technical Support",
    description: "Round-the-clock assistance for students and teachers to solve technical issues quickly.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=220&fit=crop",
    icon: "/icons/v8.png",
  },
];

// ─── hook: fires once when element enters viewport ─────────────────────────
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

// ─── Card ─────────────────────────────────────────────────────────────────
function SupportCard({
  title, description, image, icon, accent, index, inView,
}: {
  title: string;
  description: string;
  image: string;
  icon: string;
  accent: string;
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const delay = `${index * 80}ms`;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 0",
        minWidth: 0,
        borderRadius: "20px",
        background: "#fff",
        border: "1px solid #E5E5E5",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        // entrance animation
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.96)",
        transition: `opacity 0.55s ease ${delay}, transform 0.55s cubic-bezier(0.34,1.2,0.64,1) ${delay}, box-shadow 0.3s ease`,
        // hover lift with accent glow
        boxShadow: hovered
          ? `0 16px 40px ${accent}30, 0 4px 0 ${accent}`
          : `0 3px 0 ${accent}`,
      }}
    >
      {/* ── Image with overlay + floating icon badge ── */}
      <div style={{ position: "relative", height: "164px", overflow: "hidden", flexShrink: 0 }}>
        {/* Background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transform: hovered ? "scale(1.08)" : "scale(1)",
            transition: "transform 0.5s cubic-bezier(0.34,1.1,0.64,1)",
          }}
        />

        {/* Gradient overlay on hover */}
        <div style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(to top, ${accent}cc 0%, transparent 65%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.35s ease",
        }} />

        {/* ── Icon badge — always visible, bounces up on hover ── */}
        <div style={{
          position: "absolute",
          bottom: "12px",
          left: "12px",
          background: "white",
          borderRadius: "14px",
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 4px 14px rgba(0,0,0,0.18)`,
          // starts slightly below, lifts on hover
          transform: hovered ? "translateY(-4px) scale(1.08)" : "translateY(0) scale(1)",
          transition: "transform 0.35s cubic-bezier(0.34,1.4,0.64,1)",
        }}>
          <Image
            src={icon}
            alt=""
            width={36}
            height={36}
            style={{ objectFit: "contain", display: "block" }}
          />
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        padding: "20px",
        flex: 1,
      }}>
        {/* Animated accent bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{
            width: hovered ? "32px" : "20px",
            height: "3px",
            borderRadius: "9999px",
            background: accent,
            transition: "width 0.35s cubic-bezier(0.34,1.3,0.64,1)",
          }} />
          <div style={{
            width: hovered ? "8px" : "0px",
            height: "8px",
            borderRadius: "9999px",
            background: accent,
            opacity: 0.4,
            transition: "width 0.35s cubic-bezier(0.34,1.3,0.64,1) 0.05s",
          }} />
        </div>

        {/* Title */}
        <h3
          className={poppins.className}
          style={{
            fontSize: "17px",
            fontWeight: 600,
            lineHeight: "1.35",
            color: "#2C2B2B",
            margin: 0,
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={inter.className}
          style={{
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "21px",
            color: "#2C2B2B",
            opacity: 0.60,
            margin: 0,
            flex: 1,
          }}
        >
          {description}
        </p>

        {/* Know more — expands in on hover */}
        {/* <div style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          overflow: "hidden",
          maxHeight: hovered ? "32px" : "0px",
          opacity: hovered ? 1 : 0,
          transition: "max-height 0.3s ease, opacity 0.3s ease",
        }}>
          <span className={poppins.className} style={{ fontSize: "14px", fontWeight: 600, color: accent }}>
            Know more
          </span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div> */}
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────
export default function AdditionalSupport() {
  const { ref: headerRef, inView: headerIn } = useInView(0.2);
  const { ref: gridRef, inView: gridIn } = useInView(0.1);

  const row1 = supports.slice(0, 4);
  const row2 = supports.slice(4, 8);

  return (
    <section className="bg-[#FAFAFA] py-16 px-6 lg:py-[180px] lg:px-[158px]">
      <style>{`
        @keyframes floatDot {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-5px); }
        }
      `}</style>

      <div className="flex flex-col gap-16 lg:gap-[72px]">

        {/* ── Header ── */}
        <div
          ref={headerRef}
          className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-0"
          style={{
            opacity: headerIn ? 1 : 0,
            transform: headerIn ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.34,1.1,0.64,1)",
          }}
        >
          <div className="w-full lg:w-[680px] flex flex-col gap-6">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={ibmPlexSansCondensed.className}
                style={{ fontSize: "14px", fontWeight: 500, color: "#2C2B2B" }}
              >
                Support • Training • Growth
              </span>
              {[
                { color: "#F6841F", delay: "0s" },
                { color: "#196FAC", delay: "0.2s" },
                { color: "#169A4C", delay: "0.4s" },
              ].map((d) => (
                <span
                  key={d.color}
                  style={{
                    width: "10px", height: "10px",
                    background: d.color,
                    borderRadius: "9999px",
                    display: "inline-block",
                    marginLeft: "3px",
                    animation: headerIn ? `floatDot 2s ease-in-out ${d.delay} infinite` : "none",
                  }}
                />
              ))}
            </div>

            <h2
              className={`${inter.className} text-[30px] lg:text-[48px]`}
              style={{ fontWeight: 600, lineHeight: "1.15", color: "#2C2B2B", margin: 0 }}
            >
              Additional Support for Schools
            </h2>
          </div>

          <div>
            <p
              className={inter.className}
              style={{ fontSize: "21px", fontWeight: 400, lineHeight: "31.5px", color: "#2C2B2B", margin: 0 }}
            >
              Practical Learning for the Next Generation
            </p>
          </div>
        </div>

        {/* ── Cards ── */}
        <div ref={gridRef}>

          {/* Mobile / tablet */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
            {supports.map((s, i) => (
              <SupportCard key={s.title} {...s} accent={ACCENTS[i]} index={i} inView={gridIn} />
            ))}
          </div>

          {/* Desktop: 2 rows × 4 cols */}
          <div className="hidden lg:flex lg:flex-col lg:gap-4">
            <div className="flex gap-4">
              {row1.map((s, i) => (
                <SupportCard key={s.title} {...s} accent={ACCENTS[i]} index={i} inView={gridIn} />
              ))}
            </div>
            <div className="flex gap-4">
              {row2.map((s, i) => (
                <SupportCard key={s.title} {...s} accent={ACCENTS[i + 4]} index={i + 4} inView={gridIn} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}