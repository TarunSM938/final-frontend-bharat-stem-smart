"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Program", href: "/program" },
    { label: "STEM Lab Setup", href: "/lab-setup" },
  ];

  return (
    <div
      // ↓ mobile: tighter padding; md+ keeps original px-12 py-9
      className="w-full px-4 py-4 md:px-12 md:py-9"
      style={{ background: "transparent", position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
    >
      {/* Navbar pill */}
      <div
        // ↓ mobile: px-4; md+ keeps original px-8
        className="flex flex-row justify-between items-center px-4 md:px-8 py-3 mx-auto"
        style={{
          background: "#FFFEFB",
          border: "1px solid #2C2B2B",
          borderRadius: "20px",
          maxWidth: "1344px",
          height: "90px",
        }}
      >
        {/* Logo — unchanged */}
        <Link href="/">
          <div
            className="relative"
            style={{ width: "100px", height: "100px", mixBlendMode: "multiply" }}
          >
            <Image
              src="/logo/logo.png"
              alt="Bharat Smart STEM"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav Links — unchanged */}
        <div className="hidden md:flex flex-row items-center gap-12">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base uppercase transition-colors"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: pathname === link.href ? 600 : 300,
                color: "#2C2B2B",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/contact">
            <button
              className="text-white text-base font-bold uppercase transition-opacity hover:opacity-90"
              style={{
                background: "#F6841F",
                borderRadius: "8px",
                padding: "10px 28px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                border: "none",
                cursor: "pointer",
              }}
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger — unchanged */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-6 h-0.5 transition-all"
            style={{
              background: "#2C2B2B",
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all"
            style={{
              background: "#2C2B2B",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-all"
            style={{
              background: "#2C2B2B",
              transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu — unchanged */}
      {menuOpen && (
        <div
          className="md:hidden mt-2 px-6 py-4 flex flex-col gap-4"
          style={{
            background: "#FFFEFB",
            border: "1px solid #2C2B2B",
            borderRadius: "16px",
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-base uppercase"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: pathname === link.href ? 600 : 400,
                color: "#2C2B2B",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            <button
              className="w-full text-white text-base font-bold uppercase"
              style={{
                background: "#F6841F",
                borderRadius: "8px",
                padding: "10px 28px",
                fontFamily: "Inter, sans-serif",
                border: "none",
                cursor: "pointer",
              }}
            >
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}