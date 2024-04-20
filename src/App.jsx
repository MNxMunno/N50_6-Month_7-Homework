// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./router/home/Home";
import About from "./router/about/About";
import Services from "./router/services/Services";
import Careers from "./router/careers/Careers";
import Blog from "./router/blog/Blog";
import NotFound from "./components/not-fount/NotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./scss/index.scss";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
