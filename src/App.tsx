import React from 'react';
import './styles/App.css';   
import HeaderText from './components/HeaderText';
import Header from './components/Header';


function App() {
  

  return (
    <div className="App">
      <Header/>
      {/* <HeaderText title={'Virtual healthcare for you'} subtitle={'Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone'} buttonText={'Consult today'}/> */}
    </div>
  );
}

export default App;