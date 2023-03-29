import React from 'react';
import NavItems from "../common/NavItems";

function Header() {
    return (
        <header className="home5-header">
            <div className="home5-container">
                <div className="header-container">
                    <div className="header-s1__top">
                        <div className="p-left">
                            <div className="logo">
                                <a href="/home-five">
                                    <img src={require(`../../assets/images/logos/home5-logo.svg`).default} alt="logo"/>
                                </a>
                            </div>
                        </div>
                        <div className="p-right">
                            <div className="tb-single-info-7 tb-single-info">
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
                            <div className="tb-single-info-7 tb-single-info">
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
                            <div className="tb-single-info-7 tb-single-info">
                                <div className="icon">
                                    <img src={require(`../../assets/images/icons/time.svg`).default} alt="time"/>
                                </div>
                                <div className="content">
                                    <span>Support Time</span>
                                    <p>9:00 am to 6:00 pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-s1__bottom align-center">
                        <div className="logo">
                            <a href="/home-five">
                                <img src="assets/images/logos/home5-logo.svg" alt=""/>
                            </a>
                        </div>
                        <div className="p-right">
                            <NavItems/>
                        </div>
                        <div className="p-left">
                            <img src="asset" alt=""/>
                            <form
                                action="#"
                                method="post"
                                className="home5-header-form d-flex align-center"
                            >
                                <input
                                    type="search"
                                    name="search"
                                    id="search"
                                    className="search-field"
                                    placeholder=""
                                    onChange="hideIcon(this);"
                                />
                                <button
                                    type="submit"
                                    className="search-btn d-flex justify-center align-center"
                                >
                                    Search
                                </button>
                            </form>
                            <a href="/service" className="btn btn-s5 btn-s1"
                            >Start a Project</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;