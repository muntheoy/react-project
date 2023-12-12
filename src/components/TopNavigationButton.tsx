import React from "react";

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
  const buttonStyle: React.CSSProperties = {
    border: "none",
    background: "none",
    // cursor: "pointer",
    fontSize: "18px", 
    color: isActive ? "black" : "gray", 
    fontFamily: isActive ? "MulishBold":"MulishRegular"
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default TopNavigationButton;
