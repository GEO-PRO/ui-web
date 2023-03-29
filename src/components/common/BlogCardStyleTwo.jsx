import React from 'react';
import {Link} from "react-router-dom";

function BlogCardStyleTwo({datas, className}) {
    return (
        <div className={`${className||""} b-post-s2`}>
            <div className="thumb">
                <img src={require(`../../assets/images/blog-post/${datas.image}`)} alt=""/>
                <div className="date">
                    <p>26 May 2022</p>
                </div>
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
                <h4 className="title line-clamp-2" style={{textTransform:'capitalize'}}>
                    <Link to="/blog-details">{datas.title}</Link>
                </h4>
                <div className="btm">
                    <Link className="readmore" to="/blog-details"
                    >Learn More <i className="fa-solid fa-arrow-right"></i
                    ></Link>
                </div>
            </div>
        </div>
    );
}

export default BlogCardStyleTwo;