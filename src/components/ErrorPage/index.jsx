import React from 'react';
import {Link} from "react-router-dom";
import Footer from "../HomeOne/Footer";
import TitleSection from "../common/TitleSection";
import InnerPageWrapper from "../common/InnerPageWrapper";


function Index() {
    return (
        <>
            <InnerPageWrapper>
                <TitleSection title="Error" paths={[{name:'home',path:'/'},{name:'Error',path:'/error'}]}/>
                <section className="not-found s-padding">
                    <div className="thumb">
                        <img src={require(`../../assets/images/thumbs/not-found.png`)} alt=""/>
                    </div>
                    <div className="content">
                        <h2 className="s-title">Oops! Page Not Found.</h2>
                        <Link to="/" className="btn btn-s1">Back to Home Page</Link>
                    </div>
                </section>
                <Footer/>
            </InnerPageWrapper>
        </>
    );
}

export default Index;