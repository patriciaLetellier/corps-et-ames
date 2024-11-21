import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Image
        className="logo"
        src="/assets/logo.png"
        width={48}
        height={54}
        alt="logo"
      />
      <nav>
        <Link href={"/"}>Accueil</Link>
        <Link href={"/#presentation"}>Qui je suis</Link>{" "}
        <Link href={"/#benefits"}>Mes préstations</Link>
        <Link href={"/recueil-des-avis"}>Livre d'Or</Link>
      </nav>
      <Link className="mainButton" href={"/contact"}>
        Contactez moi
        <div className="arrowWrapper">
          <Image src="/assets/arrow.svg" width={20} height={20} alt="" />
        </div>
      </Link>
    </header>
  );
}
