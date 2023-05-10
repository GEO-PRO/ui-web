import React from 'react';
import Lottie from 'react-lottie';
import university from "./university.json"

function Hero() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: university,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
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
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-6 hero-s3__thumb d-lg-none">
                        <div className="img">
                            <Lottie options={defaultOptions} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src={require(`../../assets/images/backgrounds/hero-3-shape.png`).default} alt="" />
            </div>
        </section>
    );
}

export default Hero;