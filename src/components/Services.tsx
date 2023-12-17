import React from "react";
import "../styles/Services.css";
import ServicesText from "./ServicesText";
import ServicesBlock from "./ServicesBlock";

const Services: React.FC = () => {
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , position: 'relative',}}>
          <img src={require("../assets/images/services-illustration-1.png")} style={{ position: 'absolute', zIndex: '-1', width: '40%', top: '21%', left: '0'}} />
          <img src={require("../assets/images/services-illustration-2.png")} style={{ width: '10%',position: 'absolute', zIndex: '-1', top: '50%', right: '20%' }} />
        <ServicesText />
        <div style={{ display: 'flex',}}>
          
          <ServicesBlock />
          
          
        </div>
      </div>
    )
}

export default Services;
export{}