import React from "react";
import Footer from "./ui/layouts/Footer";
import MainSection from "./ui/pages/home/MainSection";
import PresentationSection from "./ui/pages/home/PresentationSection";
import BenefitsSection from "./ui/pages/home/BenefitsSection";
import ContactSection from "./ui/pages/home/ContactSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil - Corps et ame",
  description:
    "Découvrez Corps et Ame, votre partenaire bien-être avec Patricia Letellier. Spécialiste en libération émotionnelle, transgénérationnelle et énergétique, je vous aide à apaiser vos émotions, dépasser vos peurs et retrouver votre équilibre en présentiel ou en visio.",
  keywords: [
    "bien-être",
    "libération émotionnelle",
    "libération transgénérationnelle",
    "Reiki Usui",
    "thérapies brèves",
    "Patricia Letellier",
    "Corps et Ame",
    "équilibre",
    "libération des mémoires cellulaires",
    "blocages émotionnels",
    "peurs",
    "phobies",
    "développement personnel",
  ],
};

export default function page() {
  return (
    <React.Fragment>
      <MainSection />
      <PresentationSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </React.Fragment>
  );
}
