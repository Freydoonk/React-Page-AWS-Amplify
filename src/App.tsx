import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Home from './pages/home';
import PremiumContent from './pages/premiumContent';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavLink className='content' to='/'>Home</NavLink>
          <NavLink className='content' to='/about'>About</NavLink>
          <NavLink className='content' to='/premium'>Premium Content</NavLink>
        </div>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/premium' element={<PremiumContent />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
