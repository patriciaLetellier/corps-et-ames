import React from "react";
import Footer from "../ui/layouts/Footer";
import Book from "../ui/components/Book";
export default function page() {
  return (
    <React.Fragment>
      <section className="advicesSection">
        <h1>Livre d&apos;Or</h1>
        <Book />
      </section>
      <Footer />
    </React.Fragment>
  );
}
