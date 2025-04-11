// Navbar.jsx
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './App.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Voor hamburger en sluiten iconen
import SocialMediaIcons from "./SocialMediaIcons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#242424]">
      {/* Logo */}
      <div className="text-center pt-4">
        <Link to="/" className="font-larsseit-medium text-2xl text-[#646cff] hover:text-[#535bf2]">
          YUKON CLUB
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-center mt-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-[#646cff] hover:text-[#535bf2] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navigation Links - Desktop & Mobile */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:block text-center mt-4`}>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link to="/music" className="nav-link text-[#646cff] hover:text-[#535bf2]">MUSIC</Link>
          <Link to="/videos" className="nav-link text-[#646cff] hover:text-[#535bf2]">VIDEOS</Link>
          <Link to="/tour" className="nav-link text-[#646cff] hover:text-[#535bf2]">TOUR</Link>
          <Link to="/contact" className="nav-link text-[#646cff] hover:text-[#535bf2]">CONTACT</Link>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-4 pt-4 border-t border-[#646cff]/20">
        <SocialMediaIcons />
      </div>
    </nav>
  );
};

export default Navbar;
