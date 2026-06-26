"use client";

import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import MagneticButton from "./MagneticButton";
import type { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "Expertises", href: "#services" },
  { label: "Méthodologie", href: "#methodology" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-slate-900"
        >
          Cabinet <span className="text-teal-700">OHADA</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-teal-700 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <MagneticButton icon={<Calendar className="w-4 h-4" />}>
            Prendre RDV
          </MagneticButton>
        </nav>

        {/* Mobile menu trigger */}
        <button
          type="button"
          className="md:hidden text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-700"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <MagneticButton
            icon={<Calendar className="w-4 h-4" />}
            className="w-full"
          >
            Prendre RDV
          </MagneticButton>
        </div>
      )}
    </header>
  );
}
