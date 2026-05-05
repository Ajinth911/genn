import React from 'react';
import { Sparkles } from 'lucide-react';
import LogoMark from './LogoMark';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav-container">
      {/* Logo Circle */}
      <div className="logo-circle">
        <LogoMark color="white" size={32} />
      </div>

      {/* Main Nav Pill */}
      <div className="nav-pill">
        <div className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">People</a>
          <a href="#" className="nav-link">Launchpad</a>
          <a href="#" className="nav-link">Product</a>
          <a href="#" className="nav-link">Certificate</a>
        </div>
        
        <button className="cta-btn">
          Shabdam AI
          <Sparkles size={16} color="black" style={{ marginLeft: '8px' }} />
        </button>
      </div>
    </nav>
  );
}


