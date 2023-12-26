import React from "react";
import "../styles/Services.css";
import ServicesText from "./ServicesText";
import ServicesBlock from "./ServicesBlock";

const Services: React.FC = () => {
    return(
        <div className="Services">
          <img className="Services-illustration-first" src={require("../assets/images/services-illustration-1.png")}  />
          <img className="Services-illustration-second" src={require("../assets/images/services-illustration-2.png")}/>
        <ServicesText />
        <div >
          <ServicesBlock />
        </div>
        <button className="Services-button">Learn more</button>
      </div>
    )
}

export default Services;
export{}