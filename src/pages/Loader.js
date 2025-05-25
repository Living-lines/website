import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader">
        <div className="loader-heading-wrapper">
          <div className="crown-decor">
            <span className="crown-line crown-left"></span>
            <span className="crown-spike"></span>
            <span className="crown-line crown-right"></span>
          </div>
          <div className="loader-heading">Living Lines</div>
          <div className="decor-line"></div>
        </div>

        <div className="uiverse-loader"></div>
      </div>
    </div>
  );
};

export default Loader;