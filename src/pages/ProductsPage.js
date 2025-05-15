import React, { useState, useEffect } from 'react';
import './ProductPage.css';
import Popup from './Popup';
import { useLocation } from 'react-router-dom';

const API_BASE = 'https://backend-tawny-one-62.vercel.app';

const ProductPager = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const initialKeyword = params.get('search') || '';

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [availableBrands, setAvailableBrands] = useState([]);
  const [availableTypes, setAvailableTypes] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [userSearching, setUserSearching] = useState(false);


  // Fetch helper
  /*const fetchProducts = () => {
    const params = new URLSearchParams();
    if (selectedBrand)    params.set('brand', selectedBrand);
    if (selectedType)     params.set('product_type', selectedType);
    if (searchQuery)      params.set('search', searchQuery);

    setIsLoading(true);
    fetch(`${API_BASE}/api/products?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        const filtered = searchQuery
    ? data.filter(prod => prod.brand.toLowerCase() === searchQuery.toLowerCase())
    : data;
  setDynamicProducts(filtered);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('❌ Fetch products error:', err);
        setIsLoading(false);
      });
  }; */

  // ProductsPage.js (fetchProducts with query filtering)
useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`${API_BASE}/api/products`);
        const data = await response.json();
        setAllProducts(data);

        // Populate dropdown filters
        setAvailableBrands(Array.from(new Set(data.map(p => p.brand).filter(Boolean))));
        setAvailableTypes(Array.from(new Set(data.map(p => p.product_type).filter(Boolean))));

        // Initial filter based on query param
        if (initialKeyword) {
          const filtered = filterProducts(data, initialKeyword);
          setFilteredProducts(filtered);
        } else {
          setFilteredProducts(data);
        }

        setIsLoading(false);
      } catch (err) {
        console.error('❌ Failed to fetch products:', err);
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [initialKeyword]);

  const filterProducts = (productsList, keyword) => {
    const q = keyword.toLowerCase();
    return productsList.filter(prod =>
      (prod.brand && prod.brand.toLowerCase().includes(q)) ||
      (prod.product_type && prod.product_type.toLowerCase().includes(q)) ||
      (prod.model_name && prod.model_name.toLowerCase().includes(q)) ||
      (prod.description && prod.description.toLowerCase().includes(q)) ||
      (prod.category && prod.category.toLowerCase().includes(q)) ||
      (prod.title && prod.title.toLowerCase().includes(q))
    );
  };

  useEffect(() => {
    if (!userSearching) return;
    if (searchText === '') {
      setFilteredProducts(allProducts);
    } else {
      const filtered = filterProducts(allProducts, searchText);
      setFilteredProducts(filtered);
    }
  }, [searchText, userSearching, allProducts]);

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
    if (!userSearching) {
      setUserSearching(true);
    }
  };

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
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products on this page..."
            value={searchText}
            onChange={handleSearchInputChange}
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

      <div className="products-section">
        {isLoading ? (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="product-cards">
            {filteredProducts.map(prod => (
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