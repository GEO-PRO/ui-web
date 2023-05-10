import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import removeDiacritics from 'remove-diacritics';
import { API_URL, getNotFound, scrollTop } from '../../service/config';
import NotFound from '../common/NotFound';
import BlogCardStyleOne from "./BlogCardStyleOne";

function MainSection() {
    const [blogs, setBlogs] = useState([])
    const [notFound, setNotFound] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [getFilter, setGetFilter] = useState([])
    const [buttonFilter, setButtonFilter] = useState([])
    const [inputChange, setInputChange] = useState()
    const [searchInput, setSearchInput] = useState(null)

    const renderGoNextPage = () => {
        return currentPage == 1 ? <></> :
            (<li><Link onClick={() => { setCurrentPage(currentPage - 1) }} to="#"><img src={require(`../../assets/images/icons/arrow-left.svg`).default} alt="arrow" /></Link></li>)
    }

    const renderPreviousPage = () => {
        return (currentPage == totalPages || totalPages == 0) ? <></> :
            (<li><Link onClick={() => { setCurrentPage(currentPage + 1) }} to="#"><img src={require(`../../assets/images/icons/arrow-right.svg`).default} alt="arrow" /></Link></li>)
    }

    const renderFilterButton = () => {
        return buttonFilter.map(filter => {
            return <button onClick={() => { handleAddFilter(filter.id) }} className="tag" id={`tag-${filter.id}`} >{filter.name} ({filter.count})</button>
        })
    }

    const handleAddFilter = (idFilter) => {
        let cloneGetFilter = [...getFilter]
        let elmentTag = document.getElementById(`tag-${idFilter}`).classList
        if (cloneGetFilter.find(id => id == idFilter)) {
            cloneGetFilter.splice(cloneGetFilter.indexOf(idFilter), 1)
            elmentTag.remove("tag-linear")
        } else {
            cloneGetFilter.push(idFilter)
            elmentTag.add("tag-linear")
        }
        setGetFilter(cloneGetFilter)
        setCurrentPage(1)
    }

    const handleGetAllFilter = () => {
        setGetFilter([])
        let elmentTag = document.querySelectorAll(".tag")
        elmentTag.forEach(ele => {
            ele.classList.remove("tag-linear")
        })
        setCurrentPage(1)
    }

    const handleInputSearch = (event) => {
        setInputChange(removeDiacritics(event.target.value).trim())
    }

    const handleEnterSearch = (event) => {
        if (event.key === 'Enter') {
            handleGetSearch()
        }
    }

    const handleGetSearch = () => {
        setSearchInput(inputChange.split(" ").join("|"))
        setCurrentPage(1)
    }

    useEffect(() => {
        const dataRequest = { tag_blogs_id: getFilter, searchParam: searchInput, page: currentPage }
        axios.post(`${API_URL}/blogs/filter`, dataRequest)
            .then((result) => {
                scrollTop()
                setBlogs(result.data.result)
                setTotalPages(result.data.totalPages)
                setNotFound(getNotFound(result.data.totalData))
            }).catch((err) => {
                console.log('err :>> ', err);
            });
    }, [currentPage, getFilter, searchInput]);

    useEffect(() => {
        axios.get(`${API_URL}/tag-blog/get-all`).then((result) => {
            setButtonFilter(result.data)
        }).catch((err) => {
            console.log('err :>> ', err);
        });
    }, [])

    return (
        <section className="blog-main s-padding">
            <div className="container">
                <div className="row">
                    <aside className="col-lg-4">
                        <div className="blog-sidebar-s1">
                            <div className="search-widget widget">
                                <h3 className="w-title">Tìm kiếm</h3>
                                <div className="search-container">
                                    <input onChange={() => { handleInputSearch(event) }} onKeyDown={() => { handleEnterSearch(event) }} type="text" placeholder="Search" />
                                    <button type="submit" onClick={handleGetSearch}>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="latest-posts-widget widget">
                                <h3 className="w-title">Latest Post (Đề cử)</h3>
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
                                <h3 className="w-title">Chủ đề</h3>
                                <div className="tags-container">
                                    <button className="tag" onClick={handleGetAllFilter}>Tất cả</button>
                                    {renderFilterButton()}
                                </div>
                            </div>
                        </div>
                    </aside>
                    <main className="col-lg-8">
                        <div className="row b-post-gallery-s2" style={{ "justifyContent": "center" }}>
                            {notFound ? <NotFound /> : <></>}
                            {blogs && blogs.length > 0 && blogs.map((item) => (
                                <div key={item.id} className="col-lg-6 col-md-6">
                                    <BlogCardStyleOne datas={item} />
                                </div>
                            ))}
                        </div>
                    </main>
                </div >
                <div className="b-pagination text-right">
                    <ul className="pagination">
                        {renderGoNextPage()}
                        <li><Link to="#">{currentPage}</Link></li>
                        {renderPreviousPage()}
                    </ul>
                </div>
            </div >
        </section >
    );
}

export default MainSection;