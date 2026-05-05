import React from 'react';
import { ArrowRight } from 'lucide-react';
import LogoMark from './LogoMark';
import './Hero.css';


export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">

        {/* Main Title Area */}
        <div className="title-wrapper">
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
        <div className="separator" />

        {/* Tags and Subtitle */}
        <div className="middle-bar">
          <div className="tags-container">
            <div className="tag"><span className="dot"></span> Launchpad</div>
            <div className="tag"><span className="dot"></span> AI Forge</div>
            <div className="tag"><span className="dot"></span> Brand Studio</div>
          </div>

          <div className="subtitle-wrapper">
            <p className="subtitle">World's First Gen Z & AI</p>
            <p className="subtitle">Creative Powerhouse</p>
          </div>
        </div>

        {/* Bottom Section - Capabilities */}
        <div className="bottom-section">
          <div className="capabilities-col">
            <h2 className="cap-title">OUR<br />CAPABILITIES</h2>
            <p className="cap-desc">
              We're a Gen Z team of strategists,<br />
              designers and AI builders.
            </p>
          </div>


          <div className="squares-wrapper-right">
            <div className="yellow-square-with-logo">
              <LogoMark color="#b0d600" size={60} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}


