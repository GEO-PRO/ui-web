import React, {useEffect} from 'react';
import Header from "./Header";
import Hero from "./Hero";
import Sponser from "./Sponser";
import AboutSection from "./AboutSection";
import Feature from "./Feature";
import ProjectSliderSection from "./ProjectSliderSection";
import ContactSection from "./ContactSection";
import AboutSectionTwo from "./AboutSectionTwo";
import TestimonialSection from "./TestimonialSection";
import TeamSection from "./TeamSection";
import Blogs from "./Blogs";
import Footer from "./Footer";
import Drawer from "../Mobile/Drawer";

function Index() {
    useEffect(() => {
        const selectBody = document.querySelector("body");
        selectBody.setAttribute("id", "home-2");
        const cursor = document.querySelector("#cursor");
            function showCursor(event) {
                cursor.style.top = `${event.clientY  }px`;
                cursor.style.left = `${event.clientX  }px`;
            }
        if (cursor !== null) {
            window.addEventListener("mousemove", showCursor);
        }
    }, []);
    return (
        <>
            <div id="cursor"></div>
            <Header/>
            <Drawer type={1}/>
            <Hero/>
            <Sponser/>
            <AboutSection/>
            <Feature/>
            <ProjectSliderSection/>
            <ContactSection/>
            <AboutSectionTwo/>
            <TestimonialSection/>
            <TeamSection/>
            <Blogs/>
            <Footer/>
        </>
    );
}
export default Index;