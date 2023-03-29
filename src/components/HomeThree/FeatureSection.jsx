import React from 'react';

function FeatureSection() {
    return (
        <section className="features-slider s-padding">
            <div className="container">
                <div className="row">
                    <div className="s-title-wrap">
                        <h2 className="s-title">Our Awesome Features</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="feature-s1 bx-1">
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/rocket-icon.png`)} alt=""/>
                            </div>
                            <div className="content">
                                <h4><a href="/pricing">Top Flexibility</a></h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsu available
                                    but the
                                </p>
                                <a href="/pricing" className="f-btn"
                                >Learn More <i className="fa-solid fa-arrow-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature-s1 bx-2">
                            <div className="icon">
                                <img
                                    src={require(`../../assets/images/feature-icons/time-saving-icon.png`)}
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h4><a href="/pricing">Time Saving</a></h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsu available
                                    but the
                                </p>
                                <a href="/pricing" className="f-btn"
                                >Learn More <i className="fa-solid fa-arrow-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature-s1 bx-3">
                            <div className="icon">
                                <img
                                    src={require(`../../assets/images/feature-icons/management-icon.png`)}
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h4><a href="/pricing">Management</a></h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsu available
                                    but the
                                </p>
                                <a href="/pricing" className="f-btn"
                                >Learn More <i className="fa-solid fa-arrow-right"></i
                                ></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="feature-s1 bx-4">
                            <div className="icon">
                                <img
                                    src={require(`../../assets/images/feature-icons/collaborative-icon.png`)}
                                    alt=""
                                />
                            </div>
                            <div className="content">
                                <h4><a href="/pricing">Collaborative</a></h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsu available
                                    but the
                                </p>
                                <a href="/pricing" className="f-btn"
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

export default FeatureSection;