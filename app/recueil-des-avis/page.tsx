import React from "react";
import Header from "../ui/layouts/Header";
import AdviceSection from "../ui/pages/recueil-des-avis/AdviceSection";
import Footer from "../ui/layouts/Footer";
import Book2 from "../ui/components/Book2";
export default function page() {
  return (
    <React.Fragment>
      <div className="backgroundWrapper2">
        <Header />
        <section className="advicesSection">
          <h1>Livre d'Or</h1>
          <Book2 />
        </section>
        {/* <AdviceSection /> */}
      </div>
      <Footer />
    </React.Fragment>
  );
}
