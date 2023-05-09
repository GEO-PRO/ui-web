import React from 'react';
import Footer from "../HomeOne/Footer";
import TitleSection from "../common/TitleSection";
import MainSection from "./MainSection";
import InnerPageWrapper from "../common/InnerPageWrapper";
import Header from '../HomeOne/Header';
import Drawer from '../Mobile/Drawer';

function Index() {
    return (
        // <InnerPageWrapper>
        <>
            <Header />
            <Drawer />
            {/* <TitleSection title="blog details" paths={[{ name: 'home', path: '/' }, { name: 'blog details', path: '/blog-details' }]} /> */}
            <MainSection />
            <Footer />
        </>
        // </InnerPageWrapper>
    );
}

export default Index;