"use client";
import Book from "../../components/Book";
import React, { useState } from "react";
import adviceList from "../../../utils/advicesList.json";

export default function AdviceSection() {
  const [currentPage, setCurrentPage] = useState(0); // Commence à la page 0

  const turnPage = (direction) => {
    if (direction === 1 && currentPage < adviceList.length - 1) {
      setCurrentPage((prev) => prev + 1); // Page suivante
    } else if (direction === -1 && currentPage > 0) {
      setCurrentPage((prev) => prev - 1); // Page précédente
    }
  };
  return (
    <section className="advicesSection">
      <article className="advicesArticle">
        <Book adviceList={adviceList} currentPage={currentPage} />
        <div className="controls">
          <button
            className="mainButton"
            onClick={() => turnPage(-1)}
            disabled={currentPage === 0}
          >
            Page Précédente
          </button>
          <button
            className="mainButton"
            onClick={() => turnPage(1)}
            disabled={currentPage === adviceList.length - 1}
          >
            Page Suivante
          </button>
        </div>
      </article>
    </section>
  );
}
