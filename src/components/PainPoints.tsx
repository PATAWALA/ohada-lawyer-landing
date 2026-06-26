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
  ShieldAlert: <ShieldAlert className="w-7 h-7 text-white" />,
  Building2: <Building2 className="w-7 h-7 text-white" />,
  Scale: <Scale className="w-7 h-7 text-white" />,
};

export default function PainPoints() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-6">
          Les 3 failles juridiques qui menacent{" "}
          <span className="bg-gradient-to-r from-teal-700 to-royal-900 bg-clip-text text-transparent">
            votre croissance en Afrique.
          </span>
        </h2>
        <p className="text-center text-slate-500 max-w-2xl mx-auto mb-16 text-lg">
          Des risques concrets que nous transformons en leviers de sécurité.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className="group flex flex-col bg-gradient-to-br from-teal-600/10 to-royal-900/10 border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden relative"
            >
              {/* Numéro parfaitement lisible en haut à droite */}
              <div className="absolute top-4 right-4 text-6xl font-extrabold text-slate-300 select-none leading-none">
                {(index + 1).toString().padStart(2, '0')}
              </div>

              <div className="p-8 flex flex-col gap-5 flex-1 relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-700 to-royal-900 flex items-center justify-center">
                  {iconMap[point.icon]}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-1">
                  {point.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-teal-700 font-semibold text-sm hover:text-teal-800 transition-colors mt-2 group/cta"
                >
                  Se faire accompagner
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}