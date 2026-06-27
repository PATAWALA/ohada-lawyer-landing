import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import ResourcesHub from "@/components/ResourcesHub";
import PremiumShop from "@/components/PremiumShop";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
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
