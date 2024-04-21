/* eslint-disable no-unused-vars */
import React from "react";
import Main from "../../components/main/Main";
import Banner from "../../static/banner/Banner";

const Home = () => {
  const data = {
    img: "https://i.postimg.cc/764kGWhb/home-hero.png",
    title: "Prosper with our bespoke solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
    comp: "Worked with 100+ Companies",
  };
  return <Main {...data} />;
};

export default Home;
