import Image from "next/image";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import { articles } from "@/data/articles";

export const metadata = {
  title: "Ressources juridiques – Cabinet OHADA",
  description: "Analyses, guides et livres blancs sur le droit des affaires OHADA.",
};

export default function RessourcesPage() {
  return (
    <main className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Ressources juridiques
        </h1>
        <p className="text-slate-500 text-lg max-w-3xl mb-12">
          Approfondissez votre maîtrise du droit OHADA avec nos publications exclusives.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-48 relative overflow-hidden bg-slate-100">
                {article.imageUrl ? (
                  <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-slate-400">
                    <BookOpen className="w-10 h-10" />
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-500">
                  <span className="bg-slate-100 border border-slate-200 px-2 py-1">
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

                <h2 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {article.title}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  {article.excerpt}
                </p>

                <a
                  href={`/ressources/${article.slug}`}
                  className="inline-flex items-center gap-2 text-teal-700 font-semibold text-sm hover:text-teal-800 transition-colors mt-auto group/cta"
                >
                  Lire l&rsquo;analyse
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}