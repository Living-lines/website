import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faShoppingCart, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import './ProductPage.css';
import Popup from './Popup';
import { useLocation, useNavigate } from 'react-router-dom';

const API_BASE = 'https://backend-tawny-one-62.vercel.app';

const ProductPager = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const [addedToCartMessage, setAddedToCartMessage] = useState('');

  const handleAddToCart = (prod) => {
    const currentCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const itemIndex = currentCart.findIndex(item => item.id === prod.id);
    if (itemIndex >= 0) {
      currentCart[itemIndex].quantity += 1;
    } else {
      currentCart.push({
        id: prod.id,
        name: prod.model_name,
        brand: prod.brand,
        type: prod.product_type,
        image: prod.image_url,
        quantity: 1
      });
    }
    localStorage.setItem('cartItems', JSON.stringify(currentCart));
    setAddedToCartMessage(`${prod.model_name} added to cart!`);
    setTimeout(() => setAddedToCartMessage(''), 2000);
  };

  const initialSearch = params.get('search') || '';
  const initialBrand = params.get('brand') || '';
  const initialType = params.get('type') || '';

  const [dynamicProducts, setDynamicProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [availableBrands, setAvailableBrands] = useState([]);
  const [availableTypes, setAvailableTypes] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [selectedType, setSelectedType] = useState(initialType);
  const [searchText, setSearchText] = useState(initialSearch);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const p = new URLSearchParams(location.search);
    setSearchText(p.get('search') || '');
  }, [location.search]);

  const filterProducts = (products, keyword) => {
    const q = keyword.toLowerCase();
    return products.filter(p =>
      (p.brand && p.brand.toLowerCase().includes(q)) ||
      (p.product_type && p.product_type.toLowerCase().includes(q)) ||
      (p.model_name && p.model_name.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q)) ||
      (p.category && p.category.toLowerCase().includes(q)) ||
      (p.title && p.title.toLowerCase().includes(q))
    );
  };

  useEffect(() => {
    fetch(`${API_BASE}/api/products`)
      .then(res => res.json())
      .then(data => {
        setDynamicProducts(data);
        setAvailableBrands([...new Set(data.map(p => p.brand).filter(Boolean))]);
        setAvailableTypes([...new Set(data.map(p => p.product_type).filter(Boolean))]);
        setDisplayProducts(initialSearch ? filterProducts(data, initialSearch) : data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('❌ Initial fetch error:', err);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const qs = new URLSearchParams();
    if (searchText) qs.set('search', searchText);
    if (selectedBrand) qs.set('brand', selectedBrand);
    if (selectedType) qs.set('type', selectedType);
    navigate(`/products?${qs.toString()}`, { replace: true });
  }, [searchText, selectedBrand, selectedType, navigate]);

  useEffect(() => {
    setIsLoading(true);
    const qs = new URLSearchParams();
    if (selectedBrand) qs.set('brand', selectedBrand);
    if (selectedType) qs.set('product_type', selectedType);

    fetch(`${API_BASE}/api/products?${qs.toString()}`)
      .then(res => res.json())
      .then(data => {
        setDynamicProducts(data);
        setDisplayProducts(searchText ? filterProducts(data, searchText) : data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('❌ Fetch products error:', err);
        setIsLoading(false);
      });
  }, [selectedBrand, selectedType, searchText]);

  useEffect(() => {
    setDisplayProducts(searchText ? filterProducts(dynamicProducts, searchText) : dynamicProducts);
  }, [searchText, dynamicProducts]);

  const handleBrandSelect = brand => {
    setSelectedBrand(prev => (prev === brand ? '' : brand));
    setShowBrandDropdown(false);
  };

  const handleTypeSelect = type => {
    setSelectedType(prev => (prev === type ? '' : type));
    setShowTypeDropdown(false);
  };

  const handleImageClick = prod => {
    setSelectedProduct(prod);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  return (
    <div className="products-pager">
      <div className="filters-container">
        {/* Search Bar */}
        <div className="filter-search">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search by model, brand, or type..."
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              className="filter-search-input"
            />
            {searchText && (
              <span className="clear-icon" onClick={() => setSearchText('')}>&times;</span>
            )}
          </div>
        </div>

        {/* Brand Dropdown */}
        <div className="filter-dropdown brand-dropdown">
          <button className="dropdown-toggle" onClick={() => setShowBrandDropdown(v => !v)}>
            Brand {selectedBrand && `: ${selectedBrand}`}
            <FontAwesomeIcon icon={showBrandDropdown ? faChevronUp : faChevronDown} className="arrow-icon" />
          </button>
          <div className={`dropdown-content ${showBrandDropdown ? 'show' : ''}`}>
            <ul className="dropdown-menu">
              {availableBrands.map(b => (
                <li key={b}>
                  <label>
                    <input
                      type="radio"
                      name="brand"
                      checked={selectedBrand === b}
                      onChange={() => handleBrandSelect(b)}
                    /> {b}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Type Dropdown */}
        <div className="filter-dropdown type-dropdown">
          <button className="dropdown-toggle" onClick={() => setShowTypeDropdown(v => !v)}>
            Type {selectedType && `: ${selectedType}`}
            <FontAwesomeIcon icon={showTypeDropdown ? faChevronUp : faChevronDown} className="arrow-icon" />
          </button>
          <div className={`dropdown-content ${showTypeDropdown ? 'show' : ''}`}>
            <ul className="dropdown-menu">
              {availableTypes.map(t => (
                <li key={t}>
                  <label>
                    <input
                      type="radio"
                      name="type"
                      checked={selectedType === t}
                      onChange={() => handleTypeSelect(t)}
                    /> {t}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="products-section">
        {isLoading ? (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : displayProducts.length > 0 ? (
          <div className="product-cards">
            {displayProducts.map(prod => (
              <div key={prod.id} className="product-card" onClick={() => handleImageClick(prod)}>
                <div className="product-content">
                  <div className="product-image-container">
                    <img src={prod.image_url} alt={prod.model_name} className="product-img" />
                  </div>
                  <div className='product-info-container'>
                  <div className="product-info">
                    <h4>{prod.model_name}</h4>
                    <p>{prod.brand} — {prod.product_type}</p>
                  </div>
                  <div
                    className="cart-icon-container"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(prod);
                    }}
                  >
                    <div className="cart-with-plus">
                      <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
                      <FontAwesomeIcon icon={faPlusCircle} className="plus-icon" />
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-results">No products found.</p>
        )}

        {showPopup && <Popup product={selectedProduct} onClose={handleClosePopup} />}

        {addedToCartMessage && (
          <div className="add-to-cart-popup">
            {addedToCartMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPager;
