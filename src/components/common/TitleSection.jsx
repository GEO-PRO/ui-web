import React from 'react';
import {Link} from "react-router-dom";

function TitleSection({title,paths=[]}) {
    return (
        <section className="d-page-banner">
            <div className="container">
                <div className="row">
                    <div className="content">
                        <h1 style={{textTransform:'capitalize'}}>{title}</h1>
                        <ul className="breadcrumb">
                            {
                                paths && paths.length>0 && paths.map((item)=>(
                                    <li key={Math.random()}><Link to={item.path} style={{textTransform:'capitalize'}}>{item.name}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TitleSection;