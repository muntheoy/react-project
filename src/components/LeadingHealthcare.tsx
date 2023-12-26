import React from "react";
import "../styles/LeadingHealthcare.css";


const LeadingHealthcare: React.FC = () =>{
    const img = require("../assets/images/leading-healthcare-element-1.png");
    const title = "Leading healthcare providers"
    const subtitle = "We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver";
    const buttonText = "Learn more"
    return(
        <div className="LeadingHealthcare">
            <img className="LeadingHealthcare-img" src={img}/>
            <div className="LeadingHealthcare-right-side">
                <div className="LeadingHealthcare-text">
                    <span className="LeadingHealthcare-text-title">{title}</span>
                    <div className="LeadingHealthcare-text-line"></div>
                    <span className="LeadingHealthcare-text-subtitle">{subtitle}</span>
                </div>
                <button className="LeadingHealthcare-button">{buttonText}</button>
            </div>
            
        </div>
    )
}

export default LeadingHealthcare;
export{}