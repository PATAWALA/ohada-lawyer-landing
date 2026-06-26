import Image from "next/image";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import { Clock, Calendar, ArrowLeft, Share2 } from "lucide-react";
import { markdownToHtml } from "@/lib/markdown";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article introuvable" };
  return {
    title: `${article.title} – Cabinet OHADA`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  // Convertir le Markdown en HTML
  const contentHtml = markdownToHtml(article.content || "");

  return (
    <main className="pt-28 pb-20 bg-white">
      <article className="max-w-4xl mx-auto px-6">
        <a
          href="/ressources"
          className="inline-flex items-center gap-2 text-teal-700 font-medium mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux ressources
        </a>

        {/* Image de couverture */}
        <div className="w-full h-64 md:h-96 border border-slate-200 bg-slate-50 mb-8 relative overflow-hidden">
          {article.imageUrl ? (
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex items-center justify-center h-full text-slate-400">
              <span className="text-lg">Image de couverture</span>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-6">
          <span className="bg-slate-100 border border-slate-200 px-3 py-1 font-medium">
            {article.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {article.readingTime} min de lecture
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(article.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
          {article.title}
        </h1>

        {/* Contenu HTML converti depuis le Markdown */}
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

        <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">
          <a
            href="/ressources"
            className="text-teal-700 font-medium hover:text-teal-800 transition-colors"
          >
            ← Toutes les ressources
          </a>
          <button className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-700 transition-colors">
            <Share2 className="w-4 h-4" />
            Partager
          </button>
        </div>
      </article>
    </main>
  );
}