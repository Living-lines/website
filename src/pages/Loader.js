import React from 'react';
import './Loader.css';
import logoImageWithoutBackground from '../../src/assets/final-logo.png';

const Loader = () => (
  <div className="loader-overlay">
    <div className="loader-content">
      <img src={logoImageWithoutBackground} alt="Logo" className="loader-logo" />
      <div className="bouncing-balls">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  </div>
);

export default Loader;