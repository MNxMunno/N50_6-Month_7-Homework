/* eslint-disable no-unused-vars */
import React from "react";
import Main from "../../components/main/Main";

const Services = () => {
  const data = {
    img: "https://i.postimg.cc/tRFMn7T5/services-hero.png",
    title: "We serve clients with ground breaking solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam leo odio, sagittis quis ornare quis.",
  };
  return <Main {...data} />;
};

export default Services;
