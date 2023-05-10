import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import removeDiacritics from 'remove-diacritics';
import { API_URL, getNotFound, scrollTop } from '../../service/config';
import NotFound from '../common/NotFound';
import LibraryCardStyleOne from "./LibraryCardStyleOne";

function MainSection() {
    const [blogs, setBlogs] = useState([])
    const [titleBtn, setTitleBtn] = useState([])
    const [titleFilter, setTitleFilter] = useState(null)
    const [notFound, setNotFound] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [getFilter, setGetFilter] = useState([])
    const [buttonFilter, setButtonFilter] = useState([])
    const [inputChange, setInputChange] = useState()
    const [searchInput, setSearchInput] = useState(null)
    const titleId = window.location.pathname.split('/')[3]

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

    const renderTitleButton = () => {
        return titleBtn.map((item) => {
            return <button type="button" className={`filter-btn ${titleFilter === item.id ? 'current' : ''}`} onClick={() => { handleFilterTitle(item.id) }}>
                {item.name} ({item.count})
            </button>
        })
    }

    const handleFilterTitle = (title) => {
        setTitleFilter(title)
        setCurrentPage(1)
        setSearchInput(null)
    }
    const handleGetAllFilterTitle = () => {
        setTitleFilter(null)
        setCurrentPage(1)
        setSearchInput(null)
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
        console.log('cloneGetFilter :>> ', cloneGetFilter);
        setGetFilter(cloneGetFilter)
        setCurrentPage(1)
        setSearchInput(null)
    }

    const handleGetAllFilter = () => {
        setGetFilter([])
        let elmentTag = document.querySelectorAll(".tag")
        elmentTag.forEach(ele => {
            ele.classList.remove("tag-linear")
        })
        setCurrentPage(1)
        setSearchInput(null)
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
        const dataRequest = { tag_id: getFilter, search_key: searchInput, page: currentPage, title_id: titleFilter }
        axios.post(`${API_URL}/exams/title`, dataRequest)
            .then((result) => {
                console.log('result.data :>> ', result.data);
                scrollTop()
                setBlogs(result.data.result)
                setTotalPages(result.data.totalPages)
                setNotFound(getNotFound(result.data.totalData))
            }).catch((err) => {
                console.log('err :>> ', err);
            });
    }, [currentPage, getFilter, searchInput, titleFilter]);

    useEffect(() => {
        axios.get(`${API_URL}/tag-exam/get-all?title_id=${titleFilter}`).then((result) => {
            setButtonFilter(result.data)
        }).catch((err) => {
            console.log('err :>> ', err);
        });
    }, [titleFilter])

    useEffect(() => {
        axios.get(`${API_URL}/title-exam/get-all`).then((result) => {
            setTitleBtn(result.data)
        }).catch((err) => {
            console.log('err :>> ', err);
        });
    })

    return (
        <section className="blog-main sm-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="porftolio-filter-menu">
                            <div
                                className="portfolio-filter-buttons text-center"
                                id="filter-buttons"
                            >
                                <button type="button" className={`filter-btn ${titleFilter === null ? 'current' : ''}`} onClick={() => { handleGetAllFilterTitle() }}>
                                    Tất cả
                                </button>
                                {renderTitleButton()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <aside className="col-lg-4">
                        <div className="blog-sidebar-s1">
                            <div className="search-widget widget">
                                <h3 className="w-title">Tìm kiếm</h3>
                                <div className="search-container">
                                    <input onChange={() => { handleInputSearch(event) }} onKeyDown={() => { handleEnterSearch(event) }} type="text" placeholder="Search" />
                                    <button type="submit" onClick={handleGetSearch}>
                                        <img src={require(`../../assets/images/icons/search.svg`).default} alt="arrow" />                                    </button>
                                </div>
                            </div>
                            <div className="popular-tags-widget widget">
                                <h3 className="w-title">Chủ đề</h3>
                                <div className="tags-container">
                                    {/* <button className="tag" onClick={handleGetAllFilter}>Tất cả</button> */}
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
                                    <LibraryCardStyleOne datas={item} />
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