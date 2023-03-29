import React from 'react';
import NavItems from "../common/NavItems";

function Header() {
    return (
        <header className="header-s6">
            <div className="header-container">
                <div className="header-top-container">
                    <div className="container">
                        <div className="header-s3__top">
                            <div className="p-left">
                                <div className="tb-single-info-s6">
                                    <div className="icon">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="content">
                                        <p><a href="tel:88 ( 5548 ) 6548">+88 ( 5548 ) 6548</a></p>
                                    </div>
                                </div>
                                <div className="tb-single-info-s6">
                                    <div className="icon">
                                        <i className="fa-solid fa-envelope"></i>
                                    </div>
                                    <div className="content">
                                        <p>
                                            <a href="mailto:infoyour@gmail.com">infoyour@gmail.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="tb-single-info-s6">
                                    <div className="icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="content">
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
                                <ul className="social-icons-s6">
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
                    </div>
                </div>
                <div className="header-bottom-container">
                    <div className="container">
                        <div className="header-s6__bottom">
                            <div className="p-left">
                                <div className="logo">
                                    <a href="/home-six">
                                        <img src={require(`../../assets/images/logos/logo-home-6.svg`).default} alt="logo"/>
                                    </a>
                                </div>
                            </div>
                            <div className="p-center">
                                <NavItems/>
                            </div>
                            <div className="p-right" style={{position:'relative'}}>
                                <button type="button" className="header-search-btn d-flex align-center justify-center">
                                    <img src={require(`../../assets/images/icons/search-white.svg`).default} alt="search"
                                         className="search-white"/>
                                </button>
                                <div className="search-form-main">
                                    <form role="search" method="get" className="search-form d-flex align-center"
                                          action="sitename.com">
                                        <input type="search" className="search-field" placeholder="Search"
                                               name="s"/>
                                        <button type="submit" className="search-submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;