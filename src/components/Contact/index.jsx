import React from 'react';
import Footer from "../HomeOne/Footer";
import TitleSection from "../common/TitleSection";
import MainSection from "./MainSection";
import InnerPageWrapper from "../common/InnerPageWrapper";

function Index() {
    return (
      <InnerPageWrapper>
          <TitleSection title="contact" paths={[{name:'home',path:'/'},{name:'contact',path:'/contact'}]}/>
          <MainSection/>
          <section className="map-section">
              <div className="row">
                  <div className="col-12">
                      <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.0952487296004!2d90.3665415!3d23.815211799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1dea3ec2f7a32054!2sQuomodoSoft!5e0!3m2!1sen!2sbd!4v1662745939435!5m2!1sen!2sbd"
                          width="600"
                          height="450"
                          style={{border: '0'}}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                  </div>
              </div>
          </section>
          <Footer/>
      </InnerPageWrapper>
    );
}

export default Index;