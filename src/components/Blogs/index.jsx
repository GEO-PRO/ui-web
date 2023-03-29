import React, {useEffect} from 'react';
import Footer from "../HomeOne/Footer";
import TitleSection from "../common/TitleSection";
import MainSection from "./MainSection";
import InnerPageWrapper from "../common/InnerPageWrapper";

function Index() {
    useEffect(() => {
        const selectBody = document.querySelector("body");
        selectBody.setAttribute("id", "blog");
    }, []);
    return (
       <InnerPageWrapper>
           <TitleSection title="blogs" paths={[{name:'home',path:'/'},{name:'Blogs',path:'/blogs'}]}/>
           <MainSection/>
           <Footer/>
       </InnerPageWrapper>
    );
}

export default Index;