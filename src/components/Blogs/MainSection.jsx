import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import BlogCardStyleOne from "../common/BlogCardStyleOne";
import blogsData from "../../data/Blogs.json";

function MainSection() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        setBlogs(blogsData)
    }, []);
    return (
        <section className="b-post-gallery-s1 s-padding">
            <div className="container">
                <div className="row">
                    {blogs && blogs.length>0 && blogs.map((item)=>(
                        <div key={item.id} className="col-lg-4 col-md-6">
                            <BlogCardStyleOne datas={item}/>
                        </div>
                    ))}
                </div>
                <div className="b-pagination">
                    <ul className="pagination">
                        <li className="active"><Link to="#">01</Link></li>
                        <li><Link to="#">02</Link></li>
                        <li><Link to="#">03</Link></li>
                        <li><Link to="#">04</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default MainSection;