import React, {useEffect, useState} from 'react';
import BlogCardStyleOne from "../common/BlogCardStyleOne";
import blogsData from "../../data/Blogs.json";

function BlogSection() {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        setBlogs(blogsData)
    }, []);

    return (
        <section className="blog-area-s1 s-padding">
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Our Latest News</span>
                    <h2 className="s-title">Learn More Our Blog Post</h2>
                </div>
                <div className="row">
                    {blogs && blogs.length>0 && blogs.slice(0,3).map((item)=>(
                        <div key={item.id} className="col-lg-4 col-md-6">
                            <BlogCardStyleOne datas={item}/>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default BlogSection;