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
    const footerElementFirst = require("../assets/images/footer-element-first.png")
  
    return (
      <div className="Footer">

        <img className= "Footer-image" src={footerElementFirst}/>

        <div className="Footer-healthcare">
          <div className="Footer-logoContainer">
            <div className="Footer-circle">T</div>
            <span className="Footer-logo-text">HealthCare</span>
          </div>
          <span className="Footer-healthcare-first-text">HealthCare provides progressive, and affordable healthcare, accessible on mobile and online for everyone</span>
          <span className="Footer-healthcare-second-text">©HealthCare PTY LTD 2023. All rights reserved</span>
        </div>
        
            <NavigationSection title="Company" items={company} />
            <NavigationSection title="Region" items={region} />
            <NavigationSection title="Help" items={help} />
        

            

      </div>
    );
  };
  
  export default Footer;