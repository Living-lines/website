import React, { useState, useEffect } from 'react';
import './ProductPage.css';
import Popup from './Popup';
import { useLocation, useNavigate } from 'react-router-dom';

const API_BASE = 'https://backend-tawny-one-62.vercel.app';

const ProductPager = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  // read initial search, brand, type from URL
  const initialSearch = params.get('search') || '';
  const initialBrand  = params.get('brand')  || '';
  const initialType   = params.get('type')   || '';

  // state
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

  // client-side helper for search
  const filterProducts = (products, keyword) => {
    const q = keyword.toLowerCase();
    return products.filter(p =>
      (p.brand         && p.brand.toLowerCase().includes(q)) ||
      (p.product_type  && p.product_type.toLowerCase().includes(q)) ||
      (p.model_name    && p.model_name.toLowerCase().includes(q)) ||
      (p.description   && p.description.toLowerCase().includes(q)) ||
      (p.category      && p.category.toLowerCase().includes(q)) ||
      (p.title         && p.title.toLowerCase().includes(q))
    );
  };

  // 1️⃣ Initial load: get *all* products + dropdown options + apply initial search
  useEffect(() => {
    fetch(`${API_BASE}/api/products`)
      .then(res => res.json())
      .then(data => {
        setDynamicProducts(data);
        setAvailableBrands([...new Set(data.map(p => p.brand).filter(Boolean))]);
        setAvailableTypes ([...new Set(data.map(p => p.product_type).filter(Boolean))]);
        // apply initial search (if any)
        setDisplayProducts(
          initialSearch ? filterProducts(data, initialSearch) : data
        );
        setIsLoading(false);
      })
      .catch(err => {
        console.error('❌ Initial fetch error:', err);
        setIsLoading(false);
      });
  }, []); // run once

  // 2️⃣ Keep URL in sync with filters & search
  useEffect(() => {
    const qs = new URLSearchParams();
    if (searchText)   qs.set('search', searchText);
    if (selectedBrand) qs.set('brand',   selectedBrand);
    if (selectedType)  qs.set('type',    selectedType);
    navigate(`/products?${qs.toString()}`, { replace: true });
  }, [searchText, selectedBrand, selectedType, navigate]);

  // 3️⃣ Re-fetch server-side when brand/type change
  useEffect(() => {
    setIsLoading(true);
    const qs = new URLSearchParams();
    if (selectedBrand) qs.set('brand',   selectedBrand);
    if (selectedType)  qs.set('product_type', selectedType);

    fetch(`${API_BASE}/api/products?${qs.toString()}`)
      .then(res => res.json())
      .then(data => {
        setDynamicProducts(data);
        // after server-filter, apply whatever searchText is
        setDisplayProducts(
          searchText ? filterProducts(data, searchText) : data
        );
        setIsLoading(false);
      })
      .catch(err => {
        console.error('❌ Fetch products error:', err);
        setIsLoading(false);
      });
  }, [selectedBrand, selectedType]);

  // 4️⃣ Client-side search on whatever `dynamicProducts` currently holds
  useEffect(() => {
    setDisplayProducts(
      searchText
        ? filterProducts(dynamicProducts, searchText)
        : dynamicProducts
    );
  }, [searchText, dynamicProducts]);

  // handlers
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
      <div className="filters-section">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by model, brand, or type..."
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Brand Dropdown */}
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
                    />{' '}
                    {b}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Type Dropdown */}
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
                    />{' '}
                    {t}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="products-section">
        {isLoading ? (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : displayProducts.length > 0 ? (
          <div className="product-cards">
            {displayProducts.map(prod => (
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
                  <p>
                    {prod.brand} — {prod.product_type}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-results">No products found.</p>
        )}

        {showPopup && (
          <Popup product={selectedProduct} onClose={handleClosePopup} />
        )}
      </div>
    </div>
  );
};

export default ProductPager;
