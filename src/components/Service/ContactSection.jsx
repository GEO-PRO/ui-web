import React from 'react';
import {Link} from "react-router-dom";

function ContactSection() {
    return (
        <section className="contact-banner-s3">
            <div className="container">
                <div className="row">
                    <div className="content">
                        <h2>Ready To Get Our Professional IT Services ?</h2>
                        <div className="btn-group">
                            <Link to="/teams" className="btn btn-s1">Meet The Team</Link>
                            <Link to="/service" className="btn btn-s1 wt">Our Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;