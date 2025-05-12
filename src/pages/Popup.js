import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ product, onClose, onRequestQuote, isLoading, quoteStatus }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Simulate the quote submission process (e.g., make an API call here)
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessMessage(true); // Show the success message
      onRequestQuote(); // Trigger callback after form submission
    }, 3000); // Simulate 3-second loading
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{product?.model_name}</h2>
        <img src={product?.image_url} alt={product?.model_name} className="popup-img" />
        <p><strong>Brand:</strong> {product?.brand}</p>
        <p><strong>Type:</strong> {product?.product_type}</p>

        {/* Show form initially */}
        {!isSubmitting && !showSuccessMessage ? (
          <div>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

        {/* Show loading spinner */}
        {isSubmitting && (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        )}

        {/* Show success message after submission */}
        {showSuccessMessage && !isSubmitting && (
          <p className="quote-status">Quote successfully requested!</p>
        )}
      </div>
    </div>
  );
};

export default Popup;
