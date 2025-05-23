import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      const res = await fetch('http://localhost:3000/api/subscribers',  {
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
        <h2 className="showroom-title">Our Showrooms</h2>
        <div className="showroom-table">
          <div className="showroom-column">
            <h3>Visakhapatnam</h3>
            <p><i className="fas fa-envelope mail-icon" /> info@livinglines.in</p>
            <p><i className="fas fa-phone social-icon" /> 08912514792</p>
          </div>
          <div className="showroom-column">
            <h3>Madhurawada</h3>
            <p><i className="fas fa-envelope mail-icon" /> info@livinglines.in</p>
            <p><i className="fas fa-phone social-icon" /> +91 9849111487</p>
          </div>
          <div className="showroom-column">
            <h3>Vizianagaram</h3>
            <p><i className="fas fa-envelope mail-icon" /> info@livinglines.in</p>
            <p><i className="fa-solid fa-phone social-icon" /> +91 7997995219</p>
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
          <p><i className="fas fa-phone  social-icon" /> 8074253744</p>
          <p><i className="fas fa-envelope social-icon" /> saibalajimarketing@gmail.com</p>

          <h2 className="extra-title" style={{ marginTop: '3.5rem' }}>Social Media</h2>
          <div className="footer-social-icons">
            <i className="fab fa-instagram social-icon" />
            <i className="fab fa-twitter social-icon" />
            <i className="fab fa-facebook social-icon" />
          </div>
        </div>

        {/*<div className="footer-last-column">
          <div className="footer-last-button">
            <input type="text" placeholder="Name" className="subscribe-input" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Mobile Number" className="subscribe-input" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
            <button className="subscribe-btn" onClick={handleSubscribe}>Subscribe</button>
          </div>
        </div> */}





      </div>


      <div className="footer-bottom">
        <hr className="footer-divider" />
        <p className="footer-copy">All copy rights reserved to @living lines</p>
      </div>
    </footer>
  );
};

export default Footer;
