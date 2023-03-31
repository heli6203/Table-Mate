import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";





function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
       
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
          
     
    
  
        </Routes>
         </Router>
   
    </div>
  );
}

export default App;
