import React from "react";
import './App.css'; // Zorg ervoor dat je CSS geïmporteerd is als je stijlen hebt gedefinieerd
import { Parallax } from 'react-parallax';
import summumImage from './images/Summum_Single.jpg';

export default function Imageblock() {
  return (
    <div className="image-container">
      <Parallax
        blur={0}
        bgImage={summumImage}
        strength={200}
        style={{ height: '500px' }} // Je kunt deze waarde aanpassen naar behoefte
      >
        <div style={{ height: '500px' }}> {/* Deze div zorgt voor de daadwerkelijke hoogte van de Parallax container */}
        </div>
      </Parallax>
    </div>
  );
}
