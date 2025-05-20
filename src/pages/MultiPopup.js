import React, { useState } from 'react';
import './Popup.css';

const MultiPopup = ({ cartItems, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const userData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
    };

    const validItems = cartItems.filter(item =>
      item.id &&
      item.name && item.name.trim() &&
      item.brand && item.brand.trim() &&
      item.type && item.type.trim() &&
      item.image && item.image.trim()
    );

    if (validItems.length === 0) {
      alert(' No valid items to submit. Please check cart items.');
      setIsSubmitting(false);
      return;
    }

    try {
      const responses = await Promise.all(
        validItems.map(item =>
          fetch('https://backend-tawny-one-62.vercel.app/api/quotes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...userData,
              product_id: item.id,
              product_name: item.name,
              product_brand: item.brand,
              product_type: item.type,
              image_url: item.image,
              requested_at: new Date().toISOString()
            })
          })
        )
      );

      const failed = responses.filter(res => !res.ok);
      if (failed.length > 0) {
        alert(`⚠️ ${failed.length} out of ${validItems.length} quotes failed to send.`);
      } else {
        setShowSuccessMessage(true);
      }
    } catch (error) {
      console.error(' Error submitting quotes:', error);
      alert(' Failed to send quotes. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Request Quote</h2>

        {!isSubmitting && !showSuccessMessage && (
          <form onSubmit={handleSubmit}>
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
              type="submit"
              disabled={!name || !email || !phone}
            >
              Submit Quote
            </button>
          </form>
        )}

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

export default MultiPopup;
