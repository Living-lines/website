import React, { useEffect, useState } from "react";
import "./experience.css";

const AboutUs = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let currentCount = 1;
    const interval = setInterval(() => {
      setCount(currentCount);
      if (currentCount >= 23) {
        clearInterval(interval);
      } else {
        currentCount++;
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-us">
      <div className="image-container">
        <div className="image-frame"></div>
        <img
          src="/bathroom.jpg" 
          alt="Bathroom Interior"
        />
        <div className="experience-badge">
          <h2 className="experience-number">{count}+</h2>
          <p>Year Experience</p>
        </div>
      </div>
      
      {/* Text Section */}
      <div className="text-section">
        <h4>Who we are</h4>
        <h2>Sai Balaji Marketing</h2>
        <p>
          Living Lines, where quality meets experience, and your vision finds its perfect expression.
          For over two decades, Living Lines has been an icon in the building materials industry,
          offering a diverse range of top-notch products in the retail and wholesale markets.
          Established 23 years ago, our showroom has become synonymous with trust, quality, and innovation.
        </p>
        <ul className="bullet-list">
          {["Innovate", "Decorate", "Elevate", "Your Interior"].map((item, index) => (
            <li key={index}>
              <span>✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;