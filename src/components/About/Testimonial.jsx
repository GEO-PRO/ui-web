import React from 'react';
import SliderCom from "../helpers/SliderCom";
import CounterUp from "../helpers/CounterUp";

function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        prevArrow: '',
        nextArrow: '',
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
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
        <section id="testimonial-area-s3" className="testimonial-area-s3 s-padding-b">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="testimonial-area-s3__content">
                            <div className="cont-h">
                                <span className="s-sub-title">Testimonial</span>
                                <h2 className="s-title">What Our Clients Say</h2>
                            </div>
                            <div className="testimonial-s1">
                                <SliderCom settings={settings}>
                                    <div className="single-tes-s1">
                                        <p className="desc">
                                            <span
                                            ><img
                                                    src={require(`../../assets/images/feature-icons/tes-quote-left.png`)}
                                                    alt=""
                                                /></span>
                                            There are many variations of passages of as Ipsum available,
                                            but the majority have suffered alteration in some form, by
                                            injected humour, or randomised words
                                            <span
                                            ><img
                                                    src={require(`../../assets/images/feature-icons/tes-quote-right.png`)}
                                                    alt=""
                                                /></span>
                                        </p>
                                        <div className="auth-info">
                                            <div className="thumb">
                                                <img src={require(`../../assets/images/thumbs/tes-thumb.png`)} alt="" />
                                            </div>
                                            <div className="details">
                                                <p className="name">Jossen Thank</p>
                                                <span className="designation">Founder of Antech</span>
                                                <div className="rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-tes-s1">
                                        <p className="desc">
                                            <span
                                            ><img
                                                    src={require(`../../assets/images/feature-icons/tes-quote-left.png`)}
                                                    alt=""
                                                /></span>
                                            There are many variations of passages of as Ipsum available,
                                            but the majority have suffered alteration in some form, by
                                            injected humour, or randomised words
                                            <span
                                            ><img
                                                    src={require(`../../assets/images/feature-icons/tes-quote-right.png`)}
                                                    alt=""
                                                /></span>
                                        </p>
                                        <div className="auth-info">
                                            <div className="thumb">
                                                <img src={require(`../../assets/images/thumbs/tes-thumb.png`)} alt="" />
                                            </div>
                                            <div className="details">
                                                <p className="name">Jossen Thank</p>
                                                <span className="designation">Founder of Antech</span>
                                                <div className="rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-tes-s1">
                                        <p className="desc">
                                            <span
                                            ><img
                                                    src={require(`../../assets/images/feature-icons/tes-quote-left.png`)}
                                                    alt=""
                                                /></span>
                                            There are many variations of passages of as Ipsum available,
                                            but the majority have suffered alteration in some form, by
                                            injected humour, or randomised words
                                            <span
                                            ><img
                                                    src={require(`../../assets/images/feature-icons/tes-quote-right.png`)}
                                                    alt=""
                                                /></span>
                                        </p>
                                        <div className="auth-info">
                                            <div className="thumb">
                                                <img src={require(`../../assets/images/thumbs/tes-thumb.png`)} alt="" />
                                            </div>
                                            <div className="details">
                                                <p className="name">Jossen Thank</p>
                                                <span className="designation">Founder of Antech</span>
                                                <div className="rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-tes-s1">
                                        <p className="desc">
                                            <span
                                            ><img
                                                    src={require(`../../assets/images/feature-icons/tes-quote-left.png`)}
                                                    alt=""
                                                /></span>
                                            There are many variations of passages of as Ipsum available,
                                            but the majority have suffered alteration in some form, by
                                            injected humour, or randomised words
                                            <span
                                            ><img
                                                    src={require(`../../assets/images/feature-icons/tes-quote-right.png`)}
                                                    alt=""
                                                /></span>
                                        </p>
                                        <div className="auth-info">
                                            <div className="thumb">
                                                <img src={require(`../../assets/images/thumbs/tes-thumb.png`)} alt="" />
                                            </div>
                                            <div className="details">
                                                <p className="name">Jossen Thank</p>
                                                <span className="designation">Founder of Antech</span>
                                                <div className="rating">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SliderCom>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="testimonial-area-s3__facts">
                            <div className="p-left">
                                <div className="funfact-s3">
                                    <div className="icon">
                                        <img
                                            src={require(`../../assets/images/feature-icons/projects.svg`).default}
                                            alt=""
                                        />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <span className="counter-item"> <CounterUp sectionId="testimonial-area-s3" endValue={2547} /></span
                                            ><span className="c-sfix">+</span>
                                        </h4>
                                        <p>Project Done</p>
                                    </div>
                                </div>
                                <div className="funfact-s3">
                                    <div className="icon">
                                        <img src={require(`../../assets/images/feature-icons/years.svg`).default} alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <span className="counter-item"> <CounterUp sectionId="testimonial-area-s3" endValue={12} /></span
                                            ><span className="c-sfix">+</span>
                                        </h4>
                                        <p>Glorious Years</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-right">
                                <div className="funfact-s3">
                                    <div className="icon">
                                        <img src={require(`../../assets/images/feature-icons/clients.svg`).default} alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <span className="counter-item"> <CounterUp sectionId="testimonial-area-s3" endValue={8255} /></span
                                            ><span className="c-sfix">+</span>
                                        </h4>
                                        <p>Active Clients</p>
                                    </div>
                                </div>
                                <div className="funfact-s3">
                                    <div className="icon">
                                        <img src={require(`../../assets/images/feature-icons/win.svg`).default} alt="" />
                                    </div>
                                    <div className="content">
                                        <h4>
                                            <span className="counter-item"> <CounterUp sectionId="testimonial-area-s3" endValue={895} /></span
                                            ><span className="c-sfix">+</span>
                                        </h4>
                                        <p>Project Win</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;