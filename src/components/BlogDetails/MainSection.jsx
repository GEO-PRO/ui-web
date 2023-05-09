import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import SliderCom from "../helpers/SliderCom";
import axios from 'axios';
import { API_URL, BASE_URL, convertStrArr, convertTime, scrollTop } from '../../service/config';
import { Helmet } from 'react-helmet';


function MainSection() {
    const settings = {
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
    const { id } = useParams()
    const [detailBlog, setDetailBlog] = useState([])

    const renderThumb = () => {
        const thumbFile = convertStrArr(detailBlog.files_name)
        return (thumbFile.length > 2) ? (thumbFile.map(file => {
            return <div className="item">
                <img
                    src={`${BASE_URL}/images/${file}`}
                    alt=""
                />
            </div>
        })) : <></>

    }

    const renderTag = () => {
        const tag = convertStrArr(detailBlog.tag_name)
        return tag.map(item => {
            return <li><Link to="#">#{item}</Link></li>
        })
    }

    useEffect(() => {
        axios.get(`${API_URL}/blogs/${id}`).then((result) => {
            setDetailBlog(result.data[0]);
            scrollTop()
        }).catch((err) => {
            console.log('err :>> ', err);
        });
    }, [])

    return (
        <section className="single-blog-detail">
            <Helmet>
                <title>{detailBlog.title}</title>
            </Helmet>
            <div className="container">
                <div className="row">
                    <main className="col-lg-8">
                        <div className="single-blog-content">
                            <div className="feature-img">

                                <img src={`${BASE_URL}/images/${convertStrArr(detailBlog.files_name)[0]}`} alt="" />
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
                                        ><span className="text">{convertTime(detailBlog.created_at)}</span></Link>
                                </li>
                                <li>
                                    <Link to="#"
                                    ><span className="icon"
                                    ><i className="fa-solid fa-comment"></i></span
                                        ><span className="text">20 Comment</span></Link>
                                </li>
                            </ul>
                            <div className="s-post-tag-share-wrap">
                                <div className="p-tags">
                                    <h3 className="title">Chủ đề:</h3>
                                    <ul className="tags">
                                        {renderTag()}
                                    </ul>
                                </div>
                            </div>
                            <h1 className="post-title">
                                {detailBlog.title}
                            </h1>
                            <p className="desc">
                                {React.createElement("div", { dangerouslySetInnerHTML: { __html: detailBlog.content } })}
                            </p>

                            <div className="post-gallery">
                                <div className="image-slider-s1">
                                    <SliderCom settings={settings}>
                                        {renderThumb()}
                                    </SliderCom>
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
                                    <img src={require(`../../assets/images/thumbs/blog-author.png`)} alt="" />
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
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default MainSection;