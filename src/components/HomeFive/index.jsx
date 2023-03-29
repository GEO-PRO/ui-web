import React, {useEffect} from 'react';
import Header from "./Header";
import Hero from "./Hero";
import FeatureSection from "./FeatureSection";
import AboutSection from "./AboutSection";
import FeatureSectionTwo from "./FeatureSectionTwo";
import ProjectsSlider from "./ProjectsSlider";
import AboutSectionTwo from "./AboutSectionTwo";
import TestimonialSection from "./TestimonialSection";
import Blogs from "./Blogs";
import Footer from "./Footer";
import Drawer from "../Mobile/Drawer";

function Index() {
    useEffect(() => {
        const selectBody = document.querySelector("body");
        selectBody.setAttribute("id", "home-5");
    }, []);
    return (
        <>
            <Header/>
            <Drawer type={3}/>
            <Hero/>
            <FeatureSection/>
            <AboutSection/>
            <FeatureSectionTwo/>
            <ProjectsSlider/>
            <AboutSectionTwo/>
            <TestimonialSection/>
            <Blogs/>
            <Footer/>
        </>
    );
}

export default Index;