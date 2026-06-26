import type { Step } from "@/types";

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
      "Mise en place de solutions sur-mesure : refonte statutaire, sécurisation des conventions d’actionnaires, clauses d’arbitrage CCJA.",
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
    <section className="py-24 bg-white" id="methodology">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-6">
          Une méthode en 3 temps,{" "}
          <span className="text-teal-700">rapide et sans faille</span>
        </h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-20 text-lg">
          Nous appliquons une rigueur militaire pour sécuriser vos opérations
          sans ralentir votre business.
        </p>

        <div className="grid md:grid-cols-3 gap-10 relative">
          {steps.map((step, index) => (
            <div key={step.step} className="flex flex-col items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-2xl font-bold text-teal-700 shadow-sm">
                0{step.step}
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/3 w-full h-px bg-slate-200 -z-10 translate-y-[-50%]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
