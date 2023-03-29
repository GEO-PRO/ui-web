import React from 'react';
import TitleSection from "../common/TitleSection";
import Footer from "../HomeOne/Footer";
import MemberView from "./MemberView";
import AboutMember from "./AboutMember";
import AchivmentTrophy from "./AchivmentTrophy";
import InnerPageWrapper from "../common/InnerPageWrapper";

function Index() {
    return (
     <InnerPageWrapper>
         <TitleSection title="team details" paths={[{name:'home',path:'/'},{name:'team details',path:'/team-details'}]}/>
         <MemberView/>
         <AboutMember/>
         <AchivmentTrophy/>
         <Footer/>
     </InnerPageWrapper>
    );
}

export default Index;