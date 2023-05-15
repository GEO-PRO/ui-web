import React, { useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import LogoPage from '../common/LogoPage';
import LoginBtn from '../common/LoginBtn';

function Drawer({ type = 0 }) {
    const [drawer, setDrawer] = useState(false);
    const drawerHandler = () => {
        setDrawer(!drawer);
    };
    useEffect(() => {
        const selectBody = document.querySelector("html");
        if (drawer) {
            selectBody.style.overflowY = 'hidden';
        } else {
            selectBody.style.overflowY = 'auto';
        }
    }, [drawer]);
    return (
        <>
            <header className="mobile-header">
                <div className="container">
                    <div className="mobile-header__container">
                        <div className="p-left">
                            <div className="logo">
                                <LogoPage />
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
            <aside id="offcanvas-nav" className={`${drawer ? 'open' : ''}`}>
                <nav className="m-nav">
                    <button type="button" onClick={drawerHandler} id="nav-cls-btn"><i className="fa-solid fa-xmark"></i></button>
                    <div className="logo">
                        <LogoPage />
                    </div>
                    <ul className="nav-links">
                        <li><Link to="/">Trang chủ</Link></li>
                        <li><Link to="/library">Thư viện</Link></li>
                        <li><Link to="/news">Tin tức</Link></li>
                    </ul>
                    <div className='text-center'>
                        <NavLink to="/login">
                            <button class="c-login-mobile-btn">
                                Đăng nhập
                            </button>
                        </NavLink>
                    </div>
                    <ul className="social-icons-s1">
                        <li>
                            <Link to="https://www.facebook.com/laiduylong620"
                            ><i className="fa-brands fa-facebook-f"></i
                            ></Link>
                        </li>
                        <li>
                            <Link to="https://www.youtube.com/@longialy9297"
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