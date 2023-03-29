import React, {useEffect, useState} from 'react';

function AboutMember() {
    const [sd, setSd] = useState("0%");
    const [wd, setWd] = useState("0%");
    const [design, setDesign] = useState("0%");
    const [support, setSupport] = useState("0%");
    const updateState=()=>{
        setSd("65%");
        setWd( "85%");
        setDesign("60%");
        setSupport("45%")
    }
    useEffect(() => {
        const rec = document.getElementById('member-about');
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
        <section id="member-about" className="member-about s-padding-b">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="member-about__desc">
                            <div className="s-title-wrap">
                                <span className="s-sub-title">My Professional Skill</span>
                                <h2 className="s-title">Personal Experience</h2>
                            </div>
                            <p className="desc">
                                There are many variations of passages of Lorem Ipsum avail
                                majority have suffered alteration in some form by injected as
                                randomised words which dont look even.
                            </p>
                            <p className="desc">
                                You need to be sure there isnt anything embarrassing hidden
                                idle of text. All the Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="member-about__skills">
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
                                        <div className="progress-bar__inner" style={{width:wd}}>
                                            <span className="shape"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="s-progress">
                                    <p className="p-title">
                                        <span className="p-left">Support & Security</span>
                                        <span className="p-right">75%</span>
                                    </p>
                                    <div
                                        data-progress="75"
                                        data-played="false"
                                        className="progress-bar"
                                    >
                                        <div className="progress-bar__inner" style={{width:support}}>
                                            <span className="shape"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMember;