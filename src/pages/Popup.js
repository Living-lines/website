import React from 'react';
import './Popup.css';

const Popup = ({ product, onClose, onRequestQuote, isLoading, quoteStatus }) => {

  const handleAddToCart = () => {
    onRequestQuote(product);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2 className="popup-product-name">{product?.model_name}</h2>

        <img src={product?.image_url} alt={product?.model_name} className="popup-img" />

        {/* ✅ Add description below the image */}
        {product?.description && (
          <p className="popup-product-desc">
            {product.description}
          </p>
        )}

        <p><strong>Brand:</strong> {product?.brand}</p>
        <p><strong>Type:</strong> {product?.product_type}</p>

        <button className="add-to-cart-btn-ganesh" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Popup;
