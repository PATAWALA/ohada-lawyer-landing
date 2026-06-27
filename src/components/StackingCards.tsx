"use client";

import { useEffect, useRef } from "react";

interface CardItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  accentColor?: string; // ex: "#2563EB"
}

interface StackingCardsProps {
  items: CardItem[];
  /** Hauteur totale de la section en multiple de 100vh (par défaut 3 items => 300vh) */
  totalHeight?: number;
}

export default function StackingCards({ items, totalHeight }: StackingCardsProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const height = totalHeight || items.length * 100; // vh

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const progress = (scrollY - sectionTop) / (sectionHeight - window.innerHeight);

      const cards = sectionRef.current.querySelectorAll<HTMLDivElement>(".sticky-card");
      cards.forEach((card, index) => {
        const cardStart = index / items.length;
        const cardEnd = (index + 1) / items.length;

        if (progress >= cardStart && progress <= cardEnd) {
          card.style.opacity = "1";
          card.style.transform = "translateY(0) scale(1)";
        } else if (progress > cardEnd) {
          card.style.opacity = "0.2";
          card.style.transform = "translateY(-20px) scale(0.95)";
        } else {
          card.style.opacity = "0.2";
          card.style.transform = "translateY(20px) scale(0.95)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items.length]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{ height: `${height}vh` }}
    >
      <div className="max-w-4xl mx-auto px-6 relative h-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="sticky-card border border-slate-200 bg-slate-50 shadow-2xl p-8 md:p-10 transition-all duration-500 ease-out"
            style={{
              position: "sticky",
              top: `${12 + index * 8}%`, // décalage progressif
              opacity: index === 0 ? 1 : 0.2,
              transform: index === 0 ? "none" : "translateY(20px) scale(0.95)",
              zIndex: 10 + index,
            }}
          >
            {item.icon && (
              <div className="mb-4 inline-flex p-3" style={{ backgroundColor: item.accentColor || "#2563EB" }}>
                {item.icon}
              </div>
            )}
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{item.title}</h2>
            <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
            {item.accentColor && (
              <div className="mt-6 w-12 h-1" style={{ backgroundColor: item.accentColor }} />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}