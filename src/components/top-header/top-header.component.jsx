import React from 'react';

import downLogo from '../../assets/dropicon.png';
import './top-header.styles.css';

const TopHeader = ()=>{
    return(
        <div className="top-container">
            <button className="btn-class">
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
                <path d="M1.4 6.2H17M1.4 1H17M1.4 11.4H17" stroke="#FFE33F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>

                </svg>
            </button>
            <div className="top-location">
                <div className="location-name">
                    Dhaka / Ramna
                </div>
                <img src={downLogo} alt />
            </div>
        </div>
    )
}

export default TopHeader;