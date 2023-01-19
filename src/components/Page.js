import React, { useState } from "react";
import Introduction from "./Introduction";
import Plan from "./Plan";
import icon from "../asset/icon2.jpeg";
import "./Page.css";
import test2 from "../asset/test2.jpeg";
import test3 from "../asset/test3.jpeg";
import test4 from "../asset/test4.jpeg";

function Page() {
  const [page, setPage] = useState(1);
  return (
    <div className="header2">
      <div className="box1">
        <img className="icon" src={icon}></img>
        <div className="btnContainer2">
          <div
            className={page === 1 ? "clicked" : "btn"}
            onClick={() => setPage(1)}
          >
            引言
          </div>

          <div
            className={page === 2 ? "clicked" : "btn"}
            onClick={() => setPage(2)}
          >
            計劃目標
          </div>
          <div
            className={page === 3 ? "clicked" : "btn"}
            onClick={() => setPage(3)}
          >
            目標對象
          </div>

          <div
            className={page === 4 ? "clicked" : "btn"}
            onClick={() => setPage(4)}
          >
            甄選準則
          </div>
          <div
            className={page === 5 ? "clicked" : "btn"}
            onClick={() => setPage(5)}
          >
            費用
          </div>
          <div
            className={page === 6 ? "clicked" : "btn"}
            onClick={() => setPage(6)}
          >
            申請方法
          </div>
          <div
            className={page === 7 ? "clicked" : "btn"}
            onClick={() => setPage(7)}
          >
            常見問題
          </div>
          <div
            className={page === 8 ? "clicked" : "btn"}
            onClick={() => setPage(8)}
          >
            查詢
          </div>
        </div>
        {page === 1 && <Introduction />}

        {page === 2 && <Plan />}

        {page === 3 && <Plan />}

        {page === 4 && <Plan />}
        {page === 5 && <Plan />}

        {page === 6 && <Plan />}

        {page === 7 && <Plan />}

        {page === 8 && <Plan />}
      </div>
      <div className="box">
        <a className="word3">節目詳情</a>
        <div>
          <img className="test2" src={test2}></img>
          <span className="word4" onClick={() => ""}>
            表演藝術項目
          </span>
          <img className="test3" src={test3}></img>
          <span className="word4" onClick={() => ""}>
            博物館及時代數活動
          </span>
          <img className="test4" src={test4}></img>
          <span className="word4" onClick={() => ""}>
            圖書館活動
          </span>
        </div>
      </div>
    </div>
  );
}
export default Page;
