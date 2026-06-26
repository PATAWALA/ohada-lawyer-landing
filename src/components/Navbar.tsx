"use client";

import { useState } from "react";
import { Menu, X, Calendar } from "lucide-react";
import MagneticButton from "./MagneticButton";
import Link from "next/link";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Ressources", href: "/ressources" },
  { label: "Boutique", href: "/boutique" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/90 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo structuré */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Monogramme */}
          <div className="w-8 h-8 bg-slate-900 flex items-center justify-center text-white font-bold text-sm">
            C
          </div>
          {/* Texte */}
          <div className="flex flex-col">
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase leading-none">
              Cabinet
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-900 leading-none mt-0.5">
              OHADA
            </span>
          </div>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link, index) => (
            <div key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className="relative px-5 py-2 text-[15px] font-medium text-slate-600 hover:text-teal-700 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-teal-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
              {index < navLinks.length - 1 && (
                <span className="w-px h-4 bg-slate-200" />
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <MagneticButton
            icon={<Calendar className="w-4 h-4" />}
            className="!rounded-none px-6 py-2.5 text-sm shadow-md ml-6"
          >
            Prendre RDV
          </MagneticButton>
        </div>

        {/* Burger mobile */}
        <button
          type="button"
          className="md:hidden text-slate-700 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-6 flex flex-col gap-5 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-700 hover:text-teal-700 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <MagneticButton
            icon={<Calendar className="w-4 h-4" />}
            className="!rounded-none w-full mt-2"
          >
            Prendre RDV
          </MagneticButton>
        </div>
      )}
    </header>
  );
}