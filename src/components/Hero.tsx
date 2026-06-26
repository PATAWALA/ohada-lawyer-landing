import { ArrowRight, ChevronDown } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            Sécurisez vos investissements{" "}
            <span className="text-royal-900">et blindez vos contrats</span> sous
            la juridiction OHADA.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
            Architecture juridique sur-mesure et arbitrage d’affaires pour les
            entreprises en pleine expansion.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <MagneticButton icon={<ArrowRight className="w-5 h-5" />}>
              Planifier un diagnostic stratégique (15 min)
            </MagneticButton>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-slate-700 font-medium hover:text-teal-700 transition-colors"
            >
              <ChevronDown className="w-4 h-4" />
              Découvrir nos expertises
            </a>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative hidden lg:flex justify-center">
          <div className="w-80 h-96 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center p-6 relative shadow-sm">
            <div className="absolute top-4 left-4 w-6 h-6 border-t-4 border-l-4 border-teal-700/40 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t-4 border-r-4 border-teal-700/40 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b-4 border-l-4 border-teal-700/40 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b-4 border-r-4 border-teal-700/40 rounded-br-lg" />
            <div className="w-24 h-24 rounded-full bg-slate-200 flex items-center justify-center mb-6">
              <span className="text-slate-500 text-sm font-medium">Portrait</span>
            </div>
            <p className="text-slate-500 text-sm text-center leading-relaxed">
              Architecture juridique
              <br />
              d’excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
