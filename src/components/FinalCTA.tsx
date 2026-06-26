import { Calendar, ArrowRight, MessageCircle } from "lucide-react";
import MagneticButton from "./MagneticButton";
import Link from "next/link";

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
          <Link href="/contact">
            <MagneticButton
              icon={<Calendar className="w-5 h-5" />}
              className="!rounded-none px-10 py-5 text-base shadow-md"
            >
              Réserver mon diagnostic (15 min)
            </MagneticButton>
          </Link>

          <a
            href="https://wa.me/225XXXXXXXXXX" // Remplacer par le vrai numéro
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-5 text-base font-semibold shadow-md hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Échanger sur WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}