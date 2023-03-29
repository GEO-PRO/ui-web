import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

function Drawer({type=0}) {
    const [drawer, setDrawer] = useState(false);
    const drawerHandler=()=>{
        setDrawer(!drawer);
    };
    useEffect(() => {
        const selectBody = document.querySelector("html");
        if(drawer){
            selectBody.style.overflowY='hidden';
        }else {
            selectBody.style.overflowY='auto';
        }
    }, [drawer]);
    return (
        <>
            <header className="mobile-header">
                <div className="container">
                    <div className="mobile-header__container">
                        <div className="p-left">
                            <div className="logo">
                                <Link to="/">
                                    {type === 1 ?(
                                        <img src={require(`../../assets/images/logos/logo-gradient-white.svg`).default} alt="" />
                                    ):type === 2?(
                                        <img src={require(`../../assets/images/logos/logo-white.svg`).default} alt="" />
                                    ):type===3?(
                                        <img src={require(`../../assets/images/logos/logo.svg`).default} alt="" />
                                    ):(
                                        <img src={require(`../../assets/images/logos/logo-blue.svg`).default} alt="" />
                                    )}
                                </Link>
                            </div>
                        </div>
                        <div className="p-right">
                            <button type="button" onClick={drawerHandler} id="nav-opn-btn">
                                <i className="fa-solid fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <aside id="offcanvas-nav" className={`${drawer?'open':''}`}>
                <nav className="m-nav">
                    <button type="button" onClick={drawerHandler} id="nav-cls-btn"><i className="fa-solid fa-xmark"></i></button>
                    <div className="logo">
                        <Link to="/">
                            <img src={require(`../../assets/images/logos/logo-blue.svg`).default} alt="" />
                        </Link>
                    </div>
                    <ul className="nav-links">
                        <li className="dropdown">
                            <Link  to="#nolink"
                            >Home <i className="fa-solid fa-chevron-down"></i
                            ></Link>
                            <ul className="d-menu">
                                <li><Link to="/">Home 1</Link></li>
                                <li><Link to="/home-two">Home 2</Link></li>
                                <li><Link to="/home-three">Home 3</Link></li>
                                <li><Link to="/home-four">Home 4</Link></li>
                                <li><Link to="/home-five">Home 5</Link></li>
                                <li><Link to="/home-six">Home 6</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/service">Services</Link></li>
                        <li className="dropdown">
                            <Link  to="#nolink"
                            >Pages <i className="fa-solid fa-chevron-down"></i
                            ></Link>
                            <ul className="d-menu">
                                <li><Link to="/teams">Team</Link></li>
                                <li><Link to="/team-details">Team Details</Link></li>
                                <li>
                                    <Link to="/service-details">Service Detail</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio-details">Portfolio Details</Link>
                                </li>
                                <li><Link to="/pricing">Pricing</Link></li>
                                <li><Link to="/error">Error</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li className="dropdown">
                            <Link  to="#nolink"
                            >Blog <i className="fa-solid fa-chevron-down"></i
                            ></Link>
                            <ul className="d-menu">
                                <li><Link to="/blogs">Blog Full Width</Link></li>
                                <li>
                                    <Link to="/blogs-two">Blog Right Sidebar</Link>
                                </li>
                                <li><Link to="/blog-details">Blog Details</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/contact">Contact</Link></li>
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
                </nav>
            </aside>
        </>
    );
}

export default Drawer;