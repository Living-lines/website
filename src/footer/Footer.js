import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  // Function to handle navigation and scrolling to top
  const handleNavigation = (path) => {
    navigate(path);  // Navigate to the specified route
    window.scrollTo(0, 0);  // Scroll to the top
  };

  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-left">
          <img
            src="https://livinglineswebbucket.blr1.digitaloceanspaces.com/public/logo.jpg"
            alt="Living Lines Logo"
            className="footer-logo"
          />
          <p className="footer-description">
            Living Lines Emporio is a venture of ‘Living Lines Group’, a synonym for high-end sanitary wares, bathroom fittings, tiles & allied building materials. Living Group had its inception in the year 1998 at Vizag in Andhra Pradesh, India.
          </p>
        </div>

        <div className="footer-right">
          <h2 className="footer-heading">Get The Latest Updates</h2>
          <div className="footer-subscribe">
            <input placeholder="Enter your Mobile number..." className="input" name="text" type="text" />
            <button className="Btn"></button>
          </div>
        </div>

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

        <div className="extra-links-section">
          <div className="extra-column">
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

          <div className="extra-column">
            <h2 className="extra-title">Social Media</h2>
            <div className="simple-links">
              <p><i className="fab fa-instagram social-icon" /> Instagram</p>
              <p><i className="fab fa-linkedin social-icon" /> LinkedIn</p>
              <p><i className="fab fa-twitter social-icon" /> Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
