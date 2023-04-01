import Navbar from './components/Navbar';
import './App.css';
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import About from './pages/About';
import Hobbies from './pages/Hobbies';
import Skills from './pages/Skills';
import Qualifications from './pages/Qualifications';
import Achievements from './pages/Achievements';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Navbar/>
 <Routes>
     <Route path = "About" element={<About/>}/>
     <Route path = "Hobbies" element = {<Hobbies/>}/>
     <Route path = "Skills" element = {<Skills/>}/>
     <Route path="Qualifications" element= {<Qualifications/>}/>
     <Route path = "Achievements" element = {<Achievements/>}/>
 </Routes>
 </BrowserRouter>
  </div>
  );
}

export default App;
