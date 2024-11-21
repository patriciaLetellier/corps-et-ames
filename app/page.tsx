import React from "react";
import Header from "./ui/layouts/Header";
import Footer from "./ui/layouts/Footer";
import MainSection from "./ui/pages/home/MainSection";
import PresentationSection from "./ui/pages/home/PresentationSection";
import BenefitsSection from "./ui/pages/home/BenefitsSection";
import ContactSection from "./ui/pages/home/ContactSection";
export default function page() {
  return (
    <React.Fragment>
      <div className="backgroundWrapper">
        <Header />
        <MainSection />
      </div>
      <PresentationSection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </React.Fragment>
  );
}
