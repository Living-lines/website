import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Navbar.css';
import logoImage from '../../src/assets/logo.jpg';
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



import small1 from '../../src/products_images/small1.jpg';
import small2 from '../../src/products_images/small2.jpg';
import small3 from '../../src/products_images/small3.jpg';
import small4 from '../../src/products_images/small4.jpg';
import large1 from '../../src/products_images/large1.jpg';
import large2 from '../../src/products_images/large2.jpg';
import large3 from '../../src/products_images/large3.jpg';
import large4 from '../../src/products_images/large4.jpg';

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
                <svg preserveAspectRatio="none" height="27" width="27" viewBox="4.8 4.56 14.832 15.408" fill="none">
                  <path d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z" stroke="#d6d6e6" strokeWidth="1" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div id="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" className="feather feather-search" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24">
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

          {/* <nav className="nav">
            <a href="#" onClick={() => setIsModalOpen(true)} className="nav-item">
              <FontAwesomeIcon icon={faUser} className="nav-icon" />
              LOGIN
            </a>
            <a href="#" className="nav-item">
              <FontAwesomeIcon icon={faGlobe} className="nav-icon" />
              SHOWROOM 360
            </a>
          </nav> */}
        </header>

        <nav className="main-nav">
          <Link to="/" className="nav-item">HOME</Link>
          <Link to="/about" className="nav-item">ABOUT</Link>
          <Link to="/products" className="nav-item">OUR PRODUCTS</Link>
          <Link to="/Catalogs" className='nav-item'>CATALOGS</Link>
          <Link to="/contact" className="nav-item">CONTACT</Link>
          <Link to="#" className="nav-item">CATALOGS</Link>
          <Link to="/brands" className="nav-item">BRANDS</Link> {/* Changed to Link */}

          <div className="menu-icon">☰</div>
        </nav>

        <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>

    </div>
  );
}




export default Navbar;