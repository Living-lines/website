import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import image1 from '../assets/taps123.jpg';
import image2 from '../assets/taps51.jpg';
import BrandCarousel from '../brand/brand.js';
import { Link } from 'react-router-dom';
import Catalogs from '../Catalogs/Catalogs.js';

const large2 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/tilespr.jpg';
const small2 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/plumpr.jpg';
const small3 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/tappr.jpg';
const small4 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/compr.jpg';
const large1 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/switchpr.jpg';
const small1 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/ligthspr.jpg';
const large3 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/showerpr.jpg';
const large4 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/frupr.jpg';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImage1 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/1.jpg';
  const heroImage2 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/2.jpg';
  const heroImage3 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/3.jpg';
  const heroImage4 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/switch.jpg';
  const heroImage5 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/tiles.png';
  const heroImage6 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/l7.jpg';

  const videoFile1 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/video 3.mp4';
  const videoFile2 = 'https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/video1.mp4';

  const slides = [
    { image: heroImage1, heading: 'Designs that always flow.', subQuote: 'crafted for every style from bold to timeless', textPosition: 'right' },
    { image: heroImage2, heading: 'Luxury Bathware Experience.', subQuote: 'Indulge in the ultimate luxury with our premium bathware collection.', textPosition: 'left' },
    { image: heroImage3, heading: 'Modern Interiors Reimagined.', subQuote: 'Upgrade your home with stylish, high-quality bath and home accessories.', textPosition: 'right' },
    { image: heroImage4, heading: 'Refined control with Definition.', subQuote: 'Switches to control and add beauty to your home.', textPosition: 'left' },
    { image: heroImage5, heading: 'Premium & Perfect Tiles for Every Floor.', subQuote: 'wide range of exquisite, durable and designer tiles.', textPosition: 'right' },
    { image: heroImage6, heading: 'Brighten every corner with innovation.', subQuote: 'From lights to switches discover an elite collection to illuminate, protect and perform.', textPosition: 'left' }
  ];

  const autoSlideRef = useRef(null);

  useEffect(() => {
    function startAuto() {
      stopAuto();
      autoSlideRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 5000);
    }
    function stopAuto() {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
        autoSlideRef.current = null;
      }
    }
    function onVisibility() {
      if (document.hidden) stopAuto();
      else startAuto();
    }
    const heroEl = document.getElementById('heroSection');
    let observer;
    if ('IntersectionObserver' in window && heroEl) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) startAuto();
            else stopAuto();
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(heroEl);
    }
    document.addEventListener('visibilitychange', onVisibility);
    startAuto();
    return () => {
      stopAuto();
      document.removeEventListener('visibilitychange', onVisibility);
      if (observer && heroEl) observer.unobserve(heroEl);
    };
  }, [slides.length]);

  const featureItems = [
    'Pumps and Motors', 'Plumbing', 'Sanitary', 'Faucets', 'Bath Tubs', 'Shower panels',
    'Sinks', 'Tiles and Adhesives', 'Electrical', 'LED Lights', 'Chandeliers', 'Switches',
    'Fans', 'Bath Accessories', 'Mirrors and Vanities', 'Paints', 'Plywood', 'Furniture',
    'Interior decors', 'Artifacts', 'Geysers & Purifiers'
  ];
  const [numCols, setNumCols] = useState(window.innerWidth >= 1024 ? 3 : 2);

  useEffect(() => {
    function handleResize() {
      setNumCols(window.innerWidth >= 1024 ? 3 : 2);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = featureItems.length;
  const rowsPerCol = Math.ceil(totalItems / numCols);
  const columns = Array.from({ length: numCols }, (_, colIndex) => {
    const start = colIndex * rowsPerCol;
    const end = start + rowsPerCol;
    return featureItems.slice(start, end);
  });

  return (
    <div className="Home-container">
      <section className="homepage-hero-section" id="heroSection">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`homepage-hero-slide ${index === currentSlide ? 'active' : 'hidden'} ${slide.textPosition === 'left' ? 'reverse' : ''}`}
          >
            <div className="homepage-hero-left">
              <div className="homepage-hero-text">
                <h1 dangerouslySetInnerHTML={{ __html: `${slide.heading}` }} />
                <p>{slide.subQuote}</p>
              </div>
            </div>
            <div className="homepage-hero-right">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="homepage-hero-image" />
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

      <div className="about-us-wrapper">
        <section className="interior-split-section">
          <div className="interior-left-rotation">
            <div className="wrapper">
              <div className="inner" style={{ '--quantity': 8 }}>
                {['a1.jpg', 'a2.jpg', 'a3.jpg', 'a4.jpg', 'a5.jpg', 'a6.jpg', 'a7.jpg', 'a8.jpg'].map((img, index) => (
                  <div className="card1" key={index} style={{ '--index': index, '--color-card': '242, 102, 36' }}>
                    <img className="img1" src={`/assets/${img}`} alt={`a${index}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="feature-wrapper-modern">
            <h1 className="feature-heading-modern">
              Everything You Desire<br />Under One Roof
            </h1>
            <div className="feature-grid-modern">
              {columns.map((colItems, colIndex) => (
                <div key={colIndex} className="feature-column">
                  {colItems.map((item, i) => (
                    <div key={i} className="feature-card-modern">
                      <span className="feature-icon-dot" />
                      <p className="feature-text">{item}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <section className="originals-section">
        <div className="originals-container">
          <div className="first-line">
            <img src={image1} alt="Original Taps" className="originals-image first-image" draggable={false} />
            <h1 className="originals-text-line">THE ORIGINALS</h1>
          </div>
          <h2 className="originals-text-line second-line">THE BEST</h2>
          <div className="third-line">
            <div className="curve-svg-wrapper">
              <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="curve-svg" aria-hidden="true" focusable="false">
                <path d="M0 20 C30 0, 70 40, 100 20 S170 0, 200 20" stroke="#b8860b" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="originals-text-line third-line-text">THE LATEST</h3>
            <img src={image2} alt="Latest Taps" className="second-image1" draggable={false} />
          </div>
        </div>
      </section>

      <BrandCarousel />

      <section className="our-products">
        <h1 className="products-heading">
          Our Products <span className="underline"></span>
        </h1>
        <div className="products-container">
          <div className="product-column">
            <div className="product-card small-card">
              <img src={small1} alt="Product 1" className="product-image" />
              <Link to="/products" className="see-more-btn">Shop More</Link>
            </div>
            <div className="product-card large-card">
              <img src={large1} alt="Product 2" className="product-image" />
              <Link to="/products" className="see-more-btn">Shop More</Link>
            </div>
          </div>

          <div className="product-column">
            <div className="product-card large-card">
              <img src={large2} alt="Product 3" className="product-image" />
              <Link to="/products" className="see-more-btn">Shop More</Link>
            </div>
            <div className="product-card small-card">
              <img src={small2} alt="Product 4" className="product-image" />
              <Link to="/products" className="see-more-btn">Shop More</Link>
            </div>
          </div>

          <div className="product-column">
            <div className="product-card small-card">
              <img src={small3} alt="Product 5" className="product-image" />
              <Link to="/products" className="see-more-btn">Shop More</Link>
            </div>
            <div className="product-card large-card">
              <img src={large3} alt="Product 6" className="product-image" />
              <Link to="/products" className="see-more-btn">Shop More</Link>
            </div>
          </div>

          <div className="product-column">
            <div className="product-card large-card">
              <img src={large4} alt="Product 7" className="product-image" />
              <Link to="/products" className="see-more-btn">Shop More</Link>
            </div>
            <div className="product-card small-card">
              <img src={small4} alt="Product 8" className="product-image" />
              <Link to="/products" className="see-more-btn">Shop More</Link>
            </div>
          </div>
        </div>
        <Link to="/products" className="view-more-products">View More Products</Link>
      </section>

      <Catalogs />
    </div>
  );
}

export default Home;
