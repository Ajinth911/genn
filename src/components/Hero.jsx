import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import LogoMark from './LogoMark';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="stagger-item delay-1">
        <Navbar />
      </div>

      {/* Main Title Area */}
      <div className="title-wrapper stagger-item delay-2">
        <h1 className="main-title">GenLab</h1>
        <div className="join-btn-wrapper">
          <button className="join-btn">
            <span className="join-text">JOIN WITH US</span>
            <div className="icon-circle">
              <ArrowRight size={16} color="black" />
            </div>
          </button>
        </div>
      </div>

      {/* Separator Line */}
      <div className="separator stagger-item delay-3" />

      {/* Tags and Subtitle */}
      <div className="middle-bar stagger-item delay-3">
        <div className="tags-container">
          <div className="tag"><span className="dot"></span> Launchpad<span className="dot"></span></div>
          <div className="tag"><span className="dot"></span> AI Forge<span className="dot"></span></div>
          <div className="tag"><span className="dot"></span> Brand Studio<span className="dot"></span></div>
        </div>
        <div className="subtitle-wrapper">
          <p className="subtitle">World's First Gen Z &amp; AI</p>
          <p className="subtitle">Creative Powerhouse</p>
        </div>
      </div>

      {/* Bottom Section - Capabilities */}
      <div className="bottom-section stagger-item delay-4">
        <div className="capabilities-col">
          <h2 className="cap-title">OUR<br />CAPABILITIES</h2>
          <p>
            We're a Gen Z team of strategists,<br />
            designers and AI builders.
          </p>
        </div>
        <div className="squares-wrapper-right">
          <div className="yellow-square-with-logo">
            <LogoMark color=" rgba(161, 191, 0, 1)" size="50%" />
          </div>
        </div>
      </div>

    </section>
  );
}
