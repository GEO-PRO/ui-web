import React from 'react';
import SliderCom from "../helpers/SliderCom";

function FeatureSectionSlider() {
    const settings = {
        dots: true,
        arrows: true,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <section className="features-slider-s3 s-padding">
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Technology solutions</span>
                    <h2 className="s-title">We Provide IT & Business Solutions</h2>
                </div>
                <div className="row feature-s3-inner">
                    <SliderCom settings={settings}>
                        <div className="col-xl-4">
                            <div className="feature-s5">
                                <div className="thumb">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/0xfPp6U2tUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                </div>
                                <div className="content c-text-overflow-2">
                                    <h3><a href="https://www.youtube.com/embed/0xfPp6U2tUQ" target='_blank'>Giải chi tiết Đề thi HSG tỉnh Quảng Nam môn Địa lí 2022 - 2023, ôn thi Học sinh giỏi Địa lí</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="feature-s5">
                                <div className="thumb">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/0xfPp6U2tUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                </div>
                                <div className="content c-text-overflow-2">
                                    <h3><a href="https://www.youtube.com/embed/0xfPp6U2tUQ" target='_blank'>Giải chi tiết Đề thi HSG tỉnh Quảng Nam môn Địa lí 2022 - 2023, ôn thi Học sinh giỏi Địa lí</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="feature-s5">
                                <div className="thumb">
                                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/0xfPp6U2tUQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                                </div>
                                <div className="content c-text-overflow-2">
                                    <h3><a href="https://www.youtube.com/embed/0xfPp6U2tUQ" target='_blank'>Giải chi tiết Đề thi HSG tỉnh Quảng Nam môn Địa lí 2022 - 2023, ôn thi Học sinh giỏi Địa lí</a></h3>
                                </div>
                            </div>
                        </div>
                    </SliderCom>
                </div>
            </div>
        </section>
    );
}

export default FeatureSectionSlider;