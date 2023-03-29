import React from 'react';

function Hero() {
    return (
        <section className="hero-s3">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-7 col-xl-6 col-lg-6 hero-s3__content">
                        <h2 className="content-sh">IT services Agency</h2>
                        <h1 className="content-h">Awesome IT Services for Your Business</h1>
                        <p className="content-d">
                            There are many variations of passage of Lorem Ipso available our
                            but the majority have suffered alteration
                        </p>
                        <div className="btn-group">
                            <a href="/service-detail" className="btn btn-s3">Learn More</a>

                            <div className="video-popup" id="videoPopup1">
                                <div className="video-popup-inner">
                                    <button type="button" className="cls-btn">
                                        <i className="fa-solid fa-xmark"></i>
                                    </button>
                                    <input type="text"/>
                                </div>
                            </div>
                            <button type="button"
                                className="play-btn-sm v-play-btn"
                                data-video-id="videoPopup1"
                            >
                                <i className="fa-solid fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-6 hero-s3__thumb d-lg-none">
                        <div className="img">
                            <img src={require(`../../assets/images/hero-img/3.webp`)} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src={require(`../../assets/images/backgrounds/hero-3-shape.png`).default} alt=""/>
            </div>
        </section>
    );
}

export default Hero;