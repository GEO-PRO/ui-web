import React from 'react';
import Footer from "../HomeOne/Footer";
import TitleSection from "../common/TitleSection";
import MainSection from "./MainSection";
import InnerPageWrapper from "../common/InnerPageWrapper";

function Index() {
    return (
        <>
            <InnerPageWrapper>
                <TitleSection title="Portfolio Details" paths={[{name:'home',path:'/'},{name:'Portfolio details',path:'/portfolio-details'}]}/>
                <MainSection/>
                <Footer/>
            </InnerPageWrapper>
        </>
    );
}

export default Index;