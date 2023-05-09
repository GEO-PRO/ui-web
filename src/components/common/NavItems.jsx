import React from 'react';
import { Link } from "react-router-dom";

function NavItems() {
    return (
        <nav className="m-nav">
            <ul>
                <li className="dropdown">
                    <Link to="/"
                    >Trang chủ</Link>
                </li>
                <li className="dropdown">
                    <Link to="/library" >
                        Thư viện
                    </Link>
                </li>
                <li>
                    <Link to="/news" >
                        Tin tức
                    </Link>
                </li>

                {/* <li>
                    <Link to="/service" >
                        Services
                    </Link>
                </li>
                <li className="dropdown">
                    <Link to="#nolink"
                    >Pages <i className="fa-solid fa-chevron-down"></i
                    ></Link>
                    <ul className="d-menu">
                        <li>
                            <Link to="/teams" >
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link to="/team-details" >
                                Team Details
                            </Link>
                        </li>
                        <li>
                            <Link to="/service-details" >
                                Service Details
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio-details" >
                                Portfolio Details
                            </Link>
                        </li>
                        <li>
                            <Link to="/pricing" >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link to="/error" >
                                Error
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/portfolio" >
                        Portfolio
                    </Link>
                </li>
                <li className="dropdown">
                    <Link to="#nolink"
                    >Blog <i className="fa-solid fa-chevron-down"></i
                    ></Link>
                    <ul className="d-menu">
                        <li>
                            <Link to="/blogs" >
                                Blog Full Width
                            </Link>
                        </li>
                        <li>
                            <Link to="/blogs-two" >
                                Blog Right Sidebar
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog-details" >
                                Blog Details
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/contact" >
                        Contact
                    </Link>
                </li> */}
            </ul>
        </nav>
    );
}

export default NavItems;