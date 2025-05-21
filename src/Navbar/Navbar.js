import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../../src/assets/logo.jpg'; // Logo Image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // WhatsApp icon
import LoginModal from '../Login/LoginModal';
import whatsappIcon from '../assets/whatsapp.png';




function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };
  const navRef = useRef(null);


  useEffect(() => {
  function handleClickOutside(event) {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsMobileMenuOpen(false);
    }
  }

  if (isMobileMenuOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [isMobileMenuOpen]);



  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);






  // WhatsApp link
  const whatsappNumber = "1234567890"; // Replace with your phone number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Handle form submission (Enter key press or button click)
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();
    if (query) {
      navigate(`/products?search=${encodeURIComponent(query)}`);
    } else {
      navigate('/products');
    }
    setSearchTerm(''); // Reset after submission
  };

  return (
    <div>
      <div className="abc-emporio">
        <header className="header">
          <div className="logo-section">
            <img src={logoImage} className="logo" alt="Living Space Logo" />
          </div>

          <div id="poda">
            <div id="main">
              <form onSubmit={handleSearchSubmit}>
                <input
                  placeholder="Search..."
                  type="text"
                  className="input1"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </form>
              <div className="filterBorder"></div>
            </div>
          </div>

          <div className="hamburger" onClick={toggleMobileMenu}>
            &#9776;
          </div>

        </header>

        <nav ref={navRef} className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-item">HOME</Link>
          <Link to="/about" className="nav-item">ABOUT</Link>
          <Link to="/products" className="nav-item">PRODUCTS</Link>
          <Link to="/brands" className="nav-item">BRANDS</Link>
          <Link to="/Catalogs" className="nav-item">CATALOGS</Link>
          <Link to="/contact" className="nav-item">CONTACT</Link>
          <Link to="/cart" className="nav-item">CART</Link>
        </nav>



        <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>

      {/* WhatsApp Button without background */}
      <a
        href="https://wa.me/918074253744"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="whatsapp-icon"
        />
        <path
          fill="#25D366"
          d="M16 .3A15.6 15.6 0 0 0 .4 15.9c0 2.8.8 5.5 2.3 7.8L0 32l8.5-2.2a15.7 15.7 0 0 0 7.5 1.9h.1A15.6 15.6 0 0 0 16 .3zm0 28.8c-2.2 0-4.4-.6-6.3-1.8l-.5-.3-5 1.3 1.4-4.9-.3-.5a12.9 12.9 0 0 1-2-7C3.3 8.3 8.9 2.7 16 2.7c6.6 0 12 5.4 12 12 0 7-5.4 12.4-12 12.4z"
        />
        <path
          fill="#25D366"
          d="M24 19.1c-.4-.2-2.4-1.2-2.7-1.3-.3-.1-.5-.2-.7.2s-.8 1.3-1 1.6c-.2.3-.4.3-.8.1-2.3-1.1-3.8-2-5.3-4.5-.4-.6.5-.5 1.3-1.8.1-.2.1-.4 0-.6-.1-.2-.7-1.6-1-2.2-.3-.5-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.8 5 2.3.9 3.2.9 4.4.8.7-.1 2.4-1 2.7-2 .3-1 .3-1.9.2-2.1 0-.1-.1-.1-.3-.2z"
        />
      </a>
    </div>
  );
}

export default Navbar;
