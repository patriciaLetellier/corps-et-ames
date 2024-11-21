"use client";
import React from "react";
// Exemple d'un fichier JSON
import Image from "next/image";

export default function Book({ adviceList, currentPage }) {
  return (
    <div className="bookContainer">
      <div className="book">
        <div className="profondeur"></div>
        <div className="profondeur"></div>
        <div className="profondeur"></div>
        <div className="profondeur"></div>
        <div className="pages">
          <div
            className={`page ${currentPage > 0 ? "flipped" : ""}`}
            style={{
              zIndex: currentPage > 0 + 1 ? 1 : adviceList.length,
            }}
          >
            <div className="front">
              <Image src="/assets/bookCover.jpg" fill={true} alt="" />
            </div>
            <div className="back">couv</div>
          </div>
          {adviceList.map((advice, index) => (
            <div
              key={`page-${index + 1}`}
              className={`page ${currentPage > index + 1 ? "flipped" : ""}`}
              style={{
                zIndex:
                  currentPage > index + 1
                    ? index + 1
                    : adviceList.length - (index + 1),
              }}
            >
              <div className="front">{advice.message}</div>
              <div className="back">{`Page ${index + 1} - Arrière`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
