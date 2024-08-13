import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Team from './pages/Team'
import Career from './pages/Career'
import Navbar from './components/Navbar'
import Dynamic from "./pages/Dynamic";

const App = () => {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:course" element={<Dynamic />} />

      </Routes>
    </Router>
  );
};

export default App;
