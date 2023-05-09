import React from 'react';
import NavItems from "../common/NavItems";

function Header() {
    return (
        <header className="header-s3">
            <div className="header-container">
                <div className="header-bottom-container">
                    <div className="container">
                        <div className="header-s3__bottom">
                            <div className="p-left">
                                <div className="logo">
                                    <a href="/">
                                        <img src={require(`../../assets/images/logos/logo-blue.svg`).default} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-center">
                                <NavItems />
                            </div>
                            <div className="p-right">
                                <a href="/service" className="btn btn-s3">Đăng nhập</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;