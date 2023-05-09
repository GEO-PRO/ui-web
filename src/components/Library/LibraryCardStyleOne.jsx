import React from 'react';

function BlogCardStyleOne({ datas, className }) {
    // console.log('object :>> ', convertStrArr(datas.files_name));
    return (
        <div className={`${className || ''} b-post-s1 mb-0`}>
            <div className="thumb" style={{ width: "auto", height: "200px" }}>
                {/* <img src={`${BASE_URL}/images/${convertStrArr(datas.files_name)[0]}`} alt="" /> */}
                <img src="https://www.hydro.com/globalassets/07-media/brandcenter/029-documents.png" alt="" />
            </div>
            <div className="content">
                <ul className="meta">
                    <li>
                        <span className="icon"><i className="fa-regular fa-user"></i></span>
                        <span className="text">By Admin</span>
                    </li>
                    <li>
                        <span className="icon"
                        ><i className="fa-regular fa-comment"></i
                        ></span>
                        <span className="text">{datas.comments} Comments</span>
                    </li>
                </ul>
                <h4 className="title line-clamp-2 c-text-overflow">
                    <a href={datas.file} target='_blank'>{datas.name}</a>
                    {/* <Link to={`/doc-details/${datas.id}`}>{datas.name}</Link> */}
                </h4>
                <span className="text c-text-overflow">{datas.tag_name}</span>
                <div className="btm">
                    <a className="readmore" href={datas.file} target='_blank'
                    >Xem chi tiết <img src={require(`../../assets/images/icons/arrow-right.svg`).default} alt="arrow" /></a>
                </div>
            </div>
        </div>
    );
}

export default BlogCardStyleOne;