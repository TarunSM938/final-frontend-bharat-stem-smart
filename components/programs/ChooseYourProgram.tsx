"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "@/lib/api";

interface Program {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  image: string | null;
  status: string;
}

function ProgramSkeleton() {
  return (
    <div
      className="w-full lg:w-[384px]"
      style={{
        borderRadius: "20px",
        border: "1px solid #E5E5E5",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <style>{`
        @keyframes shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
      <div style={{ height: "160px", background: "#F3F4F6", animation: "shimmer 1.5s ease-in-out infinite" }} />
      <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ height: "20px", background: "#F3F4F6", borderRadius: "4px", animation: "shimmer 1.5s ease-in-out infinite" }} />
        <div style={{ height: "14px", background: "#F3F4F6", borderRadius: "4px", width: "70%", animation: "shimmer 1.5s ease-in-out infinite" }} />
      </div>
    </div>
  );
}

function ProgramCard({ program }: { program: Program }) {
  const imageUrl = program.image
    ? `${API_BASE_URL}${program.image}`
    : "/programs/robotics.jpg";

  return (
    <div
      className="w-full lg:w-[384px]"
      style={{
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        cursor: "pointer",
        position: "relative",
      }}
    >
      {/* Hover border box */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: "80px",
          borderRadius: "20px",
          outline: "1px solid #000000",
          outlineOffset: "-1px",
          background: "#FFFFFF",
          zIndex: 1,
          transition: "box-shadow 0.3s ease, outline 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow =
            "0px 0px 0px 3px rgba(246,132,31,1.00)";
          (e.currentTarget as HTMLDivElement).style.outline =
            "1px solid #F6841F";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          (e.currentTarget as HTMLDivElement).style.outline =
            "1px solid #000000";
        }}
      />

      {/* Text area */}
      <div
        style={{
          alignSelf: "stretch",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "10px",
          minHeight: "160px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h3
          style={{
            alignSelf: "stretch",
            textAlign: "center",
            color: "#27272A",
            fontFamily: "Inter, sans-serif",
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "28px",
            margin: 0,
            whiteSpace: "pre-line",
          }}
        >
          {program.title}
        </h3>
        <p
          style={{
            alignSelf: "stretch",
            textAlign: "center",
            color: "#27272A",
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "24px",
            margin: 0,
          }}
        >
          {program.description}
        </p>
        {program.price > 0 && (
          <p
            style={{
              alignSelf: "stretch",
              textAlign: "center",
              color: "#F6841F",
              fontFamily: "Poppins, sans-serif",
              fontSize: "16px",
              fontWeight: 600,
              margin: 0,
            }}
          >
            ₹{program.price.toLocaleString("en-IN")}
          </p>
        )}
      </div>

      {/* Ghost bars */}
      <div
        style={{
          width: "291px",
          height: "16px",
          background: "#D9D9D9",
          borderRadius: "12px 12px 0 0",
          alignSelf: "center",
          position: "relative",
          zIndex: 2,
        }}
      />
      <div
        style={{
          width: "332px",
          height: "16px",
          background: "#E6E6E6",
          borderRadius: "12px 12px 0 0",
          alignSelf: "center",
          position: "relative",
          zIndex: 2,
          marginTop: "-2px",
        }}
      />

      {/* Image */}
      <div
        style={{
          alignSelf: "stretch",
          height: "164px",
          minHeight: "164px",
          maxHeight: "164px",
          position: "relative",
          zIndex: 3,
          borderRadius: "0 0 20px 20px",
          overflow: "hidden",
          marginTop: "-2px",
          flexShrink: 0,
        }}
      >
        <img
        src={`http://127.0.0.1:8000${program.image}`}
        alt={program.title}
        style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        }}
      />
        <div
          style={{
            position: "absolute",
            bottom: "12px",
            right: "12px",
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 4,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 7L7 17M7 17H17M7 17V7"
              stroke="#000000"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ChooseYourProgram() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/programs/`);
        if (!response.ok) throw new Error("Failed to fetch programs");
        const data = await response.json();
        setPrograms(data);
      } catch (err) {
        console.error("Error fetching programs:", err);
        setError("Failed to load programs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <section className="bg-white pt-24 pb-16 px-4 lg:px-[10px]">
      <div className="mx-auto" style={{ maxWidth: "1240px" }}>

        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-0 mb-10 lg:mb-16">
          <div className="w-full lg:w-[552px]">
            <div className="flex items-center gap-1 mb-6">
              <span
                style={{
                  fontFamily: "IBM Plex Sans Condensed",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#27272A",
                }}
              >
                Our programs
              </span>
              <span
                className="inline-block w-2.5 h-2.5 rounded-full"
                style={{ background: "#F6841F" }}
              />
              <span
                className="inline-block w-2.5 h-2.5 rounded-full"
                style={{ background: "#196FAC" }}
              />
              <span
                className="inline-block w-2.5 h-2.5 rounded-full"
                style={{ background: "#169A4C" }}
              />
            </div>
            <h2
              className="text-[30px] lg:text-[48px]"
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                lineHeight: "1.15",
                color: "#27272A",
                margin: 0,
              }}
            >
              Choose your program
            </h2>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <p
              style={{
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "32px",
                color: "#27272A",
                margin: 0,
                textAlign: "right",
                maxWidth: "360px",
              }}
            >
              A complete end-to-end STEM lab solution for your school.
            </p>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 40px",
              color: "#EF4444",
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
            }}
          >
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[12px] mt-0 lg:mt-[64px]">
            <ProgramSkeleton />
            <ProgramSkeleton />
            <ProgramSkeleton />
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && programs.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "60px 40px",
              color: "#9CA3AF",
              fontFamily: "Inter, sans-serif",
              fontSize: "18px",
            }}
          >
            No programs available yet. Check back soon!
          </div>
        )}

        {/* Programs List */}
        {!loading && !error && programs.length > 0 && (
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-[12px] mt-0 lg:mt-[64px] lg:justify-start lg:items-start">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
