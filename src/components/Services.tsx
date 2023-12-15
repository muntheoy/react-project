import React from "react";
import "../styles/Services.css";
import ServicesText from "./ServicesText";
import ServicesBlock from "./ServicesBlock";

const Services: React.FC = () => {
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ServicesText />
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', margin: 'auto'}}>
            <ServicesBlock />
          </div>
          <div style={{zIndex: 0, display: 'flex', }}>
            <img src={require("../assets/images/services-illustration-1.png")} style={{ width: '40%', position: 'fixed', left: '0%', top: '20%' }} />
            <img src={require("../assets/images/services-illustration-2.png")} style={{ width: '10%', position: 'fixed', right: '0%' }} />
          </div>
        </div>
      </div>
    )
}

export default Services;
export{}