import React from 'react';

function Sponser({className}) {
    return (
        <div className={`sponsers-slider-s1 s-padding ${className||""}`}>
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Our Partners</span>
                    <h2 className="s-title">We're Working With</h2>
                </div>
                <div className="row">
                    <div className="sponsers-container">
                        <div className="s-sponser">
                            <img src={require(`../../assets/images/brand-icons/brand-icon-1.svg`).default} alt=""/>
                        </div>
                        <div className="s-sponser">
                            <img src={require(`../../assets/images/brand-icons/brand-icon-2.svg`).default} alt=""/>
                        </div>
                        <div className="s-sponser">
                            <img src={require(`../../assets/images/brand-icons/brand-icon-3.svg`).default} alt=""/>
                        </div>
                        <div className="s-sponser">
                            <img src={require(`../../assets/images/brand-icons/brand-icon-4.svg`).default} alt=""/>
                        </div>
                        <div className="s-sponser">
                            <img src={require(`../../assets/images/brand-icons/brand-icon-5.svg`).default} alt=""/>
                        </div>
                        <div className="s-sponser">
                            <img src={require(`../../assets/images/brand-icons/brand-icon-6.svg`).default} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponser;