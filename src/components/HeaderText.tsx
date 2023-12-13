import React from "react";
import "../styles/HeaderText.css";

interface IHeaderText {
    title: string;
    subtitle: string;
    buttonText: string;
}

const HeaderText: React.FC<IHeaderText> = ({ title, subtitle, buttonText }) => {
    return (
        <div className="my-component">
            <div className="text-container">
                <span className="title">{title}</span>
                <span className="subtitle">{subtitle}</span>
            </div>
            <button className="button">{buttonText}</button>
        </div>
    );
};

export default HeaderText;

