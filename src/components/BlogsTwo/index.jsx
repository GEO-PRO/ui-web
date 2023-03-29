import React from 'react';
import Footer from "../HomeOne/Footer";
import TitleSection from "../common/TitleSection";
import MainSection from "./MainSection";
import InnerPageWrapper from "../common/InnerPageWrapper";

function Index() {
    return (
        <>
           <InnerPageWrapper>
               <TitleSection title="Blogs Two" paths={[{name:'blogs',path:'/blogs-two'},{name:'blogs',path:'/blogs-two'}]}/>
               <MainSection/>
               <Footer/>
           </InnerPageWrapper>
        </>
    );
}

export default Index;