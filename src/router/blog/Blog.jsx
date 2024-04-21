/* eslint-disable no-unused-vars */
import React from "react";
import Main from "../../components/main/Main";

const Blog = () => {
  const data = {
    img: "https://i.postimg.cc/sDQ1JFkw/blog-hero.png",
    title: "Our internal process and longerm vision",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique",
  };
  return <Main {...data} />;
};

export default Blog;
