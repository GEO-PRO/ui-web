import React from 'react';

function Footer() {
    return (
        <footer className="footer-s5 footer-s1">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-cta">
                            <div className="p-left">
                                <span>For IT Company</span>
                                <h2>Join IT Solution Our Community</h2>
                            </div>
                            <div className="p-right">
                                <form action="#">
                                    <div className="f-subs-form">
                                        <input type="text" placeholder="Enter your email address"/>
                                        <button type="submit">Subscribe Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row f-main">
                    <div className="col-xl-3 col-lg-6">
                        <div className="f-widget widget-1">
                            <div className="logo">
                                <a href="/home-six">
                                    <img src={require(`../../assets/images/logos/logo-white.svg`).default} alt=""/>
                                </a>
                            </div>
                            <p className="desc">
                                There are many variatons of pass Ipsum available, but the
                                majority alteration in some form, by inject randomised words
                            </p>
                            <ul className="social-icons-s1">
                                <li>
                                    <a href="https://www.facebook.com/QuomodoSoft"
                                    ><i className="fa-brands fa-facebook-f"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/QuomodoSoft"
                                    ><i className="fa-brands fa-twitter"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/QuomodoSoft"
                                    ><i className="fa-brands fa-linkedin-in"></i
                                    ></a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/QuomodoSoft"
                                    ><i className="fa-brands fa-youtube"></i
                                    ></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        <div className="f-widget widget-2">
                            <h3 className="f-title">Quick Links</h3>
                            <ul className="f-menu">
                                <li><a href="/about">Terms & Conditions</a></li>
                                <li><a href="/service-detail">About Company</a></li>
                                <li><a href="/service">Payment Gatway</a></li>
                                <li><a href="/blogs">Business Support</a></li>
                                <li><a href="/contact">Apps Development</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        <div className="f-widget widget-3">
                            <h3 className="f-title">Latest News</h3>
                            <div className="recent-posts">
                                <div className="rp-single">
                                    <div className="thumb">
                                        <img
                                            src={require(`../../assets/images/blog-post/post-thumb-1.png`)}
                                            alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <a href="/blog-details">Thoughtful man using laptop pondering </a>
                                        </h4>
                                        <span
                                        ><i className="fa-solid fa-calendar-days"></i>23 May
                      2022</span
                                        >
                                    </div>
                                </div>
                                <div className="rp-single">
                                    <div className="thumb">
                                        <img
                                            src={require(`../../assets/images/blog-post/post-thumb-2.png`)}
                                            alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <a href="Thoughtful man using laptop pondering ">Young man with a lap top in
                                                a business</a>
                                        </h4>
                                        <span
                                        ><i className="fa-solid fa-calendar-days"></i>23 May
                      2022</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        <div className="widget-4">
                            <h3 className="f-title">Contact Us</h3>
                            <ul className="info-list">
                                <li>
                                    <a href="tel:750-1234"
                                    ><i className="fa-solid fa-phone"></i>+(323) 750-1234</a
                                    >
                                </li>
                                <li>
                                    <a href="mailto:infoyour@gmail.com"
                                    ><i className="fa-solid fa-location-dot"></i
                                    >infoyour@gmail.com</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="https://www.google.com/maps/place/QuomodoSoft/@23.8002524,90.359203,13z/data=!4m5!3m4!1s0x0:0x1dea3ec2f7a32054!8m2!3d23.8152118!4d90.3665415"
                                    ><i className="fa-solid fa-envelope"></i>374 FA Tower, William S
                                        Blvd</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-cr">
                <div className="container">
                    <div className="footer-cr-container">
                        <div className="p-left">
                            <p>2022 © All rights reserved by QuomodoTheme</p>
                        </div>
                        <div className="p-right">
                            <ul className="cr-menu">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;