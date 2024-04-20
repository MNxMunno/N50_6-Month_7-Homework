// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  let navigation = useNavigate();
  return (
    <section className="found">
      <div className="content">
        <img
          src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif"
          alt="not found"
        />
        <button onClick={() => navigation("/")}>Go Home</button>
      </div>
    </section>
  );
};

export default NotFound;
