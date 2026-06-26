import { Clock, ArrowRight, BookOpen } from "lucide-react";
import type { Article } from "@/types";

const articles: Article[] = [
  {
    slug: "guide-creation-filiale-ohada",
    title: "Le guide ultime de la création de filiale en zone OHADA",
    excerpt:
      "Structure juridique, fiscalité optimisée et pièges à éviter lors de l’implantation d’une filiale dans l’espace OHADA.",
    readingTime: 8,
    date: "2026-05-10",
    category: "Droit des sociétés",
  },
  {
    slug: "arbitrage-ccja-strategie",
    title: "Arbitrage CCJA : comment sécuriser l’exécution de vos sentences",
    excerpt:
      "Mécanismes procéduraux et leviers stratégiques pour garantir l’effectivité de vos sentences arbitrales en Afrique.",
    readingTime: 12,
    date: "2026-06-02",
    category: "Contentieux & Arbitrage",
  },
  {
    slug: "investissement-conformite-fiscale",
    title: "Investissements transfrontaliers et conformité fiscale : le duo gagnant",
    excerpt:
      "Panorama des conventions fiscales et bonnes pratiques pour structurer vos flux sans exposition inutile.",
    readingTime: 10,
    date: "2026-04-15",
    category: "Fiscalité",
  },
];

export default function ResourcesHub() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Analyses juridiques & ressources stratégiques
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Des publications exigeantes pour anticiper les mutations du droit
            des affaires en Afrique.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group bg-slate-50 rounded-2xl p-6 border border-slate-200/70 hover:border-teal-200 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-full h-44 bg-slate-200 rounded-xl mb-5 flex items-center justify-center overflow-hidden">
                <BookOpen className="w-10 h-10 text-slate-400" />
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-3">
                <span className="bg-slate-200 px-2 py-1 rounded-full">
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readingTime} min
                </span>
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                {article.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
                {article.excerpt}
              </p>

              <a
                href={`/ressources/${article.slug}`}
                className="inline-flex items-center gap-2 text-teal-700 font-semibold text-sm hover:gap-3 transition-all mt-auto"
              >
                Lire l’analyse
                <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
