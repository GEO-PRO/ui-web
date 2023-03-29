import React from 'react';

function Hero() {
    return (
        <section className="hero-s1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 hero-s1__content">
                        <h2 className="content-sh">We Provide The Best Services</h2>
                        <h1 className="content-h">We Solve IT Problems With Technology</h1>
                        <p className="content-d">
                            There are many variations of passage of Lorem Ipsu available but
                            the majority have suffered alteration
                        </p>
                        <div className="btn-group">
                            <a href="/service" className="btn btn-s1">Start a Project</a>
                            <a href="/service" className="btn btn-s1 outlined"
                            >Free Consulting</a
                            >
                        </div>
                    </div>
                    <div className="col-lg-5 hero-s1__thumb">
                        <div className="img">
                            <img src={require(`../../assets/images/hero-img/1.png`)} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shapes">
                <img className="shp-2" src={require(`../../assets/images/shapes/h1-shape-4.png`)} alt=""/>
                <img className="shp-3" src={require(`../../assets/images/shapes/h1-shape-2.png`)} alt=""/>
                <img
                    className="shp-4 wow animate__animated animate__slideInLeft"
                    src={require(`../../assets/images/shapes/h1-shape-1.png`)}
                    alt=""
                />
            </div>
        </section>
    );
}

export default Hero;