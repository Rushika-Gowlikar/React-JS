
import { useState } from 'react';
import './App.css';
import HeaderContent from './components/header-content';
import Home from './components/home/home';
import Welcome from './components/welcome/welcome';
// import Art from './components/art/art';
import Learn from './components/learn/learn';
import Game from './components/game/game';
import NotePad from './components/art/notepad'

function App() {
  const [component, goToComponent]= useState(<Welcome/>);
 function handleClickToHome(){
  goToComponent(<Home/>)
 }
 function handleClickToNotePad(){
  goToComponent(<NotePad/>)
 }
 function handleClickToLearn(){
  goToComponent(<Learn/>)
 }
 function handleClickToGame(){
  goToComponent(<Game/>)
 }

  return (
    <div className="App">
      <header className="App-header">
     <HeaderContent name="Home" openComponent={handleClickToHome}/>
     <HeaderContent name="NotePad" openComponent={handleClickToNotePad}/>
     <HeaderContent name="Learn" openComponent={handleClickToLearn}/>
     <HeaderContent name="Game" openComponent={handleClickToGame}/>
      </header>
    <div className='App-body'>
      <div className='component'>{component}</div>
    </div>
    </div>
    
  );
}

export default App;
