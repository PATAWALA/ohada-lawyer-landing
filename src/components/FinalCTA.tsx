import { Calendar, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-slate-900" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Ne laissez pas une faille contractuelle{" "}
          <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            fragiliser vos ambitions.
          </span>
        </h2>
        <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto">
          Disponibilité limitée : 4 créneaux de diagnostic stratégique ouverts
          cette semaine pour les dirigeants.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <MagneticButton
            icon={<Calendar className="w-5 h-5" />}
            className="!rounded-none px-10 py-5 text-base shadow-md"
          >
            Réserver mon diagnostic (15 min)
          </MagneticButton>

          <a
            href="mailto:contact@cabinet-ohada.com"
            className="inline-flex items-center gap-2 text-slate-300 font-medium hover:text-teal-400 transition-colors group/cta"
          >
            Échanger avec un associé
            <ArrowRight className="w-5 h-5 group-hover/cta:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}