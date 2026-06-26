"use client";

import { useState } from "react";
import { Landmark, FileCheck, Gavel, Globe, ArrowRight } from "lucide-react";
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
          <span className="bg-gradient-to-r from-teal-700 to-royal-900 bg-clip-text text-transparent">
            sécuriser votre développement
          </span>
        </h2>
        <p className="text-center text-slate-500 max-w-3xl mx-auto mb-16 text-lg">
          Un accompagnement taillé pour les entreprises exigeantes qui considèrent le droit comme un levier de croissance.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-0 mb-14 border-b border-slate-200">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`relative px-6 py-4 text-sm font-semibold transition-colors duration-300 flex items-center gap-2
                ${activeTab === service.id
                  ? "text-teal-700"
                  : "text-slate-500 hover:text-slate-700"
                }`}
            >
              <span className="flex items-center gap-2 whitespace-nowrap">
                {iconMap[service.icon]}
                {service.title}
              </span>
              {/* Indicateur actif : ligne inférieure */}
              {activeTab === service.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-700 to-royal-900" />
              )}
            </button>
          ))}
        </div>

        {/* Contenu de l'onglet actif */}
        <div className="max-w-5xl mx-auto bg-white border border-slate-200 shadow-sm">
          <div className="p-10 md:p-14 flex flex-col md:flex-row gap-10 items-start">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-700 to-royal-900 flex items-center justify-center text-white shrink-0">
              {iconMap[activeService.icon]}
            </div>
            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-slate-900">
                {activeService.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {activeService.fullDescription}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-teal-700 font-semibold text-sm hover:text-teal-800 transition-colors group/cta"
              >
                Planifier une consultation
                <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}