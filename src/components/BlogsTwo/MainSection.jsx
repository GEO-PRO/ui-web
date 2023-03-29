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
        <section className="blog-main s-padding">
            <div className="container">
                <div className="row">
                    <main className="col-lg-8">
                        <div className="row b-post-gallery-s2">
                            {blogs && blogs.length>0 && blogs.map((item)=>(
                                <div key={item.id} className="col-lg-6 col-md-6">
                                    <BlogCardStyleOne datas={item}/>
                                </div>
                            ))}
                        </div>
                    </main>
                    <aside className="col-lg-4">
                        <div className="blog-sidebar-s1">
                            <div className="featured-author-widget widget">
                                <div className="thumb">
                                    <img src={require(`../../assets/images/thumbs/blog-author.png`)} alt=""/>
                                </div>
                                <div className="content">
                                    <h3 className="name">Amada Smith</h3>
                                    <p>
                                        There are many variations of pass ages of Lorem Ipsum
                                        available as but the majority
                                    </p>
                                    <ul className="social-icons-s1">
                                        <li>
                                            <Link to="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-facebook-f"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-twitter"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-linkedin-in"></i
                                            ></Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.facebook.com/QuomodoSoft"
                                            ><i className="fa-brands fa-youtube"></i
                                            ></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="search-widget widget">
                                <h3 className="w-title">Search</h3>
                                <div className="search-container">
                                    <input type="text" placeholder="Search"/>
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
                            <div className="blog-catagories-widget widget">
                                <h3 className="w-title">Categories</h3>
                                <ul className="catagory-list">
                                    <li>
                                        <Link to="#"
                                        ><span className="name">Development</span
                                        ><span className="count">(6)</span></Link>
                                    </li>
                                    <li>
                                        <Link to="#"
                                        ><span className="name">Guide</span
                                        ><span className="count">(9)</span></Link>
                                    </li>
                                    <li>
                                        <Link to="#"
                                        ><span className="name">Inspiration</span
                                        ><span className="count">(4)</span></Link>
                                    </li>
                                    <li>
                                        <Link to="#"
                                        ><span className="name">Latest News</span
                                        ><span className="count">(7)</span></Link>
                                    </li>
                                    <li>
                                        <Link to="#"
                                        ><span className="name">Revenue</span
                                        ><span className="count">(3)</span></Link>
                                    </li>
                                    <li>
                                        <Link to="#"
                                        ><span className="name">Start Up</span
                                        ><span className="count">(2)</span></Link>
                                    </li>
                                    <li>
                                        <Link to="#"
                                        ><span className="name">Technology</span
                                        ><span className="count">(5)</span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="popular-tags-widget widget">
                                <h3 className="w-title">Popular Tags</h3>
                                <div className="tags-container">
                                    <Link to="#" className="tag">Agency</Link>
                                    <Link to="#" className="tag">Creative</Link>
                                    <Link to="#" className="tag">Data</Link>
                                    <Link to="#" className="tag">Technology</Link>
                                    <Link to="#" className="tag">Development</Link>
                                    <Link to="#" className="tag">Business</Link>
                                    <Link to="#" className="tag">Idea</Link>
                                    <Link to="#" className="tag">Generic</Link>
                                </div>
                            </div>
                            <div className="subs-newsletter-widget widget">
                                <h3 className="w-title">Our Newsletter</h3>
                                <p>Follow our newsletter to stay updated about us.</p>
                                <form action="#">
                                    <div className="form-container">
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder="Enter Your Email Address"
                                        />
                                        <button type="submit">Subscribe</button>
                                    </div>
                                </form>
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