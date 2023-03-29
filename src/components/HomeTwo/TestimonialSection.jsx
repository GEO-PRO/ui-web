import React, {useRef} from 'react';
import SliderCom from "../helpers/SliderCom";

function TestimonialSection() {
    const testimonialRef = useRef(null);
    const settings={
        dots: false,
        infinite: true,
        autoplay: true,
        arrows:false,
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
    const nextHandler=()=>{
        testimonialRef.current.slickNext();
    };
    const prevHandler=()=>{
        testimonialRef.current.slickPrev();
    }
    return (
        <section className="testimonial-area-s2 s-padding-b">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="testimonial-area-s1__thumb floating">
                            <img src={require(`../../assets/images/thumbs/tes-area-2-thumb.png`)} alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="testimonial-area-s2__content" style={{position:'relative'}}>
                            <div className="cont-h">
                                <span className="s-sub-title">Testimonial</span>
                                <h2 className="s-title">What Client Say About Our Company?</h2>
                            </div>
                            <div className="testimonial-s2">
                                <button onClick={()=>nextHandler()} type="button" className="slick-btn next"><i className="fa-solid fa-arrow-left"></i></button>
                                <SliderCom selector={testimonialRef} settings={settings}>
                                    <div className="single-tes-s2">
                                        <div className="icon-rating">
                                            <div className="q-icon">
                                                <img
                                                    src={require(`../../assets/images/feature-icons/quote-icon-1.svg`).default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                        <p className="desc">
                                            There are many variations of passages of Lorem Ipsum
                                            available but the majority have suffered alteration in some
                                            form, by injecte humour, or randomised words which
                                            randomised words which a don't look even slightly
                                            believable.
                                        </p>
                                        <div className="auth-info">
                                            <div className="thumb">
                                                <img src={require(`../../assets/images/thumbs/tes-thumb-2.png`)} alt=""/>
                                            </div>
                                            <div className="details">
                                                <p className="name">Jossen Thank</p>
                                                <span className="designation">Founder of Antech</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-tes-s2">
                                        <div className="icon-rating">
                                            <div className="q-icon">
                                                <img
                                                    src={require(`../../assets/images/feature-icons/quote-icon-1.svg`).default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                        <p className="desc">
                                            There are many variations of passages of Lorem Ipsum
                                            available but the majority have suffered alteration in some
                                            form, by injecte humour, or randomised words which
                                            randomised words which a don't look even slightly
                                            believable.
                                        </p>
                                        <div className="auth-info">
                                            <div className="thumb">
                                                <img src={require(`../../assets/images/thumbs/tes-thumb-2.png`)} alt=""/>
                                            </div>
                                            <div className="details">
                                                <p className="name">Jossen Thank</p>
                                                <span className="designation">Founder of Antech</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-tes-s2">
                                        <div className="icon-rating">
                                            <div className="q-icon">
                                                <img
                                                    src={require(`../../assets/images/feature-icons/quote-icon-1.svg`).default}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="rating">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                        </div>
                                        <p className="desc">
                                            There are many variations of passages of Lorem Ipsum
                                            available but the majority have suffered alteration in some
                                            form, by injecte humour, or randomised words which
                                            randomised words which a don't look even slightly
                                            believable.
                                        </p>
                                        <div className="auth-info">
                                            <div className="thumb">
                                                <img src={require(`../../assets/images/thumbs/tes-thumb-2.png`)} alt=""/>
                                            </div>
                                            <div className="details">
                                                <p className="name">Jossen Thank</p>
                                                <span className="designation">Founder of Antech</span>
                                            </div>
                                        </div>
                                    </div>
                                </SliderCom>
                                <button onClick={()=>prevHandler()} type="button" className="slick-btn prev"><i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src={require(`../../assets/images/backgrounds/glowing-shape-2.png`)} alt=""/>
            </div>
        </section>
    );
}

export default TestimonialSection;