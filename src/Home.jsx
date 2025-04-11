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
    <main className="main-container">
      <div className="content-section">
        {isMobile ? (
          <div className="mt-16">
            <ImageblockMobile />
          </div>
        ) : (
          <div className="mt-16">
            <Imageblock />
          </div>
        )}
        <Newsletter />
      </div>
    </main>
  );
}

export default Home;
