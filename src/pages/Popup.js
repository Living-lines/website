import React, { useState } from 'react';
import './Popup.css';

{/*const Popup = ({ product, onClose, onRequestQuote, isLoading, quoteStatus }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Handle form submission with API call for quote
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const quoteData = {
      name,
      email,
      phone,
      product_id: product?.id,
      product_name: product?.model_name,
      product_brand: product?.brand,
      product_type: product?.product_type,
      image_url: product?.image_url,
    };

    try {
      const response = await fetch('https://backend-tawny-one-62.vercel.app/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Backend error:', error);
        return;
      }

      const result = await response.json();
      console.log('✅ Quote submitted:', result);
      
      // Stop submitting, show success message
      setIsSubmitting(false);
      setShowSuccessMessage(true);

      // Trigger callback after form submission
      onRequestQuote(); 
    } catch (error) {
      setIsSubmitting(false);
      console.error('❌ Request failed:', error);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2 className="popup-product-name">{product?.model_name}</h2>
        <img src={product?.image_url} alt={product?.model_name} className="popup-img" />
        <p><strong>Brand:</strong> {product?.brand}</p>
        <p><strong>Type:</strong> {product?.product_type}</p>

        {!isSubmitting && !showSuccessMessage ? (
          <div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <button
              className="request-quote-btn"
              onClick={handleSubmit}
              disabled={isLoading || !name || !email || !phone}
            >
              {isLoading ? 'Submitting...' : 'Submit Quote'}
            </button>
          </div>
        ) : null}

        {isSubmitting && (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        )}

        {showSuccessMessage && !isSubmitting && (
          <p className="quote-status">We will contact you soon!</p>
        )}
      </div>
    </div>
  );
};
*/}

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
        <p><strong>Brand:</strong> {product?.brand}</p>
        <p><strong>Type:</strong> {product?.product_type}</p>

        <button className="add-to-cart-btn-ganesh" onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};



export default Popup;
