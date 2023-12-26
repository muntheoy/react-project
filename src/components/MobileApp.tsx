import React from "react";
import "../styles/MobileApp.css";


const MobileApp: React.FC = () =>{
    const title = "Download our mobile apps";
    const subtitle = "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely";
    const imgArrow = require("../assets/images/app-arrow-img.png");
    const img = require("../assets/images/mobile-app-img.png");
    return(
        <div className="MobileApp">
            
            <div className="MobileApp-right-side">
                <div className="MobileApp-text">
                    <span className="MobileApp-text-title">{title}</span>
                    <div className="MobileApp-text-line"></div>
                    <span className="MobileApp-text-subtitle">{subtitle}</span>
                </div>
                <button className="MobileApp-button">
                    <span>Download</span>
                    <img className="MobileApp-img-arrow" src={imgArrow}/>
                    </button>
            </div>
            <img className="MobileApp-img" src={img}/>
        </div>
    )
}

export default MobileApp;
export{}