import React from 'react';

function FeatureSectionTwo() {
    return (
        <section className="feature-area-s1 s-padding-t" style={{padding: "0px"}}>
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Services We Deliver</span>
                    <h2 className="s-title">All Kinds of IT Solutions Services</h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-md-6 floating">
                        <div
                            className="feature-s2 active wow animate__animated animate__fadeInLeft"
                            data-wow-duration="1.5s"
                            data-wow-delay=".5s"
                        >
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/cloud-icon.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4><a href="/pricing">Cloud Solutions</a></h4>
                                <p>
                                    There are many variatons of passtai of Lorem Ipsum available,
                                    but the as jority have suffered
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="feature-s2 test wow animate__animated animate__fadeInLeft"
                            data-wow-duration="1.5s"
                            data-wow-delay="1s"
                        >
                            <div className="icon">
                                <img
                                    src={require(`../../assets/images/feature-icons/cyber-security.png`)}
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h4><a href="/pricing">Cyber Security</a></h4>
                                <p>
                                    There are many variatons of passtai of Lorem Ipsum available,
                                    but the as jority have suffered
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="feature-s2 wow animate__animated animate__fadeInLeft"
                            data-wow-duration="1.5s"
                            data-wow-delay="1.5s"
                        >
                            <div className="icon">
                                <img
                                    src={require(`../../assets/images/feature-icons/web-development.png`)}
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h4><a href="/pricing">Web Development</a></h4>
                                <p>
                                    There are many variatons of passtai of Lorem Ipsum available,
                                    but the as jority have suffered
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6">
                        <div
                            className="feature-s2 wow animate__animated animate__fadeInRight"
                            data-wow-duration="1.5s"
                            data-wow-delay="2s"
                        >
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/cloud-icon.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4><a href="/service-detail">Cloud Solutions</a></h4>
                                <p>
                                    There are many variatons of passtai of Lorem Ipsum available,
                                    but the as jority have suffered
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 d-lg-none">
                        <div
                            className="feature-s2 wow animate__animated animate__fadeInRight"
                            data-wow-duration="1.5s"
                            data-wow-delay="2.5s"
                        >
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/pencil-icon.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4><a href="/service-detail">Product & Design</a></h4>
                                <p>
                                    There are many variatons of passtai of Lorem Ipsum available,
                                    but the as jority have suffered
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 d-lg-none">
                        <div
                            className="feature-s2 wow animate__animated animate__fadeInRight"
                            data-wow-duration="1.5s"
                            data-wow-delay="3s"
                        >
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/analytix.png`)} alt=""/>
                            </div>
                            <div className="content">
                                <h4><a href="/service-detail">Analytic Solutions</a></h4>
                                <p>
                                    There are many variatons of passtai of Lorem Ipsum available,
                                    but the as jority have suffered
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureSectionTwo;