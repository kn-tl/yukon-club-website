import React from 'react';
import './App.css';

export default function Music() {
  return (
    <div>
      <h2>music</h2>
      <iframe title="Yukon Club Music Player" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/artist/5K7LKJ1a5aHQaWuRHJQYxL?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </div>
  );
}

