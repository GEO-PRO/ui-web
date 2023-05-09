import React, { useEffect } from 'react';
import TitleSection from "../common/TitleSection";
import FeatureSectionTwo from "./FeatureSectionTwo";
import PricingSection from "../HomeThree/PricingSection";
import ContactSection from "./ContactSection";
import History from "../About/History";
import Sponser from "../HomeTwo/Sponser";
import Footer from "../HomeOne/Footer";
import InnerPageWrapper from "../common/InnerPageWrapper";
import Header from '../HomeOne/Header';
import Drawer from '../Mobile/Drawer';
import { Helmet } from 'react-helmet';

function Index() {
    useEffect(() => {
        const selectBody = document.querySelector("body");
        selectBody.setAttribute("id", "service");
    }, []);
    return (
        <>
            <Helmet>
                <title>Thư viện | Kiến thức Địa lý</title>
            </Helmet>
            <Header />
            <Drawer />
            <TitleSection title="Thư viện" paths={[{ name: 'Tài liệu và đề thi chất lượng', path: '/blogs-two' }]} />
            <FeatureSectionTwo />
            {/* <PricingSection />
            <ContactSection />
            <History />
            <Sponser className="sponsers-slider-s2 s-padding-b" /> */}
            <Footer />
            {/* </InnerPageWrapper> */}
        </>
    );
}

export default Index;