import React from 'react';

function AboutSection() {
    return (
        <section className="about-s1 s-padding-b">
            <div className="container">
                <div className="row align-center">
                    <div className="col-lg-6">
                        <div className="about-s11__thumb about-s1__thumb">
                            <img
                                src={require(`../../assets/images/about/5.png`)}
                                className="wow animate__animated animate__fadeInLeft"
                                alt=""
                                data-wow-duration="1.5s"
                                data-wow-delay=".5s"
                            />
                            <img
                                src={require(`../../assets/images/about/4.png`)}
                                className="wow animate__animated animate__fadeInLeft"
                                alt=""
                                data-wow-duration="1.5s"
                                data-wow-delay=".5s"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-s11__content about-s1__content">
                            <span className="s-sub-title">About Company</span>
                            <h2 className="s-title">Making IT A Part Of Your Business</h2>
                            <p className="desc">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form, by
                                injecte humour, or randomised words which
                            </p>
                            <ul className="ii-list i-list">
                                <li>
                                    <span className="icon"><i className="fa-solid fa-check"></i></span>
                                    <span className="text">Business improvement</span>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa-solid fa-check"></i></span>
                                    <span className="text">Network Administration</span>
                                </li>
                            </ul>
                            <div className="founder-wrap d-flex align-center justify-between">
                                <div className="founder-identity d-flex align-center">
                                    <img
                                        src={require(`../../assets/images/about/Josshen-Thomoss.png`)}
                                        alt="Josshen-Thomoss"
                                        className="founder-img"
                                    />
                                    <div className="founder-name">
                                        <h4 className="">Josshen Thomoss</h4>
                                        <p className="">Founder of Antech</p>
                                        <img
                                            src={require(`../../assets/images/about/founder-signature.svg`).default}
                                            alt="signature"
                                            className="founder-signature-img"
                                        />
                                    </div>
                                </div>
                                <div className="founder-signature">
                                    <img
                                        src={require(`../../assets/images/about/founder-signature.svg`).default}
                                        alt="signature"
                                        className=""
                                    />
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