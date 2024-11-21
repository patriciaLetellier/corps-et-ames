import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <Image
        className="logo"
        src="/assets/logo.png"
        width={48}
        height={54}
        alt="logo"
      />
      <p className="footerTitle">Faisons naître l’extraordinaire !</p>
      <Link href="/contact" className="mainButton">
        Contactez moi
        <div className="arrowWrapper">
          <Image src="/assets/arrow.svg" width={20} height={20} alt="" />
        </div>
      </Link>
      <ul>
        <li>
          <Image
            src="/assets/icons/facebook_icone.svg"
            height={25}
            width={25}
            alt="Découvrez notre Facebook"
          />
        </li>
        <li>
          <Image
            src="/assets/icons/instagram_icone.svg"
            height={25}
            width={25}
            alt="Découvrez notre Instagram"
          />
        </li>
      </ul>
      <div className="footerAside">
        <p>© 2024 Corps et Ame. All rights reserved.</p>
        <nav>
          <Link href={"/contact"}>Accueil</Link>
          <Link href={"/#presentation"}>Qui je suis</Link>
          <Link href={"/#benefits"}>Mes préstations</Link>
          <Link href={"/recueil-des-avis"}>Livre d'Or </Link>
        </nav>
      </div>
    </footer>
  );
}
