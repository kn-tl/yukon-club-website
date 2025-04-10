// SocialMediaIcons.jsx
import React from 'react';
import './Footer.css'
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
  { icon: faInstagram, url: "https://www.instagram.com/yukonclub/" },
  { icon: faSpotify, url: "https://open.spotify.com/artist/0ByvroCyJio8uBdV5caf5i?si=pMYWBvApSAuI_PZriRrccw" },
  { icon: faFacebookF, url: "https://www.facebook.com/YukonClubMusic" },
  { icon: faYoutube, url: "https://www.youtube.com/@yukonclub4050" },
  { icon: faSoundcloud, url: "https://soundcloud.com/yukon-club" },
  { icon: faApple, url: "https://music.apple.com/us/artist/yukon-club/1480261755" }
];

export default function SocialMediaIcons() {
  return (
    <>
      {socialMediaLinks.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.url}>
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </>
  );
}