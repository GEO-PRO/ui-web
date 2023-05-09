import React, { useEffect, useState } from 'react';
import Footer from "../HomeOne/Footer";
import TitleSection from "../common/TitleSection";
import MainSection from "./MainSection";
import InnerPageWrapper from "../common/InnerPageWrapper";
import Header from '../HomeOne/Header';
import Drawer from '../Mobile/Drawer';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { API_URL } from '../../service/config';
import { useParams } from 'react-router-dom';

function Index() {
    return (
        <>
            <Helmet>
                <title>Thư viện | Kiến thức Địa lý</title>
            </Helmet>
            {/* <InnerPageWrapper> */}
            <Header />
            <Drawer />
            <TitleSection title="Thư viện" paths={[{ name: `Tài Liệu Và Đề Thi Chất Lượng | Đề thi`, path: '/library/exams' }]} />
            <MainSection />
            <Footer />
            {/* </InnerPageWrapper> */}
        </>
    );
}

export default Index;