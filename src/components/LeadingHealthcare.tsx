import React from "react";
import "../styles/LeadingHealthcare.css"

const LeadingHealthcare: React.FC = () => {
    const title = 'Leading healthcare providers';
    const subtitle = 'We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver'
    const buttonText = 'Learn more'
    return (
        <div style={{width: '30%'}}>
            <div className="LeadingHealthcare-text">
                <span className="LeadingHealthcare-title">{title}</span>
                <div className="LeadingHealthcare-line"></div>
                <span className="LeadingHealthcare-subtitle">{subtitle}</span>
            </div>
            <button className="LeadingHealthcare-button">{buttonText}</button>
        </div>
    )   
}

export default LeadingHealthcare;
