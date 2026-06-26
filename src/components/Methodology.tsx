import type { Step } from "@/types";
import { ArrowRight } from "lucide-react";

const steps: Step[] = [
  {
    step: 1,
    title: "Audit & Diagnostic",
    description:
      "Analyse approfondie de votre structure existante, de vos contrats clés et de votre exposition aux risques OHADA. Rapport confidentiel en 72h.",
  },
  {
    step: 2,
    title: "Blindage Juridique",
    description:
      "Mise en place de solutions sur‑mesure : refonte statutaire, sécurisation des conventions d’actionnaires, clauses d’arbitrage CCJA.",
  },
  {
    step: 3,
    title: "Pilotage Long Terme",
    description:
      "Accompagnement continu et veille réglementaire proactive pour que votre conformité reste un avantage compétitif durable.",
  },
];

export default function Methodology() {
  return (
    <section className="py-24 bg-slate-50" id="methodology">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-6">
          Une méthode en 3 temps,{" "}
          <span className="bg-gradient-to-r from-teal-700 to-royal-900 bg-clip-text text-transparent">
            rapide et sans faille
          </span>
        </h2>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-20 text-lg">
          Nous appliquons une rigueur militaire pour sécuriser vos opérations sans ralentir votre business.
        </p>

        <div className="relative">
          {/* Ligne de progression horizontale (desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-slate-200" />

          <div className="grid md:grid-cols-3 gap-10 relative">
            {steps.map((step, index) => (
              <div key={step.step} className="relative flex flex-col items-start gap-6 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-8">
                {/* Numéro en haut à droite */}
                <div className="absolute top-0 right-0 text-8xl font-extrabold text-slate-100 select-none leading-none p-4">
                  {step.step.toString().padStart(2, "0")}
                </div>

                {/* Cercle de progression sur la ligne (desktop) */}
                <div className="relative z-10 flex items-center gap-4">
                  <div className="hidden md:flex items-center justify-center w-10 h-10 bg-gradient-to-br from-teal-700 to-royal-900 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                </div>

                <p className="text-slate-600 leading-relaxed relative z-10">
                  {step.description}
                </p>

                {/* Lien discret pour en savoir plus */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-teal-700 font-semibold text-sm hover:text-teal-800 transition-colors mt-auto group/cta"
                >
                  Démarrer cette étape
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}