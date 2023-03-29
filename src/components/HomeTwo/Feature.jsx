import React from 'react';

function Feature() {
    return (
        <section className="features-slider-s2 s-padding">
            <div className="container">
                <div className="row">
                    <div className="s-title-wrap">
                        <span className="s-sub-title">What We’re Offering</span>
                        <h2 className="s-title">All Professional IT Services</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="feature-s3"
                        >
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/cloud.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4><a href="/portfolio">Top Flexibility</a></h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsu available
                                    but the
                                </p>
                                <a href="#" className="f-btn"
                                >Learn More <i className="fa-solid fa-arrow-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="feature-s3"
                        >
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/network.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4><a href="/portfolio">Time Saving</a></h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsu available
                                    but the
                                </p>
                                <a href="/portfolio" className="f-btn"
                                >Learn More <i className="fa-solid fa-arrow-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="feature-s3"
                        >
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/data.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4><a href="/portfolio">Management</a></h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsu available
                                    but the
                                </p>
                                <a href="/portfolio" className="f-btn"
                                >Learn More <i className="fa-solid fa-arrow-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="feature-s3"
                        >
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/pencil.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4><a href="/portfolio">Collaborative</a></h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsu available
                                    but the
                                </p>
                                <a href="/portfolio" className="f-btn"
                                >Learn More <i className="fa-solid fa-arrow-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feature;