// Navbar.jsx
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './App.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Voor hamburger en sluiten iconen
import SocialMediaIcons from "./SocialMediaIcons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: "/music", label: "MUSIC" },
    { path: "/videos", label: "VIDEOS" },
    { path: "/tour", label: "TOUR" },
    { path: "/contact", label: "CONTACT" }
  ];

  return (
    <nav className="bg-[#242424] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Logo and Menu Container */}
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Logo */}
          <Link to="/" className="font-larsseit-medium text-2xl text-[#646cff] hover:text-[#535bf2]">
            YUKON CLUB
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#646cff] hover:text-[#535bf2] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link text-[#646cff] hover:text-[#535bf2] text-lg"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4`}>
          <div className="flex flex-col items-center space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link text-[#646cff] hover:text-[#535bf2] text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4">
              <SocialMediaIcons />
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="hidden md:block mt-4 py-4 border-t border-[#646cff]/20">
        <div className="max-w-7xl mx-auto px-4">
          <SocialMediaIcons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
