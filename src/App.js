
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './Components/About';
import Project from './Components/Project';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Skills from './Components/Skillspage';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/skills" element={<Skills/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
