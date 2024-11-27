import React from "react";
import Footer from "../ui/layouts/Footer";
import Book from "../ui/components/Book";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livre d'Or - Corps et ame",
  description:
    "Découvrez les témoignages émouvants des patients de Patricia Letellier, praticienne en libération émotionnelle. Corps et Ame vous invite à explorer les avis authentiques sur des séances qui transforment la vie.",
  keywords: [
    "Livre d'or",
    "témoignages",
    "avis patients",
    "libération émotionnelle",
    "Patricia Letellier",
    "Corps et Ame",
    "bien-être",
    "thérapie émotionnelle",
    "avis authentiques",
    "praticienne libération émotionnelle",
  ],
};
export default function page() {
  return (
    <React.Fragment>
      <section className={`advicesSection `}>
        <h1>Livre d&apos;Or</h1>
        <Book />
      </section>
      <Footer />
    </React.Fragment>
  );
}
