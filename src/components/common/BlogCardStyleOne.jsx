import React from 'react';
import { Link } from "react-router-dom";
import { BASE_URL } from '../../service/config';
import { convertStrArr } from '../BlogsTwo/blogsService';

function BlogCardStyleOne({ datas, className }) {
    // console.log('object :>> ', convertStrArr(datas.files_name));
    return (
        <div className={`${className || ''} b-post-s1 mb-0`}>
            <div className="thumb" style={{ width: "auto", height: "200px" }}>
                <img src={`${BASE_URL}/images/${convertStrArr(datas.files_name)[0]}`} alt="" />
            </div>
            <div className="content">
                <ul className="meta">
                    <li>
                        <span className="icon"><i className="fa-regular fa-user"></i></span>
                        <span className="text">By Admin</span>
                    </li>
                    <li>
                        <span className="icon"
                        ><i className="fa-regular fa-comment"></i
                        ></span>
                        <span className="text">{datas.comments} Comments</span>
                    </li>
                </ul>
                <h4 className="title line-clamp-2 c-text-overflow">
                    <Link to="/blog-details">{datas.title}</Link>
                </h4>
                <span className="text c-text-overflow">{datas.summary}</span>
                <div className="btm">
                    <Link className="readmore" to="/blog-details"
                    >Learn More <i className="fa-solid fa-arrow-right"></i
                    ></Link>
                </div>
            </div>
        </div>
    );
}

export default BlogCardStyleOne;