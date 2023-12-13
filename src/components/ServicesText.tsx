import React from "react";
import "../styles/ServicesText.css";

export const ServicesText: React.FC = () => {
    const title = "Our services";
    const subtitle = "We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health"
    return(
        <div className="ServicesText">
            <span className="ServicesText-title">{title}</span>
            <div className="ServicesText-line">{}</div>
            <span className= "ServicesText-subtitle">{subtitle}</span>
        </div>
    )
}

export default ServicesText;
export{};

