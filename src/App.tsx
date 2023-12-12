import React from 'react';
import './App.css'; // Импортируйте файл со стилями

function App() {
  const textStyle: React.CSSProperties = {
    fontFamily: 'MulishRegular, sans-serif', // Используйте название шрифта, заданное в @font-face
    fontSize: '48px', // Ваш размер шрифта
     // Указывается в @font-face, но может быть переопределено здесь
    
  };

  return (
    <div className="App">
      <p style={textStyle}>Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
    </div>
  );
}

export default App;