import React from "react";
import './App.css'; // Zorg ervoor dat je CSS geïmporteerd is als je stijlen hebt gedefinieerd
import { Parallax } from 'react-parallax';

export default function Imageblock() {
  return (
    <div className="image-container">
      <Parallax
        blur={0}
        bgImage="./images/Summum_Single.jpg"
        strength={500}
        style={{ height: '500px' }} // Je kunt deze waarde aanpassen naar behoefte
      >
        <div style={{ height: '500px' }}> {/* Deze div zorgt voor de daadwerkelijke hoogte van de Parallax container */}
        </div>
      </Parallax>
    </div>
  );
}
