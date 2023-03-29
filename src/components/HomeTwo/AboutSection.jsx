import React from 'react';

function AboutSection() {
    return (
        <section className="about-s2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-s2__thumb floating">
                            <img src={require(`../../assets/images/thumbs/home-2-sec2.png`)} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-s2__content">
                            <span className="s-sub-title">About Us Antech</span>
                            <h2 className="s-title">
                                Not Just Traditional Cyber & Immigration Firm
                            </h2>
                            <p className="desc">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form, by
                                inject humour, or randomised words which
                            </p>
                            <div className="content-b">
                                <div
                                    className="i-box"
                                >
                                    <div className="icon">
                                        <img
                                            src={require(`../../assets/images/feature-icons/networks-icon.svg`).default}
                                            alt=""
                                        />
                                    </div>
                                    <p>Website Development</p>
                                </div>
                                <div
                                    className="i-box"
                                >
                                    <div className="icon">
                                        <img
                                            src={require(`../../assets/images/feature-icons/globe-icon.svg`).default}
                                            alt=""
                                        />
                                    </div>
                                    <p>Internal Networking</p>
                                </div>
                            </div>
                            <a
                                href="/blogs"
                                className="btn btn-s1"
                            >Ream More</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;