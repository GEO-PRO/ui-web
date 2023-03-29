import React, {useEffect} from 'react';
import TitleSection from "../common/TitleSection";
import MainSection from "./MainSection";
import Footer from "../HomeOne/Footer";
import InnerPageWrapper from "../common/InnerPageWrapper";

function Index() {
    useEffect(() => {
        const selectBody = document.querySelector("body");
        selectBody.setAttribute("id", "team");
    }, []);
    return (
       <InnerPageWrapper>
           <TitleSection title="teams" paths={[{name:'home',path:'/'},{name:'teams',path:'/teams'}]}/>
           <MainSection/>
           <Footer/>
       </InnerPageWrapper>
    );
}

export default Index;