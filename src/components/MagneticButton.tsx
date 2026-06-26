"use client";

import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
}

export default function MagneticButton({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}: MagneticButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 font-semibold tracking-wide rounded-xl transition-all duration-300 ease-out cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold-500";

  const variants = {
    primary:
      "bg-gold-500 text-white px-8 py-4 text-lg shadow-md hover:scale-[1.03] hover:shadow-xl glow-amber animate-pulse-glow",
    secondary:
      "border border-slate-300 bg-white text-slate-900 px-6 py-3 text-base hover:bg-slate-50 hover:border-slate-400 hover:shadow-sm",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
}
