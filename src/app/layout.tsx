import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cabinet OHADA – Sécurisation juridique d’excellence",
  description:
    "Avocat d’affaires spécialisé en droit OHADA : droit des sociétés, investissements transfrontaliers, conformité et arbitrage. Diagnostic stratégique offert.",
  openGraph: {
    title: "Cabinet OHADA – Sécurisation juridique d’excellence",
    description:
      "Maître Abdoulaye Koné, avocat au Barreau d'Abidjan, sécurise vos investissements et vos contrats sous la juridiction OHADA. Diagnostic stratégique offert.",
    url: "https://www.cabinet-ohada.com",
    siteName: "Cabinet OHADA",
    images: [
      {
        url: "/images/portrait.jpg", // Image de portrait utilisée comme og:image
        width: 800,
        height: 800,
        alt: "Maître Abdoulaye Koné – Avocat en droit OHADA",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabinet OHADA – Sécurisation juridique d’excellence",
    description:
      "Avocat d’affaires spécialisé en droit OHADA : droit des sociétés, investissements transfrontaliers, conformité et arbitrage. Diagnostic stratégique offert.",
    images: ["/images/portrait.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-white text-slate-900 antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}