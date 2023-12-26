import React from "react";
import "../styles/ServicesCard.css";

interface IServicesCard {
  icon: string;
  title: string;
  subtitle: string;
}

export const ServicesCard: React.FC<IServicesCard> = ({ icon, title, subtitle }) => {
  const handleClick = () => {
    console.log("Карточка кликнута!");
  };

  return (
    <div className="ServicesCard" onClick={handleClick}>
      <img className="ServicesCard-icon" src={icon} alt="" />
      <div className="ServicesCard-text">
        <span className="ServicesCard-title">{title}</span>
        <span className="ServicesCard-subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export default ServicesCard;
