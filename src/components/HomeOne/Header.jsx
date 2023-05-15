import React from 'react';
import NavItems from "../common/NavItems";
import { NavLink } from 'react-router-dom';
import LogoPage from '../common/LogoPage';
import LoginBtn from '../common/LoginBtn';

function Header() {
    return (
        <header className="header-s3">
            <div className="header-container">
                <div className="header-bottom-container">
                    <div className="container">
                        <div className="header-s3__bottom">
                            <div className="p-left">
                                <div className="logo">
                                    <LogoPage />
                                </div>
                            </div>
                            <div className="p-center">
                                <NavItems />
                            </div>
                            <div className="p-right">
                                <LoginBtn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;