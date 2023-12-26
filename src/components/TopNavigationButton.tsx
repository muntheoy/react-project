import React from "react";
import "../styles/TopNavigationButton.css";

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
  const buttonClassName = isActive ? "TopNavigationButton-active" : "TopNavigationButton-inactive";

  return (
    <button className={`TopNavigationButton ${buttonClassName}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default TopNavigationButton;
