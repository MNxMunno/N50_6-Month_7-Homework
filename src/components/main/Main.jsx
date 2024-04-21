import React from "react";
import Product from "../../static/product/Product";

const Main = () => {
  return (
    <main>
      <section className="hero">
        <div className="container"></div>
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
