import React from 'react';
import './Loader.css';
import logoImage from '../../src/assets/logo.jpg';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader">
        <img src={logoImage} alt="Living Lines Logo" className="loader-logo" />

        <div class="wrapper">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
