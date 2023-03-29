import React, {useState} from 'react';

function AboutSectionTwo() {
    const [tab, setTab] = useState("mfg");
    return (
        <section className="about-s3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-s3__content">
                            <span className="s-sub-title">Why Choose Us</span>
                            <h2 className="s-title">Examples Of Information Technology</h2>
                            <div className="tab tab-s1">
                                <div className="tab-links">
                                    <button type="button" onClick={()=>setTab('mfg')} className={`tab-btn ${tab==='mfg'?'active':''}`} data-tab="insurance">
                                        Manufacturing
                                    </button>
                                    <button type="button" onClick={()=>setTab('insrnce')}  className={`tab-btn ${tab==='insrnce'?'active':''}`} data-tab="manufacture">
                                        Insurance
                                    </button>
                                    <button type="button" onClick={()=>setTab('care')}  className={`tab-btn ${tab==='care'?'active':''}`} data-tab="health">Health Care</button>
                                </div>
                                <div className="tab-contents">
                                    <div className={`tab-pane ${tab==='mfg'?'active':''}`} id="insurance">
                                        <div className="tab-p-inner">
                                            <p>
                                                There are many variations of passages of Lorem Ipsum
                                                available but the majority have suffered alteration in
                                                some form, by injecte humour, or randomised words which
                                            </p>
                                            <div className="list-b">
                                                <ul className="i-list">
                                                    <li>
                            <span className="icon"
                            ><i className="fa-solid fa-check"></i
                            ></span>
                                                        <span className="text">Business improvement</span>
                                                    </li>
                                                    <li>
                            <span className="icon"
                            ><i className="fa-solid fa-check"></i
                            ></span>
                                                        <span className="text">Network Administration</span>
                                                    </li>
                                                </ul>
                                                <ul className="i-list">
                                                    <li>
                            <span className="icon"
                            ><i className="fa-solid fa-check"></i
                            ></span>
                                                        <span className="text">Business improvement</span>
                                                    </li>
                                                    <li>
                            <span className="icon"
                            ><i className="fa-solid fa-check"></i
                            ></span>
                                                        <span className="text">Network Administration</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className={`tab-pane ${tab==='insrnce'?'active':''}`} id="manufacture">
                                        <div className="tab-p-inner">
                                            <p>
                                                There are many variations of passages of Lorem Ipsum
                                                available but the majority have suffered alteration in
                                                some form, by injecte humour, or randomised words which
                                            </p>
                                            <div className="list-b">
                                                <ul className="i-list">
                                                    <li>
                            <span className="icon"
                            ><i className="fa-solid fa-check"></i
                            ></span>
                                                        <span className="text">Business improvement</span>
                                                    </li>
                                                    <li>
                            <span className="icon"
                            ><i className="fa-solid fa-check"></i
                            ></span>
                                                        <span className="text">Network Administration</span>
                                                    </li>
                                                </ul>
                                                <ul className="i-list">
                                                    <li>
                            <span className="icon"
                            ><i className="fa-solid fa-check"></i
                            ></span>
                                                        <span className="text">Business improvement</span>
                                                    </li>
                                                    <li>
                            <span className="icon"
                            ><i className="fa-solid fa-check"></i
                            ></span>
                                                        <span className="text">Network Administration</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`tab-pane ${tab==='care'?'active':''}`} id="health">
                                        <div className="tab-p-inner">
                                            <p>
                                                There are many variations of passages of Lorem Ipsum
                                                available but the majority have suffered alteration in
                                                some form, by injecte humour, or randomised words which
                                            </p>
                                            <div className="list-b">
                                                <ul className="i-list">
                                                    <li>
                            <span className="icon"
                            ><i className="fa-solid fa-check"></i
                            ></span>
                                                        <span className="text">Business improvement</span>
                                                    </li>
                                                    <li>
                            <span className="icon"
                            ><i className="fa-solid fa-check"></i
                            ></span>
                                                        <span className="text">Network Administration</span>
                                                    </li>
                                                </ul>
                                                <ul className="i-list">
                                                    <li>
                            <span className="icon"
                            ><i className="fa-solid fa-check"></i
                            ></span>
                                                        <span className="text">Business improvement</span>
                                                    </li>
                                                    <li>
                            <span className="icon"
                            ><i className="fa-solid fa-check"></i
                            ></span>
                                                        <span className="text">Network Administration</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-s2__thumb floating">
                            <img src={require(`../../assets/images/thumbs/home2-section-3.svg`).default} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape">
                <img src={require(`../../assets/images/backgrounds/glowing-shape.png`)} alt=""/>
            </div>
        </section>
    );
}

export default AboutSectionTwo;