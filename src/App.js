
import { useState } from 'react';
import './App.css';
import HeaderContent from './components/header-content';
import Home from './components/home/home';
import Welcome from './components/welcome/welcome';
import Art from './components/art/art';
import Learn from './components/learn/learn';

function App() {
  const [component, goToComponent]= useState(<Welcome/>);
 function handleClickToHome(){
  goToComponent(<Home/>)
 }
 function handleClickToArt(){
  goToComponent(<Art/>)
 }
 function handleClickToLearn(){
  goToComponent(<Learn/>)
 }

  return (
    <div className="App">
      <header className="App-header">
     <HeaderContent name="Home" openComponent={handleClickToHome}/>
     <HeaderContent name="Art" openComponent={handleClickToArt}/>
     <HeaderContent name="Learn" openComponent={handleClickToLearn}/>
      </header>
    <div className='App-body'>
      <div className='component'>{component}</div>
    </div>
    </div>
    
  );
}

export default App;
