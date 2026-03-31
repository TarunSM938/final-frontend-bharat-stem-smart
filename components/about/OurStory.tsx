import Image from "next/image";
import { Inter, IBM_Plex_Sans_Condensed } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });
const ibm = IBM_Plex_Sans_Condensed({ subsets: ["latin"], weight: ["500"] });

export default function OurStory() {
  return (
    // ↓ replace inline padding with responsive className; lg+ values match originals exactly
    <section
      className="w-full py-16 px-4 lg:py-[180px] lg:px-[10px] flex flex-col justify-center items-center gap-[10px] bg-white"
    >
      <div className="w-full flex flex-col justify-start items-center gap-14 lg:gap-[56px]">

        {/* ===== TOP BLOCK ===== */}
        <div className="w-full flex flex-col justify-start items-center gap-10 lg:gap-[48px]">

          {/* Tagline + Heading */}
          {/* ↓ remove fixed 1128px width; full width on mobile */}
          <div className="w-full lg:w-[1128px] flex flex-col justify-start items-start gap-6 lg:gap-[24px]">

            {/* OUR STORY + dots — unchanged */}
            <div style={{ height: "20px", display: "inline-flex", justifyContent: "flex-start", alignItems: "center" }}>
              <span className={ibm.className} style={{ width: "80px", textAlign: "center", color: "#2C2B2B", fontSize: "14px", fontWeight: 500, lineHeight: "20px" }}>
                OUR STORY
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                <span style={{ width: "10px", height: "10px", background: "#F6841F", borderRadius: "9999px", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", background: "#196FAC", borderRadius: "9999px", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", background: "#169A4C", borderRadius: "9999px", display: "inline-block" }} />
              </div>
            </div>

            {/* Heading — ↓ responsive font; lg+ restores 48px */}
            <h2
              className={`${inter.className} text-[28px] lg:text-[48px]`}
              style={{ alignSelf: "stretch", color: "#2C2B2B", fontWeight: 600, lineHeight: "1.2", margin: 0, wordWrap: "break-word" }}
            >
              We Started with a Simple Question: Why Can't Every Indian Student Access Great STEM Education?
            </h2>
          </div>

          {/* ===== CONTENT ROW ===== */}
          {/* ↓ remove fixed 1128px; stack on mobile, side-by-side on desktop */}
          <div className="w-full lg:w-[1128px] flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-0">

            {/* Left: two paragraphs */}
            {/* ↓ full width on mobile, fixed 480px on desktop */}
            <div className="w-full lg:w-[480px] flex flex-col justify-start items-start gap-4 lg:gap-[16px]" style={{ flexShrink: 0 }}>
              <p className={inter.className} style={{ alignSelf: "stretch", color: "black", fontSize: "18px", fontWeight: 400, lineHeight: "28px", margin: 0, wordWrap: "break-word" }}>
                Bharat Smart STEM was founded by passionate educators and technologists who saw a growing gap between classroom learning and real-world skills. While students study science and technology in theory, many never get the opportunity to build, experiment, or innovate — the very skills needed in today's fast-changing, technology-driven world.
              </p>
              <p className={inter.className} style={{ alignSelf: "stretch", color: "black", fontSize: "18px", fontWeight: 400, lineHeight: "28px", margin: 0, wordWrap: "break-word" }}>
                We started with a simple belief — students learn best by doing. Through robotics, AI, coding, electronics, and fully equipped STEM labs, we bring experiential learning to schools across India, helping students develop creativity, problem-solving, and confidence to succeed in future careers and life.
              </p>
            </div>

            {/* Right: overlapping images */}
            {/* ↓ full width fluid on mobile, fixed 548×380 on desktop */}
            <div
              className="relative w-full lg:w-[548px]"
              // ↓ height is fluid on mobile (aspect-ratio approach), fixed on desktop
              style={{ height: "280px", flexShrink: 0 }}
            >
              {/* Override height for desktop via inline media — use className instead */}
              {/* Large image */}
              <div
                // ↓ on mobile: left-0, full width; lg+: restores original right:0 w-[430px]
                className="absolute overflow-hidden right-0 w-full lg:w-[430px]"
                style={{ top: 0, height: "100%", borderRadius: "20px", background: "rgba(0,0,0,0.10)" }}
              >
                <Image src="/about/a3.jpeg" alt="Students learning STEM" fill className="object-cover" style={{ filter: "brightness(0.9)" }} />
              </div>

              {/* Small image — hidden on mobile to avoid overflow; visible on desktop */}
              <div
                className="hidden lg:block absolute"
                style={{
                  left: -12,
                  top: "69%",
                  transform: "translateY(-50%)",
                  width: "266px",
                  height: "247px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "rgba(0,0,0,0.10)",
                  zIndex: 2,
                }}
              >
                <Image src="/about/T1.png" alt="STEM activities" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* ===== QUOTE BLOCK ===== */}
        {/* ↓ remove fixed height 203px and width 1008px; auto-height on mobile */}
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full lg:w-[1008px] flex flex-col justify-end items-end">
            <div className="w-full flex flex-col justify-start items-start">

              {/* Orange quote mark — unchanged */}
              <div style={{ marginBottom: "12px" }}>
                <Image src="/icons/v5.svg" alt="Quote mark" width={47} height={47} />
              </div>

              {/* Quote text — ↓ responsive font; lg+ restores 36px */}
              <p
                className={`${inter.className} text-[22px] lg:text-[36px]`}
                style={{ alignSelf: "stretch", textAlign: "center", color: "#2C2B2B", fontWeight: 700, lineHeight: "1.3", margin: 0, wordWrap: "break-word" }}
              >
                When a child builds something with their own hands and sees it work, confidence, curiosity, and creativity come alive.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}