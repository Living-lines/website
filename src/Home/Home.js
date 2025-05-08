import React, { useState, useEffect } from 'react';
import './Home.css';

import videoFile1 from '../assets/video 3.mp4';
import videoFile2 from '../assets/video1.mp4';

import About from '../About/About';
import BrandCarousel from '../brand/brand.js';

import small1 from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/1.jpg';
import small2 from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/2.jpg';
import small3 from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/3.jpg';
import small4 from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/4.jpg';
import large1 from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/1.jpg';
import large2 from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/2.jpg';
import large3 from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/3.jpg';
import large4 from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/4.jpg';

import heroImage1 from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/1.jpg';
import heroImage2 from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/2.jpg';
import heroImage3 from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/3.jpg';
import heroImage4 from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/4.jpg';
import heroImage5 from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/s.png';
import heroImage6 from 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/7.jpg';
import { Link } from 'react-router-dom';
import Catalogs from '../Catalogs/Catalogs.js';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage1,
      heading: 'Eco-Friendly<br />Art for your space.',
      subQuote: 'Sustainable beauty that transforms discarded glass into stunning, eco-friendly art for your space.',
      textPosition: 'right',
    },
    {
      image: heroImage2,
      heading: 'Luxury Bathware<br />Experience.',
      subQuote: 'Indulge in the ultimate luxury with our premium bathware collection.',
      textPosition: 'left',
    },
    {
      image: heroImage3,
      heading: 'Modern Interiors<br />Reimagined.',
      subQuote: 'Upgrade your home with stylish, high-quality bath and home accessories.',
      textPosition: 'right',
    },
    {
      image: heroImage4,
      heading: 'Timeless Elegance<br />In Every Detail.',
      subQuote: 'Discover carefully crafted pieces that enhance your space with sophistication.',
      textPosition: 'left',
    },
    {
      image: heroImage5,  
      heading: 'Premium Tiles<br />For Every Floor.',
      subQuote: 'Elevate your interiors with our wide range of exquisite, durable tiles.',
      textPosition: 'right',
    },
    {
      image: heroImage6,  
      heading: 'Top-Notch<br />Electrical Appliances.',
      subQuote: 'Experience cutting-edge technology and performance with our curated range of electrical appliances.',
      textPosition: 'left',
    },
  ];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className='Home-container'>
      <section className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : 'hidden'} ${
              slide.textPosition === 'left' ? 'reverse' : ''
            }`}
          >
            <div className="text-content">
              <h1 dangerouslySetInnerHTML={{ __html: slide.heading }} />
              <p>{slide.subQuote}</p>
            </div>
            <div className="hero-image-container">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="hero-image" />
            </div>
          </div>
        ))}
      </section>

      <div className="video-section">
        <video autoPlay loop muted playsInline className="fullscreen-video">
          <source src={videoFile1} type="video/mp4" />
        </video>

        <video autoPlay loop muted playsInline className="fullscreen-video">
          <source src={videoFile2} type="video/mp4" />
        </video>
      </div>

      <About />
      <BrandCarousel />

      <section className="our-products">
        <h1 className="products-heading">
          Our Products <span className="underline"></span>
        </h1>
        <div className="products-container">
          <div className="product-column">
            <div className="product-card small-card">
              <img src={small1} alt="Product 1" className="product-image" />
              <Link to="/products" className="see-more-btn">
                Shop More
              </Link>
            </div>
            <div className="product-card large-card">
              <img src={large1} alt="Product 2" className="product-image" />
              <Link to="/products" className="see-more-btn">
                Shop More
              </Link>
            </div>
          </div>

          <div className="product-column">
            <div className="product-card large-card">
              <img src={large2} alt="Product 3" className="product-image" />
              <Link to="/products" className="see-more-btn">
                Shop More
              </Link>
            </div>
            <div className="product-card small-card">
              <img src={small2} alt="Product 4" className="product-image" />
              <Link to="/products" className="see-more-btn">
                Shop More
              </Link>
            </div>
          </div>

          <div className="product-column">
            <div className="product-card small-card">
              <img src={small3} alt="Product 5" className="product-image" />
              <Link to="/products" className="see-more-btn">
                Shop More
              </Link>
            </div>
            <div className="product-card large-card">
              <img src={large3} alt="Product 6" className="product-image" />
              <Link to="/products" className="see-more-btn">
                Shop More
              </Link>
            </div>
          </div>

          <div className="product-column">
            <div className="product-card large-card">
              <img src={large4} alt="Product 7" className="product-image" />
              <Link to="/products" className="see-more-btn">
                Shop More
              </Link>
            </div>
            <div className="product-card small-card">
              <img src={small4} alt="Product 8" className="product-image" />
              <Link to="/products" className="see-more-btn">
                Shop More
              </Link>
            </div>
          </div>
        </div>
        <Link to="/products" className="view-more-products">
          View More Products
        </Link>
      </section>

      <Catalogs/>

    </div>
  );
}

export default Home;