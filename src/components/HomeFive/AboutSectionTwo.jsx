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
        const rec = document.getElementById('skill-section');
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
        <div id="skill-section" className="skill-section about-s5 s-padding">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-6">
                        <div className="about-s12__content about-s5__content">
                            <span className="s-sub-title">Our Skill</span>
                            <h2 className="s-title">
                                We Are Increasing Business Success With Technology
                            </h2>
                            <div className="progress-s2 progress-s1">
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
                                        <div className="progress-bar__inner"  style={{width:sd}}>
                                            <span className="shape"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="s-progress">
                                    <p className="p-title">
                                        <span className="p-left">UL / UX Design</span>
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
                                        <div className="progress-bar__inner" style={{width:wd}} >
                                            <span className="shape"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-s12__thumb about-s5__thumb">
                            <img
                                src={require(`../../assets/images/thumbs/skill-2.png`)}
                                alt="skill"
                                className="skill-2"
                            />
                            <img
                                src={require(`../../assets/images/thumbs/skill-1.png`)}
                                alt="skill"
                                className="skill-1"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSectionTwo;