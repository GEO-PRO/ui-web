import React, {useEffect} from 'react';
import Header from "./Header";
import Hero from "./Hero";
import FeatureSection from "./FeatureSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import FeatureSectionTwo from "./FeatureSectionTwo";
import ProjectSliderSection from "../HomeTwo/ProjectSliderSection";
import TestimonialSection from "./TestimonialSection";
import Blogs from "./Blogs";
import Footer from "./Footer";
import Drawer from "../Mobile/Drawer";

function Index() {
    useEffect(() => {
        const selectBody = document.querySelector("body");
        selectBody.setAttribute("id", "home-4");
    }, []);

    return (
        <>
            <Header/>
            <Drawer/>
            <Hero/>
            <FeatureSection/>
            <AboutSection/>
            <ContactSection/>
            <FeatureSectionTwo/>
            <ProjectSliderSection className="project-slider-area-s3" hoverContentClass="slider-project-s1"/>
            <TestimonialSection/>
            <Blogs/>
            <Footer/>

        </>
    );
}

export default Index;