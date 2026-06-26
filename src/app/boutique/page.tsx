import Image from "next/image";
import { ShoppingBag, BookMarked, FileCheck, ShieldCheck, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import MagneticButton from "@/components/MagneticButton";

export const metadata = {
  title: "Boutique – Cabinet OHADA",
  description: "Ouvrages et kits juridiques pour dirigeants exigeants.",
};

const iconMap: Record<string, React.ReactNode> = {
  book: <BookMarked className="w-6 h-6" />,
  kit: <FileCheck className="w-6 h-6" />,
};

export default function BoutiquePage() {
  return (
    <main className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          La librairie juridique
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mb-12">
          Des outils concrets pour muscler votre sécurité juridique.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-56 relative overflow-hidden bg-slate-100">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 opacity-60" />
                    <div className="relative z-10 flex flex-col items-center text-slate-500">
                      <span className="w-12 h-12 mb-2 text-teal-700">
                        {iconMap[product.type]}
                      </span>
                      <span className="text-sm font-medium">
                        {product.type === "book" ? "Ouvrage broché" : "Kit digital"}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Contenu */}
              <div className="p-8 flex flex-col gap-4 flex-1">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {product.name}
                  </h2>
                  <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 ml-3" />
                </div>
                <p className="text-slate-600 text-sm leading-relaxed flex-1">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-2xl font-extrabold text-slate-900">
                    {product.price} €
                  </span>
                  <a href={`/boutique/${product.id}`}>
                    <MagneticButton
                      icon={<ShoppingBag className="w-4 h-4" />}
                      className="!rounded-none text-sm px-6 py-3"
                    >
                      Voir le détail
                    </MagneticButton>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}