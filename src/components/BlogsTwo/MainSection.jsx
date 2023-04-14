import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import BlogCardStyleOne from "../common/BlogCardStyleOne";
import blogsData from "../../data/Blogs.json";
import { API_URL, BASE_URL } from '../../service/config';
import axios from 'axios';

function MainSection() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // setBlogs(blogsData)

        axios({
            url: `${API_URL}/blogs/filter`,
            method: 'POST',
            data: []
        }).then((result) => {
            setBlogs(result.data.result)
            console.log(result.data)
        }).catch((err) => {
            console.log('err :>> ', err);
        });
    }, []);
    return (
        <section className="blog-main s-padding">
            <div className="container">
                <div className="row">
                    <main className="col-lg-8">
                        <div className="row b-post-gallery-s2">
                            {blogs && blogs.length > 0 && blogs.map((item) => (
                                <div key={item.id} className="col-lg-6 col-md-6">
                                    <BlogCardStyleOne datas={item} />
                                </div>
                            ))}
                        </div>
                    </main>
                    <aside className="col-lg-4">
                        <div className="blog-sidebar-s1">
                            <div className="search-widget widget">
                                <h3 className="w-title">Search</h3>
                                <div className="search-container">
                                    <input type="text" placeholder="Search" />
                                    <button type="submit">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="latest-posts-widget widget">
                                <h3 className="w-title">Latest Post</h3>
                                <div className="recent-posts">
                                    <div className="rp-single">
                                        <div className="thumb">
                                            <img
                                                src={require(`../../assets/images/blog-post/post-thumb-1.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link to="/blog-details"
                                                >Thoughtful man using laptop pondering
                                                </Link>
                                            </h4>
                                            <span
                                            ><i className="fa-solid fa-calendar-days"></i>23 May
                                                2022</span
                                            >
                                        </div>
                                    </div>
                                    <div className="rp-single">
                                        <div className="thumb">
                                            <img
                                                src={require(`../../assets/images/blog-post/post-thumb-2.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link to="#">Young man with a lap top in a business</Link>
                                            </h4>
                                            <span
                                            ><i className="fa-solid fa-calendar-days"></i>23 May
                                                2022</span
                                            >
                                        </div>
                                    </div>
                                    <div className="rp-single">
                                        <div className="thumb">
                                            <img
                                                src={require(`../../assets/images/blog-post/post-thumb-2.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="content">
                                            <h4>
                                                <Link to="/blog-details"
                                                >Young man with a lap top in a business</Link
                                                >
                                            </h4>
                                            <span
                                            ><i className="fa-solid fa-calendar-days"></i>23 May
                                                2022</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="popular-tags-widget widget">
                                <h3 className="w-title">Popular Tags</h3>
                                <div className="tags-container">
                                    <button className="tag tag-linear">Tất cả</button>
                                    <button className="tag">Tất cả</button>
                                </div>
                            </div>
                        </div>
                    </aside>
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