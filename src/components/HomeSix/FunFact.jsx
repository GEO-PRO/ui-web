import React from 'react';
import CounterUp from "../helpers/CounterUp";

function FunFact() {
    return (
        <section id="funfact-area-s2" className="funfact-area-s2">
            <div className="container">
                <div className="funfact-area-s6-container funfact-area-s2-container">
                    <div className="funfact-s4 funfact-s2">
                        <div className="icon">
                            <img src={require(`../../assets/images/feature-icons/projects2.svg`).default} alt=""/>
                        </div>
                        <div className="content">
                            <h4>
                <span className="number counter-item">  <CounterUp sectionId="funfact-area-s2" endValue={2547}/></span
                ><span className="s-fix">+</span>
                            </h4>
                            <p>Project Done</p>
                        </div>
                    </div>
                    <div className="funfact-s4 funfact-s2">
                        <div className="icon">
                            <img src={require(`../../assets/images/feature-icons/clients2.svg`).default} alt=""/>
                        </div>
                        <div className="content">
                            <h4>
                <span className="number counter-item"><CounterUp sectionId="funfact-area-s2" endValue={8255}/></span
                ><span className="s-fix">+</span>
                            </h4>
                            <p>Active Clients</p>
                        </div>
                    </div>
                    <div className="funfact-s4 funfact-s2">
                        <div className="icon">
                            <img src={require(`../../assets/images/feature-icons/years2.svg`).default} alt=""/>
                        </div>
                        <div className="content">
                            <h4>
                <span className="number counter-item"><CounterUp sectionId="funfact-area-s2" endValue={12}/></span
                ><span className="s-fix">+</span>
                            </h4>
                            <p>Glorious Years</p>
                        </div>
                    </div>
                    <div className="funfact-s4 funfact-s2">
                        <div className="icon">
                            <img src={require(`../../assets/images/feature-icons/win2.svg`).default} alt=""/>
                        </div>
                        <div className="content">
                            <h4>
                <span className="number counter-item"><CounterUp sectionId="funfact-area-s2" endValue={895}/></span
                ><span className="s-fix">+</span>
                            </h4>
                            <p>Project Win</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FunFact;