import React from 'react';

function ContactBanner() {
    return (
        <section className="contact-banner-s1 s-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-6">
                        <div className="contact-banner-s1__content">
                            <span className="s-sub-title">CALL US 24/7</span>
                            <h2 className="content-t">(+123) 456-9989</h2>
                            <p>
                                Have any idea or prject for in your mind call us or schedule a
                                apointmnt. Our representative will reply you shortly.
                            </p>
                            <a href="/contact" className="btn btn-s1">Let's Talk</a>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-6 contact-banner-s1__thumb">
                        <div className="text-right">
                            <img
                                src={require(`../../assets/images/thumbs/contact-style-1-thumb.png`)}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactBanner;