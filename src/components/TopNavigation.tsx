import React, { useState } from "react";
import TopNavigationButton from "./TopNavigationButton";

interface ITopNavigation {}

const TopNavigation: React.FC<ITopNavigation> = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  const buttons = ['Home', 'Find a doctor', 'Apps', 'Testimonials', 'About us'];

  return (
    <div style={{width:'50%'}}>
      {buttons.map((button, index) => (
        <TopNavigationButton
          key={index}
          text={button}
          isActive={index === activeIndex}
          onClick={() => handleButtonClick(index)}
        />
      ))}
    </div>
  );
};

export default TopNavigation;