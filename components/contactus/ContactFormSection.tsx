"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", iAm: "",
    schoolName: "", city: "", interestedIn: "", contactMethod: "", message: "",
  });

  const inputStyle: React.CSSProperties = {
    fontFamily: "Poppins, sans-serif", fontSize: "14px", fontWeight: 600,
    letterSpacing: "-0.01em", lineHeight: "16px", color: "#000000", opacity: 0.5,
    background: "transparent", border: "none", outline: "none", width: "100%", textAlign: "left",
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle, cursor: "pointer", appearance: "none", WebkitAppearance: "none",
  };

  return (
    // ↓ padding moved to className; lg+ restores original 80px 52px
    <section className="w-full py-12 px-4 lg:py-[80px] lg:px-[52px] flex flex-col justify-center items-center gap-[10px] box-border">

      {/* ↓ w-full on mobile; 1337px on desktop */}
      <div className="w-full lg:w-[1337px] max-w-full flex flex-col justify-center items-center gap-16 lg:gap-[80px]">

        {/* Header */}
        <div className="w-full flex justify-start items-start" style={{ gap: "24px" }}>
          {/* ↓ w-full on mobile; 552px on desktop */}
          <div className="w-full lg:w-[552px] flex flex-col justify-start items-start gap-6">

            {/* Contact Us + dots — unchanged */}
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "6px", flexWrap: "nowrap", whiteSpace: "nowrap" }}>
              <span style={{ fontFamily: "IBM Plex Sans Condensed, sans-serif", fontSize: "14px", fontWeight: 500, lineHeight: "20px", color: "#3F3F46", whiteSpace: "nowrap" }}>
                Contact Us
              </span>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "3px" }}>
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#F97316", flexShrink: 0 }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#0369A1", flexShrink: 0 }} />
                <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#16A34A", flexShrink: 0 }} />
              </div>
            </div>

            {/* Heading — ↓ responsive font + allow wrap on mobile; lg+ restores 48px nowrap */}
            <h2
              className="text-[28px] lg:text-[48px] whitespace-normal lg:whitespace-nowrap"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, lineHeight: "1.15", color: "#3F3F46", margin: 0 }}
            >
              Send Us a Message
            </h2>
          </div>
        </div>

        {/* Form + Info Card */}
        {/* ↓ flex-col on mobile; original flex-row gap-[56px] on desktop */}
        <div className="w-full flex flex-col lg:flex-row lg:justify-start lg:items-center gap-10 lg:gap-[56px]">

          {/* Left: Form — ↓ w-full on mobile; 688px on desktop */}
          <div className="w-full lg:w-[688px] flex flex-col justify-start items-start gap-14 lg:gap-[56px]">
            <div
              className="w-full"
              style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "flex-start", gap: "16px" }}
            >
              {/* Full name — ↓ w-full on mobile; 320px on desktop */}
              <div className="w-full lg:w-[320px]" style={{ padding: "24px", borderBottom: "1px solid #000", display: "flex", alignItems: "flex-end", gap: "10px" }}>
                <input type="text" placeholder="Full name*" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} style={inputStyle} />
              </div>

              {/* Email */}
              <div className="w-full lg:w-[320px]" style={{ padding: "24px", borderBottom: "1px solid #3F3F46", display: "flex", alignItems: "flex-end", gap: "10px" }}>
                <input type="email" placeholder="Email address*" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inputStyle} />
              </div>

              {/* Phone */}
              <div className="w-full lg:w-[320px]" style={{ padding: "24px", borderBottom: "1px solid #3F3F46", display: "flex", alignItems: "flex-end", gap: "10px" }}>
                <input type="tel" placeholder="Phone no:" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inputStyle} />
              </div>

              {/* I am a */}
              <div className="w-full lg:w-[320px]" style={{ height: "64px", padding: "24px", borderBottom: "1px solid #3F3F46", display: "flex", alignItems: "center", gap: "10px", position: "relative" }}>
                <select value={form.iAm} onChange={(e) => setForm({ ...form, iAm: e.target.value })} style={selectStyle}>
                  <option value="" disabled>I am a*</option>
                  <option value="school">School</option>
                  <option value="parent">Parent</option>
                  <option value="student">Student</option>
                  <option value="other">Other</option>
                </select>
                <div style={{ position: "absolute", right: "24px", top: "50%", transform: "translateY(-50%)", width: "10px", height: "5px", background: "#000", opacity: 0.8, clipPath: "polygon(0 0, 100% 0, 50% 100%)", pointerEvents: "none" }} />
              </div>

              {/* School name */}
              <div className="w-full lg:w-[320px]" style={{ padding: "24px", borderBottom: "1px solid #3F3F46", display: "flex", alignItems: "flex-end", gap: "10px" }}>
                <input type="text" placeholder="School name" value={form.schoolName} onChange={(e) => setForm({ ...form, schoolName: e.target.value })} style={inputStyle} />
              </div>

              {/* City */}
              <div className="w-full lg:w-[320px]" style={{ padding: "24px", borderBottom: "1px solid #3F3F46", display: "flex", alignItems: "flex-end", gap: "10px" }}>
                <input type="text" placeholder="City/location*" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} style={inputStyle} />
              </div>

              {/* I'm interested in */}
              <div className="w-full lg:w-[320px]" style={{ height: "64px", padding: "24px", borderBottom: "1px solid #3F3F46", display: "flex", alignItems: "center", position: "relative" }}>
                <select value={form.interestedIn} onChange={(e) => setForm({ ...form, interestedIn: e.target.value })} style={selectStyle}>
                  <option value="" disabled>I&apos;m interested in*</option>
                  <option value="robotics">Robotics & AI</option>
                  <option value="iot">IoT & Arduino</option>
                  <option value="afterschool">After-School Programs</option>
                  <option value="stemlab">STEM Lab Setup</option>
                </select>
                <div style={{ position: "absolute", right: "24px", top: "50%", transform: "translateY(-50%)", width: "10px", height: "5px", background: "#000", opacity: 0.8, clipPath: "polygon(0 0, 100% 0, 50% 100%)", pointerEvents: "none" }} />
              </div>

              {/* Preferred contact method */}
              <div className="w-full lg:w-[320px]" style={{ height: "64px", padding: "24px", borderBottom: "1px solid #3F3F46", display: "flex", alignItems: "center", position: "relative" }}>
                <select value={form.contactMethod} onChange={(e) => setForm({ ...form, contactMethod: e.target.value })} style={selectStyle}>
                  <option value="" disabled>Preferred contact method</option>
                  <option value="phone">Phone</option>
                  <option value="email">Email</option>
                  <option value="whatsapp">WhatsApp</option>
                </select>
                <div style={{ position: "absolute", right: "24px", top: "50%", transform: "translateY(-50%)", width: "10px", height: "5px", background: "#000", opacity: 0.8, clipPath: "polygon(0 0, 100% 0, 50% 100%)", pointerEvents: "none" }} />
              </div>

              {/* Message — unchanged (flex:1 already stretches full width in wrapping context) */}
              <div style={{ flex: 1, height: "96px", padding: "24px", borderBottom: "1px solid #3F3F46", display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <textarea placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: "none", height: "100%", verticalAlign: "top" }} />
              </div>
            </div>

            {/* Submit — unchanged */}
            <button
              style={{ height: "40px", padding: "16px 28px", backgroundColor: "#F97316", borderRadius: "8px", border: "1px solid #F97316", cursor: "pointer", display: "inline-flex", justifyContent: "center", alignItems: "center", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.9")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
            >
              <span style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>Submit</span>
            </button>
          </div>

          {/* Right: Info Card — ↓ w-full h-auto on mobile; 596px×530px on desktop */}
          <div
            className="w-full lg:w-[596px] lg:h-[530px] h-auto"
            style={{ paddingLeft: "26px", paddingRight: "39px", paddingTop: "39px", paddingBottom: "40px", backgroundColor: "#196FAC", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "10px" }}
          >
            {/* ↓ w-full on mobile; 531px on desktop */}
            <div className="w-full lg:w-[531px] flex flex-col items-center gap-6">

              {/* Address — unchanged */}
              <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ color: "#fff", fontSize: "24px", fontWeight: 600, fontFamily: "Poppins, sans-serif", lineHeight: "32px" }}>Address</div>
                <div style={{ color: "#fff", fontSize: "18px", fontWeight: 400, fontFamily: "Inter, sans-serif", lineHeight: "28px" }}>
                  Plot No. 31-B, Katol Rd, in front of Tile Station, Yogendranagar, Manjidana Colony, Nagpur, Maharashtra 440013
                </div>
              </div>

              {/* Contact — unchanged */}
              <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ color: "#fff", fontSize: "24px", fontWeight: 600, fontFamily: "Poppins, sans-serif", lineHeight: "32px" }}>Contact</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <div style={{ color: "#fff", fontSize: "18px", fontWeight: 400, fontFamily: "Inter, sans-serif", lineHeight: "28px" }}>Phone: +91 93078 89897</div>
                  <div style={{ color: "#fff", fontSize: "18px", fontWeight: 400, fontFamily: "Inter, sans-serif", lineHeight: "28px" }}>Email: info@bharatsmartstem.com</div>
                </div>
              </div>

              {/* Open time — unchanged */}
              <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ color: "#fff", fontSize: "24px", fontWeight: 600, fontFamily: "Poppins, sans-serif", lineHeight: "32px" }}>Open time</div>
                <div style={{ color: "#fff", fontSize: "18px", fontWeight: 400, fontFamily: "Inter, sans-serif", lineHeight: "28px" }}>Monday - Friday: 10:00 AM - 6:00 PM</div>
              </div>

              {/* Stay Connected — unchanged */}
              <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", gap: "8px" }}>
                <div style={{ color: "#fff", fontSize: "24px", fontWeight: 600, fontFamily: "Poppins, sans-serif", lineHeight: "32px" }}>Stay Connected</div>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  {[
                    { src: "/icons/facebook.png", alt: "Facebook" },
                    { src: "/icons/twitter.png",  alt: "Twitter"  },
                    { src: "/icons/linkedin.png", alt: "LinkedIn" },
                    { src: "/icons/instagram.png",alt: "Instagram"},
                  ].map((s) => (
                    <Link key={s.alt} href="#" aria-label={s.alt}>
                      <Image src={s.src} alt={s.alt} width={20} height={20} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}