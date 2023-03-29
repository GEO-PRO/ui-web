import React from 'react';
import SliderCom from "../helpers/SliderCom";

function ProjectSliderSection({className,hoverContentClass}) {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: false,
        arrows:false,
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
        <section className={`project-slider-area-s1 ${className||""}`}>
            <div className="container-fluid">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Our Project</span>
                    <h2 className="s-title">Proud Team of Great Project</h2>
                </div>
                <div className="row project-slider-container-s1">
                    <SliderCom settings={settings}>
                        <div className="col-lg-4">
                            <div className={`${hoverContentClass||""} s-project-s1`}>
                                <div className="thumb">
                                    <img src={require(`../../assets/images/thumbs/project-thumb.webp`)} alt=""/>
                                </div>
                                <div className="content">
                                    <div className="p-left">
                                        <h3 className="name">Web Development</h3>
                                        <ul className="p-catagories">
                                            <li><a href="#">Branding</a></li>
                                            <li><a href="#">Logo</a></li>
                                            <li><a href="#">Mobile App</a></li>
                                        </ul>
                                    </div>
                                    <div className="p-right">
                                        <a href="/portfolio-details" className="r-btn">
                                            <i className="fa-sharp fa-solid fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={`${hoverContentClass||""} s-project-s1`}>
                                <div className="thumb">
                                    <img src={require(`../../assets/images/thumbs/project-thumb.webp`)} alt=""/>
                                </div>
                                <div className="content">
                                    <div className="p-left">
                                        <h3 className="name">Web Development</h3>
                                        <ul className="p-catagories">
                                            <li><a href="#">Branding</a></li>
                                            <li><a href="#">Logo</a></li>
                                            <li><a href="#">Mobile App</a></li>
                                        </ul>
                                    </div>
                                    <div className="p-right">
                                        <a href="/portfolio-details" className="r-btn">
                                            <i className="fa-sharp fa-solid fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={`${hoverContentClass||""} s-project-s1`}>
                                <div className="thumb">
                                    <img src={require(`../../assets/images/thumbs/project-thumb-2.webp`)} alt=""/>
                                </div>
                                <div className="content">
                                    <div className="p-left">
                                        <h3 className="name">App Development</h3>
                                        <ul className="p-catagories">
                                            <li><a href="#">Branding</a></li>
                                            <li><a href="#">Logo</a></li>
                                            <li><a href="#">Mobile App</a></li>
                                        </ul>
                                    </div>
                                    <div className="p-right">
                                        <a href="/portfolio-details" className="r-btn">
                                            <i className="fa-sharp fa-solid fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={`${hoverContentClass||""} s-project-s1`}>
                                <div className="thumb">
                                    <img src={require(`../../assets/images/thumbs/project-thumb-3.png`)} alt=""/>
                                </div>
                                <div className="content">
                                    <div className="p-left">
                                        <h3 className="name">Consulting</h3>
                                        <ul className="p-catagories">
                                            <li><a href="#">Branding</a></li>
                                            <li><a href="#">Logo</a></li>
                                            <li><a href="#">Mobile App</a></li>
                                        </ul>
                                    </div>
                                    <div className="p-right">
                                        <a href="/portfolio-details" className="r-btn">
                                            <i className="fa-sharp fa-solid fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={`${hoverContentClass||""} s-project-s1`}>
                                <div className="thumb">
                                    <img src={require(`../../assets/images/thumbs/project-thumb-4.png`)} alt=""/>
                                </div>
                                <div className="content">
                                    <div className="p-left">
                                        <h3 className="name">Advertising</h3>
                                        <ul className="p-catagories">
                                            <li><a href="#">Branding</a></li>
                                            <li><a href="#">Logo</a></li>
                                            <li><a href="#">Mobile App</a></li>
                                        </ul>
                                    </div>
                                    <div className="p-right">
                                        <a href="/portfolio-details" className="r-btn">
                                            <i className="fa-sharp fa-solid fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={`${hoverContentClass||""} s-project-s1`}>
                                <div className="thumb">
                                    <img src={require(`../../assets/images/thumbs/project-thumb.webp`)} alt=""/>
                                </div>
                                <div className="content">
                                    <div className="p-left">
                                        <h3 className="name">Web Development</h3>
                                        <ul className="p-catagories">
                                            <li><a href="#">Branding</a></li>
                                            <li><a href="#">Logo</a></li>
                                            <li><a href="#">Mobile App</a></li>
                                        </ul>
                                    </div>
                                    <div className="p-right">
                                        <a href="/portfolio-details" className="r-btn">
                                            <i className="fa-sharp fa-solid fa-angle-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={`${hoverContentClass||""} s-project-s1`}>
                                <div className="thumb">
                                    <img src={require(`../../assets/images/thumbs/project-thumb-4.png`)} alt=""/>
                                </div>
                                <div className="content">
                                    <div className="p-left">
                                        <h3 className="name">App Development</h3>
                                        <ul className="p-catagories">
                                            <li><a href="#">Branding</a></li>
                                            <li><a href="#">Logo</a></li>
                                            <li><a href="#">Mobile App</a></li>
                                        </ul>
                                    </div>
                                    <div className="p-right">
                                        <a href="/portfolio-details" className="r-btn">
                                            <i className="fa-sharp fa-solid fa-angle-right"></i>
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

export default ProjectSliderSection;