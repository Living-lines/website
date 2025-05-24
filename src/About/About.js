import React, { useEffect, useState } from 'react';
import './About.css';
import location_1 from '../assets/location_1.jpg';
import location_2 from '../assets/location_2.jpg';
import Timeline from './timeline/timeline';

const AboutUs = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 25;
    const duration = 1000;
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="about-horizontal-wrapper">
     

      <div className="about-3column-layout">
        {/* LEFT COLUMN */}
        <div className="column left-column">
          <img src={location_1} alt="location_1" className="image-large" />
          <div className="quality-card">
            <p>Maintaining<br />quality & quantity</p>
          </div>
        </div>

        {/* MIDDLE COLUMN */}
        <div className="column middle-column">
          <div className="experience-card">
            <span className="years-count">{count}</span>
            <p className="experience-text">Years of Experience &<br />Trusted Customers</p>
          </div>
          <img src={location_2} alt="location_2" className="image-large" />
        </div>

        {/* RIGHT COLUMN */}
        <div className="column right-column">
          <div className="brand-badge">LIVING LINES</div>
          <h2 className="company-name">Sai Balaji Marketing</h2>
          <h3 className="about-subtitle">About</h3>
          <p className="about-text">
            Living Lines, where quality meets experience, and your vision finds its perfect expression.
            For over two decades, Living Lines has been an icon in the building materials industry,
            offering a diverse range of top-notch products in the retail and wholesale markets.
            Established 23 years ago, our showroom has become synonymous with trust, quality, and innovation.
          </p>
        </div>
      </div>
      <Timeline/>
    </div>
  );
};

export default AboutUs;
