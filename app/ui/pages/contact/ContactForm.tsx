import React from "react";
import Form from "../../components/Form";
import Image from "next/image";

export default function ContactForm() {
  return (
    <section className="contactSection">
      <Form />
      <div className="imgContainer">
        <Image
          src="/assets/pictures/salon2.jpg"
          width={540}
          height={700}
          alt=""
        />
      </div>
    </section>
  );
}
