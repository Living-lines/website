import React, { useState, useEffect } from 'react';
import './ProductPage.css';
import Popup from './Popup';

const API_BASE = 'http://localhost:3000';

const ProductPager = () => {
  const [dynamicProducts, setDynamicProducts] = useState([]);
  const [availableBrands, setAvailableBrands] = useState([]);
  const [availableTypes, setAvailableTypes] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch helper
  const fetchProducts = () => {
    const params = new URLSearchParams();
    if (selectedBrand)    params.set('brand', selectedBrand);
    if (selectedType)     params.set('product_type', selectedType);
    if (searchQuery)      params.set('search', searchQuery);

    setIsLoading(true);
    fetch(`${API_BASE}/api/products?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        setDynamicProducts(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('❌ Fetch products error:', err);
        setIsLoading(false);
      });
  };

  // Initial load — also gather filter options
  useEffect(() => {
    fetch(`${API_BASE}/api/products`)
      .then(res => res.json())
      .then(data => {
        setDynamicProducts(data);
        setAvailableBrands(Array.from(new Set(data.map(p => p.brand).filter(Boolean))));
        setAvailableTypes(Array.from(new Set(data.map(p => p.product_type).filter(Boolean))));
        setIsLoading(false);
      })
      .catch(err => {
        console.error('❌ Initial fetch error:', err);
        setIsLoading(false);
      });
  }, []);

  // Re-fetch when filters/search change
  useEffect(fetchProducts, [selectedBrand, selectedType, searchQuery]);

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
      {/* Filters & Search */}
      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by model, brand, or type..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="dropdown">
          <button onClick={() => setShowBrandDropdown(v => !v)}>
            Brand {selectedBrand && `: ${selectedBrand}`}
          </button>
          {showBrandDropdown && (
            <ul className="dropdown-menu">
              {availableBrands.map(b => (
                <li key={b}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedBrand === b}
                      onChange={() => handleBrandSelect(b)}
                    /> {b}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="dropdown">
          <button onClick={() => setShowTypeDropdown(v => !v)}>
            Type {selectedType && `: ${selectedType}`}
          </button>
          {showTypeDropdown && (
            <ul className="dropdown-menu">
              {availableTypes.map(t => (
                <li key={t}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedType === t}
                      onChange={() => handleTypeSelect(t)}
                    /> {t}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Products / Loading / Empty State */}
      <div className="products-section">
        {isLoading ? (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : dynamicProducts.length > 0 ? (
          <div className="product-cards">
            {dynamicProducts.map(prod => (
              <div
                key={prod.id}
                className="product-card"
                onClick={() => handleImageClick(prod)}
              >
                <img
                  src={prod.image_url}
                  alt={prod.model_name}
                  className="product-img"
                />
                <div className="product-info">
                  <h4>{prod.model_name}</h4>
                  <p>{prod.brand} — {prod.product_type}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-results">No products found for your search.</p>
        )}

        {showPopup && (
          <Popup
            product={selectedProduct}
            onClose={handleClosePopup}
          />
        )}
      </div>
    </div>
  );
};

export default ProductPager;
