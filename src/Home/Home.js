import React, { useState, useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



import image1 from '../assets/taps123.jpg';
import image2 from '../assets/taps51.jpg'

import About from '../About/About';
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


//import heroImage1 from '../assets/1.jpg';
//import heroImage2 from '../assets/2.jpg';
//import heroImage3 from '../assets/3.jpg';
//import heroImage4 from '../assets/4.jpg';
//import heroImage5 from '../assets/tiles.png';
//import heroImage6 from '../assets/l7.jpg';



function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const aboutImage1 = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/about-image-1.png";

  const heroImage1 = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/1.jpg";
  const heroImage2 = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/2.jpg";
  const heroImage3 = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/3.jpg";
  const heroImage4 = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/switch.jpg";
  const heroImage5 = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/tiles.png";
  const heroImage6 = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/l7.jpg";


  const videoFile1 = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/video 3.mp4";
  const videoFile2 = "https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/video1.mp4";

  let heroInterval = null;

  const startHeroAutoSlide = () => {
    heroInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
  };

  const pauseHeroSlide = () => {
    if (heroInterval) {
      clearInterval(heroInterval);
      heroInterval = null;
    }
  };

  const resumeHeroSlide = () => {
    if (!heroInterval) {
      startHeroAutoSlide();
    }
  };


  useEffect(() => {

    const heroEl = document.getElementById('heroSection');
    if (!heroEl || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          pauseHeroSlide();
        } else {
          resumeHeroSlide();
        }
      });
    }, { threshold: 0.1 });
    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);


  const slides = [
    {
      image: heroImage1,
      heading: 'Designs that always flow.',
      subQuote: 'crafted for every style from bold to timeless',
      textPosition: 'right',
    },
    {
      image: heroImage2,
      heading: 'Luxury Bathware Experience.',
      subQuote: 'Indulge in the ultimate luxury with our premium bathware collection.',
      textPosition: 'left',
    },
    {
      image: heroImage3,
      heading: 'Modern Interiors Reimagined.',
      subQuote: 'Upgrade your home with stylish, high-quality bath and home accessories.',
      textPosition: 'right',
    },
    {
      image: heroImage4,
      heading: 'Refined control with Definition.',
      subQuote: 'Switches to control and add beauty to your home.',
      textPosition: 'left',
    },
    {
      image: heroImage5,
      heading: 'Premium & Perfect Tiles for Every Floor.',
      subQuote: 'wide range of exquisite, durable and designer tiles.',
      textPosition: 'right',
    },

    {
      image: heroImage6,
      heading: 'Brighten every corner with innovation.',
      subQuote: 'From lights to switches discover an elite collection to illuminate, protect and perform.',
      textPosition: 'left',
    },

  ];

  {/*useEffect(() => {
    const featureList = document.querySelector('.feature-list');
    const items = document.querySelectorAll('.feature-list-item');

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        featureList.classList.add('reveal');
        items.forEach((item, index) => {
          item.style.animationName = 'fadeUp';
          item.style.animationDelay = `${index * 0.1}s`;
          item.style.animationDuration = '0.6s';
          item.style.animationFillMode = 'forwards';
          item.style.opacity = '0';
        });
      } else {
        featureList.classList.remove('reveal');
        items.forEach((item) => {
          item.style.animationName = 'none';
          item.style.opacity = '0';
        });
      }
    }, { threshold: 0.3 });

    if (featureList) observer.observe(featureList);

    return () => {
      if (featureList) observer.unobserve(featureList);
    };
  }, []);  */}

  useEffect(() => {
    /* AOS.init({ duration: 800, once: true, offset: 60 });  */
  }, []);

  const featureItems = [
    "Pumps and Motors", "Plumbing", "Sanitary", "Faucets", "Bath Tubs", "Shower panels",
    "Sinks", "Tiles and Adhesives", "Electrical", "LED Lights", "Chandeliers", "Switches",
    "Fans", "Bath Accessories", "Mirrors and Vanities", "Paints", "Plywood", "Furniture",
    "Interior decors", "Artifacts", "Geysers & Purifiers"
  ];
  const [numCols, setNumCols] = useState(window.innerWidth >= 1024 ? 3 : 2);

  useEffect(() => {
    function handleResize() {
      setNumCols(window.innerWidth >= 1024 ? 3 : 2);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = featureItems.length;
  const rowsPerCol = Math.ceil(totalItems / numCols);

  const columns = Array.from({ length: numCols }, (_, colIndex) => {
    const start = colIndex * rowsPerCol;
    const end = start + rowsPerCol;
    return featureItems.slice(start, end);
  });










  /*useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]); */

  useEffect(() => {
    startHeroAutoSlide();
    return () => pauseHeroSlide();
  }, []);


  return (
    <div className='Home-container'>
      {/*<section className="hero">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : 'hidden'} ${slide.textPosition === 'left' ? 'reverse' : ''
              }`}
          >
            <div className="text-content">
              <h1 dangerouslySetInnerHTML={{
                __html: `${slide.heading}`
              }} />
              <p>{slide.subQuote}</p>
            </div>
            <div className="hero-image-container">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="hero-image" />
            </div>
          </div>
        ))}
      </section> */}
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
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="homepage-hero-image"
              />
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
        {/* <div>
          <h1 className="products-heading">
            About Us <span className="underline"></span>
          </h1>
        </div> */}

        <section className="interior-split-section">
          <div className="interior-left-rotation">
            <div className="wrapper">
              <div className="inner" style={{ '--quantity': 8 }}>
                {[
                  "a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg",
                  "a5.jpg", "a6.jpg", "a7.jpg", "a8.jpg",
                ].map((img, index) => (
                  <div
                    className="card1"
                    key={index}
                    style={{ '--index': index, '--color-card': '242, 102, 36' }}
                  >
                    <img className="img1" src={`/assets/${img}`} alt={`a${index}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*<div className="interior-right-content">
            <div className="feature-section">
              <div className="feature-content">
                <h1 className="feature-title">
                  Everything You Desire<br />Under One Roof
                </h1>
                <ul className="feature-list animated">
                  {[
                    "Sanitary", "Faucets", "Shower Panels", "Sinks", "Tiles & Adhesives",
                    "Electricals", "Lights", "Chandeliers", "Switches",
                    "Fans", "Pipes", "Pumps & Motors", "Accessories",
                    "Mirrors & Vanities", "Paints", "Furniture", "Interior Decors", "Artifacts", "Plumbing"
                  ].map((item, i) => (
                    <li className="feature-list-item" key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div> 
          </div> */}
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















      {/* <section className="interior-split-section">
        <div className="interior-left-rotation">
          <div className="wrapper">
            <div className="inner" style={{ '--quantity': 8 }}>
              {[
                "a1.jpg",
                "a2.jpg",
                "a3.jpg",
                "a4.jpg",
                "a5.jpg",
                "a6.jpg",
                "a7.jpg",
                "a8.jpg",
              ].map((img, index) => (
                <div className="card1" key={index} style={{ '--index': index, '--color-card': '242, 102, 36', }} >
                  <img className="img1" src={`/assets/${img}`} alt={`a${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="interior-right-content">
          <div className="feature-section">
            <div className="feature-content">
              <h1 className="feature-title">Everything You Desire<br />Under One Roof</h1>
              <ul className="feature-list animated">
                {[
                  "Sanitary", "Taps", "Tiles", "Shower Panels", "Electricals", "Artifacts", "Interior Decors", "Lights",
                  "Chandeliers", "Switches", "Furniture", "Wallclocks", "Mirrors", "Cabinets", "Accessories", "Paints",
                  "Plumbing", "Pipes", "Sinks", "Washbasins", "Pumps & Motors", "Fans", "Plywood"
                ].map((item, i) => (
                  <li className="feature-list-item" key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>


        </div>
      </section> */}






      <section className="originals-section">
        <div className="originals-container">
          <div className="first-line">
            <img
              src={image1}
              alt="Original Taps"
              className="originals-image first-image"
              draggable={false}
            />
            <h1 className="originals-text-line">THE ORIGINALS</h1>
          </div>

          <h2 className="originals-text-line second-line">THE BEST</h2>

          <div className="third-line">
            <div className="curve-svg-wrapper">
              <svg
                width="200"
                height="40"
                viewBox="0 0 200 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="curve-svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M0 20 C30 0, 70 40, 100 20 S170 0, 200 20"
                  stroke="#b8860b"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3 className="originals-text-line third-line-text">THE LATEST</h3>
            <img
              src={image2}
              alt="Latest Taps"
              className="second-image1"
              draggable={false}
            />
          </div>
        </div>
      </section>





      {/* <section className="brand-promise-home">
        <div className="brand-promise-container-home">
          <div className="big-a-home">A</div>
          <div className="lines-text-home">
            <div className="line1-home">brand is a promise</div>
            <div className="line2-home">
              good brand is a
              <img src="/assets/house.jpg" alt="House" className="line2-image-home" />
            </div>
            <div className="line3-home">
              promise kept.
              <div className="line3-extra-home">
                <div className="horizontal-line-home"></div>
                <div className="our-top-text-home">
                  <Link to="/brands" className="our-top-text-home">
                    <span>OUR TOP</span>
                    <span>Brands</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}













      {/*<About /> */}
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

      <Catalogs />

    </div>
  );
}

export default Home;
