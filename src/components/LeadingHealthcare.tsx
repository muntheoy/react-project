import React from "react";
import "../styles/LeadingHealthcare.css";


const LeadingHealthcare: React.FC = () =>{

    return(
        <div className="LeadingHealthcare">
            <img className="LeadingHealthcare-img" src={require("../assets/images/leading-healthcare-element-1.png")}/>
            <div className="LeadingHealthcare-right-side">
                <div className="LeadingHealthcare-text">
                    <span className="LeadingHealthcare-text-title">Leading healthcare providers</span>
                    <div className="LeadingHealthcare-text-line"></div>
                    <span className="LeadingHealthcare-text-subtitle">We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver</span>
                </div>
                <button className="LeadingHealthcare-button">Learn more</button>
            </div>
            
        </div>
    )
}

export default LeadingHealthcare;
export{}