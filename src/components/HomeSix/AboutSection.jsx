import React from 'react';

function AboutSection() {
    return (
        <section className="about-s10 about-s4 s-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="about-s10__content about-s4__content">
                            <span className="s-sub-title">Discover Our Company</span>
                            <h2 className="s-title">
                                Bringing New IT Business Solutions And Ideas
                            </h2>
                            <p className="desc">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form, by
                                inject humour, or randomised words which
                            </p>
                            <div className="content-b">
                                <div className="i-box">
                                    <div className="icon">
                                        <img
                                            src={require(`../../assets/images/feature-icons/network-icon-light-sea-green.png`)}
                                            alt=""
                                        />
                                    </div>
                                    <p>Website Development</p>
                                </div>
                                <div className="i-box">
                                    <div className="icon">
                                        <img
                                            src={require(`../../assets/images/feature-icons/globe-icon-light-sea-green.png`)}
                                            alt=""
                                        />
                                    </div>
                                    <p>Internal Networking</p>
                                </div>
                            </div>
                            <a href="/service-detail" className="btn btn-s6 btn-s3">Learn More</a>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="about-s4__thumb">
                            <div className="p-left">
                                <img
                                    src={require(`../../assets/images/thumbs/about4-t1.png`)}
                                    alt=""
                                    className="img1"
                                />
                                <img
                                    src={require(`../../assets/images/thumbs/about4-t3.png`)}
                                    alt=""
                                    className="img2"
                                />
                            </div>
                            <div className="p-right">
                                <img src={require(`../../assets/images/thumbs/about4-t2.png`)} alt=""/>
                            </div>
                            <div className="shape">
                                <img src={require(`../../assets/images/backgrounds/about-5-shape.png`)} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;