import './App.css';
import Home from './Pages/Home/Home';
import Game from './Pages/Game/Game';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/game' element={<Game/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
