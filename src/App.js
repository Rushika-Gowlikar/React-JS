
import './App.css';
import HeaderContent from './components/header-content';
import Home from './components/home/home';
// import Art from './components/art/art';
import Learn from './components/learn/learn';
import Game from './components/game/game';
import NotePad from './components/art/notepad'
import { Routes, Route } from 'react-router-dom';
import ProjectManagement from './components/project-management/management';
function App() {
  return (
    <div className="App">

      <header className="App-header">
        <HeaderContent name="Home" to='/gotoHome' />
        <HeaderContent name="NotePad" to='/gotoNotepad' />
        <HeaderContent name="Learn" to='/gotoLearn' />
        <HeaderContent name="Game" to='/gotoGame' />
      </header>

      <Routes>
        <Route path='/gotoHome' element={<Home />}></Route>
        <Route path='/gotoNotepad' element={<NotePad />}></Route>
        <Route path='/gotoLearn' element={<Learn />}></Route>
        <Route path='/gotoGame' element={<Game />}></Route>

        <Route path="*" element={<ProjectManagement />} />
      </Routes>
    </div>



  );
}

export default App;
