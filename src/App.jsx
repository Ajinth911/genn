import React, { useState } from 'react';
import Hero from './components/Hero';
import SplashScreen from './components/SplashScreen';
import GridTrail from './components/GridTrail';
import bgImage from './assets/bg.png';
import './index.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [heroVisible, setHeroVisible] = useState(false);

  const handleSplashComplete = () => {
    setShowSplash(false);
    // Start hero fade-in immediately as splash completes.
    setHeroVisible(true);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          backgroundColor: '#0a0a0a',
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <GridTrail />
        <div
          className={heroVisible ? 'hero-enter-done' : 'hero-enter'}
          style={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}
        >
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
