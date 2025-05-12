import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../../src/assets/logo.jpg'; // Logo Image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // WhatsApp icon
import LoginModal from '../Login/LoginModal';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // WhatsApp link
  const whatsappNumber = "1234567890"; // Replace with your phone number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div>
      <div className="abc-emporio">
        <header className="header">
          <div className="logo-section">
            <img src={logoImage} className="logo" alt="Living Space Logo" />
            <p>The Complete Bathware</p>
          </div>

          <div id="poda">
            <div id="main">
              <input
                placeholder="Search..."
                type="text"
                className="input1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    navigate(`/brands?search=${searchTerm}`);
                  }
                }}
              />
              <div className="filterBorder"></div>
            </div>
          </div>
        </header>

        <nav className="main-nav">
          <Link to="/" className="nav-item">HOME</Link>
          <Link to="/about" className="nav-item">ABOUT</Link>
          <Link to="/products" className="nav-item">OUR PRODUCTS</Link>
          <Link to="/Catalogs" className='nav-item'>CATALOGS</Link>
          <Link to="/contact" className="nav-item">CONTACT</Link>
          <Link to="/brands" className="nav-item">BRANDS</Link>
        </nav>

        <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>

      {/* WhatsApp Button without background */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" color="#25D366" />
      </a>
    </div>
  );
}

export default Navbar;
