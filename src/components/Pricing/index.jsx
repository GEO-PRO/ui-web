import React from 'react';
import Footer from "../HomeOne/Footer";
import TitleSection from "../common/TitleSection";
import PricingTab from "./PricingTab";
import FAQ from "./FAQ";
import InnerPageWrapper from "../common/InnerPageWrapper";

function Index() {
    return (
        <InnerPageWrapper>
            <TitleSection title="Pricing" paths={[{name:'home',path:'/'},{name:'pricing',path:'/pricing'}]}/>
            <PricingTab/>
            <FAQ/>
            <Footer/>
        </InnerPageWrapper>
    );
}

export default Index;