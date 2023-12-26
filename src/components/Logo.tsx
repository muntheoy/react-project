import React from "react";
import "../styles/Logo.css";  

interface ILogo {
  letter: string;
  text: string;
}

const Logo: React.FC<ILogo> = ({ letter, text }) => {
  return (
    <div className="Logo">
      <div className="Logo-circle">{letter}</div>
      <span className="Logo-text">{text}</span>
    </div>
  );
};

export default Logo; 