"use client";

import { useState } from "react";
import { Landmark, FileCheck, Gavel, Globe } from "lucide-react";
import type { Service } from "@/types";

const services: Service[] = [
  {
    id: "corporate",
    icon: "Landmark",
    title: "Droit des Sociétés OHADA",
    shortDescription: "Création, restructuration et mise en conformité.",
    fullDescription:
      "Nous concevons des montages sociétaires robustes (SAS, SARL, GIE) alignés sur l’Acte uniforme, optimisant votre gouvernance et la protection de vos associés.",
  },
  {
    id: "compliance",
    icon: "FileCheck",
    title: "Audit de Conformité",
    shortDescription: "Due diligence réglementaire et contractuelle.",
    fullDescription:
      "Audit complet de vos contrats, statuts et processus internes pour identifier les risques OHADA avant qu’ils ne se transforment en litiges.",
  },
  {
    id: "arbitration",
    icon: "Gavel",
    title: "Arbitrage & Contentieux",
    shortDescription: "Défense stratégique devant les juridictions OHADA.",
    fullDescription:
      "Représentation devant la CCJA et les tribunaux arbitraux, avec une approche résolument orientée résultats pour préserver vos actifs.",
  },
  {
    id: "investment",
    icon: "Globe",
    title: "Structuration d’Investissements",
    shortDescription: "Sécurisation des flux transfrontaliers.",
    fullDescription:
      "Nous architecturons vos investissements en zone OHADA en tenant compte des conventions fiscales, du contrôle des changes et des traités bilatéraux.",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  Landmark: <Landmark className="w-6 h-6" />,
  FileCheck: <FileCheck className="w-6 h-6" />,
  Gavel: <Gavel className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>(services[0].id);

  const activeService = services.find((s) => s.id === activeTab) ?? services[0];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-6">
          Des solutions d’excellence pour{" "}
          <span className="text-teal-700">sécuriser votre développement</span>
        </h2>
        <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16 text-lg">
          Un accompagnement taillé pour les entreprises exigeantes qui
          considèrent le droit comme un levier de croissance.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === service.id
                  ? "bg-teal-700 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span className="flex items-center gap-2">
                {iconMap[service.icon]}
                {service.title}
              </span>
            </button>
          ))}
        </div>

        <div className="bg-slate-50 rounded-3xl p-10 md:p-14 max-w-5xl mx-auto border border-slate-200/80 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-teal-700 text-white flex items-center justify-center text-xl">
              {iconMap[activeService.icon]}
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              {activeService.title}
            </h3>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            {activeService.fullDescription}
          </p>
          <p className="text-sm text-teal-700 font-medium italic">
            {activeService.shortDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
