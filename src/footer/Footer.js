import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import location1 from '../assets/location_1.jpg';
import location2 from '../assets/location_2.jpg';
import location3 from '../assets/location_3.jpg';
import logoImage from '../../src/assets/final-logo.png';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [openSection, setOpenSection] = useState(null);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleAccordion = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleSubscribe = async () => {
    setSuccessMessage('');
    setErrorMessage('');

    if (!/^\d{10}$/.test(mobile)) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return;
    }

    try {
      const res = await fetch('https://backend-tawny-one-62.vercel.app/api/subscribers', {
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

  const handleCopyAndDial = (number) => {
    // Copy the number to the clipboard
    navigator.clipboard.writeText(number).then(() => {
      // Open the dialer with the phone number
      window.location.href = `tel:${number}`;
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
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
        <div>
          <h1 className="products-heading">
            Our Showrooms <span className="underline"></span>
          </h1>
        </div>
        <div className="showroom-table">
          {[{
            city: "Visakhapatnam", phone: "08912514792", img: location1
          }, {
            city: "Madhurawada", phone: "+91 9849111487", img: location2
          }, {
            city: "Vizianagaram", phone: "+91 8074253744", img: location3
          }].map((loc, i) => (
            <div className="showroom-column" key={i}>
              <img src={loc.img} alt={loc.city} className="branch-photo large-photo" />
              <h3 className='showroom-city'>{loc.city}</h3>
              <div className='extra-space'>
                <p><i className="fas fa-envelope mail-icon" /> info@livinglines.in</p>
                <p>
                  <i className="fas fa-phone social-icon" />
                  <a href={`tel:${loc.phone}`} onClick={() => handleCopyAndDial(loc.phone)} className="footer-contact-link">{loc.phone}</a>
                </p>
              </div>
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
        {/* Left Column */}
        <div className={`footer-column footer-left-column${openSection === 'left' ? ' open' : ''}`}>
          <div className="footer-column-header" onClick={() => handleAccordion('left')}>
            <h2>Living Lines</h2>
            <span className="footer-toggle-icon">{openSection === 'left' ? '−' : '+'}</span>
          </div>
          <div className="footer-column-content">
            <div className="location-hours">
              {['Vizianagaram', 'Visakhapatnam', 'Madhurawada'].map((city, idx) => (
                <React.Fragment key={city}>
                  <h3 style={{ marginTop: idx === 0 ? '0' : '2rem' }}>{city}</h3>
                  <p>Monday - Saturday : 9:00 AM to 9:00 PM</p>
                </React.Fragment>
              ))}
              <p style={{ marginTop: '3rem', color: '#ccc' }}>We are closed on public holidays.</p>
            </div>
          </div>
        </div>

        <div className={`footer-column footer-middle-column${openSection === 'middle' ? ' open' : ''}`}>
          <div className="footer-column-header" onClick={() => handleAccordion('middle')}>
            <h2 className="extra-title">Navigate</h2>
            <span className="footer-toggle-icon">{openSection === 'middle' ? '−' : '+'}</span>
          </div>
          <div className="footer-column-content">
            <div className="navigate-table">
              {['/', '/about', '/products', '/catalogs', '/brands', '/contact'].map((path, i) => (
                <button key={path} onClick={() => handleNavigation(path)} className="footer-link">
                  {['Home', 'About', 'Products', 'Catalogs', 'Brands', 'Contact'][i]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`footer-column footer-right-column${openSection === 'right' ? ' open' : ''}`}>
          <div className="footer-column-header" onClick={() => handleAccordion('right')}>
            <h2 className="extra-title">Contact</h2>
            <span className="footer-toggle-icon">{openSection === 'right' ? '−' : '+'}</span>
          </div>
          <div className="footer-column-content">
            <p>
              <i className="fas fa-phone social-icon" />
              <a href="tel:08912514792" onClick={() => handleCopyAndDial('08912514792')} className="footer-contact-link">08912514792</a>
            </p>
            <p>
              <i className="fas fa-envelope mail-icon" />
              <a href="mailto:saibalajimarketing@gmail.com" className="footer-contact-link" target="_blank" rel="noopener noreferrer">
                saibalajimarketing@gmail.com
              </a>
            </p>
            <h2 className="extra-title" style={{ marginTop: '3.5rem' }}>Social Media</h2>
            <div className="footer-social-icons">
              <a href="https://www.instagram.com/livinglinesofficial?igsh=MWpqajd0d21qc3VvdA==" target="_blank" rel="noopener noreferrer" aria-label="instagram">
                <i className="fab fa-instagram social-icon" />
              </a>

              <a href="https://twitter.com/livinglines" target="_blank" rel="noopener noreferrer"  aria-label="twitter">
                <i className="fab fa-twitter social-icon" />
              </a>

              <a href="https://www.facebook.com/livinglinesofficial" target="_blank" rel="noopener noreferrer"  aria-label="facebook">
                <i className="fab fa-facebook social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p className="footer-copy">
          <i className="far fa-copyright" style={{ fontSize: '1.3em', marginRight: '6px', verticalAlign: 'middle', color: "white" }}></i>
          All Rights Reserved to Living Lines
        </p>
      </div>
    </footer>
  );
};

export default Footer;
