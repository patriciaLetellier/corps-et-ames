import React from "react";
import ContactInfo from "../ui/pages/contact/ContactInfo";
import ContactForm from "../ui/pages/contact/ContactForm";
import Footer from "../ui/layouts/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Corps et ame",
  description:
    "Contactez Patricia Letellier, praticienne en libération émotionnelle. Corps et Ame est à votre écoute pour répondre à vos questions et vous accompagner sur le chemin du bien-être.",
  keywords: [
    "Contact",
    "Patricia Letellier",
    "libération émotionnelle",
    "Corps et Ame",
    "bien-être",
    "thérapie émotionnelle",
    "praticienne",
    "rendez-vous",
    "questions",
    "accompagnement",
  ],
};
export default function page() {
  return (
    <React.Fragment>
      <ContactInfo />
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
}
