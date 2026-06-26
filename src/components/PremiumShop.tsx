import { ShoppingBag, BookMarked, FileCheck, ShieldCheck } from "lucide-react";
import MagneticButton from "./MagneticButton";
import type { ShopProduct } from "@/types";

const products: ShopProduct[] = [
  {
    id: "book-maitriser-risque-juridique",
    name: "Maîtriser le risque juridique en Afrique de l’Ouest",
    description:
      "L’ouvrage de référence du Cabinet : 340 pages de stratégie juridique appliquée, modèles de clauses et retours d’expérience.",
    price: 150,
    type: "book",
  },
  {
    id: "kit-conformite-startup-ohada",
    name: "Kit de Conformité OHADA pour entrepreneurs",
    description:
      "Pack complet prêt à l’emploi : statuts types, checklist conformité RGPD/OHADA, modèles de contrats commerciaux.",
    price: 249,
    type: "kit",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  book: <BookMarked className="w-6 h-6" />,
  kit: <FileCheck className="w-6 h-6" />,
};

export default function PremiumShop() {
  return (
    <section className="py-24 bg-slate-50" id="boutique">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            La librairie juridique du dirigeant exigeant
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Des outils concrets et des ouvrages de référence pour muscler votre
            sécurité juridique sans intermédiaire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-8 border border-slate-200/70 shadow-sm flex flex-col"
            >
              <div className="w-full h-56 bg-slate-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
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

              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-900">
                  {product.name}
                </h3>
                <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 ml-3" />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                {product.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-extrabold text-slate-900">
                  {product.price} €
                </span>
                <MagneticButton
                  icon={<ShoppingBag className="w-4 h-4" />}
                  className="text-sm px-6 py-3"
                >
                  Acheter maintenant
                </MagneticButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
