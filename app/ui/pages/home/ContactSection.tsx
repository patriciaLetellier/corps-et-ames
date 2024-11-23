import dynamic from "next/dynamic";
const DynamicMap = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

import React from "react";
import Form from "../../components/Form";
export default function ContactSection() {
  return (
    <section className="contactSection">
      <Form />
      <div className="mapContainer">
        <DynamicMap center={[43.308779, 6.639488]} />
      </div>
    </section>
  );
}
