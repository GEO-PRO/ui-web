import React, { useEffect } from 'react';
import TitleSection from "../common/TitleSection";
import FeatureSectionTwo from "../HomeThree/FeatureSectionTwo";
import PricingSection from "../HomeThree/PricingSection";
import ContactSection from "./ContactSection";
import History from "../About/History";
import Sponser from "../HomeTwo/Sponser";
import Footer from "../HomeOne/Footer";
import InnerPageWrapper from "../common/InnerPageWrapper";
import Header from '../HomeOne/Header';

function Index() {
    useEffect(() => {
        const selectBody = document.querySelector("body");
        selectBody.setAttribute("id", "service");
    }, []);
    return (
        <>
            <Header />
            {/* <InnerPageWrapper> */}
            {/* <TitleSection title="Service" paths={[{ name: 'home', path: '/' }, { name: 'service', path: '/service' }]} /> */}
            <FeatureSectionTwo />
            <PricingSection />
            <ContactSection />
            <History />
            <Sponser className="sponsers-slider-s2 s-padding-b" />
            <Footer />
            {/* </InnerPageWrapper> */}
        </>
    );
}

export default Index;