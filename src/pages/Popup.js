import React from 'react';
import './Popup.css';

const Popup = ({ product, onClose, onRequestQuote }) => {
  if (!product) return null;

  const handleAddToCart = () => onRequestQuote(product);

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>×</button>

        <h2 className="popup-product-name">{product.title}</h2>

        {/* Image strip  */}
        <div className="popup-image-strip">
          {product.images.map((url, idx) => (
            <img key={idx} src={url} alt={`${product.title} ${idx + 1}`} className="popup-img" />
          ))}
        </div>

        {product.description && <p className="popup-product-desc">{product.description}</p>}

        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Type:</strong> {product.product_type}</p>

        <button className="add-to-cart-btn-ganesh" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Popup;
