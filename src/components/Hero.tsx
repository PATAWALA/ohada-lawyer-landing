import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
      {/* Image architecturale en arrière-plan */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80"
          alt=""
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-900/80" />
      </div>

      {/* Contenu centré */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-10">
          {/* Ligne décorative centrée */}
          <div className="w-16 h-px bg-teal-400 mx-auto" />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Sécurisez vos investissements
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-teal-200 bg-clip-text text-transparent">
              et blindez vos contrats
            </span>{" "}
            sous la juridiction OHADA.
          </h1>

          <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Architecture juridique sur‑mesure et arbitrage d’affaires pour les
            entreprises en pleine expansion.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link href="/contact">
              <MagneticButton
                icon={<Calendar className="w-5 h-5" />}
                className="!rounded-none px-8 py-4 text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Planifier un diagnostic (15 min)
              </MagneticButton>
            </Link>

            <a
              href="#services"
              className="inline-flex items-center gap-2 text-slate-300 font-medium hover:text-teal-400 transition-colors underline underline-offset-4 decoration-slate-500 hover:decoration-teal-400"
            >
              <ArrowRight className="w-4 h-4" />
              Découvrir nos expertises
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}