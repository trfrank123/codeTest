import React, { useState } from "react";
import Page from "./Page.js";
import "./Content.css";
import Plan from "./Plan.js";

import Introduction from "./Introduction";


function Content() {
  const [page, setPage] = useState(1);
  const [subTitle, setSubTitle] = useState("莘莘入場：學校文化日計劃");
  function title(number) {
    setPage(number);
    if (number == 1) {
      setSubTitle("莘莘入場：學校文化日計劃");
    } else if (number == 2) {
      setSubTitle("少年登台：學校演藝實踐計劃");
    } else if (number == 3) {
      setSubTitle("青年探藝：高中生藝術新體驗計劃");
    } else if (number == 4) {
      setSubTitle("天空故事：初小校園藝術計劃");
    }
  }
  return (
    <>
    <div className="btnpage">
      <div className="color2">
      <a className="name">主頁{">"}</a>
      <b className="name2">{subTitle}</b>
      </div>
      <div className="btnContainer">
      <div className="btn1">
        <div
          className={page === 1 ? "clicked2" : "btn2"}
          onClick={() => title(1)}
        >
          莘莘入場：學校文化日計劃
        </div>

        <div
          className={page === 2 ? "clicked2" : "btn2"}
          onClick={() => title(2)}
        >
          少年登台：學校演藝實踐計劃
        </div>
      </div>
      <div className="btn1">
        <div
          className={page === 3 ? "clicked2" : "btn2"}
          onClick={() => setPage(3)}
        >
          青年探藝：高中生藝術新體驗計劃
        </div>
        <div
          className={page === 4 ? "clicked2" : "btn2"}
          onClick={() => setPage(4)}
          >
          天空故事：初小校園藝術計劃
        </div>
      </div>
      </div>
      {page === 1 && <Page />}

      {page === 2 && <Page />}

      {page === 3 && <Page />}

      {page === 4 && <Page />}
    </div>
    </>
  );
}
export default Content;
