import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import location1 from '../assets/location_1.jpg';
import location2 from '../assets/location_2.jpg';
import location3 from '../assets/location_3.jpg';
import logoImage from '../../src/assets/logo.jpg';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleSubscribe = async () => {
    setSuccessMessage('');
    setErrorMessage('');

    if (!/^\d{10}$/.test(mobile)) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return;
    }

    try {
      const res = await fetch('http://backend-tawny-one-62.vercel.app/api/subscribers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, mobile }),
      });

      const result = await res.json();
      if (res.ok) {
        setSuccessMessage('Successfully subscribed!');
        setName('');
        setMobile('');
        setTimeout(() => setSuccessMessage(''), 3000);
      } else {
        setErrorMessage(result.error || 'Subscription failed');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Error subscribing. Please try again.');
    }
  };

  return (
    <footer className="footer">
      {successMessage && (
        <div className="success-popup-overlay">
          <div className="success-popup-card">
            <p>{successMessage}</p>
          </div>
        </div>
      )}

      <div className="showroom-section">
        <h1 className="products-heading">Our Showrooms</h1>
        <div className="showroom-table">
          {[{
            city: "Visakhapatnam", phone: "08912514792", img: location1
          }, {
            city: "Madhurawada", phone: "+91 9849111487", img: location2
          }, {
            city: "Vizianagaram", phone: "+91 7997995219", img: location3
          }].map((loc, i) => (
            <div className="showroom-column" key={i}>
              <img src={loc.img} alt={loc.city} className="branch-photo" />
              <h3>{loc.city}</h3>
              <p><i className="fas fa-envelope mail-icon" /> info@livinglines.in</p>
              <p><i className="fas fa-phone social-icon" /> {loc.phone}</p>
            </div>
          ))}
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
            <input type="text" placeholder="Your Name" className="subscribe-input" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Phone Number" className="subscribe-input" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <button className="subscribe-btn" onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>

          {errorMessage && (
            <div className="subscribe-error">{errorMessage}</div>
          )}
        </div>
      </div>

      <div className="footer-columns">
        <div className="footer-left-column">
          <h2>Living Lines</h2>
          <div className="location-hours">
            {['Vizianagaram', 'Visakhapatnam', 'Madhurawada'].map((city, idx) => (
              <React.Fragment key={city}>
                <h3 style={{ marginTop: idx === 0 ? '0' : '3rem' }}>{city}</h3>
                <p>Monday - Saturday : 9:00 AM to 9:00 PM</p>
              </React.Fragment>
            ))}
            <p style={{ marginTop: '3rem', color: '#ccc' }}>We are closed on public Holidays.</p>
          </div>
        </div>

        <div className="footer-middle-column">
          <h2 className="extra-title">Navigate</h2>
          <div className="navigate-table">
            {['/', '/about', '/products', '/catalogs', '/brands', '/contact'].map((path, i) => (
              <button key={path} onClick={() => handleNavigation(path)} className="footer-link">
                {['Home', 'About', 'Products', 'Catalogs', 'Brands', 'Contact'][i]}
              </button>
            ))}
          </div>
        </div>

        <div className="footer-right-column">
          <h2 className="extra-title">Contact</h2><br />
          <p>
            <i className="fas fa-phone social-icon" />
            <a href="tel:08912514792" className="footer-contact-link">08912514792</a>
          </p>
          <p>
            <i className="fas fa-envelope mail-icon" />
            <a href="mailto:saibalajimarketing@gmail.com" className="footer-contact-link" target="_blank" rel="noopener noreferrer">
              saibalajimarketing@gmail.com
            </a>
          </p>

          <h2 className="extra-title" style={{ marginTop: '3.5rem' }}>Social Media</h2>
          <div className="footer-social-icons">
            {['instagram', 'twitter', 'facebook'].map((platform) => (
              <a key={platform} href={`https://www.${platform}.com/livinglines`} target="_blank" rel="noopener noreferrer" aria-label={platform}>
                <i className={`fab fa-${platform} social-icon`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p className="footer-copy">
          <i className="far fa-copyright" style={{ fontSize: '1.3em', marginRight: '6px', verticalAlign: 'middle' }}></i>
          All Rights Reserved to @Living Lines
        </p>
      </div>
    </footer>
  );
};

export default Footer;
