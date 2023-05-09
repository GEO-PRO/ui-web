import React, { useEffect, useState } from 'react';
import blogsData from "../../data/Blogs.json";
import BlogCardStyleOne from "../BlogsTwo/BlogCardStyleOne";

function BlogSection() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {

        setBlogs(blogsData)
    }, []);

    return (
        <section className="blog-area-s1 s-padding">
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Tin tức</span>
                    <h2 className="s-title">Địa lý quanh ta</h2>
                </div>
                <div className="row">
                    {blogs && blogs.length > 0 && blogs.slice(0, 3).map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6">
                            <BlogCardStyleOne datas={item} />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default BlogSection;