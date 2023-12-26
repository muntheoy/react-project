import React from "react";
import TopNavigation from "./TopNavigation";
import Logo from "./Logo";
import "../styles/Header.css";
import HeaderText from "./HeaderText";


interface IHeader {};

const Header: React.FC<IHeader> = () => {
    const imgElement = require("../assets/images/element.png");
    const imgIllustration = require("../assets/images/headerIllustration.png");
    return (
        <div className="Header">
            <img className = "Header-img-element" src={imgElement} alt = "Header Element" />
            <div className="Header-content">
            <div className="Header-content-top">
                <Logo letter={"T"} text={"HealthCare"} />
                <TopNavigation />
            </div>
            <div className="Header-content-bottom">
                <HeaderText title={'Virtual healthcare for you'} subtitle={'Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone'} buttonText={'Consult today'} />
                <img 
                className = "Header-img-illustration"
                 src={imgIllustration} 
                 alt="Header Illustration"
                 
                  />
            </div>
        </div>
        </div>
    )
}

export default Header;
export {}
