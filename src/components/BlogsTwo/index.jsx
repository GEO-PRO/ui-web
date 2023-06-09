import React from 'react';
import Footer from "../HomeOne/Footer";
import TitleSection from "../common/TitleSection";
import MainSection from "./MainSection";
import InnerPageWrapper from "../common/InnerPageWrapper";
import Header from '../HomeOne/Header';
import Drawer from '../Mobile/Drawer';
import { Helmet } from 'react-helmet';

function Index() {
    return (
        <>
            <Helmet>
                <title>Tin tức | Kiến thức Địa lý</title>
            </Helmet>
            {/* <InnerPageWrapper> */}
            <Header />
            <Drawer />
            <TitleSection title="Tin tức" paths={[{ name: 'Địa lý quanh ta', path: '/blogs-two' }]} />
            <MainSection />
            <Footer />
            {/* </InnerPageWrapper> */}
        </>
    );
}

export default Index;