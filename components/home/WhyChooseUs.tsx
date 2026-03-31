import Image from "next/image";
import { Inter, Poppins, IBM_Plex_Sans_Condensed } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });
const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({ subsets: ["latin"], weight: ["500"] });

const reasons = [
  {
    number: "01",
    image: "/why-choose/01.png",
    title: "Hands-On Learning,\nNot Just Theory",
    description: "Students learn by building real projects, experiments, and working models — not just reading theory.",
  },
  {
    number: "02",
    image: "/why-choose/02.png",
    title: "NEP 2020 & School Curriculum Ready",
    description: "Designed to fit CBSE, ICSE, and State Board schools with easy integration into regular classes.",
  },
  {
    number: "03",
    image: "/why-choose/03.jpg",
    title: "One Partner. Complete STEM Solution",
    description: "From curriculum to equipment to training — we handle everything so your school doesn't have to.",
  },
  {
    number: "04",
    image: "/why-choose/04.jpg",
    title: "Skills for the 21st Century",
    description: "We develop creativity, problem-solving, teamwork, and innovation along with technical knowledge.",
  },
  {
    number: "05",
    image: "/why-choose/05.jpg",
    title: "Trusted by Schools",
    description: "Schools see higher engagement, better STEM performance, and more competition success.",
  },
  {
    number: "06",
    image: "/why-choose/06.jpg",
    title: "Affordable for Every School",
    description: "Flexible pricing and solutions designed for schools of every size and budget.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#FAFAFA] py-16 px-6 lg:py-[180px] lg:px-[158px]">
      <div className="flex flex-col items-center gap-16 lg:gap-[134px]">

        {/* ===== HEADER ===== */}
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-0">

          {/* Left: tagline + heading */}
          <div className="w-full lg:w-[680px] flex flex-col gap-6">
            <div className="flex items-center flex-wrap gap-2">
              <span
                className={ibmPlexSansCondensed.className}
                style={{ fontSize: "14px", fontWeight: 500, color: "#2C2B2B", width: "264px", textAlign: "center" }}
              >
                Practical Learning • Real Skills • Future Ready
              </span>
              <span style={{ width: "10px", height: "10px", background: "#F6841F", borderRadius: "9999px", display: "inline-block" }} />
              <span style={{ width: "10px", height: "10px", background: "#196FAC", borderRadius: "9999px", display: "inline-block", marginLeft: "3px" }} />
              <span style={{ width: "10px", height: "10px", background: "#169A4C", borderRadius: "9999px", display: "inline-block", marginLeft: "3px" }} />
            </div>

            <h2
              className={`${inter.className} text-[30px] lg:text-[48px]`}
              style={{ fontWeight: 600, lineHeight: "1.15", color: "#2C2B2B", margin: 0 }}
            >
              Why Schools Across India Choose Us
            </h2>
          </div>

          {/* Right: subtitle */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              className={inter.className}
              style={{ fontSize: "21px", fontWeight: 400, lineHeight: "31.5px", color: "#2C2B2B", margin: 0 }}
            >
              Practical Learning for the Next Generation
            </p>
          </div>
        </div>

        {/* ===== ITEMS GRID ===== */}
        <div className="w-full flex flex-col gap-12 lg:gap-[113px]">
          {[reasons.slice(0, 2), reasons.slice(2, 4), reasons.slice(4, 6)].map((pair, i) => (
            <div key={i} className="flex flex-col lg:flex-row gap-10 lg:gap-[64px] items-start lg:items-center">
              {pair.map((r) => (
                <ReasonItem key={r.number} {...r} inter={inter} poppins={poppins} />
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function ReasonItem({
  number, image, title, description, inter, poppins,
}: {
  number: string;
  image: string;
  title: string;
  description: string;
  inter: { className: string };
  poppins: { className: string };
}) {
  return (
    <div style={{ flex: "1 1 0", display: "flex", gap: "24px", alignItems: "flex-start" }}>

      {/* Number with image clip
          FIX: removed fixed width:"80px" — was clipping the wide 80px glyphs.
               Now using minWidth so the number never gets squeezed, and
               overflow:visible so nothing gets cut off.
      */}
      <div
        className={`${inter.className} text-[56px] lg:text-[80px]`}
        style={{
          fontWeight: 500,
          lineHeight: "1",
          flexShrink: 0,
          /* wide enough for two-digit numbers at 80px font — "01" at 80px ≈ 96px wide */
          minWidth: "100px",
          overflow: "visible",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {number}
      </div>

      {/* Text block */}
      <div style={{ flex: "1 1 0", display: "flex", flexDirection: "column", gap: "24px" }}>
        <h3
          className={`${poppins.className} text-[22px] lg:text-[32px]`}
          style={{ fontWeight: 600, lineHeight: "1.25", color: "#2C2B2B", margin: 0, whiteSpace: "pre-line" }}
        >
          {title}
        </h3>
        <p
          className={inter.className}
          style={{ fontSize: "18px", fontWeight: 400, lineHeight: "28px", color: "#2C2B2B", opacity: 0.60, margin: 0 }}
        >
          {description}
        </p>
      </div>

    </div>
  );
}