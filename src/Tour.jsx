import React from 'react';
import './App.css';
import { Parallax } from 'react-parallax';
import tourImage from './images/yc_2021.jpg';

export default function Tour() {
  return (
    <div>
      <h2>tour</h2>
      <p>no current tour dates</p>
      <Parallax
        blur={0}
        bgImage={tourImage}
        strength={200}
        className="parallax-tour"
      >
        <div style={{ height: 500 }}>
        </div>
      </Parallax>
    </div>
  );
}
