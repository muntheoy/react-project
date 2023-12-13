import React from "react";
import TopNavigation from "./TopNavigation";
import Logo from "./Logo";
import "../styles/Header.css";
import HeaderText from "./HeaderText";


interface IHeader {};

const Header: React.FC<IHeader> = () => {
    return (
        <div className="container">
            <img className = "img-element" src={require("../assets/images/element.png")} alt = "Header Element" />
            <div className="header">
            <div className="top-header">
                <Logo letter={"T"} text={"HealthCare"} />
                <TopNavigation />
            </div>
            <div className="bottom-header">
                <HeaderText title={'Virtual healthcare for you'} subtitle={'Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone'} buttonText={'Consult today'} />
                <img 
                className = "img-illustration"
                 src={require("../assets/images/headerIllustration.png")} 
                 alt="Header Illustration"
                 
                  />
            </div>
        </div>
        </div>
    )
}

export default Header;
export {}
