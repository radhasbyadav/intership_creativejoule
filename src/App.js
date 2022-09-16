import React from 'react';
import Img1 from './image/imgep.jpeg' 
import Header from './components/common/Header/Header'
import './App.css';

function App() {
  return (
    
    <div className="App">
      
      <Header />
      <img src={Img1} alt="" />
      
    </div>
    
  );
}

export default App;