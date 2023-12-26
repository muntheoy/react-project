import React from "react";
import ServicesCard from "./ServicesCard";
import "../styles/ServicesBlock.css"

export const servicesData = [
  {
    icon: require("../assets/images/servis-card-icon-1.png"),
    title: 'Search doctor',
    subtitle: 'Choose your doctor from thousands of specialist, general, and trusted hospitals',
  },
  {
    icon: require("../assets/images/servis-card-icon-2.png"),
    title: 'Online pharmacy',
    subtitle: 'Buy  your medicines with our mobile application with a simple delivery system',
  },
  {
    icon: require("../assets/images/servis-card-icon-3.png"),
    title: 'Consultation',
    subtitle: 'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    icon: require("../assets/images/servis-card-icon-4.png"),
    title: 'Details info',
    subtitle: 'Free consultation with our trusted doctors and get the best recomendations',
  },
  {
    icon: require("../assets/images/servis-card-icon-5.png"),
    title: 'Emergency care',
    subtitle: 'You can get 24/7 urgent care for yourself or your children and your lovely family',
  },
  {
    icon: require("../assets/images/servis-card-icon-6.png"),
    title: 'Tracking',
    subtitle: 'Track and save your medical history and health data ',
  },
  
];

const ServicesContainer: React.FC = () => {
  return (
    <div className="ServicesBlock">
      {servicesData.map((service, index) => (
        <ServicesCard key={index} {...service} />
      ))}
    </div>
  );
};

export default ServicesContainer;
