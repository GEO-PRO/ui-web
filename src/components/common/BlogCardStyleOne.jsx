import React from 'react';
import {Link} from "react-router-dom";

function BlogCardStyleOne({datas,className}) {
    return (
        <div className={`${className ||''} b-post-s1`}>
            <div className="thumb">
                <img src={require(`../../assets/images/blog-post/${datas.image}`)} alt=""/>
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
                <h4 className="title line-clamp-2">
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

export default BlogCardStyleOne;