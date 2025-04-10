// Navbar.jsx
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './App.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Voor hamburger en sluiten iconen
import SocialMediaIcons from "./SocialMediaIcons";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="nav">
      <h1 className="nav--h1"><Link to="/">yukon club</Link></h1>
      <div className="nav--hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
        {isNavExpanded ? <FaTimes /> : <FaBars />}
      </div>
      <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        <h4 className="nav--h4"><Link to="/music">music</Link></h4>
        <h4 className="nav--h4"><Link to="/videos">videos</Link></h4>
        <h4 className="nav--h4"><Link to="/tour">tour</Link></h4>
        <h4 className="nav--h4"><Link to="/contact">contact</Link></h4>
      </div>
      <div className="social-icons-header">
        <SocialMediaIcons />
      </div>
    </nav>
  );
}
