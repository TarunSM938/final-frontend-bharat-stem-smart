"use client";

import React from "react";

// --- Types ---
interface Course {
  id: number;
  title: string;
  description: string;
  accentColor: string;
  image: string;
}

// --- Data: 8 Cards (2 rows × 4 columns) ---
const courses: Course[] = [
  {
    id: 1,
    title: "Robotics & AI",
    description:
      "Design, build, and program intelligent robots while exploring core concepts of artificial intelligence like automation, machine learning, and real-world problem solving.",
    accentColor: "#F6841F",
    image: "https://i.pinimg.com/736x/f2/65/ec/f265ece348963c77ff879f5830e361f0.jpg",
  },
  {
    id: 2,
    title: "STEM Lab Setup",
    description:
      "End-to-end setup of advanced STEM laboratories in schools, including hardware kits, structured curriculum, teacher training, and continuous technical support.",
    accentColor: "#1F6FBF",
    image: "https://i.pinimg.com/1200x/49/34/0b/49340ba51d98a747f6be0d7f8dac1d9f.jpg",
  },
  {
    id: 3,
    title: "After School Programs",
    description:
      "Engaging programs beyond classroom hours including weekday clubs, weekend workshops, seasonal camps, and competition preparation to enhance practical learning.",
    accentColor: "#169A4C",
    image: "https://i.pinimg.com/1200x/fc/fa/2b/fcfa2b4b8add1c8eab01d54645220fe7.jpg",
  },
  {
    id: 4,
    title: "IoT & Arduino",
    description:
      "Create smart electronic systems using Arduino, sensors, and IoT technologies while learning circuit design, coding, and real-time data applications.",
    accentColor: "#F6841F",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=220&fit=crop",
  },
  {
    id: 5,
    title: "Space Lab Setup",
    description:
      "Introduce students to space science with hands-on learning tools, simulations, and experiments related to astronomy, satellites, and space technology.",
    accentColor: "#F6841F",
    image: "https://i.pinimg.com/1200x/35/c5/cc/35c5cc1368f51888ecc013d9b8087c59.jpg",
  },
  {
    id: 6,
    title: "AR & VR Technology",
    description:
      "Explore immersive technologies by building augmented and virtual reality experiences for education, gaming, and real-world simulations.",
    accentColor: "#1F6FBF",
    image: "https://i.pinimg.com/736x/74/9c/49/749c4943782117de3467082b0799396f.jpg",
  },
  {
    id: 7,
    title: "Drone Technology",
    description:
      "Learn to design, build, and operate drones while understanding aerodynamics, flight control systems, and real-world applications like mapping and surveillance.",
    accentColor: "#169A4C",
    image: "https://i.pinimg.com/736x/a7/96/74/a7967431d6a7250e4fb5ca3a63fe2c02.jpg",
  },
  {
    id: 8,
    title: "Coding & App Development",
    description:
      "Develop problem-solving skills through coding and build real-world applications, websites, and mobile apps using modern programming tools and frameworks.",
    accentColor: "#F6841F",
    image: "/programs/p8.jpeg",
  },
];

// --- Arrow Icon ---
const ArrowIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8H13M13 8L9 4M13 8L9 12"
      stroke="#2C2B2B"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// --- Single Card ---
const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = `https://placehold.co/400x164/e8e8e8/555555?text=${encodeURIComponent(
      course.title
    )}`;
  };

  return (
    <div
      className="flex flex-col flex-1 min-w-0 rounded-[20px] border border-black bg-white overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      style={{ boxShadow: `0px 3px 0px ${course.accentColor}` }}
    >
      {/* Image */}
      <div className="w-full h-[164px] overflow-hidden shrink-0">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
          onError={handleImgError}
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 items-center gap-4 p-6">
        {/* Title */}
        <h3
          className="w-full text-center text-[#2C2B2B] font-bold"
          style={{
            fontSize: "20px",
            fontFamily: "Inter, sans-serif",
            lineHeight: "28px",
          }}
        >
          {course.title}
        </h3>

        {/* Description */}
        <p
          className="w-full text-center text-[#2C2B2B] flex-1"
          style={{
            fontSize: "14px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            lineHeight: "23px",
          }}
        >
          {course.description}
        </p>

        {/* CTA */}
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 group hover:bg-gray-50"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <span
            className="text-[#2C2B2B] font-semibold"
            style={{ fontSize: "16px", lineHeight: "18px" }}
          >
            Know more
          </span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

// --- Main Section ---
const STEMSolutions: React.FC = () => {
  const row1 = courses.slice(0, 4);
  const row2 = courses.slice(4, 8);

  return (
    <section className="w-full bg-white px-4 py-8 sm:px-8 sm:py-16 lg:px-[159px] lg:py-[180px]">
      <div className="flex flex-col gap-10 lg:gap-[72px]">

        {/* ── Header ── */}
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-start lg:gap-0 w-full">
          {/* Left: label + title */}
          <div className="flex flex-col gap-4 lg:gap-6 lg:max-w-[680px]">
            <div className="flex items-center">
              <span
                className="text-[#2C2B2B] font-medium"
                style={{
                  fontSize: "14px",
                  fontFamily: "IBM Plex Sans Condensed, sans-serif",
                  lineHeight: "20px",
                  width: "117px",
                  textAlign: "center",
                }}
              >
                WHAT WE OFFER
              </span>
              <div className="flex items-center gap-[3px]">
                <span className="w-[10px] h-[10px] rounded-full bg-[#F6841F] inline-block" />
                <span className="w-[10px] h-[10px] rounded-full bg-[#196FAC] inline-block" />
                <span className="w-[10px] h-[10px] rounded-full bg-[#169A4C] inline-block" />
              </div>
            </div>

            <h2
              className="text-[#2C2B2B] font-semibold text-[32px] leading-[36px] sm:text-[40px] sm:leading-[44px] lg:text-[48px] lg:leading-[48px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              STEM Solutions
            </h2>
          </div>

          {/* Right: subtitle */}
          <div className="lg:pt-1">
            <p
              className="text-[#2C2B2B] font-normal text-[16px] leading-[26px] sm:text-[18px] sm:leading-[28px] lg:text-[21px] lg:leading-[31.5px] lg:max-w-[380px]"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Practical Learning for the Next Generation
            </p>
          </div>
        </div>

        {/* ── Cards ── */}
        {/* Mobile & tablet: single unified 1-col (xs) or 2-col (sm) grid */}
        {/* Desktop (lg+): two separate rows of 4 columns, exactly as before */}
        <div className="flex flex-col gap-3">

          {/* Mobile / Tablet grid (hidden on lg+) */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Desktop layout (hidden below lg) */}
          <div className="hidden lg:flex lg:flex-col lg:gap-3">
            <div className="grid grid-cols-4 gap-3">
              {row1.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {row2.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default STEMSolutions;