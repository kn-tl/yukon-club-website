import React from 'react';
import './App.css';
import { Parallax } from 'react-parallax';

export default function Tour() {
  return (
    <div>
      <h2>tour</h2>
      <p>no current tour dates</p>
      <Parallax
        blur={0}
        bgImage={process.env.PUBLIC_URL + '/images/yc_2021.jpg'}
        strength={50}
        className="parallax-tour"
      >
      </Parallax>
    </div>
  );
}
