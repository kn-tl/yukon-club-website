import React, { useState, useEffect } from 'react';
import Imageblock from './Imageblock';
import ImageblockMobile from './ImageblockMobile';
import Newsletter from './Newsletter';

function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {isMobile ? (
        <>
          <div style={{ height: '100px', overflow: 'hidden' }}>
          <ImageblockMobile />
          </div>
          <Newsletter /> {/* Direct zichtbaar */}
        </>
      ) : (
        <>
          <Imageblock /> {/* Volledige imageblock inclusief video */}
          <Newsletter />
        </>
      )}
    </div>
  );
}

export default Home;
