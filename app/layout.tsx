import React from "react";
import "./style/index.scss";
import Header from "./ui/layouts/Header";
import { inter } from "./utils/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <React.Fragment>
          <Header />
          {children}
        </React.Fragment>
      </body>
    </html>
  );
}
