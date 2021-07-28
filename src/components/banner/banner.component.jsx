import React from 'react';

import bannerLogo from '../../assets/200w.af7bb60c.gif'
import './banner.styles.css';

const Banner=()=>{
    return(
        <div className="banner-main">
            <img src={bannerLogo} alt="New on DeliveryHobe" className="banner-logo"/>

            <div className="new-on-dh">New on DH</div>
            <div className="three-day-returns">3 Day Returns</div>
            <div className="free-delivery">Free Delivery !</div>
        </div>
    );
}

export default Banner