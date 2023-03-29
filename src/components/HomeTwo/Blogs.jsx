import React, {useEffect, useState} from 'react';
import blogsData from "../../data/Blogs.json";
import BlogCardStyleTwo from "../common/BlogCardStyleTwo";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        setBlogs(blogsData)
    }, []);
    return (
        <section className="blog-area-s2 s-padding">
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Our Latest News</span>
                    <h2 className="s-title">Learn More Our Blog Post</h2>
                </div>
                <div className="row">
                    {blogs && blogs.length>0 && blogs.slice(0,3).map((item)=>(
                        <div key={item.id} className="col-lg-4 col-md-6">
                            <BlogCardStyleTwo datas={item}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blogs;