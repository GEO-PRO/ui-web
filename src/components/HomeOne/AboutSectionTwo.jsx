import React, {useEffect, useState} from 'react';

function AboutSectionTwo() {
    const [sd, setSd] = useState("0%");
    const [wd, setWd] = useState("0%");
    const [design, setDesign] = useState("0%");
    const updateState=()=>{
        setSd("65%");
        setWd( "85%");
        setDesign("60%");
    }
    useEffect(() => {
        const rec = document.getElementById('about-s5');
        if (rec) {
            const currentPosition = rec.offsetTop - document.body.scrollTop;
            if (currentPosition < window.innerHeight) {
                updateState();
            } else {
                window.addEventListener("scroll", () => {
                    const currentScrollPosition =
                        window.pageYOffset || document.documentElement.scrollTop;
                    if (currentScrollPosition + 500 > currentPosition) {
                        updateState();
                    }
                });
            }
        }
    });
    return (
        <div id="about-s5" className="about-s5 s-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-6">
                        <div className="about-s5__thumb">
                            <div className="p-left">
                                <img
                                    src={require(`../../assets/images/thumbs/about5-t1.png`)}
                                    alt=""
                                    className="img1"
                                />
                                <img
                                    src={require(`../../assets/images/thumbs/about5-t2.png`)}
                                    alt=""
                                    className="img2"
                                />
                            </div>
                            <div className="p-right">
                                <img src={require(`../../assets/images/thumbs/about5-t3.png`)} alt=""/>
                            </div>
                            <div className="shape">
                                <img src={require(`../../assets/images/backgrounds/about-4-shape.png`)} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6">
                        <div className="about-s5__content">
                            <span className="s-sub-title">Our Skill</span>
                            <h2 className="s-title">
                                We Are Increasing Business Success With Technology
                            </h2>
                            <div className="progress-s1">
                                <div className="s-progress">
                                    <p className="p-title">
                                        <span className="p-left">Software Development</span>
                                        <span className="p-right">65%</span>
                                    </p>
                                    <div
                                        data-progress="65"
                                        data-played="false"
                                        className="progress-bar"
                                    >
                                        <div className="progress-bar__inner" style={{width:sd}}>
                                            <span className="shape"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="s-progress">
                                    <p className="p-title">
                                        <span className="p-left">UI / UX Design</span>
                                        <span className="p-right">60%</span>
                                    </p>
                                    <div
                                        data-progress="60"
                                        data-played="false"
                                        className="progress-bar"
                                    >
                                        <div className="progress-bar__inner" style={{width:design}}>
                                            <span className="shape"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="s-progress">
                                    <p className="p-title">
                                        <span className="p-left">Web Development</span>
                                        <span className="p-right">85%</span>
                                    </p>
                                    <div
                                        data-progress="85"
                                        data-played="false"
                                        className="progress-bar"
                                    >
                                        <div className="progress-bar__inner" style={{width:wd}}>
                                            <span className="shape"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSectionTwo;