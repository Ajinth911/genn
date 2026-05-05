import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PixelTrail from './components/PixelTrail';
import './index.css';


function App() {
  return (
    <div className="animate-fade-in" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <PixelTrail
        gridSize={14}
        trailSize={0.05}
        maxAge={100}
        interpolate={1.5}
        color="#D7FF00"
        gooeyFilter={{ id: "custom-goo-filter", strength: 2 }}
        gooeyEnabled={false}
        gooStrength={2}

      />
      <div style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
