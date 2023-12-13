import React from 'react';
import './styles/App.css';   
import HeaderText from './components/HeaderText';
import Header from './components/Header';
import ServicesCard from './components/ServicesCard';


function App() {
  

  return (
    <div className="App">
      <ServicesCard 
      icon={require("../src/assets/images/servis-card-icon-1.png")} 
      title={'Search doctor'} 
      subtitle={'Choose your doctor from thousands of specialist, general, and trusted hospitals'}
      />
    </div>
  );
}

export default App;