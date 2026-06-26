import type { ShopProduct } from "@/types";

export const products: ShopProduct[] = [
  {
    id: "book-maitriser-risque-juridique",
    name: "Maîtriser le risque juridique en Afrique de l’Ouest",
    description:
      "L’ouvrage de référence du Cabinet : 340 pages de stratégie juridique appliquée, modèles de clauses et retours d’expérience.",
    price: 150,
    type: "book",
    imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80",
    longDescription: `
Cet ouvrage est le fruit de 20 années de pratique en droit des affaires OHADA. Il décrypte les mécanismes juridiques essentiels pour sécuriser vos opérations, de la création de société à l’arbitrage international.

**Ce que vous apprendrez :**
- Les clés pour structurer une holding performante en zone OHADA
- 50 modèles de clauses contractuelles commentées (actionnaires, joint-venture, distribution)
- La méthodologie complète de l’audit de conformité
- Les stratégies de sortie de crise (arbitrage, médiation, contentieux)

**Format** : broché, 340 pages, couverture rigide.
**Livraison** : envoi postal sous 5 jours ouvrés.
    `,
    features: [
      "340 pages de contenu exclusif",
      "Modèles de clauses prêts à l’emploi",
      "Checklists et tableaux de synthèse",
      "Accès à un groupe privé de mise à jour",
    ],
  },
  {
    id: "kit-conformite-startup-ohada",
    name: "Kit de Conformité OHADA pour entrepreneurs",
    description:
      "Pack complet prêt à l’emploi : statuts types, checklist conformité RGPD/OHADA, modèles de contrats commerciaux.",
    price: 249,
    type: "kit",
    imageUrl: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
    longDescription: `
Le Kit de Conformité est conçu pour les entrepreneurs et les PME qui souhaitent démarrer leur activité en toute sérénité juridique, sans avoir à engager un cabinet d’avocats pour chaque formalité.

**Contenu du kit :**
- 10 modèles de statuts (SARL, SAS, GIE) conformes à l’Acte uniforme
- Guide pas à pas pour l’immatriculation au RCCM
- Checklist RGPD adaptée aux législations OHADA
- 15 contrats types : prestation de services, bail commercial, contrat de travail, NDA…
- Fiches pratiques sur la fiscalité et les obligations sociales

**Format** : fichiers PDF + Word modifiables, envoyés par email.
**Bonus** : 1 heure de consultation téléphonique offerte avec un avocat du Cabinet.
    `,
    features: [
      "Fichiers modifiables (Word)",
      "15 contrats prêts à personnaliser",
      "Guide d’utilisation vidéo",
      "1h de consultation offerte",
    ],
  },
];
