import React from "react";
import Sider from "./Siber";
import Content from "./Content";
import "./Home.css";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <div className="Home">
        <Sider />

        <div>
          <Content />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
