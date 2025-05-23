import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../../src/assets/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import LoginModal from '../Login/LoginModal';
import whatsappIcon from '../assets/whatsapp.png';
import Loader from '../pages/Loader';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

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

  const handleNavClick = (path) => {
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      navigate(path);
    }, 3000);
  };

  const delayedNavigate = (e, path) => {
    e.preventDefault();
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      navigate(path);
    }, 3000);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();
    if (query) {
      navigate(`/products?search=${encodeURIComponent(query)}`);
    } else {
      navigate('/products');
    }
    setSearchTerm('');
  };

  return (
    <div>
      {showLoader && (
        <div className="loader-overlay">
          <Loader />
        </div>
      )}

      <div className="abc-emporio">
        <header className="header">
          <div className="logo-section">
            <img src={logoImage} className="logo" alt="ABC Emporio Logo" />
          </div>

          <div id="search-bar-container">
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

          <div className="hamburger" onClick={() => setIsMobileMenuOpen(prev => !prev)}>
            &#9776;
          </div>
        </header>

        <nav ref={navRef} className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-item underline" onClick={(e) => delayedNavigate(e, '/')}>HOME</Link>
          <Link to="/about" className="nav-item underline" onClick={(e) => delayedNavigate(e, '/about')}>ABOUT</Link>
          <Link to="/products" className="nav-item underline" onClick={(e) => delayedNavigate(e, '/products')}>PRODUCTS</Link>
          <Link to="/brands" className="nav-item underline" onClick={(e) => delayedNavigate(e, '/brands')}>BRANDS</Link>
          <Link to="/catalogs" className="nav-item underline" onClick={(e) => delayedNavigate(e, '/catalogs')}>CATALOGS</Link>
          <Link to="/contact" className="nav-item underline" onClick={(e) => delayedNavigate(e, '/contact')}>CONTACT</Link>
          <Link to="/cart" className="nav-item underline" onClick={(e) => delayedNavigate(e, '/cart')}>
            <FontAwesomeIcon icon={faShoppingCart} className="nav-cart-icon" />
          </Link>
        </nav>

        <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>

      <a
        href="https://wa.me/918074253744"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
      </a>
    </div>
  );
}

export default Navbar;
