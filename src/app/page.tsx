import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import StackingCards from "@/components/StackingCards";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import ResourcesHub from "@/components/ResourcesHub";
import PremiumShop from "@/components/PremiumShop";
import FinalCTA from "@/components/FinalCTA";
import { Shield, BookOpen, Scale } from "lucide-react";

const valeurs = [
  {
    title: "Rigueur juridique",
    description:
      "Chaque dossier est traité avec une précision absolue. Nous appliquons les standards les plus élevés du droit OHADA pour sécuriser vos intérêts.",
    icon: <Scale className="w-6 h-6 text-white" />,
    accentColor: "#0e7490", // teal-700
  },
  {
    title: "Vision stratégique",
    description:
      "Au-delà de la technique, nous anticipons les évolutions réglementaires et économiques pour faire du droit un véritable levier de croissance.",
    icon: <BookOpen className="w-6 h-6 text-white" />,
    accentColor: "#1e3a8a", // royal-900
  },
  {
    title: "Engagement absolu",
    description:
      "Votre réussite est notre seule boussole. Nous nous investissons dans chaque projet avec la même exigence que pour nos propres affaires.",
    icon: <Shield className="w-6 h-6 text-white" />,
    accentColor: "#0e7490",
  },
];

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <AboutSection />
        <StackingCards items={valeurs} />
        <PainPoints />
        <Services />
        <Methodology />
        <ResourcesHub />
        <PremiumShop />
        <FinalCTA />
      </main>
    </>
  );
}