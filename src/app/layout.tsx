import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cabinet OHADA – Sécurisation juridique d’excellence",
  description:
    "Avocat d’affaires spécialisé en droit OHADA : droit des sociétés, investissements transfrontaliers, conformité et arbitrage. Diagnostic stratégique offert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
