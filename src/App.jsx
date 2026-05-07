import React, { useState } from 'react';
import Hero from './components/Hero';
import SplashScreen from './components/SplashScreen';
import GridTrail from './components/GridTrail';
import bgImage from './assets/bg.png';
import './index.css';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', backgroundColor: '#0a0a0a', backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <GridTrail />
        <div
          className="animate-fade-in"
          style={{ position: 'relative', zIndex: 1, overflow: 'hidden', minHeight: '100vh' }}
        >
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;

