import React from 'react';
import {Link} from "react-router-dom";
import SliderCom from "../helpers/SliderCom";


function MainSection() {
    const settings={
        dots: true,
        infinite: true,
        autoplay: true,
        prevArrow: '',
        nextArrow: '',
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="single-blog-detail s-padding">
            <div className="container">
                <div className="row">
                    <main className="col-lg-8">
                        <div className="single-blog-content">
                            <div className="feature-img">

                                <img src={require(`../../assets/images/thumbs/single-blog-img.png`)} alt=""/>
                            </div>
                            <ul className="blog-meta">
                                <li>
                                    <Link to="#"
                                    ><span className="icon"><i className="fa-solid fa-user"></i></span
                                    ><span className="text">By Admin</span></Link>
                                </li>
                                <li>
                                    <Link to="#"
                                    ><span className="icon"
                                    ><i className="fa-solid fa-calendar-days"></i></span
                                    ><span className="text">31 May 2022</span></Link>
                                </li>
                                <li>
                                    <Link to="#"
                                    ><span className="icon"
                                    ><i className="fa-solid fa-comment"></i></span
                                    ><span className="text">20 Comment</span></Link>
                                </li>
                            </ul>
                            <h1 className="post-title">
                                Ai robot using cyber security to protect information privacy
                            </h1>
                            <p className="desc">
                                There are many variations of passages of Lorem Ipsum available,
                                but the majority have suf ered alteration in some form, by
                                injected humour, or randomised words which dont look as even
                                slightly believable. If you are going to use a passage of Lorem
                                Ipsum, you need to be sure there isnt anything embarrassing
                                hidden in the middle of text.
                            </p>
                            <p className="desc">
                                Erators on the Internet tend to repeat predefined chunks as
                                necessary, making this the first true generator on the Internet.
                                It uses a dictionary of over 200 Latin words, combined with a
                                handful of model sentence structures
                            </p>
                            <div className="author-card">
                                <div className="thumb">
                                    <img src={require(`../../assets/images/thumbs/post-author.png`)} alt=""/>
                                </div>
                                <div className="content">
                                    <p>
                                        We can easily manage if we will only take, each days, the as
                                        burden to it. But the load will be too heavy for us if we
                                        carry yesterday’s burden a our over again today.
                                    </p>
                                    <div className="a-name-desig-wrap">
                                        <h5 className="a-name">Deniella Rhodes</h5>
                                        <p className="a-desig">CEO of Antech</p>
                                    </div>
                                </div>
                            </div>
                            <div className="post-gallery">
                                <div className="image-slider-s1">
                                    <SliderCom settings={settings}>
                                        <div className="item">
                                            <img
                                                src={require(`../../assets/images/thumbs/post-gallery-img1.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                src={require(`../../assets/images/thumbs/post-gallery-img2.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                src={require(`../../assets/images/thumbs/post-gallery-img1.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="item">
                                            <img
                                                src={require(`../../assets/images/thumbs/post-gallery-img2.png`)}
                                                alt=""
                                            />
                                        </div>
                                    </SliderCom>
                                </div>
                            </div>
                            <h2 className="title-2">Digital technology on the cutting edge</h2>
                            <div className="desc">
                                Sure there isnt anything embarrassing hidden in the middle of
                                text. All the Lorem Ipsum gen erators on the Internet tend to
                                repeat predefined chunks as necessary, making this the first
                                true generator on the Internet. It uses a dictionary of over 200
                                Latin words, combined with a handful of model sentence
                                structures
                            </div>
                            <ul className="i-list">
                                <li>
                                    <span className="icon"><i className="fa-solid fa-check"></i></span>
                                    <span className="text"
                                    >It is a long established fact that a reader will be</span
                                    >
                                </li>
                                <li>
                                    <span className="icon"><i className="fa-solid fa-check"></i></span>
                                    <span className="text"
                                    >There are many variations of passages</span
                                    >
                                </li>
                                <li>
                                    <span className="icon"><i className="fa-solid fa-check"></i></span>
                                    <span className="text">All the Lorem Ipsum generators</span>
                                </li>
                                <li>
                                    <span className="icon"><i className="fa-solid fa-check"></i></span>
                                    <span className="text"
                                    >Asearch for lorem ipsum will uncover many</span
                                    >
                                </li>
                            </ul>
                            <div className="s-post-tag-share-wrap">
                                <div className="p-tags">
                                    <h3 className="title">Tag:</h3>
                                    <ul className="tags">
                                        <li><Link to="#">#Technology</Link></li>
                                        <li><Link to="#">#Agency</Link></li>
                                        <li><Link to="#">#Data</Link></li>
                                    </ul>
                                </div>
                                <div className="p-share">
                                    <h3 className="title">Share:</h3>
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
                        </div>
                        <div className="more-post-section">
                            <div className="post prev">
                                <div className="thumb">
                                    <img
                                        src={require(`../../assets/images/blog-post/more-post-thumb-1.png`)}
                                        alt=""
                                    />
                                </div>
                                <div className="content">
                                    <p>Cupidatat non proident sunt culpa officia</p>
                                    <Link to="#"><i className="fa-solid fa-arrow-left"></i>Previous</Link>
                                </div>
                            </div>
                            <div className="post next">
                                <div className="thumb">
                                    <img
                                        src={require(`../../assets/images/blog-post/more-post-thumb-2.png`)}
                                        alt=""
                                    />
                                </div>
                                <div className="content">
                                    <p>The start-up ultimate uuide to make your wordpress</p>
                                    <Link to="#">Next<i className="fa-solid fa-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="comments-section">
                            <h2 className="title">03 Comments</h2>
                            <div className="all-comments">
                                <div className="s-comment">
                                    <div className="s-comment-inner">
                                        <div className="thumb">
                                            <img
                                                src={require(`../../assets/images/thumbs/comment-thumb1.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="content">
                                            <h4 className="name">Michel Holder</h4>
                                            <p className="c-massege">
                                                Sure there isnt anything embarrassing hidden in the
                                                middles of text. All erators on the Internet tend to
                                                repeat predefined chunks
                                            </p>
                                            <span className="c-date">June 1, 2022 at 11:27 am</span>
                                            <Link to="#" className="r-btn"
                                            ><i className="fa-solid fa-reply"></i
                                            ></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="s-comment">
                                    <div className="s-comment-inner">
                                        <div className="thumb">
                                            <img
                                                src={require(`../../assets/images/thumbs/comment-thumb2.png`)}
                                                alt=""
                                            />
                                        </div>
                                        <div className="content">
                                            <h4 className="name">Mouna Sthesia</h4>
                                            <p className="c-massege">
                                                Sure there isnt anything embarrassing hidden in the
                                                middles of text. All erators on the Internet tend to
                                                repeat predefined chunks
                                            </p>
                                            <span className="c-date">June 1, 2022 at 11:27 am</span>
                                            <Link to="#" className="r-btn"
                                            ><i className="fa-solid fa-reply"></i
                                            ></Link>
                                        </div>
                                    </div>
                                    <div className="s-comment">
                                        <div className="s-comment-inner">
                                            <div className="thumb">
                                                <img
                                                    src={require(`../../assets/images/thumbs/comment-thumb3.png`)}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="content">
                                                <h4 className="name">Paul Molive</h4>
                                                <p className="c-massege">
                                                    Sure there isnt anything embarrassing hidden in the
                                                    middles of text. All erators on the Internet tend to
                                                    repeat predefined chunks
                                                </p>
                                                <span className="c-date">June 1, 2022 at 11:27 am</span>
                                                <Link to="#" className="r-btn"
                                                ><i className="fa-solid fa-reply"></i
                                                ></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment-form">
                            <h2>Leave A Comment</h2>
                            <p>
                                Your email address will not be published. Required fields are
                                marked *
                            </p>
                            <form action="#">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        required
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    id=""
                                    cols="30"
                                    rows="10"
                                    placeholder="Message Here"
                                    required
                                ></textarea>
                                <button type="submit">Submit Now</button>
                            </form>
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
                                                <Link to="#">Thoughtful man using laptop pondering </Link>
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
                                                <Link to="#">Young man with a lap top in a business</Link>
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
            </div>
        </section>
    );
}

export default MainSection;