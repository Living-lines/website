import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css';
import logoImage from '../../src/assets/logo-living.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGlobe } from '@fortawesome/free-solid-svg-icons';
import LoginModal from '../Login/LoginModal';
import videoFile1 from '../assets/video 3.mp4';
import videoFile2 from '../assets/video1.mp4';

// Images
import heroImage1 from '../assets/1.jpg';
import heroImage2 from '../assets/2.jpg';
import heroImage3 from '../assets/3.jpg';
import heroImage4 from '../assets/4.jpg';
import About from '../About/About';
import BrandCarousel from '../brand/brand.js';
import Footer from '../footer/Footer.js';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage1,
      heading: 'Eco-Friendly<br />Art for your space.',
      subQuote: 'Sustainable beauty that transforms discarded glass into stunning, eco-friendly art for your space.',
      textPosition: 'right'
    },
    {
      image: heroImage2,
      heading: 'Luxury Bathware<br />Experience.',
      subQuote: 'Indulge in the ultimate luxury with our premium bathware collection.',
      textPosition: 'left'
    },
    {
      image: heroImage3,
      heading: 'Modern Interiors<br />Reimagined.',
      subQuote: 'Upgrade your home with stylish, high-quality bath and home accessories.',
      textPosition: 'right'
    },
    {
      image: heroImage4,
      heading: 'Timeless Elegance<br />In Every Detail.',
      subQuote: 'Discover carefully crafted pieces that enhance your space with sophistication.',
      textPosition: 'left'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="abc-emporio">
        <header className="header">
          <div className="logo-section">
            <img src={logoImage} className="logo" alt="Living Space Logo" />
            <p>The Complete Bathware</p>
          </div>

          <nav className="nav">
            <a href="#" onClick={() => setIsModalOpen(true)} className="nav-item">
              <FontAwesomeIcon icon={faUser} className="nav-icon" />
              LOGIN
            </a>
            <a href="#" className="nav-item">
              <FontAwesomeIcon icon={faGlobe} className="nav-icon" />
              SHOWROOM 360
            </a>
          </nav>
        </header>

        <nav className="main-nav">
          <Link to="/" className="nav-item">HOME</Link>
          <Link to="/about" className="nav-item">ABOUT</Link>
          <Link to="#" className="nav-item">OUR PRODUCTS</Link>
          <Link to="#" className="nav-item">CONTACT</Link>
          <Link to="#" className="nav-item">CATALOGS</Link>

          {/* Use Link for Brands Page */}
          <Link to="/brands" className="nav-item">BRANDS</Link> {/* Changed to Link */}

          <div className="menu-icon">☰</div>
        </nav>

        <section className="hero">
          {slides.map((slide, index) => (
            <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : 'hidden'} ${slide.textPosition === 'left' ? 'reverse' : ''}`}>
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

        <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>

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
      <Footer />
    </div>
  );
}

export default Navbar;
