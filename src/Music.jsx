import React from 'react';
import './App.css'

function Music() {
  return (
    <div>
      <h2>music</h2>
      <div className="spotify-embed">
        <iframe
          src="https://open.spotify.com/embed/artist/0ByvroCyJio8uBdV5caf5i?utm_source=generator" 
          allowtransparency="true" 
          allow="encrypted-media">
        </iframe>
      </div>
    </div>
  );
}

export default Music;

