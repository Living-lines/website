import React, { useState } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const locations = [
    {
      src: require('../assets/location_1.jpg'), // Ensure the image path is correct
      alt: 'Location 1'
    },
    {
      src: require('../assets/location_2.jpg'), // Ensure the image path is correct
      alt: 'Location 2'
    },
    {
      src: require('../assets/location_3.jpg'), // Ensure the image path is correct
      alt: 'Location 3'
    }
  ];

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="image-container">
        <img src={locations[activeIndex].src} alt={locations[activeIndex].alt} />
      </div>
      <div className="dot-container">
        {locations.map((_, index) => (
          <div
            key={index}
            className={`dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
