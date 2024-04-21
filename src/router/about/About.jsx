/* eslint-disable no-unused-vars */
import React from "react";
import Main from "../../components/main/Main";

const About = () => {
  const data = {
    img: "https://i.postimg.cc/1XM00kb9/about-hero.png",
    title:
      "We value human, organizational, and operational intelligence, not just artificial",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.",
  };
  return <Main {...data} />;
};

export default About;
