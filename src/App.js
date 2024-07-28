
import './App.css';
import HeaderContent from './components/header-content';


function App() {
  return (
    <div className="App">
      <header className="App-header">
     <HeaderContent name="Home"/>
     <HeaderContent name="Art"/>
     <HeaderContent name="Learn"/>
      </header>
    </div>
  );
}

export default App;
