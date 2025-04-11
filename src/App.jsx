import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Music from './Music';
import Videos from './Videos';
import Tour from './Tour';
import Contact from './Contact';
import Footer from './Footer';
import Cookies from './Cookies';
import Privacy from './Privacy';

function App() {
  return (
    <Router basename="/yukon-club-website">
      <div className="flex flex-col min-h-screen bg-[#242424]">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/music" element={<Music />} /> 
            <Route path="/videos" element={<Videos />} /> 
            <Route path="/tour" element={<Tour />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cookie-policy" element={<Cookies />} />
            <Route path="/privacy-policy" element={<Privacy />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
