import React from 'react';
import TitleSection from "../common/TitleSection";
import FeatureSection from "../HomeThree/FeatureSection";
import AboutSection from "./AboutSection";
import History from "./History";
import TeamSection from "../HomeSix/TeamSection";
import Testimonial from "./Testimonial";
import Sponser from "../HomeTwo/Sponser";
import Footer from "../HomeOne/Footer";
import InnerPageWrapper from "../common/InnerPageWrapper";

function Index() {
    return (
        <>
            <InnerPageWrapper>
                <TitleSection title="about us" paths={[{name:'Home',path:'/'},{name:'about us',path:'/about'}]}/>
                <FeatureSection/>
                <AboutSection/>
                <History/>
                <TeamSection className="s-padding-b" itemClass="single-team-s2"/>
                <Testimonial/>
                <Sponser className="sponsers-slider-s2 s-padding-b"/>
                <Footer/>
            </InnerPageWrapper>

        </>
    );
}

export default Index;