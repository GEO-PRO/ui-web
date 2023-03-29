import React, {useState} from 'react';

function PricingTab() {
    const [tab, setTab] = useState('month');
    return (
        <section className="pricing-section-s2 s-padding">
            <div className="container">
                <div className="s-title-wrap">
                    <span className="s-sub-title">Pricing</span>
                    <h2 className="s-title">Our Pricing Plan</h2>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="tab pricing-tab-s1">
                            <div className="tab-links">
                                <div className="pricing-toogle">
                                    <button className={`tab-btn ${tab==='month'?'active':''}`} onClick={()=>setTab('month')}>
                                        Monthly
                                    </button>
                                    <button className={`tab-btn ${tab==='year'?'active':''}`}  onClick={()=>setTab('year')}>Yearly</button>
                                </div>
                            </div>
                            <div className="tab-contents">
                                <div className={`tab-pane ${tab==='month'?'active':''}`} id="monthly">
                                    <div className="row justify-content-lg-center">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-t-s2">
                                                <div className="pt-header">
                                                    <div className="price">
                                                        <span className="p-pre">$</span>
                                                        <h3>25.99</h3>
                                                        <span className="p-suf">/Per Month</span>
                                                    </div>
                                                    <div className="pt-ribbon">Silver</div>
                                                </div>
                                                <div className="pt-body">
                                                    <ul className="pt-features">
                                                        <li>
                                                            <span className="text">5 PPC Campaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">10 SEO Keywords</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">Facebook Camplaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">Video Camplaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">24/7 Hour Support</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pt-footer">
                                                    <button className="pt-btn btn btn-s1">Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-t-s2 active">
                                                <div className="pt-header">
                                                    <div className="price">
                                                        <span className="p-pre">$</span>
                                                        <h3>55.99</h3>
                                                        <span className="p-suf">/Per Month</span>
                                                    </div>
                                                    <div className="pt-ribbon">Gold</div>
                                                </div>
                                                <div className="pt-body">
                                                    <ul className="pt-features">
                                                        <li>
                                                            <span className="text">5 PPC Campaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">10 SEO Keywords</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">Facebook Camplaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">Video Camplaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">24/7 Hour Support</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pt-footer">
                                                    <button className="pt-btn btn btn-s1">Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-t-s2">
                                                <div className="pt-header">
                                                    <div className="price">
                                                        <span className="p-pre">$</span>
                                                        <h3>95.99</h3>
                                                        <span className="p-suf">/Per Month</span>
                                                    </div>
                                                    <div className="pt-ribbon">Platinum</div>
                                                </div>
                                                <div className="pt-body">
                                                    <ul className="pt-features">
                                                        <li>
                                                            <span className="text">5 PPC Campaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">10 SEO Keywords</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">Facebook Camplaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">Video Camplaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">24/7 Hour Support</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pt-footer">
                                                    <button className="pt-btn btn btn-s1">Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`tab-pane ${tab==='year'?'active':''}`} id="yearly">
                                    <div className="row justify-content-lg-center">
                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-t-s2">
                                                <div className="pt-header">
                                                    <div className="price">
                                                        <span className="p-pre">$</span>
                                                        <h3>75.99</h3>
                                                        <span className="p-suf">/Per Year</span>
                                                    </div>
                                                    <div className="pt-ribbon">Silver</div>
                                                </div>
                                                <div className="pt-body">
                                                    <ul className="pt-features">
                                                        <li>
                                                            <span className="text">5 PPC Campaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">10 SEO Keywords</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">Facebook Camplaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">Video Camplaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">24/7 Hour Support</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pt-footer">
                                                    <button className="pt-btn btn btn-s1">Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-t-s2 active">
                                                <div className="pt-header">
                                                    <div className="price">
                                                        <span className="p-pre">$</span>
                                                        <h3>105.99</h3>
                                                        <span className="p-suf">/Per Year</span>
                                                    </div>
                                                    <div className="pt-ribbon">Gold</div>
                                                </div>
                                                <div className="pt-body">
                                                    <ul className="pt-features">
                                                        <li>
                                                            <span className="text">5 PPC Campaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">10 SEO Keywords</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">Facebook Camplaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">Video Camplaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">24/7 Hour Support</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pt-footer">
                                                    <button className="pt-btn btn btn-s1">Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="pricing-t-s2">
                                                <div className="pt-header">
                                                    <div className="price">
                                                        <span className="p-pre">$</span>
                                                        <h3>304.99</h3>
                                                        <span className="p-suf">/Per Year</span>
                                                    </div>
                                                    <div className="pt-ribbon">Platinum</div>
                                                </div>
                                                <div className="pt-body">
                                                    <ul className="pt-features">
                                                        <li>
                                                            <span className="text">5 PPC Campaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">10 SEO Keywords</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">Facebook Camplaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">Video Camplaigns</span>
                                                        </li>
                                                        <li>
                                                            <span className="text">24/7 Hour Support</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="pt-footer">
                                                    <button className="pt-btn btn btn-s1">Buy Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingTab;