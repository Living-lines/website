import React from 'react';
import './Popup.css';

const Popup = ({ product, onClose, onRequestQuote }) => {
  if (!product) return null;

  const handleAddToCart = () => onRequestQuote(product);
  const images = Array.isArray(product.images) && product.images.length
    ? product.images
    : (product.image_url ? [product.image_url] : []);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>×</button>

        <h2 className="popup-product-name">
          {product.title || product.model_name || product.product_type || 'Product'}
        </h2>

        <div className="popup-image-strip">
          {images.map((url, idx) => (
            <img key={idx} src={url} alt={`Image ${idx + 1}`} className="popup-img" />
          ))}
        </div>

        {product.description && <p className="popup-product-desc">{product.description}</p>}

        <p><strong>Brand:</strong> {product.brand || ''}</p>
        <p><strong>Type:</strong> {product.product_type || ''}</p>
        <p><strong>Model:</strong> {product.model_name || '-'}</p>

        <button className="add-to-cart-btn-ganesh" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Popup;
