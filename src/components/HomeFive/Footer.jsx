import React from 'react';

function Footer() {
    return (
        <footer className="footer-s6 footer-s1">
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
                                <a href="/home-five">
                                    <img src={require(`../../assets/images/logos/home5-logo.svg`).default} alt=""/>
                                </a>
                            </div>
                            <p className="desc">
                                There are many variatons of pass Ipsum available, but the
                                majority alteration in some form, by inject randomised words
                            </p>
                            <ul className="social-icons-s1">
                                <li>
                                    <a href="https://www.facebook.com/QuomodoSoft">
                                        <svg
                                            width="9"
                                            height="19"
                                            viewBox="0 0 9 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M8.46275 9.29535H5.9831V18.3688H2.22623V9.29535H0.439453V6.1066H2.22623V4.04311C2.22623 2.5675 2.92801 0.256836 6.01654 0.256836L8.79939 0.268464V3.36369H6.78026C6.44906 3.36369 5.98335 3.52897 5.98335 4.23288V6.10956H8.79097L8.46275 9.29535Z"
                                                fill="url(#paint0_linear_1087_3651)"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_1087_3651"
                                                    x1="0.439453"
                                                    y1="18.3686"
                                                    x2="8.80506"
                                                    y2="18.366"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#312FF9"/>
                                                    <stop offset="1" stopColor="#8507FF"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/QuomodoSoft">
                                        <svg
                                            width="18"
                                            height="14"
                                            viewBox="0 0 18 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17.1892 1.94988C16.583 2.21836 15.9309 2.39994 15.2471 2.48104C15.9453 2.06321 16.4811 1.40209 16.7341 0.613029C16.0807 1.00013 15.3568 1.28095 14.587 1.43231C13.9702 0.776232 13.0914 0.366211 12.1184 0.366211C10.2514 0.366211 8.73722 1.8786 8.73722 3.74334C8.73722 4.00804 8.76723 4.26569 8.82522 4.51301C6.01521 4.37222 3.52367 3.02782 1.85591 0.984012C1.56493 1.48269 1.398 2.06321 1.398 2.68202C1.398 3.8534 1.99536 4.88752 2.9021 5.49298C2.34812 5.4756 1.82641 5.32373 1.37077 5.07011C1.37052 5.08447 1.37052 5.09882 1.37052 5.11293C1.37052 6.74923 2.53648 8.11404 4.08295 8.42407C3.79952 8.50164 3.50022 8.54269 3.19234 8.54269C2.97397 8.54269 2.76241 8.52179 2.55615 8.4825C2.98633 9.82388 4.23474 10.8003 5.71464 10.8278C4.55725 11.7337 3.09954 12.2734 1.515 12.2734C1.24267 12.2734 0.972868 12.2576 0.708862 12.2261C2.20439 13.1846 3.98208 13.7435 5.8914 13.7435C12.1105 13.7435 15.5116 8.5976 15.5116 4.13447C15.5116 3.98814 15.5083 3.84232 15.5018 3.69775C16.1629 3.22175 16.7361 2.62712 17.1892 1.94988Z"
                                                fill="url(#paint0_linear_1087_3657)"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_1087_3657"
                                                    x1="0.708862"
                                                    y1="13.7434"
                                                    x2="17.2004"
                                                    y2="13.7296"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#312FF9"/>
                                                    <stop offset="1" stopColor="#8507FF"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/QuomodoSoft">
                                        <svg
                                            width="16"
                                            height="15"
                                            viewBox="0 0 16 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.2982 9.18665V14.7774H12.0529V9.56133C12.0529 8.25163 11.5844 7.35722 10.4094 7.35722C9.51267 7.35722 8.97997 7.95938 8.74473 8.54243C8.65929 8.75081 8.63727 9.04016 8.63727 9.33241V14.7772H5.39173C5.39173 14.7772 5.4353 5.94285 5.39173 5.02837H8.63751V6.40987C8.63098 6.42075 8.62178 6.43139 8.61597 6.44178H8.63751V6.40987C9.0688 5.74704 9.83795 4.79945 11.5624 4.79945C13.6975 4.79945 15.2982 6.1928 15.2982 9.18665ZM1.99663 0.329102C0.886468 0.329102 0.160156 1.05696 0.160156 2.01325C0.160156 2.94924 0.865412 3.69812 1.95403 3.69812H1.97509C3.10703 3.69812 3.81084 2.94924 3.81084 2.01325C3.7893 1.05696 3.10703 0.329102 1.99663 0.329102ZM0.353049 14.7774H3.59737V5.02837H0.353049V14.7774Z"
                                                fill="url(#paint0_linear_1087_3654)"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_1087_3654"
                                                    x1="0.160156"
                                                    y1="14.7773"
                                                    x2="15.3085"
                                                    y2="14.7666"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#312FF9"/>
                                                    <stop offset="1" stopColor="#8507FF"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/QuomodoSoft">
                                        <svg
                                            width="20"
                                            height="15"
                                            viewBox="0 0 20 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9.83352 14.8348C11.7217 14.8348 13.61 14.815 15.4982 14.8414C17.3985 14.8679 18.716 13.4522 19.0439 11.9307C19.1168 11.6066 19.1532 11.2626 19.1532 10.9252C19.1653 8.70246 19.1593 6.47973 19.1593 4.257C19.1532 2.01443 17.6171 0.334148 15.5589 0.334148C11.7339 0.327533 7.90887 0.327533 4.08993 0.334148C2.04386 0.334148 0.50778 2.02104 0.501709 4.24377C0.501709 6.47312 0.501709 8.70246 0.501709 10.9318C0.50778 13.1016 1.97707 14.7819 3.96243 14.8216C5.91744 14.8613 7.87852 14.8282 9.83352 14.8348ZM7.39887 10.687C7.39887 8.59 7.39887 6.53927 7.39887 4.45546C9.03209 5.50067 10.641 6.52604 12.2803 7.57125C10.635 8.62308 9.03209 9.64183 7.39887 10.687Z"
                                                fill="url(#paint0_linear_1087_3660)"
                                            />
                                            <defs>
                                                <linearGradient
                                                    id="paint0_linear_1087_3660"
                                                    x1="0.501709"
                                                    y1="0.329271"
                                                    x2="19.1734"
                                                    y2="0.345552"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="#312FF9"/>
                                                    <stop offset="1" stopColor="#8507FF"/>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </a>
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
                                            <a href="/blog-details"
                                            >Thoughtful man using laptop pondering
                                            </a>
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
                                            <a href="Thoughtful man using laptop pondering "
                                            >Young man with a lap top in a business</a
                                            >
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