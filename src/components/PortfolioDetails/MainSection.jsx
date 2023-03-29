import React from 'react';
import {Link} from "react-router-dom";
import SliderCom from "../helpers/SliderCom";


function MainSection() {
    const  settings={
        dots: true,
        infinite: true,
        autoplay: true,
        prevArrow: '',
        nextArrow: '',
        speed: 2000,
        slidesToShow: 2,
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
        <section className="portfolio-detail s-padding">
            <div className="container">
                <div className="row">
                    <main className="col-lg-8 portfolio-detail__main">
                        <div className="feature-img">
                            <img
                                src={require(`../../assets/images/portfolio-thumb/single-portfolio.png`)}
                                alt=""
                            />
                        </div>
                        <h2 className="p-title">
                            Futuristic robot artificial intelligence enlightening ai
                            technology
                        </h2>
                        <p className="desc">
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suff ered alteration in some form, by
                            injected humour, or randomised words which dont look as even
                            slightly believable. If you are going to use a passage of Lorem
                            Ipsum, you need to be a sure there isnt anything embarrassing
                            hidden in the middle of text. All the Lorem Ipsum gen erators on
                            the Internet tend to repeat predefined chunks as necessary, making
                            this the first true generator on the Internet. It uses a
                            dictionary of over 200 Latin words, combined with a handful of
                            model sentence structures
                        </p>
                        <div className="image-slider-s1">
                            <SliderCom settings={settings}>
                                <div className="item">
                                    <img
                                        src={require(`../../assets/images/portfolio-thumb/portfollio-s1.png`)}
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src={require(`../../assets/images/portfolio-thumb/portfollio-s2.png`)}
                                        alt=""
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        src={require(`../../assets/images/portfolio-thumb/portfollio-s1.png`)}
                                        alt=""
                                    />
                                </div>

                            </SliderCom>

                        </div>
                        <div className="portfolio-challenges">
                            <h3 className="title">The Challenge of Project</h3>
                            <p className="desc">
                                Sure there isnt anything embarrassing hidden in the middle of
                                text. All the Lorem Ipsum gen erators on the Internet tend to
                                repeat predefined chunks as necessary, making this the first
                                true generator on the Internet. It uses a dictionary of over 200
                                Latin words, combined with a handful of model sentence
                                structures
                            </p>
                            <ul className="i-list">

                                <li>
                                    <span className="icon"><i className="fa-solid fa-check"></i></span>
                                    <span className="text"
                                    >It is a long established fact that a reader will be</span
                                    >
                                </li>
                                <li>
                                    <span className="icon"><i className="fa-solid fa-check"></i></span>
                                    <span className="text"
                                    >There are many variations of passages</span
                                    >
                                </li>
                                <li>
                                    <span className="icon"><i className="fa-solid fa-check"></i></span>
                                    <span className="text">All the Lorem Ipsum generators</span>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa-solid fa-check"></i></span>
                                    <span className="text"
                                    >Asearch for lorem ipsum will uncover many
                  </span>
                                </li>
                            </ul>
                        </div>
                    </main>
                    <aside className="col-lg-4 portfolio-detail__side">
                        <div className="p-detail-box widget">
                            <h3 className="title">Project Details</h3>
                            <ul className="details">
                                <li>
                  <span className="name">Start Date :</span
                  ><span className="value">31 May 2022</span>
                                </li>
                                <li>
                  <span className="name">End Date :</span
                  ><span className="value">15 June 2022</span>
                                </li>
                                <li>
                  <span className="name">Clients :</span
                  ><span className="value">Quomodosoft</span>
                                </li>
                                <li>
                  <span className="name">Tags :</span
                  ><span className="value">It Technology</span>
                                </li>
                                <li>
                  <span className="name">Website :</span
                  ><span className="value">quomodosoft.com</span>
                                </li>
                                <li>
                  <span className="name">Category :</span
                  ><span className="value">Technology Title</span>
                                </li>
                            </ul>
                        </div>
                        <div className="contact-detail-box widget">
                            <h3 className="title">Need Your Help?</h3>
                            <ul className="info-list">
                                <li>
                                    <Link to="tel:750-1234"
                                    ><i className="fa-solid fa-phone"></i>+(323) 750-1234</Link>
                                </li>
                                <li>
                                    <Link to="mailto:infoyour@gmail.com"
                                    ><i className="fa-brands fa-skype"></i>shohel49</Link>
                                </li>
                                <li>
                                    <Link to="mailto:infoyour@gmail.com"
                                    ><i className="fa-solid fa-location-dot"></i
                                    >infoyour@gmail.com</Link>
                                </li>
                                <li>
                                    <Link
                                        to="https://www.google.com/maps/place/QuomodoSoft/@23.8002524,90.359203,13z/data=!4m5!3m4!1s0x0:0x1dea3ec2f7a32054!8m2!3d23.8152118!4d90.3665415"
                                    ><i className="fa-solid fa-envelope"></i>374 FA Tower, William S
                                        Blvd</Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default MainSection;