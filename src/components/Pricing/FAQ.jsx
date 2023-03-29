import React from 'react';
import Accordion from "../helpers/Accordion";

function Faq() {
    return (
        <section className="faq-section-s1 s-padding">
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Our Faq</span>
                    <h2 className="s-title">Frequently asked questions</h2>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="accordion accordion-s1">
                            <Accordion title="01. How does information technology work?" des=" There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form, by
                                    inject humour, or randomised words"/>
                            <Accordion title="02. How can I become IT manager?" des="There are many variations of passages of Lorem Ipsum
                                        available but the majority have suffered alteration in some
                                        form, by injecte humour, or randomised words"/>
                            <Accordion title="03. What are the latest trends in IT?" des=" There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form, by
                                    inject humour, or randomised words"/>
                            <Accordion title="04. How long should a business plan be?" des=" There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form, by
                                    inject humour, or randomised words"/>
                            <Accordion title="05. How long should a business plan be?" des=" There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form, by
                                    inject humour, or randomised words"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="accordion accordion-s1">
                            <Accordion title="06. How does information technology work?" des=" There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form, by
                                    inject humour, or randomised words"/>
                            <Accordion title="07. How can I become IT manager?" des="There are many variations of passages of Lorem Ipsum
                                        available but the majority have suffered alteration in some
                                        form, by injecte humour, or randomised words"/>
                            <Accordion title="08. What are the latest trends in IT?" des=" There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form, by
                                    inject humour, or randomised words"/>
                            <Accordion title="09. How long should a business plan be?" des=" There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form, by
                                    inject humour, or randomised words"/>
                            <Accordion title="10. How long should a business plan be?" des=" There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form, by
                                    inject humour, or randomised words"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;