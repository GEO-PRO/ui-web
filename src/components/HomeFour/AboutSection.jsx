import React from 'react';

function AboutSection() {
    return (
        <section className="about-s9 about-s4 s-padding-b">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="about-s4__content about-s9__content">
                            <span className="s-sub-title">About Us Antech</span>
                            <h2 className="s-title">
                                Not Just Traditional Cyber
                                & Immigration Firm
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
                                            src={require(`../../assets/images/feature-icons/globe-icon-white.png`)}
                                            alt=""
                                        />
                                    </div>
                                    <p>Website Development</p>
                                </div>
                                <div className="i-box">
                                    <div className="icon">
                                        <img
                                            src={require(`../../assets/images/feature-icons/network-icon-white.png`)}
                                            alt=""
                                        />
                                    </div>
                                    <p>Internal Networking</p>
                                </div>
                            </div>
                            <a href="/service-detail" className="btn btn-s4">Learn More</a>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="about-s9__thumb">
                            <img src={require(`../../assets/images/thumbs/about9-t1.png`)} alt="about"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;