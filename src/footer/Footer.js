import React, { useState,Link } from 'react';
import { useNavigate } from 'react-router-dom';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import location1 from '../assets/location_1.jpg';
import location2 from '../assets/location_2.jpg';
import location3 from '../assets/location_3.jpg';
import logoImage from '../../src/assets/logo.jpg';

import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubscribe = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/subscribers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, mobile }),
      });
      const result = await res.json();
      if (res.ok) alert('Subscribed successfully!');
      else alert(result.error || 'Subscription failed');
    } catch (err) {
      console.error(err);
      alert('Error subscribing.');
    }
  };

  return (
    <footer className="footer">
      <div className="showroom-section">
        <h1 className="products-heading">
          Our Showrooms <span className="underline"></span>
        </h1>
        <div className="showroom-table">
          <div className="showroom-column">
            <img src={location1} alt="location1" className='branch-photo' />
            <h3>Visakhapatnam</h3>
            <p><i className="fas fa-envelope mail-icon" /> info@livinglines.in</p>
            <p><i className="fas fa-phone social-icon" /> 08912514792</p>
          </div>
          <div className="showroom-column">
            <img src={location2} alt="location2" className='branch-photo' />
            <h3>Madhurawada</h3>
            <p><i className="fas fa-envelope mail-icon" /> info@livinglines.in</p>
            <p><i className="fas fa-phone social-icon" /> +91 9849111487</p>
          </div>
          <div className="showroom-column">
            <img src={location3} alt="location3" className='branch-photo' />
            <h3>Vizianagaram</h3>
            <p><i className="fas fa-envelope mail-icon" /> info@livinglines.in</p>
            <p><i className="fa-solid fa-phone social-icon" /> +91 7997995219</p>
          </div>
        </div>
      </div>


      <div className="emporio-section">
        <div className="emporio-left">
              <img src={logoImage} className="logo-footer" alt="LivingLines Logo" />
  
          <p className="emporio-desc">
            Living Lines is a premier destination for high-quality tiles, sanitaryware, and interior solutions, offering a curated selection of modern and traditional designs. A trusted name in the industry, Living Lines began its journey with a vision to redefine home aesthetics across Andhra Pradesh. With showrooms in Visakhapatnam, Madhurawada, and Vizianagaram, we are committed to delivering excellence, elegance, and enduring value to every space we touch.
          </p>
        </div>

        <div className="emporio-right">
          <h2 className="emporio-heading">Get The Latest Updates</h2>
          <div className="subscribe-container">
            <input
              type="phone number"
              placeholder="phone number"
              className="subscribe-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>


      <div className="footer-columns">
        <div className="footer-left-column">
          <h2>Living Lines</h2>
          <div className="location-hours">
            <h3>Vizianagaram</h3>
            <p>Monday - Saturday : 9:00 AM to 9:00 PM</p>
            <h3 style={{ marginTop: '3rem' }}>Visakhapatnam</h3>
            <p>Monday - Saturday : 9:00 AM to 9:00 PM</p>
            <h3 style={{ marginTop: '3rem' }}>Madhurawada</h3>
            <p>Monday - Saturday : 9:00 AM to 9:00 PM</p>
            <p style={{ marginTop: '3rem', color: '#ccc' }}>We are closed on public Holidays.</p>
          </div>
        </div>

        <div className="footer-middle-column">
          <h2 className="extra-title">Navigate</h2>
          <div className="navigate-table">
            <button onClick={() => handleNavigation('/')} className="footer-link">Home</button>
            <button onClick={() => handleNavigation('/about')} className="footer-link">About</button>
            <button onClick={() => handleNavigation('/products')} className="footer-link">Products</button>
            <button onClick={() => handleNavigation('/catalogs')} className="footer-link">Catalogs</button>
            <button onClick={() => handleNavigation('/brands')} className="footer-link">Brands</button>
            <button onClick={() => handleNavigation('/contact')} className="footer-link">Contact</button>
          </div>
        </div>

        <div className="footer-right-column">
          <h2 className="extra-title">Contact</h2><br />
          <p>
            <i className="fas fa-phone social-icon" />{" "}
            <a href="tel:08912514792" className="footer-contact-link">08912514792</a>
          </p>

          <p>
            <i className="fas fa-envelope mail-icon" />{" "}
            <a href="mailto:saibalajimarketing@gmail.com" className="footer-contact-link" target="_blank" rel="noopener noreferrer">
              saibalajimarketing@gmail.com
            </a>
          </p>

          <h2 className="extra-title" style={{ marginTop: '3.5rem' }}>Social Media</h2>
          <div className="footer-social-icons">
            <a
              href="https://www.instagram.com/livinglines"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram social-icon" />
            </a>

            <a
              href="https://twitter.com/livinglines"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter social-icon" />
            </a>

            <a
              href="https://www.facebook.com/livinglines"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook social-icon" />
            </a>
          </div>

        </div>






      </div>


      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p className="footer-copy">All Copy Rights Reserved to @Living Lines</p>
      </div>
    </footer>
  );
};

export default Footer;
