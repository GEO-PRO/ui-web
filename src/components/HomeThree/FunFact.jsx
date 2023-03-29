import React, {useState} from 'react';

function FunFact() {
    const [videoModal, setVideoModal] = useState(false);
    return (
        <section className="funfact-area-s1">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {
                            videoModal && (
                                <div className={`video-popup ${videoModal?'active':''}`} id="videoPopup1">
                                    <div className="video-popup-inner">
                                        <button onClick={()=>setVideoModal(!videoModal)} type="button" className="cls-btn">
                                            <i className="fa-solid fa-xmark"></i>
                                        </button>
                                        <iframe type="text" value="5Y6iQz3vuM8" frameBorder="0" allowFullScreen="1"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                title="YouTube video player" width="1140" height="641"
                                                src="https://www.youtube.com/embed/5Y6iQz3vuM8?playsinline=1&amp;autoplay=1&amp;enablejsapi=1&amp;widgetid=1"
                                                id="widget2"></iframe>
                                    </div>
                                </div>
                            )
                        }

                        <div className="video-thumb">
                            <img src={require(`../../assets/images/thumbs/video-sec-thumb.webp`)} alt=""/>
                            <a onClick={()=>setVideoModal(!videoModal)}
                                href="#nolink"
                                className="v-play-btn"
                                data-video-id="videoPopup1"
                            >
                                <i className="fa-solid fa-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="funfact-s1">
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/projects.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4>
                  <span className="counter-item">2547</span
                  ><span className="c-sfix">+</span>
                                </h4>
                                <p>Project Done</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="funfact-s1">
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/years.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4>
                  <span className="counter-item">12</span
                  ><span className="c-sfix">+</span>
                                </h4>
                                <p>Glorious Years</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="funfact-s1">
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/clients.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4>
                  <span className="counter-item">8255</span
                  ><span className="c-sfix">+</span>
                                </h4>
                                <p>Active Clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="funfact-s1">
                            <div className="icon">
                                <img src={require(`../../assets/images/feature-icons/win.svg`).default} alt=""/>
                            </div>
                            <div className="content">
                                <h4>
                  <span className="counter-item">895</span
                  ><span className="c-sfix">+</span>
                                </h4>
                                <p>Project Win</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FunFact;