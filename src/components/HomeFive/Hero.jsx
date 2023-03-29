import React from 'react';

function Hero() {
    return (
        <section className="hero-s5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="hero-s5__content hero-s3__content text-center">
                            <h2 className="content-sh">We Provide The Best Services</h2>
                            <h1 className="content-h">We Solve IT Problems With Technology</h1>
                            <div className="btn-group">
                                <a href="/service-detail" className="btn btn-s5">Learn More</a>
                                <a href="/service-detail" className="hero-s5-btn2 btn"
                                >Free Consulting</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;