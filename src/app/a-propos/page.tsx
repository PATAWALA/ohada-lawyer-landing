// src/app/a-propos/page.tsx
import Image from "next/image";
import { Award, User, ArrowRight, Building2, Scale, Globe, BookOpen, FileCheck, Briefcase, GraduationCap, Phone, Mail, MessageCircle } from "lucide-react";

export const metadata = {
  title: "À propos – Cabinet OHADA",
  description: "Découvrez Maître Abdoulaye Koné, avocat spécialisé en droit OHADA, 18 ans d’expérience en sécurisation juridique des investissements en Afrique.",
};

export default function AboutPage() {
  return (
    <main className="pt-28 pb-20 bg-white">
      {/* HERO */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Portrait */}
          <div className="flex justify-center">
            <div className="relative w-72 h-80 lg:w-80 lg:h-[26rem] border-2 border-slate-200 shadow-2xl">
              <Image
                src="/images/portrait.jpg"
                alt="Portrait de Maître Abdoulaye Koné"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-teal-700 to-royal-900 text-white px-3 py-1.5 text-sm font-semibold flex items-center gap-2 shadow-lg">
                <Award className="w-4 h-4" />
                Expert OHADA
              </div>
            </div>
          </div>

          {/* Présentation */}
          <div className="space-y-6">
            <p className="text-teal-700 font-semibold uppercase tracking-widest text-sm">
              Votre partenaire juridique
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
              Maître Abdoulaye Koné
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Avocat au Barreau d&apos;Abidjan, spécialiste du droit des affaires
              OHADA depuis 18 ans. J&apos;accompagne les dirigeants et investisseurs
              dans la sécurisation de leurs opérations en Afrique, avec une approche
              alliant rigueur technique et vision stratégique.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Diplômé de l&apos;Université Paris 1 Panthéon-Sorbonne (Master 2 Droit
              des affaires internationales) et de l&apos;École de Formation du Barreau
              de Paris, je suis également arbitre agréé auprès de la CCJA.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors group/cta"
              >
                <User className="w-5 h-5" />
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/225XXXXXXXXXX" // Remplacer par le vrai numéro WhatsApp
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 text-sm font-semibold shadow-md hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PARCOURS – TIMELINE */}
      <div className="mt-24 bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Mon parcours
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 transform md:-translate-x-px" />

            {[
              {
                date: "2006",
                title: "Master 2 Droit des affaires internationales",
                description: "Université Paris 1 Panthéon-Sorbonne. Spécialisation en droit des investissements et arbitrage.",
                icon: GraduationCap,
              },
              {
                date: "2008",
                title: "Prestation de serment au Barreau d'Abidjan",
                description: "Début de carrière en cabinet d'affaires international, gestion de dossiers de fusions-acquisitions en zone UEMOA.",
                icon: Briefcase,
              },
              {
                date: "2012",
                title: "Fondation du Cabinet OHADA",
                description: "Création d'une structure dédiée à la sécurisation juridique des investissements transfrontaliers et à l'arbitrage CCJA.",
                icon: Building2,
              },
              {
                date: "2015",
                title: "Arbitre agréé CCJA",
                description: "Inscription sur la liste des arbitres de la Cour Commune de Justice et d'Arbitrage de l'OHADA.",
                icon: Scale,
              },
              {
                date: "2020",
                title: "Publication de l'ouvrage « Maîtriser le risque juridique en Afrique de l'Ouest »",
                description: "Ouvrage de référence sur la structuration des investissements et la conformité OHADA.",
                icon: BookOpen,
              },
              {
                date: "2024",
                title: "Lancement du Kit de Conformité OHADA",
                description: "Création d'outils digitaux pour démocratiser l'accès à la sécurité juridique des PME et startups.",
                icon: FileCheck,
              },
            ].map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-6 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 top-0 w-3 h-3 bg-teal-700 border-2 border-white shadow transform -translate-x-1/2" />

                <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1 text-xs font-semibold text-teal-700 mb-2`}>
                    <item.icon className="w-3 h-3" />
                    {item.date}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMPÉTENCES & DOMAINES D'EXPERTISE */}
      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Domaines d&apos;expertise
          </h2>
          <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">
            Une maîtrise pointue des mécanismes juridiques OHADA au service de votre
            développement.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Droit des Sociétés",
                description: "Montages, fusions, restructurations et conformité des entités commerciales dans les 17 États membres.",
              },
              {
                icon: Globe,
                title: "Investissements transfrontaliers",
                description: "Sécurisation des flux, conventions fiscales, contrôle des changes et traités bilatéraux.",
              },
              {
                icon: Scale,
                title: "Arbitrage international",
                description: "Représentation devant la CCJA et les tribunaux arbitraux, exequatur et recouvrement.",
              },
              {
                icon: FileCheck,
                title: "Conformité & Audit",
                description: "Due diligences réglementaires, audit de contrats et programmes de mise en conformité.",
              },
              {
                icon: BookOpen,
                title: "Formation & Publications",
                description: "Ouvrages, kits pratiques et conférences pour les dirigeants et les équipes juridiques.",
              },
              {
                icon: Briefcase,
                title: "Accompagnement stratégique",
                description: "Conseil sur mesure aux dirigeants pour une croissance sécurisée en Afrique.",
              },
            ].map((exp, idx) => (
              <div key={idx} className="flex flex-col items-start gap-4 bg-slate-50 border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-700 to-royal-900 flex items-center justify-center text-white">
                  <exp.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{exp.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PUBLICATIONS & RÉCOMPENSES */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Publications &amp; distinctions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <BookOpen className="w-8 h-8 text-teal-700 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Ouvrages</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Maîtriser le risque juridique en Afrique de l&apos;Ouest (2020)</li>
                <li>• Guide pratique de l&apos;arbitrage CCJA (2018)</li>
                <li>• Conformité OHADA : levier de croissance (2022)</li>
              </ul>
            </div>
            <div className="bg-white border border-slate-200 p-8 shadow-sm">
              <Award className="w-8 h-8 text-teal-700 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Distinctions</h3>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Avocat de l&apos;année en droit des affaires – Côte d&apos;Ivoire (2023)</li>
                <li>• Membre du Comité scientifique de l&apos;UNIDA</li>
                <li>• Expert auprès de la Commission de l&apos;UEMOA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION CONTACT – FORMULAIRE + WHATSAPP */}
      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-4">
            Discutons de votre projet
          </h2>
          <p className="text-center text-slate-500 text-lg mb-12 max-w-2xl mx-auto">
            Prenez rendez-vous pour un diagnostic stratégique confidentiel et commencez à sécuriser vos ambitions en Afrique.
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Formulaire de contact */}
            <div className="bg-slate-50 border border-slate-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h3>
              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nom complet</label>
                  <input type="text" id="name" name="name" className="w-full border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-700 transition-colors" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-700 transition-colors" placeholder="votre@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Téléphone</label>
                  <input type="tel" id="phone" name="phone" className="w-full border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-700 transition-colors" placeholder="+225 XX XX XX XX" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-teal-700 transition-colors resize-none" placeholder="Décrivez votre besoin juridique..."></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-teal-700 to-royal-900 text-white px-6 py-3 font-semibold text-sm shadow-md hover:shadow-lg transition-shadow flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Bloc WhatsApp + Contact direct */}
            <div className="flex flex-col justify-center space-y-8">
              <div className="bg-green-50 border border-green-200 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-600 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">WhatsApp</h3>
                </div>
                <p className="text-slate-600 text-sm mb-6">
                  Échangez directement avec Maître Koné ou son équipe pour une réponse rapide.
                </p>
                <a
                  href="https://wa.me/225XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 font-semibold text-sm shadow-md hover:bg-green-700 transition-colors w-full justify-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  Discuter sur WhatsApp
                </a>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-700 to-royal-900 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Appelez-nous</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Disponible du lundi au vendredi, de 8h à 18h.
                </p>
                <a href="tel:+22500000000" className="text-teal-700 font-bold text-xl hover:text-teal-800 transition-colors">
                  +225 00 00 00 00
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}