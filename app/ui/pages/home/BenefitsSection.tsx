import React from "react";
import Image from "next/image";
import benefitsList from "../../../utils/benefitsList.json";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="benefitsSection">
      <div className="titleAside">Mes préstations</div>
      <h2>
        Apaisez vos
        <span className="coloredTitle"> émotions</span> et retrouvez votre
        <span className="coloredTitle"> équilibre</span>.
      </h2>
      <article className="benefitsArticle">
        {benefitsList.map((benefit, index) => (
          <div key={benefit.title + index} className="benefitsArticleRow">
            <div className="imgWrapper">
              <Image
                src={`/assets/pictures/${benefit.imgName}`}
                width={benefit.imgWidth}
                height={benefit.imgHeight}
                alt=""
              />
            </div>
            <div className="rankWrapper">
              <div className="rankBorder">{index + 1}</div>
            </div>
            <div className="descriptionWrapper">
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
