import React from "react";
import "../styles/SiteScreen.css";
import Header from "./Header";
import Services from "./Services";
import LeadingHealthcare from "./LeadingHealthcare";
import MobileApp from "./MobileApp";
import TestimonialsCard from "./TestimonialsCard";
import Articles from "./Articles";
import Footer from "./Footer";


const SiteScreen: React.FC = () =>{
    const userAvatar = require("../assets/images/user-avatar-1.jpg");
    return(
        <div className="SiteScreen">
            <Header/>
            <Services/>
            <LeadingHealthcare/>
            <MobileApp/>
            <TestimonialsCard 
            avatar={userAvatar} 
            name={"Edward Newgate"} 
            post={"Founder Circle"} 
            comment={"“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”"}/>
            <Articles/>
            <Footer/>
        </div>
    )
}

export default SiteScreen;
