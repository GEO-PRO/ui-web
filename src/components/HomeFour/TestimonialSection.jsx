import React, {useRef} from 'react';
import SliderCom from "../helpers/SliderCom";

function TestimonialSection() {
    const testmonialRef = useRef(null);
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
    return (
        <section className="testimonial-area-s2 testimonial-area-s4 s-padding">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-xl-6">
                        <div className="testimonial-area-s1__thumb floating">
                            <img src={require(`../../assets/images/thumbs/tes-area-3-thumb.png`)} alt=""/>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="testimonial-area-s7__content testimonial-area-s2__content">
                            <div className="cont-h">
                                <span className="s-sub-title">Testimonial</span>
                                <h2 className="s-title">What Client Say About Our Company?</h2>
                            </div>
                            <div className="testimonial-s2" style={{position:'relative'}}>
                                <button onClick={()=>testmonialRef.current.slickNext()} type="button" className="slick-btn next"><i className="fa-solid fa-arrow-left"></i></button>
                                <SliderCom selector={testmonialRef} settings={settings}>
                                    <div className="single-tes-s2">
                                        <div className="icon-rating">
                                            <div className="q-icon">
                                                <img
                                                    src={require(`../../assets/images/feature-icons/quote-icon-2.svg`).default}
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
                                                <img src={require(`../../assets/images/thumbs/tes-thumb-3.png`)} alt=""/>
                                            </div>
                                            <div className="details">
                                                <p className="name">Abubokker Siddik</p>
                                                <span className="designation">Senior UIUX Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-tes-s2">
                                        <div className="icon-rating">
                                            <div className="q-icon">
                                                <img
                                                    src={require(`../../assets/images/feature-icons/quote-icon-2.svg`).default}
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
                                                <img src={require(`../../assets/images/thumbs/tes-thumb-3.png`)} alt=""/>
                                            </div>
                                            <div className="details">
                                                <p className="name">Abubokker Siddik</p>
                                                <span className="designation">Senior UIUX Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-tes-s2">
                                        <div className="icon-rating">
                                            <div className="q-icon">
                                                <img
                                                    src={require(`../../assets/images/feature-icons/quote-icon-2.svg`).default}
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
                                            form, by inject humour, or randomised words which
                                            randomised words which a don't look even slightly
                                            believable.
                                        </p>
                                        <div className="auth-info">
                                            <div className="thumb">
                                                <img src={require(`../../assets/images/thumbs/tes-thumb-3.png`)} alt=""/>
                                            </div>
                                            <div className="details">
                                                <p className="name">Abubokker Siddik</p>
                                                <span className="designation">Senior UIUX Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </SliderCom>
                                <button onClick={()=>testmonialRef.current.slickPrev()} type="button" className="slick-btn prev"><i className="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonialSection;