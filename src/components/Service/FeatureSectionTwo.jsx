import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../../service/config';
import NotFound from '../common/NotFound';
import { Link } from 'react-router-dom';

function FeatureSectionTwo() {
    const [titleDoc, setTitleDoc] = useState([])

    const iconTitle = [
        <img src={require(`../../assets/images/feature-icons/rocket-icon.png`)} alt="" />,
        <img src={require(`../../assets/images/feature-icons/time-saving-icon.png`)} alt="" />,
        <img src={require(`../../assets/images/feature-icons/management-icon.png`)} alt="" />,
        <img src={require(`../../assets/images/feature-icons/collaborative-icon.png`)} alt="" />,
        <img src={require(`../../assets/images/feature-icons/cloud-icon.svg`).default} alt="" />,
        <img src={require(`../../assets/images/feature-icons/cyber-security.png`).default} alt="" />,
        <img src={require(`../../assets/images/feature-icons/web-development.png`)} alt="" />,
        <img src={require(`../../assets/images/feature-icons/pencil-icon.svg`).default} alt="" />,
        <img src={require(`../../assets/images/feature-icons/analytix.png`)} alt="" />
    ]

    const renderTitleDoc = () => {
        return titleDoc ? titleDoc.map((title, index) => {
            return <div className="col-xl-4 col-md-6 text-center">
                <div
                    className="feature-s2 wow animate__animated animate__fadeInLeft"
                    data-wow-duration="1.5s"
                    data-wow-delay=".5s"
                >
                    <div className="icon">
                        {iconTitle[index]}
                    </div>
                    <Link to={`title/${title.id}`} className=''>
                        <div className="content">
                            <h4 className='c-text-overflow-1'>{title.name}</h4>
                            <p className='c-text-overflow-1'>
                                Tài liệu về {title.name}
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        }) : <NotFound />
    }

    useEffect(() => {
        axios.get(`${API_URL}/title-doc/get-all`).then((result) => {
            setTitleDoc(result.data);
        }).catch((err) => {
            console.log('err :>> ', err);
        });
    }, [])


    return (
        <section className="feature-area-s1 s-padding-t" style={{ padding: "0px" }}>
            <div className="container">
                <div className="s-title-wrap">
                </div>
                <div className="row">
                    {renderTitleDoc()}
                    <div className="col-xl-4 col-md-6 text-center">
                        <div
                            className="feature-s2 wow animate__animated animate__fadeInLeft"
                            data-wow-duration="1.5s"
                            data-wow-delay=".5s"
                        >
                            <div className="icon">
                                {iconTitle[7]}
                            </div>
                            <Link to={`exams`} className=''>
                                <div className="content">
                                    <h4 className='c-text-overflow-1'>6. Đề</h4>
                                    <p className='c-text-overflow-1'>
                                        Tập hợp các bộ đề
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureSectionTwo;