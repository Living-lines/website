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
  const [isLoading, setIsLoading] = useState(false);
  const [quoteStatus, setQuoteStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // Store search query

  const fetchProducts = () => {
    const params = new URLSearchParams();
    if (selectedBrand) params.set('brand', selectedBrand);  // Send selected brand to the API
    if (selectedType) params.set('product_type', selectedType);  // Send selected type to the API
    if (searchQuery) params.set('search', searchQuery);  // Send search query to the API

    fetch(`${API_BASE}/api/products?${params.toString()}`)
      .then(res => res.json())
      .then(data => setDynamicProducts(data))  // Set filtered products in state
      .catch(err => console.error('❌ Fetch products error:', err));
  };

  useEffect(() => {
    fetch(`${API_BASE}/api/products`)
      .then(res => res.json())
      .then(data => {
        setDynamicProducts(data);
        const brands = Array.from(new Set(data.map(p => p.brand).filter(Boolean)));
        setAvailableBrands(brands);
        const types = Array.from(new Set(data.map(p => p.product_type).filter(Boolean)));
        setAvailableTypes(types);
      })
      .catch(err => console.error('❌ Initial fetch error:', err));
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [selectedBrand, selectedType, searchQuery]);  // Re-fetch when any filter or search query changes

  const handleBrandSelect = (brand) => {
    setSelectedBrand(prev => prev === brand ? '' : brand);
    setShowBrandDropdown(false);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(prev => prev === type ? '' : type);
    setShowTypeDropdown(false);
  };

  const handleImageClick = (prod) => {
    setSelectedProduct(prod);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  const handleRequestQuote = () => {
    setIsLoading(true);
    setQuoteStatus('');

    // Construct the data to send in the POST request
    const quoteData = {
      product_id: selectedProduct.id,
      product_name: selectedProduct.model_name,
      product_brand: selectedProduct.brand,
      product_type: selectedProduct.product_type,
      image_url: selectedProduct.image_url,
    };

    fetch(`${API_BASE}/api/quotes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData),
    })
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        if (data.success) {
          setQuoteStatus('Quote submitted successfully!');
        } else {
          setQuoteStatus('Failed to submit the quote.');
        }
      })
      .catch(err => {
        setIsLoading(false);
        setQuoteStatus('Error submitting the quote.');
        console.error('❌ Quote submission error:', err);
      });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="products-pager">
      {/* Search Bar */}
      <div className="filters-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by model, brand, or type..."
            value={searchQuery}
            onChange={handleSearchChange}
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

      {/* Product Grid */}
      <div className="products-section">
        <div className="product-cards">
          {dynamicProducts.length > 0 ? (
            dynamicProducts.map(prod => (
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
            ))
          ) : (
            <p>No products found for your search.</p>
          )}
        </div>

        {showPopup && (
          <Popup
            product={selectedProduct}
            onClose={handleClosePopup}
            onRequestQuote={handleRequestQuote}
            isLoading={isLoading}
            quoteStatus={quoteStatus}
          />
        )}
      </div>
    </div>
  );
};

export default ProductPager;
