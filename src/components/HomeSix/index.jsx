import React, {useEffect} from 'react';
import Header from "./Header";
import Hero from "./Hero";
import FeatureSection from "./FeatureSection";
import FeatureSectionTwo from "./FeatureSectionTwo";
import AboutSection from "./AboutSection";
import FeatureSectionSlider from "./FeatureSectionSlider";
import FunFact from "./FunFact";
import PricingSection from "./PricingSection";
import TeamSection from "./TeamSection";
import BlogsSection from "./BlogsSection";
import Footer from "./Footer";
import Drawer from "../Mobile/Drawer";

function Index() {
    useEffect(() => {
        const selectBody = document.querySelector("body");
        selectBody.setAttribute("id", "home-6");
    }, []);
    return (
        <>
            <Header/>
            <Drawer/>
            <Hero/>
            <FeatureSection/>
            <FeatureSectionTwo/>
            <AboutSection/>
            <FeatureSectionSlider/>
            <FunFact/>
            <PricingSection/>
            <TeamSection/>
            <BlogsSection/>
            <Footer/>
        </>
    );
}

export default Index;