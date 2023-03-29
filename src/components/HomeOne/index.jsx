import React, { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import FeatureSection from "./FeatureSection";
import AboutSection from "./AboutSection";
import AboutSectionTwo from "./AboutSectionTwo";
import FeatureSectionSlider from "./FeatureSectionSlider";
import FunFact from "./FunFact";
import ProjectSlider from "./ProjectSlider";
import TestimonialSection from "./TestimonialSection";
import BlogSection from "./BlogSection";
import Footer from "./Footer";
import Drawer from "../Mobile/Drawer";

function index() {
  useEffect(() => {
    const selectBody = document.querySelector("body");
    selectBody.setAttribute("id", "home-3");
  }, []);

  return (
    <>
      <Header />
      <Drawer />
      <Hero />
      <FeatureSection />
      <AboutSection />
      <AboutSectionTwo />
      <FeatureSectionSlider />
      <FunFact />
      <ProjectSlider />
      <TestimonialSection />
      <BlogSection />
      <Footer />
    </>
  );
}

export default index;
