"use client";

import Image from "next/image";
import { Inter, Poppins, IBM_Plex_Sans_Condensed } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });
const ibm = IBM_Plex_Sans_Condensed({ subsets: ["latin"], weight: ["500"] });

const allValues = [
  { icon: "/icons/v1.svg", title: "Innovation",        desc: "We constantly evolve to deliver modern, relevant, and future-ready learning experiences for every student.",                                                                     borderColor: "#1F6FBF", image: "/about/b1.jpeg" },
  { icon: "/icons/v2.svg", title: "Excellence",        desc: "We hold ourselves to the highest standards in curriculum, training, and outcomes — because quality education should never be compromised.",                                      borderColor: "#F6841F", image: "/about/b2.jpeg" },
  { icon: "/icons/v3.svg", title: "Accessibility",     desc: "Quality STEM education should not be limited to a few — we make it accessible to schools of every size, location, and budget.",                                               borderColor: "#169A4C", image: "/about/b3.jpeg" },
  { icon: "/icons/v4.svg", title: "Collaboration",     desc: "We believe the best learning happens when schools, teachers, parents, and students work together.",                                                                            borderColor: "#1F6FBF", image: "/about/b4.jpeg" },
  { icon: "/icons/v5.svg", title: "Student-Centricity",desc: "Students are at the center of everything we do. Every program is designed to help them build, think, create, and succeed.",                                                  borderColor: "#F6841F", image: "/about/b5.jpeg" },
  { icon: "/icons/v6.svg", title: "Impact",            desc: "Every program we run is measured by the real difference it makes in a student's confidence, skills, and future.",                                                             borderColor: "#169A4C", image: "/about/b6.jpeg" },
];

function FlipValueCard({
  icon, title, desc, borderColor, image, inter, poppins,
}: {
  icon: string; title: string; desc: string; borderColor: string; image: string;
  inter: { className: string }; poppins: { className: string };
}) {
  return (
    <div
      className="flip-card-root w-full lg:flex-1 h-[228px] cursor-pointer"
      style={{ perspective: "1000px" }}
    >
      <style>{`
        .flip-card-root:hover .flip-card-inner { transform: rotateY(180deg); }
        .flip-card-inner { position: relative; width: 100%; height: 100%; transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1); transform-style: preserve-3d; }
        .flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; -webkit-backface-visibility: hidden; border-radius: 20px; overflow: hidden; }
        .flip-card-back { transform: rotateY(180deg); }
      `}</style>

      <div className="flip-card-inner">
        {/* FRONT */}
        <div className="flip-card-front" style={{ border: "1px solid #000", display: "flex", flexDirection: "column", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flex: 1, borderRadius: "0 0 20px 20px", borderBottom: `4px solid ${borderColor}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", boxSizing: "border-box", background: "#FAFAFA" }}>
            <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{ alignSelf: "stretch", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <Image src={icon} alt={title} width={31} height={31} />
                <span className={poppins.className} style={{ flex: 1, fontSize: "24px", fontWeight: 600, lineHeight: "32px", color: "#2C2B2B" }}>{title}</span>
              </div>
              <p className={inter.className} style={{ alignSelf: "stretch", fontSize: "18px", fontWeight: 400, lineHeight: "28px", color: "#2C2B2B", margin: 0 }}>{desc}</p>
            </div>
          </div>
        </div>

        {/* BACK — /about/b1.jpeg … b6.jpeg */}
        <div className="flip-card-back" style={{ borderBottom: `4px solid ${borderColor}`, position: "relative" }}>
          <Image src={image} alt={title} fill className="object-cover" style={{ borderRadius: "20px" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.05) 60%)", borderRadius: "20px", display: "flex", alignItems: "flex-end", padding: "20px 24px", boxSizing: "border-box" }}>
            <span className={poppins.className} style={{ fontSize: "22px", fontWeight: 600, color: "#FFFFFF", lineHeight: "1.2" }}>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VisionMissionValues() {
  return (
    <section className="w-full bg-[#FAFAFA] flex items-center justify-center pt-24 pb-4 px-4  lg:px-[10px] box-border">

      <div className="w-full lg:w-[1139px] flex flex-col items-start gap-16 lg:gap-[80px]">

        {/* ════ BLOCK 1 — Vision & Mission ════ */}
        <div className="w-full flex flex-col items-end gap-10 lg:gap-[48px]">

          {/* Header row */}
          <div className="w-full lg:w-[1138px] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-[20px]">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px" }}>
              <div style={{ height: "20px", display: "flex", alignItems: "center" }}>
                <span className={ibm.className} style={{ width: "170px", textAlign: "center", color: "#2C2B2B", fontSize: "14px", fontWeight: 500, lineHeight: "20px", letterSpacing: "-0.15px", flexShrink: 0 }}>
                  Our Vision, Mission &amp; Values
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                  <span style={{ width: "10px", height: "10px", background: "#F6841F", borderRadius: "50%", display: "inline-block" }} />
                  <span style={{ width: "10px", height: "10px", background: "#196FAC", borderRadius: "50%", display: "inline-block" }} />
                  <span style={{ width: "10px", height: "10px", background: "#169A4C", borderRadius: "50%", display: "inline-block" }} />
                </div>
              </div>
              <h2
                className={`${inter.className} text-[30px] lg:text-[48px]`}
                style={{ fontWeight: 600, lineHeight: "100%", letterSpacing: "-0.01em", color: "#2C2B2B", margin: 0 }}
              >
                Vision, Mission &amp; Core Values
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <p className={inter.className} style={{ fontSize: "21px", fontWeight: 400, lineHeight: "150%", letterSpacing: "-0.01em", color: "#2C2B2B", margin: 0 }}>
                The Purpose That Drives Us Forward
              </p>
            </div>
          </div>

          {/* OUR VISION row */}
          <div className="w-full lg:w-[1138.5px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-[20px]">
            <div className="w-full lg:w-[535px] h-auto lg:h-[256px]" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <h3 className={`${poppins.className} text-[28px] lg:text-[40px]`} style={{ alignSelf: "stretch", fontWeight: 600, lineHeight: "1.2", color: "#2C2B2B", margin: 0 }}>Our Vision</h3>
                <p className={inter.className} style={{ alignSelf: "stretch", fontSize: "18px", fontWeight: 400, lineHeight: "28px", color: "#2C2B2B", margin: 0 }}>
                  To become India's most trusted partner in STEM education, empowering every student with the skills, confidence, and innovative mindset needed to lead in a technology-driven world.
                </p>
              </div>
            </div>
            <div className="relative w-full h-[220px] rounded-[20px] overflow-hidden lg:hidden">
              <Image src="/about/v1.jpeg" alt="Our Vision" fill className="object-cover" />
            </div>
            <div className="hidden lg:block" style={{ width: "522.5px", height: "256px", position: "relative", flexShrink: 0 }}>
              <div style={{ position: "absolute", top: 0, left: "108.5px", width: "414px", height: "256px", borderRadius: "20px", overflow: "hidden" }}>
                <Image src="/about/v1.jpeg" alt="Our Vision" fill className="object-cover" />
              </div>
              <div style={{ position: "absolute", top: "105px", left: 0, width: "179px", height: "151px", borderRadius: "12px", overflow: "hidden", zIndex: 2 }}>
                <Image src="/about/r2.png" alt="Vision detail" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* OUR MISSION row */}
          <div className="w-full lg:w-[1138.5px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-[20px]">
            <div className="relative w-full h-[220px] rounded-[20px] overflow-hidden lg:hidden order-2">
              <Image src="/about/Vision.jpeg" alt="Our Mission" fill className="object-cover" />
            </div>
            <div className="hidden lg:block lg:order-1" style={{ width: "515px", height: "263px", position: "relative", flexShrink: 0 }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "414px", height: "256px", borderRadius: "20px", overflow: "hidden" }}>
                <Image src="/about/r1.png" alt="Our Mission" fill className="object-cover" />
              </div>
              <div style={{ position: "absolute", top: "112px", left: "336px", width: "179px", height: "151px", borderRadius: "24px", overflow: "hidden", zIndex: 2, border: "10px solid white" }}>
                <Image src="/about/m1.jpeg" alt="Mission detail" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-[535px] h-auto lg:h-[256px] order-1 lg:order-2" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                <h3 className={`${poppins.className} text-[28px] lg:text-[40px]`} style={{ alignSelf: "stretch", fontWeight: 600, lineHeight: "1.2", color: "#2C2B2B", margin: 0 }}>Our Mission</h3>
                <p className={inter.className} style={{ alignSelf: "stretch", fontSize: "18px", fontWeight: 400, lineHeight: "28px", color: "#2C2B2B", margin: 0 }}>
                  To make high-quality, hands-on STEM education accessible and affordable for every school through curriculum-aligned programs, expert training, modern lab setups, and continuous support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ════ BLOCK 2 — Core Values ════ */}
        <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "center", gap: "48px" }}>

          <div className="w-full lg:w-[1122px] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-[20px]">
            <h2
              className={`${poppins.className} text-[24px] lg:text-[32px]`}
              style={{ fontWeight: 600, lineHeight: "110%", color: "#2C2B2B", margin: 0 }}
            >
              Our Core Values
            </h2>
            <p className={inter.className} style={{ fontSize: "21px", fontWeight: 400, lineHeight: "150%", letterSpacing: "-0.01em", color: "#2C2B2B", margin: 0, maxWidth: "600px" }}>
              The principles that guide every program we design and every school we support.
            </p>
          </div>

          <div style={{ alignSelf: "stretch" }} className="flex flex-col gap-[6px]">
            <div className="flex flex-col lg:flex-row items-stretch gap-[6px] w-full">
              {allValues.slice(0, 3).map((v) => (
                <FlipValueCard key={v.title} {...v} inter={inter} poppins={poppins} />
              ))}
            </div>
            <div className="flex flex-col lg:flex-row items-stretch gap-[6px] w-full">
              {allValues.slice(3, 6).map((v) => (
                <FlipValueCard key={v.title} {...v} inter={inter} poppins={poppins} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}