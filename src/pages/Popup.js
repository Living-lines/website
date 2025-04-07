import React from 'react';
import './Popup.css';

const Popup = ({ onClose }) => {
  return (
    <div className="popupg-overlay">
      <div className="popupg-container">
        <div className="containerg">
          <div className="headingg">Request Quote</div>
          <form className="formg" action="">
            <input
              placeholder="E-mail"
              id="email"
              name="email"
              type="email"
              className="inputg"
              required
            />
            <input
              placeholder="Phone Number"
              id="phone"
              name="phone"
              type="tel"
              className="inputg"
              required
            />
            <input value="Send" type="submit" className="sendg-button" />
          </form>
          <span className="agreementg">
            <a href="#">Learn user licence agreement</a>
          </span>
        </div>
        <button className="closeg-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
};

export default Popup;
