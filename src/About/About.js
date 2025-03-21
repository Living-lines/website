// About.js or About.jsx
import React from 'react';
import './About.css';
import aboutImage1 from '../assets/about-image-1.png';
import aboutImage2 from '../assets/about-image-2.jpg';
import aboutImage3 from '../assets/about-image-3.webp';
import ourValue from '../assets/our-value.jpg';
import Timeline from './timeline/timeline.js';
import { motion } from "framer-motion";
import  { useState, useEffect , useRef } from 'react';


function About() {
  const [experienceYears, setExperienceYears] = useState(1);
    const imageRef = useRef(null);

    useEffect(() => {
        const animateNumber = () => {
            let start = 1;
            const end = 23;
            const range = end - start;
            let current = start;
            const increment = end > start ? 1 : -1;
            const stepTime = Math.abs(Math.floor(2000 / range));

            const timer = setInterval(() => {
                current += increment;
                setExperienceYears(current);
                if (current === end) {
                    clearInterval(timer);
                }
            }, stepTime);
        };

        animateNumber();

        const handleScroll = () => {
            if (imageRef.current) {
                const scrollY = window.scrollY;
                imageRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <div> {/* Parent div */}
      <div className="about-container">
        <div className="about-text">
          <h1>A Lineage Of Finest Trait In Quality</h1>
          <h3>Sai Balaji Marketing</h3>
          <p>
            Living Lines, where quality meets experience, and your vision finds its perfect expression. For over two decades, Living Lines has been an icon in the building materials industry, offering a diverse range of top-notch products in the retail and wholesale markets. Established 23 years ago, our showroom has become synonymous with trust, quality, and innovation.
          </p>
        </div>
        <div className="about-images">
          <img src={aboutImage2} alt="About Left" className="about-image-left" />
          <img src={aboutImage1} alt="About Right" className="about-image-right" />
        </div>
      </div>
      <Timeline /> {/* Timeline below about-container */}
      <div className="brand-container">
        <div className="brand-text">
          <h1>
            <span className="big-letter">A</span> brand is a promise.
            <br />
            <span className="indent">A good brand is a</span> <br />
            <span className="double-indent">promise kept.</span>
          </h1>
        </div>


        <div className="brand-image-container">
          <img src={ourValue} alt="Luxury Interior" className="brand-image" />
          {/* <div className="brand-label">OUR TOP <br /> BRANDS</div> */}
          {/* <div className="brand-line"></div> */}
        </div>
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-section"
        >
          <p className="highlight">Our Value</p>
          <h2 className="title">Trusted by Homeowners and Professionals Alike</h2>
          <p className="description">
            With a reputation for quality and reliability, Living Lines has become
            a preferred choice for homeowners, architects, and contractors. Our
            extensive inventory and commitment to customer satisfaction make us a
            trusted name in the industry.
          </p>
        </motion.div>

        <div className="cards">
          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="card"
          >
            <div className="icon">💡</div>
            <h3 className="card-title">Vision</h3>
            <p className="card-text">
              Living Lines, where quality meets experience, and your vision finds
              its perfect expression.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="card"
          >
            <div className="icon">🛋️</div>
            <h3 className="card-title">Mission</h3>
            <p className="card-text">
              To build a relationship with our clients on the basis of mutual
              trust and respect, and offer top-notch customer service.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="experience-container">
            <div className="image-section">
                <img ref={imageRef} src={aboutImage3} alt="Modern Bathroom" />
                <div className="experience">
                    <span>{experienceYears}</span>+ Year Experience
                </div>
            </div>
            <div className="text-section">
                <h2 className="animated-title">Sai Balaji Marketing</h2>
                <p className="animated-paragraph">
                    Living Lines, where quality meets experience, and your vision finds its perfect expression. For over two decades, Living Lines has been an icon in the building materials industry, offering a diverse range of top-notch products in the retail and wholesale markets. Established 23 years ago, our showroom has become synonymous with trust, quality, and innovation.
                </p>
                <ul className="animated-list">
                    <li>Innovate</li>
                    <li>Decorate</li>
                    <li>Elevate</li>
                    <li>Your Interior</li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default About;