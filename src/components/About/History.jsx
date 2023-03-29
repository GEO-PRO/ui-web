import React from 'react';

function History() {
    return (
        <section className="about-s7 s-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-s7__content">
                            <span className="s-sub-title">Our History</span>
                            <h2 className="s-title">Better Website Means A User Experience</h2>
                            <div className="info-list-s2">
                                <div className="s-info">
                                    <p className="title">Digital Consultancy</p>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum but the
                                        majority have suffered alteration
                                    </p>
                                </div>
                                <div className="s-info">
                                    <p className="title">Technical Assessment</p>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum but the
                                        majority have suffered alteration
                                    </p>
                                </div>
                                <div className="s-info">
                                    <p className="title">Joint Collaboration</p>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum but the
                                        majority have suffered alteration
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-s7__thumb">
                            <div className="p-left">
                                <img src={require(`../../assets/images/thumbs/about7-1.jpg`)} alt=""/>
                                <img src={require(`../../assets/images/thumbs/about7-2.jpg`)} alt=""/>
                            </div>
                            <div className="p-right">
                                <img src={require(`../../assets/images/thumbs/about7-3.png`)} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default History;