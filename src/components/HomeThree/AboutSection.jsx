import React from 'react';

function AboutSection() {
    return (
        <section className="about-s1 s-padding-b">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-s1__thumb">
                            <div className="p-left">
                                <img
                                    src={require(`../../assets/images/about/1.png`)}
                                    className="wow animate__animated animate__fadeInLeft"
                                    alt=""
                                    data-wow-duration="1.5s"
                                    data-wow-delay=".5s"
                                />
                                <img
                                    src={require(`../../assets/images/about/2.png`)}
                                    className="wow animate__animated animate__fadeInLeft"
                                    alt=""
                                    data-wow-duration="1.5s"
                                    data-wow-delay="1s"
                                />
                            </div>
                            <div className="p-right">
                                <img src={require(`../../assets/images/about/3.png`)} alt=""/>
                                <div className="box">
                                    <h4>25</h4>
                                    <p>Years Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg">
                            <img src={require(`../../assets/images/backgrounds/about-bg.png`)} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-s1__content">

                            <span className="s-sub-title">About Company</span>
                            <h2 className="s-title">Making IT A Part Of Your Business</h2>
                            <p className="desc">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form, by
                                injecte humour, or randomised words which
                            </p>
                            <ul className="i-list">
                                <li>
                                    <span className="icon"><i className="fa-solid fa-check"></i></span>
                                    <span className="text">Business improvement</span>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa-solid fa-check"></i></span>
                                    <span className="text">Network Administration</span>
                                </li>
                            </ul>
                            <div className="content-b">
                                <a
                                    href="/service-detail"
                                    className="btn btn-s1 wow animate__animated animate__fadeInLeft"
                                    data-wow-duration="1s"
                                    data-wow-delay=".5s"
                                >Learn More</a
                                >
                                <div
                                    className="i-box wow animate__animated animate__fadeInLeft"
                                    data-wow-duration="1.5s"
                                    data-wow-delay="1s"
                                >
                                    <div className="icon">
                                        <img
                                            src={require(`../../assets/images/feature-icons/clock-icon-sm.png`)}
                                            alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <span>Opening and Close Time</span>
                                        <p>8.00 am - 7.00 pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;