import { Mail, Phone, MapPin, Calendar } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export const metadata = {
  title: "Contact – Cabinet OHADA",
  description: "Prenez contact avec le cabinet pour un diagnostic stratégique.",
};

export default function ContactPage() {
  return (
    <main className="pt-28 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Contactez le Cabinet
        </h1>
        <p className="text-lg text-slate-600 mb-12">
          Disponibilité limitée – 4 créneaux de diagnostic stratégique ouverts
          cette semaine.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <MapPin className="w-8 h-8 text-teal-700 mx-auto mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">Adresse</h3>
            <p className="text-slate-600 text-sm">
              [Adresse complète]
              <br />
              Abidjan, Côte d’Ivoire
            </p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <Phone className="w-8 h-8 text-teal-700 mx-auto mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">Téléphone</h3>
            <p className="text-slate-600 text-sm">+225 00 00 00 00</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <Mail className="w-8 h-8 text-teal-700 mx-auto mb-4" />
            <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
            <p className="text-slate-600 text-sm">contact@cabinet-ohada.com</p>
          </div>
        </div>

        <MagneticButton icon={<Calendar className="w-5 h-5" />}>
          Réserver mon diagnostic (15 min)
        </MagneticButton>
      </div>
    </main>
  );
}