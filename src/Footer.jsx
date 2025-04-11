import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-8 border-t border-[#646cff]/20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="text-center my-2">
          © yukon club 2025
        </div>
        <div className="text-center my-2">
          <Link to="/cookie-policy" className="mx-2">cookie policy</Link> | <Link to="/privacy-policy" className="mx-2">privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}




