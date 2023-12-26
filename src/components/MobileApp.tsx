import React from "react";
import "../styles/MobileApp.css";


const MobileApp: React.FC = () =>{

    return(
        <div className="MobileApp">
            
            <div className="MobileApp-right-side">
                <div className="MobileApp-text">
                    <span className="MobileApp-text-title">Download our mobile apps</span>
                    <div className="MobileApp-text-line"></div>
                    <span className="MobileApp-text-subtitle">Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</span>
                </div>
                <button className="MobileApp-button">
                    <span>Download</span>
                    <img src={require("../assets/images/app-arrow-img.png")} style={{width:'8%', marginLeft: '2%'}}/>
                    </button>
            </div>
            <img className="MobileApp-img" src={require("../assets/images/mobile-app-img.png")}/>
        </div>
    )
}

export default MobileApp;
export{}