import React from "react";
import Header from "../ui/layouts/Header";
import ContactInfo from "../ui/pages/contact/ContactInfo";
import ContactForm from "../ui/pages/contact/ContactForm";
import Footer from "../ui/layouts/Footer";

export default function page() {
  return (
    <React.Fragment>
      <div className="backgroundWrapper">
        <Header />
        <ContactInfo />
      </div>
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
}
