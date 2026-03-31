import Image from "next/image";
import { Inter, Poppins, IBM_Plex_Sans_Condensed } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600"] });
const ibm = IBM_Plex_Sans_Condensed({ subsets: ["latin"], weight: ["500"] });

const teamRows: { name: string; role: string; image: string }[][] = [
  [
    { name: "Rahul Sharma", role: "Curriculum Designer", image: "/team/t1.jpg" },
    { name: "Priya Nair", role: "Robotics Trainer", image: "/team/t2.jpg" },
    { name: "Anjali Mehta", role: "Operations Lead", image: "/team/t3.jpg" },
  ],
  [
    { name: "Vikram Patel", role: "Lab Setup Engineer", image: "/team/t4.jpg" },
    { name: "Sneha Rao", role: "Content Strategist", image: "/team/t5.jpg" },
    { name: "Arjun Desai", role: "Developer", image: "/team/t6.jpg" },
  ],
];

export default function TeamMembers() {
  return (
    // ↓ padding moved to className; lg+ restores original 180px 10px
    <section className="w-full flex items-center justify-center py-12 px-4 lg:py-[180px] lg:px-[10px] box-border bg-white">

      {/* ↓ fixed 1148px → full-width on mobile */}
      <div className="w-full lg:w-[1148px] flex flex-col items-start gap-12 lg:gap-[48px]">

        {/* ── HEADER ROW ── */}
        {/* ↓ fixed 1122px → full-width; flex-col on mobile */}
        <div className="w-full lg:w-[1122px] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-[20px]">

          {/* Left: tagline + heading */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "24px" }}>
            <div style={{ height: "20px", display: "flex", alignItems: "center" }}>
              <span
                className={ibm.className}
                style={{ width: "170px", textAlign: "center", color: "#2C2B2B", fontSize: "14px", fontWeight: 500, lineHeight: "20px", letterSpacing: "-0.15px", flexShrink: 0 }}
              >
                Our Vision, Mission &amp; Values
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
                <span style={{ width: "10px", height: "10px", background: "#F6841F", borderRadius: "50%", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", background: "#196FAC", borderRadius: "50%", display: "inline-block" }} />
                <span style={{ width: "10px", height: "10px", background: "#169A4C", borderRadius: "50%", display: "inline-block" }} />
              </div>
            </div>
            {/* ↓ responsive font size; lg+ restores original 48px */}
            <h2
              className={`${inter.className} text-[30px] lg:text-[48px]`}
              style={{ fontWeight: 600, lineHeight: "100%", letterSpacing: "-0.01em", color: "#2C2B2B", margin: 0 }}
            >
              Team members
            </h2>
          </div>

          {/* Right: subtitle — unchanged */}
          <p
            className={inter.className}
            style={{ fontSize: "21px", fontWeight: 400, lineHeight: "150%", letterSpacing: "-0.01em", color: "#2C2B2B", margin: 0 }}
          >
            The Purpose That Drives Us Forward
          </p>
        </div>

        {/* ── CARDS BLOCK ── */}
        <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "center", gap: "36px" }}>

          {/* ── FEATURED FOUNDER CARD ── */}
          <div
            className="w-full"
            style={{ borderRadius: "20px", background: "#FFFFFF", boxShadow: "0px 3px 0px #F6841F" }}
          >
            {/* ↓ flex-col on mobile → flex-row on desktop */}
            <div className="w-full lg:w-[1141px] flex flex-col lg:flex-row items-stretch">

              {/* Left: photo */}
              {/* ↓ w-full on mobile; 570px on desktop
                  Border-radius: top corners on mobile; left corners on desktop */}
              <div
                className="relative w-full lg:w-[570px] lg:flex-shrink-0 overflow-hidden rounded-tl-[20px] rounded-tr-[20px] lg:rounded-tr-none lg:rounded-bl-[20px]"
                style={{ minHeight: "280px" }}
              >
                <Image
                  src="/team/founder.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right: blue content panel */}
              {/* ↓ w-full on mobile; 578px on desktop
                  Border-radius: bottom corners on mobile; right corners on desktop
                  Border: all 4 sides on mobile; top/right/bottom only on desktop */}
              <div
                className="w-full lg:w-[578px] lg:flex-shrink-0 rounded-bl-[20px] rounded-br-[20px] lg:rounded-bl-none lg:rounded-tl-none lg:rounded-tr-[20px] border border-black lg:border-l-0 box-border flex flex-col items-start"
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    flex: 1,
                    borderRadius: "inherit",
                    background: "#196FAC",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: "24px",
                    gap: "16px",
                  }}
                >
                  {/* Name + Role — ↓ w-full on mobile; 523px on desktop */}
                  <div
                    className="w-full lg:w-[523px]"
                    style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "8px" }}
                  >
                    <span className={poppins.className} style={{ fontSize: "24px", fontWeight: 600, lineHeight: "32px", color: "#FFFFFF" }}>
                      Heather Holst-Knudsen
                    </span>
                    <span className={poppins.className} style={{ fontSize: "20px", fontWeight: 500, lineHeight: "110%", color: "#FFFFFF" }}>
                      CEO &amp; Founder
                    </span>
                  </div>

                  {/* Bio — ↓ w-full on mobile; 523px on desktop */}
                  <p
                    className={`${inter.className} w-full lg:w-[523px]`}
                    style={{ fontSize: "18px", fontWeight: 400, lineHeight: "28px", color: "#FFFFFF", margin: 0 }}
                  >
                    Heather Holst-Knudsen is a recognized growth strategist, founder, CEO, and builder of transformative revenue organizations.
                    <br /><br />
                    With a career spanning decades across B2B media, events, digital information, SaaS, and marketplaces, Heather's unique perspective bridges strategy, execution, and education to drive modern revenue growth.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ── ROW 1: 3 team cards ── */}
          {/* ↓ flex-col + items-stretch on mobile; original flex-row items-start on desktop */}
          <div className="w-full flex flex-col items-stretch lg:flex-row lg:items-start gap-4 lg:gap-[12px]">
            {teamRows[0].map((member) => (
              <TeamCard key={member.name} {...member} poppins={poppins} />
            ))}
          </div>

          {/* ── ROW 2: 3 team cards ── */}
          {/* ↓ fixed 1119px → full-width on mobile; flex-col on mobile */}
          <div className="w-full lg:w-[1119px] flex flex-col items-stretch lg:flex-row lg:items-start gap-4 lg:gap-[12px]">
            {teamRows[1].map((member) => (
              <TeamCard key={member.name} {...member} poppins={poppins} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function TeamCard({
  name,
  role,
  image,
  poppins,
}: {
  name: string;
  role: string;
  image: string;
  poppins: { className: string };
}) {
  return (
    // ↓ w-full on mobile; flex-1 + fixed 348px on desktop
    <div
      className="w-full lg:flex-1 h-auto lg:h-[348px]"
      style={{
        borderRadius: "20px",
        border: "1px solid #000",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Photo — 240px fixed height unchanged */}
      <div
        style={{
          alignSelf: "stretch",
          height: "240px",
          flexShrink: 0,
          position: "relative",
          borderRadius: "20px 20px 0 0",
          overflow: "hidden",
        }}
      >
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Name + role — ↓ h-auto on mobile; 112px on desktop */}
      <div
        className="h-auto lg:h-[112px]"
        style={{
          alignSelf: "stretch",
          borderRadius: "0 0 20px 20px",
          borderBottom: "4px solid #F6841F",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "24px",
          gap: "10px",
          background: "#FFFFFF",
        }}
      >
        <span
          className={poppins.className}
          style={{ alignSelf: "stretch", fontSize: "24px", fontWeight: 600, lineHeight: "110%", letterSpacing: "-0.5px", color: "#2C2B2B" }}
        >
          {name}
        </span>
        <span
          className={poppins.className}
          style={{ alignSelf: "stretch", fontSize: "20px", fontWeight: 500, lineHeight: "32px", color: "#2C2B2B" }}
        >
          {role}
        </span>
      </div>
    </div>
  );
}