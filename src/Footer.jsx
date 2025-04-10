import React from 'react';
import './index.css'
import './Footer.css'
import SocialMediaIcons from './SocialMediaIcons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <SocialMediaIcons />
      </div>
      <div className="copyright">
        © yukon club 2025
      </div>
      <div className="policies">
        <a href="/cookie-policy">cookie policy</a> | <a href="/privacy-policy">privacy policy</a>
      </div>
    </footer>
  );
}




