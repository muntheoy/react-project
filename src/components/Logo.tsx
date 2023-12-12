import React from "react";
import "../styles/Logo.css";  

interface ILogo {
  letter: string;
  text: string;
}

const Logo: React.FC<ILogo> = ({ letter, text }) => {
  return (
    <div className="logoContainer">
      <div className="circle">{letter}</div>
      <span className="text">{text}</span>
    </div>
  );
};

export default Logo; 