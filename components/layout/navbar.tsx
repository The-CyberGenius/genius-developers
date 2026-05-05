"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-white/80 backdrop-blur-xl",
        scrolled ? "border-b border-[#D2D2D7]" : "border-b border-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-[#1D1D1F] tracking-tight hover:opacity-70 transition-opacity"
        >
          S.
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors duration-200",
                "relative after:absolute after:bottom-[-2px] after:left-0 after:h-[1px]",
                "after:w-0 after:bg-[#1D1D1F] after:transition-all after:duration-300 hover:after:w-full"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-[#1D1D1F] hover:opacity-70 transition-opacity"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#D2D2D7] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-medium text-[#1D1D1F] hover:text-[#6E6E73] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
