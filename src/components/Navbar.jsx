import React, { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import LogoMark from './LogoMark';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} color="#E0E0E0" /> : <Menu size={20} color="#E0E0E0" />}
        </button>

        <button className="cta-btn desktop-cta">
          Shabdam AI
          <Sparkles size={16} color="black" style={{ marginLeft: '8px' }} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>People</a>
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Launchpad</a>
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Product</a>
          <a href="#" className="nav-link" onClick={() => setIsMenuOpen(false)}>Certificate</a>
          
          <button className="cta-btn mobile-cta">
            Shabdam AI
            <Sparkles size={16} color="black" style={{ marginLeft: '8px' }} />
          </button>
        </div>
      )}
    </nav>
  );
}


