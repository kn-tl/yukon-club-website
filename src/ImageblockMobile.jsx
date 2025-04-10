import React from "react"
import { Parallax } from 'react-parallax';

export default function ImageblockMobile() {
  return (
    <div className="image-container-mobile">
      <Parallax
        blur={0}
        bgImage="./images/Summum_Single.jpg" 
        strength={500}
      >
      </Parallax>
    </div>
  );
}
