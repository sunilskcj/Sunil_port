
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog';

function App() {



  return (<BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
      <Route path="/Blog" element={<Blog />}></Route>
       
        
      
    </Routes>
    
    <Footer />
  </BrowserRouter>
    
  );
}
  

export default App;
