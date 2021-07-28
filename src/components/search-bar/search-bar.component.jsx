import React from 'react';

import "./search-bar.styles.css";

const SearchBar=()=>{
    return(
        <div className="search-main">
            <div className="search-second">
                <div className="search-third">
                    <div className="search-left">
                        <input autoComplete="off" name="search" placeholder="Search for....anything!" readOnly type="phone" className="MuiInputBase"  />
                    </div>
                    <div className="search-right">
                        <div className="image-under">

                        </div>
                        <div className="search-image-container">
                            <svg viewBox="0 0 24 24" focusable="false" role="presentation" className="search-image-svg">
                            <path fill="currentColor" d="M23.384,21.619,16.855,15.09a9.284,9.284,0,1,0-1.768,1.768l6.529,6.529a1.266,1.266,0,0,0,1.768,0A1.251,1.251,0,0,0,23.384,21.619ZM2.75,9.5a6.75,6.75,0,1,1,6.75,6.75A6.758,6.758,0,0,1,2.75,9.5Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;