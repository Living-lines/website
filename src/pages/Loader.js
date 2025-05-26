import React from 'react';
import './Loader.css';
import logoImage from '../../src/assets/logo.jpg';

const Loader = () => (
  <div className="loader-overlay">
    <div className="loader-content">
      <img src={logoImage} alt="Logo" className="loader-logo" />
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