import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      {/* Our Showrooms Section */}
      <div className="showroom-section">
        <h2 className="showroom-title">Our Showrooms</h2>
        <div className="showroom-table">
          <div className="showroom-column">
            <h3>Visakhapatnam</h3>
            <p><i className="fas fa-envelope mail-icon" /> info@livinglines.in</p>
            <p><i className="fas fa-phone phone-icon" /> 08912514792</p>
          </div>
          <div className="showroom-column">
            <h3>Madhurawada</h3>
            <p><i className="fas fa-envelope mail-icon" /> info@livinglines.in</p>
            <p><i className="fas fa-phone phone-icon" /> +91 9849111487</p>
          </div>
          <div className="showroom-column">
            <h3>Vizianagaram</h3>
            <p><i className="fas fa-envelope mail-icon" /> info@livinglines.in</p>
            <p><i className="fas fa-phone phone-icon" /> +91 7997995219</p>
          </div>
        </div>
      </div>

      {/* New Footer Layout Below Showroom Section */}
      <div className="footer-columns">

        {/* Column 1: Company & Hours */}
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

        {/* Column 2: Navigation Links */}
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

        {/* Column 3: Contact & Social */}
        <div className="footer-right-column">
          <h2 className="extra-title">Contact</h2>
          <p><i className="fas fa-phone phone-icon social-icon" /> 8074253744</p>
          <p><i className="fas fa-envelope social-icon" /> saibalajimarketing@gmail.com</p>

          <h2 className="extra-title" style={{ marginTop: '1.5rem' }}>Social Media</h2>
          <div className="footer-social-icons">
            <i className="fab fa-instagram social-icon" />
            <i className="fab fa-twitter social-icon" />
            <i className="fab fa-facebook social-icon" />
          </div>
        </div>

      </div>


      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p className="footer-copy">All copy rights reserved to @living lines</p>
      </div>
    </footer>
  );
};

export default Footer;
