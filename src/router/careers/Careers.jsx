/* eslint-disable no-unused-vars */
import React from "react";
import Main from "../../components/main/Main";

const Careers = () => {
  const data = {
    img: "https://i.postimg.cc/QC65KpWC/careers-hero.png",
    title: "We hired people who are very passionate about what they do",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
  };
  return <Main {...data} />;
};

export default Careers;
