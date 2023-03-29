import React from 'react';
import {Link} from "react-router-dom";

function ServiceSidebar() {
    return (
        <>
            <div className="service-c-list">
                <h3 className="title">Category</h3>
                <ul className="c-list">
                    <li>
                        <Link to="#">
                    <span className="icon"
                    ><img src={require(`../../assets/images/feature-icons/cloud.svg`).default} alt=""
                    /></span>
                            <span className="text">Cloud Solutions</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                    <span className="icon"
                    ><img
                        src={require(`../../assets/images/feature-icons/network.svg`).default}
                        alt=""
                    /></span>
                            <span className="text">Cyber Security</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                    <span className="icon"
                    ><img
                        src={require(`../../assets/images/feature-icons/data-recovery.svg`).default}
                        alt=""
                    /></span>
                            <span className="text">Data Recovery</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                    <span className="icon"
                    ><img src={require(`../../assets/images/feature-icons/code.svg`).default} alt=""
                    /></span>
                            <span className="text">Web Development</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                    <span className="icon"
                    ><img src={require(`../../assets/images/feature-icons/pencil.svg`).default} alt=""
                    /></span>
                            <span className="text">Product & Design</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                    <span className="icon"
                    ><img src={require(`../../assets/images/feature-icons/search.svg`).default} alt=""
                    /></span>
                            <span className="text">Analytic Solutions</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="service-c-list">
                <h3 className="title">Download</h3>
                <ul className="c-list download">
                    <li>
                        <Link to="#">
                    <span className="icon"
                    ><img src={require(`../../assets/images/feature-icons/pdf.svg`).default} alt=""
                    /></span>
                            <span className="text">Download PDF</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default ServiceSidebar;