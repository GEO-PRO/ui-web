import React from 'react';

function Hero() {
    return (
        <section className="hero-s6">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 hero-s4__content">
                        <h2 className="content-sh">For Millions of Users</h2>
                        <h1 className="content-h">Powerful Digital IT solution Company</h1>
                        <p className="content-d">
                            There are many variations of passage of Lorem Ipso available
                            but the majority have suffered alteration
                        </p>
                        <a href="/service" className="btn btn-s6">GET STARTED</a>
                    </div>
                    <div className="col-lg-5 hero-s3__thumb d-lg-none">
                        <div className="img">
                            <img src={require(`../../assets/images/hero-img/6.svg`).default} alt="" className="world-map"/>
                            <img src={require(`../../assets/images/hero-img/6.png`)} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;