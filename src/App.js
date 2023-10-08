import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CityInfo from './components/CityInfo';
import Main from './components/Main';
import LandMark from './components/LandMark';
import Photos from './components/Photos';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main/>} />
        <Route path='/city' element={<CityInfo/>} />
        <Route path='/landmarks' element={<LandMark/>} />
        <Route path='photos' element={<Photos/>} />
      </Routes>
    </Router>
  );
}

export default App;
