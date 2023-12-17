import React from 'react';
import './styles/App.css';   
import ArticlesCard from './components/ArticlesCars';







function App() {
  

  return (
    <div className="App">
      <ArticlesCard  title={'Disease detection, check up in the laboratory'} subtitle={'In this case, the role of the health laboratory is very important to doa disease detection...'} onClick={function (): void {
        throw new Error('Function not implemented.');
      } }/>
    </div>
  );
}

export default App;