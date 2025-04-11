// SocialMediaIcons.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faSpotify,
  faFacebookF,
  faApple,
  faYoutube,
  faSoundcloud
} from '@fortawesome/free-brands-svg-icons';

const socialMediaLinks = [
  { icon: faInstagram, url: "https://www.instagram.com/yukonclub/", label: "Instagram" },
  { icon: faSpotify, url: "https://open.spotify.com/artist/0ByvroCyJio8uBdV5caf5i?si=pMYWBvApSAuI_PZriRrccw", label: "Spotify" },
  { icon: faFacebookF, url: "https://www.facebook.com/YukonClubMusic", label: "Facebook" },
  { icon: faYoutube, url: "https://www.youtube.com/@yukonclub4050", label: "YouTube" },
  { icon: faSoundcloud, url: "https://soundcloud.com/yukon-club", label: "SoundCloud" },
  { icon: faApple, url: "https://music.apple.com/us/artist/yukon-club/1480261755", label: "Apple Music" }
];

export default function SocialMediaIcons() {
  return (
    <div className="social-icons">
      {socialMediaLinks.map((link, index) => (
        <a 
          key={index} 
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label={link.label}
          className="social-icon"
        >
          <FontAwesomeIcon icon={link.icon} size="lg" />
        </a>
      ))}
    </div>
  );
}