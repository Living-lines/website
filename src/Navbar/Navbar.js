import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../../src/assets/final-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import LoginModal from '../Login/LoginModal';
import whatsappIcon from '../assets/whatsapp.png';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !event.target.closest('.hamburger')
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflowY = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  /*useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]); */
  useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (!isMobileMenuOpen) {
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [lastScrollY, isMobileMenuOpen]);


  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const query = searchTerm.trim();
    navigate(query ? `/products?search=${encodeURIComponent(query)}` : '/products');
    setSearchTerm('');
  };

  const delayedNavigate = (e, path) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate(path);
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
      <div className="abc-emporio">
        {/*<div className={`header-wrapper ${showNavbar ? 'navbar-show' : 'navbar-hide'}`}> */}
        <div className={`header-wrapper ${showNavbar ? 'navbar-show' : `navbar-hide ${isMobileMenuOpen ? 'mobile-visible' : 'mobile-hidden'}`}`}>

          <header className="header">
            <div className="top-row">
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
              <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? '×' : '☰'}
              </div>
            </div>
          </header>

          <nav ref={navRef} className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`nav-item ${location.pathname === path ? 'active-tab' : ''}`}
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
    </div>
  );
}

export default Navbar;
