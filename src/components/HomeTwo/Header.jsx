import React from 'react';
import NavItems from "../common/NavItems";

function Header() {
    return (
        <header className="header-s2">
            <div className="stretch-container">
                <div className="header-container">
                    <div className="header-s1__top">
                        <div className="p-left">
                            <div className="tb-single-info">
                                <div className="icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="content">
                                    <span>Phone Number</span>
                                    <p><a href="tel:88 ( 5548 ) 6548">+88 ( 5548 ) 6548</a></p>
                                </div>
                            </div>
                            <div className="tb-single-info">
                                <div className="icon">
                                    <i className="fa-solid fa-envelope"></i>
                                </div>
                                <div className="content">
                                    <span>Email Address</span>
                                    <p>
                                        <a href="mailto:infoyour@gmail.com">infoyour@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="tb-single-info">
                                <div className="icon">
                                    <i className="fa-solid fa-location-dot"></i>
                                </div>
                                <div className="content">
                                    <span>Location</span>
                                    <p>
                                        <a
                                            href="https://www.google.com/maps/place/QuomodoSoft/@23.8002524,90.359203,13z/data=!4m5!3m4!1s0x0:0x1dea3ec2f7a32054!8m2!3d23.8152118!4d90.3665415"
                                        >Circle Kitty New York</a
                                        >
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-right">
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
                    <div className="header-s1__bottom">
                        <div className="p-left">
                            <div className="logo">
                                <a href="/home-two">
                                    <img src={require(`../../assets/images/logos/logo-gradient.svg`).default} alt=""/>
                                </a>
                            </div>
                        </div>
                        <div className="p-middle">
                            <NavItems/>
                        </div>
                        <div className="p-right">
                            <a href="/service" className="btn btn-s1">Start a Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;