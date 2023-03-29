import React from 'react';
import SliderCom from "../helpers/SliderCom";

function TeamSection() {
    const settings={
        dots: true,
        infinite: true,
        autoplay: true,
        prevArrow: '',
        nextArrow: '',
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        pauseOnHover: true,
        arrows:false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="team-area-s1 s-padding">
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Our Team</span>
                    <h2 className="s-title">Our Expart Team Member</h2>
                </div>
                <div className="row team-slider-s1">
                    <SliderCom settings={settings}>
                        <div className="col-lg-3">
                            <div className="single-team-s1">
                                <div className="thumb">
                                    <img src={require(`../../assets/images/thumbs/team-1.png`)} alt=""/>
                                    <ul className="social-icons-s1">
                                        <li style={{'--delay':'--delay: 0s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-facebook-f"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.1s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.2s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-linkedin-in"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.3s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-youtube"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3 className="name">Deniella Rhodes</h3>
                                    <p className="designation">CEO of Antech</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="single-team-s1">
                                <div className="thumb">
                                    <img src={require(`../../assets/images/thumbs/team-2.png`)} alt=""/>
                                    <ul className="social-icons-s1">
                                        <li style={{'--delay':'--delay: 0s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-facebook-f"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.1s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.2s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-linkedin-in"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.3s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-youtube"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3 className="name">David Phillips</h3>
                                    <p className="designation">Senior Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="single-team-s1">
                                <div className="thumb">
                                    <img src={require(`../../assets/images/thumbs/team-3.png`)} alt=""/>
                                    <ul className="social-icons-s1">
                                        <li style={{'--delay':'--delay: 0s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-facebook-f"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.1s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.2s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-linkedin-in"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.3s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-youtube"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3 className="name">Lauren Davison</h3>
                                    <p className="designation">Software Developer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="single-team-s1">
                                <div className="thumb">
                                    <img src={require(`../../assets/images/thumbs/team-4.png`)} alt=""/>
                                    <ul className="social-icons-s1">
                                        <li style={{'--delay':'--delay: 0s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-facebook-f"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.1s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.2s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-linkedin-in"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.3s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-youtube"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3 className="name">Druid Wensleydale</h3>
                                    <p className="designation">Marketing Expert</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="single-team-s1">
                                <div className="thumb">
                                    <img src={require(`../../assets/images/thumbs/team-1.png`)} alt=""/>
                                    <ul className="social-icons-s1">
                                        <li style={{'--delay':'--delay: 0s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-facebook-f"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.1s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.2s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-linkedin-in"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.3s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-youtube"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3 className="name">Deniella Rhodes</h3>
                                    <p className="designation">CEO of Antech</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="single-team-s1">
                                <div className="thumb">
                                    <img src={require(`../../assets/images/thumbs/team-2.png`)} alt=""/>
                                    <ul className="social-icons-s1">
                                        <li style={{'--delay':'--delay: 0s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-facebook-f"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.1s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-twitter"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.2s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-linkedin-in"></i
                                            ></a>
                                        </li>
                                        <li style={{'--delay': '0.3s'}}>
                                            <a href="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-youtube"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <h3 className="name">David Phillips</h3>
                                    <p className="designation">Senior Developer</p>
                                </div>
                            </div>
                        </div>
                    </SliderCom>

                </div>
            </div>
        </section>
    );
}

export default TeamSection;