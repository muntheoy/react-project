import React from "react";
import "../styles/Footer.css";


const NavigationSection: React.FC<{ title: string, items: string[] }> = ({ title, items }) => (
    <div className="Footer-array">
      <span className="Footer-array-title">{title}</span>
      <div className="Footer-array-item">
        {items.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
  
  const Footer: React.FC = () => {
    const company = ["About", "Testimonials", "Find a doctor", "Apps"];
    const region = ["Indonesia", "Singapore", "Hongkong", "Canada"];
    const help = [" Help center", "Contact support", "Instractions", "How it works"];
    const footerElementFirst = require("../assets/images/footer-element-first.png");
    const footerElementSecond = require("../assets/images/footer-element-second.png");
    const footerFirstText = "HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone";
    const footerSecondText = "©HealthCare PTY LTD 2023. All rights reserved";
    const footerLogoText = "HealthCare";
    const footerCircle = "T"
    return (
      <div className="Footer">

        <img className= "Footer-image-first" src={footerElementFirst}/>
        <img className= "Footer-image-second" src={footerElementSecond}/>
        <div className="Footer-healthcare">
          <div className="Footer-logoContainer">
            <div className="Footer-circle">{footerCircle}</div>
            <span className="Footer-logo-text">{footerLogoText}</span>
          </div>
          <span className="Footer-healthcare-first-text">{footerFirstText}</span>
          <span className="Footer-healthcare-second-text">{footerSecondText}</span>
        </div>
        
            <NavigationSection title="Company" items={company} />
            <NavigationSection title="Region" items={region} />
            <NavigationSection title="Help" items={help} />
        

            

      </div>
    );
  };
  
  export default Footer;