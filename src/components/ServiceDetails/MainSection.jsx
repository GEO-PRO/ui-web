import React from 'react';
import {Link} from "react-router-dom";

import ServiceSidebar from "./ServiceSidebar";


function MainSection() {
    return (
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <main className="col-lg-8 service-detail-main s-padding">
                        <div className="feature-img">
                            <img src={require(`../../assets/images/thumbs/ser-detail-1.jpg`)} alt=""/>
                        </div>
                        <h2 className="title">
                            Cyber security company employee developing blockchain based
                            database processing system
                        </h2>
                        <p className="desc">
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have as suffered alteration in some form, by
                            injected humour, or randomised words which dont loo even slightly
                            believable. If you are going to use a passage of Lorem Ipsum, you
                            need to be sure there isnt anything embarrassing hiddenernet
                        </p>
                        <ul className="i-list">
                            <li>
                                <span className="icon"><i className="fa-solid fa-check"></i></span>
                                <span className="text"
                                >Sed ut perspicacity unde omnis iste natus error
                </span>
                            </li>
                            <li>
                                <span className="icon"><i className="fa-solid fa-check"></i></span>
                                <span className="text"
                                >Nemo enim ipsam voluptatem quia voluptas sit aspernatur</span
                                >
                            </li>
                            <li>
                                <span className="icon"><i className="fa-solid fa-check"></i></span>
                                <span className="text"
                                >Accusamus et iusto odio dignissimos ducimus qui
                  blanditiis</span
                                >
                            </li>
                            <li>
                                <span className="icon"><i className="fa-solid fa-check"></i></span>
                                <span className="text"
                                >Nam libero tempore, cum soluta nobis est eligendi optio
                  cumque</span
                                >
                            </li>
                        </ul>
                        <div className="img-group">
                            <div>
                                <img src={require(`../../assets/images/thumbs/portfolio-1.jpg`)} alt=""/>
                            </div>
                            <div>
                                <img src={require(`../../assets/images/thumbs/portfolio-2.jpg`)} alt=""/>
                            </div>
                        </div>
                        <h3 className="title-2">Explore our audit & assurance services</h3>
                        <p className="desc">
                            Suffered alteration in some form, by injected humour, or
                            randomised words which don loo even slightly believable. If you
                            are going to use a passage of Lorem Ipsum, you need to be sure
                            there isnt anything embarrassing hiddenernet
                        </p>
                        <div className="row s-box-cont">
                            <div className="col-lg-4">
                                <div
                                    className="feature-s6 wow animate__animated animate__fadeInUp"
                                    data-wow-duration="1.5s"
                                    data-wow-delay="1s"
                                >
                                    <div className="icon">
                                        <img
                                            src={require(`../../assets/images/feature-icons/time-saving-icon.png`)}
                                            alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h4><Link to="#">Time Saving</Link></h4>
                                        <p>
                                            There are many varia of passages of Lorem available but
                                            the
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div
                                    className="feature-s6 wow animate__animated animate__fadeInUp"
                                    data-wow-duration="1.5s"
                                    data-wow-delay="2s"
                                >
                                    <div className="icon">
                                        <img
                                            src={require(`../../assets/images/feature-icons/management-icon.png`)}
                                            alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h4><Link to="#">Management</Link></h4>
                                        <p>
                                            There are many varia of passages of Lorem available but
                                            the
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div
                                    className="feature-s6 wow animate__animated animate__fadeInUp"
                                    data-wow-duration="1.5s"
                                    data-wow-delay="3s"
                                >
                                    <div className="icon">
                                        <img
                                            src={require(`../../assets/images/feature-icons/collaborative-icon.png`)}
                                            alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h4><Link to="#">Collaborative</Link></h4>
                                        <p>
                                            There are many varia of passages of Lorem available but
                                            the
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <aside className="col-lg-4 service-detail-side s-padding">
                        <ServiceSidebar/>
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default MainSection;