import "./Header.css";
import React from "react";
import logo from "../asset/logo.png";

function Header() {
  return (
    
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="word">
          <span onClick={() => console.log("")} style={{ cursor: "pointer" }}>
            繁
          </span>
          &nbsp;/&nbsp;
          <span onClick={() => console.log("")} style={{ cursor: "pointer" }}>
            简
          </span>
          &nbsp;/&nbsp;
          <span onClick={() => console.log("")} style={{ cursor: "pointer" }}>
            ENG
          </span>
          &nbsp;|&nbsp;
          <span
            onClick={() => console.log("")}
            style={{ cursor: "pointer", fontSize: "1px", marginTop: "4px" }}
          >
            <a>A</a>
          </span>
          &nbsp;
          <span
            onClick={() => console.log("")}
            style={{ cursor: "pointer", fontSize: "4px", marginTop: "4px" }}
          >
            <a>A</a>
          </span>
          &nbsp;
          <span onClick={() => console.log("")} style={{ cursor: "pointer" }}>
            A
          </span>
          &nbsp;|&nbsp;
        </div>
      </div>
    
  );
}
export default Header;
