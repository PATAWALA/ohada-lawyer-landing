import Image from "next/image";
import { User, Award, Scale } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Photo – format carré strict, bordures nettes */}
        <div className="relative flex justify-center">
          <div className="w-72 h-72 lg:w-[26rem] lg:h-[26rem] overflow-hidden border-4 border-slate-200 shadow-2xl">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait de l'avocat"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {/* Badge "Expert" en coin, carré */}
          <div className="absolute -bottom-3 -right-3 bg-teal-700 text-white px-5 py-2 shadow-lg flex items-center gap-2">
            <Scale className="w-5 h-5" />
            <span className="text-sm font-semibold">Expert OHADA</span>
          </div>
        </div>

        {/* Texte */}
        <div className="space-y-7">
          <div>
            <p className="text-teal-700 font-semibold tracking-widest uppercase text-sm mb-2">
              Votre partenaire juridique
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Maître [Nom de l&apos;Avocat]
            </h2>
          </div>

          <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
            <p>
              Avocat au Barreau de [Ville], spécialiste du droit des affaires
              OHADA depuis plus de 15 ans. J’accompagne les dirigeants et
              investisseurs dans la sécurisation de leurs opérations en Afrique,
              avec une approche alliant rigueur technique et vision stratégique.
            </p>
            <p>
              Diplômé de [Université], formé à l’arbitrage international (CCJA),
              je mets mon expertise au service de votre croissance.
            </p>
          </div>

          {/* Bouton "En savoir plus" – style secondaire, coins droits */}
          <a
            href="/a-propos"
            className="inline-flex items-center gap-3 bg-white border-2 border-slate-300 text-slate-800 font-semibold px-8 py-4 shadow-sm hover:border-teal-700 hover:text-teal-700 transition-all duration-300 group"
          >
            <User className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
}