import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ onClose, product }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const quoteData = {
      ...formData,
      product_id: product?.id,
      product_name: product?.name,
      product_brand: product?.brand,
      product_type: product?.type,
      image_url: product?.image,
    };

    try {
      const response = await fetch('http://localhost:3000/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quoteData),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('Backend error:', error);
        alert(`❌ Backend Error: ${error.error || 'Unknown error'}`);
        return;
      }

      const result = await response.json();
      console.log('✅ Quote submitted:', result);
      alert('✅ Quote request submitted successfully!');
      onClose();
    } catch (error) {
      console.error('❌ Request failed:', error);
      alert('❌ Network error: ' + error.message);
    }
  };

  return (
    <div className="popupg-overlay">
      <div className="popupg-container">
        <div className="containerg">
          <div className="headingg">Request Quote</div>
          <form className="formg" onSubmit={handleSubmit}>
            <input
              placeholder="Full Name"
              name="name"
              type="text"
              className="inputg"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              placeholder="E-mail"
              name="email"
              type="email"
              className="inputg"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              placeholder="Phone Number"
              name="phone"
              type="tel"
              className="inputg"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input value="Send" type="submit" className="sendg-button" />
          </form>
          <span className="agreementg">
            <button type="button" className="link-button">Learn user licence agreement</button>
          </span>
        </div>
        <button className="closeg-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Popup;
