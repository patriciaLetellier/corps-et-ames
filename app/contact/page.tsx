import React from "react";
import ContactInfo from "../ui/pages/contact/ContactInfo";
import ContactForm from "../ui/pages/contact/ContactForm";
import Footer from "../ui/layouts/Footer";

export default function page() {
  return (
    <React.Fragment>
      <ContactInfo />
      <ContactForm />
      <Footer />
    </React.Fragment>
  );
}
