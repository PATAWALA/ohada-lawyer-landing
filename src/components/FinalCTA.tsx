import { Calendar, MessageSquare } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-slate-50" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          Ne laissez pas une faille contractuelle{" "}
          <span className="text-royal-900">fragiliser vos ambitions.</span>
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          Disponibilité limitée : 4 créneaux de diagnostic stratégique ouverts
          cette semaine pour les dirigeants.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <MagneticButton
            icon={<Calendar className="w-5 h-5" />}
            className="text-base px-10 py-5"
          >
            Réserver mon diagnostic (15 min)
          </MagneticButton>
          <a
            href="mailto:contact@cabinet-ohada.com"
            className="inline-flex items-center gap-2 text-slate-700 font-medium hover:text-teal-700 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Échanger avec un associé
          </a>
        </div>
      </div>
    </section>
  );
}
