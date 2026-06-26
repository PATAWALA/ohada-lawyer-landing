import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import MagneticButton from "@/components/MagneticButton";
import { ShoppingBag, ShieldCheck, ArrowLeft, Check } from "lucide-react";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: "Produit introuvable" };
  return {
    title: `${product.name} – Cabinet OHADA`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  return (
    <main className="pt-28 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <a
          href="/boutique"
          className="inline-flex items-center gap-2 text-teal-700 font-medium mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à la boutique
        </a>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image produit */}
          <div className="w-full h-80 md:h-[28rem] border border-slate-200 shadow-sm bg-slate-50 relative overflow-hidden">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-slate-400">
                <ShoppingBag className="w-12 h-12" />
              </div>
            )}
          </div>

          {/* Détails */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-700 to-royal-900 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-teal-700">
                {product.type === "book" ? "Ouvrage broché" : "Kit digital"}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              {product.name}
            </h1>
            <div className="text-3xl font-extrabold text-slate-900">
              {product.price} €
            </div>

            {product.longDescription && (
              <div
                className="prose prose-slate max-w-none text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: product.longDescription }}
              />
            )}

            {product.features && (
              <ul className="space-y-3 pt-2">
                {product.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700">
                    <div className="w-5 h-5 mt-0.5 bg-gradient-to-br from-teal-700 to-royal-900 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            )}

            <MagneticButton
              icon={<ShoppingBag className="w-5 h-5" />}
              className="!rounded-none text-base px-10 py-5 w-full sm:w-auto"
            >
              Acheter maintenant
            </MagneticButton>
          </div>
        </div>
      </div>
    </main>
  );
}