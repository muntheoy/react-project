import React from "react";
import "./TopNavigationButton.css";

interface ITopNavigationButton {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const TopNavigationButton: React.FC<ITopNavigationButton> = ({
  text,
  isActive,
  onClick,
}) => {
  const buttonClassName = isActive ? "active" : "inactive";

  return (
    <button className={`button ${buttonClassName}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default TopNavigationButton;
