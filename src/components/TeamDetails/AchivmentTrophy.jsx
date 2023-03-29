import React from 'react';

function AchivmentTrophy() {
    return (
        <section className="member-achievement s-padding-b">
            <div className="container">
                <div className="row">
                    <div className="member-achievement__container">
                        <div className="box">
                            <img src={require(`../../assets/images/feature-icons/trophy-icon-1.svg`).default} alt=""/>
                        </div>
                        <div className="box">
                            <img src={require(`../../assets/images/feature-icons/trophy-icon-2.svg`).default} alt=""/>
                        </div>
                        <div className="box">
                            <img src={require(`../../assets/images/feature-icons/trophy-icon-3.svg`).default} alt=""/>
                        </div>
                        <div className="box">
                            <img src={require(`../../assets/images/feature-icons/trophy-icon-4.svg`).default} alt=""/>
                        </div>
                        <div className="box">
                            <img src={require(`../../assets/images/feature-icons/trophy-icon-5.svg`).default} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AchivmentTrophy;