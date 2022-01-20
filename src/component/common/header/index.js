import React from "react";
import "./header.css"
const Header=()=>{
    return(
        <div className="max-width">
            <img src="./HungerLogo.png" alt="hungerpoint"
            className="header-logo"
        />
        <div className="header-right">
             <div className="header-location-search-container">
                <div className="location-warpper">
                    <div className="location-icon-name">
                    <i className="fi fi-rr-marker absolute-center location-icon"></i>
                       <div>Pune</div> 
                    </div>
                    <div>
                    <i className="fi fi-rr-caret-down absolute-center"></i>
                    </div>
                    <div className="location-search-separator"> </div>
                    <div className="header-searchbar"></div>
                    <i className="fi fi-rr-search absolute-center search-icon"></i>
                    <input placeholder="Search for Hotels" className="search-input"/>
                </div>
        </div>
        <div className="profile-wrapper">
        <i className="fi fi-rr-user header-profile-image absolute-center "></i>
        <span className="header-user-name">Vaishali</span>
        <i className="fi fi-rr-angle-down absolute-center profile-options-icon"></i>
        </div>
        </div>
        </div>
    )
}

export default Header;