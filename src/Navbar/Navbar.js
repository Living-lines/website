import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoImage from '../../src/assets/logo-living.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faGlobe } from '@fortawesome/free-solid-svg-icons';
import LoginModal from '../Login/LoginModal';
import { Link } from 'react-router-dom';
import About from '../About/About.js';
import videoFile1 from '../assets/video 3.mp4';
import videoFile2 from '../assets/video1.mp4'

// Import images
import heroImage1 from '../assets/1.jpg';
import heroImage2 from '../assets/2.jpg';
import heroImage3 from '../assets/3.jpg';
import heroImage4 from '../assets/4.jpg';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <div id="poda">
  <div className="glow"></div>
  <div className="darkBorderBg"></div>
  <div className="darkBorderBg"></div>
  <div className="darkBorderBg"></div>
  <div className="white"></div>
  <div className="border"></div>

  <div id="main">
    <input placeholder="Search..." type="text" name="text" className="input1" />
    <div id="input-mask"></div>
    <div id="pink-mask"></div>
    <div className="filterBorder"></div>
    <div id="filter-icon">
      <svg
        preserveAspectRatio="none"
        height="27"
        width="27"
        viewBox="4.8 4.56 14.832 15.408"
        fill="none"
      >
        <path
          d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
          stroke="#d6d6e6"
          strokeWidth="1"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div id="search-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        className="feather feather-search"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        viewBox="0 0 24 24"
      >
        <circle stroke="url(#search)" r="8" cy="11" cx="11" />
        <line stroke="url(#searchl)" y2="16.65" y1="22" x2="16.65" x1="22" />
        <defs>
          <linearGradient gradientTransform="rotate(50)" id="search">
            <stop stopColor="#f8e7f8" offset="0%" />
            <stop stopColor="#b6a9b7" offset="50%" />
          </linearGradient>
          <linearGradient id="searchl">
            <stop stopColor="#b6a9b7" offset="0%" />
            <stop stopColor="#837484" offset="50%" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
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
          <a href="#" className="nav-item">OUR PRODUCTS</a>
          <Link to="/about" className="nav-item">ABOUT</Link>
          <a href="#" className="nav-item">CONTACT</a>
          <a href="#" className="nav-item">CATALOGS</a>
          <a href="#" className="nav-item">BRANDS</a>
          <div className="menu-icon">☰</div>
        </nav>

        <section className="hero">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : 'hidden'} ${slide.textPosition === 'left' ? 'reverse' : ''}`}
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

        <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
  

      <div className="video-section">
        <video autoPlay loop muted playsInline className="fullscreen-video">
          <source src={videoFile1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <video autoPlay loop muted playsInline className="fullscreen-video">
          <source src={videoFile2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      <h1 className='highlight-about'>About Us</h1>
      <About />
    </div>
  );
}

export default Navbar;
