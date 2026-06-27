"use client";

import { useEffect, useRef } from "react";
import { ShieldAlert, Building2, Scale, ArrowRight } from "lucide-react";
import type { PainPoint } from "@/types";

const painPoints: PainPoint[] = [
  {
    icon: "ShieldAlert",
    title: "Insécurité contractuelle",
    description:
      "Des clauses fragiles ou non conformes à l’Acte uniforme exposent vos accords à des contentieux ruineux.",
  },
  {
    icon: "Building2",
    title: "Mauvaise structuration sociétaire",
    description:
      "Une holding mal articulée ou des statuts obsolètes freinent vos levées de fonds et votre expansion régionale.",
  },
  {
    icon: "Scale",
    title: "Non-conformité fiscale",
    description:
      "Une méconnaissance des régimes OHADA et des conventions bilatérales peut entraîner des redressements lourds.",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert className="w-8 h-8 text-white" />,
  Building2: <Building2 className="w-8 h-8 text-white" />,
  Scale: <Scale className="w-8 h-8 text-white" />,
};

export default function PainPoints() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const progress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight);

      const cards = sectionRef.current.querySelectorAll<HTMLDivElement>(".sticky-pain-card");
      cards.forEach((card, index) => {
        const cardStart = index / painPoints.length;
        const cardEnd = (index + 1) / painPoints.length;

        if (progress >= cardStart && progress <= cardEnd) {
          card.style.opacity = "1";
          card.style.transform = "translateY(0) scale(1)";
          card.style.zIndex = String(20 + index);
        } else if (progress > cardEnd) {
          card.style.opacity = "0.2";
          card.style.transform = "translateY(-10px) scale(0.98)";
          card.style.zIndex = String(10 + index);
        } else {
          card.style.opacity = "0.2";
          card.style.transform = "translateY(10px) scale(0.98)";
          card.style.zIndex = String(10 + index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: `${painPoints.length * 100}vh` }}
    >
      <div className="max-w-4xl mx-auto px-6 relative h-full">
        {painPoints.map((point, index) => (
          <div
            key={point.title}
            className="sticky-pain-card border border-slate-200 bg-white shadow-2xl p-8 md:p-12 transition-all duration-500 ease-out flex flex-col gap-5"
            style={{
              position: "sticky",
              top: `${12 + index * 8}%`,
              opacity: index === 0 ? 1 : 0.2,
              transform: index === 0 ? "none" : "translateY(10px) scale(0.98)",
              zIndex: 10 + index,
            }}
          >
            {/* Numéro de la faille */}
            <div className="absolute top-4 right-6 text-8xl font-extrabold text-slate-100 select-none leading-none">
              {(index + 1).toString().padStart(2, "0")}
            </div>

            <div className="relative z-10 flex flex-col gap-5 flex-1">
              {/* Icône et titre */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-700 to-royal-900 flex items-center justify-center">
                  {iconMap[point.icon]}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  {point.title}
                </h3>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                {point.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-teal-700 font-semibold text-sm hover:text-teal-800 transition-colors group/cta"
              >
                Se faire accompagner
                <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}