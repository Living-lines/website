import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import './ProductPage.css';
import Popup from './Popup';
import { useLocation, useNavigate } from 'react-router-dom';
import cartSymbol from '../assets/final-cart1.png';

const API_BASE = 'https://backend-tawny-one-62.vercel.app';
const safeImages = p =>
  Array.isArray(p.images) && p.images.length ? p.images
  : p.image_url ? [p.image_url]
  : ['/placeholder.jpg'];

const ProductPager = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const [addedToCartMessage, setAddedToCartMessage] = useState('');

  const getFirstImageFromProduct = (p) => {
    const fromArray =
      Array.isArray(p?.images) && typeof p.images[0] === 'string' && p.images[0].trim()
        ? p.images[0].trim()
        : '';
    const single = typeof p?.image_url === 'string' ? p.image_url.trim() : '';
    return fromArray || single || '';
  };

  const handleAddToCart = (prod) => {
    const currentCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const firstImage = getFirstImageFromProduct(prod);
    const itemIndex = currentCart.findIndex((item) => item.id === prod.id);
    if (itemIndex >= 0) {
      currentCart[itemIndex].quantity += 1;
      if (!currentCart[itemIndex].image && firstImage) {
        currentCart[itemIndex].image = firstImage;
      }
    } else {
      currentCart.push({
        id: prod.id,
        name: prod.model_name || prod.title || prod.product_type || 'Product',
        brand: prod.brand,
        type: prod.product_type,
        image: firstImage,
        quantity: 1,
      });
    }
    localStorage.setItem('cartItems', JSON.stringify(currentCart));
    setShowPopup(false);
    setAddedToCartMessage(`${prod.brand} ${prod.product_type} added to cart!`);
    setTimeout(() => setAddedToCartMessage(''), 2000);
  };

  const initialSearch = params.get('search') || '';
  const initialBrand = params.get('brand') || '';
  const initialType = params.get('type') || '';

  const [dynamicProducts, setDynamicProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [availableBrands, setAvailableBrands] = useState([]);
  const [availableTypes, setAvailableTypes] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchText, setSearchText] = useState(initialSearch);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [showTypeDropdown, setShowTypeDropdown] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [availableTiles, setAvailableTiles] = useState([]);
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [showTileDropdown, setShowTileDropdown] = useState(false);

  const handleTileSelect = tile => {
    setSelectedTiles(prevSelected =>
      prevSelected.includes(tile)
        ? prevSelected.filter(t => t !== tile)
        : [...prevSelected, tile]
    );
  };

  useEffect(() => {
    fetch(`${API_BASE}/api/products/tilestypes`)
      .then(res => res.json())
      .then(data => setAvailableTiles(Array.isArray(data) ? data : []))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const p = new URLSearchParams(location.search);
    setSearchText(p.get('search') || '');
  }, [location.search]);

  const filterProducts = (products, selectedBrands, selectedTypes, selectedTiles, keyword) => {
    const q = keyword.toLowerCase();
    return products.filter(p =>
      (selectedBrands.length === 0 || selectedBrands.includes(p.brand)) &&
      (selectedTypes.length === 0 || selectedTypes.includes(p.product_type)) &&
      (selectedTiles.length === 0 || selectedTiles.includes(p.tilestype)) &&
      ((p.brand && p.brand.toLowerCase().includes(q)) ||
        (p.product_type && p.product_type.toLowerCase().includes(q)) ||
        (p.model_name && p.model_name.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q)) ||
        (p.title && p.title.toLowerCase().includes(q)))
    );
  };

  useEffect(() => {
    fetch(`${API_BASE}/api/products`)
      .then(res => res.json())
      .then(data => {
        setDynamicProducts(data);
        setAvailableBrands([...new Set(data.map(p => p.brand).filter(Boolean))]);
        setAvailableTypes([...new Set(data.map(p => p.product_type).filter(Boolean))]);
        setDisplayProducts(initialSearch ? filterProducts(data, selectedBrands, selectedTypes, selectedTiles, initialSearch) : data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const qs = new URLSearchParams();
    if (searchText) qs.set('search', searchText);
    if (selectedBrands.length > 0) qs.set('brand', selectedBrands.join(','));
    if (selectedTypes.length > 0) qs.set('type', selectedTypes.join(','));
    navigate(`/products?${qs.toString()}`, { replace: true });
  }, [searchText, selectedBrands, selectedTypes, navigate]);

  useEffect(() => {
    setIsLoading(true);
    const filteredProducts = filterProducts(dynamicProducts, selectedBrands, selectedTypes, selectedTiles, searchText);
    setDisplayProducts(filteredProducts);
    setIsLoading(false);
  }, [selectedBrands, selectedTypes, selectedTiles, searchText, dynamicProducts]);

  useEffect(() => {
    setDisplayProducts(searchText ? filterProducts(dynamicProducts, selectedBrands, selectedTypes, selectedTiles, searchText) : dynamicProducts);
  }, [searchText, dynamicProducts]);

  const handleBrandSelect = brand => {
    setSelectedBrands(prevSelected =>
      prevSelected.includes(brand)
        ? prevSelected.filter(b => b !== brand)
        : [...prevSelected, brand]
    );
  };

  const handleTypeSelect = type => {
    setSelectedTypes(prevSelected =>
      prevSelected.includes(type)
        ? prevSelected.filter(t => t !== type)
        : [...prevSelected, type]
    );
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
        <div className="filter-search">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Search by model, brandproduct, or type..."
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              className="filter-search-input"
            />
            {searchText && (
              <span className="clear-icon" onClick={() => setSearchText('')}>&times;</span>
            )}
          </div>
        </div>

        <div className="filter-dropdown brand-dropdown">
          <button className="dropdown-toggle" onClick={() => setShowBrandDropdown(v => !v)}>
            Brand {selectedBrands.length > 0 && `: ${selectedBrands.join(', ')}`}
            <FontAwesomeIcon icon={showBrandDropdown ? faChevronUp : faChevronDown} className="arrow-icon" />
          </button>
          <div className={`dropdown-content ${showBrandDropdown ? 'show' : ''}`}>
            <ul className="dropdown-menu">
              {availableBrands.map(b => (
                <li key={b}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(b)}
                      onChange={() => handleBrandSelect(b)}
                    /> {b}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="filter-dropdown type-dropdown">
          <button className="dropdown-toggle" onClick={() => setShowTypeDropdown(v => !v)}>
            Type {selectedTypes.length > 0 && `: ${selectedTypes.join(', ')}`}
            <FontAwesomeIcon icon={showTypeDropdown ? faChevronUp : faChevronDown} className="arrow-icon" />
          </button>
          <div className={`dropdown-content ${showTypeDropdown ? 'show' : ''}`}>
            <ul className="dropdown-menu">
              {availableTypes.map(t => (
                <li key={t}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(t)}
                      onChange={() => handleTypeSelect(t)}
                    /> {t}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="filter-dropdown tile-dropdown">
          <button className="dropdown-toggle" onClick={() => setShowTileDropdown(v => !v)}>
            Tiles {selectedTiles.length > 0 && `: ${selectedTiles.join(', ')}`}
            <FontAwesomeIcon icon={showTileDropdown ? faChevronUp : faChevronDown} className="arrow-icon" />
          </button>
          <div className={`dropdown-content ${showTileDropdown ? 'show' : ''}`}>
            <ul className="dropdown-menu">
              {availableTiles.map(tile => (
                <li key={tile}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedTiles.includes(tile)}
                      onChange={() => handleTileSelect(tile)}
                    /> {tile}
                  </label>
                </li>
              ))}
            </ul>
          </div>
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
              <div key={prod.id} className="product-card" onClick={() => handleImageClick(prod)}>
                <div className="product-content">
                  <div className="product-image-container">
                    <img src={safeImages(prod)[0]} alt={`${prod.brand} ${prod.product_type}`} className="product-img" />
                  </div>
                  <div className="product-info-container">
                    <div className="product-info">
                      <h4>{prod.brand} — {prod.model_name || ''}</h4>
                      <div style={{ fontWeight: 400, fontSize: '0.9rem', textTransform: 'lowercase' }}>
                        {(prod.product_type || '').toLowerCase()}
                      </div>
                    </div>
                    <div className="cart-icon-container" onClick={(e) => { e.stopPropagation(); handleAddToCart(prod); }}>
                      <div className="cart-with-plus">
                        <img src={cartSymbol} alt="Add to Cart" className="cart-image" />
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

        {showPopup && <Popup product={selectedProduct} onClose={handleClosePopup} onRequestQuote={handleAddToCart} />}

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
