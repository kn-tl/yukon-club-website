import React from 'react';
import { Parallax } from 'react-parallax';
import summumImage from './images/Summum_Single.jpg';

const ImageblockMobile = () => {
    return (
        <div>
            <Parallax
                bgImage={summumImage}
                strength={200}
            >
                <div style={{ height: 500 }}>
                </div>
            </Parallax>
        </div>
    );
};

export default ImageblockMobile;
