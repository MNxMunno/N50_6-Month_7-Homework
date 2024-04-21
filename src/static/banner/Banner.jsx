// eslint-disable-next-line no-unused-vars
import React from "react";
import Btn from "../btn/Btn";

// eslint-disable-next-line react/prop-types
const Banner = ({ title, description, comp, img }) => {
  return (
    <div className="cards">
      <div className="card">
        <h1>{title}</h1>
        <p>{description}</p>
        <Btn />
        <p>{comp}</p>
      </div>
      <div className="card">
        <img className="hero__img" src={img} alt="img" />
      </div>
    </div>
  );
};

export default Banner;
