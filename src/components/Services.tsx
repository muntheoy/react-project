import React from "react";
import "../styles/Services.css";
import ServicesText from "./ServicesText";
import ServicesBlock from "./ServicesBlock";

const Services: React.FC = () => {
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , position: 'relative', justifyContent: 'center', marginBottom: '10%', marginTop: '20%'}}>
          <img src={require("../assets/images/services-illustration-1.png")} style={{ position: 'absolute', zIndex: '-1', width: '40%', top: '21%', left: '0'}} />
          <img src={require("../assets/images/services-illustration-2.png")} style={{ width: '10%',position: 'absolute', zIndex: '-1', top: '50%', right: '15%' }} />
        <ServicesText />
        <div style={{ display: 'flex',}}>
          
          <ServicesBlock />
          
          
        </div>
        <button className="Services-button">Learn more</button>
      </div>
    )
}

export default Services;
export{}