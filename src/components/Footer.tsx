// src/components/Footer.tsx
import { Scale, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-6 h-6 text-teal-400" />
            <span className="text-xl font-bold text-white">Cabinet OHADA</span>
          </div>
          <p className="text-sm leading-relaxed">
            Excellence juridique pour vos investissements en Afrique.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-teal-400 transition-colors">Expertises</a></li>
            <li><a href="/ressources" className="hover:text-teal-400 transition-colors">Ressources</a></li>
            <li><a href="/boutique" className="hover:text-teal-400 transition-colors">Boutique</a></li>
            <li><a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-400" />
              [Adresse du cabinet]
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-400" />
              +225 00 00 00 00
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-400" />
              contact@cabinet-ohada.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Cabinet OHADA. Tous droits réservés.
      </div>
    </footer>
  );
}