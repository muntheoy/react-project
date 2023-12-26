import React from "react";
import "../styles/HeaderText.css";

interface IHeaderText {
    title: string;
    subtitle: string;
    buttonText: string;
}

const HeaderText: React.FC<IHeaderText> = ({ title, subtitle, buttonText }) => {
    return (
        <div className="HeaderText">
            <div className="HeaderText-container">
                <span className="HeaderText-container-title">{title}</span>
                <span className="HeaderText-container-subtitle">{subtitle}</span>
            </div>
            <button className="HeaderText-container-button">{buttonText}</button>
        </div>
    );
};

export default HeaderText;

