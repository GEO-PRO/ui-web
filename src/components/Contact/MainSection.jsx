import React from 'react';
import {Link} from "react-router-dom";

function MainSection() {
    return (
        <section className="contact-form-area s-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="contact-info">
                            <span className="s-sub-title">Contact With Us</span>
                            <h2 className="s-title">Feel Free to Get in Touch</h2>
                            <div className="c-info-box-wrap">
                                <Link to="tel:+8855486548" className="c-info-box">
                                    <div className="icon">
                                        <img src={require(`../../assets/images/feature-icons/phone.png`)} alt=""/>
                                    </div>
                                    <div className="content">
                                        <span>Phone Number</span>
                                        <h4>+88 ( 5548 ) 6548</h4>
                                    </div>
                                </Link>
                                <Link to="mailto:infoyour@gmail.com" className="c-info-box">
                                    <div className="icon">
                                        <img src={require(`../../assets/images/feature-icons/evelope.png`)} alt=""/>
                                    </div>
                                    <div className="content">
                                        <span>Email</span>
                                        <h4>infoyour@gmail.com</h4>
                                    </div>
                                </Link>
                                <Link
                                    to="https://www.google.com/maps/place/QuomodoSoft/@23.8002524,90.359203,13z/data=!4m5!3m4!1s0x0:0x1dea3ec2f7a32054!8m2!3d23.8152118!4d90.3665415"
                                    className="c-info-box"
                                >
                                    <div className="icon">
                                        <img src={require(`../../assets/images/feature-icons/pin.png`)} alt=""/>
                                    </div>
                                    <div className="content">
                                        <span>Location</span>
                                        <h4>81 Circle Kitty New York</h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contact-form-s1">
                            <form action="#">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name*"
                                    required
                                />
                                <input
                                    type="number"
                                    name="number"
                                    placeholder="Phone Number*"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email*"
                                    required
                                />
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Your Subject*"
                                    required
                                />
                                <textarea
                                    name="message"
                                    cols="30"
                                    rows="10"
                                    placeholder="Message here"
                                ></textarea>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainSection;