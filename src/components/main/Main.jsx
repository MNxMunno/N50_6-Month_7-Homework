// eslint-disable-next-line no-unused-vars
import React from "react";
import Product from "../../static/product/Product";
import Banner from "../../static/banner/Banner.jsx";

const Main = (data, bg) => {
  return (
    <main style={bg}>
      <section className="hero">
        <div className="container">
          <Banner {...data} />
        </div>
      </section>
      <section className="product" style={{ background: "#DCEAF5" }}>
        <div className="container">
          <div className="content">
            <h1>Latest Blog & News</h1>
            <Product />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
