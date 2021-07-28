import React from 'react';

import logo from '../../assets/logo.3fd11f69.png'
import './header.styles.css';

const Header=()=>{
    return(
        <div className="header-main">
            <h2 className="header-name-left">
                <strong>Your Needs,</strong>
                <br></br>
                <span>Delivered in 1Hr.</span>
            </h2>
            
            <figure className="header-figure-right">
                <img src={logo} alt />
            </figure>
        </div>
    );
}

export default Header;