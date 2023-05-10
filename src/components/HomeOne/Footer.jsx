import React from 'react';

function Footer() {
    return (
        <footer className="footer-s1 text-center">
            <div className="container">
                <div className="f-widget widget-1">
                    <div className="logo">
                        <a href="/">
                            <img src={require(`../../assets/images/logos/logo-white-blue.svg`).default} alt="" />
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
                <div className="widget-4" style={{ "marginTop": "50px" }}>
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
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;