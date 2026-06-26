import { ShieldAlert, Building2, Scale } from "lucide-react";
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
  ShieldAlert: <ShieldAlert className="w-7 h-7 text-teal-700" />,
  Building2: <Building2 className="w-7 h-7 text-teal-700" />,
  Scale: <Scale className="w-7 h-7 text-teal-700" />,
};

export default function PainPoints() {
  return (
    <section className="py-24 bg-slate-50" id="risques">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">
          Les 3 failles juridiques qui menacent{" "}
          <span className="text-royal-900">votre croissance en Afrique.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200/60 flex flex-col items-start gap-5 transition-shadow hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                {iconMap[point.icon]}
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
                {point.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
