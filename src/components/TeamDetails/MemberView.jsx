import React from 'react';
import {Link} from "react-router-dom";
import CounterUp from "../helpers/CounterUp";

function MemberView() {
    return (
        <section id="t-member-details" className="t-member-details s-padding">
            <div className="container">
                <div className="t-member-details__container">
                    <div className="member-info">
                        <h3 className="m-name">Deniella Rhodes</h3>
                        <span className="m-desig">CEO of Antech</span>
                        <ul className="m-info-list">
                            <li>
                <span className="title">Position:</span
                ><span className="value">Claims President</span>
                            </li>
                            <li>
                <span className="title">Department:</span
                ><span className="value">Personal Products</span>
                            </li>
                            <li>
                <span className="title">Experience:</span
                ><span className="value">10 Years</span>
                            </li>
                            <li>
                <span className="title">Email:</span
                ><span className="value">infoyour@mail.com</span>
                            </li>
                            <li>
                <span className="title">Phone:</span
                ><span className="value">+1 800 127 86 54</span>
                            </li>
                        </ul>
                        <ul className="social-icons-s1">
                            <li>
                                <Link to="https://www.facebook.com/QuomodoSoft"
                                ><i className="fa-brands fa-facebook-f"></i
                                ></Link>
                            </li>
                            <li>
                                <Link to="https://www.facebook.com/QuomodoSoft"
                                ><i className="fa-brands fa-twitter"></i
                                ></Link>
                            </li>
                            <li>
                                <Link to="https://www.facebook.com/QuomodoSoft"
                                ><i className="fa-brands fa-linkedin-in"></i
                                ></Link>
                            </li>
                            <li>
                                <Link to="https://www.facebook.com/QuomodoSoft"
                                ><i className="fa-brands fa-youtube"></i
                                ></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="member-thumb">
                        <img src={require(`../../assets/images/thumbs/team-detail-thumb.jpg`)} alt=""/>
                    </div>
                    <div className="member-stats">
                        <div className="funfact-s2">
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/projects.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4>
                  <span className="counter-item"> <CounterUp sectionId="t-member-details" endValue={2547}/></span
                  ><span className="c-sfix">+</span>
                                </h4>
                                <p>Project Done</p>
                            </div>
                        </div>
                        <div className="funfact-s2">
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/years.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4>
                  <span className="counter-item"> <CounterUp sectionId="t-member-details" endValue={12}/></span
                  ><span className="c-sfix">+</span>
                                </h4>
                                <p>Glorious Years</p>
                            </div>
                        </div>
                        <div className="funfact-s2">
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/clients.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4>
                  <span className="counter-item"> <CounterUp sectionId="t-member-details" endValue={8255}/></span
                  ><span className="c-sfix">+</span>
                                </h4>
                                <p>Active Clients</p>
                            </div>
                        </div>
                        <div className="funfact-s2">
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/win.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4>
                  <span className="counter-item"> <CounterUp sectionId="t-member-details" endValue={895}/></span
                  ><span className="c-sfix">+</span>
                                </h4>
                                <p>Project Win</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MemberView;