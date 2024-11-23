import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function MainSection() {
  return (
    <section className="mainSection">
      <article className="mainArticle">
        <h1>Devenez la meilleur version de vous même !</h1>
        <p>
          Libérez vos angoisses, peurs, phobies, hyper-réactivité ... Tout ce
          qui vous empêche d&apos;être, de faire et d&apos;avoir ...
          <br />
          Thérapies brèves, en <span className="bold">presentiel</span> ou en
          <span className="bold"> visio</span>.
        </p>

        <Link href="/contact" className="mainButton">
          Contactez moi
          <div className="arrowWrapper">
            <Image src="/assets/arrow.svg" width={20} height={20} alt="" />
          </div>
        </Link>
      </article>
      <aside className="mainAside">
        <Image
          src="/assets/video.png"
          width={600}
          height={450}
          alt=""
          loading="eager"
          priority
        />
      </aside>
    </section>
  );
}
