"use client";

import { useState } from "react";

const faqs = [
  { question: "How much space do we need for a STEM lab?", answer: "A standard classroom size is enough. We design the lab based on available space." },
  { question: "Do we need our own teacher?", answer: "No, you don't! We provide a fully trained STEM teacher as part of our packages. They manage all lab sessions, curriculum delivery, and student engagement — so your school doesn't need to hire anyone separately." },
  { question: "Is the equipment covered under warranty?", answer: "Yes, all equipment comes with a manufacturer warranty, and we offer additional maintenance support. Any defective component is repaired or replaced promptly to ensure uninterrupted lab operations." },
  { question: "How long does the setup take?", answer: "From initial consultation to full lab launch, the process typically takes 4–6 weeks. This includes needs assessment, customised planning, physical installation, and teacher onboarding." },
  { question: "Is the curriculum included?", answer: "Absolutely. A structured, age-appropriate curriculum covering robotics, IoT, coding, and more is included with all packages. It is aligned with national education standards and designed for hands-on learning." },
  { question: "Which classes can use the STEM lab?", answer: "The STEM lab is designed to cater to students from Grade 1 to Grade 12. The curriculum is tiered by grade group, ensuring each session is engaging and appropriately challenging for every age group." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    // ↓ padding unchanged (already tight); only inner container gets mobile px fix
    <section style={{ background: "#FFFFFF", padding: "80px 0 80px" }}>

      {/* ↓ padding moved to className; lg+ restores original 0 48px */}
      <div className="max-w-[1060px] mx-auto px-4 lg:px-[48px]">

        {/* Header Row — already has flexWrap:"wrap" so it stacks naturally */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "32px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "14px", color: "#2C2B2B" }}>
              A simple, structured, and risk-free process.
            </span>
            <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", background: "#F6841F" }} />
            <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", background: "#196FAC" }} />
            <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", background: "#169A4C" }} />
          </div>
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "21px", color: "#2C2B2B" }}>
            From Consultation to Launch in 6-8 Weeks
          </span>
        </div>

        {/* FAQ Title — ↓ responsive font; lg+ restores 48px */}
        <h2
          className="text-[30px] lg:text-[48px]"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            lineHeight: "100%",
            letterSpacing: "-0.72px",
            color: "#2C2B2B",
            margin: "0 0 40px 0",
          }}
        >
          FAQ
        </h2>

        {/* Accordion — unchanged */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }} onMouseLeave={() => setOpenIndex(null)}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                onMouseEnter={() => setOpenIndex(index)}
                // ↓ also toggle on click for touch devices
                onClick={() => setOpenIndex(isOpen ? null : index)}
                style={{
                  border: isOpen ? "1.5px solid #F6841F" : "1.5px solid #D1D1D1",
                  borderBottom: isOpen ? "4px solid #F6841F" : "1.5px solid #D1D1D1",
                  borderRadius: "12px",
                  background: "#FFFFFF",
                  overflow: "hidden",
                  transition: "border 0.2s",
                  cursor: "pointer",
                }}
              >
                {/* Question — unchanged */}
                <div style={{ width: "100%", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Inter, sans-serif", fontSize: "17px", fontWeight: 700, color: "#2C2B2B", gap: "16px" }}>
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <span style={{ flexShrink: 0, width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", fontWeight: 300, color: "#2C2B2B", lineHeight: 1 }}>×</span>
                  ) : (
                    <span style={{ flexShrink: 0, width: "28px", height: "28px", borderRadius: "50%", border: "1.5px solid #D1D1D1", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L11 1" stroke="#2C2B2B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </div>

                {/* Answer — unchanged */}
                <div style={{ maxHeight: isOpen ? "300px" : "0px", overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.7", padding: "0 24px 20px", margin: 0 }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}