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
    const { id } = useParams()
    const [titleName, setTitleName] = useState("")

    useEffect(() => {
        axios.get(`${API_URL}/title-doc/${id}`).then((result) => {
            setTitleName(result.data.name)
        }).catch((err) => {
            console.log('err :>> ', err);
        });
    })

    return (
        <>
            <Helmet>
                <title>Thư viện | Kiến thức Địa lý</title>
            </Helmet>
            {/* <InnerPageWrapper> */}
            <Header />
            <Drawer />
            <TitleSection title="Thư viện" paths={[{ name: `Tài Liệu Và Đề Thi Chất Lượng | ${titleName.split(". ")[1]}`, path: '/library' }]} />
            <MainSection />
            <Footer />
            {/* </InnerPageWrapper> */}
        </>
    );
}

export default Index;