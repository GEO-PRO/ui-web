import React from 'react';
import SliderCom from "../helpers/SliderCom";

function ProjectSlider() {
    const settings={
        dots: true,
        infinite: true,
        autoplay: true,
        prevArrow: '',
        nextArrow: '',
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: true,
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="project-slider-area-s2 s-padding">
            <div className="container">
                <div className="row project-slider-container-s2">
                    <SliderCom settings={settings}>
                        <div className="col-lg-4">
                            <div className="s-project-s2">
                                <div className="s-project-s2-inner">
                                    <div className="thumb">
                                        <img src={require(`../../assets/images/thumbs/portfolio-1.jpg`)} alt=""/>
                                    </div>
                                    <div className="content">
                                        <p>Product Design</p>
                                        <h3><a href="/pricing">Web Application</a></h3>
                                        <a href="/pricing" className="btn">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="s-project-s2">
                                <div className="s-project-s2-inner">
                                    <div className="thumb">
                                        <img src={require(`../../assets/images/thumbs/portfolio-1.jpg`)} alt=""/>
                                    </div>
                                    <div className="content">
                                        <p>Product Design</p>
                                        <h3><a href="/pricing">Software</a></h3>
                                        <a href="/pricing" className="btn">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="s-project-s2">
                                <div className="s-project-s2-inner">
                                    <div className="thumb">
                                        <img src={require(`../../assets/images/thumbs/portfolio-2.jpg`)} alt=""/>
                                    </div>
                                    <div className="content">
                                        <p>Product Design</p>
                                        <h3><a href="/pricing">UI/UX Design</a></h3>
                                        <a href="/pricing" className="btn">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="s-project-s2">
                                <div className="s-project-s2-inner">
                                    <div className="thumb">
                                        <img src={require(`../../assets/images/thumbs/portfolio-3.jpg`)} alt=""/>
                                    </div>
                                    <div className="content">
                                        <p>Product Design</p>
                                        <h3><a href="/pricing">Consulting</a></h3>
                                        <a href="/pricing" className="btn">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="s-project-s2">
                                <div className="s-project-s2-inner">
                                    <div className="thumb">
                                        <img src={require(`../../assets/images/thumbs/portfolio-4.jpg`)} alt=""/>
                                    </div>
                                    <div className="content">
                                        <p>Product Design</p>
                                        <h3><a href="/pricing">Business</a></h3>
                                        <a href="/pricing" className="btn">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="s-project-s2">
                                <div className="s-project-s2-inner">
                                    <div className="thumb">
                                        <img src={require(`../../assets/images/thumbs/portfolio-5.jpg`)} alt=""/>
                                    </div>
                                    <div className="content">
                                        <p>Product Design</p>
                                        <h3><a href="/pricing">Web Application</a></h3>
                                        <a href="/pricing" className="btn">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SliderCom>

                </div>
            </div>
        </section>
    );
}

export default ProjectSlider;