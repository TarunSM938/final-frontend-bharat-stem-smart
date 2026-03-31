import Image from "next/image";

export default function TransformSchool() {
  const partnerCards = [
    { title: "Become our Franchise", image: "/transform/franchise.jpg", alt: "School classroom" },
    { title: "Become our school partner", image: "/transform/partner.jpg", alt: "Handshake partnership" },
    { title: "Upgrade your coaching into AI hub", image: "/transform/ai-hub.jpg", alt: "Smart city AI hub" },
  ];

  return (
    <>
      {/* ↓ replace inline padding with responsive className; lg: values match originals exactly */}
      <section className="bg-white py-16 px-[10px] lg:py-[180px]">
        <div className="mx-auto" style={{ maxWidth: "1240px" }}>

          {/* Header Row — stack on mobile, side-by-side on desktop */}
          {/* ↓ flex-col on mobile, original flex row on desktop */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-0 mb-6">

            {/* Left: tagline + heading */}
            {/* ↓ full width on mobile, fixed 639px on desktop */}
            <div className="w-full lg:w-[639px]">
              {/* Tagline + dots */}
              <div className="flex items-center gap-2 mb-6">
                <span style={{ fontFamily: "IBM Plex Sans Condensed", fontSize: "14px", fontWeight: 500, color: "#2C2B2B" }}>
                  Practical Learning • Real Skills • Future Ready
                </span>
                <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "#F6841F" }}></span>
                <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "#196FAC" }}></span>
                <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: "#169A4C" }}></span>
              </div>
              {/* ↓ responsive font size; lg: restores original 48px */}
              <h2 className="text-[30px] lg:text-[48px]" style={{ fontFamily: "Inter", fontWeight: 600, lineHeight: "1.15", color: "#2C2B2B" }}>
                Transform Your School as<br />AI-Drone-Robotics School
              </h2>
            </div>

            {/* Right: subtitle — stacks below on mobile */}
            {/* ↓ remove fixed height: 140px so it auto-sizes on mobile */}
            <div className="flex items-start">
              <p style={{ fontFamily: "Inter", fontSize: "21px", fontWeight: 400, lineHeight: "31.5px", color: "#2C2B2B" }}>
                Practical Learning for the Next Generation
              </p>
            </div>
          </div>

          {/* Cards — stack on mobile, flex row on desktop */}
          {/* ↓ flex-col on mobile; lg: restores original flex row with gap-[48px] and mt-[134px] */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[48px] mt-12 lg:mt-[134px] items-center">
            {partnerCards.map((card) => (
              <div
                key={card.title}
                // ↓ full width on mobile, fixed 381px on desktop; auto height on mobile
                className="w-full lg:w-[381px] h-auto lg:h-[350px]"
                style={{
                  borderRadius: "20px",
                  border: "1px solid black",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Image area — full width on mobile */}
                {/* ↓ w-full on mobile, fixed 381px on desktop; height kept at 234px */}
                <div className="relative w-full lg:w-[381px]" style={{ height: "234px", flexShrink: 0 }}>
                  <Image src={card.image} alt={card.alt} fill className="object-cover" />
                </div>

                {/* Label area — unchanged */}
                <div
                  style={{
                    flex: 1,
                    background: "#FFFEFB",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: "39px",
                    paddingRight: "39px",
                    paddingTop: "24px",
                    paddingBottom: "24px",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                  }}
                >
                  <p style={{ fontFamily: "Inter", fontSize: "20px", fontWeight: 700, lineHeight: "28px", color: "#2C2B2B", textAlign: "center" }}>
                    {card.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Partner button — unchanged */}
          <div className="flex justify-center mt-10">
            <button
              style={{
                background: "#F6841F",
                color: "white",
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "18px",
                paddingLeft: "28px",
                paddingRight: "28px",
                paddingTop: "16px",
                paddingBottom: "16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Partner with us
            </button>
          </div>

        </div>
      </section>

      {/* CTA Section — largely unchanged; only mascot and buttons adjusted */}
      <section className="relative overflow-hidden py-28 px-6 text-center">

        {/* Blur orbs — unchanged */}
        <div className="absolute inset-0 z-0 pointer-events-none flex flex-col justify-start items-start gap-52 overflow-hidden">
          <div className="self-stretch h-24 bg-orange-500/50 blur-[127.43px]"></div>
          <div className="h-24 bg-sky-700/50 blur-[127.43px]" style={{ width: "1399.77px" }}></div>
          <div className="h-24 bg-green-600/50 blur-[127.43px]" style={{ width: "1431.92px" }}></div>
        </div>

        {/* Grid overlay — unchanged */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center" style={{ maxWidth: "888px", margin: "0 auto", gap: "32px" }}>
          <div className="flex flex-col items-center" style={{ gap: "32px", width: "100%" }}>

            <div className="flex flex-col items-center" style={{ gap: "8px", width: "100%" }}>

              {/* Mascot + heading row */}
              <div className="relative flex justify-center items-center w-full">
                {/* ↓ mascot overflows at calc(50% - 490px) on mobile — hide on mobile only */}
                <div
                  className="hidden lg:block absolute"
                  style={{
                    width: "112px",
                    height: "112px",
                    top: "2px",
                    left: "calc(50% - 490px)",
                    transformOrigin: "top left",
                    transform: "rotate(-55.47deg)",
                  }}
                >
                  <Image
                    src="/icons/mascot.png"
                    alt="Graduation cap mascot"
                    width={112}
                    height={112}
                    className="object-contain w-full h-full"
                  />
                </div>

                <h2
                  className="text-zinc-800 text-3xl lg:text-4xl font-bold text-center leading-tight lg:leading-10"
                  style={{ fontFamily: "Poppins" }}
                >
                  Bring Future-Ready STEM Learning to Your School
                </h2>
              </div>

              {/* Subtitle — unchanged */}
              <p
                className="text-zinc-800 text-xl font-normal text-center leading-7"
                style={{ fontFamily: "Inter" }}
              >
                Schedule a free demo and see our programs in action.
              </p>
            </div>

            {/* Buttons — allow wrap on very small screens */}
            <div className="inline-flex flex-wrap justify-center items-center gap-3 lg:gap-4">
              <button
                className="h-11 rounded-lg flex justify-center items-center gap-2.5 text-white text-base font-semibold"
                style={{ fontFamily: "Poppins", background: "#F97316", paddingLeft: "28px", paddingRight: "28px", paddingTop: "16px", paddingBottom: "16px" }}
              >
                Schedule free demo
              </button>
              <button
                className="rounded-lg flex justify-center items-center gap-2.5 text-zinc-800 text-base font-semibold"
                style={{ fontFamily: "Poppins", outline: "1px solid #27272a", paddingLeft: "24px", paddingRight: "24px", paddingTop: "14px", paddingBottom: "14px", background: "transparent" }}
              >
                Download brochure
              </button>
            </div>
          </div>

          {/* Call Us — unchanged */}
          <div className="inline-flex justify-start items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F6841F" className="w-4 h-4 shrink-0">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.59.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.59a1 1 0 0 1-.25 1.01z" />
            </svg>
            <div className="inline-flex flex-col items-end gap-px">
              <p className="text-zinc-800 text-base font-normal text-center" style={{ fontFamily: "Inter" }}>
                Call Us: +91 98765 43210
              </p>
              <div style={{ width: "128px", height: "0px", outline: "1px solid black" }} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}