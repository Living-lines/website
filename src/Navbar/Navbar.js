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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

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

  const delayedNavigate = (e, path) => {
    e.preventDefault();
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
      setIsMobileMenuOpen(false);
      navigate(path);
    }, 3000);
  };

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'PRODUCTS', path: '/products' },
    { label: 'BRANDS', path: '/brands' },
    { label: 'CATALOGS', path: '/catalogs' },
    { label: 'CONTACT', path: '/contact' },
    { label: <FontAwesomeIcon icon={faShoppingCart} />, path: '/cart' }
  ];

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
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={logoImage} className="logo" alt="LivingLines Logo" />
            </Link>
          </div>


          <div id="search-bar-container">
            <form onSubmit={handleSearchSubmit} className="search-wrapper">
              <input
                placeholder="Search..."
                type="text"
                className="input1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <span className="clear-search" onClick={() => setSearchTerm('')}>×</span>
              )}
            </form>
          </div>

          <div
            className="hamburger"
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
          >
            {isMobileMenuOpen ? '×' : '☰'}
          </div>
        </header>

        <nav ref={navRef} className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          {navItems.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`nav-item underline ${location.pathname === path ? 'active-tab' : ''}`}
              onClick={(e) => delayedNavigate(e, path)}
            >
              {label}
            </Link>
          ))}
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
