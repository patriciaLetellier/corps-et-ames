import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
const DynamicMap = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

export default function ContactInfo() {
  return (
    <section className="contactInfoSection">
      <h1>Me contacter</h1>
      <article className="contactInfoArticle">
        <div className="infoWrapper">
          <Image
            src="/assets/icons/logo_position.png"
            height={60}
            width={60}
            alt=""
          />
          <h2>Adresse</h2>
          <p>Sainte Maxime</p>
        </div>
        <div className="infoWrapper">
          <Image
            src="/assets/icons/logo_phone.png"
            height={60}
            width={60}
            alt=""
          />
          <h2>Téléphone</h2>
          <p>
            <a href="tel:+33612626252">06 12 62 62 52</a>
          </p>
        </div>
        <div className="infoWrapper">
          <Image
            src="/assets/icons/logo_mail.png"
            height={60}
            width={60}
            alt=""
          />
          <h2>Mail</h2>
          <p>
            <a href="mailto:patricia.letellier2@hotmail.com">
              patricia.letellier2@hotmail.com
            </a>
          </p>
        </div>
      </article>
      <div className="mapWrapper">
        <DynamicMap center={[43.308779, 6.639488]} />
      </div>
    </section>
  );
}
