import React from 'react';
import './App.css'

export default function Videos() {
  // Lijst met video ID's
  const videoIds = [
    'Wx8CAau_gaI', // Voorbeeld video ID's
    'JeKwzmyY6MI',
    'UVd6lUVFVKA'
  ];

  return (
    <div className="videos-container">
      <h2>videos</h2>
      {/* Map door de videoIds array en render een iframe voor elke video */}
      {videoIds.map((id) => (
        <div className="video" key={id}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}