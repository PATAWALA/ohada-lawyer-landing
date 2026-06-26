export interface NavLink {
  label: string;
  href: string;
}

export interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
}

export interface Step {
  step: number;
  title: string;
  description: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  readingTime: number;
  date: string;
  category: string;
  imagePlaceholder?: string;
}

export interface ShopProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  type: "book" | "kit";
  imagePlaceholder?: string;
}
