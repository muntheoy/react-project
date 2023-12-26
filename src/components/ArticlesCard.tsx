import React from "react";
import "../styles/ArticlesCard.css"

interface IArticlesCard{
    image: string;
    title: string;
    subtitle: string;
    onClick: () => void;
}
const ArticlesCard: React.FC<IArticlesCard> = ({ image, title, subtitle, onClick}) => {
    const buttonText = 'Read more';
    const arrowIcon = require("../assets/images/arrow-icon.png")
    return(
        <div className="ArticlesCard">
            <img  className = "ArticlesCard-image" src={image}/>
            <div className="ArticlesCard-text">
                <span className="ArticlesCard-title">{title}</span>
                <span className="ArticlesCard-subtitle">{subtitle}</span>
            </div>
            <button className="ArticlesCard-text-button" onClick={onClick}>
                <span className="ArticlesCard-button-text">{buttonText}</span>
                <img src={arrowIcon} alt="Arrow" className="ArticlesCard-arrow-icon" />
            </button>
        </div>
    )
}

export default ArticlesCard;
export{}