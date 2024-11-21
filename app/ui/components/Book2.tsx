"use client";
import React, { useState } from "react";
import Page from "./Page";
import adviceList from "../../utils/advicesList.json";
import Image from "next/image";

export default function Book2() {
  const [page, setPage] = useState(1);
  return (
    <React.Fragment>
      <article className="advicesArticle">
        <div className="book">
          <Page
            pageNumber={1}
            totalPages={adviceList.length + 3}
            actualPage={page}
          >
            <Image src="/assets/bookCover2.jpg" fill={true} alt="" />
          </Page>
          <Page
            pageNumber={2}
            totalPages={adviceList.length + 3}
            actualPage={page}
          >
            <h2>Corps et Ame</h2>
            <Image src="/assets/lotus.png" width={300} height={300} alt="" />
          </Page>

          {adviceList.map((advice, index) => (
            <Page
              key={advice.author + index}
              advice={advice}
              pageNumber={index + 3}
              totalPages={adviceList.length + 3}
              actualPage={page}
            />
          ))}
          <Page
            advice={""}
            pageNumber={adviceList.length + 3}
            totalPages={adviceList.length + 3}
            actualPage={page}
          >
            <Image src="/assets/bookCover2.jpg" fill={true} alt="" />
          </Page>
        </div>
      </article>
      <aside className="controls">
        <div
          className="mainButton"
          onClick={() => {
            if (page === 1) {
              return;
            } else {
              const newPage = page - 1;
              setPage(newPage);
            }
          }}
        >
          Page precedente
        </div>
        <div
          onClick={() => {
            if (page === adviceList.length + 2) {
              return;
            } else {
              const newPage = page + 1;
              setPage(newPage);
            }
          }}
          className="mainButton"
        >
          Page suivante
        </div>
      </aside>
    </React.Fragment>
  );
}
